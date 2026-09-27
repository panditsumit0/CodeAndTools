'use client';

import React, { useState, useEffect } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { Clock, Pause, Play, Calendar } from 'lucide-react';

export function TimestampTool() {
  // Live ticking state
  const [currentSec, setCurrentSec] = useState<number>(() => Math.floor(Date.now() / 1000));
  const [currentMs, setCurrentMs] = useState<number>(() => Date.now());
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Conversion 1: Epoch to Human Date
  const [epochInput, setEpochInput] = useState<string>(() => Math.floor(Date.now() / 1000).toString());
  const [epochUnit, setEpochUnit] = useState<'seconds' | 'milliseconds'>('seconds');

  // Conversion 2: Human Date to Epoch
  const [dateInput, setDateInput] = useState<string>(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 16);
  });

  // Live timer interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const now = Date.now();
      setCurrentMs(now);
      setCurrentSec(Math.floor(now / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Compute parsed epoch date
  const parsedEpochDate = React.useMemo(() => {
    if (!epochInput.trim()) return null;
    const num = Number(epochInput.trim());
    if (isNaN(num)) return null;

    let ms = num;
    if (epochUnit === 'seconds' && num < 100000000000) {
      ms = num * 1000;
    } else if (epochUnit === 'milliseconds' || num >= 100000000000) {
      ms = num;
    }

    const date = new Date(ms);
    if (isNaN(date.getTime())) return null;

    const diffMs = currentMs - date.getTime();
    const diffSec = Math.round(diffMs / 1000);
    let relative = '';
    if (Math.abs(diffSec) < 60) {
      relative = 'just now';
    } else if (diffSec > 0) {
      const mins = Math.floor(diffSec / 60);
      const hours = Math.floor(mins / 60);
      const days = Math.floor(hours / 24);
      if (days > 0) relative = `${days} day${days > 1 ? 's' : ''} ago`;
      else if (hours > 0) relative = `${hours} hour${hours > 1 ? 's' : ''} ago`;
      else relative = `${mins} min${mins > 1 ? 's' : ''} ago`;
    } else {
      const absSec = Math.abs(diffSec);
      const mins = Math.floor(absSec / 60);
      const hours = Math.floor(mins / 60);
      const days = Math.floor(hours / 24);
      if (days > 0) relative = `in ${days} day${days > 1 ? 's' : ''}`;
      else if (hours > 0) relative = `in ${hours} hour${hours > 1 ? 's' : ''}`;
      else relative = `in ${mins} min${mins > 1 ? 's' : ''}`;
    }

    return {
      utc: date.toUTCString(),
      local: date.toLocaleString(),
      iso: date.toISOString(),
      relative,
    };
  }, [epochInput, epochUnit, currentMs]);

  // Compute parsed date to epoch
  const parsedDateToEpoch = React.useMemo(() => {
    if (!dateInput) return null;
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return null;

    const ms = date.getTime();
    const sec = Math.floor(ms / 1000);

    return {
      seconds: sec.toString(),
      milliseconds: ms.toString(),
      utc: date.toUTCString(),
      local: date.toLocaleString(),
    };
  }, [dateInput]);

  // Quick helper buttons
  const setPreset = (offsetHours: number) => {
    const target = new Date(Date.now() + offsetHours * 3600 * 1000);
    setEpochInput(Math.floor(target.getTime() / 1000).toString());
    setEpochUnit('seconds');
  };

  return (
    <div className="space-y-8">
      {/* Live Current Timestamp Banner */}
      <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 dark:from-emerald-950/20 dark:to-zinc-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Live Epoch Clock
            </div>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-mono-code text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {currentSec}
              </span>
              <span className="text-xs text-zinc-500 font-mono">seconds</span>
            </div>
            <div className="mt-1 font-mono-code text-xs text-zinc-500">
              {currentMs} ms • {new Date(currentMs).toUTCString()}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-500" /> : <Pause className="w-3.5 h-3.5 text-amber-500" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
            <CopyButton text={currentSec.toString()} label="Copy Seconds" />
            <CopyButton text={currentMs.toString()} label="Copy Milliseconds" />
          </div>
        </div>
      </div>

      {/* Two Way Converter Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel 1: Unix Timestamp -> Date */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500" />
              Unix Timestamp → Human Date
            </h3>
            <button
              type="button"
              onClick={() => setEpochInput(Math.floor(Date.now() / 1000).toString())}
              className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Set to Now
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={epochInput}
                onChange={(e) => setEpochInput(e.target.value)}
                placeholder="e.g. 1716300000"
                className="flex-1 px-3.5 py-2 font-mono-code text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
              <select
                value={epochUnit}
                onChange={(e) => setEpochUnit(e.target.value as 'seconds' | 'milliseconds')}
                className="px-2.5 py-2 text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:outline-none"
              >
                <option value="seconds">Seconds (10 digits)</option>
                <option value="milliseconds">Milliseconds (13 digits)</option>
              </select>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
              <span className="text-zinc-400">Presets:</span>
              <button
                type="button"
                onClick={() => setPreset(1)}
                className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              >
                +1 hour
              </button>
              <button
                type="button"
                onClick={() => setPreset(24)}
                className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              >
                +1 day
              </button>
              <button
                type="button"
                onClick={() => setPreset(-24)}
                className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              >
                -1 day
              </button>
            </div>
          </div>

          {/* Results Table */}
          {parsedEpochDate ? (
            <div className="space-y-2.5 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-400 block mb-0.5 font-medium">UTC Time:</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                    {parsedEpochDate.utc}
                  </span>
                </div>
                <CopyButton text={parsedEpochDate.utc} label="Copy" size="sm" />
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-400 block mb-0.5 font-medium">Your Local Time:</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                    {parsedEpochDate.local}
                  </span>
                </div>
                <CopyButton text={parsedEpochDate.local} label="Copy" size="sm" />
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-400 block mb-0.5 font-medium">ISO 8601:</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                    {parsedEpochDate.iso}
                  </span>
                </div>
                <CopyButton text={parsedEpochDate.iso} label="Copy" size="sm" />
              </div>

              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium px-1">
                Relative: {parsedEpochDate.relative}
              </div>
            </div>
          ) : (
            <div className="py-6 text-center text-xs text-rose-500">
              Invalid Unix timestamp. Please enter valid numeric seconds or milliseconds.
            </div>
          )}
        </div>

        {/* Panel 2: Human Date -> Unix Timestamp */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-500" />
              Human Date → Unix Timestamp
            </h3>
            <button
              type="button"
              onClick={() => {
                const d = new Date();
                d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
                setDateInput(d.toISOString().slice(0, 16));
              }}
              className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Reset to Current
            </button>
          </div>

          <div className="space-y-2">
            <input
              type="datetime-local"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="w-full px-3.5 py-2 font-mono-code text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          {/* Results Table */}
          {parsedDateToEpoch ? (
            <div className="space-y-2.5 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-400 block mb-0.5 font-medium">Epoch (Seconds):</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                    {parsedDateToEpoch.seconds}
                  </span>
                </div>
                <CopyButton text={parsedDateToEpoch.seconds} label="Copy" size="sm" />
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-400 block mb-0.5 font-medium">Epoch (Milliseconds):</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                    {parsedDateToEpoch.milliseconds}
                  </span>
                </div>
                <CopyButton text={parsedDateToEpoch.milliseconds} label="Copy" size="sm" />
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                <div>
                  <strong className="text-zinc-800 dark:text-zinc-200">UTC:</strong> {parsedDateToEpoch.utc}
                </div>
                <div>
                  <strong className="text-zinc-800 dark:text-zinc-200">Local:</strong> {parsedDateToEpoch.local}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-6 text-center text-xs text-rose-500">
              Please pick a valid calendar date and time.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
