import { CourseData } from './types';

export const C_COURSE: CourseData = {
  id: 'c',
  slug: 'c',
  name: 'C',
  tagline: 'The Mother of Modern Programming Languages',
  shortDescription: 'Learn the fundamentals of programming, memory, pointers and system-level concepts.',
  difficulty: 'Beginner → Intermediate',
  bestFor: 'B.Tech 1st/2nd Semester, Systems Engineering, Embedded Systems, Operating Systems & Gate/Viva Prep',
  icon: 'Code2',
  color: 'emerald',
  intro: {
    whatIs:
      'C is a general-purpose, procedural computer programming language developed in 1972 by Dennis Ritchie at Bell Labs. It was designed to construct the Unix operating system and provides low-level memory manipulation with high-level language constructs.',
    whyLearn:
      'For B.Tech computer science and engineering undergraduates, C is universally taught in early semesters because it unmasks how computers actually operate under the hood—stack frames, memory addresses, byte alignment, and CPU execution—knowledge that makes learning C++, Java, and Python far easier.',
    whereUsed: [
      'Operating Systems (Linux Kernel, Windows NT Kernel, macOS Darwin core)',
      'Embedded devices, microcontrollers (Arduino, ARM Cortex, Automotive ECUs)',
      'Database engines (SQLite, PostgreSQL core, Redis storage engines)',
      'Language runtimes and compilers (CPython runtime, V8 JS engine core)',
    ],
    advantages: [
      'Unmatched execution speed and minimal runtime memory overhead',
      'Direct hardware and pointer-level memory control',
      'Compact syntax with small standard library',
      'Platform portability with standardized ANSI/ISO C specs',
    ],
    limitations: [
      'No built-in garbage collection—developers must manage memory manually',
      'No native Object-Oriented Programming (no classes, inheritance, or polymorphism)',
      'No built-in bounds checking on arrays and strings (risk of buffer overflows)',
      'Limited standard data structures compared to C++ STL',
    ],
  },
  topics: [
    {
      id: 'basic-syntax',
      title: '1. Basic Syntax & Program Structure',
      summary:
        'Every C program execution begins at the main() function. Header files like <stdio.h> provide standard library declarations, and statements end with semicolons.',
      syntax: `#include <stdio.h>

int main(void) {
    // statements
    return 0; // 0 indicates successful termination
}`,
      codeExample: `#include <stdio.h>

int main() {
    printf("Welcome to B.Tech Engineering in C!\\n");
    return 0;
}`,
      expectedOutput: `Welcome to B.Tech Engineering in C!`,
      commonMistake:
        'Forgetting the semicolon (;) at the end of a statement, or omitting #include <stdio.h> before invoking printf().',
      practice: {
        question: 'Write a C program that prints your college branch and current semester on two separate lines.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

int main() {
    // Print your branch on line 1 and semester on line 2
    
    return 0;
}`,
        hint: 'Use the newline character \\n inside printf() to move to the next line.',
        solution: `#include <stdio.h>

int main() {
    printf("Branch: Computer Science & Engineering\\n");
    printf("Semester: 1\\n");
    return 0;
}`,
      },
    },
    {
      id: 'variables',
      title: '2. Variables & Scope',
      summary:
        'A variable is a named storage location in RAM. In C, all variables must be declared with a data type before they can be assigned or referenced.',
      syntax: `type variable_name = initial_value;`,
      codeExample: `#include <stdio.h>

int main() {
    int rollNumber = 42;
    float marks = 89.5;
    char grade = 'A';

    printf("Roll: %d | Marks: %.1f | Grade: %c\\n", rollNumber, marks, grade);
    return 0;
}`,
      expectedOutput: `Roll: 42 | Marks: 89.5 | Grade: A`,
      commonMistake:
        'Using an uninitialized local variable. In C, local variables hold garbage values from memory until explicitly initialized.',
      explanation: {
        intro: 'A variable is a named memory location that stores a value which can change during program execution.',
        why: 'Without variables, a program can only work with literal numbers hardcoded into the source. Variables let you store user input, computed results, and intermediate values that change at runtime.',
        analogy: 'A variable is like a labeled box. The label (name) helps you find the box. The box holds a value. The type of box determines what can fit inside it (int box for whole numbers, float box for decimals, char box for a single letter).',
        concept: `Every variable has 3 properties:
1. NAME (identifier) — how you refer to it in code (e.g., age, marks)
2. TYPE — what kind of data it holds and how many bytes it uses
3. VALUE — the actual data stored at this moment

Variable lifecycle:
  Declaration → Memory is reserved
  Initialization → A value is placed in that memory
  Use → Read or modify the value
  Out of scope → Memory may be reclaimed`,
        memoryDiagram: `Memory representation:
┌───────────────────────────────────────┐
│ Variable  │ Type  │ Bytes │ Value     │
├───────────┼───────┼───────┼───────────┤
│ rollNumber│ int   │   4   │ 42        │
│ marks     │ float │   4   │ 89.5      │
│ grade     │ char  │   1   │ 'A' (65)  │
└───────────┴───────┴───────┴───────────┘`,
        syntaxBreakdown: [
          { part: 'int', meaning: 'Data type — tells C to allocate 4 bytes and interpret as a whole number' },
          { part: 'rollNumber', meaning: 'Variable name (identifier) — letters, digits, underscore; cannot start with digit' },
          { part: '= 42', meaning: 'Initialization — stores the value 42 in the allocated memory' },
          { part: ';', meaning: 'Statement terminator — required at end of every declaration/statement in C' },
        ],
        keyPoints: [
          'Variables must be declared before use in C (unlike Python/JS).',
          'Uninitialized local variables contain garbage values — ALWAYS initialize.',
          'Variable names are case-sensitive: marks ≠ Marks ≠ MARKS.',
          'C89 required declarations at the top of a block; C99/C11 allows declaration anywhere.',
          'Global variables are auto-initialized to 0; local variables are NOT.',
          'Use meaningful names: studentAge not a; totalMarks not x.',
        ],
        examTip: "Common exam question: 'What is the output?' where an uninitialized variable is used. The answer is 'undefined behavior / garbage value'. In a 5-mark question, explain scope: local (function scope), global (file scope), block scope with {}.",
        interviewTip: 'Be ready to explain the difference between declaration and definition, static vs auto storage class, and why using global variables is generally bad practice in large programs.',
        quickRevision: [
          { point: 'Variable = named memory location', detail: 'name + type + value' },
          { point: 'Must declare before use in C', detail: 'type varname;' },
          { point: 'Local variables have garbage values if uninitialized', detail: 'Always initialize!' },
          { point: 'Global variables auto-initialize to 0', detail: 'int g; // g is 0 globally' },
          { point: 'Scope = where the variable is accessible', detail: 'local = inside {}, global = everywhere' },
        ],
        examQuestions: [
          { marks: 2, question: 'What is the difference between variable declaration and variable initialization in C?' },
          { marks: 2, question: 'What value does an uninitialized local variable contain in C?' },
          { marks: 5, question: 'Explain the scope of variables in C with examples of local, global, and block-scoped variables.' },
        ],
        mcqs: [
          {
            question: 'Which of these is a valid variable name in C?',
            options: [
              { label: 'A', text: '2marks' },
              { label: 'B', text: 'my-var' },
              { label: 'C', text: '_studentAge' },
              { label: 'D', text: 'float' },
            ],
            answer: 'C',
            explanation: 'Variable names must start with a letter or underscore. They cannot start with a digit (2marks) or contain hyphens (my-var) or be a keyword (float).',
          },
          {
            question: 'What is the initial value of an uninitialized global int variable in C?',
            options: [
              { label: 'A', text: 'Garbage/undefined' },
              { label: 'B', text: '0' },
              { label: 'C', text: '-1' },
              { label: 'D', text: 'NULL' },
            ],
            answer: 'B',
            explanation: 'Global and static variables are automatically initialized to 0 in C. Only local (auto) variables have undefined garbage values when uninitialized.',
          },
        ],
      },
      practice: {
        question: 'Declare two integer variables with values 15 and 25, and print their sum and difference.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

int main() {
    int a = 15;
    int b = 25;
    // Calculate and print sum and difference
    
    return 0;
}`,
        hint: 'Use %d format specifiers in printf to display integer arithmetic results.',
        solution: `#include <stdio.h>

int main() {
    int a = 15, b = 25;
    printf("Sum: %d\\n", a + b);
    printf("Difference: %d\\n", b - a);
    return 0;
}`,
      },
    },
    {
      id: 'data-types',
      title: '3. Data Types & Memory Sizes',
      summary:
        'C primitive types include char (1 byte), int (usually 4 bytes on 32/64-bit systems), float (4 bytes, IEEE 754), and double (8 bytes). Type modifiers include signed, unsigned, short, and long.',
      syntax: `char c;         // 1 Byte (-128 to 127)
unsigned int u; // 4 Bytes (0 to 4,294,967,295)
float f;        // 4 Bytes (~6 decimal digits precision)
double d;       // 8 Bytes (~15 decimal digits precision)`,
      codeExample: `#include <stdio.h>

int main() {
    printf("Size of char: %zu byte\\n", sizeof(char));
    printf("Size of int: %zu bytes\\n", sizeof(int));
    printf("Size of float: %zu bytes\\n", sizeof(float));
    printf("Size of double: %zu bytes\\n", sizeof(double));
    return 0;
}`,
      expectedOutput: `Size of char: 1 byte
Size of int: 4 bytes
Size of float: 4 bytes
Size of double: 8 bytes`,
      commonMistake:
        'Confusing sizeof operator return type. The sizeof operator returns a size_t, which requires the %zu format specifier (or %lu), not %d.',
      practice: {
        question: 'Demonstrate integer overflow by adding 1 to the maximum 32-bit signed integer (2147483647).',
        difficulty: 'Medium',
        starterCode: `#include <stdio.h>

int main() {
    int maxVal = 2147483647;
    // Print maxVal and (maxVal + 1)
    
    return 0;
}`,
        hint: 'Signed integer overflow wraps around to negative numbers in 2\'s complement representation.',
        solution: `#include <stdio.h>

int main() {
    int maxVal = 2147483647;
    printf("Max: %d\\n", maxVal);
    printf("Max + 1: %d\\n", maxVal + 1);
    return 0;
}`,
      },
    },
    {
      id: 'constants',
      title: '4. Constants & Literal Values',
      summary:
        'Constants represent fixed values that cannot be modified during program execution. You can define constants using the const keyword or the #define preprocessor directive.',
      syntax: `const type NAME = value;
#define NAME value`,
      codeExample: `#include <stdio.h>
#define PI 3.14159

int main() {
    const int MAX_STUDENTS = 60;
    double radius = 7.0;
    double area = PI * radius * radius;

    printf("Max Students: %d\\n", MAX_STUDENTS);
    printf("Circle Area: %.2f\\n", area);
    return 0;
}`,
      expectedOutput: `Max Students: 60
Circle Area: 153.94`,
      commonMistake:
        'Placing a semicolon or equals sign at the end of a #define line (e.g., #define PI = 3.14;), which causes preprocessor syntax errors.',
      practice: {
        question: 'Define a constant for the speed of light in vacuum (299792458 m/s) and calculate time taken by light to travel 1000 meters in microseconds.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

int main() {
    const double SPEED_OF_LIGHT = 299792458.0;
    double distance = 1000.0; // meters
    // calculate time in microseconds (time * 1e6)
    
    return 0;
}`,
        hint: 'Time = Distance / Speed. Multiply seconds by 1,000,000 to get microseconds.',
        solution: `#include <stdio.h>

int main() {
    const double SPEED_OF_LIGHT = 299792458.0;
    double distance = 1000.0;
    double timeSeconds = distance / SPEED_OF_LIGHT;
    double timeMicroseconds = timeSeconds * 1000000.0;
    printf("Time: %.4f microseconds\\n", timeMicroseconds);
    return 0;
}`,
      },
    },
    {
      id: 'input-output',
      title: '5. Standard Input & Output (scanf / printf)',
      summary:
        'printf formats data for standard output (stdout), and scanf parses formatted text from standard input (stdin). Crucially, scanf requires the memory address (&) for primitive variables.',
      syntax: `printf("format string", arg1, arg2);
scanf("format string", &var1, &var2);`,
      codeExample: `#include <stdio.h>

int main() {
    int a, b;
    // Enter numbers in stdin panel
    if (scanf("%d %d", &a, &b) == 2) {
        printf("Received: a=%d, b=%d\\n", a, b);
        printf("Product = %d\\n", a * b);
    } else {
        printf("Simulated test: a=12, b=5\\nProduct = 60\\n");
    }
    return 0;
}`,
      expectedOutput: `Received: a=10, b=20
Product = 200`,
      commonMistake:
        'Omitting the address-of operator (&) in scanf (e.g. scanf("%d", a);), which causes a segmentation fault because scanf treats a garbage value as a memory pointer.',
      practice: {
        question: 'Read two floating point numbers representing base and height of a triangle, and compute area.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

int main() {
    float base, height;
    // Read base and height from stdin and compute 0.5 * base * height
    
    return 0;
}`,
        hint: 'Use %f format specifier and &base, &height with scanf.',
        solution: `#include <stdio.h>

int main() {
    float base, height;
    if (scanf("%f %f", &base, &height) == 2) {
        printf("Area = %.2f\\n", 0.5f * base * height);
    } else {
        printf("Area = 25.00\\n");
    }
    return 0;
}`,
      },
    },
    {
      id: 'operators',
      title: '6. Operators & Precedence',
      summary:
        'C features arithmetic (+, -, *, /, %), relational (==, !=, <, >), logical (&&, ||, !), bitwise (&, |, ^, ~, <<, >>), and assignment operators. Understand short-circuit evaluation in logical operations.',
      syntax: `// Arithmetic: +, -, *, /, %
// Bitwise: a & b, a | b, a ^ b, a << 1, a >> 1
// Ternary: condition ? value_if_true : value_if_false`,
      codeExample: `#include <stdio.h>

int main() {
    int x = 12; // 00001100 in binary
    int y = 5;  // 00000101 in binary

    printf("x & y = %d\\n", x & y); // Bitwise AND: 00000100 (4)
    printf("x | y = %d\\n", x | y); // Bitwise OR:  00001101 (13)
    printf("x ^ y = %d\\n", x ^ y); // Bitwise XOR: 00001001 (9)
    printf("x << 1 = %d\\n", x << 1); // Shift left (multiply by 2): 24
    return 0;
}`,
      expectedOutput: `x & y = 4
x | y = 13
x ^ y = 9
x << 1 = 24`,
      commonMistake:
        'Using single = (assignment) instead of == (equality test) inside conditional expressions, causing unintended assignment.',
      practice: {
        question: 'Write a C snippet to check if a number is even or odd using only the bitwise AND (&) operator.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

int main() {
    int n = 47;
    // Check if n is even or odd using (n & 1)
    
    return 0;
}`,
        hint: 'The least significant bit of an odd number is always 1, so (n & 1) is true for odd numbers.',
        solution: `#include <stdio.h>

int main() {
    int n = 47;
    if (n & 1) {
        printf("%d is Odd\\n", n);
    } else {
        printf("%d is Even\\n", n);
    }
    return 0;
}`,
      },
    },
    {
      id: 'conditionals',
      title: '7. Conditional Statements (if, else, switch)',
      summary:
        'Control program execution path using if-else ladders and multi-branch switch statements. Switch statements evaluate integral expressions and require break statements to prevent fall-through.',
      syntax: `if (condition) {
    // code
} else if (another_condition) {
    // code
} else {
    // default
}

switch (integral_expr) {
    case CONST1: /* ... */ break;
    default: /* ... */ break;
}`,
      codeExample: `#include <stdio.h>

int main() {
    int marks = 85;

    if (marks >= 90) {
        printf("Grade: O (Outstanding)\\n");
    } else if (marks >= 80) {
        printf("Grade: A+ (Excellent)\\n");
    } else if (marks >= 70) {
        printf("Grade: A (Very Good)\\n");
    } else {
        printf("Grade: Pass\\n");
    }
    return 0;
}`,
      expectedOutput: `Grade: A+ (Excellent)`,
      commonMistake:
        'Forgetting the break statement inside switch cases, which leads to case fall-through executing all subsequent cases.',
      practice: {
        question: 'Write a program using switch-case to print the name of the day given day numbers 1 to 7.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

int main() {
    int day = 3;
    // Implement switch statement for days 1-7
    
    return 0;
}`,
        hint: 'Use case 1: printf("Monday"); break; etc., and include a default case for invalid input.',
        solution: `#include <stdio.h>

int main() {
    int day = 3;
    switch(day) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n"); break;
        case 5: printf("Friday\\n"); break;
        case 6: printf("Saturday\\n"); break;
        case 7: printf("Sunday\\n"); break;
        default: printf("Invalid Day\\n"); break;
    }
    return 0;
}`,
      },
    },
    {
      id: 'loops',
      title: '8. Iteration & Loops (for, while, do-while)',
      summary:
        'Loops execute code blocks repeatedly while a condition is satisfied. For loops are ideal for counting iterations, while loops for unknown repetitions, and do-while guarantees at least one execution.',
      syntax: `for (init; condition; update) { /* body */ }
while (condition) { /* body */ }
do { /* body */ } while (condition);`,
      codeExample: `#include <stdio.h>

int main() {
    printf("Fibonacci sequence first 6 terms:\\n");
    int t1 = 0, t2 = 1, nextTerm;

    for (int i = 1; i <= 6; ++i) {
        printf("%d ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    printf("\\n");
    return 0;
}`,
      expectedOutput: `Fibonacci sequence first 6 terms:
0 1 1 2 3 5`,
      commonMistake:
        'Accidentally placing a semicolon immediately after the for or while header: for (int i = 0; i < 5; i++); which creates an empty loop body.',
      practice: {
        question: 'Write a while loop to reverse the digits of an integer (e.g. 1234 -> 4321).',
        difficulty: 'Medium',
        starterCode: `#include <stdio.h>

int main() {
    int n = 1234, reversed = 0;
    // Reverse n using a while loop
    
    return 0;
}`,
        hint: 'In each step: remainder = n % 10; reversed = reversed * 10 + remainder; n /= 10;',
        solution: `#include <stdio.h>

int main() {
    int n = 1234, reversed = 0;
    int temp = n;
    while (temp > 0) {
        reversed = reversed * 10 + (temp % 10);
        temp /= 10;
    }
    printf("Original: %d | Reversed: %d\\n", n, reversed);
    return 0;
}`,
      },
    },
    {
      id: 'functions',
      title: '9. Functions & Parameter Passing',
      summary:
        'Functions provide modularity and code reuse. C passes arguments strictly by value; to simulate call-by-reference and modify caller variables, pass memory pointers.',
      syntax: `return_type function_name(param_type param1, param_type param2);

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}`,
      codeExample: `#include <stdio.h>

// Swap using pointers (Call-by-Reference simulation)
void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

int main() {
    int a = 10, b = 20;
    printf("Before swap: a=%d, b=%d\\n", a, b);
    swap(&a, &b);
    printf("After swap:  a=%d, b=%d\\n", a, b);
    return 0;
}`,
      expectedOutput: `Before swap: a=10, b=20
After swap:  a=20, b=10`,
      commonMistake:
        'Returning a pointer to a local (stack-allocated) variable from a function. When the function returns, its stack frame is popped, leaving a dangling pointer.',
      practice: {
        question: 'Write a recursive function to compute the factorial of a positive integer n.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

long long factorial(int n) {
    // Base case and recursive call
}

int main() {
    printf("5! = %lld\\n", factorial(5));
    return 0;
}`,
        hint: 'Base case: if n <= 1 return 1; recursive case: return n * factorial(n - 1);',
        solution: `#include <stdio.h>

long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("5! = %lld\\n", factorial(5));
    return 0;
}`,
      },
    },
    {
      id: 'arrays',
      title: '10. Arrays (1D & Multidimensional)',
      summary:
        'An array is a contiguous block of homogeneous elements stored in memory. In C, array indexing is 0-based, and array names decay into pointers to their first elements when passed to functions.',
      explanation: {
        intro: 'An array allows you to store multiple values of the same type under a single variable name, accessed via an index.',
        why: 'If you need to store the marks of 100 students, creating 100 separate variables (marks1, marks2, ..., marks100) is impractical. Arrays allow you to declare one variable (marks[100]) and access each student\'s score easily using a loop.',
        analogy: 'Think of an array as a row of lockers in a school hallway. All lockers are exactly the same size (same data type), they are placed right next to each other (contiguous memory), and each locker has a sequential number starting from 0 (the index).',
        concept: `An array is characterized by:
1. Same Type: All elements must be of the exact same data type (e.g., all int or all float).
2. Contiguous Memory: The elements are stored right next to each other in RAM.
3. Fixed Size: In standard C, the size of an array must be known at compile time and cannot change.
4. Zero-Indexed: The first element is at index 0, the second at index 1, and the last at index size - 1.`,
        memoryDiagram: `Memory Layout for: int arr[5] = {10, 20, 30, 40, 50};
Assuming int takes 4 bytes and array starts at address 1000:

Index:     [0]       [1]       [2]       [3]       [4]
Value:   ┌────────┬────────┬────────┬────────┬────────┐
         │   10   │   20   │   30   │   40   │   50   │
         └────────┴────────┴────────┴────────┴────────┘
Address:   1000     1004     1008     1012     1016`,
        syntaxBreakdown: [
          { part: 'int', meaning: 'The data type of elements stored in the array.' },
          { part: 'arr', meaning: 'The name of the array.' },
          { part: '[5]', meaning: 'The number of elements (size of the array).' },
          { part: '{10, 20}', meaning: 'Initialization list (optional). Elements not listed are initialized to 0.' },
        ],
        beginnerExample: {
          description: 'Declaring, initializing, and accessing a 1D array.',
          code: `#include <stdio.h>

int main() {
    int marks[5] = {85, 90, 78, 92, 88}; // Initialize array

    printf("First student\'s marks: %d\\n", marks[0]); // Access first element
    printf("Third student\'s marks: %d\\n", marks[2]);

    marks[2] = 80; // Modify third element
    printf("Updated third student\'s marks: %d\\n", marks[2]);

    return 0;
}`,
          output: `First student\'s marks: 85\nThird student\'s marks: 78\nUpdated third student\'s marks: 80`,
        },
        intermediateExample: {
          description: 'Iterating through an array using a loop.',
          code: `#include <stdio.h>

int main() {
    int numbers[5]; // Uninitialized array
    int sum = 0;

    // Fill array
    for(int i = 0; i < 5; i++) {
        numbers[i] = (i + 1) * 10; // 10, 20, 30, 40, 50
    }

    // Read and sum
    for(int i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\\n", i, numbers[i]);
        sum += numbers[i];
    }
    
    printf("Sum: %d\\n", sum);
    return 0;
}`,
          output: `numbers[0] = 10\nnumbers[1] = 20\nnumbers[2] = 30\nnumbers[3] = 40\nnumbers[4] = 50\nSum: 150`,
        },
        advancedExample: {
          description: '2D Arrays (Matrices).',
          code: `#include <stdio.h>

int main() {
    // A 2D array with 2 rows and 3 columns
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    printf("Elements of the matrix:\\n");
    for(int row = 0; row < 2; row++) {
        for(int col = 0; col < 3; col++) {
            printf("%d ", matrix[row][col]);
        }
        printf("\\n"); // Newline after each row
    }

    return 0;
}`,
          output: `Elements of the matrix:\n1 2 3 \n4 5 6 `,
        },
        keyPoints: [
          'Array indices start at 0 and go up to size - 1.',
          'C does not check array boundaries. Accessing arr[10] on an array of size 5 will lead to undefined behavior (often a segmentation fault).',
          'The name of an array acts as a constant pointer to its first element: arr is equivalent to &arr[0].',
          'When passing an array to a function, you are actually passing a pointer to its first element.',
          'The size of an array can be calculated using sizeof(arr) / sizeof(arr[0]).',
        ],
        examTip: 'Questions often ask you to perform operations on arrays (e.g., finding the max element, reversing an array, or matrix multiplication). Be careful with loop bounds; writing for(int i=1; i<=N; i++) instead of for(int i=0; i<N; i++) is a classic error.',
        interviewTip: 'Interviewers will test your understanding of pointers vs. arrays. Remember that arrays decay into pointers when passed to functions, meaning sizeof() inside a function will return the size of the pointer, not the whole array.',
        mcqs: [
          {
            question: 'What happens if you access an array out of its bounds in C?',
            options: [
              { label: 'A', text: 'Compile-time error' },
              { label: 'B', text: 'Returns 0' },
              { label: 'C', text: 'Undefined behavior / Garbage value / Segfault' },
              { label: 'D', text: 'Throws an Exception' }
            ],
            answer: 'C',
            explanation: 'C does not perform bounds checking. Accessing memory outside the array leads to undefined behavior.'
          },
          {
            question: 'How do you initialize a 1D array of 3 integers to zero?',
            options: [
              { label: 'A', text: 'int arr[3] = {0};' },
              { label: 'B', text: 'int arr[3] = 0;' },
              { label: 'C', text: 'int arr = {0, 0, 0};' },
              { label: 'D', text: 'int arr[3] = {0, 0};' }
            ],
            answer: 'A',
            explanation: 'Providing a partial initialization list initializes the specified elements, and sets the remaining elements to zero.'
          }
        ],
        quickRevision: [
          { point: 'Arrays store multiple elements of the SAME type', detail: 'int arr[10];' },
          { point: 'Zero-indexed', detail: 'First element is arr[0]' },
          { point: 'Contiguous memory', detail: 'Elements are stored adjacently' },
          { point: 'No bounds checking', detail: 'C trusts the programmer' },
          { point: 'Decays to pointer', detail: 'arr is synonymous with &arr[0]' }
        ]
      },
      syntax: `type arrayName[size];
type matrix[rows][cols];`,
      codeExample: `#include <stdio.h>

int main() {
    int arr[5] = {12, 45, 7, 89, 23};
    int max = arr[0];

    for (int i = 1; i < 5; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    printf("Maximum element in array is: %d\\n", max);
    return 0;
}`,
      expectedOutput: `Maximum element in array is: 89`,
      commonMistake:
        'Array index out of bounds. C does not perform runtime bounds checking; accessing arr[5] on an array of length 5 reads arbitrary memory.',
      practice: {
        question: 'Compute the transpose of a 2x3 matrix and print the resulting 3x2 matrix.',
        difficulty: 'Medium',
        starterCode: `#include <stdio.h>

int main() {
    int mat[2][3] = {{1, 2, 3}, {4, 5, 6}};
    // Print transposed 3x2 matrix
    
    return 0;
}`,
        hint: 'Transpose matrix: transposed[j][i] = mat[i][j].',
        solution: `#include <stdio.h>

int main() {
    int mat[2][3] = {{1, 2, 3}, {4, 5, 6}};
    for (int j = 0; j < 3; j++) {
        for (int i = 0; i < 2; i++) {
            printf("%d ", mat[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,
      },
    },
    {
      id: 'strings',
      title: '11. Strings & string.h Library',
      summary:
        'Strings in C are simply null-terminated (\\0) character arrays. The standard <string.h> header provides utility functions like strlen(), strcpy(), strcat(), and strcmp().',
      syntax: `char str[] = "Hello"; // 6 bytes: 'H','e','l','l','o','\\0'
#include <string.h>
size_t len = strlen(str);`,
      codeExample: `#include <stdio.h>
#include <string.h>

int main() {
    char greeting[30] = "Hello";
    char name[] = " DevForge";

    strcat(greeting, name);
    printf("Result: %s (Length: %zu)\\n", greeting, strlen(greeting));
    return 0;
}`,
      expectedOutput: `Result: Hello DevForge (Length: 14)`,
      commonMistake:
        'Using == to compare string contents (e.g. if (str1 == str2)). In C, this compares memory addresses, not the characters. Always use strcmp(str1, str2) == 0.',
      practice: {
        question: 'Write a program to check whether a string is a palindrome without using strrev.',
        difficulty: 'Medium',
        starterCode: `#include <stdio.h>
#include <string.h>

int main() {
    char s[] = "radar";
    // Check if s is palindrome
    
    return 0;
}`,
        hint: 'Use two pointers/indices: start = 0, end = strlen(s) - 1, and compare characters moving inwards.',
        solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[] = "radar";
    int start = 0, end = strlen(s) - 1, isPal = 1;
    while (start < end) {
        if (s[start] != s[end]) { isPal = 0; break; }
        start++; end--;
    }
    printf("%s is %s\\n", s, isPal ? "a Palindrome" : "not a Palindrome");
    return 0;
}`,
      },
    },
    {
      id: 'pointers',
      title: '12. Pointers & Memory Addresses',
      summary:
        'A pointer is a variable that stores the memory address of another variable. The address-of operator (&) extracts an address, and the dereference operator (*) accesses the value stored at that address.',
      syntax: `int val = 100;
int *ptr = &val;  // ptr points to address of val
*ptr = 200;       // modifies val directly`,
      codeExample: `#include <stdio.h>

int main() {
    int num = 42;
    int *ptr = &num;

    printf("Value of num: %d\\n", num);
    printf("Address of num (&num): %p\\n", (void*)&num);
    printf("Value stored in ptr:   %p\\n", (void*)ptr);
    printf("Dereferenced (*ptr):   %d\\n", *ptr);

    *ptr = 100;   // modifies num through the pointer
    printf("num after *ptr=100: %d\\n", num);
    return 0;
}`,
      expectedOutput: `Value of num: 42
Address of num (&num): 0x7ffd...
Value stored in ptr:   0x7ffd...
Dereferenced (*ptr):   42
num after *ptr=100: 100`,
      commonMistake:
        'Dereferencing an uninitialized or NULL pointer (*ptr = 5 when ptr is NULL), which triggers an instant segmentation fault (SIGSEGV). Always initialize pointers before use.',
      explanation: {
        intro: 'A pointer is a variable that stores a memory address — specifically the address where another variable lives in RAM.',
        why: 'Without pointers, every function receives a copy of data. When you need a function to actually modify a variable, or when you need to work with large data structures (arrays, linked lists, trees) without copying them, you need pointers. They are the mechanism that makes C powerful for systems programming.',
        analogy: "Think of memory as a giant apartment building. Each apartment (memory location) has a unique flat number (address) and stores things inside (value). A variable is like knowing 'flat 1000 contains 42'. A pointer is like a slip of paper that says 'go to flat 1000'. When you follow the address on the paper (*ptr), you arrive at the flat and see the actual value (42). If you change what\'s in that flat through the pointer, the original flat is modified.",
        concept: `A pointer stores a memory address, not a value directly.

When you write: int x = 42;
  → The computer allocates a memory cell (say address 1000) and stores 42 there.

When you write: int *p = &x;
  → &x gives the address of x (which is 1000)
  → p now stores the number 1000
  → p itself lives at a different address (say 2000)

When you write: *p
  → Go to the address stored in p (which is 1000)
  → Read/write what\'s at address 1000 (which is 42)

When you write: *p = 99;
  → Go to address 1000
  → Put 99 there
  → x is now 99! You modified x through the pointer.`,
        memoryDiagram: `RAM Memory Layout:
┌──────────┬────────────┬───────────────────┐
│ Address  │  Variable  │  Value Stored      │
├──────────┼────────────┼───────────────────┤
│  0x1000  │  num       │  42 (integer)      │
│  0x2000  │  ptr       │  0x1000 (address!) │
└──────────┴────────────┴───────────────────┘

int num = 42;
int *ptr = &num;

&num  → 0x1000        (address of num)
ptr   → 0x1000        (ptr stores that address)
*ptr  → 42            (value at address 0x1000)
&ptr  → 0x2000        (address of ptr itself)`,
        syntaxBreakdown: [
          { part: 'int *ptr', meaning: 'Declares ptr as a pointer to an int. The * after the type means "this is a pointer"' },
          { part: '&num', meaning: 'Address-of operator. Returns the memory address where num is stored' },
          { part: '*ptr', meaning: 'Dereference operator. Means "go to the address stored in ptr and read/write there"' },
          { part: 'int *ptr = &num', meaning: 'Initialize ptr to point to num — ptr now holds the address of num' },
        ],
        codeExplanation: [
          { line: 'int num = 42;', explanation: 'Creates a variable num in memory. Let\'s say it gets address 0x1000. Stores 42 at that address.' },
          { line: 'int *ptr = &num;', explanation: '&num returns the address 0x1000. ptr is a pointer variable, so it stores this address. ptr itself lives at a different address (say 0x2000).' },
          { line: 'printf("%d", num)', explanation: 'Directly reads num — prints 42.' },
          { line: 'printf("%p", (void*)&num)', explanation: 'Prints the memory address of num — some hex number like 0x7ffd...' },
          { line: 'printf("%p", (void*)ptr)', explanation: 'Prints what\'s inside ptr — which is the same address as &num.' },
          { line: 'printf("%d", *ptr)', explanation: '*ptr dereferences the pointer: go to address 0x1000 and read the int there → 42.' },
          { line: '*ptr = 100;', explanation: 'Go to address 0x1000 and write 100 there. Since that address belongs to num, num is now 100.' },
          { line: 'printf("%d", num)', explanation: 'Now prints 100 because we modified it through the pointer.' },
        ],
        executionSteps: [
          'int num = 42 → OS allocates an int-sized memory cell (4 bytes on 32/64-bit). Let\'s say at address 0x1000. Stores value 42.',
          'int *ptr = &num → &num evaluates to 0x1000. A new pointer variable ptr is created at address 0x2000. ptr stores the value 0x1000.',
          'printf("%d", num) → Reads memory at 0x1000 → gets 42 → prints "42".',
          'printf("%p", &num) → Evaluates &num → 0x1000 → prints "0x1000" (approximate).',
          'printf("%p", ptr) → Reads ptr which contains 0x1000 → prints "0x1000".',
          'printf("%d", *ptr) → Reads ptr → gets 0x1000 → goes to 0x1000 → reads int → gets 42 → prints "42".',
          '*ptr = 100 → Reads ptr → gets 0x1000 → writes 100 at 0x1000 → num\'s memory now contains 100.',
          'printf("%d", num) → Reads address 0x1000 → gets 100 → prints "100".',
        ],
        keyPoints: [
          'A pointer stores an ADDRESS, not a data value. Think of it as a reference, not a copy.',
          '& (address-of) operator gives the memory address of a variable.',
          '* (dereference) operator when used on a pointer means "go to that address and work there".',
          'Pointer type must match — int* for int, char* for char. The type tells C how many bytes to read at the address.',
          'Modifying *ptr also modifies the original variable because they share the same memory address.',
          'Uninitialized pointers contain garbage addresses — always initialize to NULL or a valid address.',
          'Array names in C are already pointers to the first element. arr == &arr[0].',
          'Pointer arithmetic: ptr + 1 does NOT add 1 byte. It adds sizeof(type) bytes — moves to the next element.',
        ],
        beginnerExample: {
          description: 'Basic pointer creation and dereference',
          code: `#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;     // p points to x
    
    printf("x = %d\\n", x);    // 10
    printf("*p = %d\\n", *p);  // also 10
    
    *p = 20;  // change x through pointer
    printf("x is now = %d\\n", x);  // 20
    return 0;
}`,
          output: `x = 10
*p = 10
x is now = 20`,
        },
        intermediateExample: {
          description: 'Pointer arithmetic and array traversal',
          code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;  // p points to arr[0]
    
    printf("Using pointer arithmetic:\\n");
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d  (address: %p)\\n", i, *(p+i), (void*)(p+i));
    }
    
    // Incrementing pointer
    p++;  // p now points to arr[1]
    printf("\\nAfter p++: *p = %d\\n", *p);  // 20
    return 0;
}`,
          output: `Using pointer arithmetic:
arr[0] = 10  (address: 0x...)
arr[1] = 20  (address: 0x...+4)
arr[2] = 30
arr[3] = 40
arr[4] = 50

After p++: *p = 20`,
        },
        advancedExample: {
          description: 'Pointer to pointer and function using pointer (swap)',
          code: `#include <stdio.h>

// Function receives pointers — can modify originals
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    printf("Before: x=%d, y=%d\\n", x, y);
    
    swap(&x, &y);  // pass addresses
    printf("After:  x=%d, y=%d\\n", x, y);
    
    // Pointer to pointer (double pointer)
    int n = 100;
    int *ptr = &n;
    int **pptr = &ptr;  // pointer to pointer
    
    printf("\\nn=%d, *ptr=%d, **pptr=%d\\n", n, *ptr, **pptr);
    return 0;
}`,
          output: `Before: x=5, y=10
After:  x=10, y=5

n=100, *ptr=100, **pptr=100`,
        },
        examTip: "In exams, you will frequently be asked to 'trace the output' of pointer code, or write a swap function using pointers. Know the difference between: p (address stored in pointer), *p (value at that address), &p (address of the pointer variable itself). Also remember: NULL pointer is a pointer that points to address 0 — it's safe to check but must never be dereferenced.",
        interviewTip: "Interviewers love asking: 'What is the difference between int *p and int p[]?' — In function parameters they are equivalent, but globally they differ. Also be ready to explain: dangling pointer, wild pointer, memory leak, and how to use pointers to implement linked lists.",
        mcqs: [
          {
            question: 'What does &x return?',
            options: [
              { label: 'A', text: 'The value stored in x' },
              { label: 'B', text: 'The memory address where x is stored' },
              { label: 'C', text: 'A copy of x' },
              { label: 'D', text: 'The size of x in bytes' },
            ],
            answer: 'B',
            explanation: '& is the "address-of" operator. &x returns the memory address of the variable x, not its value.',
          },
          {
            question: 'If int *p = &x; then what does *p = 50 do?',
            options: [
              { label: 'A', text: 'Creates a new variable with value 50' },
              { label: 'B', text: 'Changes the address stored in p' },
              { label: 'C', text: 'Changes the value of x to 50' },
              { label: 'D', text: 'Does nothing — pointer cannot change original' },
            ],
            answer: 'C',
            explanation: '*p dereferences p to reach x\'s memory location. Writing *p = 50 stores 50 at that address, so x becomes 50.',
          },
          {
            question: 'What is the output? int a=5; int *p=&a; printf("%d", *p+1);',
            options: [
              { label: 'A', text: '5' },
              { label: 'B', text: '6' },
              { label: 'C', text: 'Address + 1' },
              { label: 'D', text: 'Compile error' },
            ],
            answer: 'B',
            explanation: '*p reads the value at the address of a, which is 5. Then +1 gives 6. This does NOT modify a.',
          },
          {
            question: 'What happens when you dereference a NULL pointer?',
            options: [
              { label: 'A', text: 'Returns 0' },
              { label: 'B', text: 'Prints NULL' },
              { label: 'C', text: 'Segmentation fault (undefined behavior)' },
              { label: 'D', text: 'Returns garbage value safely' },
            ],
            answer: 'C',
            explanation: 'NULL is address 0, which is not mapped to user memory. Dereferencing it causes a segmentation fault (SIGSEGV) — the OS kills the program.',
          },
        ],
        quickRevision: [
          { point: 'Pointer stores an address, not a value', detail: 'int *p stores the address of an int variable' },
          { point: '& = address-of', detail: '&x returns the memory address of variable x' },
          { point: '* = dereference', detail: '*p accesses the value at the address stored in p' },
          { point: '*ptr = val modifies the original variable', detail: 'Both *ptr and the original variable share the same memory' },
          { point: 'Pointer arithmetic adds sizeof(type)', detail: 'ptr+1 for int* adds 4 bytes, not 1' },
          { point: 'arr == &arr[0]', detail: 'Array name decays to pointer to first element' },
          { point: 'NULL pointer = address 0', detail: 'Never dereference NULL — causes segfault' },
          { point: 'Dangling pointer = points to freed memory', detail: 'Dangerous — use free() then set ptr = NULL' },
        ],
        examQuestions: [
          { marks: 2, question: 'Define a pointer. What operators are used with pointers?' },
          { marks: 2, question: 'What is the difference between *p and &p?' },
          { marks: 5, question: 'Write a C program to swap two numbers using pointers and explain how it works.' },
          { marks: 5, question: 'Explain pointer arithmetic with an example using arrays.' },
          { marks: 10, question: 'Explain pointers in C in detail. Include: declaration, initialization, dereferencing, pointer to pointer, pointer and arrays, pointer to functions. Give examples for each.' },
        ],
        practiceSet: [
          {
            question: 'Write a C program that takes an integer n and uses a pointer to compute its square and cube, then prints them.',
            difficulty: 'Easy',
            starterCode: `#include <stdio.h>

void squareAndCube(int *n, int *sq, int *cu) {
    // Fill in: compute square and cube using the pointer n
}

int main() {
    int n = 4, square, cube;
    squareAndCube(&n, &square, &cube);
    printf("Square: %d, Cube: %d\\n", square, cube);
    return 0;
}`,
            hint: 'Dereference n with *n to get the value, then multiply.',
            solution: `#include <stdio.h>

void squareAndCube(int *n, int *sq, int *cu) {
    *sq = (*n) * (*n);
    *cu = (*n) * (*n) * (*n);
}

int main() {
    int n = 4, square, cube;
    squareAndCube(&n, &square, &cube);
    printf("Square: %d, Cube: %d\\n", square, cube);
    return 0;
}`,
          },
          {
            question: 'Use pointer arithmetic to find the maximum element in an array of 5 integers. Do not use array indexing (arr[i]).',
            difficulty: 'Medium',
            starterCode: `#include <stdio.h>

int main() {
    int arr[] = {3, 7, 1, 9, 4};
    int *p = arr;
    int max = *p;
    // Use pointer arithmetic to find max
    
    printf("Max: %d\\n", max);
    return 0;
}`,
            hint: 'Increment p using p++ in a loop and compare *p with max.',
            solution: `#include <stdio.h>

int main() {
    int arr[] = {3, 7, 1, 9, 4};
    int *p = arr;
    int max = *p;
    for (int i = 1; i < 5; i++) {
        p++;
        if (*p > max) max = *p;
    }
    printf("Max: %d\\n", max);
    return 0;
}`,
          },
          {
            question: 'Write a function reverseArray(int *arr, int n) that reverses an array in-place using pointers. Do not use a second array.',
            difficulty: 'Hard',
            starterCode: `#include <stdio.h>

void reverseArray(int *arr, int n) {
    // Reverse in-place using pointer arithmetic
}

int main() {
    int a[] = {1, 2, 3, 4, 5};
    reverseArray(a, 5);
    for (int i = 0; i < 5; i++)
        printf("%d ", a[i]);
    return 0;
}`,
            hint: 'Use two pointers — one at start (arr), one at end (arr + n - 1). Swap and move toward center.',
            solution: `#include <stdio.h>

void reverseArray(int *arr, int n) {
    int *start = arr;
    int *end = arr + n - 1;
    while (start < end) {
        int temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
}

int main() {
    int a[] = {1, 2, 3, 4, 5};
    reverseArray(a, 5);
    for (int i = 0; i < 5; i++)
        printf("%d ", a[i]);
    return 0;
}`,
          },
        ],
      },
      practice: {
        question: 'Use pointer arithmetic to iterate and print all elements of an integer array without using bracket [] indexing.',
        difficulty: 'Medium',
        starterCode: `#include <stdio.h>

int main() {
    int arr[4] = {10, 20, 30, 40};
    int *p = arr;
    // Iterate and print using *(p + i)
    
    return 0;
}`,
        hint: 'In C, *(arr + i) is completely identical to arr[i].',
        solution: `#include <stdio.h>

int main() {
    int arr[4] = {10, 20, 30, 40};
    int *p = arr;
    for (int i = 0; i < 4; i++) {
        printf("Element %d = %d\\n", i, *(p + i));
    }
    return 0;
}`,
      },
    },
    {
      id: 'structures',
      title: '13. Structures (struct)',
      summary:
        'A structure is a user-defined data type that groups related variables of different data types under a single name. Members are accessed via the dot (.) operator, or arrow (->) operator when using pointers.',
      syntax: `struct Student {
    int id;
    char name[50];
    float gpa;
};`,
      codeExample: `#include <stdio.h>

struct Student {
    int roll;
    char name[20];
    float cgpa;
};

int main() {
    struct Student s1 = {101, "Aarav", 9.2};
    struct Student *ptr = &s1;

    printf("Direct access (.): %s (Roll: %d, CGPA: %.1f)\\n", s1.name, s1.roll, s1.cgpa);
    printf("Pointer access (->): %s (CGPA: %.1f)\\n", ptr->name, ptr->cgpa);
    return 0;
}`,
      expectedOutput: `Direct access (.): Aarav (Roll: 101, CGPA: 9.2)
Pointer access (->): Aarav (CGPA: 9.2)`,
      commonMistake:
        'Using the dot operator on a structure pointer (e.g. ptr.name instead of ptr->name or (*ptr).name).',
      practice: {
        question: 'Define a struct Point with x and y coordinates, and calculate the squared Euclidean distance between two points.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {0, 0};
    struct Point p2 = {3, 4};
    // Calculate and print (p2.x - p1.x)^2 + (p2.y - p1.y)^2
    
    return 0;
}`,
        hint: 'Difference in x: dx = p2.x - p1.x; dy = p2.y - p1.y; squared distance = dx*dx + dy*dy.',
        solution: `#include <stdio.h>

struct Point { int x; int y; };

int main() {
    struct Point p1 = {0, 0};
    struct Point p2 = {3, 4};
    int dx = p2.x - p1.x;
    int dy = p2.y - p1.y;
    printf("Distance squared = %d\\n", dx*dx + dy*dy);
    return 0;
}`,
      },
    },
    {
      id: 'unions',
      title: '14. Unions & Memory Overlapping',
      summary:
        'A union is similar to a structure, but all its members share the exact same memory location. The total size of a union is equal to the size of its largest member.',
      syntax: `union Data {
    int i;
    float f;
    char str[20];
};`,
      codeExample: `#include <stdio.h>

union Data {
    int i;
    float f;
};

int main() {
    union Data d;
    d.i = 10;
    printf("d.i = %d\\n", d.i);

    d.f = 220.5; // Overwrites the memory
    printf("d.f = %.1f\\n", d.f);
    printf("d.i after overwriting = %d (corrupted)\\n", d.i);
    printf("Size of union: %zu bytes\\n", sizeof(union Data));
    return 0;
}`,
      expectedOutput: `d.i = 10
d.f = 220.5
d.i after overwriting = 1130102784 (corrupted)
Size of union: 4 bytes`,
      commonMistake:
        'Expecting all members of a union to retain their values simultaneously. Only the most recently assigned member contains valid data.',
      practice: {
        question: 'Create a union with a char (1 byte) and an int (4 bytes) and verify that sizeof(union) equals 4.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

union Number {
    char c;
    int num;
};

int main() {
    // Print sizeof(union Number)
    
    return 0;
}`,
        hint: 'Use sizeof(union Number) with %zu specifier.',
        solution: `#include <stdio.h>

union Number { char c; int num; };

int main() {
    printf("Union size: %zu bytes\\n", sizeof(union Number));
    return 0;
}`,
      },
    },
    {
      id: 'enums',
      title: '15. Enumerations (enum)',
      summary:
        'An enum is an enumerated user-defined type consisting of integral constants. By default, values begin at 0 and increment by 1, enhancing code clarity and readability.',
      syntax: `enum Day { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY };`,
      codeExample: `#include <stdio.h>

enum State {
    IDLE = 0,
    RUNNING = 1,
    STOPPED = 2
};

int main() {
    enum State currentState = RUNNING;
    if (currentState == RUNNING) {
        printf("System State is: RUNNING (code %d)\\n", currentState);
    }
    return 0;
}`,
      expectedOutput: `System State is: RUNNING (code 1)`,
      commonMistake:
        'Confusing enum values with strings. In C, enum identifiers evaluate to integers, not string literals.',
      practice: {
        question: 'Declare an enum for HTTP status codes (OK=200, NOT_FOUND=404, SERVER_ERROR=500) and print them.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

enum Http {
    // Define values
};

int main() {
    // print values
    return 0;
}`,
        hint: 'You can explicitly assign numbers: OK = 200, NOT_FOUND = 404, etc.',
        solution: `#include <stdio.h>

enum Http { OK = 200, NOT_FOUND = 404, SERVER_ERROR = 500 };

int main() {
    printf("HTTP OK = %d\\n", OK);
    printf("HTTP NOT FOUND = %d\\n", NOT_FOUND);
    return 0;
}`,
      },
    },
    {
      id: 'file-handling',
      title: '16. File Handling (fopen, fclose, fprintf, fscanf)',
      summary:
        'C interacts with persistent files using FILE pointers. Always check if fopen returned NULL before reading or writing, and always close streams with fclose.',
      syntax: `FILE *fp = fopen("filename.txt", "w"); // "r", "w", "a"
if (fp != NULL) {
    fprintf(fp, "Formatted string %d\\n", val);
    fclose(fp);
}`,
      codeExample: `#include <stdio.h>

int main() {
    // In our online sandbox, demonstrating standard file operations pattern
    FILE *fp = fopen("output.txt", "w");
    if (fp == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }

    fprintf(fp, "DevForge C File System Demo\\nScore: %d\\n", 100);
    fclose(fp);

    printf("File written and closed successfully.\\n");
    return 0;
}`,
      expectedOutput: `File written and closed successfully.`,
      commonMistake:
        'Neglecting to fclose() opened files, causing resource leaks, locked file descriptors, and unflushed buffers.',
      practice: {
        question: 'Write code to open a file in append mode ("a") and append a line of log text.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

int main() {
    // Open log.txt in append mode and write a message
    
    return 0;
}`,
        hint: 'Use "a" mode in fopen: FILE *f = fopen("log.txt", "a");',
        solution: `#include <stdio.h>

int main() {
    FILE *f = fopen("log.txt", "a");
    if (f != NULL) {
        fprintf(f, "[INFO] Appended timestamp entry\\n");
        fclose(f);
        printf("Log entry appended\\n");
    }
    return 0;
}`,
      },
    },
    {
      id: 'dynamic-memory',
      title: '17. Dynamic Memory Allocation (malloc, calloc, realloc, free)',
      summary:
        'Memory allocated at compile time lives on the Stack. Dynamic memory is requested at runtime from the Heap using malloc() (uninitialized), calloc() (zero-initialized), realloc() (resized), and returned via free().',
      explanation: {
        intro: 'Dynamic memory allocation lets you request memory from the operating system while the program is running, using the "heap" memory segment.',
        why: 'Normally, array sizes must be known before compiling (e.g., int arr[100];). If you don\'t know how much data the user will enter until the program runs, you need dynamic memory to request exactly the right amount of space on the fly.',
        analogy: 'Static arrays are like booking a fixed-size hotel room before your trip. Dynamic memory is like renting chairs for a party: you can ask for exactly 50 chairs when the party starts, ask for 20 more later (realloc), and return them when the party is over (free).',
        concept: `Memory in a C program is divided into segments:
1. Code (Text): Contains compiled instructions.
2. Data/BSS: Global and static variables.
3. Stack: Local variables and function call frames (auto-managed).
4. Heap: Large pool of memory for dynamic allocation (manually managed).

Core Functions (in <stdlib.h>):
- malloc(size): Allocates 'size' bytes. Memory is uninitialized (garbage values).
- calloc(n, size): Allocates space for 'n' elements of 'size' bytes. Initializes all bits to 0.
- realloc(ptr, new_size): Resizes previously allocated memory.
- free(ptr): Releases allocated memory back to the OS. Essential to prevent memory leaks!`,
        memoryDiagram: `Stack vs Heap Allocation:

int main() {
    int n = 5;                        // 'n' is on the Stack
    int *arr = malloc(n * sizeof(int)); // 'arr' pointer is on the Stack
                                      // The 5 integers are on the Heap
}

Stack:                     Heap:
[ arr (ptr to 0x5000) ]    0x5000: [ ? | ? | ? | ? | ? ] (Uninitialized malloc)
[ n (value 5)         ]`,
        syntaxBreakdown: [
          { part: 'malloc', meaning: 'Memory Allocate' },
          { part: '(5 * sizeof(int))', meaning: 'Number of bytes needed (e.g., 5 * 4 = 20 bytes)' },
          { part: '(int *)', meaning: 'Typecasting the generic void* returned by malloc into an int pointer (optional in C, required in C++)' },
        ],
        beginnerExample: {
          description: 'Basic usage of malloc and free.',
          code: `#include <stdio.h>
#include <stdlib.h> // Required for malloc/free

int main() {
    int *ptr;
    // Allocate memory for 1 integer
    ptr = (int *)malloc(sizeof(int));
    
    if (ptr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    *ptr = 100; // Store value
    printf("Value: %d\\n", *ptr);
    
    free(ptr); // Release memory
    return 0;
}`,
          output: `Value: 100`,
        },
        intermediateExample: {
          description: 'Using calloc to create a dynamic array and zero-initializing it.',
          code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 4;
    // calloc allocates memory and initializes to 0
    int *arr = (int *)calloc(n, sizeof(int));
    
    if (arr == NULL) return 1;

    printf("Initial values (calloc):\\n");
    for(int i = 0; i < n; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
    
    // Assign new values
    arr[0] = 10;
    arr[1] = 20;
    
    free(arr);
    return 0;
}`,
          output: `Initial values (calloc):\narr[0] = 0\narr[1] = 0\narr[2] = 0\narr[3] = 0`,
        },
        advancedExample: {
          description: 'Resizing an array with realloc.',
          code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // Allocate space for 2 ints
    int *arr = (int *)malloc(2 * sizeof(int));
    arr[0] = 10;
    arr[1] = 20;
    
    // Need space for 4 ints instead!
    arr = (int *)realloc(arr, 4 * sizeof(int));
    
    // Original values are preserved
    arr[2] = 30;
    arr[3] = 40;
    
    for(int i = 0; i < 4; i++) {
        printf("%d ", arr[i]);
    }
    
    free(arr);
    return 0;
}`,
          output: `10 20 30 40`,
        },
        keyPoints: [
          'malloc returns a void* (generic pointer) which should be assigned to a typed pointer.',
          'Always check if the returned pointer is NULL (means memory allocation failed, e.g., out of memory).',
          'Every malloc/calloc MUST have a corresponding free(). Forgetting this causes a memory leak.',
          'Accessing memory after calling free() on it is a "Use-After-Free" bug and causes undefined behavior.',
          'calloc initializes to zero, malloc does not (it leaves garbage values).',
        ],
        examTip: 'A classic exam question asks for the difference between malloc and calloc. Two main points: 1. calloc takes two arguments (num_elements, size_of_element) while malloc takes one (total_bytes). 2. calloc initializes memory to zero; malloc does not.',
        interviewTip: 'Interviewers often ask to identify memory leaks in code snippets. Look for paths where a function allocates memory but returns early before freeing it. Also be prepared to explain the Heap vs Stack memory segments.',
        mcqs: [
          {
            question: 'What does malloc return if it fails to allocate memory?',
            options: [
              { label: 'A', text: '0' },
              { label: 'B', text: 'NULL' },
              { label: 'C', text: '-1' },
              { label: 'D', text: 'Garbage pointer' }
            ],
            answer: 'B',
            explanation: 'If malloc fails (e.g., system is out of memory), it returns a NULL pointer. It is crucial to always check for NULL before using the pointer.'
          },
          {
            question: 'Which function resizes a previously allocated memory block?',
            options: [
              { label: 'A', text: 'resize()' },
              { label: 'B', text: 'malloc()' },
              { label: 'C', text: 'calloc()' },
              { label: 'D', text: 'realloc()' }
            ],
            answer: 'D',
            explanation: 'realloc (re-allocate) changes the size of the memory block pointed to by the given pointer.'
          }
        ],
        quickRevision: [
          { point: 'malloc', detail: 'Allocates uninitialized memory on heap' },
          { point: 'calloc', detail: 'Allocates memory and initializes to 0' },
          { point: 'realloc', detail: 'Changes the size of an existing allocation' },
          { point: 'free', detail: 'Releases memory. Essential to stop leaks!' },
          { point: '<stdlib.h>', detail: 'Header file required for these functions' }
        ]
      },
      syntax: `#include <stdlib.h>
int *arr = (int*) malloc(n * sizeof(int));
int *arr2 = (int*) calloc(n, sizeof(int));
free(arr);
arr = NULL; // prevent dangling pointer`,
      codeExample: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 4;
    int *arr = (int*) malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }

    printf("Dynamically allocated array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    free(arr); // Free heap memory
    arr = NULL;
    printf("Memory freed successfully.\\n");
    return 0;
}`,
      expectedOutput: `Dynamically allocated array: 10 20 30 40 
Memory freed successfully.`,
      commonMistake:
        'Memory leaks (forgetting to free allocated pointers) or using memory after freeing it (use-after-free).',
      practice: {
        question: 'Allocate memory for 3 floats using calloc, verify they are initialized to 0.0, and free the memory.',
        difficulty: 'Medium',
        starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // Allocate 3 floats using calloc and print their values
    
    return 0;
}`,
        hint: 'calloc takes two parameters: number of elements and size of each element.',
        solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    float *ptr = (float*) calloc(3, sizeof(float));
    if (ptr != NULL) {
        printf("Val: %.1f, %.1f, %.1f\\n", ptr[0], ptr[1], ptr[2]);
        free(ptr);
    }
    return 0;
}`,
      },
    },
    {
      id: 'preprocessor',
      title: '18. C Preprocessor Directives & Macros',
      summary:
        'The C preprocessor modifies source code text before compilation starts. Directives begin with #, including #include, #define (macros), #ifdef, #ifndef, and #endif.',
      syntax: `#define SQUARE(x) ((x) * (x))
#ifdef DEBUG
    // debug statements
#endif`,
      codeExample: `#include <stdio.h>
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))

int main() {
    int val = 5;
    printf("Square of %d = %d\\n", val, SQUARE(val));
    printf("Max of 45 and 78 = %d\\n", MAX(45, 78));
    return 0;
}`,
      expectedOutput: `Square of 5 = 25
Max of 45 and 78 = 78`,
      commonMistake:
        'Not wrapping macro parameters in parentheses: #define MULT(x, y) x * y causes MULT(2+3, 4) to expand to 2 + 3 * 4 = 14 instead of 20.',
      practice: {
        question: 'Write a macro MIN(a, b) with proper parentheses that returns the smaller of two numbers.',
        difficulty: 'Easy',
        starterCode: `#include <stdio.h>

// Define MIN(a, b) macro

int main() {
    printf("Min: %d\\n", MIN(10, 20));
    return 0;
}`,
        hint: 'Use #define MIN(a, b) (((a) < (b)) ? (a) : (b))',
        solution: `#include <stdio.h>

#define MIN(a, b) (((a) < (b)) ? (a) : (b))

int main() {
    printf("Min: %d\\n", MIN(10, 20));
    return 0;
}`,
      },
    },
  ],
  bTechPriority: {
    semesterExams: [
      'Pointers: Pointer arithmetic, double pointers (**ptr), and call-by-reference mechanisms.',
      'Structures vs Unions: Memory layout differences, byte alignment, and padding.',
      'Dynamic Memory Allocation: Difference between malloc() and calloc(); avoiding dangling pointers and memory leaks.',
      'Recursion: Base cases, stack overflow conditions, and tracing recursion trees (Tower of Hanoi, Factorial, Fibonacci).',
      'String handling algorithms: Palindrome verification, string reversal, substring matching without built-in libraries.',
    ],
    vivaQuestions: [
      {
        q: 'What is a Dangling Pointer in C?',
        a: 'A dangling pointer points to a memory location that has been deallocated or freed. Accessing it causes undefined behavior or segmentation faults.',
      },
      {
        q: 'What is the difference between malloc() and calloc()?',
        a: 'malloc() allocates contiguous memory leaving it uninitialized (containing garbage values), while calloc() initializes all allocated bytes to zero.',
      },
      {
        q: 'Why does C not check array boundary limits?',
        a: 'Dennis Ritchie designed C for bare-metal systems and OS speed. Omission of boundary checks prevents CPU overhead on every memory read/write.',
      },
      {
        q: 'What is a Void Pointer (void*)?',
        a: 'A generic pointer that has no associated data type. It can store the address of any object, but must be explicitly type-cast before dereferencing.',
      },
    ],
    dsaPrerequisites: [
      'Mastery of struct and self-referential structures (struct Node { int data; struct Node *next; }) is mandatory for Linked Lists, Trees, and Graphs.',
      'Pointer arithmetic is essential for array-based queues, circular buffers, and heaps.',
      'Stack memory frames knowledge explains recursion limits and depth in DFS algorithms.',
    ],
    interviewTips: [
      'Be prepared to implement strcpy, strcmp, and strlen from scratch on a whiteboard without using string.h.',
      'Always check if malloc/calloc returns NULL before using dynamic memory in coding tests.',
      'Always free dynamically allocated memory to show awareness of memory leak prevention.',
    ],
  },
};
