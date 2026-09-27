import { ToolDefinition, ToolCategory } from '@/types/tool';

export const CATEGORIES: { id: ToolCategory; label: string; description: string; icon: string }[] = [
  {
    id: 'data',
    label: 'Data',
    description: 'Transform, format, convert, and inspect data structures directly in your browser.',
    icon: 'Database',
  },
  {
    id: 'security',
    label: 'Security',
    description: 'Inspect tokens, generate cryptographic hashes, and evaluate passwords with zero data leaks.',
    icon: 'Shield',
  },
  {
    id: 'web',
    label: 'Web',
    description: 'URL encode/decode, inspect HTTP response codes, and manipulate CSS color systems.',
    icon: 'Globe',
  },
  {
    id: 'developer',
    label: 'Developer',
    description: 'Essential developer utilities including UUID generation, timestamps, and regex testing.',
    icon: 'Terminal',
  },
  {
    id: 'converters',
    label: 'Converters',
    description: 'Convert between PDF, Word, plain text, and multiple image formats entirely in your browser.',
    icon: 'Repeat',
  },
  {
    id: 'compressors',
    label: 'Compressors',
    description: 'Reduce file sizes of images, PDF documents, and multi-file ZIP archives with zero quality compromise.',
    icon: 'Minimize2',
  },
];

export const TOOLS: ToolDefinition[] = [
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    tagline: 'Format, validate, beautify, and minify JSON data',
    shortDescription: 'Format, validate, and minify JSON strings with line & column syntax error detection.',
    longDescription:
      'A blazing-fast, privacy-first JSON formatter and validator. Clean up messy APIs, minify payloads for production, inspect syntax errors with exact line and column numbers, and download formatted outputs directly to your disk.',
    category: 'data',
    categoryLabel: 'Data',
    icon: 'Braces',
    popular: true,
    keywords: ['json', 'format', 'beautify', 'minify', 'validate', 'syntax', 'prettify', 'parser'],
    howToUse: [
      'Paste your raw or minified JSON text into the editor, or upload a .json file.',
      'Click "Format" to beautify with customizable indentation (2 spaces, 4 spaces, or tab).',
      'Click "Minify" to strip out all unnecessary whitespace for compact payloads.',
      'Review any syntax errors in real-time with line and column highlighting.',
      'Click "Copy" or "Download" to save your validated JSON.',
    ],
    features: [
      'Zero server roundtrips — all parsing happens in your local browser runtime',
      'Configurable indentation: 2 spaces, 4 spaces, or tabs',
      'One-click minification to reduce payload sizes',
      'File upload (.json, .txt) and direct file download',
      'Pinpoint syntax error indicators with line and column numbers',
      'Live statistics: byte count, character count, and line count',
    ],
    faq: [
      {
        question: 'Is my JSON uploaded to any server or logged?',
        answer: 'No. Code&Tools executes all formatting and validation locally inside your browser using the JavaScript runtime. No network requests are sent.',
      },
      {
        question: 'What is the maximum file size supported?',
        answer: 'Since it runs entirely in your browser memory, it can handle tens of megabytes of JSON quickly without crashing.',
      },
      {
        question: 'Can it repair broken JSON?',
        answer: 'The validator identifies the exact line and position of syntax errors (such as unquoted keys or trailing commas) so you can fix them immediately.',
      },
    ],
    relatedSlugs: ['json-yaml', 'base64', 'jwt-decoder'],
  },
  {
    slug: 'json-yaml',
    name: 'JSON ↔ YAML Converter',
    tagline: 'Bidirectional conversion between JSON and YAML syntax',
    shortDescription: 'Convert JSON to YAML and YAML to JSON seamlessly with live validation.',
    longDescription:
      'Switch between JSON configurations and clean YAML manifests instantly. Perfect for Kubernetes deployments, GitHub Actions, Docker Compose, OpenAPI specs, and cloud infrastructure files.',
    category: 'data',
    categoryLabel: 'Data',
    icon: 'FileCode2',
    popular: true,
    keywords: ['yaml', 'json', 'convert', 'kubernetes', 'k8s', 'docker-compose', 'parser', 'stringify'],
    howToUse: [
      'Choose the conversion direction (JSON → YAML or YAML → JSON).',
      'Paste or upload your source code into the left editor.',
      'The converted result is generated instantly in the output panel.',
      'Copy the output to your clipboard or download it as a .yaml or .json file.',
    ],
    features: [
      'Bidirectional real-time conversion powered by battle-tested js-yaml',
      'Syntax error feedback with line numbers for broken YAML or JSON',
      'Customizable YAML indent spacing (2 or 4 spaces)',
      'File upload and download support for both formats',
      '100% client-side privacy for proprietary configurations and env files',
    ],
    faq: [
      {
        question: 'Does this support YAML anchors and aliases?',
        answer: 'Yes, standard YAML features like anchors, aliases, and complex mappings are parsed according to the YAML 1.2 specification.',
      },
      {
        question: 'Are my configuration secrets safe?',
        answer: 'Yes. Code&Tools never uploads your configuration files. All parsing and conversion are executed locally in memory.',
      },
    ],
    relatedSlugs: ['json-formatter', 'base64', 'url-encoder'],
  },
  {
    slug: 'jwt-decoder',
    name: 'JWT Decoder',
    tagline: 'Decode, inspect, and analyze JSON Web Tokens locally',
    shortDescription: 'Decode JWT headers, payloads, and signatures with human-readable expiration dates.',
    longDescription:
      'Safely inspect JSON Web Tokens without risking leaking sensitive authentication claims to third-party web servers. View decoded headers, claims, issued-at, expiration timestamps, and token validity statuses.',
    category: 'security',
    categoryLabel: 'Security',
    icon: 'KeyRound',
    popular: true,
    keywords: ['jwt', 'json web token', 'decode', 'bearer', 'token', 'auth', 'claims', 'exp', 'iat'],
    howToUse: [
      'Paste your raw JWT string (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...) into the input field.',
      'Review the color-coded Header (pink/red), Payload (purple/indigo), and Signature (cyan/blue).',
      'Check the expiration banner to see whether the token is currently active or expired.',
      'Inspect human-readable timestamps for iat, exp, and nbf claims.',
    ],
    features: [
      '100% client-side token parsing — zero secret leakage risk',
      'Color-coded token segment visualization matching RFC 7519 standards',
      'Automatic ISO date and relative time formatting for exp, iat, and nbf timestamps',
      'Clear expiration state badge (Active, Expired, or Missing Expiry)',
      'Prominent disclaimer clarifying that local decoding does not verify server signatures',
    ],
    faq: [
      {
        question: 'Does this tool verify the signature of my token?',
        answer: 'No. This tool decodes JWTs locally for inspection. It does NOT verify the signature because signature verification requires your secret key or public certificate.',
      },
      {
        question: 'Is it safe to paste production tokens here?',
        answer: 'Yes, Code&Tools runs completely in your browser without sending any payload across the network. However, as a general security best practice, never share production bearer tokens with untrusted devices.',
      },
      {
        question: 'What is a JWT composed of?',
        answer: 'A JSON Web Token consists of three base64url-encoded parts separated by dots (.): the Header (algorithm & token type), the Payload (claims & permissions), and the Signature.',
      },
    ],
    relatedSlugs: ['base64', 'hash-generator', 'timestamp'],
  },
  {
    slug: 'base64',
    name: 'Base64 Encoder / Decoder',
    tagline: 'Encode and decode strings with full Unicode & URL-safe support',
    shortDescription: 'Convert text to Base64 and Base64 to text with robust UTF-8 emoji and international character support.',
    longDescription:
      'A reliable Base64 utility that properly supports UTF-8, international character sets, and emojis without falling victim to JavaScript atob/btoa Latin-1 encoding bugs. Supports standard and URL-safe Base64 variants.',
    category: 'data',
    categoryLabel: 'Data',
    icon: 'Binary',
    popular: true,
    keywords: ['base64', 'encode', 'decode', 'utf8', 'unicode', 'binary', 'ascii', 'url-safe'],
    howToUse: [
      'Select Encode mode to convert plain text to Base64, or Decode mode to convert Base64 to text.',
      'Enter or paste your content in the input area.',
      'Toggle URL-Safe mode if you need safe query parameters (- and _ instead of + and /).',
      'Click Copy to grab the transformed result instantly.',
    ],
    features: [
      'True UTF-8 and emoji support via native TextEncoder and TextDecoder APIs',
      'Optional URL-safe Base64 mode without problematic padding characters',
      'One-click Swap Direction button to invert inputs and outputs',
      'Instant real-time transformation as you type',
      'Clear error reporting for corrupted Base64 strings',
    ],
    faq: [
      {
        question: 'Why do other Base64 web tools fail on emojis and accents?',
        answer: 'Standard browser btoa/atob only handles Latin-1 (characters up to code point 255). Code&Tools uses the modern TextEncoder and TextDecoder APIs to handle 100% of Unicode and emojis properly.',
      },
      {
        question: 'What is URL-safe Base64?',
        answer: 'Standard Base64 contains "+" and "/" characters which have special meanings in URLs. URL-safe Base64 replaces "+" with "-" and "/" with "_", making it safe for query parameters and headers.',
      },
    ],
    relatedSlugs: ['jwt-decoder', 'url-encoder', 'hash-generator'],
  },
  {
    slug: 'uuid-generator',
    name: 'UUID Generator',
    tagline: 'Generate cryptographically secure v4 UUIDs in bulk',
    shortDescription: 'Generate RFC 4122 compliant version-4 UUIDs with batching, case formatting, and export.',
    longDescription:
      'Generate cryptographically secure Version 4 UUIDs (Universally Unique Identifiers) directly via the Web Crypto API. Support for single or bulk generation (up to 100 UUIDs), uppercase/lowercase, hyphens, and braces.',
    category: 'developer',
    categoryLabel: 'Developer',
    icon: 'Fingerprint',
    popular: true,
    keywords: ['uuid', 'guid', 'v4', 'generator', 'unique id', 'rfc4122', 'crypto', 'random'],
    howToUse: [
      'Select the number of UUIDs you want to generate (1, 5, 10, 50, or 100).',
      'Configure options: Uppercase vs Lowercase, With or Without Hyphens, With Braces.',
      'Click "Regenerate" at any time to produce a fresh batch.',
      'Click individual copy buttons or "Copy All" to grab the entire list.',
    ],
    features: [
      'Cryptographically secure randomness via browser crypto.randomUUID()',
      'Bulk generation: 1, 5, 10, 50, or 100 UUIDs in one click',
      'Custom formatting: Uppercase, Lowercase, Without Hyphens, Braces { }',
      'Copy individual UUID or all generated UUIDs at once',
      'Export as plain text (.txt) or JSON array (.json)',
    ],
    faq: [
      {
        question: 'Are these UUIDs cryptographically secure?',
        answer: 'Yes. Code&Tools utilizes the browser\'s native crypto.randomUUID() and crypto.getRandomValues() which draw entropy from the operating system\'s cryptographic PRNG.',
      },
      {
        question: 'What are the chances of two UUID v4 collisions?',
        answer: 'The probability of a collision is virtually zero. After generating 1 billion UUIDs every second for 100 years, the probability of generating a single duplicate is still roughly 1 in a billion.',
      },
    ],
    relatedSlugs: ['hash-generator', 'timestamp', 'regex-tester'],
  },
  {
    slug: 'timestamp',
    name: 'Unix Timestamp Converter',
    tagline: 'Convert Unix epochs to human-readable dates and vice versa',
    shortDescription: 'Convert between Unix timestamps (seconds & ms) and human dates in local & UTC timezones.',
    longDescription:
      'A real-time Unix timestamp converter. View the live ticking epoch time, convert seconds or milliseconds into formatted local and UTC dates, or pick a calendar date to generate its exact Unix epoch value.',
    category: 'developer',
    categoryLabel: 'Developer',
    icon: 'Clock',
    popular: true,
    keywords: ['timestamp', 'epoch', 'unix', 'time', 'date', 'utc', 'timezone', 'converter'],
    howToUse: [
      'Watch the live ticking Unix timestamp at the top with one-click pause and copy.',
      'In the Epoch to Date panel, paste any timestamp in seconds or milliseconds.',
      'In the Date to Epoch panel, select a date & time to calculate the corresponding timestamp.',
      'Use quick helper presets like "+1 hour", "+1 day", or "Start of Today".',
    ],
    features: [
      'Live ticking timestamp showing current seconds and milliseconds',
      'Auto-detects whether your timestamp is in seconds (10 digits) or milliseconds (13 digits)',
      'Simultaneous display in UTC, your local timezone, ISO 8601, and RFC 2822',
      'Relative human-readable time (e.g. "3 hours ago", "in 2 days")',
      'Quick date math presets (+1 hour, +24 hours, Start of day, End of day)',
    ],
    faq: [
      {
        question: 'What is a Unix timestamp?',
        answer: 'The Unix epoch is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds.',
      },
      {
        question: 'What is the Year 2038 problem?',
        answer: 'On January 19, 2038, 32-bit signed integers will overflow the Unix timestamp counter. Modern systems and Code&Tools use 64-bit timestamps which will not overflow for billions of years.',
      },
    ],
    relatedSlugs: ['jwt-decoder', 'uuid-generator', 'regex-tester'],
  },
  {
    slug: 'url-encoder',
    name: 'URL Encoder / Decoder',
    tagline: 'Safely encode and decode full URLs and query string parameters',
    shortDescription: 'Encode and decode URLs and URI components with automatic query parameter parsing.',
    longDescription:
      'Safely encode special characters for URLs and query parameters, or decode percent-encoded URLs. Code&Tools also automatically breaks down and displays all query string parameters in a clean interactive table.',
    category: 'web',
    categoryLabel: 'Web',
    icon: 'Link2',
    popular: false,
    keywords: ['url', 'uri', 'encode', 'decode', 'percent-encoding', 'querystring', 'params', 'http'],
    howToUse: [
      'Select your operation mode: Encode or Decode.',
      'Choose between "Full URL" (encodeURI) and "URL Component" (encodeURIComponent).',
      'Paste your URL or query string into the input box.',
      'View the encoded/decoded string and inspect parsed query parameters in the table below.',
    ],
    features: [
      'Supports both encodeURI (leaves protocol/path intact) and encodeURIComponent (escapes slashes/delimiters)',
      'Live query parameter inspector table separating keys and values',
      'One-click copy for the whole transformed URL or individual query parameters',
      'Instant clear and sample URL buttons',
    ],
    faq: [
      {
        question: 'What is the difference between encodeURI and encodeURIComponent?',
        answer: 'encodeURI is designed for complete URLs and will not encode reserved characters like :, /, ?, and &. In contrast, encodeURIComponent encodes everything, making it suitable for single query parameter values.',
      },
      {
        question: 'What characters are encoded?',
        answer: 'Characters like spaces (%20), quotes, ampersands, plus signs, and non-ASCII characters are converted into percent-encoded UTF-8 octets.',
      },
    ],
    relatedSlugs: ['base64', 'regex-tester', 'color-converter'],
  },
  {
    slug: 'regex-tester',
    name: 'Regex Tester',
    tagline: 'Test regular expressions with live match highlighting and groups',
    shortDescription: 'Test JavaScript regex patterns in real-time with capturing groups and syntax cheat sheet.',
    longDescription:
      'A responsive regular expression tester for JavaScript/ECMAScript regex. Test patterns against multiline inputs, toggle flags (g, i, m, s, u), inspect matched indices and capturing groups, and browse a quick reference cheat sheet.',
    category: 'developer',
    categoryLabel: 'Developer',
    icon: 'Regex',
    popular: true,
    keywords: ['regex', 'regexp', 'regular expression', 'tester', 'pattern', 'match', 'groups', 'flags'],
    howToUse: [
      'Type your regex pattern in the expression field (without leading/trailing slashes).',
      'Toggle active flags: g (global), i (case insensitive), m (multiline), s (dotAll), u (unicode).',
      'Type or paste your test string into the text area.',
      'Matches are instantly highlighted with color-coded indices.',
      'Inspect capturing groups and positions in the match breakdown table.',
    ],
    features: [
      'Live match highlighting directly on top of your test string',
      'Flag controls: g (global), i (case insensitive), m (multiline), s (dotAll), u (unicode)',
      'Capturing group extraction with named & numbered group breakdowns',
      'Comprehensive regex cheat sheet with syntax examples',
      'Quick presets: Email, URL, IPv4 address, Date (YYYY-MM-DD), Hex Color, Phone',
    ],
    faq: [
      {
        question: 'Which regular expression engine is used?',
        answer: 'Code&Tools uses your browser\'s native JavaScript RegExp engine (V8 on Chrome/Edge/Node, SpiderMonkey on Firefox, JavaScriptCore on Safari), guaranteeing 100% fidelity with client-side code.',
      },
      {
        question: 'What do regex flags do?',
        answer: 'Flags modify match behavior: "g" finds all matches rather than stopping at the first; "i" ignores uppercase/lowercase differences; "m" treats ^ and $ as beginning/end of each line; "s" allows dots (.) to match newlines.',
      },
    ],
    relatedSlugs: ['url-encoder', 'uuid-generator', 'timestamp'],
  },
  {
    slug: 'hash-generator',
    name: 'Hash Generator',
    tagline: 'Generate SHA-256, SHA-384, SHA-512, SHA-1, and MD5 hashes',
    shortDescription: 'Compute cryptographic hashes locally via Web Crypto API with uppercase/lowercase formatting.',
    longDescription:
      'Generate cryptographic hashes directly in your browser using the native Web Crypto API. Support for SHA-256, SHA-384, SHA-512, SHA-1, and MD5 with zero server uploads, keeping all sensitive keys and passwords private.',
    category: 'security',
    categoryLabel: 'Security',
    icon: 'Hash',
    popular: true,
    keywords: ['hash', 'sha256', 'sha512', 'sha384', 'sha1', 'md5', 'crypto', 'checksum', 'digest'],
    howToUse: [
      'Enter or paste text into the input field.',
      'Select your preferred algorithm (SHA-256, SHA-384, SHA-512, SHA-1, or MD5).',
      'Toggle between Lowercase and Uppercase hexadecimal representations.',
      'Click the copy button beside any computed hash to use it in your code.',
    ],
    features: [
      'Powered by native browser window.crypto.subtle.digest for hardware-accelerated speed',
      'Supports SHA-256, SHA-384, SHA-512, SHA-1, and MD5',
      'Uppercase and lowercase hex toggling',
      'Instant parallel computation of all algorithms simultaneously',
      '100% private: password and text digests never leave your computer',
    ],
    faq: [
      {
        question: 'Which hashing algorithm is recommended for security?',
        answer: 'SHA-256 or SHA-512 are recommended for modern security and integrity verification. MD5 and SHA-1 have known collision vulnerabilities and should only be used for legacy checksums or non-cryptographic identifiers.',
      },
      {
        question: 'Can these hashes be decrypted or reversed?',
        answer: 'Cryptographic hash functions are one-way mathematical operations designed to be impossible to invert. You cannot reverse a hash back to its original plain text.',
      },
    ],
    relatedSlugs: ['jwt-decoder', 'uuid-generator', 'base64'],
  },
  {
    slug: 'color-converter',
    name: 'Color Converter',
    tagline: 'Convert HEX, RGB, HSL, and HSV with live WCAG contrast check',
    shortDescription: 'Convert between HEX, RGB, HSL, HSV, inspect WCAG contrast, and view palettes.',
    longDescription:
      'A comprehensive color converter and accessibility inspector for UI designers and developers. Seamlessly convert between HEX, RGB, HSL, and HSV color models, test WCAG accessibility contrast ratios, and generate harmonic color schemes.',
    category: 'web',
    categoryLabel: 'Web',
    icon: 'Palette',
    popular: true,
    keywords: ['color', 'hex', 'rgb', 'hsl', 'hsv', 'wcag', 'contrast', 'palette', 'picker', 'css'],
    howToUse: [
      'Use the visual color picker or type a color code in HEX, RGB, or HSL format.',
      'All color representations update automatically in real time.',
      'Review the WCAG contrast score against pure black and pure white backgrounds.',
      'Explore harmonious color palettes: complementary, monochromatic, and analogous.',
      'Click any format copy button to paste straight into your CSS.',
    ],
    features: [
      'Real-time conversion across HEX (#RRGGBB), RGB, HSL, and HSV formats',
      'Interactive visual color picker and sliders',
      'WCAG 2.1 contrast ratio calculations with AA and AAA accessibility ratings',
      'Color harmonics: complementary, analogous, and monochromatic palette previews',
      'One-click copy for CSS-ready color definitions',
    ],
    faq: [
      {
        question: 'What is WCAG contrast ratio?',
        answer: 'The Web Content Accessibility Guidelines (WCAG) require text to contrast with its background. Level AA requires at least 4.5:1 for normal text (3:1 for large text), while Level AAA requires 7:1.',
      },
      {
        question: 'What is the advantage of HSL over RGB?',
        answer: 'HSL (Hue, Saturation, Lightness) is much more intuitive for human designers because adjusting brightness or tint only requires changing a single number, whereas RGB requires adjusting all three channels.',
      },
    ],
    relatedSlugs: ['url-encoder', 'json-formatter', 'regex-tester'],
  },
  {
    slug: 'compiler',
    name: 'Online Compiler',
    tagline: 'Compile and run C, C++, Java, Python & TypeScript online',
    shortDescription:
      'Compile and run C, C++, Java, Python, and TypeScript directly from your browser in a secure sandbox.',
    longDescription:
      'A high-performance online IDE and code runner supporting C (GCC), C++ (G++), Java (OpenJDK), Python, and TypeScript. Features syntax-highlighted Monaco editor, standard input (stdin) support, real-time execution outputs, line-numbered compiler diagnostics, and file download.',
    category: 'developer',
    categoryLabel: 'Developer',
    icon: 'Terminal',
    popular: true,
    keywords: [
      'online compiler',
      'C compiler',
      'C++ compiler',
      'Java compiler',
      'Python compiler',
      'TypeScript compiler',
      'TypeScript runner',
      'online code runner',
      'programming compiler',
      'ide',
      'code runner',
      'btech coding',
    ],
    howToUse: [
      'Select your programming language (C, C++, Java, Python, or TypeScript) from the top bar.',
      'Write or paste your source code into the Monaco code editor.',
      'If your program requires input (e.g. scanf, cin, input()), type it into the Standard Input (stdin) panel.',
      'Click "Run ▶" or press Ctrl+Enter (⌘+Enter on Mac) to compile and execute.',
      'Inspect stdout, diagnostic compilation errors, execution time, and exit codes in the terminal console.',
    ],
    features: [
      'Sandboxed execution environment with process isolation and memory/CPU limits',
      'Monaco code editor with auto-closing brackets, syntax highlighting, and theme integration',
      'Supports C (GCC 9.2.0), C++ (G++ 9.2.0), Java (OpenJDK 13.0.1), Python (3.8.1/3.10), and TypeScript (5.6.2)',
      'Interactive Standard Input (stdin) support with quick sample inputs',
      'Color-coded terminal output with execution time and exit code indicators',
      'One-click code download with appropriate language file extensions',
    ],
    faq: [
      {
        question: 'How does Code&Tools execute code securely?',
        answer:
          'All code execution occurs inside isolated, sandboxed container environments with strict resource caps on CPU time, wall time, memory, and output size. The main application never executes user code directly.',
      },
      {
        question: 'Does my code stay in the browser?',
        answer:
          'Unlike our pure client-side tools (like JSON formatter or Base64 encoder), compilation and execution require an isolated sandbox backend. Code is transmitted securely over HTTPS solely for compilation and execution, and is never stored or used for training.',
      },
      {
        question: 'Can I provide input to interactive programs?',
        answer:
          'Yes! Provide any expected inputs in the Standard Input (stdin) panel before clicking Run. The program will consume stdin sequentially when calling scanf, cin, System.in, or input().',
      },
      {
        question: 'What happens if my program has an infinite loop?',
        answer:
          'The sandbox enforces a 5-second CPU time limit. If a program exceeds this limit, execution is immediately terminated and a "Time Limit Exceeded" status is reported.',
      },
    ],
    relatedSlugs: ['regex-tester', 'uuid-generator', 'timestamp'],
  },
  // Converters
  {
    slug: 'pdf-to-word',
    name: 'PDF to Word Converter',
    tagline: 'Convert PDF documents to editable Microsoft Word (.docx) files',
    shortDescription: 'Convert PDFs to editable DOCX documents directly in your browser with zero data upload.',
    longDescription:
      'Extract text and structure from PDF documents and generate clean Microsoft Word (.docx) documents. Operates completely client-side in your browser for absolute document privacy.',
    category: 'converters',
    categoryLabel: 'Converters',
    icon: 'FileType',
    popular: true,
    keywords: ['pdf', 'word', 'docx', 'convert', 'pdf to docx', 'document', 'pdf to word'],
    howToUse: [
      'Upload or drag & drop your PDF file.',
      'Click Convert to Word to parse document streams and build a DOCX file.',
      'Download your generated Microsoft Word (.docx) file immediately.',
    ],
    features: [
      '100% browser-based conversion with zero server uploads',
      'Instant extraction to standard Microsoft Word format',
      'Configurable file limit up to 30 MB',
      'Immediate client-side download',
    ],
    faq: [
      {
        question: 'Are my confidential documents uploaded to any server?',
        answer: 'No. All PDF stream extraction and DOCX generation run purely inside your web browser. Your document never leaves your machine.',
      },
      {
        question: 'Will complex layouts and tables convert perfectly?',
        answer: 'Complex layouts, images, tables, and custom embedded fonts may not convert with 100% visual parity compared to commercial OCR suites. Clean text and standard paragraphs convert reliably.',
      },
    ],
    relatedSlugs: ['word-to-pdf', 'pdf-to-text', 'image-to-pdf'],
  },
  {
    slug: 'word-to-pdf',
    name: 'Word to PDF Converter',
    tagline: 'Convert DOCX documents to formatted PDF files',
    shortDescription: 'Convert Microsoft Word (.docx) files into clean, readable PDF documents in your browser.',
    longDescription:
      'Turn Microsoft Word (.docx) documents into standard PDFs. Parses styles and body paragraphs in your browser with no cloud uploads.',
    category: 'converters',
    categoryLabel: 'Converters',
    icon: 'FileText',
    popular: true,
    keywords: ['word', 'pdf', 'docx', 'word to pdf', 'convert docx to pdf'],
    howToUse: [
      'Select or drag & drop your .docx file.',
      'Click Convert to PDF.',
      'Download your newly formatted PDF file.',
    ],
    features: [
      'Runs locally in browser via mammoth & pdf-lib',
      'Zero cloud storage or document caching',
      'Supports standard margins and typography',
    ],
    faq: [
      {
        question: 'Does this support older .doc files?',
        answer: 'This converter supports modern Office Open XML format (.docx). For older binary .doc files, please resave as .docx first.',
      },
    ],
    relatedSlugs: ['pdf-to-word', 'pdf-to-text', 'image-to-pdf'],
  },
  {
    slug: 'pdf-to-text',
    name: 'PDF to Text Extractor',
    tagline: 'Extract readable plain text from PDF documents',
    shortDescription: 'Extract plain text from any PDF document with instant clipboard copy and .txt download.',
    longDescription:
      'Fast, client-side PDF text extraction. Pulls text from document streams without sending confidential documents over the network.',
    category: 'converters',
    categoryLabel: 'Converters',
    icon: 'FileText',
    popular: false,
    keywords: ['pdf', 'text', 'extract', 'pdf to txt', 'txt'],
    howToUse: [
      'Upload your PDF file.',
      'Click Extract Text.',
      'Inspect extracted content, copy to clipboard, or download as a .txt file.',
    ],
    features: [
      'Instant client-side text stream parser',
      'One-click copy to clipboard',
      'Clean .txt file export',
    ],
    faq: [
      {
        question: 'Can it read scanned image-only PDFs?',
        answer: 'It extracts embedded digital text from searchable PDFs. Pure scanned image PDFs without an OCR layer will have no raw text stream.',
      },
    ],
    relatedSlugs: ['pdf-to-word', 'word-to-pdf'],
  },
  {
    slug: 'image-to-pdf',
    name: 'Image to PDF Converter',
    tagline: 'Convert and merge JPG, PNG, and WebP images into a single PDF',
    shortDescription: 'Combine multiple images into a clean, paginated PDF with custom page orientation and dimensions.',
    longDescription:
      'Upload one or multiple JPG, PNG, or WebP pictures, reorder them, select page size (A4, Letter, Auto), choose orientation, and generate a polished PDF document in seconds.',
    category: 'converters',
    categoryLabel: 'Converters',
    icon: 'Image',
    popular: true,
    keywords: ['image to pdf', 'jpg to pdf', 'png to pdf', 'merge photos to pdf', 'convert pictures'],
    howToUse: [
      'Select or drag & drop one or more images (JPG, PNG, WebP).',
      'Select page format (Auto-fit, A4, Letter) and orientation (Portrait, Landscape).',
      'Click Convert to PDF and download your document.',
    ],
    features: [
      'Multi-image batch support',
      'Auto-fit image dimensions or standard A4/Letter pagination',
      'Zero server upload — 100% private',
    ],
    faq: [
      {
        question: 'How many images can I add?',
        answer: 'You can combine dozens of images up to browser memory limits. We recommend files up to 25MB each.',
      },
    ],
    relatedSlugs: ['pdf-to-word', 'pdf-to-text', 'jpg-to-png'],
  },
  {
    slug: 'jpg-to-png',
    name: 'JPG to PNG Converter',
    tagline: 'Convert JPG/JPEG images to lossless PNG format',
    shortDescription: 'Transform JPEG images to lossless PNG format with transparent alpha channel support.',
    longDescription:
      'Fast in-browser converter to transform compressed JPEG images into lossless PNG format. Perfect for image editing pipelines.',
    category: 'converters',
    categoryLabel: 'Converters',
    icon: 'Image',
    popular: false,
    keywords: ['jpg to png', 'jpeg to png', 'image converter', 'convert photo'],
    howToUse: [
      'Upload a JPG or JPEG photo.',
      'Click Convert to PNG.',
      'Download your lossless PNG image.',
    ],
    features: ['High-speed HTML5 Canvas rasterization', 'Zero compression artifacts in output PNG', 'Private & client-side'],
    faq: [
      {
        question: 'Does converting JPG to PNG increase image quality?',
        answer: 'No format conversion can restore data previously lost during JPEG compression, but PNG prevents any further loss during subsequent editing.',
      },
    ],
    relatedSlugs: ['png-to-jpg', 'image-to-webp', 'webp-converter'],
  },
  {
    slug: 'png-to-jpg',
    name: 'PNG to JPG Converter',
    tagline: 'Convert PNG images to compact JPG/JPEG format',
    shortDescription: 'Convert PNG graphics to lightweight JPGs with adjustable compression quality.',
    longDescription:
      'Reduce graphic file size by converting heavy PNG images to standard JPEG format with custom quality sliders and background fill handling.',
    category: 'converters',
    categoryLabel: 'Converters',
    icon: 'Image',
    popular: false,
    keywords: ['png to jpg', 'png to jpeg', 'compress png to jpg'],
    howToUse: [
      'Upload your PNG graphic.',
      'Set desired compression quality (10% to 100%).',
      'Click Convert to JPG and download.',
    ],
    features: ['Adjustable quality factor', 'Automatic solid background fill for transparent areas', 'Instant local conversion'],
    faq: [
      {
        question: 'What happens to transparency?',
        answer: 'Since JPEG does not support transparency, transparent areas are smoothly filled with a clean white background.',
      },
    ],
    relatedSlugs: ['jpg-to-png', 'image-to-webp', 'webp-converter'],
  },
  {
    slug: 'webp-converter',
    name: 'WebP Converter',
    tagline: 'Convert modern WebP images to standard JPG or PNG',
    shortDescription: 'Convert WebP pictures to universally compatible JPG or PNG formats in your browser.',
    longDescription:
      'Make WebP files universally compatible with legacy photo viewers, editors, and operating systems by converting them to JPG or PNG.',
    category: 'converters',
    categoryLabel: 'Converters',
    icon: 'Image',
    popular: false,
    keywords: ['webp converter', 'webp to png', 'webp to jpg', 'convert webp'],
    howToUse: [
      'Upload your .webp image.',
      'Choose whether to output as PNG or JPG.',
      'Download your converted image.',
    ],
    features: ['Instant browser decoding', 'Lossless PNG or compressed JPG output', 'Full privacy'],
    faq: [
      {
        question: 'Why convert WebP to JPG/PNG?',
        answer: 'Some older desktop applications, photo viewers, and print tools do not yet support modern WebP format.',
      },
    ],
    relatedSlugs: ['image-to-webp', 'jpg-to-png', 'png-to-jpg'],
  },
  {
    slug: 'image-to-webp',
    name: 'Image to WebP Converter',
    tagline: 'Convert JPG and PNG images to ultra-efficient WebP',
    shortDescription: 'Convert photos to next-generation WebP format to dramatically reduce web page load times.',
    longDescription:
      'Transform heavy JPEG and PNG images to modern WebP format with fine-tuned quality control, achieving 25% to 35% smaller file sizes without noticeable visual degradation.',
    category: 'converters',
    categoryLabel: 'Converters',
    icon: 'Image',
    popular: true,
    keywords: ['image to webp', 'png to webp', 'jpg to webp', 'next gen image format'],
    howToUse: [
      'Select any JPG, PNG, or GIF image.',
      'Adjust quality slider for your desired balance between file size and fidelity.',
      'Convert and download your optimized WebP image.',
    ],
    features: ['25-35% size reduction over JPG/PNG', 'Adjustable quality compression', '100% browser-based'],
    faq: [
      {
        question: 'Are WebP images supported across modern browsers?',
        answer: 'Yes! All major modern browsers (Chrome, Firefox, Safari, Edge) fully support WebP.',
      },
    ],
    relatedSlugs: ['webp-converter', 'image', 'jpg-to-png'],
  },

  // Compressors
  {
    slug: 'image',
    name: 'Image Compressor',
    tagline: 'Compress JPG, PNG, and WebP images with live savings calculations',
    shortDescription: 'Compress images directly in your browser with quality slider, dimension resizing, and ZIP export.',
    longDescription:
      'Reduce the file size of your JPG, PNG, and WebP images by up to 80% without losing visual clarity. Features multi-image upload, live before/after size comparisons, dimension scaling, and one-click ZIP download.',
    category: 'compressors',
    categoryLabel: 'Compressors',
    icon: 'Minimize2',
    popular: true,
    keywords: ['image compressor', 'compress image', 'reduce photo size', 'compress jpg', 'compress png', 'compress webp'],
    howToUse: [
      'Drag and drop one or multiple images into the compressor workspace.',
      'Adjust the quality slider (recommended 75-85%) and optional dimension scaling.',
      'Click Compress Images to process all files in parallel.',
      'Inspect size savings percentage and download individual files or a combined ZIP.',
    ],
    features: [
      'Processed 100% locally in your browser — zero server uploads',
      'Batch compression for multiple images at once',
      'Detailed size reduction stats and percentage saved',
      'Optional dimension downscaling (75%, 50%, 25%)',
      'One-click "Download All as ZIP"',
    ],
    faq: [
      {
        question: 'Are my images uploaded to any server or cloud?',
        answer: 'Never. All compression and canvas scaling run locally in your web browser. No photos ever touch an external server.',
      },
      {
        question: 'What quality setting is recommended for web images?',
        answer: 'A quality level between 75% and 85% typically reduces file size by 50% to 70% with virtually no perceptible loss in visual quality.',
      },
    ],
    relatedSlugs: ['pdf', 'zip', 'image-to-webp'],
  },
  {
    slug: 'pdf',
    name: 'PDF Compressor',
    tagline: 'Optimize and reduce PDF document file sizes',
    shortDescription: 'Compress PDF documents with customizable optimization levels directly in your browser.',
    longDescription:
      'Shrink heavy PDF documents for email attachments and web upload forms. Select from Low, Medium, or High compression levels to strip redundant streams and recompress internal objects.',
    category: 'compressors',
    categoryLabel: 'Compressors',
    icon: 'FileText',
    popular: true,
    keywords: ['pdf compressor', 'compress pdf', 'reduce pdf size', 'shrink pdf', 'pdf optimizer'],
    howToUse: [
      'Upload your PDF document.',
      'Choose a compression level: Low (preserves high image quality), Medium (balanced), or High (maximum reduction).',
      'Click Compress PDF and download your optimized document.',
    ],
    features: [
      '3 compression presets: Low, Medium, and High',
      'Accurate before & after byte comparison and percentage saved',
      'Clear notification if a PDF is already fully optimized',
      'Zero server upload — complete client-side security',
    ],
    faq: [
      {
        question: 'Why didn\'t my PDF shrink by a large percentage?',
        answer: 'Some PDFs already contain highly compressed JPEG streams or vector text. When a file is already optimized, re-compression cannot safely discard more data without breaking font tables or image clarity.',
      },
      {
        question: 'Is my confidential PDF document uploaded?',
        answer: 'No. The compression algorithm executes purely in client memory inside your browser.',
      },
    ],
    relatedSlugs: ['image', 'zip', 'pdf-to-word'],
  },
  {
    slug: 'zip',
    name: 'ZIP Compressor',
    tagline: 'Bundle and compress multiple files into a compact ZIP archive',
    shortDescription: 'Create compressed ZIP archives directly in your browser from multiple files.',
    longDescription:
      'Fast, local archive creation. Select or drop multiple files of any type, name your archive, and create a standard compressed .zip archive instantly using the DEFLATE algorithm.',
    category: 'compressors',
    categoryLabel: 'Compressors',
    icon: 'FileArchive',
    popular: true,
    keywords: ['zip compressor', 'create zip', 'zip files', 'compress archive', 'make zip online'],
    howToUse: [
      'Drag & drop or select the files you want to bundle.',
      'Give your archive a custom name.',
      'Click Create ZIP Archive and download immediately.',
    ],
    features: [
      'Powered by JSZip with DEFLATE compression',
      'Supports bundling documents, source code, images, and data files',
      'Detailed file count and byte reduction statistics',
      '100% private and offline-capable',
    ],
    faq: [
      {
        question: 'Are there file type restrictions?',
        answer: 'You can add any file type: code, PDFs, text, photos, audio, spreadsheets, or documents.',
      },
    ],
    relatedSlugs: ['image', 'pdf'],
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolDefinition[] {
  return TOOLS.filter((t) => t.category === category);
}

export function getPopularTools(): ToolDefinition[] {
  return TOOLS.filter((t) => t.popular);
}
