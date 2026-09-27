import { PracticeQuestion } from './java-questions';

export const typescriptQuestions: PracticeQuestion[] = [
  // EASY (10 questions)
  {
    id: 'ts-easy-01',
    title: 'Hello TypeScript with Type Annotations',
    difficulty: 'Easy',
    topic: 'Basic Types & Console',
    question: 'Write a TypeScript program with typed variables for greeting and student name. Print "Hello, DevForge B.Tech TypeScript!".',
    hint: 'Use `const message: string = "Hello, DevForge B.Tech TypeScript!";` and `console.log(message);`.',
    solution: `const greeting: string = "Hello";
const platform: string = "DevForge B.Tech TypeScript!";
console.log(\`\${greeting}, \${platform}\`);`,
    starterCode: `// Write your TypeScript code with explicit types
`,
    sampleStdin: '',
    expectedOutput: 'Hello, DevForge B.Tech TypeScript!',
  },
  {
    id: 'ts-easy-02',
    title: 'Sum of Two Numbers from Stdin',
    difficulty: 'Easy',
    topic: 'Stdin & Number Parsing',
    question: 'Read two numbers from standard input and print their sum with strong typing.',
    hint: 'Use `require("fs").readFileSync(0, "utf-8")` to read input and split numbers.',
    solution: `const fs = require("fs");
const input: string = fs.readFileSync(0, "utf-8").trim();
const [aStr, bStr] = input.split(/\\s+/);
const a: number = Number(aStr);
const b: number = Number(bStr);
console.log(a + b);`,
    starterCode: `const fs = require("fs");
// Read two numbers and print their sum
`,
    sampleStdin: '25 75',
    expectedOutput: '100',
  },
  {
    id: 'ts-easy-03',
    title: 'Even or Odd with Boolean Function',
    difficulty: 'Easy',
    topic: 'Functions & Boolean Return',
    question: 'Create a typed function `isEven(n: number): boolean`. Read an integer and print "Even" or "Odd".',
    hint: 'Specify the return type `: boolean` on your function declaration.',
    solution: `const fs = require("fs");
const input: string = fs.readFileSync(0, "utf-8").trim();
const n: number = parseInt(input, 10);

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(n) ? "Even" : "Odd");`,
    starterCode: `const fs = require("fs");

function isEven(num: number): boolean {
  // your code here
}
`,
    sampleStdin: '14',
    expectedOutput: 'Even',
  },
  {
    id: 'ts-easy-04',
    title: 'Multiplication Table',
    difficulty: 'Easy',
    topic: 'Loops & Template Literals',
    question: 'Read an integer n and print its multiplication table from 1 to 10 in the format "n x i = result".',
    hint: 'Use a typed `for (let i: number = 1; i <= 10; i++)` loop.',
    solution: `const fs = require("fs");
const n: number = parseInt(fs.readFileSync(0, "utf-8").trim(), 10);

for (let i: number = 1; i <= 10; i++) {
  console.log(\`\${n} x \${i} = \${n * i}\`);
}`,
    starterCode: `const fs = require("fs");
// Print multiplication table from 1 to 10
`,
    sampleStdin: '7',
    expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70',
  },
  {
    id: 'ts-easy-05',
    title: 'Typed Interface for User Profile',
    difficulty: 'Easy',
    topic: 'Interfaces & Objects',
    question: 'Declare an interface `UserProfile` with `id: number`, `name: string`, and `isAdmin: boolean`. Instantiate an object and print formatted JSON or details.',
    hint: '`interface UserProfile { id: number; name: string; isAdmin: boolean; }`',
    solution: `interface UserProfile {
  id: number;
  name: string;
  isAdmin: boolean;
}

const fs = require("fs");
const input: string = fs.readFileSync(0, "utf-8").trim();
const [name, idStr] = input.split(/\\s+/);

const user: UserProfile = {
  id: Number(idStr),
  name,
  isAdmin: true,
};

console.log(\`User #\${user.id}: \${user.name} (Admin: \${user.isAdmin})\`);`,
    starterCode: `// Define UserProfile interface and print user details
`,
    sampleStdin: 'DevForgeUser 42',
    expectedOutput: 'User #42: DevForgeUser (Admin: true)',
  },
  {
    id: 'ts-easy-06',
    title: 'Union Types and Formatter',
    difficulty: 'Easy',
    topic: 'Union Types',
    question: 'Write a function `formatId(id: string | number): string` that returns "ID: <formatted>". If it is a number, prefix with zeroes to 4 digits.',
    hint: 'Use `typeof id === "number"` to narrow the union type.',
    solution: `function formatId(id: string | number): string {
  if (typeof id === "number") {
    return \`ID: \${id.toString().padStart(4, "0")}\`;
  }
  return \`ID: \${id.toUpperCase()}\`;
}

console.log(formatId(42));
console.log(formatId("btech"));`,
    starterCode: `function formatId(id: string | number): string {
  // Narrow type and return formatted string
}
`,
    sampleStdin: '',
    expectedOutput: 'ID: 0042\nID: BTECH',
  },
  {
    id: 'ts-easy-07',
    title: 'Array Mapping and Filtering',
    difficulty: 'Easy',
    topic: 'Arrays & Functional Methods',
    question: 'Given an array of numbers from input, filter out all negative numbers and multiply the remaining by 2. Print space-separated.',
    hint: 'Use `.filter((x: number) => x >= 0).map((x: number) => x * 2)`.',
    solution: `const fs = require("fs");
const input: string = fs.readFileSync(0, "utf-8").trim();
const nums: number[] = input.split(/\\s+/).map(Number);

const result: number[] = nums
  .filter((x: number) => x >= 0)
  .map((x: number) => x * 2);

console.log(result.join(" "));`,
    starterCode: `const fs = require("fs");
// Filter negative numbers and double remaining
`,
    sampleStdin: '-5 10 -2 3 7',
    expectedOutput: '20 6 14',
  },
  {
    id: 'ts-easy-08',
    title: 'Tuples in TypeScript',
    difficulty: 'Easy',
    topic: 'Tuples',
    question: 'Create a coordinate tuple type `type Point2D = [x: number, y: number]`. Calculate and print the Euclidean distance between two points.',
    hint: '`Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2))`',
    solution: `type Point2D = [number, number];

const p1: Point2D = [0, 0];
const p2: Point2D = [3, 4];

function distance(a: Point2D, b: Point2D): number {
  return Math.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2);
}

console.log(\`Distance: \${distance(p1, p2)}\`);`,
    starterCode: `type Point2D = [number, number];

// Calculate distance between points
`,
    sampleStdin: '',
    expectedOutput: 'Distance: 5',
  },
  {
    id: 'ts-easy-09',
    title: 'Optional Parameters and Default Values',
    difficulty: 'Easy',
    topic: 'Functions & Optional Parameters',
    question: 'Write a function `greet(name: string, role?: string): string`. If role is provided, print "Hello <name> (<role>)", else "Hello <name>".',
    hint: 'Mark parameter as optional with `?`.',
    solution: `function greet(name: string, role?: string): string {
  if (role) {
    return \`Hello \${name} (\${role})\`;
  }
  return \`Hello \${name}\`;
}

console.log(greet("Alice", "Engineer"));
console.log(greet("Bob"));`,
    starterCode: `function greet(name: string, role?: string): string {
  // your implementation
}
`,
    sampleStdin: '',
    expectedOutput: 'Hello Alice (Engineer)\nHello Bob',
  },
  {
    id: 'ts-easy-10',
    title: 'Enums for Order Status',
    difficulty: 'Easy',
    topic: 'Enums',
    question: 'Define an enum `OrderStatus { PENDING = "Pending", PROCESSING = "Processing", DELIVERED = "Delivered" }`. Print status transition.',
    hint: 'Use string enums to get clear human-readable values.',
    solution: `enum OrderStatus {
  PENDING = "Pending",
  PROCESSING = "Processing",
  DELIVERED = "Delivered",
}

let currentStatus: OrderStatus = OrderStatus.PENDING;
console.log(\`Order status: \${currentStatus}\`);
currentStatus = OrderStatus.DELIVERED;
console.log(\`Order updated: \${currentStatus}\`);`,
    starterCode: `enum OrderStatus {
  // Add enum members
}
`,
    sampleStdin: '',
    expectedOutput: 'Order status: Pending\nOrder updated: Delivered',
  },

  // MEDIUM (10 questions)
  {
    id: 'ts-med-01',
    title: 'Generic Identity and Array Reversal',
    difficulty: 'Medium',
    topic: 'Generics',
    question: 'Implement a generic function `reverseArray<T>(items: T[]): T[]` without mutating the original array.',
    hint: 'Use `[...items].reverse()` or build a new array with type `T[]`.',
    solution: `function reverseArray<T>(items: T[]): T[] {
  return [...items].reverse();
}

const numbers: number[] = [1, 2, 3, 4, 5];
const words: string[] = ["react", "nextjs", "typescript"];

console.log(reverseArray(numbers).join(" "));
console.log(reverseArray(words).join(" "));`,
    starterCode: `function reverseArray<T>(items: T[]): T[] {
  // Implement generic reverse
}
`,
    sampleStdin: '',
    expectedOutput: '5 4 3 2 1\ntypescript nextjs react',
  },
  {
    id: 'ts-med-02',
    title: 'Type Narrowing with Discriminated Unions',
    difficulty: 'Medium',
    topic: 'Discriminated Unions',
    question: 'Create shapes Circle (`{ kind: "circle"; radius: number }`) and Square (`{ kind: "square"; side: number }`). Write `calculateArea(shape: Shape): number` with exhaustive switch.',
    hint: 'Use `switch (shape.kind)` to discriminate between the union members.',
    solution: `interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
  }
}

const c: Circle = { kind: "circle", radius: 5 };
const s: Square = { kind: "square", side: 4 };

console.log(\`Circle Area: \${calculateArea(c).toFixed(2)}\`);
console.log(\`Square Area: \${calculateArea(s)}\`);`,
    starterCode: `// Define Circle, Square, and calculateArea with discriminated unions
`,
    sampleStdin: '',
    expectedOutput: 'Circle Area: 78.54\nSquare Area: 16',
  },
  {
    id: 'ts-med-03',
    title: 'Utility Types (Partial and Readonly)',
    difficulty: 'Medium',
    topic: 'Utility Types',
    question: 'Define an interface `Todo { id: number; title: string; completed: boolean }`. Write a function `updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo`.',
    hint: 'Use `Partial<Todo>` for optional update fields and return `{ ...todo, ...fieldsToUpdate }`.',
    solution: `interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const original: Todo = { id: 1, title: "Submit B.Tech Assignment", completed: false };
const updated = updateTodo(original, { completed: true });

console.log(\`Task: \${updated.title} | Status: \${updated.completed ? "Done" : "Pending"}\`);`,
    starterCode: `interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Implement updateTodo with Partial<Todo>
`,
    sampleStdin: '',
    expectedOutput: 'Task: Submit B.Tech Assignment | Status: Done',
  },
  {
    id: 'ts-med-04',
    title: 'Async/Await with Typed Promise Result',
    difficulty: 'Medium',
    topic: 'Promises & Async/Await',
    question: 'Simulate a typed API call `fetchUserData(id: number): Promise<{ id: number; username: string }>` and consume it using async/await with error handling.',
    hint: 'Return a promise resolved with typed object.',
    solution: `interface User {
  id: number;
  username: string;
}

async function fetchUserData(id: number): Promise<User> {
  return new Promise((resolve) => {
    resolve({ id, username: \`student_\${id}\` });
  });
}

async function main(): Promise<void> {
  try {
    const user: User = await fetchUserData(101);
    console.log(\`Fetched user: \${user.username} (ID: \${user.id})\`);
  } catch (err) {
    console.error("Failed to fetch user", err);
  }
}

main();`,
    starterCode: `// Implement typed async fetchUserData
`,
    sampleStdin: '',
    expectedOutput: 'Fetched user: student_101 (ID: 101)',
  },
  {
    id: 'ts-med-05',
    title: 'Keyof and Lookup Types',
    difficulty: 'Medium',
    topic: 'Keyof & Generics',
    question: 'Implement a type-safe property getter `getProperty<T, K extends keyof T>(obj: T, key: K): T[K]`.',
    hint: 'Constrain `K extends keyof T` so invalid keys cause compile-time errors.',
    solution: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
};

console.log(\`Brand: \${getProperty(car, "brand")}\`);
console.log(\`Year: \${getProperty(car, "year")}\`);`,
    starterCode: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // your implementation
}
`,
    sampleStdin: '',
    expectedOutput: 'Brand: Tesla\nYear: 2024',
  },
  {
    id: 'ts-med-06',
    title: 'Generic Stack Implementation',
    difficulty: 'Medium',
    topic: 'Classes & Generics',
    question: 'Create a generic class `Stack<T>` with `push(item: T)`, `pop(): T | undefined`, `peek(): T | undefined`, and `size(): number`. Test with numbers and strings.',
    hint: 'Use a private array `private items: T[] = [];`.',
    solution: `class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }
}

const numStack = new Stack<number>();
numStack.push(10);
numStack.push(20);
console.log(\`Top: \${numStack.peek()}, Size: \${numStack.size()}\`);
console.log(\`Popped: \${numStack.pop()}, New Top: \${numStack.peek()}\`);`,
    starterCode: `class Stack<T> {
  // Implement generic stack
}
`,
    sampleStdin: '',
    expectedOutput: 'Top: 20, Size: 2\nPopped: 20, New Top: 10',
  },
  {
    id: 'ts-med-07',
    title: 'Custom Type Guard with `is` Operator',
    difficulty: 'Medium',
    topic: 'Type Guards',
    question: 'Write a type guard function `isFish(pet: Fish | Bird): pet is Fish` to safely differentiate between two interfaces.',
    hint: 'Use the `pet is Fish` return type predicate and check `(pet as Fish).swim !== undefined`.',
    solution: `interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const pet1: Fish = { swim: () => console.log("Swimming!") };
const pet2: Bird = { fly: () => console.log("Flying!") };

[pet1, pet2].forEach((pet) => {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
});`,
    starterCode: `// Implement custom type guard isFish
`,
    sampleStdin: '',
    expectedOutput: 'Swimming!\nFlying!',
  },
  {
    id: 'ts-med-08',
    title: 'Record and Omit Utility Types',
    difficulty: 'Medium',
    topic: 'Advanced Utility Types',
    question: 'Given a `Student` interface with `id`, `name`, `grade`, and `password`, create a sanitized type using `Omit` and store in a `Record<number, SanitizedStudent>`.',
    hint: '`type PublicStudent = Omit<Student, "password">; Record<number, PublicStudent>;`',
    solution: `interface Student {
  id: number;
  name: string;
  grade: string;
  secretToken: string;
}

type PublicStudent = Omit<Student, "secretToken">;

const directory: Record<number, PublicStudent> = {
  101: { id: 101, name: "Priya", grade: "A" },
  102: { id: 102, name: "Kunal", grade: "A+" },
};

Object.values(directory).forEach((s) => {
  console.log(\`ID \${s.id}: \${s.name} (Grade \${s.grade})\`);
});`,
    starterCode: `// Use Omit and Record to build sanitized directory
`,
    sampleStdin: '',
    expectedOutput: 'ID 101: Priya (Grade A)\nID 102: Kunal (Grade A+)',
  },
  {
    id: 'ts-med-09',
    title: 'Currying with TypeScript Types',
    difficulty: 'Medium',
    topic: 'Higher Order Functions & Currying',
    question: 'Write a curried multiplier function `multiply(a: number): (b: number) => number`. Test by creating a `double` function.',
    hint: 'Return an inner lambda function that captures `a` in closure.',
    solution: `const multiply = (a: number) => (b: number): number => a * b;

const double = multiply(2);
const triple = multiply(3);

console.log(double(15));
console.log(triple(10));`,
    starterCode: `// Write curried multiply function
`,
    sampleStdin: '',
    expectedOutput: '30\n30',
  },
  {
    id: 'ts-med-10',
    title: 'Safe Parsing with Result Pattern',
    difficulty: 'Medium',
    topic: 'Result Type Pattern & Error Handling',
    question: 'Implement a type-safe `Result<T, E>` pattern without throwing errors. Parse input string to integer safely.',
    hint: '`type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };`',
    solution: `type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function safeParseInt(text: string): Result<number, string> {
  const num = Number(text);
  if (isNaN(num)) {
    return { ok: false, error: \`Cannot parse "\${text}" as number\` };
  }
  return { ok: true, value: num };
}

const res1 = safeParseInt("1234");
const res2 = safeParseInt("invalid");

console.log(res1.ok ? \`Parsed: \${res1.value}\` : res1.error);
console.log(res2.ok ? \`Parsed: \${res2.value}\` : res2.error);`,
    starterCode: `// Implement Result<T, E> pattern
`,
    sampleStdin: '',
    expectedOutput: 'Parsed: 1234\nCannot parse "invalid" as number',
  },

  // HARD (6 questions)
  {
    id: 'ts-hard-01',
    title: 'Deep Readonly Mapped Type',
    difficulty: 'Hard',
    topic: 'Mapped & Conditional Types',
    question: 'Implement a recursive mapped type `DeepReadonly<T>` that makes every nested object and array readonly. Demonstrate with a nested config object.',
    hint: 'Use `type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] };`.',
    solution: `type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Function
    ? T[P]
    : T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};

interface AppConfig {
  database: {
    host: string;
    port: number;
    credentials: {
      user: string;
    };
  };
}

const config: DeepReadonly<AppConfig> = {
  database: {
    host: "localhost",
    port: 5432,
    credentials: {
      user: "admin",
    },
  },
};

console.log(\`Host: \${config.database.host}:\${config.database.port} (User: \${config.database.credentials.user})\`);`,
    starterCode: `// Implement DeepReadonly<T> mapped type
`,
    sampleStdin: '',
    expectedOutput: 'Host: localhost:5432 (User: admin)',
  },
  {
    id: 'ts-hard-02',
    title: 'Template Literal Types for Event Names',
    difficulty: 'Hard',
    topic: 'Template Literal Types',
    question: 'Given `type Entity = "user" | "order"` and `type Action = "create" | "update" | "delete"`, generate all camelCase event handler names: `onUserCreate`, `onUserUpdate`, etc.',
    hint: '`type EventName = \`on\${Capitalize<Entity>}\${Capitalize<Action>}\`;`',
    solution: `type Entity = "user" | "order";
type Action = "create" | "update" | "delete";

type EventName = \`on\${Capitalize<Entity>}\${Capitalize<Action>}\`;

function handleEvent(event: EventName): void {
  console.log(\`Registered listener for: \${event}\`);
}

handleEvent("onUserCreate");
handleEvent("onOrderUpdate");`,
    starterCode: `// Generate typed EventName using Template Literal Types
`,
    sampleStdin: '',
    expectedOutput: 'Registered listener for: onUserCreate\nRegistered listener for: onOrderUpdate',
  },
  {
    id: 'ts-hard-03',
    title: 'Type-Safe Event Emitter',
    difficulty: 'Hard',
    topic: 'Generic Event Systems',
    question: 'Create a strongly typed `TypedEventEmitter<Events>` where events map to listener signatures, preventing invalid events or parameters at compile time.',
    hint: '`type Listener<T> = (data: T) => void; class TypedEventEmitter<E extends Record<string, any>> { ... }`',
    solution: `type Listener<T> = (data: T) => void;

class TypedEventEmitter<TEvents extends Record<string, any>> {
  private listeners: { [K in keyof TEvents]?: Listener<TEvents[K]>[] } = {};

  on<K extends keyof TEvents>(event: K, listener: Listener<TEvents[K]>): void {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]!.push(listener);
  }

  emit<K extends keyof TEvents>(event: K, data: TEvents[K]): void {
    const handlers = this.listeners[event] || [];
    handlers.forEach((h) => h(data));
  }
}

interface AppEvents {
  userLogin: { userId: number; timestamp: number };
  systemAlert: { message: string };
}

const emitter = new TypedEventEmitter<AppEvents>();

emitter.on("userLogin", (e) => {
  console.log(\`User logged in: \${e.userId}\`);
});

emitter.emit("userLogin", { userId: 404, timestamp: Date.now() });`,
    starterCode: `// Implement TypedEventEmitter<TEvents>
`,
    sampleStdin: '',
    expectedOutput: 'User logged in: 404',
  },
  {
    id: 'ts-hard-04',
    title: 'Type-Safe LRU Cache',
    difficulty: 'Hard',
    topic: 'DSA & Generics (LRU Cache)',
    question: 'Implement a type-safe generic Least Recently Used (LRU) Cache `LRUCache<K, V>` with capacity limit. Evict least recently accessed entry on overflow.',
    hint: 'JavaScript `Map` preserves insertion order; deleting and re-inserting refreshes the key.',
    solution: `class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, V> = new Map();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;
    const val = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey !== undefined) this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}

const lru = new LRUCache<string, number>(2);
lru.put("a", 1);
lru.put("b", 2);
lru.get("a"); // accesses a
lru.put("c", 3); // evicts b

console.log(\`a: \${lru.get("a")}\`);
console.log(\`b: \${lru.get("b")}\`);
console.log(\`c: \${lru.get("c")}\`);`,
    starterCode: `class LRUCache<K, V> {
  // Implement LRUCache
}
`,
    sampleStdin: '',
    expectedOutput: 'a: 1\nb: undefined\nc: 3',
  },
  {
    id: 'ts-hard-05',
    title: 'Type Narrowing via Discriminated API Response',
    difficulty: 'Hard',
    topic: 'API Design & Discriminants',
    question: 'Create an exhaustive API Response wrapper: `{ status: "success"; data: T } | { status: "error"; error: string; code: number }`. Write a handler that formats each case safely.',
    hint: 'Check `response.status === "success"` to access `.data` with full autocomplete.',
    solution: `type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string; code: number };

function handleResponse<T>(res: ApiResponse<T>): string {
  if (res.status === "success") {
    return \`Success: \${JSON.stringify(res.data)}\`;
  } else {
    return \`Error [\${res.code}]: \${res.error}\`;
  }
}

const okRes: ApiResponse<{ token: string }> = {
  status: "success",
  data: { token: "devkit_btech_secret_key" },
};

const errRes: ApiResponse<never> = {
  status: "error",
  error: "Unauthorized access",
  code: 401,
};

console.log(handleResponse(okRes));
console.log(handleResponse(errRes));`,
    starterCode: `// Implement ApiResponse<T> and handler
`,
    sampleStdin: '',
    expectedOutput: 'Success: {"token":"devkit_btech_secret_key"}\nError [401]: Unauthorized access',
  },
  {
    id: 'ts-hard-06',
    title: 'Async Concurrent Task Pool with Limit',
    difficulty: 'Hard',
    topic: 'Async Concurrency & TypeScript',
    question: 'Write a function `asyncPool<T, R>(limit: number, items: T[], fn: (item: T) => Promise<R>): Promise<R[]>` that runs at most `limit` asynchronous tasks concurrently.',
    hint: 'Use `Promise.all` with a worker loop or queue pattern to throttle executions.',
    solution: `async function asyncPool<T, R>(
  limit: number,
  items: T[],
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = [];
  const executing: Promise<void>[] = [];

  for (let i = 0; i < items.length; i++) {
    const p = fn(items[i]).then((res) => {
      results[i] = res;
    });

    const e: Promise<void> = p.then(() => {
      executing.splice(executing.indexOf(e), 1);
    });

    executing.push(e);
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }

  await Promise.all(executing);
  return results;
}

async function run() {
  const items = [1, 2, 3, 4];
  const results = await asyncPool(2, items, async (num) => {
    return num * 10;
  });
  console.log(results.join(" "));
}

run();`,
    starterCode: `// Implement asyncPool with concurrency limit
`,
    sampleStdin: '',
    expectedOutput: '10 20 30 40',
  },
];
