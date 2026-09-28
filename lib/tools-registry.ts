import { ToolDefinition, ToolCategory } from '@/types/tool';

export const CATEGORIES: { id: ToolCategory; label: string; description: string; icon: string }[] = [
  {
    "id": "developer",
    "label": "Developer",
    "description": "Essential developer utilities: code compilers, regex testing, Git & Linux cheatsheets, and ASCII tables.",
    "icon": "Terminal"
  },
  {
    "id": "text",
    "label": "Text",
    "description": "Text analysis, case conversion, whitespace cleaning, diff checking, and Markdown previewing.",
    "icon": "AlignLeft"
  },
  {
    "id": "data",
    "label": "JSON & Data",
    "description": "Format, validate, minify, and convert JSON, CSV, XML, and YAML data structures in your browser.",
    "icon": "Database"
  },
  {
    "id": "security",
    "label": "Security",
    "description": "Cryptographic hashing, password generation, JWT decoding/generation, tokens, and checksum verification.",
    "icon": "Shield"
  },
  {
    "id": "web",
    "label": "Web Dev",
    "description": "Meta tag generators, robots.txt, URL parsing, HTTP status codes, User-Agent inspection, and QR codes.",
    "icon": "Globe"
  },
  {
    "id": "images",
    "label": "Images",
    "description": "Client-side image compression and conversion between PNG, JPG, and WebP formats.",
    "icon": "Image"
  },
  {
    "id": "documents",
    "label": "Documents",
    "description": "PDF compression, text extraction, and document conversion running locally.",
    "icon": "FileText"
  },
  {
    "id": "time",
    "label": "Time & Date",
    "description": "Unix timestamps, date duration calculations, and interactive Cron expression explanation.",
    "icon": "Clock"
  },
  {
    "id": "math",
    "label": "Math & Numbers",
    "description": "Unit converters, decimal/binary/hex/octal converters, percentage calculators, and color systems.",
    "icon": "Calculator"
  },
  {
    "id": "ai",
    "label": "AI Tools",
    "description": "AI-assisted code explanation, regex breakdown, and algorithm understanding.",
    "icon": "Bot"
  },
  {
    "id": "utilities",
    "label": "Utilities",
    "description": "Everyday developer productivity utilities and helpers.",
    "icon": "Wand2"
  },
  {
    "id": "converters",
    "label": "Converters",
    "description": "File conversion utilities for documents and images.",
    "icon": "Repeat"
  },
  {
    "id": "compressors",
    "label": "Compressors",
    "description": "File compression utilities for images, PDFs, and ZIP archives.",
    "icon": "Minimize2"
  }
];

export const TOOLS: ToolDefinition[] = [
  {
    "slug": "json-formatter",
    "name": "JSON Formatter",
    "tagline": "Format, validate, beautify, and minify JSON data",
    "shortDescription": "Format, validate, and minify JSON strings with line & column syntax error detection.",
    "longDescription": "A blazing-fast, privacy-first JSON formatter and validator. Clean up messy APIs, minify payloads for production, inspect syntax errors with exact line and column numbers, and download formatted outputs directly to your disk.",
    "category": "data",
    "categoryLabel": "Data",
    "icon": "Braces",
    "popular": true,
    "keywords": [
      "json",
      "format",
      "beautify",
      "minify",
      "validate",
      "syntax",
      "prettify",
      "parser"
    ],
    "howToUse": [
      "Paste your raw or minified JSON text into the editor, or upload a .json file.",
      "Click \"Format\" to beautify with customizable indentation (2 spaces, 4 spaces, or tab).",
      "Click \"Minify\" to strip out all unnecessary whitespace for compact payloads.",
      "Review any syntax errors in real-time with line and column highlighting.",
      "Click \"Copy\" or \"Download\" to save your validated JSON."
    ],
    "features": [
      "Zero server roundtrips — all parsing happens in your local browser runtime",
      "Configurable indentation: 2 spaces, 4 spaces, or tabs",
      "One-click minification to reduce payload sizes",
      "File upload (.json, .txt) and direct file download",
      "Pinpoint syntax error indicators with line and column numbers",
      "Live statistics: byte count, character count, and line count"
    ],
    "faq": [
      {
        "question": "Is my JSON uploaded to any server or logged?",
        "answer": "No. Code&Tools executes all formatting and validation locally inside your browser using the JavaScript runtime. No network requests are sent."
      },
      {
        "question": "What is the maximum file size supported?",
        "answer": "Since it runs entirely in your browser memory, it can handle tens of megabytes of JSON quickly without crashing."
      },
      {
        "question": "Can it repair broken JSON?",
        "answer": "The validator identifies the exact line and position of syntax errors (such as unquoted keys or trailing commas) so you can fix them immediately."
      }
    ],
    "relatedSlugs": [
      "json-yaml",
      "base64",
      "jwt-decoder"
    ]
  },
  {
    "slug": "json-yaml",
    "name": "JSON ↔ YAML Converter",
    "tagline": "Bidirectional conversion between JSON and YAML syntax",
    "shortDescription": "Convert JSON to YAML and YAML to JSON seamlessly with live validation.",
    "longDescription": "Switch between JSON configurations and clean YAML manifests instantly. Perfect for Kubernetes deployments, GitHub Actions, Docker Compose, OpenAPI specs, and cloud infrastructure files.",
    "category": "data",
    "categoryLabel": "Data",
    "icon": "FileCode2",
    "popular": true,
    "keywords": [
      "yaml",
      "json",
      "convert",
      "kubernetes",
      "k8s",
      "docker-compose",
      "parser",
      "stringify"
    ],
    "howToUse": [
      "Choose the conversion direction (JSON → YAML or YAML → JSON).",
      "Paste or upload your source code into the left editor.",
      "The converted result is generated instantly in the output panel.",
      "Copy the output to your clipboard or download it as a .yaml or .json file."
    ],
    "features": [
      "Bidirectional real-time conversion powered by battle-tested js-yaml",
      "Syntax error feedback with line numbers for broken YAML or JSON",
      "Customizable YAML indent spacing (2 or 4 spaces)",
      "File upload and download support for both formats",
      "100% client-side privacy for proprietary configurations and env files"
    ],
    "faq": [
      {
        "question": "Does this support YAML anchors and aliases?",
        "answer": "Yes, standard YAML features like anchors, aliases, and complex mappings are parsed according to the YAML 1.2 specification."
      },
      {
        "question": "Are my configuration secrets safe?",
        "answer": "Yes. Code&Tools never uploads your configuration files. All parsing and conversion are executed locally in memory."
      }
    ],
    "relatedSlugs": [
      "json-formatter",
      "base64",
      "url-encoder"
    ]
  },
  {
    "slug": "jwt-decoder",
    "name": "JWT Decoder",
    "tagline": "Decode, inspect, and analyze JSON Web Tokens locally",
    "shortDescription": "Decode JWT headers, payloads, and signatures with human-readable expiration dates.",
    "longDescription": "Safely inspect JSON Web Tokens without risking leaking sensitive authentication claims to third-party web servers. View decoded headers, claims, issued-at, expiration timestamps, and token validity statuses.",
    "category": "security",
    "categoryLabel": "Security",
    "icon": "KeyRound",
    "popular": true,
    "keywords": [
      "jwt",
      "json web token",
      "decode",
      "bearer",
      "token",
      "auth",
      "claims",
      "exp",
      "iat"
    ],
    "howToUse": [
      "Paste your raw JWT string (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...) into the input field.",
      "Review the color-coded Header (pink/red), Payload (purple/indigo), and Signature (cyan/blue).",
      "Check the expiration banner to see whether the token is currently active or expired.",
      "Inspect human-readable timestamps for iat, exp, and nbf claims."
    ],
    "features": [
      "100% client-side token parsing — zero secret leakage risk",
      "Color-coded token segment visualization matching RFC 7519 standards",
      "Automatic ISO date and relative time formatting for exp, iat, and nbf timestamps",
      "Clear expiration state badge (Active, Expired, or Missing Expiry)",
      "Prominent disclaimer clarifying that local decoding does not verify server signatures"
    ],
    "faq": [
      {
        "question": "Does this tool verify the signature of my token?",
        "answer": "No. This tool decodes JWTs locally for inspection. It does NOT verify the signature because signature verification requires your secret key or public certificate."
      },
      {
        "question": "Is it safe to paste production tokens here?",
        "answer": "Yes, Code&Tools runs completely in your browser without sending any payload across the network. However, as a general security best practice, never share production bearer tokens with untrusted devices."
      },
      {
        "question": "What is a JWT composed of?",
        "answer": "A JSON Web Token consists of three base64url-encoded parts separated by dots (.): the Header (algorithm & token type), the Payload (claims & permissions), and the Signature."
      }
    ],
    "relatedSlugs": [
      "base64",
      "hash-generator",
      "timestamp"
    ]
  },
  {
    "slug": "base64",
    "name": "Base64 Encoder / Decoder",
    "tagline": "Encode and decode strings with full Unicode & URL-safe support",
    "shortDescription": "Convert text to Base64 and Base64 to text with robust UTF-8 emoji and international character support.",
    "longDescription": "A reliable Base64 utility that properly supports UTF-8, international character sets, and emojis without falling victim to JavaScript atob/btoa Latin-1 encoding bugs. Supports standard and URL-safe Base64 variants.",
    "category": "data",
    "categoryLabel": "Data",
    "icon": "Binary",
    "popular": true,
    "keywords": [
      "base64",
      "encode",
      "decode",
      "utf8",
      "unicode",
      "binary",
      "ascii",
      "url-safe"
    ],
    "howToUse": [
      "Select Encode mode to convert plain text to Base64, or Decode mode to convert Base64 to text.",
      "Enter or paste your content in the input area.",
      "Toggle URL-Safe mode if you need safe query parameters (- and _ instead of + and /).",
      "Click Copy to grab the transformed result instantly."
    ],
    "features": [
      "True UTF-8 and emoji support via native TextEncoder and TextDecoder APIs",
      "Optional URL-safe Base64 mode without problematic padding characters",
      "One-click Swap Direction button to invert inputs and outputs",
      "Instant real-time transformation as you type",
      "Clear error reporting for corrupted Base64 strings"
    ],
    "faq": [
      {
        "question": "Why do other Base64 web tools fail on emojis and accents?",
        "answer": "Standard browser btoa/atob only handles Latin-1 (characters up to code point 255). Code&Tools uses the modern TextEncoder and TextDecoder APIs to handle 100% of Unicode and emojis properly."
      },
      {
        "question": "What is URL-safe Base64?",
        "answer": "Standard Base64 contains \"+\" and \"/\" characters which have special meanings in URLs. URL-safe Base64 replaces \"+\" with \"-\" and \"/\" with \"_\", making it safe for query parameters and headers."
      }
    ],
    "relatedSlugs": [
      "jwt-decoder",
      "url-encoder",
      "hash-generator"
    ]
  },
  {
    "slug": "uuid-generator",
    "name": "UUID Generator",
    "tagline": "Generate cryptographically secure v4 UUIDs in bulk",
    "shortDescription": "Generate RFC 4122 compliant version-4 UUIDs with batching, case formatting, and export.",
    "longDescription": "Generate cryptographically secure Version 4 UUIDs (Universally Unique Identifiers) directly via the Web Crypto API. Support for single or bulk generation (up to 100 UUIDs), uppercase/lowercase, hyphens, and braces.",
    "category": "developer",
    "categoryLabel": "Developer",
    "icon": "Fingerprint",
    "popular": true,
    "keywords": [
      "uuid",
      "guid",
      "v4",
      "generator",
      "unique id",
      "rfc4122",
      "crypto",
      "random"
    ],
    "howToUse": [
      "Select the number of UUIDs you want to generate (1, 5, 10, 50, or 100).",
      "Configure options: Uppercase vs Lowercase, With or Without Hyphens, With Braces.",
      "Click \"Regenerate\" at any time to produce a fresh batch.",
      "Click individual copy buttons or \"Copy All\" to grab the entire list."
    ],
    "features": [
      "Cryptographically secure randomness via browser crypto.randomUUID()",
      "Bulk generation: 1, 5, 10, 50, or 100 UUIDs in one click",
      "Custom formatting: Uppercase, Lowercase, Without Hyphens, Braces { }",
      "Copy individual UUID or all generated UUIDs at once",
      "Export as plain text (.txt) or JSON array (.json)"
    ],
    "faq": [
      {
        "question": "Are these UUIDs cryptographically secure?",
        "answer": "Yes. Code&Tools utilizes the browser's native crypto.randomUUID() and crypto.getRandomValues() which draw entropy from the operating system's cryptographic PRNG."
      },
      {
        "question": "What are the chances of two UUID v4 collisions?",
        "answer": "The probability of a collision is virtually zero. After generating 1 billion UUIDs every second for 100 years, the probability of generating a single duplicate is still roughly 1 in a billion."
      }
    ],
    "relatedSlugs": [
      "hash-generator",
      "timestamp",
      "regex-tester"
    ]
  },
  {
    "slug": "timestamp",
    "name": "Unix Timestamp Converter",
    "tagline": "Convert Unix epochs to human-readable dates and vice versa",
    "shortDescription": "Convert between Unix timestamps (seconds & ms) and human dates in local & UTC timezones.",
    "longDescription": "A real-time Unix timestamp converter. View the live ticking epoch time, convert seconds or milliseconds into formatted local and UTC dates, or pick a calendar date to generate its exact Unix epoch value.",
    "category": "developer",
    "categoryLabel": "Developer",
    "icon": "Clock",
    "popular": true,
    "keywords": [
      "timestamp",
      "epoch",
      "unix",
      "time",
      "date",
      "utc",
      "timezone",
      "converter"
    ],
    "howToUse": [
      "Watch the live ticking Unix timestamp at the top with one-click pause and copy.",
      "In the Epoch to Date panel, paste any timestamp in seconds or milliseconds.",
      "In the Date to Epoch panel, select a date & time to calculate the corresponding timestamp.",
      "Use quick helper presets like \"+1 hour\", \"+1 day\", or \"Start of Today\"."
    ],
    "features": [
      "Live ticking timestamp showing current seconds and milliseconds",
      "Auto-detects whether your timestamp is in seconds (10 digits) or milliseconds (13 digits)",
      "Simultaneous display in UTC, your local timezone, ISO 8601, and RFC 2822",
      "Relative human-readable time (e.g. \"3 hours ago\", \"in 2 days\")",
      "Quick date math presets (+1 hour, +24 hours, Start of day, End of day)"
    ],
    "faq": [
      {
        "question": "What is a Unix timestamp?",
        "answer": "The Unix epoch is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds."
      },
      {
        "question": "What is the Year 2038 problem?",
        "answer": "On January 19, 2038, 32-bit signed integers will overflow the Unix timestamp counter. Modern systems and Code&Tools use 64-bit timestamps which will not overflow for billions of years."
      }
    ],
    "relatedSlugs": [
      "jwt-decoder",
      "uuid-generator",
      "regex-tester"
    ]
  },
  {
    "slug": "url-encoder",
    "name": "URL Encoder / Decoder",
    "tagline": "Safely encode and decode full URLs and query string parameters",
    "shortDescription": "Encode and decode URLs and URI components with automatic query parameter parsing.",
    "longDescription": "Safely encode special characters for URLs and query parameters, or decode percent-encoded URLs. Code&Tools also automatically breaks down and displays all query string parameters in a clean interactive table.",
    "category": "web",
    "categoryLabel": "Web",
    "icon": "Link2",
    "popular": false,
    "keywords": [
      "url",
      "uri",
      "encode",
      "decode",
      "percent-encoding",
      "querystring",
      "params",
      "http"
    ],
    "howToUse": [
      "Select your operation mode: Encode or Decode.",
      "Choose between \"Full URL\" (encodeURI) and \"URL Component\" (encodeURIComponent).",
      "Paste your URL or query string into the input box.",
      "View the encoded/decoded string and inspect parsed query parameters in the table below."
    ],
    "features": [
      "Supports both encodeURI (leaves protocol/path intact) and encodeURIComponent (escapes slashes/delimiters)",
      "Live query parameter inspector table separating keys and values",
      "One-click copy for the whole transformed URL or individual query parameters",
      "Instant clear and sample URL buttons"
    ],
    "faq": [
      {
        "question": "What is the difference between encodeURI and encodeURIComponent?",
        "answer": "encodeURI is designed for complete URLs and will not encode reserved characters like :, /, ?, and &. In contrast, encodeURIComponent encodes everything, making it suitable for single query parameter values."
      },
      {
        "question": "What characters are encoded?",
        "answer": "Characters like spaces (%20), quotes, ampersands, plus signs, and non-ASCII characters are converted into percent-encoded UTF-8 octets."
      }
    ],
    "relatedSlugs": [
      "base64",
      "regex-tester",
      "color-converter"
    ]
  },
  {
    "slug": "regex-tester",
    "name": "Regex Tester",
    "tagline": "Test regular expressions with live match highlighting and groups",
    "shortDescription": "Test JavaScript regex patterns in real-time with capturing groups and syntax cheat sheet.",
    "longDescription": "A responsive regular expression tester for JavaScript/ECMAScript regex. Test patterns against multiline inputs, toggle flags (g, i, m, s, u), inspect matched indices and capturing groups, and browse a quick reference cheat sheet.",
    "category": "developer",
    "categoryLabel": "Developer",
    "icon": "Regex",
    "popular": true,
    "keywords": [
      "regex",
      "regexp",
      "regular expression",
      "tester",
      "pattern",
      "match",
      "groups",
      "flags"
    ],
    "howToUse": [
      "Type your regex pattern in the expression field (without leading/trailing slashes).",
      "Toggle active flags: g (global), i (case insensitive), m (multiline), s (dotAll), u (unicode).",
      "Type or paste your test string into the text area.",
      "Matches are instantly highlighted with color-coded indices.",
      "Inspect capturing groups and positions in the match breakdown table."
    ],
    "features": [
      "Live match highlighting directly on top of your test string",
      "Flag controls: g (global), i (case insensitive), m (multiline), s (dotAll), u (unicode)",
      "Capturing group extraction with named & numbered group breakdowns",
      "Comprehensive regex cheat sheet with syntax examples",
      "Quick presets: Email, URL, IPv4 address, Date (YYYY-MM-DD), Hex Color, Phone"
    ],
    "faq": [
      {
        "question": "Which regular expression engine is used?",
        "answer": "Code&Tools uses your browser's native JavaScript RegExp engine (V8 on Chrome/Edge/Node, SpiderMonkey on Firefox, JavaScriptCore on Safari), guaranteeing 100% fidelity with client-side code."
      },
      {
        "question": "What do regex flags do?",
        "answer": "Flags modify match behavior: \"g\" finds all matches rather than stopping at the first; \"i\" ignores uppercase/lowercase differences; \"m\" treats ^ and $ as beginning/end of each line; \"s\" allows dots (.) to match newlines."
      }
    ],
    "relatedSlugs": [
      "url-encoder",
      "uuid-generator",
      "timestamp"
    ]
  },
  {
    "slug": "hash-generator",
    "name": "Hash Generator",
    "tagline": "Generate SHA-256, SHA-384, SHA-512, SHA-1, and MD5 hashes",
    "shortDescription": "Compute cryptographic hashes locally via Web Crypto API with uppercase/lowercase formatting.",
    "longDescription": "Generate cryptographic hashes directly in your browser using the native Web Crypto API. Support for SHA-256, SHA-384, SHA-512, SHA-1, and MD5 with zero server uploads, keeping all sensitive keys and passwords private.",
    "category": "security",
    "categoryLabel": "Security",
    "icon": "Hash",
    "popular": true,
    "keywords": [
      "hash",
      "sha256",
      "sha512",
      "sha384",
      "sha1",
      "md5",
      "crypto",
      "checksum",
      "digest"
    ],
    "howToUse": [
      "Enter or paste text into the input field.",
      "Select your preferred algorithm (SHA-256, SHA-384, SHA-512, SHA-1, or MD5).",
      "Toggle between Lowercase and Uppercase hexadecimal representations.",
      "Click the copy button beside any computed hash to use it in your code."
    ],
    "features": [
      "Powered by native browser window.crypto.subtle.digest for hardware-accelerated speed",
      "Supports SHA-256, SHA-384, SHA-512, SHA-1, and MD5",
      "Uppercase and lowercase hex toggling",
      "Instant parallel computation of all algorithms simultaneously",
      "100% private: password and text digests never leave your computer"
    ],
    "faq": [
      {
        "question": "Which hashing algorithm is recommended for security?",
        "answer": "SHA-256 or SHA-512 are recommended for modern security and integrity verification. MD5 and SHA-1 have known collision vulnerabilities and should only be used for legacy checksums or non-cryptographic identifiers."
      },
      {
        "question": "Can these hashes be decrypted or reversed?",
        "answer": "Cryptographic hash functions are one-way mathematical operations designed to be impossible to invert. You cannot reverse a hash back to its original plain text."
      }
    ],
    "relatedSlugs": [
      "jwt-decoder",
      "uuid-generator",
      "base64"
    ]
  },
  {
    "slug": "color-converter",
    "name": "Color Converter",
    "tagline": "Convert HEX, RGB, HSL, and HSV with live WCAG contrast check",
    "shortDescription": "Convert between HEX, RGB, HSL, HSV, inspect WCAG contrast, and view palettes.",
    "longDescription": "A comprehensive color converter and accessibility inspector for UI designers and developers. Seamlessly convert between HEX, RGB, HSL, and HSV color models, test WCAG accessibility contrast ratios, and generate harmonic color schemes.",
    "category": "web",
    "categoryLabel": "Web",
    "icon": "Palette",
    "popular": true,
    "keywords": [
      "color",
      "hex",
      "rgb",
      "hsl",
      "hsv",
      "wcag",
      "contrast",
      "palette",
      "picker",
      "css"
    ],
    "howToUse": [
      "Use the visual color picker or type a color code in HEX, RGB, or HSL format.",
      "All color representations update automatically in real time.",
      "Review the WCAG contrast score against pure black and pure white backgrounds.",
      "Explore harmonious color palettes: complementary, monochromatic, and analogous.",
      "Click any format copy button to paste straight into your CSS."
    ],
    "features": [
      "Real-time conversion across HEX (#RRGGBB), RGB, HSL, and HSV formats",
      "Interactive visual color picker and sliders",
      "WCAG 2.1 contrast ratio calculations with AA and AAA accessibility ratings",
      "Color harmonics: complementary, analogous, and monochromatic palette previews",
      "One-click copy for CSS-ready color definitions"
    ],
    "faq": [
      {
        "question": "What is WCAG contrast ratio?",
        "answer": "The Web Content Accessibility Guidelines (WCAG) require text to contrast with its background. Level AA requires at least 4.5:1 for normal text (3:1 for large text), while Level AAA requires 7:1."
      },
      {
        "question": "What is the advantage of HSL over RGB?",
        "answer": "HSL (Hue, Saturation, Lightness) is much more intuitive for human designers because adjusting brightness or tint only requires changing a single number, whereas RGB requires adjusting all three channels."
      }
    ],
    "relatedSlugs": [
      "url-encoder",
      "json-formatter",
      "regex-tester"
    ]
  },
  {
    "slug": "compiler",
    "name": "Online Compiler",
    "tagline": "Compile and run C, C++, Java, Python & TypeScript online",
    "shortDescription": "Compile and run C, C++, Java, Python, and TypeScript directly from your browser in a secure sandbox.",
    "longDescription": "A high-performance online IDE and code runner supporting C (GCC), C++ (G++), Java (OpenJDK), Python, and TypeScript. Features syntax-highlighted Monaco editor, standard input (stdin) support, real-time execution outputs, line-numbered compiler diagnostics, and file download.",
    "category": "developer",
    "categoryLabel": "Developer",
    "icon": "Terminal",
    "popular": true,
    "keywords": [
      "online compiler",
      "C compiler",
      "C++ compiler",
      "Java compiler",
      "Python compiler",
      "TypeScript compiler",
      "TypeScript runner",
      "online code runner",
      "programming compiler",
      "ide",
      "code runner",
      "btech coding"
    ],
    "howToUse": [
      "Select your programming language (C, C++, Java, Python, or TypeScript) from the top bar.",
      "Write or paste your source code into the Monaco code editor.",
      "If your program requires input (e.g. scanf, cin, input()), type it into the Standard Input (stdin) panel.",
      "Click \"Run ▶\" or press Ctrl+Enter (⌘+Enter on Mac) to compile and execute.",
      "Inspect stdout, diagnostic compilation errors, execution time, and exit codes in the terminal console."
    ],
    "features": [
      "Sandboxed execution environment with process isolation and memory/CPU limits",
      "Monaco code editor with auto-closing brackets, syntax highlighting, and theme integration",
      "Supports C (GCC 9.2.0), C++ (G++ 9.2.0), Java (OpenJDK 13.0.1), Python (3.8.1/3.10), and TypeScript (5.6.2)",
      "Interactive Standard Input (stdin) support with quick sample inputs",
      "Color-coded terminal output with execution time and exit code indicators",
      "One-click code download with appropriate language file extensions"
    ],
    "faq": [
      {
        "question": "How does Code&Tools execute code securely?",
        "answer": "All code execution occurs inside isolated, sandboxed container environments with strict resource caps on CPU time, wall time, memory, and output size. The main application never executes user code directly."
      },
      {
        "question": "Does my code stay in the browser?",
        "answer": "Unlike our pure client-side tools (like JSON formatter or Base64 encoder), compilation and execution require an isolated sandbox backend. Code is transmitted securely over HTTPS solely for compilation and execution, and is never stored or used for training."
      },
      {
        "question": "Can I provide input to interactive programs?",
        "answer": "Yes! Provide any expected inputs in the Standard Input (stdin) panel before clicking Run. The program will consume stdin sequentially when calling scanf, cin, System.in, or input()."
      },
      {
        "question": "What happens if my program has an infinite loop?",
        "answer": "The sandbox enforces a 5-second CPU time limit. If a program exceeds this limit, execution is immediately terminated and a \"Time Limit Exceeded\" status is reported."
      }
    ],
    "relatedSlugs": [
      "regex-tester",
      "uuid-generator",
      "timestamp"
    ]
  },
  {
    "slug": "pdf-to-word",
    "name": "PDF to Word Converter",
    "tagline": "Convert PDF documents to editable Microsoft Word (.docx) files",
    "shortDescription": "Convert PDFs to editable DOCX documents directly in your browser with zero data upload.",
    "longDescription": "Extract text and structure from PDF documents and generate clean Microsoft Word (.docx) documents. Operates completely client-side in your browser for absolute document privacy.",
    "category": "converters",
    "categoryLabel": "Converters",
    "icon": "FileType",
    "popular": true,
    "keywords": [
      "pdf",
      "word",
      "docx",
      "convert",
      "pdf to docx",
      "document",
      "pdf to word"
    ],
    "howToUse": [
      "Upload or drag & drop your PDF file.",
      "Click Convert to Word to parse document streams and build a DOCX file.",
      "Download your generated Microsoft Word (.docx) file immediately."
    ],
    "features": [
      "100% browser-based conversion with zero server uploads",
      "Instant extraction to standard Microsoft Word format",
      "Configurable file limit up to 30 MB",
      "Immediate client-side download"
    ],
    "faq": [
      {
        "question": "Are my confidential documents uploaded to any server?",
        "answer": "No. All PDF stream extraction and DOCX generation run purely inside your web browser. Your document never leaves your machine."
      },
      {
        "question": "Will complex layouts and tables convert perfectly?",
        "answer": "Complex layouts, images, tables, and custom embedded fonts may not convert with 100% visual parity compared to commercial OCR suites. Clean text and standard paragraphs convert reliably."
      }
    ],
    "relatedSlugs": [
      "word-to-pdf",
      "pdf-to-text",
      "image-to-pdf"
    ]
  },
  {
    "slug": "word-to-pdf",
    "name": "Word to PDF Converter",
    "tagline": "Convert DOCX documents to formatted PDF files",
    "shortDescription": "Convert Microsoft Word (.docx) files into clean, readable PDF documents in your browser.",
    "longDescription": "Turn Microsoft Word (.docx) documents into standard PDFs. Parses styles and body paragraphs in your browser with no cloud uploads.",
    "category": "converters",
    "categoryLabel": "Converters",
    "icon": "FileText",
    "popular": true,
    "keywords": [
      "word",
      "pdf",
      "docx",
      "word to pdf",
      "convert docx to pdf"
    ],
    "howToUse": [
      "Select or drag & drop your .docx file.",
      "Click Convert to PDF.",
      "Download your newly formatted PDF file."
    ],
    "features": [
      "Runs locally in browser via mammoth & pdf-lib",
      "Zero cloud storage or document caching",
      "Supports standard margins and typography"
    ],
    "faq": [
      {
        "question": "Does this support older .doc files?",
        "answer": "This converter supports modern Office Open XML format (.docx). For older binary .doc files, please resave as .docx first."
      }
    ],
    "relatedSlugs": [
      "pdf-to-word",
      "pdf-to-text",
      "image-to-pdf"
    ]
  },
  {
    "slug": "pdf-to-text",
    "name": "PDF to Text Extractor",
    "tagline": "Extract readable plain text from PDF documents",
    "shortDescription": "Extract plain text from any PDF document with instant clipboard copy and .txt download.",
    "longDescription": "Fast, client-side PDF text extraction. Pulls text from document streams without sending confidential documents over the network.",
    "category": "converters",
    "categoryLabel": "Converters",
    "icon": "FileText",
    "popular": false,
    "keywords": [
      "pdf",
      "text",
      "extract",
      "pdf to txt",
      "txt"
    ],
    "howToUse": [
      "Upload your PDF file.",
      "Click Extract Text.",
      "Inspect extracted content, copy to clipboard, or download as a .txt file."
    ],
    "features": [
      "Instant client-side text stream parser",
      "One-click copy to clipboard",
      "Clean .txt file export"
    ],
    "faq": [
      {
        "question": "Can it read scanned image-only PDFs?",
        "answer": "It extracts embedded digital text from searchable PDFs. Pure scanned image PDFs without an OCR layer will have no raw text stream."
      }
    ],
    "relatedSlugs": [
      "pdf-to-word",
      "word-to-pdf"
    ]
  },
  {
    "slug": "image-to-pdf",
    "name": "Image to PDF Converter",
    "tagline": "Convert and merge JPG, PNG, and WebP images into a single PDF",
    "shortDescription": "Combine multiple images into a clean, paginated PDF with custom page orientation and dimensions.",
    "longDescription": "Upload one or multiple JPG, PNG, or WebP pictures, reorder them, select page size (A4, Letter, Auto), choose orientation, and generate a polished PDF document in seconds.",
    "category": "converters",
    "categoryLabel": "Converters",
    "icon": "Image",
    "popular": true,
    "keywords": [
      "image to pdf",
      "jpg to pdf",
      "png to pdf",
      "merge photos to pdf",
      "convert pictures"
    ],
    "howToUse": [
      "Select or drag & drop one or more images (JPG, PNG, WebP).",
      "Select page format (Auto-fit, A4, Letter) and orientation (Portrait, Landscape).",
      "Click Convert to PDF and download your document."
    ],
    "features": [
      "Multi-image batch support",
      "Auto-fit image dimensions or standard A4/Letter pagination",
      "Zero server upload — 100% private"
    ],
    "faq": [
      {
        "question": "How many images can I add?",
        "answer": "You can combine dozens of images up to browser memory limits. We recommend files up to 25MB each."
      }
    ],
    "relatedSlugs": [
      "pdf-to-word",
      "pdf-to-text",
      "jpg-to-png"
    ]
  },
  {
    "slug": "jpg-to-png",
    "name": "JPG to PNG Converter",
    "tagline": "Convert JPG/JPEG images to lossless PNG format",
    "shortDescription": "Transform JPEG images to lossless PNG format with transparent alpha channel support.",
    "longDescription": "Fast in-browser converter to transform compressed JPEG images into lossless PNG format. Perfect for image editing pipelines.",
    "category": "converters",
    "categoryLabel": "Converters",
    "icon": "Image",
    "popular": false,
    "keywords": [
      "jpg to png",
      "jpeg to png",
      "image converter",
      "convert photo"
    ],
    "howToUse": [
      "Upload a JPG or JPEG photo.",
      "Click Convert to PNG.",
      "Download your lossless PNG image."
    ],
    "features": [
      "High-speed HTML5 Canvas rasterization",
      "Zero compression artifacts in output PNG",
      "Private & client-side"
    ],
    "faq": [
      {
        "question": "Does converting JPG to PNG increase image quality?",
        "answer": "No format conversion can restore data previously lost during JPEG compression, but PNG prevents any further loss during subsequent editing."
      }
    ],
    "relatedSlugs": [
      "png-to-jpg",
      "image-to-webp",
      "webp-converter"
    ]
  },
  {
    "slug": "png-to-jpg",
    "name": "PNG to JPG Converter",
    "tagline": "Convert PNG images to compact JPG/JPEG format",
    "shortDescription": "Convert PNG graphics to lightweight JPGs with adjustable compression quality.",
    "longDescription": "Reduce graphic file size by converting heavy PNG images to standard JPEG format with custom quality sliders and background fill handling.",
    "category": "converters",
    "categoryLabel": "Converters",
    "icon": "Image",
    "popular": false,
    "keywords": [
      "png to jpg",
      "png to jpeg",
      "compress png to jpg"
    ],
    "howToUse": [
      "Upload your PNG graphic.",
      "Set desired compression quality (10% to 100%).",
      "Click Convert to JPG and download."
    ],
    "features": [
      "Adjustable quality factor",
      "Automatic solid background fill for transparent areas",
      "Instant local conversion"
    ],
    "faq": [
      {
        "question": "What happens to transparency?",
        "answer": "Since JPEG does not support transparency, transparent areas are smoothly filled with a clean white background."
      }
    ],
    "relatedSlugs": [
      "jpg-to-png",
      "image-to-webp",
      "webp-converter"
    ]
  },
  {
    "slug": "webp-converter",
    "name": "WebP Converter",
    "tagline": "Convert modern WebP images to standard JPG or PNG",
    "shortDescription": "Convert WebP pictures to universally compatible JPG or PNG formats in your browser.",
    "longDescription": "Make WebP files universally compatible with legacy photo viewers, editors, and operating systems by converting them to JPG or PNG.",
    "category": "converters",
    "categoryLabel": "Converters",
    "icon": "Image",
    "popular": false,
    "keywords": [
      "webp converter",
      "webp to png",
      "webp to jpg",
      "convert webp"
    ],
    "howToUse": [
      "Upload your .webp image.",
      "Choose whether to output as PNG or JPG.",
      "Download your converted image."
    ],
    "features": [
      "Instant browser decoding",
      "Lossless PNG or compressed JPG output",
      "Full privacy"
    ],
    "faq": [
      {
        "question": "Why convert WebP to JPG/PNG?",
        "answer": "Some older desktop applications, photo viewers, and print tools do not yet support modern WebP format."
      }
    ],
    "relatedSlugs": [
      "image-to-webp",
      "jpg-to-png",
      "png-to-jpg"
    ]
  },
  {
    "slug": "image-to-webp",
    "name": "Image to WebP Converter",
    "tagline": "Convert JPG and PNG images to ultra-efficient WebP",
    "shortDescription": "Convert photos to next-generation WebP format to dramatically reduce web page load times.",
    "longDescription": "Transform heavy JPEG and PNG images to modern WebP format with fine-tuned quality control, achieving 25% to 35% smaller file sizes without noticeable visual degradation.",
    "category": "converters",
    "categoryLabel": "Converters",
    "icon": "Image",
    "popular": true,
    "keywords": [
      "image to webp",
      "png to webp",
      "jpg to webp",
      "next gen image format"
    ],
    "howToUse": [
      "Select any JPG, PNG, or GIF image.",
      "Adjust quality slider for your desired balance between file size and fidelity.",
      "Convert and download your optimized WebP image."
    ],
    "features": [
      "25-35% size reduction over JPG/PNG",
      "Adjustable quality compression",
      "100% browser-based"
    ],
    "faq": [
      {
        "question": "Are WebP images supported across modern browsers?",
        "answer": "Yes! All major modern browsers (Chrome, Firefox, Safari, Edge) fully support WebP."
      }
    ],
    "relatedSlugs": [
      "webp-converter",
      "image",
      "jpg-to-png"
    ]
  },
  {
    "slug": "image",
    "name": "Image Compressor",
    "tagline": "Compress JPG, PNG, and WebP images with live savings calculations",
    "shortDescription": "Compress images directly in your browser with quality slider, dimension resizing, and ZIP export.",
    "longDescription": "Reduce the file size of your JPG, PNG, and WebP images by up to 80% without losing visual clarity. Features multi-image upload, live before/after size comparisons, dimension scaling, and one-click ZIP download.",
    "category": "compressors",
    "categoryLabel": "Compressors",
    "icon": "Minimize2",
    "popular": true,
    "keywords": [
      "image compressor",
      "compress image",
      "reduce photo size",
      "compress jpg",
      "compress png",
      "compress webp"
    ],
    "howToUse": [
      "Drag and drop one or multiple images into the compressor workspace.",
      "Adjust the quality slider (recommended 75-85%) and optional dimension scaling.",
      "Click Compress Images to process all files in parallel.",
      "Inspect size savings percentage and download individual files or a combined ZIP."
    ],
    "features": [
      "Processed 100% locally in your browser — zero server uploads",
      "Batch compression for multiple images at once",
      "Detailed size reduction stats and percentage saved",
      "Optional dimension downscaling (75%, 50%, 25%)",
      "One-click \"Download All as ZIP\""
    ],
    "faq": [
      {
        "question": "Are my images uploaded to any server or cloud?",
        "answer": "Never. All compression and canvas scaling run locally in your web browser. No photos ever touch an external server."
      },
      {
        "question": "What quality setting is recommended for web images?",
        "answer": "A quality level between 75% and 85% typically reduces file size by 50% to 70% with virtually no perceptible loss in visual quality."
      }
    ],
    "relatedSlugs": [
      "pdf",
      "zip",
      "image-to-webp"
    ]
  },
  {
    "slug": "pdf",
    "name": "PDF Compressor",
    "tagline": "Optimize and reduce PDF document file sizes",
    "shortDescription": "Compress PDF documents with customizable optimization levels directly in your browser.",
    "longDescription": "Shrink heavy PDF documents for email attachments and web upload forms. Select from Low, Medium, or High compression levels to strip redundant streams and recompress internal objects.",
    "category": "compressors",
    "categoryLabel": "Compressors",
    "icon": "FileText",
    "popular": true,
    "keywords": [
      "pdf compressor",
      "compress pdf",
      "reduce pdf size",
      "shrink pdf",
      "pdf optimizer"
    ],
    "howToUse": [
      "Upload your PDF document.",
      "Choose a compression level: Low (preserves high image quality), Medium (balanced), or High (maximum reduction).",
      "Click Compress PDF and download your optimized document."
    ],
    "features": [
      "3 compression presets: Low, Medium, and High",
      "Accurate before & after byte comparison and percentage saved",
      "Clear notification if a PDF is already fully optimized",
      "Zero server upload — complete client-side security"
    ],
    "faq": [
      {
        "question": "Why didn't my PDF shrink by a large percentage?",
        "answer": "Some PDFs already contain highly compressed JPEG streams or vector text. When a file is already optimized, re-compression cannot safely discard more data without breaking font tables or image clarity."
      },
      {
        "question": "Is my confidential PDF document uploaded?",
        "answer": "No. The compression algorithm executes purely in client memory inside your browser."
      }
    ],
    "relatedSlugs": [
      "image",
      "zip",
      "pdf-to-word"
    ]
  },
  {
    "slug": "zip",
    "name": "ZIP Compressor",
    "tagline": "Bundle and compress multiple files into a compact ZIP archive",
    "shortDescription": "Create compressed ZIP archives directly in your browser from multiple files.",
    "longDescription": "Fast, local archive creation. Select or drop multiple files of any type, name your archive, and create a standard compressed .zip archive instantly using the DEFLATE algorithm.",
    "category": "compressors",
    "categoryLabel": "Compressors",
    "icon": "FileArchive",
    "popular": true,
    "keywords": [
      "zip compressor",
      "create zip",
      "zip files",
      "compress archive",
      "make zip online"
    ],
    "howToUse": [
      "Drag & drop or select the files you want to bundle.",
      "Give your archive a custom name.",
      "Click Create ZIP Archive and download immediately."
    ],
    "features": [
      "Powered by JSZip with DEFLATE compression",
      "Supports bundling documents, source code, images, and data files",
      "Detailed file count and byte reduction statistics",
      "100% private and offline-capable"
    ],
    "faq": [
      {
        "question": "Are there file type restrictions?",
        "answer": "You can add any file type: code, PDFs, text, photos, audio, spreadsheets, or documents."
      }
    ],
    "relatedSlugs": [
      "image",
      "pdf"
    ]
  },
  {
    "slug": "word-counter",
    "name": "Word & Text Counter",
    "tagline": "Count words, characters, sentences, paragraphs, and reading time",
    "shortDescription": "Analyze text statistics in real-time with reading duration, speaking time, and keyword density.",
    "longDescription": "Comprehensive word counter, character counter (with/without spaces), line analyzer, and paragraph inspector. Calculates estimated reading and speaking duration with live keyword density frequency.",
    "category": "text",
    "categoryLabel": "Text",
    "icon": "AlignLeft",
    "popular": true,
    "keywords": [
      "word counter",
      "character count",
      "reading time",
      "text statistics",
      "line counter",
      "sentence counter",
      "keyword density"
    ],
    "howToUse": [
      "Type or paste your text into the editor area.",
      "Metrics update instantly in real-time without pressing any buttons.",
      "Check word count, character count, lines, paragraphs, and estimated reading time.",
      "Review top frequent keywords in the density summary.",
      "Click \"Copy Text\" to copy your content."
    ],
    "features": [
      "Real-time calculation with zero lag",
      "Accurate character count with and without whitespace",
      "Paragraph and sentence detection",
      "Estimated reading time (200 WPM) and speaking time (130 WPM)",
      "Top 5 keyword frequency analysis",
      "100% private in-browser text analysis"
    ],
    "faq": [
      {
        "question": "How is reading time estimated?",
        "answer": "Reading time is calculated using the industry-standard rate of 200 words per minute for adult reading speeds."
      },
      {
        "question": "Is my pasted text stored or saved anywhere?",
        "answer": "No. All counting and analysis algorithms run strictly inside your local browser memory."
      },
      {
        "question": "Can I analyze code and markdown files?",
        "answer": "Yes, any text format including plain text, essays, articles, and source code can be analyzed."
      }
    ],
    "relatedSlugs": [
      "case-converter",
      "whitespace-cleaner",
      "diff-checker",
      "markdown-preview"
    ]
  },
  {
    "slug": "case-converter",
    "name": "Text Case Converter",
    "tagline": "Convert text between UPPERCASE, lowercase, camelCase, snake_case, and more",
    "shortDescription": "Transform strings into UPPERCASE, lowercase, Title Case, camelCase, PascalCase, snake_case, and kebab-case.",
    "longDescription": "Versatile string casing tool for software developers, copywriters, and students. Switch between programming variable naming styles (camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE) and grammatical cases with one-click copying.",
    "category": "text",
    "categoryLabel": "Text",
    "icon": "Type",
    "popular": true,
    "keywords": [
      "case converter",
      "camelcase",
      "snake_case",
      "kebab-case",
      "uppercase",
      "lowercase",
      "title case",
      "pascalcase"
    ],
    "howToUse": [
      "Enter or paste any sentence, phrase, or identifier in the input field.",
      "All 10 case transformations calculate automatically.",
      "Click the \"Copy\" button on any target format to copy it to your clipboard."
    ],
    "features": [
      "Supports 10 casing conventions: UPPER, lower, Title, Sentence, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, and dot.case",
      "Intelligent word splitting handling symbols and mixed casing",
      "One-click instant copy for every case style",
      "Live sample text loader"
    ],
    "faq": [
      {
        "question": "Which casing style is used in JavaScript/TypeScript?",
        "answer": "JavaScript and TypeScript traditionally use camelCase for variables and functions (e.g. getUserData) and PascalCase for classes and interfaces (e.g. UserProfile)."
      },
      {
        "question": "What is kebab-case used for?",
        "answer": "kebab-case is standard for URL slugs, CSS class names, and package names in web development."
      },
      {
        "question": "Does this handle special characters?",
        "answer": "Yes, punctuation and symbols are stripped cleanly when constructing programming identifier cases."
      }
    ],
    "relatedSlugs": [
      "word-counter",
      "whitespace-cleaner",
      "lorem-ipsum"
    ]
  },
  {
    "slug": "whitespace-cleaner",
    "name": "Whitespace Cleaner & Line Deduplicator",
    "tagline": "Remove duplicate lines, trim whitespace, and sort text lines",
    "shortDescription": "Clean messy text by stripping extra spaces, removing duplicate lines, deleting blank lines, and sorting.",
    "longDescription": "Clean up dirty data files, logs, and code lists. Strip trailing whitespace, collapse multiple spaces into single spaces, remove duplicate lines, purge empty lines, and sort entries alphabetically.",
    "category": "text",
    "categoryLabel": "Text",
    "icon": "CheckCheck",
    "keywords": [
      "remove duplicate lines",
      "deduplicate",
      "trim whitespace",
      "sort lines",
      "clean text",
      "remove empty lines"
    ],
    "howToUse": [
      "Paste your lines or text into the input editor.",
      "Check or uncheck options: Remove Duplicates, Trim Lines, Remove Empty Lines, Collapse Spaces, Sort (A-Z).",
      "Review cleaned text in the right pane.",
      "Click \"Copy Result\" to save the cleaned list."
    ],
    "features": [
      "Deduplicate lines with Set data structures",
      "Trim leading and trailing line whitespace",
      "Collapse consecutive spaces into a single space",
      "Alphabetical A-to-Z line sorting",
      "Live input vs output line count comparison"
    ],
    "faq": [
      {
        "question": "Does deduplication preserve line order?",
        "answer": "Yes, unique lines appear in their original order unless you specifically toggle the \"Sort Lines (A-Z)\" option."
      },
      {
        "question": "Can I clean email lists and CSV entries?",
        "answer": "Yes, this tool is ideal for cleaning up lists of emails, IDs, names, and log entries."
      },
      {
        "question": "Is there a limit on number of lines?",
        "answer": "It can process tens of thousands of lines smoothly in browser memory."
      }
    ],
    "relatedSlugs": [
      "word-counter",
      "case-converter",
      "diff-checker"
    ]
  },
  {
    "slug": "diff-checker",
    "name": "Text Diff Checker",
    "tagline": "Compare two text files or code blocks and highlight differences",
    "shortDescription": "Side-by-side and line-by-line visual comparison tool highlighting additions, deletions, and modifications.",
    "longDescription": "A clean, privacy-first text and code diff tool. Compare original and modified versions of code, configuration files, or documents side-by-side with color-coded line numbers and change counts.",
    "category": "text",
    "categoryLabel": "Text",
    "icon": "FileDiff",
    "popular": true,
    "keywords": [
      "diff checker",
      "text compare",
      "code diff",
      "compare files",
      "git diff tool",
      "side by side compare"
    ],
    "howToUse": [
      "Paste the original text into the left editor.",
      "Paste the modified text into the right editor.",
      "The comparison table displays side-by-side differences with green for additions and red for deletions.",
      "Review total change metrics at the top banner."
    ],
    "features": [
      "Side-by-side line comparison",
      "Visual green and red indicators for added, modified, and removed lines",
      "Line numbering for easy navigation",
      "Additions and deletions summary counter",
      "Zero server transmission — 100% private compare"
    ],
    "faq": [
      {
        "question": "Can I compare code snippets?",
        "answer": "Yes, you can compare any source code, JSON, configuration files, or regular text."
      },
      {
        "question": "Are my proprietary code files uploaded?",
        "answer": "No. All comparison calculations are performed strictly inside your browser runtime."
      },
      {
        "question": "Can I clear both editors quickly?",
        "answer": "Yes, click \"Clear Both\" at the top to reset the comparison view."
      }
    ],
    "relatedSlugs": [
      "whitespace-cleaner",
      "markdown-preview",
      "word-counter"
    ]
  },
  {
    "slug": "lorem-ipsum",
    "name": "Lorem Ipsum Generator",
    "tagline": "Generate placeholder dummy text for UI designs and mockups",
    "shortDescription": "Generate custom paragraphs, sentences, or words of placeholder Latin text with HTML tag wrapping.",
    "longDescription": "Generate customizable dummy Latin text for website layouts, graphic designs, and typography testing. Specify exact counts of paragraphs, sentences, or words, with optional HTML paragraph tag formatting.",
    "category": "text",
    "categoryLabel": "Text",
    "icon": "FileText",
    "keywords": [
      "lorem ipsum generator",
      "dummy text",
      "placeholder text",
      "latin text",
      "mock text generator"
    ],
    "howToUse": [
      "Choose whether to generate Paragraphs, Sentences, or Words.",
      "Enter the quantity you need (from 1 to 50).",
      "Toggle \"Start with Lorem ipsum\" or \"Wrap in <p> tags\" if desired.",
      "Click \"Copy\" or \"Download\" to use your generated placeholder text."
    ],
    "features": [
      "Paragraph, sentence, and word count controls",
      "HTML <p> tag wrapper option for web developers",
      "Traditional Latin vocabulary matrix",
      "One-click clipboard copy and text file download"
    ],
    "faq": [
      {
        "question": "Why do designers use Lorem Ipsum?",
        "answer": "Lorem Ipsum mimics the visual rhythm and letter distribution of natural English text without distracting the reader with readable content."
      },
      {
        "question": "Can I download the text as a file?",
        "answer": "Yes, click \"Download\" to save the text directly as lorem-ipsum.txt."
      },
      {
        "question": "Is the generated text copyright-free?",
        "answer": "Yes, Lorem Ipsum is public domain and free to use in commercial and personal projects."
      }
    ],
    "relatedSlugs": [
      "word-counter",
      "markdown-preview",
      "case-converter"
    ]
  },
  {
    "slug": "markdown-preview",
    "name": "Markdown Previewer",
    "tagline": "Live split-screen Markdown editor with GitHub Flavored Markdown",
    "shortDescription": "Write and preview Markdown in real-time with tables, code syntax highlighting, and export options.",
    "longDescription": "A split-pane Markdown editor with real-time HTML preview. Supports GitHub Flavored Markdown (GFM) including tables, task lists, code blocks, blockquotes, and headings. Export as .md or copy formatted text.",
    "category": "text",
    "categoryLabel": "Text",
    "icon": "FileCode",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "markdown previewer",
      "gfm markdown",
      "markdown editor",
      "github markdown",
      "readme previewer",
      "markdown to html"
    ],
    "howToUse": [
      "Type or paste Markdown into the left editor.",
      "Watch the live formatted preview render in real-time on the right.",
      "Switch between Split View, Editor Only, and Preview Only using the view tabs.",
      "Click \"Download .md\" to save your document to your computer."
    ],
    "features": [
      "Full GitHub Flavored Markdown (GFM) support",
      "Interactive Split View, Editor Only, and Preview Only tabs",
      "Clean typography with tables, lists, and code blocks",
      "Direct .md file download and copy features"
    ],
    "faq": [
      {
        "question": "Can I preview README.md files for GitHub?",
        "answer": "Yes, the preview uses remark-gfm to ensure tables, task lists, and formatting match GitHub rendering."
      },
      {
        "question": "Does it work offline?",
        "answer": "Yes, all Markdown parsing runs entirely client-side using JavaScript."
      },
      {
        "question": "Can I write equations or code snippets?",
        "answer": "Yes, fenced code blocks with language identifiers (e.g. ```typescript) are fully supported."
      }
    ],
    "relatedSlugs": [
      "diff-checker",
      "word-counter",
      "lorem-ipsum"
    ]
  },
  {
    "slug": "json-validator",
    "name": "JSON Validator",
    "tagline": "Validate JSON syntax with line and column error indicators",
    "shortDescription": "Strict RFC 8259 JSON validation with pinpoint error diagnostics and formatted beautification.",
    "longDescription": "Validate JSON documents against strict standards. Identifies exact syntax error causes (such as unquoted properties, trailing commas, or unclosed strings) and displays formatted valid JSON upon success.",
    "category": "data",
    "categoryLabel": "JSON & Data",
    "icon": "FileCode2",
    "popular": true,
    "keywords": [
      "json validator",
      "validate json",
      "json syntax checker",
      "json lint",
      "rfc 8259",
      "fix json"
    ],
    "howToUse": [
      "Paste your JSON payload into the input editor.",
      "Syntax is verified automatically in real-time.",
      "If valid, a green success badge appears with byte size statistics.",
      "If invalid, an exact error message highlights the syntax bug."
    ],
    "features": [
      "Strict JSON specification checking",
      "Pinpoint line & column error diagnostics",
      "One-click formatted JSON copy",
      "Built-in broken JSON test sample button"
    ],
    "faq": [
      {
        "question": "What are the most common JSON errors?",
        "answer": "Common errors include trailing commas after the last array/object item, single quotes instead of double quotes, and missing quotes around key names."
      },
      {
        "question": "Can this validate huge JSON files?",
        "answer": "Yes, it processes multi-megabyte JSON files quickly using your browser V8 JSON parser."
      },
      {
        "question": "Is my data private?",
        "answer": "100% private. Parsing happens locally in your browser memory."
      }
    ],
    "relatedSlugs": [
      "json-formatter",
      "json-minifier",
      "json-to-csv",
      "json-yaml"
    ]
  },
  {
    "slug": "json-minifier",
    "name": "JSON Minifier",
    "tagline": "Strip whitespace and minify JSON for production APIs",
    "shortDescription": "Compress JSON into a single compact line with byte savings calculation and one-click copy.",
    "longDescription": "Minify JSON payloads to reduce bandwidth and payload sizes in production web applications. Removes unnecessary indentation, line breaks, and whitespace while preserving data integrity.",
    "category": "data",
    "categoryLabel": "JSON & Data",
    "icon": "Minimize2",
    "keywords": [
      "json minifier",
      "compress json",
      "compact json",
      "minify json online",
      "reduce json size"
    ],
    "howToUse": [
      "Paste formatted JSON into the left editor.",
      "The minified single-line string generates instantly on the right.",
      "Review original size, minified size, and space saved percentage.",
      "Click \"Copy Result\" to copy the compact payload."
    ],
    "features": [
      "Instant single-line compression",
      "Live metric cards: Original bytes, Minified bytes, Percentage saved",
      "Syntax error detection banner",
      "One-click copy to clipboard"
    ],
    "faq": [
      {
        "question": "Does minifying JSON change the data?",
        "answer": "No. Minification only strips extraneous whitespace and indentation between keys and values; values and types remain identical."
      },
      {
        "question": "Why should I minify JSON?",
        "answer": "Minified JSON files download faster over mobile networks and reduce API response sizes."
      },
      {
        "question": "How do I un-minify it later?",
        "answer": "Use the Code&Tools JSON Formatter tool to restore clean 2-space or 4-space indentation anytime."
      }
    ],
    "relatedSlugs": [
      "json-formatter",
      "json-validator",
      "json-to-csv"
    ]
  },
  {
    "slug": "json-to-csv",
    "name": "JSON to CSV Converter",
    "tagline": "Convert JSON arrays into CSV spreadsheets with live preview",
    "shortDescription": "Transform JSON arrays of objects into clean CSV spreadsheets with live table preview and file download.",
    "longDescription": "Convert structured JSON data into standard Comma-Separated Values (CSV). Inspect parsed rows in an interactive table preview and export directly as a .csv file for Excel, Google Sheets, or data science pipelines.",
    "category": "data",
    "categoryLabel": "JSON & Data",
    "icon": "FileSpreadsheet",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "json to csv",
      "convert json to csv",
      "json to excel",
      "export json to spreadsheet",
      "json table"
    ],
    "howToUse": [
      "Paste a JSON array of objects into the editor.",
      "CSV output generates automatically with header row and escaped values.",
      "Review data in the live table preview below.",
      "Click \"Download .csv\" to save the file or \"Copy CSV\" to copy."
    ],
    "features": [
      "Automatic header discovery across all array items",
      "Special character and comma escaping with double quotes",
      "Interactive visual table preview of parsed records",
      "Direct .csv file download and copy support"
    ],
    "faq": [
      {
        "question": "Can it convert nested JSON objects?",
        "answer": "Nested objects and arrays are stringified into their JSON representation inside the corresponding cell."
      },
      {
        "question": "Can I open the resulting CSV in Microsoft Excel?",
        "answer": "Yes, the exported CSV adheres to standard RFC 4180 and opens seamlessly in Excel, Google Sheets, and LibreOffice."
      },
      {
        "question": "Is my data secure?",
        "answer": "Yes. All parsing and conversion happens entirely on your machine."
      }
    ],
    "relatedSlugs": [
      "csv-to-json",
      "json-formatter",
      "json-yaml"
    ]
  },
  {
    "slug": "csv-to-json",
    "name": "CSV to JSON Converter",
    "tagline": "Convert CSV spreadsheets into structured JSON arrays",
    "shortDescription": "Transform CSV text or spreadsheet exports into formatted JSON arrays of objects with type inference.",
    "longDescription": "Convert Comma-Separated Values (CSV) spreadsheets into clean JSON arrays. Automatically infers numbers, booleans, and string values, with one-click JSON formatting and file download.",
    "category": "data",
    "categoryLabel": "JSON & Data",
    "icon": "Database",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "csv to json",
      "convert csv to json",
      "spreadsheet to json",
      "csv parser",
      "csv import"
    ],
    "howToUse": [
      "Paste your CSV data (including header row) into the input editor.",
      "JSON output generates instantly with matching keys and inferred types.",
      "Click \"Download .json\" or \"Copy JSON\" to export the structured data."
    ],
    "features": [
      "Automatic quote escaping handling (e.g. \"Los Angeles, CA\")",
      "Type inference for numbers and boolean (true/false) values",
      "Clean 2-space formatted JSON output",
      "Direct .json file export and clipboard copy"
    ],
    "faq": [
      {
        "question": "Does the first row need to be column headers?",
        "answer": "Yes, the first line is used as the property keys for the resulting JSON objects."
      },
      {
        "question": "Does it support comma inside quotes?",
        "answer": "Yes, quotes enclosing commas are handled correctly according to standard CSV rules."
      },
      {
        "question": "What is the maximum file size?",
        "answer": "Can handle large CSV spreadsheets with thousands of rows quickly in your browser."
      }
    ],
    "relatedSlugs": [
      "json-to-csv",
      "json-formatter",
      "xml-formatter"
    ]
  },
  {
    "slug": "xml-formatter",
    "name": "XML Formatter & Beautifier",
    "tagline": "Format, indent, beautify, and inspect XML documents",
    "shortDescription": "Beautify XML strings with custom indentation (2 or 4 spaces) and clean syntax structure.",
    "longDescription": "Format messy XML documents with structured tree indentation. Choose 2-space or 4-space indentation, validate XML markup, and copy clean XML code for SOAP services, SVG files, and configurations.",
    "category": "data",
    "categoryLabel": "JSON & Data",
    "icon": "Code2",
    "keywords": [
      "xml formatter",
      "xml beautifier",
      "format xml online",
      "indent xml",
      "pretty print xml"
    ],
    "howToUse": [
      "Paste your raw or compressed XML string into the left editor.",
      "Select your desired indentation (2 spaces or 4 spaces).",
      "The beautified XML is generated instantly on the right.",
      "Click \"Copy Formatted XML\" to copy the result."
    ],
    "features": [
      "Clean hierarchical tag indentation",
      "Configurable 2-space and 4-space indent levels",
      "Handles self-closing tags and XML declaration headers",
      "Runs 100% locally in your browser"
    ],
    "faq": [
      {
        "question": "Can this format SVG files?",
        "answer": "Yes, SVG is XML-based and can be formatted and cleaned up using this tool."
      },
      {
        "question": "Does it validate closing tags?",
        "answer": "Yes, matching open and closing tags are systematically indented."
      },
      {
        "question": "Is my XML uploaded to any server?",
        "answer": "No. The formatting engine operates completely inside your browser."
      }
    ],
    "relatedSlugs": [
      "json-formatter",
      "json-yaml",
      "csv-to-json"
    ]
  },
  {
    "slug": "password-generator",
    "name": "Password Generator & Strength Meter",
    "tagline": "Generate high-entropy cryptographically secure passwords",
    "shortDescription": "Create cryptographically strong passwords with custom length, character sets, entropy calculation, and strength meter.",
    "longDescription": "Generate strong, unpredictable passwords using your browser's Web Crypto API (crypto.getRandomValues). Configure length, include uppercase, lowercase, numbers, symbols, and avoid ambiguous characters like 0, O, 1, and l.",
    "category": "security",
    "categoryLabel": "Security",
    "icon": "Key",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "password generator",
      "strong password",
      "secure password generator",
      "password strength meter",
      "entropy calculator",
      "crypto password"
    ],
    "howToUse": [
      "Adjust the password length slider (from 8 up to 64 characters).",
      "Select which character sets to include (Uppercase, Lowercase, Numbers, Symbols).",
      "Toggle \"Avoid Ambiguous Characters\" to omit lookalike letters like 0 and O.",
      "Check the real-time strength bar and entropy score in bits.",
      "Click \"Copy\" to use your generated password."
    ],
    "features": [
      "True cryptographic randomness via window.crypto.getRandomValues()",
      "Bit entropy calculation (information-theoretic security rating)",
      "Visual color-coded password strength meter (Weak to Very Strong)",
      "Avoid ambiguous characters filter (0, O, 1, l, I)",
      "100% local — zero transmission over the internet"
    ],
    "faq": [
      {
        "question": "How secure are passwords generated by this tool?",
        "answer": "Very secure. Unlike standard Math.random(), this tool uses window.crypto.getRandomValues(), the browser cryptographically secure pseudorandom number generator (CSPRNG)."
      },
      {
        "question": "Is my password sent to your servers?",
        "answer": "Never. The password is generated in your browser memory and never leaves your device."
      },
      {
        "question": "What is a good password entropy score?",
        "answer": "An entropy of 60+ bits is considered strong against offline brute-force attacks, while 80+ bits is virtually uncrackable with current supercomputing."
      }
    ],
    "relatedSlugs": [
      "jwt-generator",
      "random-token-generator",
      "hash-generator",
      "checksum-generator"
    ]
  },
  {
    "slug": "jwt-generator",
    "name": "JWT Generator",
    "tagline": "Create signed test JSON Web Tokens with HMAC-SHA256",
    "shortDescription": "Generate test and educational JWT tokens with editable headers, payload claims, secret keys, and Web Crypto signing.",
    "longDescription": "An interactive JWT builder designed for testing APIs and educational learning. Customize header, payload claims (sub, name, role, exp), and sign with HMAC-SHA256 directly in your browser using the Web Crypto API.",
    "category": "security",
    "categoryLabel": "Security",
    "icon": "Shield",
    "popular": true,
    "keywords": [
      "jwt generator",
      "create jwt",
      "sign jwt",
      "hmac sha256 jwt",
      "json web token generator",
      "mock jwt"
    ],
    "howToUse": [
      "Edit the Header JSON and Payload Claims JSON.",
      "Enter your secret signing key in the secret key field.",
      "The signed JWT token is computed in real-time using HMAC-SHA256.",
      "Click \"Copy Token\" to copy the signed token."
    ],
    "features": [
      "Standard HS256 (HMAC-SHA256) signature calculation via browser Web Crypto API",
      "Color-coded token preview (Header, Payload, Signature)",
      "Custom claims editor with auto timestamp helpers",
      "100% client-side execution — secrets are never transmitted"
    ],
    "faq": [
      {
        "question": "Can I use this token for local API testing?",
        "answer": "Yes! If your backend API verifies tokens with the same secret key and HS256 algorithm, this token will validate properly."
      },
      {
        "question": "Does this tool support RSA (RS256)?",
        "answer": "Currently it implements standard HMAC-SHA256 (HS256) for zero-dependency client-side execution."
      },
      {
        "question": "Is my secret key safe?",
        "answer": "Yes. The key is only used locally by window.crypto.subtle in your browser memory."
      }
    ],
    "relatedSlugs": [
      "jwt-decoder",
      "hash-generator",
      "password-generator",
      "random-token-generator"
    ]
  },
  {
    "slug": "random-token-generator",
    "name": "Random Token & API Key Generator",
    "tagline": "Generate secure Hex, Base64, and Alphanumeric API tokens",
    "shortDescription": "Create cryptographically secure tokens, session keys, and secrets in Hex, Base64, and Alphanumeric formats.",
    "longDescription": "Generate secure random tokens for API keys, bearer tokens, CSRF tokens, and session secrets using browser CSPRNG. Choose bit lengths (128-bit, 256-bit, 512-bit) and generate in bulk.",
    "category": "security",
    "categoryLabel": "Security",
    "icon": "KeyRound",
    "keywords": [
      "token generator",
      "api key generator",
      "random hex token",
      "secure token",
      "session token",
      "csrf token"
    ],
    "howToUse": [
      "Choose the token format: Hexadecimal, Base64 URL-safe, Alphanumeric, or UUID v4.",
      "Select desired byte length (16, 32, or 64 bytes).",
      "Choose how many tokens to generate (up to 20).",
      "Click \"Copy\" next to any token or \"Copy All\" to grab the whole list."
    ],
    "features": [
      "Hardware-seeded cryptographic randomness via window.crypto",
      "Multiple formats: Hex, Base64 URL-safe, Alphanumeric, UUID v4",
      "Configurable byte lengths up to 512 bits",
      "Bulk generation with one-click copy"
    ],
    "faq": [
      {
        "question": "Which token format is recommended for API keys?",
        "answer": "Hexadecimal (256-bit / 32 bytes) or Base64 URL-safe tokens are standard for high-security API keys."
      },
      {
        "question": "Can these tokens be used in production?",
        "answer": "Yes! They are generated using the browser CSPRNG, making them cryptographically secure and unguessable."
      },
      {
        "question": "Are generated tokens logged or recorded?",
        "answer": "Never. Everything is generated client-side and disappears when you close or refresh the tab."
      }
    ],
    "relatedSlugs": [
      "password-generator",
      "uuid-generator",
      "hash-generator",
      "base64"
    ]
  },
  {
    "slug": "checksum-generator",
    "name": "Checksum Generator & Verifier",
    "tagline": "Calculate and verify SHA-256, SHA-384, SHA-512, and SHA-1 checksums",
    "shortDescription": "Generate cryptographic hash checksums for text and verify digests to check data integrity.",
    "longDescription": "Verify data integrity and compute cryptographic checksum digests (SHA-256, SHA-384, SHA-512, SHA-1) in real-time. Compare your computed digest against an expected checksum to detect file or text tampering.",
    "category": "security",
    "categoryLabel": "Security",
    "icon": "FileCheck",
    "keywords": [
      "checksum generator",
      "verify checksum",
      "sha256 checksum",
      "file integrity",
      "sha512 hash",
      "checksum verifier"
    ],
    "howToUse": [
      "Enter or paste text into the input field.",
      "Checksum digests calculate simultaneously across SHA-256, SHA-384, SHA-512, and SHA-1.",
      "To verify, paste an expected checksum into the verify box to see instant match confirmation.",
      "Copy individual checksums with one click."
    ],
    "features": [
      "Simultaneous multi-algorithm hashing (SHA-256, SHA-384, SHA-512, SHA-1)",
      "Automated checksum comparison and match verification",
      "Hardware-accelerated Web Crypto API execution",
      "100% private in-browser computation"
    ],
    "faq": [
      {
        "question": "What is a checksum used for?",
        "answer": "Checksums verify that a downloaded file or data transmission has not been corrupted or maliciously modified."
      },
      {
        "question": "Which checksum algorithm is most secure?",
        "answer": "SHA-256 and SHA-512 are industry standards recommended for cryptographic verification."
      },
      {
        "question": "Is SHA-1 safe for security?",
        "answer": "SHA-1 is provided for legacy checksum verification, but SHA-256 or SHA-512 should be preferred for modern security."
      }
    ],
    "relatedSlugs": [
      "hash-generator",
      "password-generator",
      "random-token-generator",
      "base64"
    ]
  },
  {
    "slug": "meta-tag-generator",
    "name": "Meta Tag & Open Graph Generator",
    "tagline": "Generate SEO, Open Graph, and Twitter card meta tags with live preview",
    "shortDescription": "Build SEO meta tags, Facebook/LinkedIn Open Graph, and Twitter Card tags with live Google and social card previews.",
    "longDescription": "Generate complete, SEO-optimized HTML meta tags for web pages. Includes primary title/description tags, Open Graph (og:title, og:image, og:description), and Twitter card tags with real-time visual previews of Google search results and social cards.",
    "category": "web",
    "categoryLabel": "Web Dev",
    "icon": "Globe",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "meta tag generator",
      "open graph generator",
      "og tags",
      "twitter card generator",
      "seo meta tags",
      "social preview generator"
    ],
    "howToUse": [
      "Enter page title, meta description, canonical URL, and OG image URL.",
      "Watch the live Google Search snippet and Social Card previews update in real-time.",
      "Review character count recommendations (60 for title, 160 for description).",
      "Click \"Copy Tags\" to copy the generated HTML block directly into your <head>."
    ],
    "features": [
      "Live Google Search Result (SERP) visual preview",
      "Live Social Media (Facebook/LinkedIn/Twitter) card preview",
      "Character length counters and recommendations",
      "Generates Standard SEO, Open Graph, and Twitter Cards in one click"
    ],
    "faq": [
      {
        "question": "Where should I place these meta tags?",
        "answer": "Paste the generated tags inside the <head> ... </head> section of your HTML document."
      },
      {
        "question": "What is the recommended size for og:image?",
        "answer": "The recommended dimensions for Open Graph images are 1200 x 630 pixels (1.91:1 ratio) for crisp display on high-DPI screens."
      },
      {
        "question": "Why are Open Graph tags important?",
        "answer": "Open Graph tags control how your website looks when shared on WhatsApp, LinkedIn, Twitter, Facebook, and Discord."
      }
    ],
    "relatedSlugs": [
      "robots-txt-generator",
      "url-parser",
      "http-status-codes"
    ]
  },
  {
    "slug": "robots-txt-generator",
    "name": "Robots.txt Generator",
    "tagline": "Build standard robots.txt files for search engine crawlers",
    "shortDescription": "Create custom robots.txt crawler directives with User-agents, Allow/Disallow rules, and sitemap references.",
    "longDescription": "An interactive robots.txt file generator. Direct search engine bots (Googlebot, Bingbot, etc.) on which paths to index or ignore, set crawl delays, link XML sitemaps, and download ready-to-deploy robots.txt files.",
    "category": "web",
    "categoryLabel": "Web Dev",
    "icon": "Bot",
    "keywords": [
      "robots.txt generator",
      "create robots.txt",
      "seo crawler rules",
      "googlebot disallow",
      "sitemap robots.txt"
    ],
    "howToUse": [
      "Specify target User-agents (default * applies to all bots).",
      "Add paths to allow or disallow (e.g. /admin/, /api/).",
      "Enter your public Sitemap URL.",
      "Copy the output or click \"Download robots.txt\" to save."
    ],
    "features": [
      "Configurable User-agent directives (*, Googlebot, etc.)",
      "Allow and Disallow path lists",
      "Optional crawl-delay setting",
      "Direct robots.txt download button"
    ],
    "faq": [
      {
        "question": "Where do I upload robots.txt?",
        "answer": "Place robots.txt in the root directory of your website (e.g. https://yourdomain.com/robots.txt)."
      },
      {
        "question": "Does robots.txt hide sensitive pages from users?",
        "answer": "No! robots.txt is publicly visible. Never use it to hide secret or sensitive URLs; use authentication and server controls instead."
      },
      {
        "question": "Can I reference multiple sitemaps?",
        "answer": "Yes, you can add multiple Sitemap: directives in your robots.txt."
      }
    ],
    "relatedSlugs": [
      "meta-tag-generator",
      "url-parser",
      "http-status-codes"
    ]
  },
  {
    "slug": "url-parser",
    "name": "URL & Query String Parser",
    "tagline": "Deconstruct URLs and interactively edit query parameters",
    "shortDescription": "Parse URLs into protocol, host, path, and hash, with an interactive query parameter table and real-time URL builder.",
    "longDescription": "Deep URL inspector and query string editor. Breakdown complex URLs into protocol, hostname, port, pathname, hash, and interactive key-value query parameters with live adding, editing, and deletion.",
    "category": "web",
    "categoryLabel": "Web Dev",
    "icon": "Link2",
    "popular": true,
    "keywords": [
      "url parser",
      "query string parser",
      "url inspector",
      "parse query params",
      "url builder",
      "url breakdown"
    ],
    "howToUse": [
      "Paste any URL with query parameters into the input bar.",
      "Inspect the protocol, host, port, path, and hash breakdown cards.",
      "Edit, add, or delete query parameter key-value pairs in the table below.",
      "The main URL updates in real-time as you make modifications."
    ],
    "features": [
      "Full URL components breakdown (protocol, hostname, port, path, hash)",
      "Interactive query parameter table with Add, Edit, and Delete",
      "Automatic URL re-assembly in real-time",
      "Format validation with descriptive error alerts"
    ],
    "faq": [
      {
        "question": "Does this tool decode URL-encoded parameter values?",
        "answer": "Yes, parameter keys and values are automatically decoded for clean reading and editing in the table."
      },
      {
        "question": "Can I add new parameters to an existing URL?",
        "answer": "Yes, click \"Add Parameter\" to insert new keys and values, and the URL will update immediately."
      },
      {
        "question": "Can I parse relative URLs?",
        "answer": "Please supply full URLs with protocol (e.g. https://) so all URL properties can be determined."
      }
    ],
    "relatedSlugs": [
      "url-encoder",
      "meta-tag-generator",
      "http-status-codes"
    ]
  },
  {
    "slug": "http-status-codes",
    "name": "HTTP Status Code Reference",
    "tagline": "Comprehensive searchable dictionary of all HTTP response codes",
    "shortDescription": "Interactive reference of HTTP status codes (100–599) with descriptions, RFC standards, and troubleshooting advice.",
    "longDescription": "A complete developer reference guide for HTTP response status codes. Search by code number (e.g. 404, 500, 301) or keyword, filter by categories (2xx Success, 3xx Redirection, 4xx Client Error, 5xx Server Error), and learn causes and fixes.",
    "category": "web",
    "categoryLabel": "Web Dev",
    "icon": "Server",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "http status codes",
      "http response codes",
      "404 not found",
      "500 internal server error",
      "rest api status codes",
      "http reference"
    ],
    "howToUse": [
      "Type a status code or keyword in the search bar.",
      "Filter by category buttons: 2xx Success, 3xx Redirect, 4xx Client Error, 5xx Server Error.",
      "Click any card to read detailed meaning and typical causes."
    ],
    "features": [
      "Searchable database of standard HTTP status codes",
      "Color-coded category badges (Green for 2xx, Blue for 3xx, Amber for 4xx, Red for 5xx)",
      "Detailed explanations and REST API best practices",
      "Quick filter tabs for rapid navigation"
    ],
    "faq": [
      {
        "question": "What is the difference between 401 and 403?",
        "answer": "401 Unauthorized means authentication is missing or invalid (the server does not know who you are). 403 Forbidden means authentication is recognized, but you lack permission to access the resource."
      },
      {
        "question": "When should I use 201 vs 200?",
        "answer": "Use 200 OK for successful requests returning data, and 201 Created when a request results in a new resource being created (e.g. after a POST request)."
      },
      {
        "question": "What is status code 429?",
        "answer": "429 Too Many Requests indicates rate limiting has been triggered because the client sent too many requests in a given period."
      }
    ],
    "relatedSlugs": [
      "url-parser",
      "mime-types",
      "meta-tag-generator"
    ]
  },
  {
    "slug": "user-agent-parser",
    "name": "User-Agent Parser & Device Inspector",
    "tagline": "Inspect your browser User-Agent or parse custom client strings",
    "shortDescription": "Analyze User-Agent strings to detect browser version, operating system, rendering engine, and device type.",
    "longDescription": "Detect client hardware and browser details from HTTP User-Agent strings. Automatically loads your current browser User-Agent or allows pasting custom strings to detect browser name, version, OS, and device category.",
    "category": "web",
    "categoryLabel": "Web Dev",
    "icon": "Globe",
    "keywords": [
      "user agent parser",
      "parse user agent",
      "detect browser",
      "browser info",
      "device inspector",
      "user agent string"
    ],
    "howToUse": [
      "Your active browser User-Agent string is detected and parsed automatically.",
      "Paste any other User-Agent string into the text box to test other devices.",
      "Review detected Browser, Operating System, and Device Type cards."
    ],
    "features": [
      "Automatic client User-Agent detection",
      "Custom User-Agent string pasting support",
      "Detects Chrome, Safari, Firefox, Edge, Opera, and more",
      "Identifies macOS, Windows, Linux, Android, and iOS"
    ],
    "faq": [
      {
        "question": "What is a User-Agent string?",
        "answer": "A User-Agent is an HTTP request header that tells web servers what browser, operating system, and rendering engine the client is using."
      },
      {
        "question": "Can User-Agent strings be spoofed?",
        "answer": "Yes, browsers and HTTP clients can easily modify their User-Agent header, so security decisions should not rely solely on it."
      },
      {
        "question": "Is my browser information sent to an external server?",
        "answer": "No. The parsing is done entirely in your browser using local regex rules."
      }
    ],
    "relatedSlugs": [
      "http-status-codes",
      "mime-types",
      "url-parser"
    ]
  },
  {
    "slug": "mime-types",
    "name": "MIME Types Reference",
    "tagline": "Searchable directory of standard MIME types and file extensions",
    "shortDescription": "Quickly look up Content-Type headers, media types, and matching file extensions for web servers and APIs.",
    "longDescription": "Searchable reference guide of standard MIME (Multipurpose Internet Mail Extensions) types used in HTTP Content-Type headers. Find corresponding file extensions, categories, and technical descriptions.",
    "category": "web",
    "categoryLabel": "Web Dev",
    "icon": "FileCode",
    "keywords": [
      "mime types",
      "content type header",
      "mime type lookup",
      "file extension mime",
      "media types"
    ],
    "howToUse": [
      "Type an extension (e.g. .json, .png, .pdf) or MIME type into the search bar.",
      "Review matching MIME type, extension, category, and description in the table."
    ],
    "features": [
      "Searchable database of common application, text, image, audio, video, and font MIME types",
      "Clean table with Content-Type header strings and file extensions",
      "Instant client-side filtering"
    ],
    "faq": [
      {
        "question": "What is a MIME type?",
        "answer": "A MIME type is a label used in HTTP Content-Type headers to tell browsers and clients how to interpret and display a file (e.g. text/html, application/json)."
      },
      {
        "question": "What MIME type is used for JSON APIs?",
        "answer": "The standard MIME type for JSON payloads is application/json."
      },
      {
        "question": "What is the MIME type for WebP images?",
        "answer": "image/webp is the official MIME type for WebP images."
      }
    ],
    "relatedSlugs": [
      "http-status-codes",
      "url-parser",
      "meta-tag-generator"
    ]
  },
  {
    "slug": "qr-generator",
    "name": "QR Code Generator",
    "tagline": "Generate customizable client-side vector QR codes with SVG download",
    "shortDescription": "Create clean QR codes for URLs, plain text, WiFi networks, and emails with custom sizing and vector SVG export.",
    "longDescription": "Generate custom QR codes directly in your browser. Encodes URLs, plain text, WiFi logins, and emails into scalable vector SVG QR codes with custom size controls and instant vector download.",
    "category": "web",
    "categoryLabel": "Web Dev",
    "icon": "QrCode",
    "popular": true,
    "keywords": [
      "qr code generator",
      "create qr code",
      "free qr code",
      "svg qr code",
      "vector qr code",
      "client side qr code"
    ],
    "howToUse": [
      "Enter the URL, text, or contact information to encode.",
      "Adjust size using the slider (150px to 350px).",
      "The QR code visual renders automatically.",
      "Click \"Download Vector SVG\" to save high-resolution vector output."
    ],
    "features": [
      "100% client-side vector SVG rendering (no external API calls)",
      "Sharp at any scale for print or digital media",
      "Adjustable canvas dimensions",
      "High-resolution vector SVG download"
    ],
    "faq": [
      {
        "question": "Do generated QR codes expire?",
        "answer": "No. These are static QR codes that directly encode your text or URL into the visual pattern, so they work forever."
      },
      {
        "question": "Are my QR code contents sent to a server?",
        "answer": "No. The QR matrix is calculated and drawn entirely in your browser using client-side JavaScript."
      },
      {
        "question": "Can smartphone cameras scan this SVG output?",
        "answer": "Yes, standard iOS and Android camera apps scan these QR codes instantly."
      }
    ],
    "relatedSlugs": [
      "url-encoder",
      "url-parser",
      "meta-tag-generator"
    ]
  },
  {
    "slug": "sql-formatter",
    "name": "SQL Formatter & Beautifier",
    "tagline": "Format, beautify, and capitalize SQL queries with standardized indentation",
    "shortDescription": "Beautify messy SQL queries with standardized indentation and uppercase keywords for PostgreSQL, MySQL, and SQLite.",
    "longDescription": "Format and beautify complex SQL statements. Standardizes clause indentation (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY) and capitalizes SQL keywords for clean code reviews and documentation.",
    "category": "web",
    "categoryLabel": "Web Dev",
    "icon": "Database",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "sql formatter",
      "sql beautifier",
      "format sql query",
      "sql pretty print",
      "sql syntax format"
    ],
    "howToUse": [
      "Paste your raw SQL query into the left editor.",
      "The formatted SQL query generates on the right with capitalized keywords and structured indentation.",
      "Click \"Copy Formatted SQL\" to copy the clean query."
    ],
    "features": [
      "Automatic capitalization of major SQL keywords (SELECT, FROM, WHERE, JOIN, etc.)",
      "Line breaks on major clauses for scannability",
      "Supports queries for PostgreSQL, MySQL, SQLite, and Oracle",
      "One-click clipboard copy"
    ],
    "faq": [
      {
        "question": "Does this execute any queries against a database?",
        "answer": "No. It is purely a code formatter and beautifier running in your browser; no database connections are made."
      },
      {
        "question": "Which SQL dialects are supported?",
        "answer": "Standard ANSI SQL syntax is supported, making it suitable for PostgreSQL, MySQL, SQLite, MariaDB, and SQL Server."
      },
      {
        "question": "Can it format subqueries and joins?",
        "answer": "Yes, inner joins, left joins, and subquery clauses are formatted with clean line breaks."
      }
    ],
    "relatedSlugs": [
      "json-formatter",
      "xml-formatter",
      "compiler"
    ]
  },
  {
    "slug": "date-difference",
    "name": "Date Difference & Duration Calculator",
    "tagline": "Calculate exact duration between two dates in days, weeks, and business days",
    "shortDescription": "Calculate the exact elapsed time between two dates in years, months, days, hours, and business days.",
    "longDescription": "Comprehensive date and time duration calculator. Accurately computes exact elapsed durations between two dates in years, months, days, total hours, minutes, seconds, and total business working days (excluding weekends).",
    "category": "time",
    "categoryLabel": "Time & Date",
    "icon": "Calendar",
    "popular": true,
    "keywords": [
      "date difference calculator",
      "days between dates",
      "business days calculator",
      "date duration",
      "time difference"
    ],
    "howToUse": [
      "Select or type the Start Date & Time.",
      "Select or type the End Date & Time.",
      "The exact breakdown in years, months, and days calculates instantly.",
      "Inspect summary cards for total days, business days, hours, and seconds."
    ],
    "features": [
      "Exact duration breakdown in Years, Months, and Days",
      "Business days calculator (excludes Saturday and Sunday)",
      "Total hours, minutes, and seconds metrics",
      "Accounts for month length variations and leap years",
      "Supports date and time precision"
    ],
    "faq": [
      {
        "question": "How are business days calculated?",
        "answer": "Business days count every weekday (Monday through Friday) between the two dates, skipping Saturdays and Sundays."
      },
      {
        "question": "Does it take leap years into account?",
        "answer": "Yes, it uses the standard JavaScript Date object which handles leap years and calendar variations accurately."
      },
      {
        "question": "Can the start date be in the past or future?",
        "answer": "Yes, any past or future dates can be compared seamlessly."
      }
    ],
    "relatedSlugs": [
      "timestamp",
      "cron-explainer",
      "unit-converter"
    ]
  },
  {
    "slug": "cron-explainer",
    "name": "Cron Expression Generator & Explainer",
    "tagline": "Translate cron expressions to plain English and explore schedule presets",
    "shortDescription": "Visual cron expression generator and explainer translating 5-field crontab schedules into human language.",
    "longDescription": "Understand and create cron expressions effortlessly. Translates crontab strings (minute, hour, day-of-month, month, day-of-week) into clear, natural English sentences with popular schedule presets.",
    "category": "time",
    "categoryLabel": "Time & Date",
    "icon": "Clock",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "cron generator",
      "cron explainer",
      "crontab explain",
      "cron expression",
      "schedule cron",
      "crontab guru"
    ],
    "howToUse": [
      "Type or paste any standard 5-part cron expression (e.g. 0 9 * * 1-5).",
      "Read the instant natural English translation in the green status card.",
      "Click any common preset (Every minute, Every midnight, Every Sunday) for quick setup.",
      "Click \"Copy Expression\" to use in your crontab or cloud scheduler."
    ],
    "features": [
      "Translates 5-field cron expressions into plain English",
      "Quick presets for common schedule patterns",
      "Syntax validation with error guidance",
      "One-click expression copy"
    ],
    "faq": [
      {
        "question": "What are the 5 parts of a standard cron expression?",
        "answer": "In order from left to right: Minute (0-59), Hour (0-23), Day of Month (1-31), Month (1-12), and Day of Week (0-7, where 0 and 7 are Sunday)."
      },
      {
        "question": "What does */5 mean in the minute field?",
        "answer": "*/5 means every 5 units (e.g. */5 in the first position runs every 5 minutes)."
      },
      {
        "question": "Where can I use these cron expressions?",
        "answer": "Cron expressions are used in Linux crontab, GitHub Actions schedules, AWS EventBridge, Kubernetes CronJobs, and Node.js schedule libraries."
      }
    ],
    "relatedSlugs": [
      "timestamp",
      "date-difference",
      "linux-cheatsheet"
    ]
  },
  {
    "slug": "unit-converter",
    "name": "Unit Converter",
    "tagline": "Interactive multi-category unit converter for length, mass, temperature, and data",
    "shortDescription": "Convert units across Length, Weight, Temperature, Digital Data, Speed, and Time with live two-way calculation.",
    "longDescription": "Comprehensive unit conversion suite for students and engineers. Convert seamlessly between metric and imperial systems across length, weight/mass, temperature (°C, °F, K), digital data storage (Bytes to Petabytes), speed, and time.",
    "category": "math",
    "categoryLabel": "Math & Numbers",
    "icon": "Scale",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "unit converter",
      "metric converter",
      "celsius to fahrenheit",
      "data storage converter",
      "length converter",
      "weight converter"
    ],
    "howToUse": [
      "Select a unit category from the top tabs (Length, Weight, Temperature, Data, Speed, Time).",
      "Enter the quantity to convert in the \"From\" field.",
      "Select your starting and target units from the dropdown menus.",
      "The converted value updates instantly in the \"To\" box. Click the swap icon to reverse units."
    ],
    "features": [
      "6 major measurement categories: Length, Weight, Temperature, Data Storage, Speed, and Time",
      "Accurate conversion formulas with high decimal precision",
      "Instant two-way unit swap button",
      "Mobile-friendly responsive inputs"
    ],
    "faq": [
      {
        "question": "How is digital data converted?",
        "answer": "Conversions use binary standard multipliers (1 KB = 1024 Bytes, 1 MB = 1024 KB, etc.) standard in operating systems."
      },
      {
        "question": "How does temperature conversion work?",
        "answer": "Temperature conversions account for offset formulas: °F = (°C × 9/5) + 32, and K = °C + 273.15."
      },
      {
        "question": "Are conversions calculated locally?",
        "answer": "Yes, all mathematics execute instantly in your browser JavaScript runtime."
      }
    ],
    "relatedSlugs": [
      "number-system-converter",
      "percentage-calculator",
      "color-converter"
    ]
  },
  {
    "slug": "number-system-converter",
    "name": "Number System Converter (Bin / Dec / Hex / Oct)",
    "tagline": "Simultaneous converter between Binary, Decimal, Hexadecimal, and Octal",
    "shortDescription": "Convert numbers across Decimal, Binary, Hexadecimal, and Octal simultaneously with bit nibble grouping.",
    "longDescription": "An essential tool for computer science students and systems programmers. Convert numbers simultaneously between Decimal (Base 10), Binary (Base 2), Hexadecimal (Base 16), and Octal (Base 8) with automatic 4-bit nibble spacing.",
    "category": "math",
    "categoryLabel": "Math & Numbers",
    "icon": "Binary",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "number system converter",
      "binary to decimal",
      "hex to decimal",
      "decimal to binary",
      "octal converter",
      "bit calculator"
    ],
    "howToUse": [
      "Type into any of the 4 inputs: Decimal, Binary, Hexadecimal, or Octal.",
      "The other 3 number systems update simultaneously in real-time.",
      "Inspect the 4-bit grouped nibbles below the binary input for easy byte reading."
    ],
    "features": [
      "Simultaneous 4-way conversion between Base 10, Base 2, Base 16, and Base 8",
      "Automatic character validation (restricts binary to 0/1, octal to 0-7, hex to 0-9/A-F)",
      "4-bit nibble space formatting for binary readability",
      "Instant real-time synchronization"
    ],
    "faq": [
      {
        "question": "Why do computer systems use Hexadecimal?",
        "answer": "Hexadecimal provides a compact, human-readable shorthand for binary: exactly 4 binary bits map to a single hex digit (e.g. 1111 = F)."
      },
      {
        "question": "What is a nibble?",
        "answer": "A nibble is a four-bit aggregation, or half an octet (half a byte)."
      },
      {
        "question": "Can I enter letters in hexadecimal?",
        "answer": "Yes, hexadecimal accepts digits 0–9 and letters A–F (both uppercase and lowercase are recognized)."
      }
    ],
    "relatedSlugs": [
      "unit-converter",
      "ascii-table",
      "percentage-calculator"
    ]
  },
  {
    "slug": "percentage-calculator",
    "name": "Percentage Calculator",
    "tagline": "Calculate percentages, proportions, and percentage increases/decreases",
    "shortDescription": "Solve common percentage calculations: What is X% of Y, X is what % of Y, and percentage increase or decrease.",
    "longDescription": "Calculate all standard percentage formulas instantly. Compute \"What is X% of Y?\", \"X is what percentage of Y?\", and \"Percentage increase/decrease from X to Y\" with clear formulas and step-by-step math breakdowns.",
    "category": "math",
    "categoryLabel": "Math & Numbers",
    "icon": "Percent",
    "popular": true,
    "keywords": [
      "percentage calculator",
      "percent increase calculator",
      "percent of number",
      "calculate discount",
      "percentage formula"
    ],
    "howToUse": [
      "Select any of the 3 calculation boxes.",
      "Enter the input numbers in the fields.",
      "The calculated percentage or result displays instantly in the highlighted badge."
    ],
    "features": [
      "Three calculations: X% of Y, Proportion (X of Y), and Percent Change",
      "Visual green and red badges for percentage increases and decreases",
      "Accurate floating-point rounding to 2 decimal places",
      "Instant real-time calculation"
    ],
    "faq": [
      {
        "question": "How is percentage increase/decrease calculated?",
        "answer": "The formula is ((New Value - Original Value) / Original Value) × 100."
      },
      {
        "question": "Can I calculate exam score percentages?",
        "answer": "Yes! Use Box #2: enter your scored marks in the first box and total maximum marks in the second box."
      },
      {
        "question": "Can I calculate shopping discounts and taxes?",
        "answer": "Yes, use Box #1 to calculate sales tax or discount amounts."
      }
    ],
    "relatedSlugs": [
      "unit-converter",
      "number-system-converter",
      "date-difference"
    ]
  },
  {
    "slug": "git-cheatsheet",
    "name": "Git Command Reference & Cheat Sheet",
    "tagline": "Searchable Git commands reference for branches, commits, remotes, and undoing",
    "shortDescription": "Interactive, searchable cheat sheet of essential Git commands for setup, branching, stashing, and remotes.",
    "longDescription": "A practical, searchable Git reference for B.Tech CS students and software engineers. Includes categorized commands for repository initialization, branching workflows, remote sync, stashing, and undoing changes with one-click copy.",
    "category": "developer",
    "categoryLabel": "Developer",
    "icon": "GitBranch",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "git cheatsheet",
      "git commands",
      "git reference",
      "git branch commands",
      "how to undo git",
      "git clone pull push"
    ],
    "howToUse": [
      "Type any keyword in the search bar (e.g. branch, stash, undo, log).",
      "Filter by category buttons (Basics, Branching, Remotes, Undo & Stash, History).",
      "Click the copy button on any command to copy the syntax to your clipboard."
    ],
    "features": [
      "Searchable database of essential Git commands",
      "Categorized workflow tabs: Basics, Branching, Remotes, Undo & Stash, History",
      "Clear beginner explanations for each command",
      "One-click syntax copy button"
    ],
    "faq": [
      {
        "question": "What is the difference between git restore and git checkout?",
        "answer": "Modern Git (2.23+) introduced git restore specifically for undoing working directory changes, making it clearer and safer than the older overloaded git checkout command."
      },
      {
        "question": "What does git stash do?",
        "answer": "git stash temporarily shelves changes you have made to your working copy so you can work on something else, and then re-apply them later using git stash pop."
      },
      {
        "question": "How do I push a new local branch to GitHub for the first time?",
        "answer": "Use git push -u origin <branch-name> to upload the branch and set the remote tracking reference."
      }
    ],
    "relatedSlugs": [
      "linux-cheatsheet",
      "compiler",
      "diff-checker"
    ]
  },
  {
    "slug": "linux-cheatsheet",
    "name": "Linux Command Reference & Cheat Sheet",
    "tagline": "Essential Linux CLI commands for file management, processes, and permissions",
    "shortDescription": "Quickly look up Linux terminal commands for file operations, chmod permissions, processes, and networking.",
    "longDescription": "A fast, searchable Linux terminal reference for computer engineering students and system administrators. Find syntax and practical flags for file operations, chmod permissions, process management (ps, kill), and networking.",
    "category": "developer",
    "categoryLabel": "Developer",
    "icon": "Terminal",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "linux cheatsheet",
      "linux commands",
      "terminal commands",
      "chmod permissions",
      "bash commands",
      "unix commands"
    ],
    "howToUse": [
      "Search for any command, topic, or flag (e.g. permissions, grep, process, disk).",
      "Read the command syntax and description.",
      "Click the copy button on any card to copy the command into your clipboard."
    ],
    "features": [
      "Searchable database of essential Linux terminal commands",
      "Covers navigation, file ops, chmod permissions, processes, and networking",
      "Practical flag explanations",
      "One-click command copy"
    ],
    "faq": [
      {
        "question": "What does chmod 755 mean?",
        "answer": "755 gives the owner read, write, and execute permissions (7), and gives the group and others read and execute permissions (5)."
      },
      {
        "question": "What does rm -rf do?",
        "answer": "rm -rf recursively and forcefully deletes files and directories without prompting. Use with extreme caution!"
      },
      {
        "question": "How do I find a running process taking up CPU?",
        "answer": "Run top or htop to view a real-time list of processes sorted by CPU and memory usage."
      }
    ],
    "relatedSlugs": [
      "git-cheatsheet",
      "cron-explainer",
      "compiler"
    ]
  },
  {
    "slug": "ascii-table",
    "name": "ASCII Table & Character Codes",
    "tagline": "Interactive reference of ASCII and extended character codes (0–127)",
    "shortDescription": "Searchable ASCII chart with Decimal, Hexadecimal, Octal, Binary, Character, and HTML entity representations.",
    "longDescription": "An interactive ASCII reference table for computer science students and engineers. Search by character, decimal, hex, or description, with filter buttons for printable characters, digits, uppercase/lowercase letters, and control codes.",
    "category": "developer",
    "categoryLabel": "Developer",
    "icon": "Table",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "ascii table",
      "ascii character codes",
      "ascii to hex",
      "ascii binary table",
      "extended ascii",
      "char codes"
    ],
    "howToUse": [
      "Search for any character, decimal code (e.g. 65), hex code (e.g. 41), or keyword.",
      "Filter with quick buttons: All, Printable, Letters, Digits, or Control characters.",
      "Inspect Decimal, Hexadecimal (0x), Octal, Binary (8-bit), Character, and Description."
    ],
    "features": [
      "Full 0–127 standard ASCII table",
      "Simultaneous Decimal, Hex, Octal, and 8-bit Binary representation",
      "Quick filter tabs for Printable, Letters, Digits, and Control characters",
      "Instant real-time search"
    ],
    "faq": [
      {
        "question": "What is the ASCII value of uppercase \"A\"?",
        "answer": "The ASCII value of uppercase \"A\" is Decimal 65, Hexadecimal 0x41, and Binary 01000001."
      },
      {
        "question": "What is the difference between ASCII and Unicode?",
        "answer": "ASCII is a 7-bit character set representing 128 characters (primarily English). Unicode (UTF-8) is a universal standard capable of encoding over 1 million characters across all world languages and emojis."
      },
      {
        "question": "What are control characters?",
        "answer": "Control characters (ASCII 0–31 and 127) are non-printable characters used to control peripheral devices (e.g. newline \\n, carriage return \\r, tab \\t)."
      }
    ],
    "relatedSlugs": [
      "number-system-converter",
      "compiler",
      "base64"
    ]
  },
  {
    "slug": "ai-code-explainer",
    "name": "AI Code Explainer",
    "tagline": "AI-assisted line-by-line code explanation and complexity analysis",
    "shortDescription": "Paste any C, C++, Java, Python, or TypeScript code to receive an instant line-by-line explanation and Big-O analysis.",
    "longDescription": "An AI-powered learning assistant designed for computer science students. Paste any code snippet to receive a clear, plain-English breakdown of what the code does, step-by-step execution logic, and Big-O time and space complexity estimations.",
    "category": "ai",
    "categoryLabel": "AI Tools",
    "icon": "Bot",
    "popular": true,
    "studentEssential": true,
    "keywords": [
      "ai code explainer",
      "explain code ai",
      "code analysis ai",
      "time complexity calculator",
      "python code explainer"
    ],
    "howToUse": [
      "Select your programming language (Python, C, C++, Java, TypeScript, SQL, etc.).",
      "Paste your code snippet into the editor (or click on one of the preloaded sample algorithms).",
      "Click \"Explain Code\" to start analysis.",
      "Read the structured breakdown including logic flow, line-by-line details, and Big-O complexity."
    ],
    "features": [
      "Line-by-line plain English code explanations",
      "Big-O time and space complexity analysis",
      "Preloaded algorithms: Binary Search, Quicksort, LinkedList, Palindrome",
      "Secure server-side API communication — no frontend key exposure",
      "Built-in offline educational fallback if network is interrupted"
    ],
    "faq": [
      {
        "question": "Are my proprietary code files uploaded or stored?",
        "answer": "No. Code snippets are sent to our secure server-side endpoint solely to generate the explanation and are never stored or logged in any database."
      },
      {
        "question": "Which programming languages can it explain?",
        "answer": "Supports C, C++, Java, Python, TypeScript, JavaScript, SQL, HTML, CSS, and Go."
      },
      {
        "question": "Is it free for students?",
        "answer": "Yes! It is completely free with built-in educational explanations."
      }
    ],
    "relatedSlugs": [
      "ai-regex-explainer",
      "compiler",
      "git-cheatsheet"
    ]
  },
  {
    "slug": "ai-regex-explainer",
    "name": "AI Regex Explainer",
    "tagline": "Deconstruct and explain complex regular expressions in plain English",
    "shortDescription": "Break down regular expression tokens, quantifiers, and capture groups into plain English with sample matches.",
    "longDescription": "Deconstruct complex regular expressions with AI. Analyzes anchors, character sets, quantifiers, and lookaheads, explaining what each token matches in plain English, with sample matching and non-matching strings.",
    "category": "ai",
    "categoryLabel": "AI Tools",
    "icon": "Sparkles",
    "popular": true,
    "keywords": [
      "ai regex explainer",
      "explain regex",
      "regex breakdown",
      "regular expression explainer",
      "regex plain english"
    ],
    "howToUse": [
      "Type or paste any regular expression pattern into the input bar.",
      "Or click one of the quick test presets (Email, Password, URL, IPv4, Hex color).",
      "Click \"Explain Pattern\" to generate a detailed token-by-token explanation.",
      "Review matching examples and syntax breakdown in the result card."
    ],
    "features": [
      "Plain English explanation of complex regex patterns",
      "Identifies character classes, anchors, groups, and quantifiers",
      "Quick presets for common production regex patterns",
      "Matching and non-matching test examples"
    ],
    "faq": [
      {
        "question": "Can it explain regex lookahead and lookbehind assertions?",
        "answer": "Yes, advanced regex constructs including positive/negative lookaheads and non-capturing groups are explained clearly."
      },
      {
        "question": "Can I test my regex matches interactively?",
        "answer": "Yes! Use the Code&Tools Regex Tester tool to test pattern matches against live text in real-time."
      },
      {
        "question": "Does this tool require an API key?",
        "answer": "No. The AI calls run through our server endpoint with automatic fallback support."
      }
    ],
    "relatedSlugs": [
      "regex-tester",
      "ai-code-explainer",
      "url-parser"
    ]
  }
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

export function getStudentTools(): ToolDefinition[] {
  return TOOLS.filter((t) => t.studentEssential);
}
