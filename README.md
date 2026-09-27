# Code&Tools — Build. Learn. Create.

> **"Fast, private, browser-based tools for developers."**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=flat-square)](LICENSE)

Code&Tools is an all-in-one suite of essential utilities designed for software engineers, DevOps practitioners, and web developers. Unlike traditional online tools that ingest payloads into third-party cloud backends, **Code&Tools runs 100% of data transformations and cryptographic digests directly inside your local browser runtime**.

---

## 🔒 Privacy-First Guarantee

* **Zero Server Uploads**: No JWTs, JSON payloads, passwords, or hashes are transmitted across the internet.
* **Web Crypto Native**: Uses `window.crypto.subtle` for hardware-accelerated SHA digests and OS-level CSPRNG UUID generation.
* **Offline-Ready**: Once loaded, utilities operate independently without persistent internet access.
* **Zero Telemetry**: No surveillance pixels, input logging, or keystroke tracking.

---

## 🛠️ Implemented Tools

| Tool | Route | Key Features |
| :--- | :--- | :--- |
| **Online Compiler** | `/tools/compiler` | Sandboxed runner for C, C++, Java, Python & TypeScript; Monaco Editor; stdin/stdout; execution diagnostics |
| **JSON Formatter** | `/tools/json-formatter` | Format (2/4 spaces, tabs), minify, line/col error highlighting, file upload/download |
| **JSON ↔ YAML** | `/tools/json-yaml` | Bidirectional conversion powered by `js-yaml`, syntax validation, spacing control |
| **JWT Decoder** | `/tools/jwt-decoder` | Decodes Header, Payload, and Signature; relative timestamps; expiration status; local disclaimer |
| **Base64 Encoder/Decoder** | `/tools/base64` | Native `TextEncoder`/`TextDecoder` engine; true UTF-8 and emoji support; URL-safe variant |
| **UUID Generator** | `/tools/uuid-generator` | Cryptographically secure v4 UUIDs; batch generation (1 to 100); hyphens/uppercase/braces options |
| **Unix Timestamp Converter** | `/tools/timestamp` | Live ticking epoch clock; seconds/ms auto-detection; UTC & Local time; date math presets |
| **URL Encoder / Decoder** | `/tools/url-encoder` | `encodeURI` vs `encodeURIComponent`; interactive query parameter breakdown table |
| **Regex Tester** | `/tools/regex-tester` | Live match highlighting; flag toggles (`g`, `i`, `m`, `s`, `u`); capturing groups; syntax cheat sheet |
| **Hash Generator** | `/tools/hash-generator` | Parallel SHA-256, SHA-384, SHA-512, SHA-1, and MD5 digests; uppercase/lowercase hex |
| **Color Converter** | `/tools/color-converter` | HEX, RGB, HSL, and HSV; interactive color picker; WCAG 2.1 AA/AAA contrast ratios; harmonies |

---

## 🎓 B.Tech Programming Tutorials & Interactive Guides

Interactive documentation with runnable code examples, practice questions, and exam preparation:

| Language | Guide Route | B.Tech Exam & Viva Focus |
| :--- | :--- | :--- |
| **C** | [`/learn/c`](/learn/c) | Pointers, dynamic memory (`malloc`/`free`), structures, file handling, stack frames |
| **C++** | [`/learn/cpp`](/learn/cpp) | OOP 4 pillars, virtual tables, copy constructors, templates, STL vectors & maps |
| **Java** | [`/learn/java`](/learn/java) | JDK vs JRE vs JVM, String Constant Pool, interfaces, exception hierarchy, Collections |
| **Python** | [`/learn/python`](/learn/python) | Clean indentation, list comprehensions, dicts, OOP, exception handling, AI/ML libraries |
| **TypeScript** | [`/learn/typescript`](/learn/typescript) | Static type safety, interfaces, union types, generics, React & Node.js integration |
| **Comparison Guide** | [`/learn`](/learn) | Decision matrix and semester-wise roadmap for engineering undergraduates |

---

## ⚡ Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript 5 (Strict Mode)
* **Styling**: Tailwind CSS v4 (Dark-first UI, Light mode support)
* **Editor**: `@monaco-editor/react` (VS Code experience in the browser)
* **Icons**: Lucide React
* **Parsers**: `js-yaml` for YAML parsing, native `Web Crypto API` for cryptography
* **Execution Engine**: Multi-provider Sandboxed Execution Service (Judge0 CE / RapidAPI / Piston)
* **Storage**: Local browser storage (`localStorage`) for user preferences

---

## 🚀 Getting Started

### Prerequisites

* Node.js `v18.17+` or `v20.x`
* npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/example-org/code-and-tools.git

# Enter project directory
cd code-and-tools

# Install dependencies
npm install
```

### Development

```bash
# Start local development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## ⚙️ Environment Variables

The compiler execution service uses an isolated backend adapter. Copy `.env.example` to `.env.local` to configure:

```bash
cp .env.example .env.local
```

| Variable | Default | Description |
| :--- | :--- | :--- |
| `CODE_EXECUTION_PROVIDER` | `judge0` | Execution provider adapter (`judge0` or `piston`) |
| `CODE_EXECUTION_API_URL` | `https://ce.judge0.com` | Base URL for Judge0 CE or self-hosted Judge0 instance |
| `CODE_EXECUTION_API_KEY` | *(empty)* | Optional API key when using RapidAPI Judge0 endpoint |
| `CODE_EXECUTION_TIMEOUT_MS` | `10000` | Execution wall-time limit in milliseconds |

*Note: If no API key is provided, the compiler uses the public Judge0 CE endpoint out-of-the-box.*

---

## 📁 Project Architecture

```
├── app/
│   ├── about/             # Mission, architecture, and comparison
│   ├── api/
│   │   └── execute/       # Rate-limited POST /api/execute sandboxed runner
│   ├── categories/        # Category taxonomy overview
│   ├── privacy/           # Comprehensive privacy policy
│   ├── tools/
│   │   ├── compiler/      # Dedicated Online Compiler route with Monaco
│   │   ├── [slug]/        # Dynamic route for all tools
│   │   └── page.tsx       # Searchable & filterable tools directory
│   ├── globals.css        # Tailwind v4 theme and custom styles
│   ├── layout.tsx         # Root layout with ThemeProvider, Navbar, Footer
│   ├── page.tsx           # Homepage with hero, search, and popular tools
│   ├── robots.ts          # Search engine crawler instructions
│   └── sitemap.ts         # Dynamic XML sitemap generation
├── components/
│   ├── compiler/          # Compiler, CodeEditor, LanguageSelector, InputPanel, OutputPanel
│   ├── home/              # Homepage specific components (HomeHeroSearch)
│   ├── icons/             # Lucide dynamic icon wrapper
│   ├── layout/            # Navbar, Footer
│   ├── search/            # Global Cmd+K Search Palette modal
│   ├── theme/             # ThemeProvider, ThemeToggle
│   ├── tools/             # Tool components, ToolLayout, ToolCard, ToolFaq
│   └── ui/                # CopyButton, DownloadButton, ErrorMessage
├── lib/
│   ├── compiler/          # types.ts, languages.ts, execution-service.ts, rate-limiter.ts, providers/
│   ├── crypto-hashes.ts   # Web Crypto SHA and client-side MD5 routines
│   ├── tools-registry.ts  # Single source of truth for tools and metadata
│   └── utils.ts           # Class merge, clipboard, and download helpers
└── types/
    └── tool.ts            # TypeScript definitions for tools and categories
```

---

## ⌨️ Keyboard Shortcuts

* <kbd>Ctrl</kbd> + <kbd>K</kbd> or <kbd>⌘</kbd> + <kbd>K</kbd> : Open global tool search palette
* <kbd>Esc</kbd> : Close modal dialogs
* <kbd>↑</kbd> / <kbd>↓</kbd> : Navigate search results
* <kbd>Enter</kbd> : Select tool

---

## 🤝 Contributing

Contributions are warmly welcomed! Please follow these guidelines:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/new-developer-tool`.
3. Add your tool definition to `lib/tools-registry.ts`.
4. Implement the interactive component in `components/tools/`.
5. Ensure 100% of data processing remains strictly client-side.
6. Verify code compiles with `npm run build` and `npm run lint`.
7. Submit a pull request.

---

## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more details.
