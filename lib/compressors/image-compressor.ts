import { loadImageFromFile } from '../converters/image-converters';
import JSZip from 'jszip';

export interface ImageCompressionOptions {
  quality: number; // 10 to 100 or 0.1 to 1.0
  format?: 'original' | 'image/jpeg' | 'image/png' | 'image/webp';
  scale?: number;
  maxWidth?: number;
  maxHeight?: number;
  targetMimeType?: 'keep' | 'image/jpeg' | 'image/png' | 'image/webp';
}

export interface ImageCompressionResult {
  name: string;
  blob: Blob;
  originalSize: number;
  compressedSize: number;
  savedPercent: number;
  width?: number;
  height?: number;
}

export interface CompressedImageItem {
  id: string;
  file: File;
  name: string;
  originalSize: number;
  compressedBlob: Blob;
  compressedSize: number;
  savingsPercent: number;
  previewUrl: string;
  compressedPreviewUrl: string;
  width: number;
  height: number;
}

export async function compressSingleImage(
  file: File,
  options: ImageCompressionOptions
): Promise<CompressedImageItem> {
  const img = await loadImageFromFile(file);

  let targetWidth = img.naturalWidth;
  let targetHeight = img.naturalHeight;

  if (options.scale && options.scale > 0 && options.scale < 1) {
    targetWidth = Math.round(targetWidth * options.scale);
    targetHeight = Math.round(targetHeight * options.scale);
  }

  if (options.maxWidth && targetWidth > options.maxWidth) {
    const ratio = options.maxWidth / targetWidth;
    targetWidth = options.maxWidth;
    targetHeight = Math.round(targetHeight * ratio);
  }

  if (options.maxHeight && targetHeight > options.maxHeight) {
    const ratio = options.maxHeight / targetHeight;
    targetHeight = options.maxHeight;
    targetWidth = Math.round(targetWidth * ratio);
  }

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');

  let outputFormat = options.targetMimeType && options.targetMimeType !== 'keep'
    ? options.targetMimeType
    : options.format === 'original' || !options.format
    ? file.type
    : options.format;

  if (!outputFormat || outputFormat === 'application/octet-stream') {
    outputFormat = 'image/jpeg';
  }

  if (outputFormat === 'image/jpeg') {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetWidth, targetHeight);
  }

  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

  // Normalize quality from 10-100 or 0.1-1.0
  const qualityFactor = options.quality > 1 ? options.quality / 100 : options.quality;

  const compressedBlob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to compress image canvas'));
      },
      outputFormat,
      qualityFactor
    );
  });

  const originalSize = file.size;
  const compressedSize = compressedBlob.size;
  const savings = Math.max(0, Math.round(((originalSize - compressedSize) / originalSize) * 100));

  return {
    id: `${file.name}-${Date.now()}-${Math.random()}`,
    file,
    name: file.name,
    originalSize,
    compressedBlob,
    compressedSize,
    savingsPercent: savings,
    previewUrl: URL.createObjectURL(file),
    compressedPreviewUrl: URL.createObjectURL(compressedBlob),
    width: targetWidth,
    height: targetHeight,
  };
}

export async function compressImages(
  files: File[],
  options: ImageCompressionOptions
): Promise<ImageCompressionResult[]> {
  const results: ImageCompressionResult[] = [];
  for (const file of files) {
    const res = await compressSingleImage(file, options);
    // Determine proper file extension if format changed
    let ext = file.name.split('.').pop() || 'jpg';
    if (options.targetMimeType === 'image/webp') ext = 'webp';
    else if (options.targetMimeType === 'image/jpeg') ext = 'jpg';
    else if (options.targetMimeType === 'image/png') ext = 'png';

    const baseName = file.name.replace(/\.[^/.]+$/, '');
    const outName = `${baseName}-compressed.${ext}`;

    results.push({
      name: outName,
      blob: res.compressedBlob,
      originalSize: res.originalSize,
      compressedSize: res.compressedSize,
      savedPercent: res.savingsPercent,
      width: res.width,
      height: res.height,
    });
  }
  return results;
}

export async function createImagesZip(items: ImageCompressionResult[]): Promise<Blob> {
  const zip = new JSZip();

  items.forEach((item, idx) => {
    const filename = items.length === 1 ? item.name : `${idx + 1}-${item.name}`;
    zip.file(filename, item.blob);
  });

  return await zip.generateAsync({ type: 'blob' });
}

export const createZipFromCompressedImages = async (items: CompressedImageItem[]): Promise<Blob> => {
  const zip = new JSZip();
  items.forEach((item, idx) => {
    let ext = item.file.type.split('/')[1] || 'jpg';
    if (ext === 'jpeg') ext = 'jpg';
    const baseName = item.name.replace(/\.[^/.]+$/, '');
    const filename = `${baseName}-compressed-${idx + 1}.${ext}`;
    zip.file(filename, item.compressedBlob);
  });
  return await zip.generateAsync({ type: 'blob' });
};
