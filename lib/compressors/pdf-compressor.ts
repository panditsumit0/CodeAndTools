import { PDFDocument } from 'pdf-lib';

export type PdfCompressionLevel = 'low' | 'medium' | 'high';
export type CompressionLevel = PdfCompressionLevel;

export interface PdfCompressionResult {
  blob: Blob;
  name: string;
  originalSize: number;
  compressedSize: number;
  savedPercent: number;
  savedBytes: number;
  reductionPercent: number;
  isAlreadyOptimized: boolean;
  message: string;
}

export async function compressPdf(
  file: File,
  options?: { level?: PdfCompressionLevel } | PdfCompressionLevel
): Promise<PdfCompressionResult> {
  const level: PdfCompressionLevel =
    typeof options === 'string'
      ? options
      : options?.level || 'medium';

  const originalSize = file.size;
  const arrayBuffer = await file.arrayBuffer();

  const pdfDoc = await PDFDocument.load(arrayBuffer, {
    ignoreEncryption: true,
    updateMetadata: false,
  });

  // Strip non-essential metadata on medium and high compression
  if (level === 'medium' || level === 'high') {
    pdfDoc.setTitle('');
    pdfDoc.setAuthor('');
    pdfDoc.setSubject('');
    pdfDoc.setKeywords([]);
    pdfDoc.setProducer('DevForge PDF Compressor');
    pdfDoc.setCreator('DevForge');
  }

  // Save with stream compression options
  const compressedBytes = await pdfDoc.save({
    useObjectStreams: level !== 'low',
    addDefaultPage: false,
  });

  const compressedSize = compressedBytes.byteLength;
  const rawDiff = originalSize - compressedSize;
  const reductionPercent = Math.max(0, Math.round((rawDiff / originalSize) * 100));

  // If the file is already heavily optimized, compressedSize might be similar or slightly larger
  const isAlreadyOptimized = compressedSize >= originalSize * 0.98;

  let message = `Successfully compressed by ${reductionPercent}% (saved ${(rawDiff / 1024).toFixed(1)} KB).`;
  if (isAlreadyOptimized) {
    message = 'This PDF is already highly optimized. Further compression yields minimal or no size reduction.';
  }

  const finalBlob = new Blob([compressedBytes as unknown as BlobPart], { type: 'application/pdf' });
  const baseName = file.name.replace(/\.[^/.]+$/, '');
  const outName = `${baseName}-compressed.pdf`;

  return {
    blob: finalBlob,
    name: outName,
    originalSize,
    compressedSize: isAlreadyOptimized ? originalSize : compressedSize,
    savedPercent: isAlreadyOptimized ? 0 : reductionPercent,
    savedBytes: isAlreadyOptimized ? 0 : Math.max(0, rawDiff),
    reductionPercent: isAlreadyOptimized ? 0 : reductionPercent,
    isAlreadyOptimized,
    message,
  };
}
