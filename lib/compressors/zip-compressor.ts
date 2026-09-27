import JSZip from 'jszip';

export interface ZipCompressionResult {
  blob: Blob;
  name: string;
  fileCount: number;
  originalTotalSize: number;
  totalUncompressedSize: number;
  zipSize: number;
  compressedSize: number;
  savedBytes: number;
  savedPercent: number;
  savingsPercent: number;
}

export type ZipCompressionLevel = 'store' | 'fast' | 'normal' | 'maximum';

export interface ZipArchiveOptions {
  zipName?: string;
  level?: ZipCompressionLevel;
}

export async function createZipArchive(
  files: File[],
  optionsOrLevel: ZipArchiveOptions | ZipCompressionLevel = 'normal',
  onProgress?: (percent: number) => void
): Promise<ZipCompressionResult> {
  const options: ZipArchiveOptions =
    typeof optionsOrLevel === 'string'
      ? { level: optionsOrLevel }
      : optionsOrLevel || {};

  const level = options.level || 'normal';
  const name = options.zipName || 'compressed-archive.zip';

  const zip = new JSZip();
  let totalUncompressedSize = 0;

  files.forEach((file) => {
    totalUncompressedSize += file.size;
    zip.file(file.name, file);
  });

  let compressionLevel = 6;
  if (level === 'store') compressionLevel = 0;
  else if (level === 'fast') compressionLevel = 1;
  else if (level === 'maximum') compressionLevel = 9;

  const blob = await zip.generateAsync(
    {
      type: 'blob',
      compression: level === 'store' ? 'STORE' : 'DEFLATE',
      compressionOptions: {
        level: compressionLevel,
      },
    },
    (metadata) => {
      if (onProgress) {
        onProgress(Math.round(metadata.percent));
      }
    }
  );

  const compressedSize = blob.size;
  const rawDiff = totalUncompressedSize - compressedSize;
  const savingsPercent = Math.max(0, Math.round((rawDiff / totalUncompressedSize) * 100));

  return {
    blob,
    name,
    fileCount: files.length,
    originalTotalSize: totalUncompressedSize,
    totalUncompressedSize,
    zipSize: compressedSize,
    compressedSize,
    savedBytes: Math.max(0, rawDiff),
    savedPercent: savingsPercent,
    savingsPercent,
  };
}
