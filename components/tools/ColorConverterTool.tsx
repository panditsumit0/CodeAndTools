'use client';

import React, { useState } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { CheckCircle2, XCircle } from 'lucide-react';

interface RgbColor {
  r: number;
  g: number;
  b: number;
}

interface HslColor {
  h: number;
  s: number;
  l: number;
}

export function ColorConverterTool() {
  const [hexInput, setHexInput] = useState<string>('#10B981');

  // Conversions
  const hexToRgb = (hex: string): RgbColor | null => {
    let clean = hex.replace('#', '').trim();
    if (clean.length === 3) {
      clean = clean
        .split('')
        .map((c) => c + c)
        .join('');
    }
    if (clean.length !== 6) return null;
    const num = parseInt(clean, 16);
    if (isNaN(num)) return null;
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  };

  const rgbToHsl = (rgb: RgbColor): HslColor => {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h = Math.round(h * 60);
    }

    return {
      h: Math.round(h),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const hslToHex = (h: number, s: number, l: number): string => {
    h = (h % 360 + 360) % 360;
    const sNorm = s / 100;
    const lNorm = l / 100;
    const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = lNorm - c / 2;
    let r1 = 0,
      g1 = 0,
      b1 = 0;

    if (h < 60) {
      r1 = c;
      g1 = x;
    } else if (h < 120) {
      r1 = x;
      g1 = c;
    } else if (h < 180) {
      g1 = c;
      b1 = x;
    } else if (h < 240) {
      g1 = x;
      b1 = c;
    } else if (h < 300) {
      r1 = x;
      b1 = c;
    } else {
      r1 = c;
      b1 = x;
    }

    const r = Math.round((r1 + m) * 255);
    const g = Math.round((g1 + m) * 255);
    const b = Math.round((b1 + m) * 255);

    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };

  // WCAG Luminance and Contrast Ratio calculation
  const getLuminance = (rgb: RgbColor): number => {
    const a = [rgb.r, rgb.g, rgb.b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const getContrastRatio = (lum1: number, lum2: number): number => {
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  };

  const validRgb = hexToRgb(hexInput);
  const validHsl = validRgb ? rgbToHsl(validRgb) : null;

  // Contrast calculations
  const colorLum = validRgb ? getLuminance(validRgb) : 0;
  const whiteLum = 1.0;
  const blackLum = 0.0;
  const contrastAgainstWhite = validRgb ? getContrastRatio(colorLum, whiteLum) : 1;
  const contrastAgainstBlack = validRgb ? getContrastRatio(colorLum, blackLum) : 1;

  const rgbString = validRgb ? `rgb(${validRgb.r}, ${validRgb.g}, ${validRgb.b})` : '';
  const hslString = validHsl ? `hsl(${validHsl.h}, ${validHsl.s}%, ${validHsl.l}%)` : '';

  // Harmonics
  const complementaryHex = validHsl ? hslToHex(validHsl.h + 180, validHsl.s, validHsl.l) : '';
  const analogous1 = validHsl ? hslToHex(validHsl.h + 30, validHsl.s, validHsl.l) : '';
  const analogous2 = validHsl ? hslToHex(validHsl.h - 30, validHsl.s, validHsl.l) : '';
  const triadic1 = validHsl ? hslToHex(validHsl.h + 120, validHsl.s, validHsl.l) : '';
  const triadic2 = validHsl ? hslToHex(validHsl.h + 240, validHsl.s, validHsl.l) : '';

  const presets = ['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#06B6D4', '#EF4444', '#1E293B'];

  return (
    <div className="space-y-8">
      {/* Interactive Picker & Live Swatch Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-6 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50/50 dark:bg-[#0B111A]/60">
        {/* Large Color Swatch */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div
            className="w-36 h-36 rounded-2xl shadow-lg border border-black/10 transition-transform duration-200 hover:scale-105 flex items-center justify-center"
            style={{ backgroundColor: validRgb ? hexInput : '#10B981' }}
          >
            <span
              className="text-xs font-mono font-bold px-2 py-1 rounded bg-black/40 text-white backdrop-blur-xs"
            >
              {validRgb ? hexInput.toUpperCase() : 'Invalid'}
            </span>
          </div>
          <span className="text-xs text-zinc-500 font-medium">Live Preview Swatch</span>
        </div>

        {/* Picker Controls */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Native HTML Color Input */}
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={validRgb ? hexInput : '#10B981'}
                onChange={(e) => setHexInput(e.target.value.toUpperCase())}
                className="w-12 h-12 rounded-xl cursor-pointer border border-zinc-300 dark:border-zinc-700 bg-transparent p-0.5"
                title="Open Color Picker"
              />
              <span className="text-xs text-zinc-500 font-medium">Picker</span>
            </div>

            {/* Direct Hex Input */}
            <div className="flex-1 w-full">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                HEX Color Value
              </label>
              <input
                type="text"
                value={hexInput}
                onChange={(e) => setHexInput(e.target.value)}
                placeholder="#10B981"
                maxLength={7}
                className="w-full px-3.5 py-2 font-mono-code text-sm rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary uppercase"
              />
            </div>
          </div>

          {/* Quick Swatch Presets */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-zinc-400">Presets:</span>
            {presets.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setHexInput(color)}
                style={{ backgroundColor: color }}
                className="w-6 h-6 rounded-md border border-white/20 shadow-xs hover:scale-115 transition-transform"
                title={color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Formatted Output Values */}
      {validRgb && validHsl && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* HEX */}
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span className="font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                HEX
              </span>
              <CopyButton text={hexInput.toUpperCase()} label="Copy" size="sm" />
            </div>
            <div className="font-mono-code text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {hexInput.toUpperCase()}
            </div>
          </div>

          {/* RGB */}
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span className="font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                RGB
              </span>
              <CopyButton text={rgbString} label="Copy" size="sm" />
            </div>
            <div className="font-mono-code text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {rgbString}
            </div>
          </div>

          {/* HSL */}
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span className="font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                HSL
              </span>
              <CopyButton text={hslString} label="Copy" size="sm" />
            </div>
            <div className="font-mono-code text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {hslString}
            </div>
          </div>
        </div>
      )}

      {/* WCAG Accessibility Contrast Checker */}
      {validRgb && (
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50/50 dark:bg-[#0B111A]/50 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
            WCAG 2.1 Accessibility Contrast Ratings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Against Black Text */}
            <div className="p-4 rounded-xl bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  On Black (#000000)
                </span>
                <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {contrastAgainstBlack.toFixed(2)} : 1
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs pt-1">
                <span
                  className={`inline-flex items-center gap-1 font-semibold ${
                    contrastAgainstBlack >= 4.5 ? 'text-emerald-500' : 'text-rose-500'
                  }`}
                >
                  {contrastAgainstBlack >= 4.5 ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                  Normal Text (4.5:1)
                </span>
                <span
                  className={`inline-flex items-center gap-1 font-semibold ${
                    contrastAgainstBlack >= 7 ? 'text-emerald-500' : 'text-rose-500'
                  }`}
                >
                  {contrastAgainstBlack >= 7 ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                  Enhanced AAA (7:1)
                </span>
              </div>
            </div>

            {/* Against White Text */}
            <div className="p-4 rounded-xl bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  On White (#FFFFFF)
                </span>
                <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {contrastAgainstWhite.toFixed(2)} : 1
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs pt-1">
                <span
                  className={`inline-flex items-center gap-1 font-semibold ${
                    contrastAgainstWhite >= 4.5 ? 'text-emerald-500' : 'text-rose-500'
                  }`}
                >
                  {contrastAgainstWhite >= 4.5 ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                  Normal Text (4.5:1)
                </span>
                <span
                  className={`inline-flex items-center gap-1 font-semibold ${
                    contrastAgainstWhite >= 7 ? 'text-emerald-500' : 'text-rose-500'
                  }`}
                >
                  {contrastAgainstWhite >= 7 ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                  Enhanced AAA (7:1)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Harmonic Palettes Preview */}
      {validHsl && (
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50/50 dark:bg-[#0B111A]/50 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
            Harmonic Color Schemes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Complementary */}
            <div className="p-3 rounded-xl bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937] space-y-2">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Complementary
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-lg shadow-inner border border-black/10"
                  style={{ backgroundColor: complementaryHex }}
                />
                <div className="flex-1 font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  {complementaryHex}
                </div>
                <CopyButton text={complementaryHex} size="sm" />
              </div>
            </div>

            {/* Analogous */}
            <div className="p-3 rounded-xl bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937] space-y-2">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Analogous Pair
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-lg shadow-inner border border-black/10"
                  style={{ backgroundColor: analogous1 }}
                />
                <div
                  className="w-10 h-10 rounded-lg shadow-inner border border-black/10"
                  style={{ backgroundColor: analogous2 }}
                />
                <div className="flex-1 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                  +30° / -30°
                </div>
              </div>
            </div>

            {/* Triadic */}
            <div className="p-3 rounded-xl bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937] space-y-2">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Triadic Harmony
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-lg shadow-inner border border-black/10"
                  style={{ backgroundColor: triadic1 }}
                />
                <div
                  className="w-10 h-10 rounded-lg shadow-inner border border-black/10"
                  style={{ backgroundColor: triadic2 }}
                />
                <div className="flex-1 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                  120° / 240°
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
