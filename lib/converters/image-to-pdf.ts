import { PDFDocument } from 'pdf-lib';

export interface ImageToPdfOptions {
  orientation: 'portrait' | 'landscape' | 'auto';
  pageSize: 'a4' | 'fit';
  margin: number;
}

export async function convertImagesToPdf(
  imageFiles: File[],
  options: ImageToPdfOptions = { orientation: 'portrait', pageSize: 'a4', margin: 20 }
): Promise<Blob> {
  const pdfDoc = await PDFDocument.create();

  const A4_WIDTH = 595.28;
  const A4_HEIGHT = 841.89;

  for (const file of imageFiles) {
    // Read image as ArrayBuffer
    // If WebP, convert to PNG first via canvas because pdf-lib embeds PNG/JPG natively
    let imageBytes: ArrayBuffer;
    let isPng = file.type === 'image/png';
    const isJpg = file.type === 'image/jpeg' || file.type === 'image/jpg';

    if (file.type === 'image/webp' || (!isPng && !isJpg)) {
      const convertedBlob = await rasterizeImageToBlob(file, 'image/png');
      imageBytes = await convertedBlob.arrayBuffer();
      isPng = true;
    } else {
      imageBytes = await file.arrayBuffer();
    }

    // Embed in pdf-lib
    const embeddedImage = isPng
      ? await pdfDoc.embedPng(imageBytes)
      : await pdfDoc.embedJpg(imageBytes);

    const imgWidth = embeddedImage.width;
    const imgHeight = embeddedImage.height;

    let targetPageWidth = A4_WIDTH;
    let targetPageHeight = A4_HEIGHT;

    if (options.pageSize === 'fit') {
      targetPageWidth = imgWidth + options.margin * 2;
      targetPageHeight = imgHeight + options.margin * 2;
    } else {
      // A4 orientation
      let isLandscape = options.orientation === 'landscape';
      if (options.orientation === 'auto') {
        isLandscape = imgWidth > imgHeight;
      }

      targetPageWidth = isLandscape ? A4_HEIGHT : A4_WIDTH;
      targetPageHeight = isLandscape ? A4_WIDTH : A4_HEIGHT;
    }

    const page = pdfDoc.addPage([targetPageWidth, targetPageHeight]);

    // Scale image proportionally within printable area
    const printableWidth = targetPageWidth - options.margin * 2;
    const printableHeight = targetPageHeight - options.margin * 2;

    const scale = Math.min(printableWidth / imgWidth, printableHeight / imgHeight, 1);
    const scaledWidth = imgWidth * scale;
    const scaledHeight = imgHeight * scale;

    const x = (targetPageWidth - scaledWidth) / 2;
    const y = (targetPageHeight - scaledHeight) / 2;

    page.drawImage(embeddedImage, {
      x,
      y,
      width: scaledWidth,
      height: scaledHeight,
    });
  }

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
}

function rasterizeImageToBlob(file: File, mimeType: 'image/png' | 'image/jpeg'): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas 2D context unavailable'));
        return;
      }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to rasterize image'));
      }, mimeType);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image for PDF conversion'));
    };

    img.src = url;
  });
}
