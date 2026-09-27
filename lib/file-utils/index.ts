// File utilities, size limits, and download helpers

export const FILE_LIMITS = {
  MAX_IMAGE_SIZE:
    typeof process !== 'undefined' && process.env.NEXT_PUBLIC_MAX_IMAGE_SIZE
      ? parseInt(process.env.NEXT_PUBLIC_MAX_IMAGE_SIZE, 10)
      : 25 * 1024 * 1024, // 25 MB
  MAX_PDF_SIZE:
    typeof process !== 'undefined' && process.env.NEXT_PUBLIC_MAX_PDF_SIZE
      ? parseInt(process.env.NEXT_PUBLIC_MAX_PDF_SIZE, 10)
      : 30 * 1024 * 1024, // 30 MB
  MAX_DOCUMENT_SIZE:
    typeof process !== 'undefined' && process.env.NEXT_PUBLIC_MAX_DOCUMENT_SIZE
      ? parseInt(process.env.NEXT_PUBLIC_MAX_DOCUMENT_SIZE, 10)
      : 30 * 1024 * 1024, // 30 MB
  MAX_ARCHIVE_INPUT_SIZE:
    typeof process !== 'undefined' && process.env.NEXT_PUBLIC_MAX_ARCHIVE_INPUT_SIZE
      ? parseInt(process.env.NEXT_PUBLIC_MAX_ARCHIVE_INPUT_SIZE, 10)
      : 50 * 1024 * 1024, // 50 MB
};

export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function validateFileSize(file: File, maxSize: number): { valid: boolean; error?: string } {
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `This file is larger than the maximum supported size of ${formatBytes(maxSize)}.`,
    };
  }
  if (file.size === 0) {
    return {
      valid: false,
      error: 'The selected file is empty (0 bytes).',
    };
  }
  return { valid: true };
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
}

export function getBaseFileName(filename: string): string {
  const idx = filename.lastIndexOf('.');
  return idx !== -1 ? filename.substring(0, idx) : filename;
}
