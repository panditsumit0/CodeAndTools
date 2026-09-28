import { CourseData } from './types';

export const TYPESCRIPT_COURSE: CourseData = {
  "id": "typescript",
  "slug": "typescript",
  "name": "TypeScript",
  "tagline": "JavaScript With Superpowers: Type-Safe Modern Web Engineering",
  "shortDescription": "Learn modern typed JavaScript for web applications and scalable software.",
  "difficulty": "Beginner → Intermediate",
  "bestFor": "Class 12 Students, Web Development Projects, React/Next.js Full-Stack Engineering, and Modern Tech Careers",
  "icon": "Braces",
  "color": "sky",
  "intro": {
    "whatIs": "TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static type definitions. It acts like a real-time spell checker for your code, helping you catch mistakes before your website ever runs.",
    "whyLearn": "JavaScript is the language that powers every website in the world, but it is easy to make typos that crash your page. TypeScript catches these bugs inside your code editor, gives you instant autocomplete, and powers modern frameworks like React and Next.js.",
    "whereUsed": [
      "Modern Full-Stack Web Development (Next.js, React, Vue, Svelte)",
      "Backend APIs & Servers (Node.js, Express, NestJS, Deno, Bun)",
      "Major Software Products (VS Code itself, Slack, Airbnb, Netflix)",
      "Mobile and Desktop Applications (React Native, Electron)"
    ],
    "advantages": [
      "Catches spelling and type errors inside your editor before you even save the file",
      "Provides smart autocomplete that tells you what properties an object has",
      "Makes large projects much easier to read and maintain across teams",
      "Compiles down to clean, 100% standard JavaScript that runs in any browser"
    ],
    "limitations": [
      "Browsers cannot execute TypeScript directly; it must be converted (compiled) to JavaScript first",
      "Requires learning additional syntax rules for types, interfaces, and generics",
      "Writing type annotations takes a few extra seconds initially (though saves hours of debugging later)"
    ]
  },
  "visualCallout": {
    "title": "Why Top Tech Companies Use TypeScript over Plain JavaScript",
    "description": "TypeScript turns JavaScript into a dependable, professional engineering tool:",
    "items": [
      {
        "label": "Automatic Spell Checker",
        "detail": "Red squiggly underlines highlight typos and incorrect data types instantly.",
        "badge": "Bug Prevention"
      },
      {
        "label": "Zero Runtime Overhead",
        "detail": "All types disappear when compiled into JavaScript, keeping the final website super fast.",
        "badge": "Speed"
      },
      {
        "label": "Industry Standard",
        "detail": "Over 80% of professional web developers now choose TypeScript for modern web applications.",
        "badge": "High Demand"
      },
      {
        "label": "Confident Editing",
        "detail": "Rename a variable or change an API structure and TypeScript updates every matching file safely.",
        "badge": "Productivity"
      }
    ]
  },
  "topics": [
    {
      "id": "what-is-ts",
      "title": "1. What is TypeScript & Basic Syntax",
      "summary": "TypeScript extends JavaScript by adding optional static type annotations (: string, : number). The compiler verifies your code and produces standard JavaScript.",
      "syntax": "// Declaring variables with explicit types\nlet studentName: string = \"Aarav\";\nconst rollNumber: number = 42;\nlet isEnrolled: boolean = true;\n\nconsole.log(studentName);",
      "codeExample": "// Basic TypeScript type annotations\nconst studentName: string = \"Rohan\";\nconst grade: number = 12;\nconst hasPassed: boolean = true;\n\nconsole.log(`Student: ${studentName}`);\nconsole.log(`Class: ${grade}th Grade`);\nconsole.log(`Passed: ${hasPassed}`);",
      "expectedOutput": "Student: Rohan\nClass: 12th Grade\nPassed: true",
      "commonMistake": "Thinking that TypeScript code runs directly in web browsers without a compilation (tsc) step; browsers only execute compiled JavaScript.",
      "explanation": {
        "intro": "TypeScript is JavaScript with static types. It lets you explicitly label what kind of value a variable is allowed to hold (like text, a number, or true/false) so you do not accidentally assign the wrong data.",
        "why": "In plain JavaScript, you could accidentally assign a word to a variable meant for an age (age = \"hello\"), causing calculations to produce NaN (Not a Number) or crash silently. TypeScript stops this before you even run the code.",
        "analogy": "Think of JavaScript like driving a car without dashboard warning lights. TypeScript installs warning gauges and seatbelts: if you try to put diesel into a petrol tank (putting a string into a number variable), the car beeps immediately and refuses to let you make the mistake.",
        "concept": "1. Superset of JavaScript: Any valid JavaScript code is automatically valid TypeScript code.\n2. Type Annotation (: type): You place a colon followed by the type name after a variable name.\n3. Type Checking: The TypeScript compiler checks all assignments.\n4. Transpilation: TypeScript files (.ts) are converted into standard JavaScript (.js) files so web browsers can run them.",
        "syntaxBreakdown": [
          {
            "part": "let variable: type",
            "meaning": "Declares a reassignable variable restricted to the specified type"
          },
          {
            "part": "const variable: type",
            "meaning": "Declares an unchangeable constant value with a fixed type"
          },
          {
            "part": ": string",
            "meaning": "Restricts the variable to text values enclosed in quotes"
          },
          {
            "part": ": number",
            "meaning": "Restricts the variable to whole numbers or decimals"
          },
          {
            "part": ": boolean",
            "meaning": "Restricts the variable to True or False"
          }
        ],
        "codeExplanation": [
          {
            "line": "const studentName: string = \"Rohan\";",
            "explanation": "Creates a constant text variable; assigning a number to it would trigger a compile error"
          },
          {
            "line": "const grade: number = 12;",
            "explanation": "Creates a numeric constant for the class level"
          },
          {
            "line": "const hasPassed: boolean = true;",
            "explanation": "Creates a boolean flag storing true"
          },
          {
            "line": "console.log(`Student: ${studentName}`);",
            "explanation": "Uses a template literal to print the student name"
          }
        ],
        "outputExplanation": "The template string substitutes the typed variables into the output lines, printing the student details cleanly to the console.",
        "commonMistakes": [
          {
            "mistake": "Trying to run a .ts file directly inside an HTML <script src=\"app.ts\"> tag in a browser.",
            "fix": "Compile the TypeScript file first with \"tsc app.ts\" to generate \"app.js\", then link \"app.js\"."
          },
          {
            "mistake": "Assigning a string to a variable typed as a number (e.g. let age: number = \"18\").",
            "fix": "Match the data value to the declared type: let age: number = 18."
          },
          {
            "mistake": "Capitalizing primitive types like : String or : Number instead of : string or : number.",
            "fix": "Always use lowercase for primitive types: string, number, boolean, symbol, bigint."
          },
          {
            "mistake": "Over-annotating when TypeScript can easily infer the type (let x: number = 5).",
            "fix": "TypeScript has smart type inference. Writing \"let x = 5\" automatically treats x as a number."
          }
        ],
        "keyPoints": [
          "TypeScript adds static type checks on top of JavaScript.",
          "Primitive types are lowercase: string, number, boolean.",
          "Type annotations look like: let name: string = \"Diya\".",
          "TypeScript code compiles into regular JavaScript; types do not exist at runtime.",
          "Errors are caught while typing in your editor (compile-time safety)."
        ],
        "quickSummary": "In simple words: TypeScript is JavaScript with a built-in spell checker. You add labels like : string or : number to variables, and TypeScript prevents you from putting the wrong data in the wrong place.",
        "practiceSet": [
          {
            "question": "Declare a variable cityName of type string and population of type number with appropriate values, and print them.",
            "difficulty": "Easy",
            "starterCode": "// Declare cityName and population with explicit types\nlet cityName = \"Bengaluru\";\nlet population = 13000000;\nconsole.log(`City: ${cityName}, Population: ${population}`);",
            "hint": "Add : string and : number after the variable names.",
            "solution": "let cityName: string = \"Bengaluru\";\nlet population: number = 13000000;\nconsole.log(`City: ${cityName}, Population: ${population}`);"
          },
          {
            "question": "Create a typed boolean variable isOnline set to true, and print a welcome message if isOnline is true.",
            "difficulty": "Easy",
            "starterCode": "const isOnline: boolean = true;\n// Check if online and print\n",
            "hint": "if (isOnline) { console.log(\"User is active\"); }",
            "solution": "const isOnline: boolean = true;\nif (isOnline) {\n    console.log(\"User is currently online!\");\n}"
          },
          {
            "question": "Write a program with price: number = 499 and discountPercent: number = 10, calculate finalPrice, and print it.",
            "difficulty": "Medium",
            "starterCode": "const price: number = 499;\nconst discountPercent: number = 10;\n// Calculate finalPrice and print\n",
            "hint": "const finalPrice: number = price - (price * discountPercent / 100);",
            "solution": "const price: number = 499;\nconst discountPercent: number = 10;\nconst finalPrice: number = price - (price * discountPercent / 100);\nconsole.log(`Discounted Price: ₹${finalPrice.toFixed(2)}`);"
          }
        ]
      },
      "practice": {
        "question": "Declare two variables studentName (string) and semesterNumber (number) with explicit types and print them.",
        "difficulty": "Easy",
        "starterCode": "// Declare studentName and semesterNumber with explicit type annotations\nconst studentName = \"Aarav\";\nconst semesterNumber = 4;\nconsole.log(`Student: ${studentName}, Sem: ${semesterNumber}`);",
        "hint": "Add : string and : number type annotations to the declarations.",
        "solution": "const studentName: string = \"Aarav\";\nconst semesterNumber: number = 4;\nconsole.log(`Student: ${studentName}, Sem: ${semesterNumber}`);"
      }
    },
    {
      "id": "primitive-types",
      "title": "2. Primitive Types & Special Types (any, unknown, never)",
      "summary": "TypeScript includes standard primitives (string, number, boolean, null, undefined) along with special utility types: any (disables checking), unknown (type-safe any), and never (values that never occur).",
      "syntax": "// Primitives\nlet count: number = 10;\nlet user: string = \"Admin\";\nlet active: boolean = false;\n\n// Special escape hatches\nlet mysteryData: unknown = \"Could be anything\";\nlet unsafeBox: any = 42; // Disables type safety (use sparingly!)",
      "codeExample": "// Primitive and special type demonstration\nlet marks: number = 95;\nlet studentStatus: string = \"Enrolled\";\nlet feePaid: boolean = true;\n\n// Type-safe handling with unknown\nlet incomingApiResponse: unknown = \"Success: 200 OK\";\n\nif (typeof incomingApiResponse === \"string\") {\n    console.log(incomingApiResponse.toUpperCase());\n} else {\n    console.log(\"Received non-string data\");\n}\n\nconsole.log(`Student Marks: ${marks} | Fee Paid: ${feePaid}`);",
      "expectedOutput": "SUCCESS: 200 OK\nStudent Marks: 95 | Fee Paid: true",
      "commonMistake": "Overusing \"any\" everywhere to bypass type errors, which completely disables TypeScript safety benefits and turns your code back into risky plain JavaScript.",
      "explanation": {
        "intro": "Primitive types represent basic single values like numbers, words, and booleans. Special types like \"any\" and \"unknown\" help you handle data from unknown sources (like internet APIs) safely.",
        "why": "When reading data from the web or an external database, you might not know in advance what type it is. TypeScript gives you \"unknown\" so you are forced to inspect the type before using it, preventing crashes.",
        "analogy": "\"any\" is like turning off the airport security metal detector and waving everyone through—it is easy, but dangerous. \"unknown\" is a locked package: you cannot open or use it until security inspects it with \"typeof\" to verify what is inside.",
        "concept": "1. number: All numbers (integers and floats).\n2. string: All text.\n3. boolean: true or false.\n4. null & undefined: Represent missing or unassigned values.\n5. any: Shuts off type checking (avoid unless migrating legacy code).\n6. unknown: Type-safe counterpart to any. You MUST check its type (e.g. if typeof x === \"string\") before using it.\n7. never: Represents values that can never occur (e.g. a function that always throws an error).",
        "syntaxBreakdown": [
          {
            "part": ": number",
            "meaning": "Holds integer or decimal floating-point values"
          },
          {
            "part": ": string",
            "meaning": "Holds character sequences inside single, double, or backtick quotes"
          },
          {
            "part": ": boolean",
            "meaning": "Holds logical values true or false"
          },
          {
            "part": ": any",
            "meaning": "Disables all compile-time type verification for this variable"
          },
          {
            "part": ": unknown",
            "meaning": "Accepts any value, but requires type verification before use"
          },
          {
            "part": "typeof val === \"string\"",
            "meaning": "Type guard that narrows an unknown type down to a specific type"
          }
        ],
        "codeExplanation": [
          {
            "line": "let marks: number = 95;",
            "explanation": "Declares a variable holding the number 95"
          },
          {
            "line": "let incomingApiResponse: unknown = \"Success: 200 OK\";",
            "explanation": "Stores data of unknown origin safely"
          },
          {
            "line": "if (typeof incomingApiResponse === \"string\")",
            "explanation": "Type guard: verifies the variable is indeed text"
          },
          {
            "line": "incomingApiResponse.toUpperCase()",
            "explanation": "TypeScript now safely permits string methods inside the if block"
          }
        ],
        "outputExplanation": "The type guard checks that incomingApiResponse is a string, safely converting it to uppercase and printing the student status.",
        "commonMistakes": [
          {
            "mistake": "Using \"any\" whenever you get a compiler error just to make it quiet.",
            "fix": "Use \"unknown\" and check the type with an \"if (typeof x === ...)\" check instead."
          },
          {
            "mistake": "Calling methods directly on an unknown variable: let x: unknown = \"hello\"; x.toUpperCase();.",
            "fix": "Verify the type first: if (typeof x === \"string\") { x.toUpperCase(); }."
          },
          {
            "mistake": "Confusing null (intentional absence of value) with undefined (variable declared but uninitialized).",
            "fix": "Keep undefined for missing function arguments and null for explicitly empty object fields."
          }
        ],
        "keyPoints": [
          "Primitives: string, number, boolean, null, undefined.",
          "Avoid \"any\" because it disables all safety checks.",
          "Prefer \"unknown\" for unpredictable data (like JSON from API calls).",
          "Use type guards (typeof, instanceof) to narrow unknown variables.",
          "\"never\" indicates code branches that cannot logically be reached."
        ],
        "quickSummary": "In simple words: Use string, number, and boolean for everyday data. Never use \"any\" if you want safety; use \"unknown\" instead, and check what it is with typeof before using it.",
        "practiceSet": [
          {
            "question": "Write a function printLength(value: unknown) that prints the string length if value is a string, or \"Not a string\" otherwise.",
            "difficulty": "Easy",
            "starterCode": "function printLength(value: unknown): void {\n    // Check if value is string and print length\n}\n\nprintLength(\"TypeScript\");\nprintLength(42);",
            "hint": "Use if (typeof value === \"string\") { console.log(value.length); }",
            "solution": "function printLength(value: unknown): void {\n    if (typeof value === \"string\") {\n        console.log(`Length: ${value.length}`);\n    } else {\n        console.log(\"Not a string\");\n    }\n}\n\nprintLength(\"TypeScript\");  // Length: 10\nprintLength(42);            // Not a string"
          },
          {
            "question": "Declare variables for null and undefined with explicit types.",
            "difficulty": "Easy",
            "starterCode": "// Declare emptyValue as null and notAssigned as undefined\n",
            "hint": "let emptyValue: null = null;",
            "solution": "let emptyValue: null = null;\nlet notAssigned: undefined = undefined;\nconsole.log(emptyValue, notAssigned);"
          },
          {
            "question": "Write a function safeDouble(input: unknown): number that doubles the number if input is a number, else returns 0.",
            "difficulty": "Medium",
            "starterCode": "function safeDouble(input: unknown): number {\n    // Check type and return double or 0\n    return 0;\n}",
            "hint": "if (typeof input === \"number\") return input * 2; else return 0;",
            "solution": "function safeDouble(input: unknown): number {\n    if (typeof input === \"number\") {\n        return input * 2;\n    }\n    return 0;\n}\n\nconsole.log(safeDouble(15));   // 30\nconsole.log(safeDouble(\"hi\")); // 0"
          }
        ]
      },
      "practice": {
        "question": "Write a type-safe function processInput(val: unknown) that prints uppercase if string, or squared if number.",
        "difficulty": "Easy",
        "starterCode": "function processInput(val: unknown) {\n    if (typeof val === \"string\") {\n        console.log(val.toUpperCase());\n    } else if (typeof val === \"number\") {\n        console.log(val * val);\n    }\n}\nprocessInput(\"hello\");\nprocessInput(6);",
        "hint": "Use typeof guards.",
        "solution": "function processInput(val: unknown) {\n    if (typeof val === \"string\") {\n        console.log(val.toUpperCase());\n    } else if (typeof val === \"number\") {\n        console.log(val * val);\n    }\n}\nprocessInput(\"hello\");\nprocessInput(6);"
      }
    },
    {
      "id": "arrays-tuples",
      "title": "3. Arrays & Tuples",
      "summary": "Typed arrays hold multiple values of the same type (number[] or Array<string>), while Tuples represent fixed-length arrays with specific types at each position.",
      "syntax": "// Typed Array (holds any number of numbers)\nlet scores: number[] = [88, 92, 79];\n\n// Tuple (fixed length: exactly [string, number])\nlet studentTuple: [string, number] = [\"Aarav\", 101];",
      "codeExample": "// Typed Arrays & Tuples in action\nconst subjects: string[] = [\"Physics\", \"Chemistry\", \"Mathematics\"];\nsubjects.push(\"Computer Science\"); // OK\n\n// Tuple representing: [SubjectName, MaxMarks, HasLab]\nconst labSubject: [string, number, boolean] = [\"Physics Lab\", 100, true];\n\nconsole.log(`Subjects: ${subjects.join(\", \")}`);\nconsole.log(`Lab: ${labSubject[0]} | Max: ${labSubject[1]} | Lab Exam: ${labSubject[2]}`);",
      "expectedOutput": "Subjects: Physics, Chemistry, Mathematics, Computer Science\nLab: Physics Lab | Max: 100 | Lab Exam: true",
      "commonMistake": "Confusing an array with a tuple: an array number[] can have any length, while a tuple [string, number] must match the exact position types.",
      "explanation": {
        "intro": "An Array is a list of items where every item has the same type (like a list of numbers). A Tuple is a special fixed-size list where each slot has a predetermined, specific type.",
        "why": "When storing a list of test marks, you want an array (number[]) because there can be 5 or 50 scores. But when returning latitude and longitude [number, number] or an HTTP status code pair [200, \"OK\"], you want a Tuple to guarantee exact order and length.",
        "analogy": "An array is like a roll of identical coin wrappers: all slots hold coins of the same type, and you can add as many as you need. A tuple is like an ID card format: slot 1 is always the photo, slot 2 is always your name, and slot 3 is always your date of birth.",
        "concept": "1. Array syntax: type[] or Array<type>. Holds zero or more items of that type.\n2. Tuple syntax: [type1, type2, ...]. Has a fixed length with strict types per slot.\n3. Array methods (.push, .pop, .map) are fully type-checked.\n4. Readonly arrays (readonly string[]) prevent any accidental modifications.",
        "syntaxBreakdown": [
          {
            "part": "number[]",
            "meaning": "An array that only permits numbers to be inserted"
          },
          {
            "part": "Array<string>",
            "meaning": "Alternative generic syntax for an array of strings"
          },
          {
            "part": "[string, number]",
            "meaning": "Tuple with exactly two elements: index 0 is string, index 1 is number"
          },
          {
            "part": "readonly number[]",
            "meaning": "Immutable array that cannot be modified via push or assignment"
          }
        ],
        "codeExplanation": [
          {
            "line": "const subjects: string[] = [...]",
            "explanation": "Creates a strictly typed array containing strings"
          },
          {
            "line": "subjects.push(\"Computer Science\");",
            "explanation": "Valid because the inserted item is a string"
          },
          {
            "line": "const labSubject: [string, number, boolean] = [...]",
            "explanation": "Creates a tuple with exactly 3 elements matching the specified types"
          },
          {
            "line": "console.log(...)",
            "explanation": "Prints the array elements joined with commas, and individual tuple fields"
          }
        ],
        "outputExplanation": "The array prints with its newly appended fourth subject. The tuple fields are accessed by index 0, 1, and 2, keeping their types intact.",
        "commonMistakes": [
          {
            "mistake": "Pushing the wrong type into an array: let nums: number[] = [1, 2]; nums.push(\"3\");.",
            "fix": "Arrays enforce element types. Pass numeric 3 instead of string \"3\"."
          },
          {
            "mistake": "Swapping the order of elements in a tuple: let t: [string, number] = [101, \"Aarav\"];.",
            "fix": "Tuples are strictly order-dependent. Place the string first and the number second."
          },
          {
            "mistake": "Accessing an index outside a tuple bounds: labSubject[5].",
            "fix": "Tuples have fixed lengths. TypeScript flags out-of-bounds index access as an error."
          }
        ],
        "keyPoints": [
          "Arrays (type[]) hold any number of items of one type.",
          "Tuples ([type1, type2]) hold a fixed number of items with strict positional types.",
          "Use readonly to prevent array mutations.",
          "Tuple elements can be destructured cleanly: const [name, roll] = studentTuple."
        ],
        "quickSummary": "In simple words: Use arrays (number[]) when you have a list of many similar items, and use tuples ([string, number]) when you need a fixed pair or triplet of different items like [name, rollNumber].",
        "practiceSet": [
          {
            "question": "Create a typed array of student names (string[]) and add two new names using .push().",
            "difficulty": "Easy",
            "starterCode": "const names: string[] = [\"Aman\", \"Riya\"];\n// Add two names and print\n",
            "hint": "names.push(\"Siddharth\"); names.push(\"Diya\");",
            "solution": "const names: string[] = [\"Aman\", \"Riya\"];\nnames.push(\"Siddharth\");\nnames.push(\"Diya\");\nconsole.log(names);"
          },
          {
            "question": "Define a Tuple named coordinate representing [latitude: number, longitude: number] for Delhi (28.61, 77.20).",
            "difficulty": "Easy",
            "starterCode": "// Define coordinate tuple\nlet coordinate: [number, number];\n",
            "hint": "coordinate = [28.61, 77.20];",
            "solution": "let coordinate: [number, number] = [28.61, 77.20];\nconsole.log(`Lat: ${coordinate[0]}, Long: ${coordinate[1]}`);"
          },
          {
            "question": "Create an array of test scores, calculate the average score using a loop or reduce(), and print it.",
            "difficulty": "Medium",
            "starterCode": "const testScores: number[] = [85, 90, 78, 92];\n// Calculate average\n",
            "hint": "const sum = testScores.reduce((acc, curr) => acc + curr, 0); const avg = sum / testScores.length;",
            "solution": "const testScores: number[] = [85, 90, 78, 92];\nconst total = testScores.reduce((acc, curr) => acc + curr, 0);\nconst average = total / testScores.length;\nconsole.log(`Average Score: ${average.toFixed(1)}`);"
          }
        ]
      },
      "practice": {
        "question": "Create a tuple holding an item name, its price, and whether it is in stock.",
        "difficulty": "Easy",
        "starterCode": "// [name, price, inStock]\nconst product: [string, number, boolean] = [\"Keyboard\", 1499, true];\nconsole.log(product);",
        "hint": "Use [string, number, boolean] as the tuple type.",
        "solution": "const product: [string, number, boolean] = [\"Keyboard\", 1499, true];\nconsole.log(product);"
      }
    },
    {
      "id": "interfaces-type-aliases",
      "title": "4. Interfaces vs Type Aliases",
      "summary": "Interfaces and Type Aliases let you define custom shape contracts for objects. Interfaces are ideal for object structures, while Types can also represent unions and primitives.",
      "syntax": "// Interface (standard for objects)\ninterface Student {\n    name: string;\n    rollNumber: number;\n    email?: string; // Optional property\n}\n\n// Type Alias\ntype Point = {\n    x: number;\n    y: number;\n};",
      "codeExample": "// Defining an object contract using an interface\ninterface StudentProfile {\n    readonly id: number;   // Cannot be changed once created\n    name: string;\n    grade: number;\n    stream: string;\n    email?: string;        // Optional property (? indicates optional)\n}\n\nconst student1: StudentProfile = {\n    id: 101,\n    name: \"Tanvi\",\n    grade: 12,\n    stream: \"Science\",\n    email: \"tanvi@school.edu\"\n};\n\nconst student2: StudentProfile = {\n    id: 102,\n    name: \"Varun\",\n    grade: 12,\n    stream: \"Commerce\"\n    // email omitted is allowed because of ?\n};\n\nconsole.log(`Student 1: ${student1.name} (${student1.stream})`);\nconsole.log(`Student 2: ${student2.name} (${student2.stream})`);",
      "expectedOutput": "Student 1: Tanvi (Science)\nStudent 2: Varun (Commerce)",
      "commonMistake": "Forgetting the question mark (?) for optional fields and wondering why TypeScript complains when an object lacks that property.",
      "explanation": {
        "intro": "An Interface or Type Alias is a custom blueprint that defines what properties an object must contain. It acts like a checklist that every matching object must satisfy.",
        "why": "If you create 20 student objects across different files, someone might accidentally type \"student_name\" instead of \"name\". An interface guarantees consistent names and types across your entire application.",
        "analogy": "Think of an interface like an official school registration form. The form specifies: Name (required text), Age (required number), and Parent Email (optional, marked with a star). If you forget a required field, the clerk hands the form right back to you.",
        "concept": "1. interface: Declares the shape of an object. Supports inheritance using extends.\n2. type: Can define objects, primitive shortcuts, unions, and tuples.\n3. Optional properties (?): Properties marked with ? can be omitted.\n4. readonly properties: Properties that cannot be reassigned once created.\n5. Rule of Thumb: Use interface for object shapes; use type for unions and primitives.",
        "syntaxBreakdown": [
          {
            "part": "interface Name { ... }",
            "meaning": "Declares an object structure contract"
          },
          {
            "part": "type Name = { ... }",
            "meaning": "Declares a custom type alias"
          },
          {
            "part": "prop?: type",
            "meaning": "The question mark (?) marks the property as optional"
          },
          {
            "part": "readonly prop: type",
            "meaning": "Prevents the property from being modified after initial assignment"
          },
          {
            "part": "interface B extends A",
            "meaning": "Interface inheritance: inherits all fields from interface A"
          }
        ],
        "codeExplanation": [
          {
            "line": "interface StudentProfile { ... }",
            "explanation": "Defines the blueprint with 5 properties"
          },
          {
            "line": "readonly id: number;",
            "explanation": "Ensures student ID cannot be altered after creation"
          },
          {
            "line": "email?: string;",
            "explanation": "Marks email as optional; objects can leave it out"
          },
          {
            "line": "const student1: StudentProfile = ...",
            "explanation": "Creates an object adhering strictly to the interface"
          },
          {
            "line": "const student2: StudentProfile = ...",
            "explanation": "Valid even without email because email is optional"
          }
        ],
        "outputExplanation": "Both student objects are checked and verified against StudentProfile, and their names and academic streams print successfully.",
        "commonMistakes": [
          {
            "mistake": "Trying to modify a readonly property: student1.id = 999, causing a compile error.",
            "fix": "readonly properties are locked upon creation. Remove readonly if the value needs to change."
          },
          {
            "mistake": "Adding extra unexpected properties not declared in the interface (e.g. hobby: \"Reading\").",
            "fix": "TypeScript rejects undeclared properties. Add the property to the interface definition first."
          },
          {
            "mistake": "Using commas instead of semicolons inside interfaces (both work, but semicolons are convention).",
            "fix": "Separate interface property definitions with semicolons (;)."
          }
        ],
        "keyPoints": [
          "Interfaces define shapes for objects.",
          "Use the question mark (?) for optional fields.",
          "Use readonly for properties that should never change.",
          "Interfaces can extend other interfaces (interface HighSchoolStudent extends Student).",
          "TypeScript alerts you immediately if any required property is missing."
        ],
        "quickSummary": "In simple words: Interfaces are checklists for objects. They ensure every student, product, or user object has the right properties with the right types before your code runs.",
        "practiceSet": [
          {
            "question": "Create an interface Book with title (string), author (string), pages (number), and optional isbn (string). Create a book object.",
            "difficulty": "Easy",
            "starterCode": "// Define Book interface and create an object\ninterface Book {\n    title: string;\n    // Add other fields\n}\n",
            "hint": "author: string; pages: number; isbn?: string;",
            "solution": "interface Book {\n    title: string;\n    author: string;\n    pages: number;\n    isbn?: string;\n}\n\nconst myBook: Book = {\n    title: \"Wings of Fire\",\n    author: \"Dr. A.P.J. Abdul Kalam\",\n    pages: 180\n};\nconsole.log(myBook.title);"
          },
          {
            "question": "Create an interface Rectangle with width and height. Write a function calculateArea(rect: Rectangle): number.",
            "difficulty": "Easy",
            "starterCode": "interface Rectangle {\n    width: number;\n    height: number;\n}\n\nfunction calculateArea(rect: Rectangle): number {\n    // Return area\n    return 0;\n}",
            "hint": "return rect.width * rect.height;",
            "solution": "interface Rectangle {\n    width: number;\n    height: number;\n}\n\nfunction calculateArea(rect: Rectangle): number {\n    return rect.width * rect.height;\n}\n\nconsole.log(calculateArea({ width: 10, height: 6 })); // 60"
          },
          {
            "question": "Demonstrate interface inheritance: create Person with name, and Student extending Person with grade and rollNumber.",
            "difficulty": "Medium",
            "starterCode": "interface Person {\n    name: string;\n}\n\n// interface Student extends Person ...\n",
            "hint": "interface Student extends Person { grade: number; rollNumber: number; }",
            "solution": "interface Person {\n    name: string;\n}\n\ninterface Student extends Person {\n    grade: number;\n    rollNumber: number;\n}\n\nconst s: Student = {\n    name: \"Ishan\",\n    grade: 12,\n    rollNumber: 15\n};\nconsole.log(`${s.name} - Class ${s.grade}, Roll ${s.rollNumber}`);"
          }
        ]
      },
      "practice": {
        "question": "Define an interface User with id, username, and optional email.",
        "difficulty": "Easy",
        "starterCode": "interface User {\n    id: number;\n    username: string;\n    email?: string;\n}\n\nconst u: User = { id: 1, username: \"coder12\" };\nconsole.log(u);",
        "hint": "Use email?: string for optional property.",
        "solution": "interface User {\n    id: number;\n    username: string;\n    email?: string;\n}\n\nconst u: User = { id: 1, username: \"coder12\" };\nconsole.log(u);"
      }
    },
    {
      "id": "union-intersection-types",
      "title": "5. Union & Intersection Types",
      "summary": "Union types (|) allow a value to be one of several types (e.g. string | number), while Intersection types (&) combine multiple types into a single comprehensive contract.",
      "syntax": "// Union: Type A OR Type B\ntype ID = string | number;\n\n// Literal Union (like an enum)\ntype OrderStatus = \"pending\" | \"shipped\" | \"delivered\";\n\n// Intersection: Combines Type A AND Type B\ntype Teacher = Person & Employee;",
      "codeExample": "// Union types and type narrowing\ntype Status = \"success\" | \"error\" | \"loading\";\n\nfunction handleApiResponse(status: Status, data: string | number): void {\n    console.log(`Status: ${status.toUpperCase()}`);\n\n    // Type Narrowing using typeof\n    if (typeof data === \"string\") {\n        console.log(`Message: ${data.trim()}`);\n    } else {\n        console.log(`Code: #${data}`);\n    }\n}\n\nhandleApiResponse(\"success\", \"Operation completed!\");\nhandleApiResponse(\"error\", 404);",
      "expectedOutput": "Status: SUCCESS\nMessage: Operation completed!\nStatus: ERROR\nCode: #404",
      "commonMistake": "Passing an unlisted string literal to a literal union (e.g. passing \"failed\" when the union only allows \"success\" | \"error\").",
      "explanation": {
        "intro": "A Union type (|) means a variable can hold either this type OR that type. An Intersection type (&) merges two types together so the resulting object must contain all properties from BOTH.",
        "why": "A roll number might be formatted as a number (42) or a string (\"XII-B-42\"). A status can only ever be \"pending\", \"approved\", or \"rejected\". Union types let you express these real-world possibilities accurately.",
        "analogy": "A Union (|) is like choosing an elective subject in Class 12: you can take Computer Science OR Economics. An Intersection (&) is like a student badge that has BOTH student info AND library access permissions merged onto the same card.",
        "concept": "1. Union (|): Read as \"OR\". let id: string | number allows either text or numbers.\n2. Literal Types: Restricting values to specific exact strings, like \"light\" | \"dark\".\n3. Type Narrowing: Using \"if (typeof x === ...)\" to let TypeScript know which branch of the union is currently active.\n4. Intersection (&): Read as \"AND\". Combines multiple object types into one.",
        "syntaxBreakdown": [
          {
            "part": "type A | type B",
            "meaning": "Union: Value can be either of type A or of type B"
          },
          {
            "part": "\"yes\" | \"no\"",
            "meaning": "String literal union: value can only be the exact strings \"yes\" or \"no\""
          },
          {
            "part": "type A & type B",
            "meaning": "Intersection: Combines all properties of A and B together"
          },
          {
            "part": "typeof var === \"type\"",
            "meaning": "Type narrowing guard that unlocks type-specific methods"
          }
        ],
        "codeExplanation": [
          {
            "line": "type Status = \"success\" | \"error\" | \"loading\";",
            "explanation": "Creates a union allowing only these three specific string values"
          },
          {
            "line": "function handleApiResponse(status: Status, data: string | number)",
            "explanation": "data can be either a text message or a numeric error code"
          },
          {
            "line": "if (typeof data === \"string\")",
            "explanation": "Narrows data so TypeScript knows it is a string inside this block"
          },
          {
            "line": "handleApiResponse(\"error\", 404);",
            "explanation": "Valid call passing \"error\" and the number 404"
          }
        ],
        "outputExplanation": "In the first call, data is narrowed to string and trimmed. In the second call, data is recognized as number and formatted with a hashtag.",
        "commonMistakes": [
          {
            "mistake": "Calling a string method (like .toUpperCase()) on a string | number without checking typeof first.",
            "fix": "Always narrow the union with an \"if (typeof x === \"string\")\" check before calling string-specific methods."
          },
          {
            "mistake": "Misspelling a literal union value, e.g. passing \"Success\" (capital S) when \"success\" was declared.",
            "fix": "Literal unions are case-sensitive. Match the exact casing declared in the type."
          },
          {
            "mistake": "Creating impossible intersections of primitive types, like string & number (which results in never).",
            "fix": "Intersections are meant for combining object types, not opposing primitives."
          }
        ],
        "keyPoints": [
          "Union (|) means OR; Intersection (&) means AND.",
          "String literal unions are safer than generic strings (e.g. \"open\" | \"closed\").",
          "Always use typeof or in guards to narrow union types before accessing specific methods.",
          "Intersections merge properties from multiple types into a single object contract."
        ],
        "quickSummary": "In simple words: Use unions (A | B) when a value can be either one type or another. Use intersections (A & B) when an object must have everything from both types combined.",
        "practiceSet": [
          {
            "question": "Define a type ThemeMode that can only be \"light\", \"dark\", or \"system\". Declare a variable with this type.",
            "difficulty": "Easy",
            "starterCode": "// Define ThemeMode and assign a value\ntype ThemeMode = \"light\" | \"dark\" | \"system\";\n",
            "hint": "let currentTheme: ThemeMode = \"dark\";",
            "solution": "type ThemeMode = \"light\" | \"dark\" | \"system\";\nlet currentTheme: ThemeMode = \"dark\";\nconsole.log(`Selected Theme: ${currentTheme}`);"
          },
          {
            "question": "Write a function formatRoll(roll: string | number) that returns \"Roll: <roll>\" converted to uppercase string.",
            "difficulty": "Easy",
            "starterCode": "function formatRoll(roll: string | number): string {\n    // Return formatted string\n    return \"\";\n}",
            "hint": "return `Roll: ${String(roll).toUpperCase()}`;",
            "solution": "function formatRoll(roll: string | number): string {\n    return `Roll: ${String(roll).toUpperCase()}`;\n}\n\nconsole.log(formatRoll(42));          // Roll: 42\nconsole.log(formatRoll(\"xii-b-10\"));  // Roll: XII-B-10"
          },
          {
            "question": "Create two types HasName ({ name: string }) and HasAge ({ age: number }). Combine them using & into Person, and create an object.",
            "difficulty": "Medium",
            "starterCode": "type HasName = { name: string };\ntype HasAge = { age: number };\n// Create Person intersection type and object\n",
            "hint": "type Person = HasName & HasAge;",
            "solution": "type HasName = { name: string };\ntype HasAge = { age: number };\ntype Person = HasName & HasAge;\n\nconst person1: Person = {\n    name: \"Aditya\",\n    age: 17\n};\nconsole.log(`${person1.name} is ${person1.age} years old.`);"
          }
        ]
      },
      "practice": {
        "question": "Define a type Result that can be { status: \"success\", data: string } or { status: \"error\", error: string }.",
        "difficulty": "Easy",
        "starterCode": "type Success = { status: \"success\"; data: string };\ntype Failure = { status: \"error\"; error: string };\ntype Result = Success | Failure;\n\nconst res: Result = { status: \"success\", data: \"Downloaded\" };\nconsole.log(res);",
        "hint": "Use a discriminated union with status property.",
        "solution": "type Success = { status: \"success\"; data: string };\ntype Failure = { status: \"error\"; error: string };\ntype Result = Success | Failure;\n\nconst res: Result = { status: \"success\", data: \"Downloaded\" };\nconsole.log(res);"
      }
    },
    {
      "id": "functions-types",
      "title": "6. Functions, Return Types & Arrow Functions",
      "summary": "TypeScript allows you to specify types for function parameters and return values, preventing argument mismatches and ensuring return integrity.",
      "syntax": "// Standard function with typed parameters and return type\nfunction add(a: number, b: number): number {\n    return a + b;\n}\n\n// Arrow function syntax\nconst multiply = (x: number, y: number): number => x * y;\n\n// Void return type (does not return a value)\nfunction logMessage(msg: string): void {\n    console.log(msg);\n}",
      "codeExample": "// Functions with typed parameters, return type, and optional parameter\nfunction generateReportCard(\n    studentName: string,\n    marks: number,\n    remarks?: string\n): string {\n    const status = marks >= 40 ? \"Passed\" : \"Needs Improvement\";\n    let report = `${studentName}: ${marks}/100 (${status})`;\n    if (remarks) {\n        report += ` - Note: ${remarks}`;\n    }\n    return report;\n}\n\n// Typed arrow function\nconst isHonorsStudent = (marks: number): boolean => marks >= 90;\n\nconsole.log(generateReportCard(\"Sneha\", 94, \"Excellent performance\"));\nconsole.log(generateReportCard(\"Rahul\", 38));\nconsole.log(`Is Sneha Honors? ${isHonorsStudent(94)}`);",
      "expectedOutput": "Sneha: 94/100 (Passed) - Note: Excellent performance\nRahul: 38/100 (Needs Improvement)\nIs Sneha Honors? true",
      "commonMistake": "Forgetting that if a function returns nothing, its return type is \"void\" (not \"undefined\" or \"null\").",
      "explanation": {
        "intro": "In TypeScript, you specify what types of inputs a function expects in its parentheses and what type of result it promises to hand back after the colon (: returnType).",
        "why": "If a function expects two numbers to calculate an average, but someone accidentally passes a string, JavaScript concatenates them into gibberish. TypeScript ensures callers only pass valid data and callers receive what they expect.",
        "analogy": "Think of a vending machine: the input slot only accepts coins (parameter: number). If you try to insert paper or buttons, it refuses to fit. When you press a button, it promises to dispense a drink (return type: Beverage).",
        "concept": "1. Parameter Typing: (x: number, y: number) ensures callers pass valid arguments.\n2. Return Type: function fn(): number guarantees the function returns a number.\n3. void: Used for functions that perform an action (like console.log) without returning any value.\n4. Optional parameters (?): Must always be placed after all required parameters.\n5. Arrow functions: Can be typed cleanly using (param: type): returnType => expression.",
        "syntaxBreakdown": [
          {
            "part": "function name(param: type): returnType",
            "meaning": "Full signature specifying input and return types"
          },
          {
            "part": ": void",
            "meaning": "Indicates the function returns no value"
          },
          {
            "part": "param?: type",
            "meaning": "Optional parameter that callers can omit"
          },
          {
            "part": "param: type = default",
            "meaning": "Default parameter value used if omitted by caller"
          },
          {
            "part": "const fn = (x: type): type => ...",
            "meaning": "Typed arrow function syntax"
          }
        ],
        "codeExplanation": [
          {
            "line": "function generateReportCard(...)",
            "explanation": "Specifies studentName (string), marks (number), optional remarks, and string return"
          },
          {
            "line": "const status = marks >= 40 ? \"Passed\" : \"Needs Improvement\";",
            "explanation": "Ternary operator determining passing status"
          },
          {
            "line": "const isHonorsStudent = (marks: number): boolean => marks >= 90;",
            "explanation": "Arrow function returning a boolean"
          },
          {
            "line": "console.log(...)",
            "explanation": "Executes the functions and logs the generated reports"
          }
        ],
        "outputExplanation": "The function formats Sneha report card with remarks, Rahul report card without remarks, and tests the honors arrow function.",
        "commonMistakes": [
          {
            "mistake": "Putting an optional parameter before a required parameter: (a?: number, b: number).",
            "fix": "Optional parameters must always come at the very end of the parameter list: (b: number, a?: number)."
          },
          {
            "mistake": "Returning a value from a function explicitly typed as : void.",
            "fix": "If a function returns a value, update its return type from void to the actual data type."
          },
          {
            "mistake": "Passing too few or too many arguments to a TypeScript function.",
            "fix": "TypeScript enforces the exact number of arguments. Use optional (?) or default values if arguments vary."
          }
        ],
        "keyPoints": [
          "Annotate parameters: (a: number, b: number).",
          "Annotate return values after the parentheses: (): string.",
          "Functions that do not return a value use the void return type.",
          "Optional parameters (?) must always follow required parameters.",
          "Arrow functions follow the same typing rules as standard functions."
        ],
        "quickSummary": "In simple words: Type your function inputs (a: number, b: string) and type your return value (): boolean. This ensures nobody feeds your function bad data or expects the wrong answer.",
        "practiceSet": [
          {
            "question": "Write a function calculateTax(income: number, rate: number = 0.1): number that calculates income * rate.",
            "difficulty": "Easy",
            "starterCode": "// Write calculateTax function\nfunction calculateTax(income: number, rate: number = 0.1): number {\n    return 0;\n}",
            "hint": "return income * rate;",
            "solution": "function calculateTax(income: number, rate: number = 0.1): number {\n    return income * rate;\n}\n\nconsole.log(calculateTax(50000));      // 5000\nconsole.log(calculateTax(50000, 0.2)); // 10000"
          },
          {
            "question": "Write an arrow function isEven = (num: number): boolean that checks if a number is divisible by 2.",
            "difficulty": "Easy",
            "starterCode": "// Write isEven arrow function\nconst isEven = (num: number): boolean => false;\n",
            "hint": "const isEven = (num: number): boolean => num % 2 === 0;",
            "solution": "const isEven = (num: number): boolean => num % 2 === 0;\n\nconsole.log(isEven(10)); // true\nconsole.log(isEven(7));  // false"
          },
          {
            "question": "Write a function greet(name: string, title?: string): string that returns \"Hello, <title> <name>\" if title is given, or \"Hello, <name>\".",
            "difficulty": "Medium",
            "starterCode": "function greet(name: string, title?: string): string {\n    // Check if title is present\n    return \"\";\n}",
            "hint": "return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;",
            "solution": "function greet(name: string, title?: string): string {\n    if (title) {\n        return `Hello, ${title} ${name}`;\n    }\n    return `Hello, ${name}`;\n}\n\nconsole.log(greet(\"Sharma\", \"Dr.\")); // Hello, Dr. Sharma\nconsole.log(greet(\"Aarav\"));         // Hello, Aarav"
          }
        ]
      },
      "practice": {
        "question": "Write a typed function greet(name: string, greeting: string = \"Hello\"): string.",
        "difficulty": "Easy",
        "starterCode": "function greet(name: string, greeting: string = \"Hello\"): string {\n    return `${greeting}, ${name}!`;\n}\nconsole.log(greet(\"Kavya\"));\nconsole.log(greet(\"Rohan\", \"Good morning\"));",
        "hint": "Use default parameter value.",
        "solution": "function greet(name: string, greeting: string = \"Hello\"): string {\n    return `${greeting}, ${name}!`;\n}\nconsole.log(greet(\"Kavya\"));\nconsole.log(greet(\"Rohan\", \"Good morning\"));"
      }
    },
    {
      "id": "generics",
      "title": "7. Generics (<T>) for Reusable Logic",
      "summary": "Generics let you write reusable functions, interfaces, and classes that work with any data type while preserving full compile-time type safety.",
      "syntax": "// Generic function with type variable T\nfunction getFirstElement<T>(arr: T[]): T {\n    return arr[0];\n}\n\n// Generic interface\ninterface ApiResponse<T> {\n    data: T;\n    status: number;\n}",
      "codeExample": "// A generic box that can store any data type securely\nclass StorageBox<T> {\n    private content: T;\n\n    constructor(initialValue: T) {\n        this.content = initialValue;\n    }\n\n    get(): T {\n        return this.content;\n    }\n\n    set(newValue: T): void {\n        this.content = newValue;\n    }\n}\n\n// Using StorageBox for numbers\nconst numberBox = new StorageBox<number>(42);\nconsole.log(`Number in box: ${numberBox.get()}`);\n\n// Using StorageBox for strings\nconst stringBox = new StorageBox<string>(\"Encrypted Key\");\nconsole.log(`String in box: ${stringBox.get().toUpperCase()}`);",
      "expectedOutput": "Number in box: 42\nString in box: ENCRYPTED KEY",
      "commonMistake": "Using \"any\" instead of Generics (<T>). \"any\" forgets the type completely, while Generics remember the exact type you passed in.",
      "explanation": {
        "intro": "Generics are placeholders for types. Instead of locking a function or class to one specific type (like number or string), you use a placeholder like <T> so the caller can specify what type to use.",
        "why": "If you write a function to reverse an array of numbers, and tomorrow you need to reverse an array of strings, you would have to write two identical functions. Generics let you write ONE function that works safely for any type.",
        "analogy": "Think of a generic prescription pill bottle. The bottle is molded to hold medicine, but it has a blank label. If you fill it with Vitamin C, it becomes a Vitamin C bottle. If you fill it with Aspirin, it becomes an Aspirin bottle. The bottle design is generic, but whatever is inside is strictly identified.",
        "concept": "1. <T>: T stands for \"Type\" and acts as a variable that holds a type instead of a value.\n2. Type Preservation: If you pass number[], T becomes number, so the return type is guaranteed to be number.\n3. Generic Constraints: <T extends { length: number }> restricts T so it only accepts types that have a length property (like strings and arrays).",
        "syntaxBreakdown": [
          {
            "part": "<T>",
            "meaning": "Type parameter: a placeholder for a type that will be supplied when called"
          },
          {
            "part": "function fn<T>(arg: T): T",
            "meaning": "Takes an argument of type T and returns a value of that exact same type T"
          },
          {
            "part": "interface Box<T> { val: T }",
            "meaning": "Generic interface where property types adapt based on T"
          },
          {
            "part": "T extends Type",
            "meaning": "Generic constraint: enforces that T must satisfy a specific interface or type"
          }
        ],
        "codeExplanation": [
          {
            "line": "class StorageBox<T>",
            "explanation": "Declares a generic class parameterized by type T"
          },
          {
            "line": "private content: T;",
            "explanation": "The stored variable will strictly match whatever type T is chosen"
          },
          {
            "line": "new StorageBox<number>(42)",
            "explanation": "Creates a box specifically for numbers; TypeScript knows .get() returns a number"
          },
          {
            "line": "new StorageBox<string>(\"Encrypted Key\")",
            "explanation": "Creates a box for strings; unlocks string methods like .toUpperCase()"
          }
        ],
        "outputExplanation": "The number box stores and retrieves 42 safely. The string box retrieves the text and allows .toUpperCase() because TypeScript remembers it holds a string.",
        "commonMistakes": [
          {
            "mistake": "Using \"any\" thinking it achieves the same result as Generics.",
            "fix": "\"any\" throws away type information, losing autocomplete. Generics remember the exact type."
          },
          {
            "mistake": "Assuming properties like .length exist on an unconstrained generic T (e.g. return item.length).",
            "fix": "If you need .length, constrain the generic: <T extends { length: number }>."
          },
          {
            "mistake": "Overusing generics for simple code where a concrete type (or union) is much simpler.",
            "fix": "Only use generics when logic truly applies equally across multiple distinct types."
          }
        ],
        "keyPoints": [
          "Generics (<T>) enable reusable, type-safe components.",
          "Unlike \"any\", generics preserve the exact type information.",
          "Common type variable names: T (Type), K (Key), V (Value), E (Element).",
          "Generic constraints (<T extends Interface>) restrict permitted types."
        ],
        "quickSummary": "In simple words: Generics are type variables written as <T>. They let you build flexible functions and classes that adapt to whatever data type you hand them, without losing safety.",
        "practiceSet": [
          {
            "question": "Write a generic function wrapInArray<T>(item: T): T[] that takes any item and returns it inside a 1-element array.",
            "difficulty": "Easy",
            "starterCode": "function wrapInArray<T>(item: T): T[] {\n    // Return item wrapped in array\n    return [];\n}",
            "hint": "return [item];",
            "solution": "function wrapInArray<T>(item: T): T[] {\n    return [item];\n}\n\nconsole.log(wrapInArray(100));     // [100] (number[])\nconsole.log(wrapInArray(\"Code\"));  // [\"Code\"] (string[])"
          },
          {
            "question": "Write a generic function getLast<T>(arr: T[]): T that returns the last element of an array.",
            "difficulty": "Easy",
            "starterCode": "function getLast<T>(arr: T[]): T {\n    // Return last element\n    return arr[0];\n}",
            "hint": "return arr[arr.length - 1];",
            "solution": "function getLast<T>(arr: T[]): T {\n    return arr[arr.length - 1];\n}\n\nconsole.log(getLast([10, 20, 30]));      // 30\nconsole.log(getLast([\"a\", \"b\", \"c\"]));  // \"c\""
          },
          {
            "question": "Create a generic interface Pair<K, V> with properties first: K and second: V. Create an instance with string and number.",
            "difficulty": "Medium",
            "starterCode": "// Define Pair<K, V> interface\ninterface Pair<K, V> {\n    first: K;\n    second: V;\n}\n",
            "hint": "const p: Pair<string, number> = { first: \"Age\", second: 18 };",
            "solution": "interface Pair<K, V> {\n    first: K;\n    second: V;\n}\n\nconst studentAgePair: Pair<string, number> = {\n    first: \"Rohan\",\n    second: 18\n};\nconsole.log(`${studentAgePair.first}: ${studentAgePair.second}`);"
          }
        ]
      },
      "practice": {
        "question": "Write a generic function identity<T>(arg: T): T that returns its argument unchanged.",
        "difficulty": "Easy",
        "starterCode": "function identity<T>(arg: T): T {\n    return arg;\n}\nconsole.log(identity<number>(42));\nconsole.log(identity<string>(\"test\"));",
        "hint": "Return arg directly.",
        "solution": "function identity<T>(arg: T): T {\n    return arg;\n}\nconsole.log(identity<number>(42));\nconsole.log(identity<string>(\"test\"));"
      }
    },
    {
      "id": "classes-access-modifiers",
      "title": "8. Classes & Access Modifiers (public, private, readonly)",
      "summary": "TypeScript classes add access modifiers (public, private, protected, readonly) to encapsulate data and prevent unauthorized modifications to object state.",
      "syntax": "class Student {\n    public name: string;         // Accessible anywhere (default)\n    private rollNumber: number;  // Accessible ONLY inside this class\n    readonly school: string;     // Cannot be modified after constructor\n\n    constructor(name: string, roll: number, school: string) {\n        this.name = name;\n        this.rollNumber = roll;\n        this.school = school;\n    }\n}",
      "codeExample": "class StudentSavingsAccount {\n    public readonly accountHolder: string;\n    private balance: number; // Encapsulated: cannot be modified from outside\n\n    constructor(holder: string, startingBalance: number = 0) {\n        this.accountHolder = holder;\n        this.balance = startingBalance;\n    }\n\n    public deposit(amount: number): void {\n        if (amount > 0) {\n            this.balance += amount;\n            console.log(`Deposited ₹${amount}. Balance: ₹${this.balance}`);\n        }\n    }\n\n    public getBalance(): number {\n        return this.balance; // Controlled read access\n    }\n}\n\nconst acc = new StudentSavingsAccount(\"Aarav\", 500);\nacc.deposit(250);\nconsole.log(`Holder: ${acc.accountHolder} | Balance: ₹${acc.getBalance()}`);",
      "expectedOutput": "Deposited ₹250. Balance: ₹750\nHolder: Aarav | Balance: ₹750",
      "commonMistake": "Trying to access a private property directly from outside the class (e.g. acc.balance), which triggers a TypeScript compile error.",
      "explanation": {
        "intro": "Access modifiers in TypeScript control who is allowed to view or change properties inside a class. They are: public (everyone), private (only this class), and protected (this class and its children).",
        "why": "In a banking application, you do not want any random line of code to set balance = 10000000. By making balance \"private\", you force all updates to go through deposit() and withdraw() where rules are checked.",
        "analogy": "Think of a smartphone. The volume buttons and touch screen are public (anyone holding the phone can use them). The battery and circuit board inside the casing are private: you cannot touch them directly without going through the approved phone controls.",
        "concept": "1. public (default): Accessible from anywhere.\n2. private: Accessible only within the declaring class.\n3. protected: Accessible within the class and any subclasses that extend it.\n4. readonly: Can only be set in the constructor; immutable thereafter.\n5. Parameter properties: Declaring public/private directly in the constructor parameters automatically creates and assigns the field.",
        "syntaxBreakdown": [
          {
            "part": "public prop: type",
            "meaning": "Visible and accessible everywhere (the default modifier)"
          },
          {
            "part": "private prop: type",
            "meaning": "Hidden; can only be accessed by methods inside this exact class"
          },
          {
            "part": "protected prop: type",
            "meaning": "Accessible inside this class and any subclass that inherits from it"
          },
          {
            "part": "readonly prop: type",
            "meaning": "Cannot be altered after the constructor finishes execution"
          },
          {
            "part": "constructor(public name: string)",
            "meaning": "TypeScript shortcut that declares and assigns this.name automatically"
          }
        ],
        "codeExplanation": [
          {
            "line": "public readonly accountHolder: string;",
            "explanation": "Anyone can see the name, but nobody can change it"
          },
          {
            "line": "private balance: number;",
            "explanation": "Locks balance inside the class; outside code cannot alter it directly"
          },
          {
            "line": "public deposit(amount: number)",
            "explanation": "Public method providing a validated path to increase balance"
          },
          {
            "line": "public getBalance(): number",
            "explanation": "Public getter method returning the private balance safely"
          }
        ],
        "outputExplanation": "Depositing 250 safely increases the balance to 750. The private balance is safely read through getBalance() without exposing the raw property.",
        "commonMistakes": [
          {
            "mistake": "Assuming TypeScript \"private\" prevents access in runtime JavaScript in browsers.",
            "fix": "TypeScript access modifiers are compile-time only. Use ES private fields (#balance) if you need strict runtime privacy."
          },
          {
            "mistake": "Trying to reassign a readonly property inside a regular class method.",
            "fix": "readonly properties can only be assigned in their declaration or inside the constructor."
          },
          {
            "mistake": "Forgetting to use \"this.\" when referencing class properties inside methods.",
            "fix": "Always write this.balance, not just balance."
          }
        ],
        "keyPoints": [
          "public: accessible anywhere (default).",
          "private: accessible only inside this class.",
          "protected: accessible inside this class and child subclasses.",
          "readonly: cannot be modified after the constructor runs.",
          "Use getters and setters (or methods) to provide controlled access to private data."
        ],
        "quickSummary": "In simple words: Use public for things you want people to see, private to lock away internal sensitive data, and readonly for things that should never change after being created.",
        "practiceSet": [
          {
            "question": "Create a class Person with a public name and a private age. Add a method getAge() to read the age.",
            "difficulty": "Easy",
            "starterCode": "class Person {\n    public name: string;\n    private age: number;\n\n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n\n    // Add getAge method\n}",
            "hint": "public getAge(): number { return this.age; }",
            "solution": "class Person {\n    public name: string;\n    private age: number;\n\n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public getAge(): number {\n        return this.age;\n    }\n}\n\nconst p = new Person(\"Divya\", 17);\nconsole.log(`${p.name} is ${p.getAge()} years old.`);"
          },
          {
            "question": "Create a Car class with readonly brand and public model. Try to change brand and observe TypeScript preventing it.",
            "difficulty": "Easy",
            "starterCode": "class Car {\n    readonly brand: string;\n    public model: string;\n\n    constructor(brand: string, model: string) {\n        this.brand = brand;\n        this.model = model;\n    }\n}\n\nconst myCar = new Car(\"Tata\", \"Nexon\");\nconsole.log(myCar.brand, myCar.model);",
            "hint": "myCar.brand = \"Other\" will fail compilation.",
            "solution": "class Car {\n    readonly brand: string;\n    public model: string;\n\n    constructor(brand: string, model: string) {\n        this.brand = brand;\n        this.model = model;\n    }\n}\n\nconst myCar = new Car(\"Tata\", \"Nexon\");\nconsole.log(`Car: ${myCar.brand} ${myCar.model}`);"
          },
          {
            "question": "Use TypeScript constructor parameter shortcut syntax to create a Product class with public id: number and public name: string in 3 lines.",
            "difficulty": "Medium",
            "starterCode": "class Product {\n    // Use parameter properties in constructor\n    constructor() {}\n}",
            "hint": "constructor(public id: number, public name: string) {}",
            "solution": "class Product {\n    constructor(public id: number, public name: string) {}\n}\n\nconst prod = new Product(101, \"Mouse\");\nconsole.log(`Item #${prod.id}: ${prod.name}`);"
          }
        ]
      },
      "practice": {
        "question": "Define a class User with private password and a checkPassword(input: string): boolean method.",
        "difficulty": "Easy",
        "starterCode": "class UserAccount {\n    private pass: string;\n    constructor(pass: string) { this.pass = pass; }\n    checkPassword(input: string): boolean {\n        return this.pass === input;\n    }\n}\nconst u = new UserAccount(\"secret123\");\nconsole.log(u.checkPassword(\"secret123\"));",
        "hint": "Use private for password.",
        "solution": "class UserAccount {\n    private pass: string;\n    constructor(pass: string) { this.pass = pass; }\n    checkPassword(input: string): boolean {\n        return this.pass === input;\n    }\n}\nconst u = new UserAccount(\"secret123\");\nconsole.log(u.checkPassword(\"secret123\"));"
      }
    },
    {
      "id": "async-await-promises",
      "title": "9. Async/Await & Typed Promises (Promise<T>)",
      "summary": "Asynchronous programming in TypeScript handles operations that take time (like fetching data from internet servers) using Promises typed as Promise<T> and clean async/await syntax.",
      "syntax": "// Function returning a typed Promise\nfunction fetchScore(): Promise<number> {\n    return Promise.resolve(95);\n}\n\n// Consuming with async/await\nasync function display(): Promise<void> {\n    const score = await fetchScore();\n    console.log(score);\n}",
      "codeExample": "interface StudentData {\n    id: number;\n    name: string;\n    course: string;\n}\n\n// Simulates an API call that takes time to respond\nasync function fetchStudentById(id: number): Promise<StudentData> {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            resolve({\n                id: id,\n                name: \"Ananya\",\n                course: \"Computer Science\"\n            });\n        }, 50);\n    });\n}\n\nasync function loadProfile(): Promise<void> {\n    console.log(\"Fetching student details from server...\");\n    const student = await fetchStudentById(101);\n    console.log(`Loaded: ${student.name} | Course: ${student.course}`);\n}\n\nloadProfile();",
      "expectedOutput": "Fetching student details from server...\nLoaded: Ananya | Course: Computer Science",
      "commonMistake": "Forgetting the await keyword before a Promise-returning function, which gives you the raw Promise object instead of the actual data value inside it.",
      "explanation": {
        "intro": "When your code asks for data from a server across the world, it takes a few milliseconds to respond. Asynchronous programming using async/await tells TypeScript to pause and wait for the answer without freezing the whole program.",
        "why": "If web browsers paused synchronously waiting for server responses, your screen would completely lock up and buttons would not click. Asynchronous code keeps websites responsive and fluid.",
        "analogy": "Think of ordering food at a fast-food counter. The cashier gives you a token buzzer (a Promise). You do not stand frozen at the counter; you sit down at a table. When the buzzer rings (await), you pick up your prepared meal (the resolved data).",
        "concept": "1. Promise<T>: A container for a value that will arrive in the future. T is the type of data it will resolve with.\n2. async keyword: Marks a function as asynchronous. An async function always returns a Promise.\n3. await keyword: Pauses execution inside an async function until the Promise resolves with its data value.\n4. try...catch: Used around await calls to gracefully handle network failures or rejected Promises.",
        "syntaxBreakdown": [
          {
            "part": "Promise<T>",
            "meaning": "A promise that guarantees to eventually resolve with data of type T"
          },
          {
            "part": "async function(): Promise<T>",
            "meaning": "Marks the function as async; must return a Promise containing type T"
          },
          {
            "part": "const data = await promise",
            "meaning": "Unwraps the Promise and extracts the actual data value of type T"
          },
          {
            "part": "Promise.resolve(val)",
            "meaning": "Instantly creates a successfully resolved Promise containing val"
          },
          {
            "part": "Promise.reject(err)",
            "meaning": "Creates a failed/rejected Promise with error details"
          }
        ],
        "codeExplanation": [
          {
            "line": "interface StudentData",
            "explanation": "Defines the shape of data returned from the server"
          },
          {
            "line": "async function fetchStudentById(id: number): Promise<StudentData>",
            "explanation": "Declares an async function returning a Promise wrapping StudentData"
          },
          {
            "line": "const student = await fetchStudentById(101);",
            "explanation": "Awaits the response; student variable is strictly typed as StudentData"
          },
          {
            "line": "console.log(`Loaded: ${student.name}...`);",
            "explanation": "Safely accesses .name and .course with full autocomplete"
          }
        ],
        "outputExplanation": "The log announces the server request, waits briefly for the simulated network delay, and prints Ananya profile once the data arrives.",
        "commonMistakes": [
          {
            "mistake": "Using \"await\" outside of an async function (in standard non-module files).",
            "fix": "The \"await\" keyword can only be used inside functions marked with \"async\"."
          },
          {
            "mistake": "Forgetting \"await\": const res = fetchStudent(); console.log(res.name); (Error: property name does not exist on Promise).",
            "fix": "Always add \"await\" before the Promise call to extract the actual value: const res = await fetchStudent();."
          },
          {
            "mistake": "Not handling potential network errors with a try-catch block around await calls.",
            "fix": "Wrap await calls in try { ... } catch (error) { ... } to handle offline states or 404 errors."
          }
        ],
        "keyPoints": [
          "Async functions always return a Promise<T>.",
          "Use \"await\" to pause and unwrap the Promise value.",
          "await must be placed inside an async function.",
          "Wrap await statements inside try...catch blocks to handle network errors safely.",
          "TypeScript ensures that \"await Promise<StudentData>\" produces a typed StudentData object."
        ],
        "quickSummary": "In simple words: When asking a server for data, functions return a Promise<T> (a token for future data). You put \"async\" on your function and \"await\" in front of the call to wait for the data to arrive smoothly.",
        "practiceSet": [
          {
            "question": "Write an async function getGreeting(): Promise<string> that returns \"Hello from TypeScript!\".",
            "difficulty": "Easy",
            "starterCode": "async function getGreeting(): Promise<string> {\n    // return greeting\n    return \"\";\n}\n\ngetGreeting().then(msg => console.log(msg));",
            "hint": "return \"Hello from TypeScript!\";",
            "solution": "async function getGreeting(): Promise<string> {\n    return \"Hello from TypeScript!\";\n}\n\ngetGreeting().then(msg => console.log(msg));"
          },
          {
            "question": "Write an async function fetchGrade(score: number): Promise<string> returning \"Pass\" if score >= 40 else \"Fail\".",
            "difficulty": "Easy",
            "starterCode": "async function fetchGrade(score: number): Promise<string> {\n    // Return Pass or Fail\n    return \"\";\n}",
            "hint": "return score >= 40 ? \"Pass\" : \"Fail\";",
            "solution": "async function fetchGrade(score: number): Promise<string> {\n    return score >= 40 ? \"Pass\" : \"Fail\";\n}\n\nfetchGrade(75).then(grade => console.log(`Grade: ${grade}`));"
          },
          {
            "question": "Write an async function run() that uses try...catch to await a Promise that might reject.",
            "difficulty": "Medium",
            "starterCode": "async function riskyOperation(): Promise<string> {\n    throw new Error(\"Server offline\");\n}\n\nasync function run(): Promise<void> {\n    // Use try-catch around await\n}",
            "hint": "try { await riskyOperation(); } catch (err) { console.log(\"Caught error\"); }",
            "solution": "async function riskyOperation(): Promise<string> {\n    throw new Error(\"Server offline\");\n}\n\nasync function run(): Promise<void> {\n    try {\n        await riskyOperation();\n    } catch (err) {\n        console.log(\"Handled network error gracefully!\");\n    }\n}\n\nrun();"
          }
        ]
      },
      "practice": {
        "question": "Write an async function fetchGrade(score: number): Promise<string> that returns \"A\" if score >= 90 else \"B\".",
        "difficulty": "Easy",
        "starterCode": "async function fetchGrade(score: number): Promise<string> {\n    return score >= 90 ? \"A\" : \"B\";\n}\n\nfetchGrade(95).then(grade => console.log(\"Grade:\", grade));",
        "hint": "return score >= 90 ? \"A\" : \"B\";",
        "solution": "async function fetchGrade(score: number): Promise<string> {\n    return score >= 90 ? \"A\" : \"B\";\n}\n\nfetchGrade(95).then(grade => console.log(\"Grade:\", grade));"
      }
    }
  ],
  "bTechPriority": {
    "semesterExams": [
      "Type annotations vs Type inference: When does TypeScript infer types vs when is explicit typing required?",
      "Interfaces vs Type Aliases: Declaration merging, union representations, and extends vs intersection (&).",
      "Generics (<T>): Generic functions, generic constraints (T extends { length: number }), and generic classes.",
      "Type Narrowing: typeof, instanceof, in operator, and custom user-defined type predicates (pet is Dog).",
      "Discriminated Unions: Using a common literal discriminator tag property (status: \"success\" | \"error\") for pattern matching."
    ],
    "vivaQuestions": [
      {
        "q": "What is the difference between any and unknown in TypeScript?",
        "a": "any disables all compile-time type checks completely. unknown is a type-safe counterpart; you cannot access properties on an unknown variable until you explicitly narrow its type using typeof or instanceof."
      },
      {
        "q": "Does TypeScript enforce type safety at runtime in the browser?",
        "a": "No. TypeScript types are completely erased during the compilation (transpilation) step. Standard JavaScript executed by the browser engine has no concept of TypeScript types."
      },
      {
        "q": "What are Generics in TypeScript and why are they used?",
        "a": "Generics allow creating components and functions that work across multiple types rather than a single one, providing type safety without having to duplicate code."
      },
      {
        "q": "What is Declaration Merging in TypeScript interfaces?",
        "a": "If multiple interfaces are declared with the exact same name, TypeScript automatically merges their property definitions into a single combined interface."
      }
    ],
    "dsaPrerequisites": [
      "TypeScript classes and generics are ideal for building typed data structures: class LinkedList<T>, class BinarySearchTree<T>.",
      "The Map<K, V> and Set<T> standard collections in TypeScript are strictly typed."
    ],
    "interviewTips": [
      "Highlight your experience with TypeScript when applying for Frontend and Full-Stack roles (React, Next.js, Node.js).",
      "Understand how tsconfig.json settings like strict: true, noImplicitAny, and target: \"ES2022\" work.",
      "Explain how TypeScript reduces unit testing overhead by catching type mismatches at compile time."
    ]
  }
};
