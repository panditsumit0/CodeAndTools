'use client';

import React, { useState, useMemo } from 'react';
import {
  Binary,
  Percent,
  Scale,
  RefreshCw,
  Copy,
  Check,
  ArrowRightLeft
} from 'lucide-react';

// -------------------------------------------------------------
// 1. UNIT CONVERTER TOOL
// -------------------------------------------------------------
type UnitCategory = 'length' | 'weight' | 'temperature' | 'data' | 'speed' | 'time';

interface UnitFactor {
  name: string;
  factor: number; // relative to base unit
}

const UNIT_SYSTEMS: Record<UnitCategory, { label: string; base: string; units: Record<string, UnitFactor> }> = {
  length: {
    label: 'Length',
    base: 'meter',
    units: {
      m: { name: 'Meters (m)', factor: 1 },
      km: { name: 'Kilometers (km)', factor: 1000 },
      cm: { name: 'Centimeters (cm)', factor: 0.01 },
      mm: { name: 'Millimeters (mm)', factor: 0.001 },
      mi: { name: 'Miles (mi)', factor: 1609.344 },
      yd: { name: 'Yards (yd)', factor: 0.9144 },
      ft: { name: 'Feet (ft)', factor: 0.3048 },
      in: { name: 'Inches (in)', factor: 0.0254 },
    },
  },
  weight: {
    label: 'Weight & Mass',
    base: 'kilogram',
    units: {
      kg: { name: 'Kilograms (kg)', factor: 1 },
      g: { name: 'Grams (g)', factor: 0.001 },
      mg: { name: 'Milligrams (mg)', factor: 0.000001 },
      lb: { name: 'Pounds (lb)', factor: 0.45359237 },
      oz: { name: 'Ounces (oz)', factor: 0.02834952 },
      t: { name: 'Metric Ton (t)', factor: 1000 },
    },
  },
  temperature: {
    label: 'Temperature',
    base: 'celsius',
    units: {
      c: { name: 'Celsius (°C)', factor: 1 },
      f: { name: 'Fahrenheit (°F)', factor: 1 },
      k: { name: 'Kelvin (K)', factor: 1 },
    },
  },
  data: {
    label: 'Digital Data',
    base: 'byte',
    units: {
      b: { name: 'Bytes (B)', factor: 1 },
      kb: { name: 'Kilobytes (KB)', factor: 1024 },
      mb: { name: 'Megabytes (MB)', factor: 1024 ** 2 },
      gb: { name: 'Gigabytes (GB)', factor: 1024 ** 3 },
      tb: { name: 'Terabytes (TB)', factor: 1024 ** 4 },
      pb: { name: 'Petabytes (PB)', factor: 1024 ** 5 },
    },
  },
  speed: {
    label: 'Speed',
    base: 'm/s',
    units: {
      mps: { name: 'Meters / second (m/s)', factor: 1 },
      kph: { name: 'Kilometers / hour (km/h)', factor: 0.277778 },
      mph: { name: 'Miles / hour (mph)', factor: 0.44704 },
      knot: { name: 'Knots (kt)', factor: 0.514444 },
    },
  },
  time: {
    label: 'Time',
    base: 'second',
    units: {
      s: { name: 'Seconds (s)', factor: 1 },
      min: { name: 'Minutes (min)', factor: 60 },
      h: { name: 'Hours (h)', factor: 3600 },
      d: { name: 'Days (d)', factor: 86400 },
      wk: { name: 'Weeks (wk)', factor: 604800 },
      yr: { name: 'Years (yr, 365d)', factor: 31536000 },
    },
  },
};

export function UnitConverterTool() {
  const [category, setCategory] = useState<UnitCategory>('length');
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('km');
  const [amount, setAmount] = useState<string>('1000');

  const currentSystem = UNIT_SYSTEMS[category];

  // Reset defaults on category change
  const handleCategoryChange = (cat: UnitCategory) => {
    setCategory(cat);
    const keys = Object.keys(UNIT_SYSTEMS[cat].units);
    setFromUnit(keys[0]);
    setToUnit(keys[1] || keys[0]);
  };

  const convertedValue = useMemo(() => {
    const val = parseFloat(amount);
    if (isNaN(val)) return '0';

    if (category === 'temperature') {
      // Temperature has offsets
      let celsius = val;
      if (fromUnit === 'f') celsius = (val - 32) * (5 / 9);
      else if (fromUnit === 'k') celsius = val - 273.15;

      let result = celsius;
      if (toUnit === 'f') result = celsius * (9 / 5) + 32;
      else if (toUnit === 'k') result = celsius + 273.15;

      return Number(result.toFixed(4)).toString();
    }

    const fromFactor = currentSystem.units[fromUnit]?.factor || 1;
    const toFactor = currentSystem.units[toUnit]?.factor || 1;

    // Convert from -> base -> to
    const baseVal = val * fromFactor;
    const result = baseVal / toFactor;

    return Number(result.toFixed(6)).toString();
  }, [category, fromUnit, toUnit, amount, currentSystem]);

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="space-y-6">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
        {(Object.keys(UNIT_SYSTEMS) as UnitCategory[]).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              category === cat
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            {UNIT_SYSTEMS[cat].label}
          </button>
        ))}
      </div>

      {/* Converter Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {/* From Side */}
        <div className="md:col-span-2 space-y-2 p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <label className="text-xs font-semibold text-zinc-500">From</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-base font-bold text-zinc-900 dark:text-white focus:outline-none"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none"
          >
            {Object.entries(currentSystem.units).map(([key, u]) => (
              <option key={key} value={key}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center md:col-span-1">
          <button
            onClick={swap}
            className="p-3 rounded-full border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-zinc-600 dark:text-zinc-400 hover:text-primary hover:border-primary cursor-pointer transition-colors shadow-sm"
            title="Swap Units"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </button>
        </div>

        {/* To Side */}
        <div className="md:col-span-2 space-y-2 p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <label className="text-xs font-semibold text-zinc-500">To (Result)</label>
          <div className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-base font-bold text-primary truncate select-all">
            {convertedValue}
          </div>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none"
          >
            {Object.entries(currentSystem.units).map(([key, u]) => (
              <option key={key} value={key}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. NUMBER SYSTEM CONVERTER (DEC / BIN / HEX / OCT)
// -------------------------------------------------------------
export function NumberSystemConverterTool() {
  const [dec, setDec] = useState<string>('255');
  const [bin, setBin] = useState<string>('11111111');
  const [hex, setHex] = useState<string>('FF');
  const [oct, setOct] = useState<string>('377');

  const updateFromDec = (val: string) => {
    setDec(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 0) {
      setBin(num.toString(2));
      setHex(num.toString(16).toUpperCase());
      setOct(num.toString(8));
    }
  };

  const updateFromBin = (val: string) => {
    setBin(val);
    const num = parseInt(val, 2);
    if (!isNaN(num)) {
      setDec(num.toString(10));
      setHex(num.toString(16).toUpperCase());
      setOct(num.toString(8));
    }
  };

  const updateFromHex = (val: string) => {
    setHex(val);
    const num = parseInt(val, 16);
    if (!isNaN(num)) {
      setDec(num.toString(10));
      setBin(num.toString(2));
      setOct(num.toString(8));
    }
  };

  const updateFromOct = (val: string) => {
    setOct(val);
    const num = parseInt(val, 8);
    if (!isNaN(num)) {
      setDec(num.toString(10));
      setBin(num.toString(2));
      setHex(num.toString(16).toUpperCase());
    }
  };

  // Group binary string into 4-bit nibbles for readability
  const formattedBin = useMemo(() => {
    const clean = bin.replace(/\s/g, '');
    return clean.replace(/(\d{4})/g, '$1 ').trim();
  }, [bin]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Decimal */}
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-1.5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Decimal (Base 10)
          </label>
          <input
            type="number"
            min={0}
            value={dec}
            onChange={(e) => updateFromDec(e.target.value)}
            className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-base font-bold text-zinc-900 dark:text-white focus:outline-none"
          />
        </div>

        {/* Binary */}
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-1.5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Binary (Base 2)
          </label>
          <input
            type="text"
            value={bin}
            onChange={(e) => updateFromBin(e.target.value.replace(/[^01]/g, ''))}
            className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-base font-bold text-primary focus:outline-none"
          />
          <span className="text-[11px] text-zinc-400 font-mono">Nibbles: {formattedBin}</span>
        </div>

        {/* Hexadecimal */}
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-1.5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Hexadecimal (Base 16)
          </label>
          <input
            type="text"
            value={hex}
            onChange={(e) => updateFromHex(e.target.value.replace(/[^0-9a-fA-F]/g, ''))}
            className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-base font-bold text-purple-600 dark:text-purple-400 focus:outline-none"
          />
        </div>

        {/* Octal */}
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-1.5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Octal (Base 8)
          </label>
          <input
            type="text"
            value={oct}
            onChange={(e) => updateFromOct(e.target.value.replace(/[^0-7]/g, ''))}
            className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-base font-bold text-amber-600 dark:text-amber-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. PERCENTAGE CALCULATOR TOOL
// -------------------------------------------------------------
export function PercentageCalculatorTool() {
  // Mode 1: What is X% of Y?
  const [p1, setP1] = useState<string>('18');
  const [val1, setVal1] = useState<string>('5000');

  // Mode 2: X is what percent of Y?
  const [val2A, setVal2A] = useState<string>('75');
  const [val2B, setVal2B] = useState<string>('150');

  // Mode 3: Percentage change from X to Y?
  const [val3A, setVal3A] = useState<string>('120');
  const [val3B, setVal3B] = useState<string>('180');

  const res1 = useMemo(() => {
    const p = parseFloat(p1);
    const v = parseFloat(val1);
    if (isNaN(p) || isNaN(v)) return '0';
    return ((p / 100) * v).toFixed(2);
  }, [p1, val1]);

  const res2 = useMemo(() => {
    const a = parseFloat(val2A);
    const b = parseFloat(val2B);
    if (isNaN(a) || isNaN(b) || b === 0) return '0';
    return ((a / b) * 100).toFixed(2);
  }, [val2A, val2B]);

  const res3 = useMemo(() => {
    const a = parseFloat(val3A);
    const b = parseFloat(val3B);
    if (isNaN(a) || isNaN(b) || a === 0) return { change: '0', isIncrease: true };
    const diff = b - a;
    const pct = ((diff / a) * 100).toFixed(2);
    return { change: pct, isIncrease: diff >= 0 };
  }, [val3A, val3B]);

  return (
    <div className="space-y-6">
      {/* 1. What is X% of Y? */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-2">
        <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
          1. Calculate Percentage: What is X% of Y?
        </span>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <span>What is</span>
          <input
            type="number"
            value={p1}
            onChange={(e) => setP1(e.target.value)}
            className="w-20 p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-center font-bold"
          />
          <span>% of</span>
          <input
            type="number"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
            className="w-28 p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-center font-bold"
          />
          <span>=</span>
          <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-mono font-bold text-base">
            {res1}
          </span>
        </div>
      </div>

      {/* 2. X is what % of Y? */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-2">
        <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
          2. Proportion: X is what percent of Y?
        </span>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <input
            type="number"
            value={val2A}
            onChange={(e) => setVal2A(e.target.value)}
            className="w-24 p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-center font-bold"
          />
          <span>is what % of</span>
          <input
            type="number"
            value={val2B}
            onChange={(e) => setVal2B(e.target.value)}
            className="w-24 p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-center font-bold"
          />
          <span>=</span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-base">
            {res2}%
          </span>
        </div>
      </div>

      {/* 3. Percentage Increase / Decrease */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-2">
        <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
          3. Percentage Increase / Decrease from X to Y:
        </span>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <span>From</span>
          <input
            type="number"
            value={val3A}
            onChange={(e) => setVal3A(e.target.value)}
            className="w-24 p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-center font-bold"
          />
          <span>to</span>
          <input
            type="number"
            value={val3B}
            onChange={(e) => setVal3B(e.target.value)}
            className="w-24 p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-center font-bold"
          />
          <span>=</span>
          <span
            className={`px-3 py-1.5 rounded-lg font-mono font-bold text-base ${
              res3.isIncrease
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
            }`}
          >
            {res3.isIncrease ? `+${res3.change}% (Increase)` : `${res3.change}% (Decrease)`}
          </span>
        </div>
      </div>
    </div>
  );
}
