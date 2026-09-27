// Client-side in-browser image converters using HTML5 Canvas

export interface ImageConversionResult {
  blob: Blob;
  width: number;
  height: number;
  originalSize: number;
  convertedSize: number;
}

export function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`Failed to read image "${file.name}". Ensure it is a valid image file.`));
    };
    img.src = url;
  });
}

/**
 * Converts JPG to PNG with full lossless transparency preservation
 */
export async function convertJpgToPng(file: File): Promise<ImageConversionResult> {
  const img = await loadImageFromFile(file);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('HTML5 Canvas context is not supported in this browser.');
  ctx.drawImage(img, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error('Failed to create PNG blob'));
        resolve({
          blob,
          width: img.naturalWidth,
          height: img.naturalHeight,
          originalSize: file.size,
          convertedSize: blob.size,
        });
      },
      'image/png'
    );
  });
}

/**
 * Converts PNG (or any image) to JPG with custom background color for transparency and quality
 */
export async function convertPngToJpg(
  file: File,
  quality = 0.92,
  backgroundColor = '#ffffff'
): Promise<ImageConversionResult> {
  const img = await loadImageFromFile(file);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('HTML5 Canvas context is not supported in this browser.');

  // Fill background to avoid transparent pixels becoming black in JPEG
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error('Failed to create JPG blob'));
        resolve({
          blob,
          width: img.naturalWidth,
          height: img.naturalHeight,
          originalSize: file.size,
          convertedSize: blob.size,
        });
      },
      'image/jpeg',
      quality
    );
  });
}

/**
 * Converts WebP to JPG or PNG
 */
export async function convertWebp(
  file: File,
  targetFormat: 'image/jpeg' | 'image/png',
  quality = 0.92,
  backgroundColor = '#ffffff'
): Promise<ImageConversionResult> {
  const img = await loadImageFromFile(file);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('HTML5 Canvas context is not supported.');

  if (targetFormat === 'image/jpeg') {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error('Conversion to target format failed'));
        resolve({
          blob,
          width: img.naturalWidth,
          height: img.naturalHeight,
          originalSize: file.size,
          convertedSize: blob.size,
        });
      },
      targetFormat,
      quality
    );
  });
}

/**
 * Converts any image (JPG/PNG/BMP/etc.) to WebP with custom quality
 */
export async function convertImageToWebp(file: File, quality = 0.85): Promise<ImageConversionResult> {
  const img = await loadImageFromFile(file);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('HTML5 Canvas context is not supported.');
  ctx.drawImage(img, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error('WebP conversion not supported in this browser'));
        resolve({
          blob,
          width: img.naturalWidth,
          height: img.naturalHeight,
          originalSize: file.size,
          convertedSize: blob.size,
        });
      },
      'image/webp',
      quality
    );
  });
}
