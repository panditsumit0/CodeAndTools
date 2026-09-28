'use client';

import React, { useState, useMemo } from 'react';
import { Clock, Calendar, Check, Copy, RefreshCw, ArrowRight } from 'lucide-react';

// -------------------------------------------------------------
// 1. DATE DIFFERENCE & DURATION CALCULATOR
// -------------------------------------------------------------
export function DateDifferenceTool() {
  const [startDate, setStartDate] = useState<string>('2026-01-01T09:00');
  const [endDate, setEndDate] = useState<string>('2026-12-31T18:00');

  const diffResult = useMemo(() => {
    try {
      const d1 = new Date(startDate);
      const d2 = new Date(endDate);

      if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
        return { error: 'Please enter valid start and end dates.' };
      }

      let start = d1 < d2 ? d1 : d2;
      let end = d1 < d2 ? d2 : d1;
      const isReversed = d1 > d2;

      const diffMs = end.getTime() - start.getTime();
      const totalSeconds = Math.floor(diffMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalWeeks = Math.floor(totalDays / 7);

      // Business days calculation
      let businessDays = 0;
      const cur = new Date(start);
      while (cur < end) {
        const dayOfWeek = cur.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          businessDays++;
        }
        cur.setDate(cur.getDate() + 1);
      }

      // Exact breakdown (Years, Months, Days)
      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      return {
        error: null,
        isReversed,
        years,
        months,
        days,
        totalDays,
        totalWeeks,
        totalHours,
        totalMinutes,
        totalSeconds,
        businessDays,
      };
    } catch {
      return { error: 'Calculation error' };
    }
  }, [startDate, endDate]);

  return (
    <div className="space-y-6">
      {/* Date Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-1.5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Start Date & Time</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-xs sm:text-sm font-mono text-zinc-900 dark:text-white focus:outline-none"
          />
        </div>

        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-1.5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">End Date & Time</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-xs sm:text-sm font-mono text-zinc-900 dark:text-white focus:outline-none"
          />
        </div>
      </div>

      {diffResult.error ? (
        <div className="p-3.5 rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-mono">
          {diffResult.error}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Main Duration Card */}
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10 text-center space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-primary">Exact Difference</span>
            <p className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              {diffResult.years ? `${diffResult.years} years, ` : ''}
              {diffResult.months ? `${diffResult.months} months, ` : ''}
              {diffResult.days} days
            </p>
            {diffResult.isReversed && (
              <span className="text-xs text-amber-500 font-medium block">
                (Note: Start date is after End date)
              </span>
            )}
          </div>

          {/* Breakdown Units Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-xs text-zinc-500">Total Days</span>
              <p className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                {diffResult.totalDays?.toLocaleString()}
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-xs text-zinc-500">Business Days</span>
              <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                {diffResult.businessDays?.toLocaleString()}
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-xs text-zinc-500">Weeks</span>
              <p className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                {diffResult.totalWeeks?.toLocaleString()}
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-xs text-zinc-500">Hours</span>
              <p className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                {diffResult.totalHours?.toLocaleString()}
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-xs text-zinc-500">Minutes</span>
              <p className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                {diffResult.totalMinutes?.toLocaleString()}
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-xs text-zinc-500">Seconds</span>
              <p className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                {diffResult.totalSeconds?.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 2. CRON EXPRESSION GENERATOR & EXPLAINER
// -------------------------------------------------------------
export function CronExplainerTool() {
  const [cron, setCron] = useState<string>('0 9 * * 1-5');
  const [copied, setCopied] = useState<boolean>(false);

  const presets = [
    { label: 'Every minute', expr: '* * * * *' },
    { label: 'Every hour at minute 0', expr: '0 * * * *' },
    { label: 'Every day at 9:00 AM (Mon-Fri)', expr: '0 9 * * 1-5' },
    { label: 'Every midnight (00:00)', expr: '0 0 * * *' },
    { label: 'Every Sunday at midnight', expr: '0 0 * * 0' },
    { label: '1st of every month at midnight', expr: '0 0 1 * *' },
  ];

  const explanation = useMemo(() => {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) {
      return { isValid: false, desc: 'A standard cron expression must consist of exactly 5 parts (Minute, Hour, Day of Month, Month, Day of Week).' };
    }
    const [min, hour, dom, mon, dow] = parts;

    let text = 'Runs ';
    if (min === '*' && hour === '*') text += 'every minute';
    else if (min === '0' && hour === '*') text += 'every hour on the hour';
    else if (min === '*/5') text += 'every 5 minutes';
    else if (min === '*/15') text += 'every 15 minutes';
    else if (min === '*/30') text += 'every 30 minutes';
    else text += `at minute ${min} past hour ${hour === '*' ? 'every hour' : hour}`;

    if (dom !== '*') text += `, on day ${dom} of the month`;
    if (mon !== '*') text += `, in month ${mon}`;
    if (dow === '1-5') text += ', Monday through Friday';
    else if (dow === '0' || dow === '7') text += ', only on Sunday';
    else if (dow !== '*') text += `, on day-of-week ${dow}`;

    return { isValid: true, desc: text + '.' };
  }, [cron]);

  const copyCron = () => {
    navigator.clipboard.writeText(cron);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Input & Explanation */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <label className="font-semibold text-zinc-700 dark:text-zinc-300">
            Cron Expression (5 Fields: min hour dom mon dow)
          </label>
          <button
            onClick={copyCron}
            className="text-primary hover:underline font-semibold cursor-pointer"
          >
            {copied ? 'Copied!' : 'Copy Expression'}
          </button>
        </div>
        <input
          type="text"
          value={cron}
          onChange={(e) => setCron(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-lg sm:text-xl font-mono font-bold text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/40 text-center tracking-widest"
        />

        {/* Human Translation Card */}
        <div
          className={`p-4 rounded-xl border ${
            explanation.isValid
              ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
              : 'border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300'
          } text-xs sm:text-sm font-semibold flex items-center gap-2`}
        >
          <Clock className="w-4 h-4 shrink-0" />
          <span>{explanation.desc}</span>
        </div>
      </div>

      {/* Preset Quick Selectors */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-zinc-500">Common Presets:</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {presets.map((p) => (
            <button
              key={p.expr}
              onClick={() => setCron(p.expr)}
              className={`p-2.5 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                cron === p.expr
                  ? 'border-primary bg-primary/10 text-primary font-bold'
                  : 'border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
              }`}
            >
              <div className="font-semibold">{p.label}</div>
              <div className="font-mono text-zinc-400 text-[11px] mt-0.5">{p.expr}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
