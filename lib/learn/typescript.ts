import { CourseData } from './types';

export const TYPESCRIPT_COURSE: CourseData = {
  id: 'typescript',
  slug: 'typescript',
  name: 'TypeScript',
  tagline: 'JavaScript With Superpowers: Type-Safe Modern Web Engineering',
  shortDescription:
    'Learn modern typed JavaScript for web applications and scalable software.',
  difficulty: 'Beginner → Intermediate',
  bestFor:
    'B.Tech Web Development Projects, React/Next.js Full-Stack Engineering, Node.js Backends, and Modern Tech Hiring',
  icon: 'Braces',
  color: 'sky',
  intro: {
    whatIs:
      'TypeScript is a strongly typed programming language developed by Microsoft (created by Anders Hejlsberg in 2012) that builds on JavaScript by adding static type definitions. TypeScript code compiles (transpiles) directly to clean, standard JavaScript that executes in any browser or Node.js runtime.',
    whyLearn:
      'In modern software engineering, raw vanilla JavaScript is rarely used in production enterprise codebases because runtime TypeError crashes are expensive to debug. TypeScript detects errors at compile time inside your editor, provides intelligent autocomplete, and powers modern frameworks like Next.js, React, Angular, and NestJS.',
    whereUsed: [
      'Modern Full-Stack Web Development (Next.js, React, Vue, Svelte)',
      'Enterprise Backend APIs & Microservices (Node.js, Express, NestJS, Deno, Bun)',
      'Major Open Source Codebases (VS Code itself, Prisma ORM, TRPC, Tailwind CSS)',
      'Cross-platform Desktop and Mobile Apps (Electron, React Native, Expo)',
    ],
    advantages: [
      'Catch type errors at compile time before code ever runs in production',
      'Superior Developer Experience (DX) with intelligent IDE autocomplete and refactoring',
      'Explicit interfaces serve as self-documenting code contracts for engineering teams',
      '100% interoperability with existing JavaScript libraries and npm packages',
    ],
    limitations: [
      'Requires a compilation step (tsc, esbuild, SWC) before running in browsers',
      'Learning curve for advanced type manipulations (conditional types, mapped types)',
      'Writing type annotations slightly increases initial development time (though saves hours in debugging)',
    ],
  },
  visualCallout: {
    title: 'JavaScript vs TypeScript Evolution',
    description: 'How TypeScript elevates JavaScript into an enterprise engineering language:',
    items: [
      {
        label: 'Type Checking',
        detail: 'JavaScript is dynamically typed (catches errors at runtime in production); TypeScript is statically checked during editing.',
        badge: 'Safety',
      },
      {
        label: 'Compilation',
        detail: 'JavaScript is executed directly by V8/Node; TypeScript compiles to standard JavaScript and removes all types.',
        badge: 'Zero Overhead',
      },
      {
        label: 'Ecosystem',
        detail: 'Every modern UI library (React, Next.js, Shadcn UI) is authored natively in TypeScript.',
        badge: 'Industry Standard',
      },
      {
        label: 'Refactoring',
        detail: 'Rename a function or interface property and your editor safely updates all references across hundreds of files.',
        badge: 'Scalability',
      },
    ],
  },
  topics: [
    {
      id: 'what-is-ts',
      title: '1. What is TypeScript & Basic Syntax',
      summary:
        'TypeScript extends JavaScript by adding optional static type annotations. At build time, the TypeScript compiler (tsc) verifies types and emits standard JavaScript.',
      syntax: `let message: string = "Hello TypeScript";
const year: number = 2026;
console.log(message);`,
      codeExample: `// Basic TypeScript type annotations
const frameworkName: string = "DevForge";
const versionNumber: number = 2.0;
const isProductionReady: boolean = true;

console.log(\`Tool: \${frameworkName} v\${versionNumber}\`);
console.log(\`Production Ready: \${isProductionReady}\`);`,
      expectedOutput: `Tool: DevForge v2
Production Ready: true`,
      commonMistake:
        'Thinking TypeScript code runs directly in the browser without compilation; browser engines only understand standard JavaScript.',
      practice: {
        question: 'Declare two variables studentName (string) and semesterNumber (number) with explicit types and print them.',
        difficulty: 'Easy',
        starterCode: `// Declare studentName and semesterNumber with explicit type annotations
const studentName = "Aarav";
const semesterNumber = 4;
console.log(\`Student: \${studentName}, Sem: \${semesterNumber}\`);`,
        hint: 'Add : string and : number type annotations to the declarations.',
        solution: `const studentName: string = "Aarav";
const semesterNumber: number = 4;
console.log(\`Student: \${studentName}, Sem: \${semesterNumber}\`);`,
      },
    },
    {
      id: 'primitive-types',
      title: '2. Primitive Types & Special Types (any, unknown, never)',
      summary:
        'Core primitives are string, number, boolean, null, undefined, and symbol. Special types include any (disables type checking), unknown (type-safe any, requires type narrowing), and never (values that never occur).',
      syntax: `let id: number = 101;
let u: unknown = "could be anything";
let a: any = 42; // Avoid using 'any' when possible!`,
      codeExample: `let score: number = 95.5;
let studentStatus: 'Active' | 'Graduated' = 'Active';

let safeValue: unknown = "DevForge Compiler";
if (typeof safeValue === "string") {
    // TypeScript now knows safeValue is definitely a string
    console.log("Safe uppercase:", safeValue.toUpperCase());
}`,
      expectedOutput: `Safe uppercase: DEVKIT COMPILER`,
      commonMistake:
        'Overusing the "any" escape hatch. Using "any" turns off all type-checking, defeating the primary benefit of TypeScript.',
      practice: {
        question: 'Create an unknown variable, verify it is a number using typeof, and print its square.',
        difficulty: 'Easy',
        starterCode: `let inputVal: unknown = 7;
// Narrow inputVal to number and print its square`,
        hint: 'Use if (typeof inputVal === "number") { console.log(inputVal * inputVal); }',
        solution: `let inputVal: unknown = 7;
if (typeof inputVal === "number") {
    console.log(\`Square: \${inputVal * inputVal}\`);
}`,
      },
    },
    {
      id: 'arrays-tuples',
      title: '3. Arrays & Tuples',
      summary:
        'Arrays store homogeneous elements (number[], Array<string>). Tuples store fixed-length sequences where each position has a specific, defined type.',
      syntax: `const numbers: number[] = [1, 2, 3];
const pair: [string, number] = ["Roll", 101];`,
      codeExample: `// Array and Tuple usage
const branches: string[] = ["CSE", "ECE", "ME", "EE"];
const topStudent: [string, number, boolean] = ["Rohan", 9.8, true];

console.log("Engineering Branches:", branches.join(", "));
console.log(\`Topper: \${topStudent[0]} (GPA: \${topStudent[1]})\`);`,
      expectedOutput: `Engineering Branches: CSE, ECE, ME, EE
Topper: Rohan (GPA: 9.8)`,
      commonMistake:
        'Violating tuple element order or length: assigning ["Rohan", "9.8"] to a [string, number] tuple causes a compile error.',
      practice: {
        question: 'Define a tuple HTTPResponse with status code (number) and status text (string) like [200, "OK"].',
        difficulty: 'Easy',
        starterCode: `// Define and initialize a tuple of [number, string]
let res: [number, string] = [200, "OK"];
console.log(\`Status: \${res[0]} \${res[1]}\`);`,
        hint: 'let res: [number, string] = [200, "OK"];',
        solution: `let res: [number, string] = [200, "OK"];
console.log(\`Status: \${res[0]} \${res[1]}\`);`,
      },
    },
    {
      id: 'interfaces-type-aliases',
      title: '4. Interfaces vs Type Aliases',
      summary:
        'Interfaces define object shapes and contracts and can be extended with "extends". Type aliases can represent primitives, unions, intersections, and tuples as well as objects.',
      syntax: `interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

type ID = string | number;`,
      codeExample: `interface StudentProfile {
    id: number;
    name: string;
    branch: string;
    cgpa?: number; // Optional
}

const student: StudentProfile = {
    id: 104,
    name: "Sneha Reddy",
    branch: "Computer Science",
};

console.log(\`Student: \${student.name} from \${student.branch}\`);
if (student.cgpa !== undefined) {
    console.log(\`CGPA: \${student.cgpa}\`);
}`,
      expectedOutput: `Student: Sneha Reddy from Computer Science`,
      commonMistake:
        'Accessing an optional property (student.cgpa.toFixed(2)) without first checking if it is defined, causing runtime TypeError: Cannot read properties of undefined.',
      practice: {
        question: 'Create an interface Book with title (string), pages (number), and optional author (string).',
        difficulty: 'Easy',
        starterCode: `// Define interface Book and create an object
interface Book {
    title: string;
    pages: number;
    author?: string;
}

const myBook: Book = { title: "Clean Code", pages: 464 };
console.log(myBook.title);`,
        hint: 'Use author?: string for the optional property.',
        solution: `interface Book {
    title: string;
    pages: number;
    author?: string;
}

const myBook: Book = { title: "Clean Code", pages: 464 };
console.log(\`\${myBook.title} has \${myBook.pages} pages.\`);`,
      },
    },
    {
      id: 'union-intersection-types',
      title: '5. Union & Intersection Types',
      summary:
        'Union types (A | B) allow a value to be one of several types. Intersection types (A & B) combine multiple type definitions into one unified contract.',
      syntax: `type Status = 'idle' | 'loading' | 'success' | 'error';
type AdminUser = User & { role: 'admin'; permissions: string[] };`,
      codeExample: `type Result = 
    | { status: 'success'; data: string }
    | { status: 'error'; message: string };

function renderResult(res: Result): void {
    if (res.status === 'success') {
        // Discriminated union: res is automatically narrowed to success object
        console.log("Data loaded:", res.data);
    } else {
        // res is automatically narrowed to error object
        console.log("Error occurred:", res.message);
    }
}

renderResult({ status: 'success', data: "User payload received" });
renderResult({ status: 'error', message: "Database timeout" });`,
      expectedOutput: `Data loaded: User payload received
Error occurred: Database timeout`,
      commonMistake:
        'Accessing res.data without first checking res.status === "success"; TypeScript prevents accessing fields that are not present on all union variants.',
      practice: {
        question: 'Define a union type ResultCode that can either be the number 0 or 1, or string "SUCCESS" or "FAILURE".',
        difficulty: 'Easy',
        starterCode: `type ResultCode = number | string;
let code1: ResultCode = 0;
let code2: ResultCode = "SUCCESS";
console.log(code1, code2);`,
        hint: 'type ResultCode = 0 | 1 | "SUCCESS" | "FAILURE";',
        solution: `type ResultCode = 0 | 1 | "SUCCESS" | "FAILURE";
let code1: ResultCode = 0;
let code2: ResultCode = "SUCCESS";
console.log(\`Codes: \${code1}, \${code2}\`);`,
      },
    },
    {
      id: 'functions-types',
      title: '6. Functions, Return Types & Arrow Functions',
      summary:
        'Functions in TypeScript have strictly typed parameters and return types. Use void when nothing is returned, and arrow functions for concise functional programming.',
      syntax: `function add(a: number, b: number): number {
    return a + b;
}
const multiply = (x: number, y: number): number => x * y;`,
      codeExample: `interface Calculator {
    (a: number, b: number): number;
}

const add: Calculator = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;

console.log("Add: 15 + 25 =", add(15, 25));
console.log("Multiply: 6 * 7 =", multiply(6, 7));`,
      expectedOutput: `Add: 15 + 25 = 40
Multiply: 6 * 7 = 42`,
      commonMistake:
        'Forgetting that parameters in TypeScript are required by default; calling func(10) when func(a: number, b: number) expects two arguments produces a compile error.',
      practice: {
        question: 'Write a typed function calculateGpa(marks: number[]): number that returns the average marks.',
        difficulty: 'Easy',
        starterCode: `function calculateGpa(marks: number[]): number {
    // calculate average
    return 0;
}

console.log("GPA:", calculateGpa([85, 90, 95]));`,
        hint: 'const sum = marks.reduce((acc, m) => acc + m, 0); return sum / marks.length;',
        solution: `function calculateGpa(marks: number[]): number {
    const sum = marks.reduce((acc, m) => acc + m, 0);
    return sum / marks.length;
}

console.log("GPA:", calculateGpa([85, 90, 95]));`,
      },
    },
    {
      id: 'generics',
      title: '7. Generics (<T>) for Reusable Logic',
      summary:
        'Generics let you write functions, interfaces, and classes that work with any data type while preserving strict type safety rather than defaulting to any.',
      syntax: `function identity<T>(arg: T): T {
    return arg;
}
interface ApiResponse<T> {
    data: T;
    status: number;
}`,
      codeExample: `// Generic queue/box data structure
class StorageContainer<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const stringStorage = new StorageContainer<string>();
stringStorage.addItem("DevForge");
stringStorage.addItem("Compiler");

const numberStorage = new StorageContainer<number>();
numberStorage.addItem(100);
numberStorage.addItem(200);

console.log("Strings:", stringStorage.getAll());
console.log("Numbers:", numberStorage.getAll());`,
      expectedOutput: `Strings: [ 'DevForge', 'Compiler' ]
Numbers: [ 100, 200 ]`,
      commonMistake:
        'Using <any> instead of a generic parameter <T>, which throws away compile-time type verification for calling code.',
      practice: {
        question: 'Write a generic function getFirstElement<T>(arr: T[]): T | undefined.',
        difficulty: 'Easy',
        starterCode: `function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(getFirstElement(["A", "B", "C"]));
console.log(getFirstElement([1, 2, 3]));`,
        hint: 'return arr.length > 0 ? arr[0] : undefined;',
        solution: `function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

console.log(getFirstElement(["A", "B", "C"]));
console.log(getFirstElement([1, 2, 3]));`,
      },
    },
    {
      id: 'classes-access-modifiers',
      title: '8. Classes & Access Modifiers (public, private, readonly)',
      summary:
        'TypeScript enhances ES6 classes with access modifiers: public (default), private (accessible only within class), protected (accessible in class and subclasses), and readonly.',
      syntax: `class Employee {
    constructor(
        public readonly id: number,
        public name: string,
        private salary: number
    ) {} // Parameter properties shorthand
}`,
      codeExample: `class UniversityStudent {
    // Parameter properties shorthand automatically assigns this.roll = roll, etc.
    constructor(
        public readonly rollNo: number,
        public name: string,
        private semesterFee: number
    ) {}

    public getFeeStatement(): string {
        return \`Roll \${this.rollNo}: Fee balance Rs. \${this.semesterFee}\`;
    }
}

const stud = new UniversityStudent(101, "Kavya", 45000);
console.log(\`Student: \${stud.name}, Roll: \${stud.rollNo}\`);
console.log(stud.getFeeStatement());`,
      expectedOutput: `Student: Kavya, Roll: 101
Roll 101: Fee balance Rs. 45000`,
      commonMistake:
        'Attempting to reassign a readonly property outside the constructor (stud.rollNo = 102;), which is disallowed by TypeScript.',
      practice: {
        question: 'Create a class BankAccount with a private balance and public deposit(amount: number) method.',
        difficulty: 'Easy',
        starterCode: `class BankAccount {
    // implement private balance and public deposit
}

const acc = new BankAccount();
acc.deposit(100);`,
        hint: 'class BankAccount { private balance: number = 0; public deposit(amt: number) { this.balance += amt; } public getBalance() { return this.balance; } }',
        solution: `class BankAccount {
    private balance: number = 0;
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public getBalance(): number {
        return this.balance;
    }
}

const acc = new BankAccount();
acc.deposit(500);
console.log("Balance:", acc.getBalance());`,
      },
    },
    {
      id: 'async-await-promises',
      title: '9. Async/Await & Typed Promises (Promise<T>)',
      summary:
        'Asynchronous functions return a Promise<T>, where T is the resolved type. Use async and await with try-catch blocks for clean, linear asynchronous error handling.',
      syntax: `async function fetchUserData(id: number): Promise<User> {
    const res = await api.get(\`/users/\${id}\`);
    return res.data;
}`,
      codeExample: `interface ApiResponse {
    statusCode: number;
    payload: string;
}

async function simulateDatabaseQuery(): Promise<ApiResponse> {
    // Simulating asynchronous operation
    return {
        statusCode: 200,
        payload: "Student records retrieved successfully"
    };
}

async function run(): Promise<void> {
    console.log("Executing async query...");
    const result = await simulateDatabaseQuery();
    console.log(\`Response [\${result.statusCode}]: \${result.payload}\`);
}

run();`,
      expectedOutput: `Executing async query...
Response [200]: Student records retrieved successfully`,
      commonMistake:
        'Not awaiting an asynchronous function or forgetting that an async function always returns a Promise (returning number from async makeIt() actually returns Promise<number>).',
      practice: {
        question: 'Write an async function fetchGrade(score: number): Promise<string> that returns "A" if score >= 90 else "B".',
        difficulty: 'Easy',
        starterCode: `async function fetchGrade(score: number): Promise<string> {
    // async return
    return "A";
}

fetchGrade(95).then(grade => console.log("Grade:", grade));`,
        hint: 'return score >= 90 ? "A" : "B";',
        solution: `async function fetchGrade(score: number): Promise<string> {
    return score >= 90 ? "A" : "B";
}

fetchGrade(95).then(grade => console.log("Grade:", grade));`,
      },
    },
  ],
  bTechPriority: {
    semesterExams: [
      'Type annotations vs Type inference: When does TypeScript infer types vs when is explicit typing required?',
      'Interfaces vs Type Aliases: Declaration merging, union representations, and extends vs intersection (&).',
      'Generics (<T>): Generic functions, generic constraints (T extends { length: number }), and generic classes.',
      'Type Narrowing: typeof, instanceof, in operator, and custom user-defined type predicates (pet is Dog).',
      'Discriminated Unions: Using a common literal discriminator tag property (status: "success" | "error") for pattern matching.',
    ],
    vivaQuestions: [
      {
        q: 'What is the difference between any and unknown in TypeScript?',
        a: 'any disables all compile-time type checks completely. unknown is a type-safe counterpart; you cannot access properties on an unknown variable until you explicitly narrow its type using typeof or instanceof.',
      },
      {
        q: 'Does TypeScript enforce type safety at runtime in the browser?',
        a: 'No. TypeScript types are completely erased during the compilation (transpilation) step. Standard JavaScript executed by the browser engine has no concept of TypeScript types.',
      },
      {
        q: 'What are Generics in TypeScript and why are they used?',
        a: 'Generics allow creating components and functions that work across multiple types rather than a single one, providing type safety without having to duplicate code.',
      },
      {
        q: 'What is Declaration Merging in TypeScript interfaces?',
        a: 'If multiple interfaces are declared with the exact same name, TypeScript automatically merges their property definitions into a single combined interface.',
      },
    ],
    dsaPrerequisites: [
      'TypeScript classes and generics are ideal for building typed data structures: class LinkedList<T>, class BinarySearchTree<T>.',
      'The Map<K, V> and Set<T> standard collections in TypeScript are strictly typed.',
    ],
    interviewTips: [
      'Highlight your experience with TypeScript when applying for Frontend and Full-Stack roles (React, Next.js, Node.js).',
      'Understand how tsconfig.json settings like strict: true, noImplicitAny, and target: "ES2022" work.',
      'Explain how TypeScript reduces unit testing overhead by catching type mismatches at compile time.',
    ],
  },
};
