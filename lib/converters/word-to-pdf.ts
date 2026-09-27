import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import mammoth from 'mammoth';

export async function convertWordToPdf(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const { value: rawText } = await mammoth.extractRawText({ arrayBuffer });

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const fontSize = 11;
  const lineHeight = 16;
  const margin = 50;
  const pageWidth = 595.28; // Standard A4 points
  const pageHeight = 841.89; // Standard A4 points
  const printableWidth = pageWidth - margin * 2;

  let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
  let currentY = pageHeight - margin;

  // Add document header
  currentPage.drawText(file.name.replace(/\.docx?$/i, ''), {
    x: margin,
    y: currentY,
    size: 16,
    font: boldFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  currentY -= 30;

  const rawParagraphs = rawText.split('\n');

  for (const para of rawParagraphs) {
    const trimmed = para.trim();
    if (!trimmed) {
      currentY -= lineHeight / 2;
      continue;
    }

    // Word wrap text
    const words = trimmed.split(' ');
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);

      if (testWidth > printableWidth && currentLine) {
        // Draw line
        if (currentY < margin + lineHeight) {
          currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
          currentY = pageHeight - margin;
        }

        currentPage.drawText(currentLine, {
          x: margin,
          y: currentY,
          size: fontSize,
          font,
          color: rgb(0.15, 0.15, 0.15),
        });

        currentY -= lineHeight;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      if (currentY < margin + lineHeight) {
        currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
        currentY = pageHeight - margin;
      }

      currentPage.drawText(currentLine, {
        x: margin,
        y: currentY,
        size: fontSize,
        font,
        color: rgb(0.15, 0.15, 0.15),
      });

      currentY -= lineHeight + 4;
    }
  }

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
}
