'use client';

import React, { useState, useMemo } from 'react';
import {
  GitBranch,
  Terminal,
  Table as TableIcon,
  Search,
  Copy,
  Check,
  Code2
} from 'lucide-react';

// -------------------------------------------------------------
// 1. GIT CHEATSHEET TOOL
// -------------------------------------------------------------
export function GitCheatsheetTool() {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('all');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const GIT_COMMANDS = [
    { cat: 'basics', cmd: 'git init', desc: 'Initialize a brand new local Git repository in current folder' },
    { cat: 'basics', cmd: 'git clone <url>', desc: 'Download a remote repository and its full commit history' },
    { cat: 'basics', cmd: 'git status', desc: 'Show modified, staged, and untracked files in the working directory' },
    { cat: 'basics', cmd: 'git add .', desc: 'Stage all modified and new files for the next commit' },
    { cat: 'basics', cmd: 'git commit -m "commit message"', desc: 'Record staged snapshot with a descriptive commit message' },
    { cat: 'branching', cmd: 'git branch', desc: 'List all local branches (* marks the current active branch)' },
    { cat: 'branching', cmd: 'git checkout -b <branch-name>', desc: 'Create a new branch and switch to it immediately' },
    { cat: 'branching', cmd: 'git switch <branch-name>', desc: 'Modern command to switch between branches' },
    { cat: 'branching', cmd: 'git merge <branch>', desc: 'Merge changes from specified branch into current branch' },
    { cat: 'branching', cmd: 'git branch -d <branch>', desc: 'Safely delete a local branch that has already been merged' },
    { cat: 'remotes', cmd: 'git remote -v', desc: 'View URLs for configured remote repositories (origin)' },
    { cat: 'remotes', cmd: 'git push origin <branch>', desc: 'Upload local commits to the remote branch on GitHub' },
    { cat: 'remotes', cmd: 'git pull origin <branch>', desc: 'Fetch and merge latest changes from remote branch into local branch' },
    { cat: 'undo', cmd: 'git restore <file>', desc: 'Discard uncommitted changes in working directory for a file' },
    { cat: 'undo', cmd: 'git restore --staged <file>', desc: 'Unstage a file while keeping its changes in the working directory' },
    { cat: 'undo', cmd: 'git stash', desc: 'Temporarily shelve (hide) uncommitted local changes' },
    { cat: 'undo', cmd: 'git stash pop', desc: 'Restore the most recently stashed changes back to working tree' },
    { cat: 'history', cmd: 'git log --oneline --graph', desc: 'View clean visual timeline of past commits with branch graphs' },
    { cat: 'history', cmd: 'git diff', desc: 'Inspect exact unstaged line-by-line code changes since last commit' }
  ];

  const filtered = useMemo(() => {
    return GIT_COMMANDS.filter((item) => {
      const matchCat = category === 'all' || item.cat === category;
      const matchSearch =
        item.cmd.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Search and Categories */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Git commands (e.g. branch, commit, undo, stash)..."
          className="w-full sm:w-80 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none"
        />

        <div className="flex flex-wrap items-center gap-1 text-xs">
          {[
            { id: 'all', label: 'All' },
            { id: 'basics', label: 'Basics' },
            { id: 'branching', label: 'Branching' },
            { id: 'remotes', label: 'Remotes' },
            { id: 'undo', label: 'Undo & Stash' },
            { id: 'history', label: 'History' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                category === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] flex flex-col justify-between gap-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono font-bold text-xs sm:text-sm text-primary break-all">
                {item.cmd}
              </span>
              <button
                onClick={() => copyCommand(item.cmd)}
                className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer shrink-0"
              >
                {copiedCmd === item.cmd ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. LINUX CHEATSHEET TOOL
// -------------------------------------------------------------
export function LinuxCheatsheetTool() {
  const [search, setSearch] = useState<string>('');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const LINUX_COMMANDS = [
    { cmd: 'ls -la', cat: 'Files', desc: 'List all files including hidden ones with sizes, permissions, and dates' },
    { cmd: 'cd <dir>', cat: 'Navigation', desc: 'Change current working directory (use cd .. to move up one level)' },
    { cmd: 'pwd', cat: 'Navigation', desc: 'Print working directory path from root' },
    { cmd: 'mkdir -p <path>', cat: 'Files', desc: 'Create directory and any missing parent folders' },
    { cmd: 'rm -rf <path>', cat: 'Files', desc: 'Forcefully and recursively remove files and directories' },
    { cmd: 'cp -r <src> <dest>', cat: 'Files', desc: 'Copy files or directories recursively' },
    { cmd: 'mv <src> <dest>', cat: 'Files', desc: 'Move or rename files or directories' },
    { cmd: 'chmod 755 <file>', cat: 'Permissions', desc: 'Set read/write/execute permissions (rwxr-xr-x)' },
    { cmd: 'chown user:group <file>', cat: 'Permissions', desc: 'Change file ownership to designated user and group' },
    { cmd: 'grep -rn "text" .', cat: 'Search', desc: 'Search for text recursively across all files showing line numbers' },
    { cmd: 'find . -name "*.c"', cat: 'Search', desc: 'Find all files matching a specific filename pattern' },
    { cmd: 'ps aux', cat: 'Processes', desc: 'Snapshot of all currently running processes with CPU and RAM usage' },
    { cmd: 'kill -9 <pid>', cat: 'Processes', desc: 'Forcefully terminate a process by its Process ID' },
    { cmd: 'df -h', cat: 'System', desc: 'Display available and used disk space in human-readable gigabytes' },
    { cmd: 'curl -I <url>', cat: 'Network', desc: 'Fetch HTTP response headers for a URL without downloading body' }
  ];

  const filtered = useMemo(() => {
    return LINUX_COMMANDS.filter(
      (c) =>
        c.cmd.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase()) ||
        c.cat.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 1500);
  };

  return (
    <div className="space-y-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Linux commands (e.g. permissions, process, grep, disk)..."
        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] flex flex-col justify-between gap-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 break-all">
                {item.cmd}
              </span>
              <button
                onClick={() => copyCommand(item.cmd)}
                className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer shrink-0"
              >
                {copiedCmd === item.cmd ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. ASCII TABLE & CHARACTER CODES TOOL
// -------------------------------------------------------------
export function AsciiTableTool() {
  const [search, setSearch] = useState<string>('');
  const [filterType, setFilterType] = useState<'all' | 'printable' | 'letters' | 'digits' | 'control'>('all');

  // Generate ASCII table (0 to 127 standard)
  const asciiRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i <= 127; i++) {
      let char = String.fromCharCode(i);
      let desc = 'Printable character';
      let type: 'control' | 'digit' | 'letter' | 'printable' = 'printable';

      if (i < 32 || i === 127) {
        type = 'control';
        const ctrlNames: Record<number, string> = {
          0: 'NUL (Null char)',
          7: 'BEL (Bell)',
          8: 'BS (Backspace)',
          9: 'HT (Tab \\t)',
          10: 'LF (Newline \\n)',
          13: 'CR (Carriage return \\r)',
          27: 'ESC (Escape)',
          32: 'Space',
          127: 'DEL (Delete)',
        };
        desc = ctrlNames[i] || 'Control character';
        char = i === 32 ? '␣ (space)' : '•';
      } else if (i >= 48 && i <= 57) {
        type = 'digit';
        desc = `Digit '${char}'`;
      } else if ((i >= 65 && i <= 90) || (i >= 97 && i <= 122)) {
        type = 'letter';
        desc = `Letter '${char}'`;
      }

      rows.push({
        dec: i,
        hex: i.toString(16).toUpperCase().padStart(2, '0'),
        oct: i.toString(8).padStart(3, '0'),
        bin: i.toString(2).padStart(8, '0'),
        char,
        desc,
        type,
      });
    }
    return rows;
  }, []);

  const filtered = useMemo(() => {
    return asciiRows.filter((r) => {
      const matchType =
        filterType === 'all'
          ? true
          : filterType === 'printable'
          ? r.type !== 'control'
          : r.type === filterType;

      const matchSearch =
        r.dec.toString().includes(search) ||
        r.hex.toLowerCase().includes(search.toLowerCase()) ||
        r.char.toLowerCase().includes(search.toLowerCase()) ||
        r.desc.toLowerCase().includes(search.toLowerCase());

      return matchType && matchSearch;
    });
  }, [asciiRows, filterType, search]);

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Decimal (65), Hex (41), Char (A), or keyword..."
          className="w-full sm:w-80 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none"
        />

        <div className="flex items-center gap-1 text-xs">
          {[
            { id: 'all', label: 'All (0-127)' },
            { id: 'printable', label: 'Printable' },
            { id: 'letters', label: 'Letters' },
            { id: 'digits', label: 'Digits' },
            { id: 'control', label: 'Control' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id as typeof filterType)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                filterType === f.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ASCII Table */}
      <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-[#1F2937] max-h-96">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead className="sticky top-0 bg-zinc-100 dark:bg-[#0F1622] border-b border-zinc-200 dark:border-[#1F2937] text-zinc-500 text-[11px]">
            <tr>
              <th className="p-2.5">Dec</th>
              <th className="p-2.5">Hex</th>
              <th className="p-2.5">Oct</th>
              <th className="p-2.5">Binary</th>
              <th className="p-2.5 text-center font-sans font-bold">Character</th>
              <th className="p-2.5 font-sans">Description</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.dec} className="border-b border-zinc-100 dark:border-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-900/40">
                <td className="p-2.5 font-bold text-zinc-900 dark:text-white">{r.dec}</td>
                <td className="p-2.5 text-primary">0x{r.hex}</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">{r.oct}</td>
                <td className="p-2.5 text-zinc-500">{r.bin}</td>
                <td className="p-2.5 text-center font-bold text-sm text-purple-600 dark:text-purple-400">
                  {r.char}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400 font-sans">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
