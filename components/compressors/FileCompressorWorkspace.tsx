"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  FileCheck,
  Download,
  Trash2,
  RefreshCw,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileArchive,
  Image as ImageIcon,
  FileText,
  Info,
} from "lucide-react";
import { formatBytes, validateFileSize, FILE_LIMITS, downloadBlob } from "@/lib/file-utils";
import {
  compressImages,
  createImagesZip,
  type ImageCompressionResult,
} from "@/lib/compressors/image-compressor";
import {
  compressPdf,
  type PdfCompressionResult,
  type PdfCompressionLevel,
} from "@/lib/compressors/pdf-compressor";
import {
  createZipArchive,
  type ZipCompressionResult,
} from "@/lib/compressors/zip-compressor";

export type CompressorMode = "image" | "pdf" | "zip";

interface FileCompressorWorkspaceProps {
  mode: CompressorMode;
  toolName: string;
  toolDescription: string;
}

export function FileCompressorWorkspace({
  mode,
  toolName,
  toolDescription,
}: FileCompressorWorkspaceProps) {
  // Common states
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Image compressor state
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imageQuality, setImageQuality] = useState(80);
  const [imageFormat, setImageFormat] = useState<"keep" | "image/jpeg" | "image/png" | "image/webp">("keep");
  const [imageScale, setImageScale] = useState(1);
  const [imageResults, setImageResults] = useState<ImageCompressionResult[]>([]);

  // PDF compressor state
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfLevel, setPdfLevel] = useState<PdfCompressionLevel>("medium");
  const [pdfResult, setPdfResult] = useState<PdfCompressionResult | null>(null);

  // ZIP compressor state
  const [zipFiles, setZipFiles] = useState<File[]>([]);
  const [zipArchiveName, setZipArchiveName] = useState("compressed-archive.zip");
  const [zipResult, setZipResult] = useState<ZipCompressionResult | null>(null);

  // Handlers for File Selection
  const handleFilesAdded = useCallback(
    (files: FileList | File[]) => {
      setError(null);
      const arr = Array.from(files);
      if (arr.length === 0) return;

      if (mode === "image") {
        const validImages: File[] = [];
        for (const file of arr) {
          const check = validateFileSize(file, FILE_LIMITS.MAX_IMAGE_SIZE);
          if (!check.valid) {
            setError(check.error || "File size exceeded");
            return;
          }
          if (!file.type.startsWith("image/")) {
            setError(`"${file.name}" is not an image file.`);
            return;
          }
          validImages.push(file);
        }
        setImageFiles((prev) => [...prev, ...validImages]);
        setImageResults([]);
      } else if (mode === "pdf") {
        const file = arr[0];
        const check = validateFileSize(file, FILE_LIMITS.MAX_PDF_SIZE);
        if (!check.valid) {
          setError(check.error || "File size exceeded");
          return;
        }
        if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
          setError("Please select a valid PDF file.");
          return;
        }
        setPdfFile(file);
        setPdfResult(null);
      } else if (mode === "zip") {
        const validFiles: File[] = [];
        for (const file of arr) {
          const check = validateFileSize(file, FILE_LIMITS.MAX_ARCHIVE_INPUT_SIZE);
          if (!check.valid) {
            setError(check.error || "File size exceeded");
            return;
          }
          validFiles.push(file);
        }
        setZipFiles((prev) => [...prev, ...validFiles]);
        setZipResult(null);
      }
    },
    [mode]
  );

  // Drag and Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleFilesAdded(e.dataTransfer.files);
    }
  };

  // Compression Actions
  const handleProcessImages = async () => {
    if (imageFiles.length === 0) return;
    setIsProcessing(true);
    setError(null);
    try {
      const results = await compressImages(imageFiles, {
        quality: imageQuality,
        scale: imageScale,
        targetMimeType: imageFormat,
      });
      setImageResults(results);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to compress images");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleProcessPdf = async () => {
    if (!pdfFile) return;
    setIsProcessing(true);
    setError(null);
    try {
      const result = await compressPdf(pdfFile, { level: pdfLevel });
      setPdfResult(result);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to compress PDF");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleProcessZip = async () => {
    if (zipFiles.length === 0) return;
    setIsProcessing(true);
    setError(null);
    try {
      const name = zipArchiveName.endsWith(".zip") ? zipArchiveName : `${zipArchiveName}.zip`;
      const result = await createZipArchive(zipFiles, { zipName: name });
      setZipResult(result);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to create ZIP");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadZipOfImages = async () => {
    if (imageResults.length === 0) return;
    try {
      const zipBlob = await createImagesZip(imageResults);
      downloadBlob(zipBlob, "compressed-images.zip");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to create ZIP");
    }
  };

  const resetAll = () => {
    setImageFiles([]);
    setImageResults([]);
    setPdfFile(null);
    setPdfResult(null);
    setZipFiles([]);
    setZipResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Total savings calculation for multi-image
  const totalOriginalSize = imageResults.reduce((acc, r) => acc + r.originalSize, 0);
  const totalCompressedSize = imageResults.reduce((acc, r) => acc + r.compressedSize, 0);
  const totalSavedBytes = totalOriginalSize - totalCompressedSize;
  const totalSavedPercent = totalOriginalSize > 0 ? (totalSavedBytes / totalOriginalSize) * 100 : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border/50">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {toolName}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            {toolDescription}
          </p>
        </div>

        {/* Privacy Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Processed locally in browser &bull; Zero server upload</span>
        </div>
      </div>

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Upload and Controls (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upload Dropzone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative flex flex-col items-center justify-center p-8 sm:p-12 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
              isDragging
                ? "border-primary bg-primary/5 scale-[1.01]"
                : "border-border/80 hover:border-primary/50 hover:bg-muted/30 bg-card/40"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple={mode !== "pdf"}
              accept={
                mode === "image"
                  ? "image/jpeg,image/png,image/webp"
                  : mode === "pdf"
                  ? "application/pdf"
                  : undefined
              }
              className="hidden"
              onChange={(e) => {
                if (e.target.files) handleFilesAdded(e.target.files);
              }}
            />

            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 shadow-inner">
              {mode === "image" && <ImageIcon className="w-8 h-8" />}
              {mode === "pdf" && <FileText className="w-8 h-8" />}
              {mode === "zip" && <FileArchive className="w-8 h-8" />}
            </div>

            <p className="text-base sm:text-lg font-semibold text-foreground text-center">
              Drag & drop your {mode === "pdf" ? "PDF" : "files"} here, or{" "}
              <span className="text-primary underline underline-offset-4">browse files</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {mode === "image" && "Supports JPG, PNG, and WebP (up to 25MB each). Multiple images allowed."}
              {mode === "pdf" && "Supports PDF documents up to 30MB."}
              {mode === "zip" && "Select multiple files to compress into a single ZIP archive."}
            </p>
          </div>

          {/* Mode Controls */}
          {mode === "image" && (
            <div className="p-5 rounded-xl border border-border/60 bg-card/60 space-y-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sliders className="w-4 h-4 text-primary" />
                <span>Compression & Resize Settings</span>
              </div>

              {/* Quality Slider */}
              <div>
                <div className="flex justify-between text-xs font-medium text-foreground mb-2">
                  <span>Quality ({imageQuality}%)</span>
                  <span className="text-muted-foreground">
                    {imageQuality > 80 ? "High Quality / Lower Savings" : imageQuality > 50 ? "Balanced (Recommended)" : "Maximum Savings"}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={imageQuality}
                  onChange={(e) => setImageQuality(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
                />
              </div>

              {/* Format & Scale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Convert Format
                  </label>
                  <select
                    value={imageFormat}
                    onChange={(e) => setImageFormat(e.target.value as "keep" | "image/jpeg" | "image/png" | "image/webp")}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="keep">Keep Original Format</option>
                    <option value="image/webp">WebP (Best Compression)</option>
                    <option value="image/jpeg">JPG / JPEG</option>
                    <option value="image/png">PNG</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Resize Dimensions
                  </label>
                  <select
                    value={imageScale}
                    onChange={(e) => setImageScale(Number(e.target.value))}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value={1}>100% (Original Dimensions)</option>
                    <option value={0.75}>75% Scale</option>
                    <option value={0.5}>50% Scale (High Savings)</option>
                    <option value={0.25}>25% Scale (Thumbnail)</option>
                  </select>
                </div>
              </div>

              {/* Action Button */}
              {imageFiles.length > 0 && (
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-muted-foreground">
                    {imageFiles.length} {imageFiles.length === 1 ? "image" : "images"} selected
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={resetAll}
                      disabled={isProcessing}
                      className="px-3 py-2 rounded-lg border border-border hover:bg-muted text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleProcessImages}
                      disabled={isProcessing}
                      className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-primary/20"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Compressing...</span>
                        </>
                      ) : (
                        <span>Compress {imageFiles.length} {imageFiles.length === 1 ? "Image" : "Images"}</span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {mode === "pdf" && (
            <div className="p-5 rounded-xl border border-border/60 bg-card/60 space-y-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sliders className="w-4 h-4 text-primary" />
                <span>PDF Compression Level</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(["low", "medium", "high"] as PdfCompressionLevel[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setPdfLevel(level)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      pdfLevel === level
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border/60 hover:border-primary/40 bg-background/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider capitalize">
                      {level}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-1">
                      {level === "low" && "Preserves high image quality & structural fonts."}
                      {level === "medium" && "Balanced compression for documents and reports."}
                      {level === "high" && "Maximum compression & metadata stripping."}
                    </div>
                  </button>
                ))}
              </div>

              {pdfFile && (
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">{pdfFile.name}</span>
                    <span className="text-muted-foreground">({formatBytes(pdfFile.size)})</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={resetAll}
                      disabled={isProcessing}
                      className="px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-xs font-medium text-muted-foreground hover:text-foreground"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleProcessPdf}
                      disabled={isProcessing}
                      className="px-4 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center gap-1.5"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Optimizing...</span>
                        </>
                      ) : (
                        <span>Compress PDF</span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {mode === "zip" && (
            <div className="p-5 rounded-xl border border-border/60 bg-card/60 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <FileArchive className="w-4 h-4 text-primary" />
                <span>ZIP Archive Settings</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Archive File Name
                </label>
                <input
                  type="text"
                  value={zipArchiveName}
                  onChange={(e) => setZipArchiveName(e.target.value)}
                  placeholder="compressed-archive.zip"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Selected Files List */}
              {zipFiles.length > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-medium text-foreground">
                    <span>Files to Bundle ({zipFiles.length})</span>
                    <span className="text-muted-foreground">
                      Total: {formatBytes(zipFiles.reduce((acc, f) => acc + f.size, 0))}
                    </span>
                  </div>
                  <div className="max-h-40 overflow-y-auto space-y-1.5 p-2 rounded-lg bg-background/50 border border-border/50 text-xs">
                    {zipFiles.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1 px-2 rounded hover:bg-muted/50">
                        <span className="truncate max-w-[280px] text-foreground">{file.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{formatBytes(file.size)}</span>
                          <button
                            onClick={() => setZipFiles(zipFiles.filter((_, i) => i !== idx))}
                            className="text-muted-foreground hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={resetAll}
                      disabled={isProcessing}
                      className="px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-xs font-medium text-muted-foreground"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleProcessZip}
                      disabled={isProcessing}
                      className="px-4 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center gap-1.5"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Creating ZIP...</span>
                        </>
                      ) : (
                        <span>Create ZIP Archive</span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-xs flex items-center gap-3">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Right: Results Panel (1 col) */}
        <div className="space-y-6">
          <div className="p-5 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Compression Results</span>
            </h2>

            {/* Empty State */}
            {!pdfResult && !zipResult && imageResults.length === 0 && (
              <div className="py-12 text-center text-muted-foreground">
                <FileCheck className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p className="text-xs">
                  Upload and compress your files to see original vs compressed stats, savings percentage, and download options.
                </p>
              </div>
            )}

            {/* Image Results */}
            {imageResults.length > 0 && (
              <div className="space-y-4">
                {/* Aggregate Banner */}
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 space-y-1 text-xs">
                  <div className="flex justify-between font-semibold text-foreground">
                    <span>Total Saved</span>
                    <span className="text-emerald-400">
                      {totalSavedPercent > 0 ? `${totalSavedPercent.toFixed(1)}%` : "0%"}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground text-[11px]">
                    <span>Original: {formatBytes(totalOriginalSize)}</span>
                    <span>Result: {formatBytes(totalCompressedSize)}</span>
                  </div>
                </div>

                {/* Batch ZIP Download */}
                {imageResults.length > 1 && (
                  <button
                    onClick={handleDownloadZipOfImages}
                    className="w-full py-2.5 px-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download All as ZIP</span>
                  </button>
                )}

                {/* Individual File Cards */}
                <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                  {imageResults.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-border/60 bg-background/50 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground truncate max-w-[160px]">
                          {item.name}
                        </span>
                        <span
                          className={`font-semibold text-[11px] ${
                            item.savedPercent > 0 ? "text-emerald-400" : "text-muted-foreground"
                          }`}
                        >
                          {item.savedPercent > 0 ? `-${item.savedPercent.toFixed(1)}%` : "0%"}
                        </span>
                      </div>

                      <div className="flex justify-between text-[11px] text-muted-foreground">
                        <span>{formatBytes(item.originalSize)}</span>
                        <span>&rarr;</span>
                        <span className="text-foreground">{formatBytes(item.compressedSize)}</span>
                      </div>

                      <button
                        onClick={() => downloadBlob(item.blob, item.name)}
                        className="w-full py-1 px-2 rounded bg-muted hover:bg-muted/80 text-foreground text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PDF Result */}
            {pdfResult && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border/60 bg-background/60 space-y-3 text-xs">
                  <div className="flex justify-between font-semibold text-foreground">
                    <span>PDF Size Reduction</span>
                    <span
                      className={
                        pdfResult.savedPercent > 0 ? "text-emerald-400 font-bold" : "text-muted-foreground"
                      }
                    >
                      {pdfResult.savedPercent > 0 ? `-${pdfResult.savedPercent.toFixed(1)}%` : "Already Optimized"}
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Original Size:</span>
                      <span className="font-mono text-foreground">{formatBytes(pdfResult.originalSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Compressed Size:</span>
                      <span className="font-mono text-foreground">{formatBytes(pdfResult.compressedSize)}</span>
                    </div>
                    {pdfResult.savedBytes > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Space Saved:</span>
                        <span className="font-mono">{formatBytes(pdfResult.savedBytes)}</span>
                      </div>
                    )}
                  </div>

                  {pdfResult.savedPercent <= 0 && (
                    <div className="p-2.5 rounded bg-muted/40 text-[11px] text-muted-foreground flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
                      <span>
                        This PDF was already compact or contained pre-compressed media. We avoided enlarging it and kept the original byte structure.
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => downloadBlob(pdfResult.blob, pdfResult.name)}
                    className="w-full py-2.5 px-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Compressed PDF</span>
                  </button>
                </div>
              </div>
            )}

            {/* ZIP Result */}
            {zipResult && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border/60 bg-background/60 space-y-3 text-xs">
                  <div className="flex justify-between font-semibold text-foreground">
                    <span>ZIP Archive Ready</span>
                    <span className="text-emerald-400 font-bold">
                      {zipResult.fileCount} {zipResult.fileCount === 1 ? "file" : "files"}
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Original Total:</span>
                      <span className="font-mono text-foreground">{formatBytes(zipResult.originalTotalSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ZIP Archive Size:</span>
                      <span className="font-mono text-foreground">{formatBytes(zipResult.zipSize)}</span>
                    </div>
                    {zipResult.savedBytes > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Deflate Savings:</span>
                        <span className="font-mono">
                          {formatBytes(zipResult.savedBytes)} ({zipResult.savedPercent.toFixed(1)}%)
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => downloadBlob(zipResult.blob, zipResult.name)}
                    className="w-full py-2.5 px-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download ZIP Archive</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Honest Video Compressor note if in video context */}
          <div className="p-4 rounded-xl border border-border/40 bg-muted/20 text-xs text-muted-foreground space-y-1.5">
            <div className="font-medium text-foreground flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-primary" />
              <span>Looking for Video Compression?</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              High-definition video re-encoding (H.264/AV1/VP9) requires multi-gigabyte WebAssembly binaries and significant hardware resources. Rather than providing a fake or unresponsive tool, DevForge prioritizes ultra-fast, 100% reliable image, document, and archive compression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
