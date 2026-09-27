'use client';

import React, { useState, useRef } from 'react';
import {
  Upload,
  FileText,
  FileCheck,
  Download,
  AlertCircle,
  Loader2,
  ShieldCheck,
  ArrowRight,
  Check,
  Copy,
  Info,
} from 'lucide-react';
import { formatBytes, validateFileSize, downloadBlob, FILE_LIMITS } from '@/lib/file-utils';
import { convertPdfToWord } from '@/lib/converters/pdf-to-word';
import { convertWordToPdf } from '@/lib/converters/word-to-pdf';
import { extractTextFromPdf } from '@/lib/converters/pdf-text-extractor';
import { convertImagesToPdf, ImageToPdfOptions } from '@/lib/converters/image-to-pdf';
import {
  convertJpgToPng,
  convertPngToJpg,
  convertWebp,
  convertImageToWebp,
} from '@/lib/converters/image-converters';

export type ConverterType =
  | 'pdf-to-word'
  | 'word-to-pdf'
  | 'pdf-to-text'
  | 'image-to-pdf'
  | 'jpg-to-png'
  | 'png-to-jpg'
  | 'webp-converter'
  | 'image-to-webp';

export type ConverterMode = ConverterType;

export interface FileConverterWorkspaceProps {
  type?: ConverterType;
  mode?: ConverterMode;
  title?: string;
  toolName?: string;
  toolDescription?: string;
  accept?: string;
  multiple?: boolean;
}

export function FileConverterWorkspace({
  type: propType,
  mode,
  accept,
  multiple,
}: FileConverterWorkspaceProps) {
  const type: ConverterType = (propType || mode || 'pdf-to-word') as ConverterType;
  const resolvedAccept =
    accept ||
    (type === 'pdf-to-word' || type === 'pdf-to-text'
      ? '.pdf,application/pdf'
      : type === 'word-to-pdf'
      ? '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      : type === 'jpg-to-png'
      ? 'image/jpeg,.jpg,.jpeg'
      : type === 'png-to-jpg'
      ? 'image/png,.png'
      : type === 'webp-converter'
      ? 'image/webp,.webp'
      : 'image/jpeg,image/png,image/webp');
  const isMultiple = multiple !== undefined ? multiple : type === 'image-to-pdf';
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedBlob, setConvertedBlob] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string>('');
  const [extractedTextPreview, setExtractedTextPreview] = useState<string>('');
  const [copiedText, setCopiedText] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Conversion options
  const [imageToPdfOptions, setImageToPdfOptions] = useState<ImageToPdfOptions>({
    orientation: 'portrait',
    pageSize: 'a4',
    margin: 20,
  });
  const [quality, setQuality] = useState(0.9);
  const [targetWebpFormat, setTargetWebpFormat] = useState<'image/jpeg' | 'image/png'>('image/png');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const getMaxSize = () => {
    if (type.includes('pdf')) return FILE_LIMITS.MAX_PDF_SIZE;
    if (type.includes('word')) return FILE_LIMITS.MAX_DOCUMENT_SIZE;
    return FILE_LIMITS.MAX_IMAGE_SIZE;
  };

  const handleFileChange = (newFiles: FileList | null) => {
    if (!newFiles || newFiles.length === 0) return;
    setError(null);
    setConvertedBlob(null);
    setExtractedTextPreview('');

    const fileList = Array.from(newFiles);
    const maxSize = getMaxSize();

    for (const f of fileList) {
      const validation = validateFileSize(f, maxSize);
      if (!validation.valid) {
        setError(validation.error || 'Invalid file');
        return;
      }
    }

    if (multiple) {
      setFiles((prev) => [...prev, ...fileList]);
    } else {
      setFiles([fileList[0]]);
    }
  };

  const handleConvert = async () => {
    if (files.length === 0) return;
    setIsConverting(true);
    setProgress(15);
    setError(null);

    try {
      const primaryFile = files[0];
      const baseName = primaryFile.name.replace(/\.[^/.]+$/, '');

      setProgress(40);

      if (type === 'pdf-to-word') {
        const docxBlob = await convertPdfToWord(primaryFile);
        setProgress(90);
        setConvertedBlob(docxBlob);
        setConvertedFilename(`${baseName}.docx`);
      } else if (type === 'word-to-pdf') {
        const pdfBlob = await convertWordToPdf(primaryFile);
        setProgress(90);
        setConvertedBlob(pdfBlob);
        setConvertedFilename(`${baseName}.pdf`);
      } else if (type === 'pdf-to-text') {
        const buf = await primaryFile.arrayBuffer();
        const text = await extractTextFromPdf(buf);
        setProgress(90);
        const textBlob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        setConvertedBlob(textBlob);
        setConvertedFilename(`${baseName}.txt`);
        setExtractedTextPreview(text);
      } else if (type === 'image-to-pdf') {
        const pdfBlob = await convertImagesToPdf(files, imageToPdfOptions);
        setProgress(90);
        setConvertedBlob(pdfBlob);
        setConvertedFilename(files.length === 1 ? `${baseName}.pdf` : 'converted-images.pdf');
      } else if (type === 'jpg-to-png') {
        const res = await convertJpgToPng(primaryFile);
        setProgress(90);
        setConvertedBlob(res.blob);
        setConvertedFilename(`${baseName}.png`);
      } else if (type === 'png-to-jpg') {
        const res = await convertPngToJpg(primaryFile, quality);
        setProgress(90);
        setConvertedBlob(res.blob);
        setConvertedFilename(`${baseName}.jpg`);
      } else if (type === 'webp-converter') {
        const res = await convertWebp(primaryFile, targetWebpFormat, quality);
        setProgress(90);
        setConvertedBlob(res.blob);
        setConvertedFilename(`${baseName}.${targetWebpFormat === 'image/jpeg' ? 'jpg' : 'png'}`);
      } else if (type === 'image-to-webp') {
        const res = await convertImageToWebp(primaryFile, quality);
        setProgress(90);
        setConvertedBlob(res.blob);
        setConvertedFilename(`${baseName}.webp`);
      }

      setProgress(100);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Conversion failed. Please verify file integrity.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedBlob && convertedFilename) {
      downloadBlob(convertedBlob, convertedFilename);
    }
  };

  const handleReset = () => {
    setFiles([]);
    setConvertedBlob(null);
    setConvertedFilename('');
    setExtractedTextPreview('');
    setError(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCopyText = async () => {
    if (!extractedTextPreview) return;
    try {
      await navigator.clipboard.writeText(extractedTextPreview);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Privacy Banner */}
      <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
        <span>Your file is processed locally in your browser and is not uploaded to any server.</span>
      </div>

      {/* 2. Drag & Drop File Zone */}
      {files.length === 0 ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFileChange(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-2xl p-8 sm:p-12 text-center cursor-pointer bg-zinc-50/50 dark:bg-zinc-900/40 transition-all hover:bg-emerald-500/[0.02]"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={resolvedAccept}
            multiple={isMultiple}
            onChange={(e) => handleFileChange(e.target.files)}
            className="hidden"
          />
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <Upload className="w-6 h-6 stroke-[2.2]" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
            Drop your file{isMultiple ? 's' : ''} here, or <span className="text-emerald-600 dark:text-emerald-400 underline">Browse</span>
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5">
            Supported: {resolvedAccept} • Maximum file size: {formatBytes(getMaxSize())}
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>Selected File{files.length > 1 ? 's' : ''} ({files.length})</span>
            </div>
            <button
              type="button"
              onClick={handleReset}
              disabled={isConverting}
              className="text-xs text-zinc-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              Clear & Reset
            </button>
          </div>

          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {files.map((f, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate">{f.name}</span>
                  <span className="text-[11px] text-zinc-400 shrink-0">({formatBytes(f.size)})</span>
                </div>
                <FileCheck className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />
              </div>
            ))}
          </div>

          {/* Converter-specific configuration options */}
          {type === 'image-to-pdf' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-zinc-200 dark:border-zinc-800 text-xs">
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-1">Page Orientation</label>
                <select
                  value={imageToPdfOptions.orientation}
                  onChange={(e) =>
                    setImageToPdfOptions((prev) => ({
                      ...prev,
                      orientation: e.target.value as ImageToPdfOptions['orientation'],
                    }))
                  }
                  className="w-full p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs focus:ring-2 focus:ring-emerald-500/40"
                >
                  <option value="portrait">Portrait</option>
                  <option value="landscape">Landscape</option>
                  <option value="auto">Auto (Match Image)</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-1">Page Size</label>
                <select
                  value={imageToPdfOptions.pageSize}
                  onChange={(e) =>
                    setImageToPdfOptions((prev) => ({
                      ...prev,
                      pageSize: e.target.value as ImageToPdfOptions['pageSize'],
                    }))
                  }
                  className="w-full p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs focus:ring-2 focus:ring-emerald-500/40"
                >
                  <option value="a4">Standard A4</option>
                  <option value="fit">Fit to Image Size</option>
                </select>
              </div>
            </div>
          )}

          {(type === 'png-to-jpg' || type === 'image-to-webp') && (
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 space-y-1 text-xs">
              <div className="flex items-center justify-between font-semibold text-zinc-700 dark:text-zinc-300">
                <span>Output Quality</span>
                <span>{Math.round(quality * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
          )}

          {type === 'webp-converter' && (
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-4 text-xs">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Convert to:</span>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="webp-target"
                  checked={targetWebpFormat === 'image/png'}
                  onChange={() => setTargetWebpFormat('image/png')}
                  className="accent-emerald-500"
                />
                <span>PNG (Lossless)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="webp-target"
                  checked={targetWebpFormat === 'image/jpeg'}
                  onChange={() => setTargetWebpFormat('image/jpeg')}
                  className="accent-emerald-500"
                />
                <span>JPG (Compact)</span>
              </label>
            </div>
          )}

          {/* Action Button */}
          {!convertedBlob ? (
            <button
              type="button"
              onClick={handleConvert}
              disabled={isConverting}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all disabled:opacity-50"
            >
              {isConverting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Converting in browser ({progress}%)...</span>
                </>
              ) : (
                <>
                  <span>Convert Now</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          ) : (
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold truncate">
                  <FileCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="truncate">Ready: {convertedFilename}</span>
                  <span className="text-[11px] text-zinc-400 font-mono">({formatBytes(convertedBlob.size)})</span>
                </div>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-colors shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>

              {/* PDF to Text Preview Box */}
              {type === 'pdf-to-text' && extractedTextPreview && (
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2 text-[11px] font-semibold text-zinc-500">
                    <span>Extracted Text Preview</span>
                    <button
                      type="button"
                      onClick={handleCopyText}
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      {copiedText ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedText ? 'Copied' : 'Copy Text'}</span>
                    </button>
                  </div>
                  <pre className="font-mono text-zinc-800 dark:text-zinc-200 max-h-48 overflow-y-auto whitespace-pre-wrap leading-relaxed select-text">
                    {extractedTextPreview}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. Error Alert */}
      {error && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300">
          <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* 4. Formatting Notice Requirement for PDF -> Word */}
      {type === 'pdf-to-word' && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2 leading-relaxed">
          <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            <strong>Formatting Notice:</strong> Complex layouts, images, tables, and custom fonts may not convert perfectly.
          </span>
        </div>
      )}
    </div>
  );
}
