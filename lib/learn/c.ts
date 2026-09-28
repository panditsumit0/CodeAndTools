import { CourseData } from './types';

export const C_COURSE: CourseData = {
  "id": "c",
  "slug": "c",
  "name": "C",
  "tagline": "The Mother of Modern Programming Languages",
  "shortDescription": "Learn the fundamentals of programming, memory, pointers and system-level concepts.",
  "difficulty": "Beginner → Intermediate",
  "bestFor": "Class 12 CS Students, B.Tech 1st/2nd Semester, Systems Engineering, Embedded Systems, Operating Systems & Gate/Viva Prep",
  "icon": "Code2",
  "color": "emerald",
  "intro": {
    "whatIs": "C is a general-purpose, procedural computer programming language developed in 1972 by Dennis Ritchie at Bell Labs. It was designed to construct the Unix operating system and provides low-level memory manipulation with high-level language constructs.",
    "whyLearn": "For Class 12 and B.Tech computer science undergraduates, C is universally taught because it unmasks how computers actually operate under the hood—stack frames, memory addresses, byte alignment, and CPU execution—knowledge that makes learning C++, Java, and Python far easier.",
    "whereUsed": [
      "Operating Systems (Linux Kernel, Windows NT Kernel, macOS Darwin core)",
      "Embedded devices, microcontrollers (Arduino, ARM Cortex, Automotive ECUs)",
      "Database engines (SQLite, PostgreSQL core, Redis storage engines)",
      "Language runtimes and compilers (CPython runtime, V8 JS engine core)"
    ],
    "advantages": [
      "Unmatched execution speed and minimal runtime memory overhead",
      "Direct hardware and pointer-level memory control",
      "Compact syntax with small standard library",
      "Platform portability with standardized ANSI/ISO C specs"
    ],
    "limitations": [
      "No built-in garbage collection—developers must manage memory manually",
      "No native Object-Oriented Programming (no classes, inheritance, or polymorphism)",
      "No built-in bounds checking on arrays and strings (risk of buffer overflows)",
      "Limited standard data structures compared to C++ STL"
    ]
  },
  "topics": [
    {
      "id": "basic-syntax",
      "title": "1. Basic Syntax & Program Structure",
      "summary": "Every C program execution begins at the main() function. Header files provide declarations, and statements end with semicolons.",
      "syntax": "#include <stdio.h>\n\nint main(void) {\n    // statements\n    return 0; // indicates successful exit\n}",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    // Print a welcoming message to the console\n    printf(\"Hello, Class 12 Computer Science!\\n\");\n    printf(\"Welcome to C programming.\\n\");\n    return 0;\n}",
      "expectedOutput": "Hello, Class 12 Computer Science!\nWelcome to C programming.",
      "commonMistake": "Forgetting the semicolon at the end of each statement or forgetting #include <stdio.h> before using printf().",
      "practice": {
        "question": "Write a C program that prints your name and your favorite school subject on two separate lines.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    // Write your printf statements here\n    return 0;\n}",
        "hint": "Use two printf() statements, each ending with \\n inside the quotation marks.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Name: Aman Sharma\\n\");\n    printf(\"Favorite Subject: Computer Science\\n\");\n    return 0;\n}"
      },
      "explanation": {
        "intro": "The basic syntax of C is the set of grammatical rules that tells the computer how to read and execute your instructions. Every complete C program has a starting point called the main() function, includes necessary library files, and wraps executable code inside curly braces {}.",
        "why": "Computers do not understand human language directly. A strict program structure allows the C compiler (like GCC or Clang) to convert your human-readable text into machine instructions without ambiguity. Understanding this structure helps you avoid syntax errors from your very first line of code.",
        "analogy": "Think of writing a formal letter in English. A letter must have a date and address at the top (header files), a greeting and main body paragraphs (the main function), and a polite sign-off like \"Yours sincerely\" at the bottom (return 0). If you miss the sign-off or leave sentences without periods (semicolons), the letter is considered incomplete.",
        "concept": "A C program follows an exact step-by-step layout:\n1. Preprocessor Directives (#include): Tells the compiler to pull in ready-made tools. <stdio.h> stands for \"Standard Input Output Header\" and gives us printf() and scanf().\n2. The main() function: The entry door. When your program starts, the operating system jumps directly to main().\n3. Curly braces { }: Group instructions into a code block. Everything between { and } belongs to that function.\n4. Semicolon (;): Marks the end of an instruction, just like a period ends an English sentence.\n5. return 0;: Tells the operating system that your program finished successfully without crashing.",
        "codeExplanation": [
          {
            "line": "#include <stdio.h>",
            "explanation": "Imports standard input/output functions so printf() and scanf() work."
          },
          {
            "line": "int main(void)",
            "explanation": "Defines the main function where program execution starts, returning an integer exit code."
          },
          {
            "line": "printf(\"Hello, Class 12 Computer Science!\\n\");",
            "explanation": "Outputs text to console; \\n advances the cursor to a fresh line."
          },
          {
            "line": "printf(\"Welcome to C programming.\\n\");",
            "explanation": "Prints the second line of text onto the screen."
          },
          {
            "line": "return 0;",
            "explanation": "Signals to the operating system that the program executed cleanly without error."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "#include <stdio.h>",
            "meaning": "Preprocessor directive importing standard input/output header file"
          },
          {
            "part": "int main(void)",
            "meaning": "Function declaration: return type is int, function name is main, takes no arguments"
          },
          {
            "part": "{ ... }",
            "meaning": "Code block enclosing all executable statements of the function"
          },
          {
            "part": "printf(\"...\");",
            "meaning": "Library function used to display formatted text onto the screen"
          },
          {
            "part": ";",
            "meaning": "Statement terminator — every individual statement in C must end with a semicolon"
          },
          {
            "part": "return 0;",
            "meaning": "Exits the function and returns error code 0 (success) back to the operating system"
          }
        ],
        "outputExplanation": "The program runs top-to-bottom inside main(). The first printf prints \"Hello, Class 12 Computer Science!\" followed by \\n (newline), moving the cursor down. The second printf prints \"Welcome to C programming.\\n\".",
        "commonMistakes": [
          {
            "mistake": "Leaving off the semicolon at the end of a printf statement: printf(\"Hello\")",
            "fix": "Every single statement in C must end with a semicolon (;)."
          },
          {
            "mistake": "Writing main without parentheses: int main { ... }",
            "fix": "Functions always require parentheses after their name: int main() or int main(void)."
          },
          {
            "mistake": "Using single quotes for text: printf('Hello');",
            "fix": "In C, single quotes are only for single characters like 'A'. Strings of text must use double quotes: \"Hello\"."
          },
          {
            "mistake": "Forgetting #include <stdio.h> before calling printf.",
            "fix": "Always place #include <stdio.h> at the very top of your file when performing console input or output."
          }
        ],
        "keyPoints": [
          "Execution always starts at the main() function.",
          "C is case-sensitive: main is valid, Main or MAIN will cause a linker error.",
          "Statements must terminate with a semicolon (;).",
          "Header file <stdio.h> provides essential functions like printf() and scanf().",
          "A return value of 0 from main() signifies successful completion."
        ],
        "quickSummary": "In simple words, every C program is like a recipe with a required title (#include), a main kitchen where cooking starts (main), a list of step-by-step commands ending with semicolons, and a clean exit (return 0).",
        "practiceSet": [
          {
            "question": "Print your school name and roll number on two separate lines using C.",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    // Print school and roll number\n    return 0;\n}",
            "hint": "Use \\n to separate the lines inside printf.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    printf(\"School: Delhi Public School\\n\");\n    printf(\"Roll Number: 104\\n\");\n    return 0;\n}"
          },
          {
            "question": "Write a program to demonstrate tab spacing using the \\t escape character between two words.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    // Use \\t to insert tab spaces between \"Subject\" and \"Marks\"\n    return 0;\n}",
            "hint": "\\t inserts a horizontal tab space (usually 4 to 8 spaces) between words.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Subject\\tMarks\\n\");\n    printf(\"CS\\t95\\n\");\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "variables",
      "title": "2. Variables & Scope",
      "summary": "A variable is a named storage location in RAM. In C, all variables must be declared with a data type before they can be used.",
      "syntax": "data_type variable_name = initial_value;",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    int rollNumber = 42;\n    float marks = 89.5;\n    char grade = 'A';\n\n    printf(\"Roll: %d\\n\", rollNumber);\n    printf(\"Marks: %.1f\\n\", marks);\n    printf(\"Grade: %c\\n\", grade);\n    return 0;\n}",
      "expectedOutput": "Roll: 42\nMarks: 89.5\nGrade: A",
      "commonMistake": "Using an uninitialized local variable. In C, local variables hold garbage values until explicitly assigned.",
      "practice": {
        "question": "Declare an integer for age, a float for temperature, and print them with informative labels.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    // Declare and initialize age and temperature\n    return 0;\n}",
        "hint": "Use int age = 17; and float temp = 98.6; with format specifiers %d and %.1f.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    int age = 17;\n    float temperature = 98.6;\n    printf(\"Age: %d years\\n\", age);\n    printf(\"Body Temp: %.1f F\\n\", temperature);\n    return 0;\n}"
      },
      "explanation": {
        "intro": "A variable is a named container in the computer memory (RAM) where your program stores data that can change while the program is running.",
        "why": "Programs need to remember things—such as a student score, a bank balance, or a user name. Without variables, a program would only be able to perform calculations with fixed, unchangeable numbers.",
        "analogy": "Imagine labeled storage boxes in your classroom. One box is labeled \"rollNumber\" and can only fit whole numbers. Another box is labeled \"grade\" and can only hold a single letter. When you need the value, you open the box with that label.",
        "concept": "Every variable in C has four core attributes:\n1. Name (Identifier): The label you use to refer to it (e.g. rollNumber). Must begin with a letter or underscore, not a number.\n2. Data Type: Tells C how much RAM to reserve and what kind of data is allowed (e.g. int, float, char).\n3. Value: The actual data stored inside the memory box.\n4. Scope: Where the variable can be seen and used. Variables created inside a function are \"local\" to that function.",
        "codeExplanation": [
          {
            "line": "int rollNumber = 42;",
            "explanation": "Reserves 4 bytes in RAM, labels the space rollNumber, and stores 42."
          },
          {
            "line": "float marks = 89.5;",
            "explanation": "Reserves 4 bytes for decimal number marks and stores 89.5."
          },
          {
            "line": "char grade = 'A';",
            "explanation": "Reserves 1 byte of memory and stores the ASCII character 'A'."
          },
          {
            "line": "printf(\"Roll: %d\\n\", rollNumber);",
            "explanation": "Uses format specifier %d to print the integer value of rollNumber."
          },
          {
            "line": "printf(\"Marks: %.1f\\n\", marks);",
            "explanation": "Uses %.1f to display the float formatted to 1 decimal place."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "int",
            "meaning": "Data type specifying a 4-byte signed whole integer"
          },
          {
            "part": "rollNumber",
            "meaning": "Identifier name chosen by programmer following naming rules"
          },
          {
            "part": "=",
            "meaning": "Assignment operator — copies value on the right into the memory box on the left"
          },
          {
            "part": "42",
            "meaning": "The literal value assigned at initialization"
          },
          {
            "part": "%d, %f, %c",
            "meaning": "Format specifiers telling printf how to display integer, float, and character data"
          }
        ],
        "outputExplanation": "printf replaces each %d, %.1f, and %c format specifier with the current values held in rollNumber, marks, and grade respectively.",
        "commonMistakes": [
          {
            "mistake": "Using an uninitialized local variable: int score; printf(\"%d\", score);",
            "fix": "In C, local variables do not default to 0; they hold random garbage bytes from RAM. Always initialize variables before reading them."
          },
          {
            "mistake": "Starting a variable name with a number: int 1student = 5;",
            "fix": "Variable names must start with an alphabet letter or an underscore (_), never a digit: int student1 = 5;."
          },
          {
            "mistake": "Using the wrong format specifier: printf(\"%f\", rollNumber); where rollNumber is an int.",
            "fix": "Match specifiers precisely: %d for int, %f for float, %lf for double, and %c for char."
          },
          {
            "mistake": "Assigning a character using double quotes: char ch = \"A\";",
            "fix": "Single characters require single quotes: char ch = 'A'; (double quotes are for strings)."
          }
        ],
        "keyPoints": [
          "All variables in C must be declared with their data type before use.",
          "Local variables hold garbage values until initialized.",
          "Variable names are case-sensitive: score and Score are two different variables.",
          "Global variables declared outside functions are automatically initialized to 0.",
          "Format specifiers link variables to printf output: %d (int), %f (float), %c (char)."
        ],
        "quickSummary": "In simple words, a variable is a named storage compartment in RAM with a specific data type and size. You must declare it before using it, and initialize it so you do not read garbage memory.",
        "practiceSet": [
          {
            "question": "Declare two integer variables x = 10 and y = 20, then swap their values using a temporary variable.",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int x = 10, y = 20;\n    // Swap x and y using a temp variable\n    return 0;\n}",
            "hint": "Use int temp = x; to save x before overwriting it.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int x = 10, y = 20;\n    int temp = x;\n    x = y;\n    y = temp;\n    printf(\"x = %d, y = %d\\n\", x, y);\n    return 0;\n}"
          },
          {
            "question": "What is the output of declaring an uninitialized local variable and printing it?",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int uninit;\n    // Explain or observe the printed value\n    printf(\"%d\\n\", uninit);\n    return 0;\n}",
            "hint": "Local variables hold garbage values from leftover memory.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int uninit;\n    // In C, uninitialized local variables contain unpredictable garbage values!\n    printf(\"%d (garbage value)\\n\", uninit);\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "data-types",
      "title": "3. Data Types & Memory Sizes",
      "summary": "Data types tell the compiler what category of data a variable holds and how many bytes of RAM to reserve for it.",
      "syntax": "int a;          // usually 4 bytes\nfloat b;        // usually 4 bytes\ndouble c;       // usually 8 bytes\nchar d;         // exactly 1 byte",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Size of char: %zu byte\\n\", sizeof(char));\n    printf(\"Size of int: %zu bytes\\n\", sizeof(int));\n    printf(\"Size of float: %zu bytes\\n\", sizeof(float));\n    printf(\"Size of double: %zu bytes\\n\", sizeof(double));\n    return 0;\n}",
      "expectedOutput": "Size of char: 1 byte\nSize of int: 4 bytes\nSize of float: 4 bytes\nSize of double: 8 bytes",
      "commonMistake": "Assuming int is always 4 bytes everywhere; on older 16-bit systems it was 2 bytes. Always use sizeof() to verify.",
      "practice": {
        "question": "Write a program to display the memory size of long int and double on your machine.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    // Print sizeof(long int) and sizeof(double)\n    return 0;\n}",
        "hint": "Use sizeof(long int) with the %zu format specifier.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Size of long int: %zu bytes\\n\", sizeof(long int));\n    printf(\"Size of double: %zu bytes\\n\", sizeof(double));\n    return 0;\n}"
      },
      "explanation": {
        "intro": "A data type specifies the kind of value a variable will store (like whole numbers, decimals, or characters) and how much memory in bytes the computer must allocate for it.",
        "why": "Computers store all information as raw binary bits (0s and 1s). The data type tells the processor how to decode those bits. For instance, the binary pattern 01000001 represents the number 65 as an int, but the letter \"A\" as a char.",
        "analogy": "Think of vehicle parking spots: a motorcycle needs a small 1-meter bay (char), a standard family car needs a medium 4-meter stall (int / float), and a large bus needs an 8-meter double bay (double). Using the right spot prevents waste and fits the vehicle perfectly.",
        "concept": "C primary fundamental data types:\n1. char (1 byte): Stores a single ASCII character (e.g. 'A', '$', '9') or small integers from -128 to 127.\n2. int (usually 4 bytes): Stores whole numbers without decimals (e.g. -500, 0, 42).\n3. float (4 bytes): Single-precision floating point for decimal numbers with about 6-7 digits of precision (e.g. 3.14159).\n4. double (8 bytes): Double-precision floating point for decimals with about 15-17 digits of precision (e.g. 3.141592653589793).\n5. void: Represents the absence of type or value (used for functions that return nothing).\n\nModifiers like signed, unsigned, short, and long adjust the range and memory size.",
        "codeExplanation": [
          {
            "line": "#include <stdio.h>",
            "explanation": "Includes declarations for standard input/output functions."
          },
          {
            "line": "sizeof(char)",
            "explanation": "Evaluates to 1 byte, which is guaranteed across all standard C implementations."
          },
          {
            "line": "sizeof(int)",
            "explanation": "Returns the size in bytes allocated for integer data on this system architecture (typically 4 bytes)."
          },
          {
            "line": "sizeof(float)",
            "explanation": "Measures memory required for single-precision IEEE 754 float (4 bytes)."
          },
          {
            "line": "sizeof(double)",
            "explanation": "Measures memory required for high-precision double (8 bytes)."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "sizeof(...)",
            "meaning": "Compile-time operator that returns the size of a type or variable in bytes"
          },
          {
            "part": "%zu",
            "meaning": "Format specifier for size_t, which is the unsigned integer type returned by sizeof"
          },
          {
            "part": "signed / unsigned",
            "meaning": "Type modifiers: signed allows negative & positive; unsigned allows only positive (doubling max positive value)"
          },
          {
            "part": "short / long",
            "meaning": "Type modifiers: short uses fewer or equal bytes; long uses more or equal bytes than base type"
          }
        ],
        "outputExplanation": "The sizeof operator queries the compiler for how many bytes are assigned to each fundamental type in memory on the host computer.",
        "commonMistakes": [
          {
            "mistake": "Dividing two integers and expecting a decimal result: float x = 5 / 2; giving 2.0 instead of 2.5.",
            "fix": "In C, integer divided by integer gives integer (truncated). Write float x = 5.0 / 2; or float x = (float)5 / 2; to get 2.5."
          },
          {
            "mistake": "Using %d format specifier for a float: printf(\"%d\", 3.14f);",
            "fix": "Floats must use %f, and doubles use %lf (or %f in printf, %lf in scanf)."
          },
          {
            "mistake": "Exceeding the maximum limit of an int (integer overflow).",
            "fix": "For very large integers exceeding 2 billion, use long long int with %lld."
          }
        ],
        "keyPoints": [
          "char is always 1 byte (8 bits) in C.",
          "int is typically 4 bytes on modern platforms.",
          "float has ~6-7 digits of precision, while double has ~15-17 digits.",
          "Integer division truncates decimals: 7 / 2 evaluates to 3.",
          "sizeof is an operator, not a function, and is evaluated at compile time."
        ],
        "quickSummary": "In simple words, data types tell C what type of data you are storing and how many memory bytes to reserve, ensuring numbers and letters are stored and decoded properly.",
        "practiceSet": [
          {
            "question": "How do you force the division of two int variables a = 7 and b = 2 to produce 3.5?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 7, b = 2;\n    // Calculate and print division as a float\n    return 0;\n}",
            "hint": "Use explicit type casting: (float)a / b.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int a = 7, b = 2;\n    float result = (float)a / b;\n    printf(\"Result: %.1f\\n\", result);\n    return 0;\n}"
          },
          {
            "question": "Write a program to display the ASCII integer code of the character 'Z'.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    char ch = 'Z';\n    // Print ASCII numeric value\n    return 0;\n}",
            "hint": "Print the char variable using the %d format specifier.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    char ch = 'Z';\n    printf(\"ASCII of %c is %d\\n\", ch, ch);\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "constants",
      "title": "4. Constants & Literal Values",
      "summary": "Constants are fixed values that cannot be modified by the program during execution, defined using const or #define.",
      "syntax": "const type NAME = value;\n#define NAME value",
      "codeExample": "#include <stdio.h>\n\n#define PI 3.14159\n\nint main(void) {\n    const int MAX_MARKS = 100;\n    int studentMarks = 85;\n\n    printf(\"Max Marks: %d\\n\", MAX_MARKS);\n    printf(\"Student Marks: %d\\n\", studentMarks);\n    printf(\"Value of PI: %.4f\\n\", PI);\n    return 0;\n}",
      "expectedOutput": "Max Marks: 100\nStudent Marks: 85\nValue of PI: 3.1416",
      "commonMistake": "Attempting to reassign a value to a const variable: MAX_MARKS = 105; which triggers a compilation error.",
      "practice": {
        "question": "Create a constant for DAYS_IN_WEEK = 7 and calculate the total days in 5 weeks.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    // Define DAYS_IN_WEEK and calculate total days in 5 weeks\n    return 0;\n}",
        "hint": "Use const int DAYS_IN_WEEK = 7; then multiply by 5.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    const int DAYS_IN_WEEK = 7;\n    int weeks = 5;\n    int totalDays = weeks * DAYS_IN_WEEK;\n    printf(\"Total days in %d weeks: %d\\n\", weeks, totalDays);\n    return 0;\n}"
      },
      "explanation": {
        "intro": "A constant is a value that remains fixed throughout the lifetime of your program. Once defined, its value cannot be changed or overwritten by any line of code.",
        "why": "In real programs, certain numbers must never change accidentally—such as the value of Pi (3.14159), maximum exam marks (100), or the speed of light. Constants protect these critical values from accidental bugs and make code readable by giving magic numbers clear names.",
        "analogy": "Think of your date of birth or your Aadhaar/Social Security number. Unlike your age (a variable that increments every birthday), your birth date is etched in stone as a constant—it can never be altered.",
        "concept": "There are two primary ways to create constants in C:\n1. The const keyword: Creates a read-only variable that respects scope and data types (e.g. const float TAX = 0.18;).\n2. The #define preprocessor macro: Performs text substitution before compilation begins (e.g. #define PI 3.14159). It does not allocate memory and does not use a semicolon.\n\nLiteral constants are direct values written in code, such as 42 (integer literal), 3.14 (float literal), 'A' (character literal), and \"Hello\" (string literal).",
        "codeExplanation": [
          {
            "line": "#define PI 3.14159",
            "explanation": "Instructs the preprocessor to substitute PI with 3.14159 before compilation."
          },
          {
            "line": "const int MAX_MARKS = 100;",
            "explanation": "Declares a read-only integer constant MAX_MARKS locked to 100."
          },
          {
            "line": "int studentMarks = 85;",
            "explanation": "Declares a standard variable that can be reassigned."
          },
          {
            "line": "printf(\"Value of PI: %.4f\\n\", PI);",
            "explanation": "Prints PI formatted to 4 decimal places (rounds to 3.1416)."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "const",
            "meaning": "Type qualifier making the variable read-only after initialization"
          },
          {
            "part": "#define NAME value",
            "meaning": "Preprocessor directive replacing NAME with value across the file; no = and no ;"
          },
          {
            "part": "UPPERCASE_NAME",
            "meaning": "Convention: developers write constants in UPPERCASE to distinguish them from variables"
          }
        ],
        "outputExplanation": "The program outputs the constant MAX_MARKS (100) and the macro PI (3.1416 rounded from 3.14159).",
        "commonMistakes": [
          {
            "mistake": "Putting a semicolon at the end of #define: #define PI 3.14159;",
            "fix": "#define is a preprocessor text replacement directive. Do NOT add a semicolon or equals sign."
          },
          {
            "mistake": "Trying to modify a const variable: const int x = 10; x = 20;",
            "fix": "The compiler will reject this with \"assignment of read-only variable\". If a value must change, do not declare it const."
          },
          {
            "mistake": "Declaring a const without initializing it: const int max;",
            "fix": "A const variable must be initialized at the moment of declaration because you cannot assign to it later."
          }
        ],
        "keyPoints": [
          "const variables are typed, scoped, and checked by the compiler.",
          "#define macros are simple text substitutions handled before compiling.",
          "Naming constants in UPPERCASE makes code easy to scan and read.",
          "Literals are raw values typed directly into the source code (e.g. 100, 3.14, 'A').",
          "A const variable cannot appear on the left side of an assignment operator (=)."
        ],
        "quickSummary": "In simple words, constants are locked, unchangeable values. You use them for quantities that should never change, shielding your program against accidental bugs.",
        "practiceSet": [
          {
            "question": "Write a program using #define to calculate the area of a circle with radius 5.",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\n// Define PI here\n\nint main(void) {\n    float radius = 5.0;\n    // Calculate and print area\n    return 0;\n}",
            "hint": "Area = PI * radius * radius.",
            "solution": "#include <stdio.h>\n\n#define PI 3.14159\n\nint main(void) {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    printf(\"Area of circle: %.2f\\n\", area);\n    return 0;\n}"
          },
          {
            "question": "What error occurs if you attempt: const float GRAVITY = 9.8; GRAVITY = 10.0;?",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    const float GRAVITY = 9.8;\n    // GRAVITY = 10.0; // What happens?\n    printf(\"Gravity: %.1f\\n\", GRAVITY);\n    return 0;\n}",
            "hint": "The keyword const forbids any reassignment.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    const float GRAVITY = 9.8;\n    // Compiling GRAVITY = 10.0; throws error: assignment of read-only variable 'GRAVITY'\n    printf(\"Gravity is read-only: %.1f\\n\", GRAVITY);\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "input-output",
      "title": "5. Standard Input & Output: scanf / printf",
      "summary": "printf displays output to the screen, while scanf reads user input from the keyboard using format specifiers and address-of operators (&).",
      "syntax": "printf(\"format string\", arg1, arg2);\nscanf(\"format specifiers\", &var1, &var2);",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    int age = 0;\n    float height = 0.0;\n\n    printf(\"Enter your age and height in meters (e.g., 17 1.75): \");\n    // Note the & operator before variable names in scanf\n    scanf(\"%d %f\", &age, &height);\n\n    printf(\"You are %d years old and %.2f meters tall.\\n\", age, height);\n    return 0;\n}",
      "expectedOutput": "Enter your age and height in meters (e.g., 17 1.75): 17 1.75\nYou are 17 years old and 1.75 meters tall.",
      "commonMistake": "Forgetting the address-of operator (&) before variables in scanf: scanf(\"%d\", age); which can crash your program.",
      "practice": {
        "question": "Write a program to ask the user for two integers and display their sum.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int num1, num2;\n    // Prompt user, scan two numbers, and print their sum\n    return 0;\n}",
        "hint": "Use scanf(\"%d %d\", &num1, &num2); and add them inside printf.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    int num1, num2;\n    printf(\"Enter two integers: \");\n    scanf(\"%d %d\", &num1, &num2);\n    printf(\"Sum: %d\\n\", num1 + num2);\n    return 0;\n}"
      },
      "explanation": {
        "intro": "Standard Input/Output (I/O) is how your program interacts with the human user. printf prints text and numbers onto the terminal screen, while scanf waits for the user to type something on the keyboard and press Enter.",
        "why": "Programs that only use hardcoded values can only solve one single problem. By asking the user for input with scanf, your program becomes interactive and can calculate results for any input values the user provides.",
        "analogy": "Imagine a waiter at a restaurant. When the waiter brings your food plate and places it on your table, that is printf (output to display). When the waiter writes down your order on a notepad, that is scanf (input reading into memory).",
        "concept": "How scanf works:\n1. scanf scans characters typed by the user from standard input.\n2. It parses the characters according to the format specifier (e.g. %d parses digits into an integer).\n3. The address-of operator (&): Tells scanf WHERE in computer memory (RAM address) to save the entered value.\n   - For regular variables (int, float, char), you MUST write &variable.\n   - For string character arrays, the array name already represents a memory address, so & is omitted.",
        "codeExplanation": [
          {
            "line": "int age = 0;",
            "explanation": "Initializes variable age to zero to prevent garbage reads."
          },
          {
            "line": "printf(\"Enter your age...\");",
            "explanation": "Displays a friendly prompt asking the user for input."
          },
          {
            "line": "scanf(\"%d %f\", &age, &height);",
            "explanation": "Reads integer and float from keyboard into the memory addresses &age and &height."
          },
          {
            "line": "printf(\"You are %d years old...\", age, height);",
            "explanation": "Prints formatted output using values retrieved from age and height."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "printf(\"...\", args)",
            "meaning": "Formats and writes text to standard output"
          },
          {
            "part": "scanf(\"...\", &var)",
            "meaning": "Reads formatted input from standard input and stores it at &var"
          },
          {
            "part": "&",
            "meaning": "Address-of operator — passes the memory location of the variable so scanf can write into it"
          },
          {
            "part": "%d, %f, %c, %s",
            "meaning": "Specifiers: %d (int), %f (float), %c (char), %s (string word)"
          }
        ],
        "outputExplanation": "When run interactively, the terminal displays the prompt, waits for typing, reads the inputs into age and height, and prints the formatted sentence.",
        "commonMistakes": [
          {
            "mistake": "Leaving off the & in scanf: scanf(\"%d\", age);",
            "fix": "scanf needs the memory address where the variable lives. Always pass &age (except for strings)."
          },
          {
            "mistake": "Adding a newline \\n inside scanf: scanf(\"%d\\n\", &age);",
            "fix": "Putting \\n in scanf tells C to wait for endless trailing whitespace, making the program appear frozen. Keep scanf strings clean: scanf(\"%d\", &age);."
          },
          {
            "mistake": "Typing letters when scanf expects %d for a number.",
            "fix": "This causes input matching failure. In serious software, check the return value of scanf (it returns the count of successful conversions)."
          }
        ],
        "keyPoints": [
          "printf sends text to stdout; scanf reads from stdin.",
          "Always use & with basic data types in scanf so it knows the memory address.",
          "Do NOT put \\n inside the scanf format string.",
          "Format specifier matching is critical: %d for int, %f for float, %lf for double in scanf.",
          "Strings (%s) read up to the first whitespace character."
        ],
        "quickSummary": "In simple words, printf is your program speaking to the user, and scanf is your program listening to what the user types into keyboard memory.",
        "practiceSet": [
          {
            "question": "Write a program to input the radius of a circle as a float and print its circumference (2 * 3.14159 * r).",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    float radius;\n    // Scan radius and print circumference\n    return 0;\n}",
            "hint": "Use float radius; scanf(\"%f\", &radius); and calculate 2 * 3.14159 * radius.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    float radius;\n    printf(\"Enter radius: \");\n    scanf(\"%f\", &radius);\n    float circumference = 2 * 3.14159 * radius;\n    printf(\"Circumference: %.2f\\n\", circumference);\n    return 0;\n}"
          },
          {
            "question": "Why do we need the & symbol in scanf(\"%d\", &num); but not in printf(\"%d\", num);?",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int num = 42;\n    printf(\"Value: %d, Address: %p\\n\", num, (void*)&num);\n    return 0;\n}",
            "hint": "printf needs the value; scanf needs the address in memory to write to.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    // printf only reads the value of num.\n    // scanf needs the memory address (&num) so it can directly store user input into RAM!\n    int num;\n    printf(\"Enter number: \");\n    scanf(\"%d\", &num);\n    printf(\"Stored %d at memory address %p\\n\", num, (void*)&num);\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "operators",
      "title": "6. Operators & Precedence",
      "summary": "Operators perform mathematical and logical computations on variables and values. Precedence rules decide which operator executes first.",
      "syntax": "// Arithmetic: +  -  *  /  %\n// Relational: ==  !=  >  <  >=  <=\n// Logical:    && (AND)  || (OR)  ! (NOT)\n// Assignment: =  +=  -=  *=  /=",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    int a = 10, b = 3;\n\n    printf(\"Quotient: %d\\n\", a / b);    // 10 / 3 = 3\n    printf(\"Remainder: %d\\n\", a % b);   // 10 % 3 = 1\n\n    int score = 85;\n    int isPassed = (score >= 40) && (score <= 100);\n    printf(\"Passed: %d\\n\", isPassed);   // 1 means True in C\n\n    return 0;\n}",
      "expectedOutput": "Quotient: 3\nRemainder: 1\nPassed: 1",
      "commonMistake": "Confusing assignment (=) with equality comparison (==): writing if (x = 5) instead of if (x == 5).",
      "practice": {
        "question": "Write a program to check if an integer is even or odd using the modulus (%) operator.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int num = 17;\n    // Check if num is even or odd\n    return 0;\n}",
        "hint": "An even number leaves remainder 0 when divided by 2: (num % 2 == 0).",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    int num = 17;\n    if (num % 2 == 0) {\n        printf(\"%d is Even\\n\", num);\n    } else {\n        printf(\"%d is Odd\\n\", num);\n    }\n    return 0;\n}"
      },
      "explanation": {
        "intro": "An operator is a special symbol that tells the computer to perform specific mathematical, comparison, or logical actions on one or more pieces of data (called operands).",
        "why": "Without operators, a program could never calculate a total bill, compare whether one number is larger than another, or make smart decisions.",
        "analogy": "Think of basic math symbols (+, -, x, ÷) you learned in primary school. If you write 5 + 3, the \"+\" is the operator that tells your brain to combine the two numbers into 8.",
        "concept": "Categories of C operators:\n1. Arithmetic Operators: +, -, *, / (division), % (modulo/remainder). Modulo gives the leftover remainder after integer division (10 % 3 is 1).\n2. Relational Operators: Compare two values and produce 1 (true) or 0 (false). Examples: == (equals), != (not equals), >, <, >=, <=.\n3. Logical Operators: Combine multiple conditions:\n   - && (Logical AND): True only if both sides are true.\n   - || (Logical OR): True if at least one side is true.\n   - ! (Logical NOT): Flips true to false, and false to true.\n4. Increment/Decrement: ++x (pre-increment), x++ (post-increment), --x, x--.\n5. Precedence: Multiplication and division happen before addition and subtraction. Parentheses () override any default order.",
        "codeExplanation": [
          {
            "line": "int a = 10, b = 3;",
            "explanation": "Initializes two integer operands."
          },
          {
            "line": "printf(\"Quotient: %d\\n\", a / b);",
            "explanation": "Performs integer division: 10 / 3 evaluates to 3 (decimal is truncated)."
          },
          {
            "line": "printf(\"Remainder: %d\\n\", a % b);",
            "explanation": "Modulus operator calculates integer remainder: 10 divided by 3 gives remainder 1."
          },
          {
            "line": "(score >= 40) && (score <= 100)",
            "explanation": "Evaluates logical AND: both conditions are true (1 && 1), resulting in 1 (True)."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "%",
            "meaning": "Modulus operator: calculates integer remainder (only works on integers)"
          },
          {
            "part": "==",
            "meaning": "Equality comparison operator: checks if left equals right (returns 1 or 0)"
          },
          {
            "part": "=",
            "meaning": "Assignment operator: stores right side value into left side variable"
          },
          {
            "part": "&&",
            "meaning": "Logical AND: true only when both conditions evaluate to true"
          },
          {
            "part": "||",
            "meaning": "Logical OR: true if either condition evaluates to true"
          }
        ],
        "outputExplanation": "10 divided by 3 yields integer quotient 3 and remainder 1. The score condition evaluates to 1 because 85 is between 40 and 100.",
        "commonMistakes": [
          {
            "mistake": "Using = instead of ==: if (x = 5) which assigns 5 to x and always evaluates to true.",
            "fix": "Use == for comparison: if (x == 5)."
          },
          {
            "mistake": "Applying % on float or double numbers: float r = 5.5 % 2;",
            "fix": "The % operator only works on integer operands. For floating-point remainder, use fmod() from <math.h>."
          },
          {
            "mistake": "Assuming C has a built-in boolean keyword without including <stdbool.h>.",
            "fix": "In pure C, 0 means false and any non-zero number means true. Include <stdbool.h> if you want to write bool, true, and false."
          }
        ],
        "keyPoints": [
          "The % operator returns the remainder of integer division.",
          "= is for storing values; == is for comparing values.",
          "In C, 0 represents False and any non-zero integer represents True.",
          "&& requires all conditions to be true; || requires at least one.",
          "Parentheses () have the highest priority and should be used to make complex formulas clear."
        ],
        "quickSummary": "In simple words, operators are the verbs of programming—they add, subtract, compare, and connect conditions so your program can compute and decide.",
        "practiceSet": [
          {
            "question": "What is the value of: int x = 5 + 2 * 3;?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int x = 5 + 2 * 3;\n    printf(\"x = %d\\n\", x);\n    return 0;\n}",
            "hint": "Multiplication has higher precedence than addition.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    // 2 * 3 = 6; 5 + 6 = 11\n    int x = 5 + 2 * 3;\n    printf(\"x = %d\\n\", x);\n    return 0;\n}"
          },
          {
            "question": "Write a program to demonstrate logical AND (&&) by checking if a number is between 10 and 50 inclusive.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int val = 35;\n    // Check if 10 <= val <= 50\n    return 0;\n}",
            "hint": "Use (val >= 10) && (val <= 50).",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int val = 35;\n    if (val >= 10 && val <= 50) {\n        printf(\"%d is within range [10, 50]\\n\", val);\n    }\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "conditionals",
      "title": "7. Conditional Statements: if, else, switch",
      "summary": "Conditionals allow your program to make decisions and execute different blocks of code depending on whether a test condition is true or false.",
      "syntax": "if (condition) {\n    // runs if condition is true\n} else if (other_condition) {\n    // runs if other_condition is true\n} else {\n    // runs if all above are false\n}",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    int marks = 78;\n\n    if (marks >= 90) {\n        printf(\"Grade: A+\\n\");\n    } else if (marks >= 75) {\n        printf(\"Grade: A\\n\");\n    } else if (marks >= 50) {\n        printf(\"Grade: B\\n\");\n    } else {\n        printf(\"Grade: Needs Improvement\\n\");\n    }\n\n    return 0;\n}",
      "expectedOutput": "Grade: A",
      "commonMistake": "Forgetting the break statement in a switch case, causing execution to \"fall through\" into the next case unintentionally.",
      "practice": {
        "question": "Write an if-else program that checks if a number is positive, negative, or zero.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int n = -15;\n    // Check if n is positive, negative, or zero\n    return 0;\n}",
        "hint": "Use if (n > 0), else if (n < 0), and else.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    int n = -15;\n    if (n > 0) {\n        printf(\"%d is Positive\\n\", n);\n    } else if (n < 0) {\n        printf(\"%d is Negative\\n\", n);\n    } else {\n        printf(\"Number is Zero\\n\");\n    }\n    return 0;\n}"
      },
      "explanation": {
        "intro": "Conditional statements give your program decision-making intelligence. They test whether a condition is true or false, and then choose which path of code to take.",
        "why": "In the real world, actions depend on conditions: \"If it is raining, take an umbrella; otherwise, wear sunglasses.\" Without conditionals, a program could only execute the same straight sequence every single run.",
        "analogy": "Think of a traffic signal. If the light is Green, cars drive. If the light is Yellow, cars slow down. If the light is Red, cars stop. The signal chooses one specific action based on the current state.",
        "concept": "Types of conditional statements in C:\n1. if statement: Runs code block only if its condition evaluates to true (non-zero).\n2. if-else statement: Provides an alternative branch when the condition is false.\n3. else if ladder: Tests multiple conditions in order; the first true condition executes and the rest are skipped.\n4. switch statement: Compares one integer or character variable against multiple fixed values (cases). Always end each case with break to avoid falling into subsequent cases.",
        "codeExplanation": [
          {
            "line": "int marks = 78;",
            "explanation": "Initializes test score."
          },
          {
            "line": "if (marks >= 90)",
            "explanation": "Evaluates first condition: 78 >= 90 is false, so moves to the next branch."
          },
          {
            "line": "else if (marks >= 75)",
            "explanation": "Evaluates second condition: 78 >= 75 is true! Code enters this block."
          },
          {
            "line": "printf(\"Grade: A\\n\");",
            "explanation": "Prints Grade: A to console."
          },
          {
            "line": "else ...",
            "explanation": "All subsequent else-if and else branches are skipped because a match was found."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "if (condition)",
            "meaning": "Evaluates condition in parentheses; proceeds inside { } if true"
          },
          {
            "part": "else if (...)",
            "meaning": "Checked only if previous if conditions evaluated to false"
          },
          {
            "part": "else",
            "meaning": "Default catch-all block that runs if none of the preceding conditions were true"
          },
          {
            "part": "switch(var)",
            "meaning": "Jumps directly to the matching case label based on integer or char value"
          },
          {
            "part": "break;",
            "meaning": "Terminates the switch block so execution does not leak into other cases"
          }
        ],
        "outputExplanation": "Since 78 is not >= 90, the first branch fails. The next test 78 >= 75 is true, so \"Grade: A\" is printed and the rest of the ladder is skipped.",
        "commonMistakes": [
          {
            "mistake": "Putting a semicolon immediately after if: if (marks >= 50); { printf(\"Pass\"); }",
            "fix": "A semicolon after if creates an empty statement, meaning the block { printf(\"Pass\"); } will ALWAYS execute regardless of marks."
          },
          {
            "mistake": "Forgetting break in switch cases, causing code in subsequent cases to run unexpectedly.",
            "fix": "Add break; at the end of each case block unless you intentionally want a fall-through behavior."
          },
          {
            "mistake": "Using strings or float numbers inside switch(x): switch (3.14)",
            "fix": "In C, switch only works with integer and character types (int, char, enum)."
          }
        ],
        "keyPoints": [
          "if tests a boolean expression; runs block if non-zero.",
          "else provides a fallback when the condition is false.",
          "Never put a semicolon directly after the if (...) condition.",
          "switch is cleaner than multiple if-else when testing one variable against constant integer values.",
          "Every case in a switch should usually terminate with break."
        ],
        "quickSummary": "In simple words, conditionals are forks in the road for your code. They inspect a condition and decide whether your program turns left, turns right, or takes the default path.",
        "practiceSet": [
          {
            "question": "Write a switch statement that takes a day number (1 for Monday to 7 for Sunday) and prints the day name.",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int day = 3;\n    // Write switch statement for day\n    return 0;\n}",
            "hint": "Use switch(day) with cases 1 through 7 and break after each.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int day = 3;\n    switch (day) {\n        case 1: printf(\"Monday\\n\"); break;\n        case 2: printf(\"Tuesday\\n\"); break;\n        case 3: printf(\"Wednesday\\n\"); break;\n        case 4: printf(\"Thursday\\n\"); break;\n        case 5: printf(\"Friday\\n\"); break;\n        case 6: printf(\"Saturday\\n\"); break;\n        case 7: printf(\"Sunday\\n\"); break;\n        default: printf(\"Invalid Day\\n\"); break;\n    }\n    return 0;\n}"
          },
          {
            "question": "Check if a given year is a leap year in C using conditional statements.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int year = 2024;\n    // Check if year is leap year: divisible by 4 and (not 100 or divisible by 400)\n    return 0;\n}",
            "hint": "A leap year is divisible by 4, except century years which must be divisible by 400.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int year = 2024;\n    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {\n        printf(\"%d is a Leap Year\\n\", year);\n    } else {\n        printf(\"%d is NOT a Leap Year\\n\", year);\n    }\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "loops",
      "title": "8. Iteration & Loops: for, while, do-while",
      "summary": "Loops repeat a block of code multiple times until a stopping condition is met, eliminating repetitive manual code.",
      "syntax": "// For loop:\nfor (initialization; condition; increment) {\n    // code\n}\n\n// While loop:\nwhile (condition) {\n    // code\n}\n\n// Do-while loop:\ndo {\n    // code (guaranteed at least once)\n} while (condition);",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    printf(\"For loop (1 to 5):\\n\");\n    for (int i = 1; i <= 5; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n\n    printf(\"While loop (countdown):\\n\");\n    int count = 3;\n    while (count > 0) {\n        printf(\"%d... \", count);\n        count--;\n    }\n    printf(\"Go!\\n\");\n    return 0;\n}",
      "expectedOutput": "For loop (1 to 5):\n1 2 3 4 5 \nWhile loop (countdown):\n3... 2... 1... Go!",
      "commonMistake": "Forgetting to increment or change the loop counter inside a while loop, resulting in an infinite loop that freezes your program.",
      "practice": {
        "question": "Write a for loop to calculate the sum of numbers from 1 to 10.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int sum = 0;\n    // Loop from 1 to 10 and accumulate sum\n    return 0;\n}",
        "hint": "Use for (int i = 1; i <= 10; i++) and do sum += i; inside.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    int sum = 0;\n    for (int i = 1; i <= 10; i++) {\n        sum += i;\n    }\n    printf(\"Sum from 1 to 10 is: %d\\n\", sum);\n    return 0;\n}"
      },
      "explanation": {
        "intro": "A loop is a programming construct that repeats a specific block of instructions automatically until a certain condition becomes false.",
        "why": "If you need to print numbers from 1 to 1000, writing 1000 separate printf statements would be tedious, error-prone, and unmaintainable. Loops let you accomplish that task in just three lines of clean code.",
        "analogy": "Think of running laps around a sports field. Your coach tells you: \"Start at lap 1, keep running as long as laps <= 5, and add 1 lap every time you cross the finish line.\" That is exactly how a for loop works.",
        "concept": "The three loops in C:\n1. for loop: Best when you know in advance how many times to repeat (e.g. exactly 10 times). Contains initialization, condition, and increment in one neat line.\n2. while loop: Best when repeating based on a condition where the number of cycles is not known upfront (e.g. repeat until user types -1). Checks condition BEFORE running.\n3. do-while loop: Guarantees that the code body runs AT LEAST ONCE because the condition is checked at the very end.\nLoop control keywords:\n- break: Instantly exits the entire loop.\n- continue: Skips the rest of the current iteration and jumps to the next cycle.",
        "codeExplanation": [
          {
            "line": "for (int i = 1; i <= 5; i++)",
            "explanation": "Initializes counter i=1; tests if i<=5; increments i after each cycle."
          },
          {
            "line": "printf(\"%d \", i);",
            "explanation": "Prints current loop counter value followed by a space."
          },
          {
            "line": "while (count > 0)",
            "explanation": "Evaluates count > 0 before entering the loop body."
          },
          {
            "line": "count--;",
            "explanation": "Decrements count by 1 so the loop eventually reaches 0 and terminates."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "for (init; cond; step)",
            "meaning": "Loop header containing startup, stop test, and counter update"
          },
          {
            "part": "while (condition)",
            "meaning": "Entry-controlled loop: condition is evaluated before every single iteration"
          },
          {
            "part": "do { ... } while (...);",
            "meaning": "Exit-controlled loop: body runs first, condition is checked at the end (ends with semicolon)"
          },
          {
            "part": "break;",
            "meaning": "Immediately terminates the nearest enclosing loop"
          },
          {
            "part": "continue;",
            "meaning": "Skips the remainder of the current loop cycle and advances to the next step"
          }
        ],
        "outputExplanation": "The for loop prints integers from 1 up to 5 on one line. The while loop counts down from 3 to 1 and then prints \"Go!\".",
        "commonMistakes": [
          {
            "mistake": "Accidentally placing a semicolon after the loop header: for (int i = 0; i < 5; i++); { printf(\"%d\", i); }",
            "fix": "The semicolon terminates the loop immediately with an empty body, and the braces run only once afterwards."
          },
          {
            "mistake": "Creating an infinite loop by forgetting count++ or count-- inside a while loop.",
            "fix": "Make sure at least one variable inside the loop body changes so the condition eventually becomes false."
          },
          {
            "mistake": "Off-by-one errors: writing i < 5 when you intended to include 5 (i <= 5).",
            "fix": "Carefully check whether your loop should stop before or after the boundary number."
          }
        ],
        "keyPoints": [
          "for loop combines initialization, condition, and step in one line.",
          "while loop checks condition first; if initially false, it never runs.",
          "do-while loop is guaranteed to run at least once.",
          "break exits the loop immediately; continue skips to the next cycle.",
          "Always ensure the loop variable updates toward the stopping condition."
        ],
        "quickSummary": "In simple words, loops are automatic repeating machines that run a block of code over and over until a stop signal is reached.",
        "practiceSet": [
          {
            "question": "Write a C program to print the multiplication table of 7 from 7 x 1 to 7 x 10.",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int num = 7;\n    // Loop from 1 to 10 and print table\n    return 0;\n}",
            "hint": "Use a for loop from 1 to 10 and print 7 * i.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int num = 7;\n    for (int i = 1; i <= 10; i++) {\n        printf(\"%d x %d = %d\\n\", num, i, num * i);\n    }\n    return 0;\n}"
          },
          {
            "question": "Demonstrate do-while by printing numbers from 1 to 3.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int i = 1;\n    // Use do-while loop\n    return 0;\n}",
            "hint": "do { printf(\"%d \", i); i++; } while (i <= 3);",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int i = 1;\n    do {\n        printf(\"%d \", i);\n        i++;\n    } while (i <= 3);\n    printf(\"\\n\");\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "functions",
      "title": "9. Functions & Parameter Passing",
      "summary": "Functions are reusable blocks of code designed to perform a specific task, breaking large programs into modular, readable pieces.",
      "syntax": "return_type function_name(parameter_list) {\n    // function body\n    return value;\n}",
      "codeExample": "#include <stdio.h>\n\n// Function declaration and definition\nint calculateArea(int length, int width) {\n    int area = length * width;\n    return area;\n}\n\nint main(void) {\n    int roomLength = 12;\n    int roomWidth = 10;\n\n    int totalArea = calculateArea(roomLength, roomWidth);\n    printf(\"Total Area: %d sq ft\\n\", totalArea);\n    return 0;\n}",
      "expectedOutput": "Total Area: 120 sq ft",
      "commonMistake": "Forgetting to specify the return type of a function, or not returning a value from a non-void function.",
      "practice": {
        "question": "Write a function called findMax(int a, int b) that returns the larger of two numbers.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\n// Declare and define findMax here\n\nint main(void) {\n    printf(\"Max: %d\\n\", findMax(25, 42));\n    return 0;\n}",
        "hint": "Use if (a > b) return a; else return b;.",
        "solution": "#include <stdio.h>\n\nint findMax(int a, int b) {\n    if (a > b) return a;\n    return b;\n}\n\nint main(void) {\n    printf(\"Max: %d\\n\", findMax(25, 42));\n    return 0;\n}"
      },
      "explanation": {
        "intro": "A function is a self-contained, named block of code that performs a specific task. You can \"call\" (invoke) it whenever you need that task performed, passing in data and getting a result back.",
        "why": "Without functions, programs would be thousands of lines of copy-pasted code. Functions prevent repetition (DRY — Don't Repeat Yourself), make code easy to test, and let teams collaborate on different parts of an application.",
        "analogy": "Think of a juice blender. You put oranges and sugar in (parameters/arguments), press a button (function call), the blender runs its internal motor (function body), and pours out fresh orange juice (return value).",
        "concept": "Key parts of working with functions:\n1. Function Prototype (Declaration): Tells the compiler the function's name, return type, and parameter types before main uses it.\n2. Function Definition: The actual implementation code inside curly braces.\n3. Parameters vs Arguments:\n   - Parameters: The variable placeholders declared in the function header (e.g. int length).\n   - Arguments: The actual values passed when calling the function (e.g. roomLength).\n4. Call by Value: By default, C passes copies of argument values. Modifying a parameter inside the function does not change the original variable outside.",
        "codeExplanation": [
          {
            "line": "int calculateArea(int length, int width)",
            "explanation": "Defines a function accepting two integer inputs and returning an integer."
          },
          {
            "line": "int area = length * width;",
            "explanation": "Calculates the rectangle area."
          },
          {
            "line": "return area;",
            "explanation": "Sends the calculated number back to the caller."
          },
          {
            "line": "int totalArea = calculateArea(roomLength, roomWidth);",
            "explanation": "Calls calculateArea with arguments 12 and 10, receiving 120."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "int calculateArea(...)",
            "meaning": "Function header: returns an integer value"
          },
          {
            "part": "(int length, int width)",
            "meaning": "Formal parameters: inputs accepted by the function"
          },
          {
            "part": "return area;",
            "meaning": "Sends the computed value back to where the function was called"
          },
          {
            "part": "void",
            "meaning": "Special keyword used when a function takes no parameters or returns no value"
          }
        ],
        "outputExplanation": "calculateArea(12, 10) calculates 12 * 10 = 120 and returns it. main stores 120 into totalArea and prints it.",
        "commonMistakes": [
          {
            "mistake": "Calling a function defined below main() without a function prototype declared above main().",
            "fix": "In C, declare the function prototype (e.g. int calculateArea(int l, int w);) above main() if the definition is below."
          },
          {
            "mistake": "Trying to change the caller's variable directly using call-by-value.",
            "fix": "Remember C passes copies of values. To modify the original variable, pass its pointer (call-by-reference)."
          },
          {
            "mistake": "Missing a return statement in a function declared with a non-void return type.",
            "fix": "Every non-void function must execute a return statement returning the correct data type."
          }
        ],
        "keyPoints": [
          "Functions make code modular, reusable, and readable.",
          "C passes arguments by value (copies of data) by default.",
          "Use void as the return type if the function does not return any value.",
          "A function must be declared or defined before it is called in the file.",
          "Local variables declared inside a function are destroyed when the function exits."
        ],
        "quickSummary": "In simple words, a function is a mini-program inside your program with its own inputs, internal steps, and output result that you can reuse over and over.",
        "practiceSet": [
          {
            "question": "Write a function isEven(int n) that returns 1 if n is even, and 0 if n is odd.",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\n// Define isEven function\n\nint main(void) {\n    printf(\"Is 8 even? %d\\n\", isEven(8));\n    return 0;\n}",
            "hint": "Use n % 2 == 0.",
            "solution": "#include <stdio.h>\n\nint isEven(int n) {\n    if (n % 2 == 0) return 1;\n    return 0;\n}\n\nint main(void) {\n    printf(\"Is 8 even? %d\\n\", isEven(8));\n    printf(\"Is 7 even? %d\\n\", isEven(7));\n    return 0;\n}"
          },
          {
            "question": "Write a recursive function factorial(int n) that calculates the factorial of a positive integer.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\n// Define recursive factorial\n\nint main(void) {\n    printf(\"Factorial of 5: %d\\n\", factorial(5));\n    return 0;\n}",
            "hint": "Base case: if (n <= 1) return 1; Recursive step: return n * factorial(n - 1);.",
            "solution": "#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main(void) {\n    printf(\"Factorial of 5: %d\\n\", factorial(5));\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "arrays",
      "title": "10. Arrays: 1D & Multidimensional",
      "summary": "An array is a collection of elements of the same data type stored at contiguous (adjacent) locations in memory, accessed by zero-based indices.",
      "syntax": "type array_name[size];\ntype matrix[rows][cols];",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    // Declare and initialize an array of 5 exam marks\n    int marks[5] = {85, 92, 78, 90, 88};\n\n    printf(\"First mark (index 0): %d\\n\", marks[0]);\n    printf(\"Third mark (index 2): %d\\n\", marks[2]);\n\n    // Calculate sum of all marks\n    int sum = 0;\n    for (int i = 0; i < 5; i++) {\n        sum += marks[i];\n    }\n    printf(\"Average mark: %.1f\\n\", (float)sum / 5);\n    return 0;\n}",
      "expectedOutput": "First mark (index 0): 85\nThird mark (index 2): 78\nAverage mark: 86.6",
      "commonMistake": "Accessing an index outside array bounds (e.g. marks[5] in a size-5 array). C does NOT check array bounds and accesses dangerous garbage memory.",
      "practice": {
        "question": "Write a program to find the largest number in an array of 5 integers.",
        "difficulty": "Medium",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int arr[5] = {23, 78, 45, 92, 56};\n    // Find and print the largest number\n    return 0;\n}",
        "hint": "Initialize max = arr[0] and loop through the rest, updating max whenever arr[i] > max.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    int arr[5] = {23, 78, 45, 92, 56};\n    int max = arr[0];\n    for (int i = 1; i < 5; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    printf(\"Largest element: %d\\n\", max);\n    return 0;\n}"
      },
      "explanation": {
        "intro": "An array is a fixed-size collection of items of the SAME data type stored side-by-side in continuous computer memory. Instead of creating 50 separate variables for 50 students, you create a single array with 50 slots.",
        "why": "When managing lists of data—such as scores, temperatures, or price lists—creating individual variables like score1, score2, ... score50 is impossible to manage. With an array, you can process thousands of items using a simple for loop.",
        "analogy": "Imagine an apartment building with identical rooms numbered 0, 1, 2, 3, 4 along a single corridor. Each room holds one tenant (element). You can visit any room instantly if you know its room number (index).",
        "concept": "Important properties of C arrays:\n1. Zero-Based Indexing: The first item is at index 0, the second at index 1, and the last item in a size N array is at index (N - 1).\n2. Contiguous Memory: If marks[0] is at memory address 1000 and an int is 4 bytes, marks[1] is at 1004, marks[2] at 1008, etc.\n3. No Bounds Checking: C does NOT stop you from reading marks[10] in an array of size 5. Doing so reads undefined memory or crashes your program with a Segmentation Fault!\n4. Multidimensional Arrays: Arrays with multiple dimensions, like matrix[3][3] representing a 3x3 grid of rows and columns.",
        "codeExplanation": [
          {
            "line": "int marks[5] = {85, 92, 78, 90, 88};",
            "explanation": "Allocates 5 contiguous 4-byte integers (20 bytes total) and initializes values."
          },
          {
            "line": "marks[0]",
            "explanation": "Subscript access: retrieves first element at offset 0 (85)."
          },
          {
            "line": "marks[2]",
            "explanation": "Subscript access: retrieves third element at offset 2 (78)."
          },
          {
            "line": "for (int i = 0; i < 5; i++)",
            "explanation": "Loops through indices 0 to 4 to accumulate the total marks."
          },
          {
            "line": "(float)sum / 5",
            "explanation": "Casts sum to float to avoid integer truncation during division."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "int marks[5]",
            "meaning": "Declares an array of 5 integers (indices 0 to 4)"
          },
          {
            "part": "{85, 92, ...}",
            "meaning": "Initializer list providing starting values for the elements"
          },
          {
            "part": "marks[i]",
            "meaning": "Subscript operator: accesses the element at index i"
          },
          {
            "part": "int matrix[3][3]",
            "meaning": "2D array with 3 rows and 3 columns"
          }
        ],
        "outputExplanation": "Index 0 is 85, index 2 is 78. The sum of 85+92+78+90+88 is 433. 433 / 5 as float gives average 86.6.",
        "commonMistakes": [
          {
            "mistake": "Trying to access array[N] where array has size N (e.g. marks[5] for size 5).",
            "fix": "Remember indices run from 0 to N - 1. For size 5, valid indices are strictly 0, 1, 2, 3, 4."
          },
          {
            "mistake": "Assigning one entire array to another with the = operator: arr2 = arr1;",
            "fix": "In C, arrays cannot be copied directly with =. You must copy elements one by one using a loop."
          },
          {
            "mistake": "Forgetting to specify array size or provide an initializer list when declaring.",
            "fix": "You must either give the size: int a[5]; or provide values so C infers the size: int a[] = {1, 2, 3};."
          }
        ],
        "keyPoints": [
          "Array indexing always starts at 0.",
          "Array elements are stored in contiguous memory addresses.",
          "C does not perform bounds checking—avoid buffer overflows.",
          "The array name without brackets acts as a pointer to the first element (&arr[0]).",
          "Use loops to iterate, search, and calculate totals across array elements."
        ],
        "quickSummary": "In simple words, an array is a row of numbered lockers in memory, all holding the same type of data, easily accessed by their locker number (index starting at 0).",
        "practiceSet": [
          {
            "question": "If int arr[4] = {10, 20, 30, 40};, what is the value of arr[3]?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int arr[4] = {10, 20, 30, 40};\n    printf(\"Value at index 3: %d\\n\", arr[3]);\n    return 0;\n}",
            "hint": "Index 3 is the 4th element.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int arr[4] = {10, 20, 30, 40};\n    // Indices are: arr[0]=10, arr[1]=20, arr[2]=30, arr[3]=40\n    printf(\"arr[3] = %d\\n\", arr[3]);\n    return 0;\n}"
          },
          {
            "question": "Write a program to reverse an array of 5 integers and print the reversed elements.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int arr[5] = {1, 2, 3, 4, 5};\n    // Print in reverse order\n    return 0;\n}",
            "hint": "Loop backward from index 4 down to index 0.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int arr[5] = {1, 2, 3, 4, 5};\n    printf(\"Reversed: \");\n    for (int i = 4; i >= 0; i--) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "strings",
      "title": "11. Strings & string.h Library",
      "summary": "In C, strings are null-terminated character arrays ending with the special null character \"\\0\", manipulated using string.h functions.",
      "syntax": "char str[] = \"Hello\";       // includes invisible '\\0' at the end\n#include <string.h>          // strlen, strcpy, strcat, strcmp",
      "codeExample": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char greeting[20] = \"Hello\";\n    char name[] = \"Student\";\n\n    // Concatenate name onto greeting\n    strcat(greeting, \", \");\n    strcat(greeting, name);\n\n    printf(\"Message: %s\\n\", greeting);\n    printf(\"Length: %zu characters\\n\", strlen(greeting));\n    return 0;\n}",
      "expectedOutput": "Message: Hello, Student\nLength: 14 characters",
      "commonMistake": "Making the destination array too small for strcat or strcpy, which overflows into adjacent memory and corrupts data.",
      "practice": {
        "question": "Write a program to compare two strings using strcmp and tell if they are identical.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char s1[] = \"apple\";\n    char s2[] = \"apple\";\n    // Compare s1 and s2 using strcmp\n    return 0;\n}",
        "hint": "strcmp(s1, s2) returns 0 when both strings are identical.",
        "solution": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char s1[] = \"apple\";\n    char s2[] = \"apple\";\n    if (strcmp(s1, s2) == 0) {\n        printf(\"Strings are identical\\n\");\n    } else {\n        printf(\"Strings are different\\n\");\n    }\n    return 0;\n}"
      },
      "explanation": {
        "intro": "In C, there is no special \"string\" primitive data type like in Python or Java. Instead, a string is simply an array of char characters terminated by a special invisible null byte written as '\\0' (ASCII value 0).",
        "why": "Programs constantly handle text—usernames, passwords, addresses, and messages. Understanding how C handles strings as memory arrays is the foundation of secure programming and prevents buffer overflow bugs.",
        "analogy": "Imagine a freight train. Each carriage holds one letter: ['H']-['e']-['l']-['l']-['o']. The very last carriage is a special red caboose ['\\0'] that signals to the station master that the train has ended. Without that red caboose, the computer would keep reading tracks forever.",
        "concept": "Core rules for C strings:\n1. Null Terminator ('\\0'): Every string MUST end with '\\0'. Without it, functions like printf(\"%s\") do not know where to stop reading and will print garbage characters until a zero byte happens to be hit.\n2. Extra Byte Needed: To store a word of 5 letters like \"India\", you need an array of size at least 6 (5 letters + 1 null terminator).\n3. The <string.h> Library:\n   - strlen(s): Returns length of string (does NOT count '\\0').\n   - strcpy(dest, src): Copies src into dest.\n   - strcat(dest, src): Appends src to the end of dest.\n   - strcmp(s1, s2): Compares two strings alphabetically; returns 0 if they are equal.",
        "codeExplanation": [
          {
            "line": "char greeting[20] = \"Hello\";",
            "explanation": "Allocates a 20-character buffer initialized with \"Hello\\0\"."
          },
          {
            "line": "char name[] = \"Student\";",
            "explanation": "Allocates 8 bytes to fit 7 letters plus the terminating '\\0'."
          },
          {
            "line": "strcat(greeting, \", \");",
            "explanation": "Appends comma and space to the greeting buffer."
          },
          {
            "line": "strcat(greeting, name);",
            "explanation": "Appends \"Student\" onto greeting, making it \"Hello, Student\"."
          },
          {
            "line": "strlen(greeting)",
            "explanation": "Counts visible characters up to '\\0' (14 letters)."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "'\\0'",
            "meaning": "Null terminator character marking the logical end of a string in memory"
          },
          {
            "part": "strlen(s)",
            "meaning": "Computes character count up to but excluding the null terminator"
          },
          {
            "part": "strcpy(dest, src)",
            "meaning": "Copies characters from src into dest including '\\0'"
          },
          {
            "part": "strcmp(s1, s2)",
            "meaning": "Returns 0 if s1 == s2, negative if s1 < s2, positive if s1 > s2"
          },
          {
            "part": "%s",
            "meaning": "Format specifier for printing or reading a string"
          }
        ],
        "outputExplanation": "strcat combines \"Hello\", \", \", and \"Student\" into the greeting buffer. The resulting text is \"Hello, Student\", containing 14 visible characters.",
        "commonMistakes": [
          {
            "mistake": "Comparing strings with ==: if (str1 == str2)",
            "fix": "In C, == on arrays compares their memory addresses, NOT their text! Always use strcmp(str1, str2) == 0."
          },
          {
            "mistake": "Allocating array size equal to string length without room for '\\0': char s[5] = \"Hello\";",
            "fix": "\"Hello\" needs 6 bytes: 5 characters + 1 byte for '\\0'. Size must be at least 6."
          },
          {
            "mistake": "Using gets() to read strings with spaces.",
            "fix": "gets() is notoriously unsafe and removed from modern C because it can cause buffer overflows. Use fgets(str, sizeof(str), stdin) instead."
          }
        ],
        "keyPoints": [
          "Strings in C are character arrays terminated with '\\0'.",
          "Always reserve 1 extra byte for the null terminator.",
          "Never use == to compare strings; use strcmp() from <string.h>.",
          "strlen() counts characters up to '\\0', but does not count '\\0' itself.",
          "Use fgets() instead of scanf or gets() to safely read text with spaces."
        ],
        "quickSummary": "In simple words, a C string is just a row of letter characters that ends with a stop sign ('\\0'). You manipulate strings using functions from <string.h>.",
        "practiceSet": [
          {
            "question": "What is the length of \"Class12\" returned by strlen(), and how many bytes does it use in memory?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char text[] = \"Class12\";\n    printf(\"Length: %zu, Bytes: %zu\\n\", strlen(text), sizeof(text));\n    return 0;\n}",
            "hint": "strlen does not count '\\0', but memory storage includes '\\0'.",
            "solution": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char text[] = \"Class12\";\n    // strlen = 7, sizeof = 8 (including '\\0')\n    printf(\"Length: %zu, Bytes: %zu\\n\", strlen(text), sizeof(text));\n    return 0;\n}"
          },
          {
            "question": "Write a program to copy one string into another without using the strcpy library function.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    char source[] = \"Success\";\n    char destination[20];\n    // Copy manual loop\n    return 0;\n}",
            "hint": "Use a while loop copying s1[i] to s2[i] until s1[i] == '\\0', then append '\\0'.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    char source[] = \"Success\";\n    char destination[20];\n    int i = 0;\n    while (source[i] != '\\0') {\n        destination[i] = source[i];\n        i++;\n    }\n    destination[i] = '\\0'; // Crucial null terminator!\n    printf(\"Copied: %s\\n\", destination);\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "pointers",
      "title": "12. Pointers & Memory Addresses",
      "summary": "A pointer is a variable that stores the memory address of another variable, allowing direct memory manipulation and efficient data passing.",
      "syntax": "int *ptr;    // pointer declaration\nptr = &var;  // stores address of var\n*ptr = 20;   // dereference: accesses or modifies value at that address",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    int score = 50;\n    int *ptr = &score; // ptr holds memory address of score\n\n    printf(\"Value of score: %d\\n\", score);\n    printf(\"Memory address of score: %p\\n\", (void*)&score);\n    printf(\"Value held in pointer ptr: %p\\n\", (void*)ptr);\n    printf(\"Value pointed to by *ptr: %d\\n\", *ptr);\n\n    // Modify score using pointer\n    *ptr = 95;\n    printf(\"New value of score: %d\\n\", score);\n    return 0;\n}",
      "expectedOutput": "Value of score: 50\nMemory address of score: 0x7ffd5e3a8904\nValue held in pointer ptr: 0x7ffd5e3a8904\nValue pointed to by *ptr: 50\nNew value of score: 95",
      "commonMistake": "Dereferencing an uninitialized or NULL pointer (*ptr when ptr has no valid address), which causes an immediate Segmentation Fault crash.",
      "practice": {
        "question": "Write a function swap(int *a, int *b) that swaps two integers using pointers.",
        "difficulty": "Medium",
        "starterCode": "#include <stdio.h>\n\n// Complete the swap function using pointers\nvoid swap(int *a, int *b) {\n}\n\nint main(void) {\n    int x = 10, y = 20;\n    swap(&x, &y);\n    printf(\"x = %d, y = %d\\n\", x, y);\n    return 0;\n}",
        "hint": "Use a temporary int temp = *a; then *a = *b; and *b = temp;.",
        "solution": "#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main(void) {\n    int x = 10, y = 20;\n    swap(&x, &y);\n    printf(\"x = %d, y = %d\\n\", x, y);\n    return 0;\n}"
      },
      "explanation": {
        "intro": "A pointer is simply a variable whose value is the memory address of another variable in computer RAM. Instead of storing data like 42 or 'A', it stores a numerical address pointing to where that data lives.",
        "why": "Pointers are C's superpower. They allow functions to modify caller variables directly (call-by-reference), allow dynamic memory allocation at runtime (malloc), and enable fast traversal of data structures like linked lists and trees without copying huge amounts of data.",
        "analogy": "Imagine a friend asks where you live. Instead of moving your entire brick-and-mortar house to them, you write your home address on a piece of paper and hand it to them. That piece of paper with the address is a pointer.",
        "concept": "The two core pointer operators:\n1. Address-of operator (&): Returns the memory address where a variable is located (e.g. &score).\n2. Dereference / Value-at operator (*): Accesses the actual value stored at the address the pointer holds (e.g. *ptr).\nWhen you change *ptr = 95;, you are directly modifying the contents of the memory address, which changes the original score variable!\n\nPointer types must match: an int* must point to an int, because the compiler needs to know how many bytes to read when dereferencing.",
        "codeExplanation": [
          {
            "line": "int *ptr = &score;",
            "explanation": "Gets the memory address of score and stores it inside ptr."
          },
          {
            "line": "printf(\"%p\", (void*)&score);",
            "explanation": "Displays the hex memory address where score is stored in RAM."
          },
          {
            "line": "*ptr",
            "explanation": "Dereferences ptr: looks up the memory address and retrieves the integer stored there (50)."
          },
          {
            "line": "*ptr = 95;",
            "explanation": "Overwrites the memory at that address, updating score to 95 directly."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "int *ptr;",
            "meaning": "Declares a pointer variable named ptr that can store the address of an integer"
          },
          {
            "part": "&score",
            "meaning": "The address-of operator: yields the memory address where score lives in RAM"
          },
          {
            "part": "*ptr",
            "meaning": "Dereference operator: accesses the value living at the address stored in ptr"
          },
          {
            "part": "%p",
            "meaning": "Format specifier used with printf to display memory addresses in hexadecimal"
          }
        ],
        "outputExplanation": "The pointer holds the address of score (e.g. 0x7ffd5e3a8904). Dereferencing *ptr accesses score (50). Changing *ptr = 95 modifies score directly.",
        "commonMistakes": [
          {
            "mistake": "Using an uninitialized pointer: int *ptr; *ptr = 100; (Wild Pointer).",
            "fix": "ptr points to a random address in memory. Overwriting it can crash the OS or corrupt data. Always initialize pointers to &var or NULL."
          },
          {
            "mistake": "Confusing pointer declaration * with dereference *: int *p vs *p = 5.",
            "fix": "In declaration, * indicates the type is a pointer. In statements, * accesses the value at that address."
          },
          {
            "mistake": "Returning the address of a local variable from a function.",
            "fix": "Local variables are destroyed when a function finishes. Returning their address creates a dangling pointer."
          }
        ],
        "keyPoints": [
          "& gives the memory address of a variable.",
          "* dereferences a pointer to read or write the value at that address.",
          "Always initialize pointers to a valid address or NULL.",
          "Pointers allow functions to modify arguments (call-by-reference).",
          "Array names act like constant pointers to their first element."
        ],
        "quickSummary": "In simple words, a pointer is a piece of paper with a memory address written on it. Dereferencing it means walking to that address and opening the box.",
        "practiceSet": [
          {
            "question": "If int a = 10; int *p = &a; what does *p + 5 evaluate to?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int *p = &a;\n    printf(\"Result: %d\\n\", *p + 5);\n    return 0;\n}",
            "hint": "*p gets the value of a (10), then adds 5.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int *p = &a;\n    // *p is 10; 10 + 5 = 15\n    printf(\"Result: %d\\n\", *p + 5);\n    return 0;\n}"
          },
          {
            "question": "Demonstrate pointer arithmetic by navigating an array of 3 integers using a pointer.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    int arr[3] = {100, 200, 300};\n    int *p = arr;\n    // Print each element using *(p + i)\n    return 0;\n}",
            "hint": "*(p + i) is equivalent to arr[i].",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    int arr[3] = {100, 200, 300};\n    int *p = arr;\n    for (int i = 0; i < 3; i++) {\n        printf(\"Element %d: %d\\n\", i, *(p + i));\n    }\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "structures",
      "title": "13. Structures: struct",
      "summary": "A structure is a user-defined data type that groups related variables of different data types together under a single name.",
      "syntax": "struct Student {\n    char name[50];\n    int rollNumber;\n    float marks;\n};",
      "codeExample": "#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    char name[30];\n    int rollNumber;\n    float marks;\n};\n\nint main(void) {\n    struct Student s1;\n\n    strcpy(s1.name, \"Aarav Sharma\");\n    s1.rollNumber = 101;\n    s1.marks = 94.5;\n\n    printf(\"Student Details:\\n\");\n    printf(\"Name: %s\\n\", s1.name);\n    printf(\"Roll: %d\\n\", s1.rollNumber);\n    printf(\"Marks: %.1f\\n\", s1.marks);\n    return 0;\n}",
      "expectedOutput": "Student Details:\nName: Aarav Sharma\nRoll: 101\nMarks: 94.5",
      "commonMistake": "Forgetting the semicolon at the end of a struct definition closing brace: struct Box { int w; };.",
      "practice": {
        "question": "Define a struct Book with title, author, and price, and print one book record.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\n// Define struct Book here\n\nint main(void) {\n    // Create book and print details\n    return 0;\n}",
        "hint": "Use struct Book { char title[50]; float price; }; and dot operator to access members.",
        "solution": "#include <stdio.h>\n#include <string.h>\n\nstruct Book {\n    char title[50];\n    float price;\n};\n\nint main(void) {\n    struct Book b1;\n    strcpy(b1.title, \"Wings of Fire\");\n    b1.price = 299.0;\n    printf(\"Book: %s | Price: Rs. %.2f\\n\", b1.title, b1.price);\n    return 0;\n}"
      },
      "explanation": {
        "intro": "A structure (struct) is a custom, user-defined data type in C that lets you bundle together multiple related variables of different data types into one single package.",
        "why": "Arrays can only store items of the SAME type (all ints or all floats). But real-world entities have diverse properties: a student has a name (string), roll number (int), and marks (float). Structs let you represent these real-world objects naturally.",
        "analogy": "Think of an official Student ID Card. On one single physical card, you have a name, a photo, an admission number, a blood group, and an expiry date. The ID card is the struct, and each field is a member.",
        "concept": "Working with structures:\n1. Definition: Creates the blueprint (template). Does not allocate memory until an actual variable of that struct is declared. Must end with a semicolon (;).\n2. Declaration: struct Student s1; creates an instance of the struct in memory.\n3. The Dot Operator (.): Used to access members of a normal struct variable (s1.marks).\n4. The Arrow Operator (->): Used to access members through a POINTER to a struct (ptr->marks is shorthand for (*ptr).marks).\n5. typedef: Allows you to create a short alias so you don't have to keep writing struct Student every time.",
        "codeExplanation": [
          {
            "line": "struct Student { ... };",
            "explanation": "Defines the compound template with fields name, rollNumber, and marks."
          },
          {
            "line": "struct Student s1;",
            "explanation": "Declares an instance s1, allocating memory for all 3 members."
          },
          {
            "line": "strcpy(s1.name, \"Aarav Sharma\");",
            "explanation": "Copies the string into the character array member."
          },
          {
            "line": "s1.rollNumber = 101;",
            "explanation": "Dot operator accesses rollNumber member of s1."
          },
          {
            "line": "printf(\"Name: %s\\n\", s1.name);",
            "explanation": "Reads and displays the name member."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "struct Student { ... };",
            "meaning": "Blueprint definition defining the members and layout; semicolon is mandatory"
          },
          {
            "part": "s1.rollNumber",
            "meaning": "Dot operator: accesses a specific member inside struct variable s1"
          },
          {
            "part": "ptr->rollNumber",
            "meaning": "Arrow operator: accesses a member when working through a pointer to struct"
          },
          {
            "part": "typedef struct { ... } Student;",
            "meaning": "Creates a convenient type alias named Student"
          }
        ],
        "outputExplanation": "The members of s1 are populated with name, roll number, and marks, then printed cleanly line by line.",
        "commonMistakes": [
          {
            "mistake": "Leaving off the semicolon after the struct definition: struct Point { int x, y; } (missing ;).",
            "fix": "A struct definition is a type declaration and must always end with a semicolon after the closing brace: };."
          },
          {
            "mistake": "Assigning a string member directly with =: s1.name = \"Aarav\";",
            "fix": "s1.name is an array, not a pointer. You must use strcpy(s1.name, \"Aarav\"); to populate it."
          },
          {
            "mistake": "Using dot operator on a pointer to struct: ptr.rollNumber instead of ptr->rollNumber.",
            "fix": "Use the dot (.) on struct variables, and the arrow (->) on struct pointers."
          }
        ],
        "keyPoints": [
          "A struct bundles different data types under one name.",
          "Always place a semicolon after the struct closing brace: };.",
          "Use the dot (.) operator for regular struct variables.",
          "Use the arrow (->) operator when accessing members via a pointer.",
          "Structures can be nested inside other structures or used in arrays."
        ],
        "quickSummary": "In simple words, a struct is a custom blueprint that binds different pieces of information (like name, age, and grade) together into a single entity.",
        "practiceSet": [
          {
            "question": "What is the shorthand syntax for (*ptr).age when ptr is a pointer to a struct?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nstruct Person { int age; };\n\nint main(void) {\n    struct Person p = {18};\n    struct Person *ptr = &p;\n    // Print age using arrow operator\n    return 0;\n}",
            "hint": "It uses a minus sign and greater-than sign: ptr->age.",
            "solution": "#include <stdio.h>\n\nstruct Person { int age; };\n\nint main(void) {\n    struct Person p = {18};\n    struct Person *ptr = &p;\n    printf(\"Age: %d\\n\", ptr->age);\n    return 0;\n}"
          },
          {
            "question": "Write a program creating an array of 2 struct Student items and print both.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nstruct Student {\n    int roll;\n    int marks;\n};\n\nint main(void) {\n    // Declare array of 2 students and loop\n    return 0;\n}",
            "hint": "Use struct Student list[2] = {{1, 90}, {2, 85}}; with a loop.",
            "solution": "#include <stdio.h>\n\nstruct Student {\n    int roll;\n    int marks;\n};\n\nint main(void) {\n    struct Student list[2] = {{1, 90}, {2, 85}};\n    for (int i = 0; i < 2; i++) {\n        printf(\"Roll: %d, Marks: %d\\n\", list[i].roll, list[i].marks);\n    }\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "unions",
      "title": "14. Unions & Memory Overlapping",
      "summary": "A union is a user-defined type where all members share the same memory location, meaning only one member can hold a value at any given time.",
      "syntax": "union Data {\n    int i;\n    float f;\n    char str[20];\n};",
      "codeExample": "#include <stdio.h>\n\nunion Packet {\n    int intVal;\n    float floatVal;\n};\n\nint main(void) {\n    union Packet p;\n\n    p.intVal = 42;\n    printf(\"p.intVal: %d\\n\", p.intVal);\n\n    // Assigning floatVal overwrites the shared memory\n    p.floatVal = 3.14f;\n    printf(\"p.floatVal: %.2f\\n\", p.floatVal);\n    // intVal is now corrupted because memory is shared!\n    printf(\"p.intVal after float assignment: %d (corrupted)\\n\", p.intVal);\n\n    printf(\"Total memory size of union: %zu bytes\\n\", sizeof(union Packet));\n    return 0;\n}",
      "expectedOutput": "p.intVal: 42\np.floatVal: 3.14\np.intVal after float assignment: 1078523331 (corrupted)\nTotal memory size of union: 4 bytes",
      "commonMistake": "Expecting all members of a union to retain their values simultaneously like a struct. Writing to one member overwrites the others.",
      "practice": {
        "question": "What is the size of a union containing a char (1 byte), an int (4 bytes), and a double (8 bytes)?",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\nunion Test {\n    char c;\n    int i;\n    double d;\n};\n\nint main(void) {\n    // Print sizeof(union Test)\n    return 0;\n}",
        "hint": "The size of a union is determined by its largest member.",
        "solution": "#include <stdio.h>\n\nunion Test {\n    char c;\n    int i;\n    double d;\n};\n\nint main(void) {\n    printf(\"Size of union: %zu bytes\\n\", sizeof(union Test));\n    return 0;\n}"
      },
      "explanation": {
        "intro": "A union is a special user-defined data type in C that looks syntactically similar to a struct, but with one critical difference: all its members share the exact same memory location.",
        "why": "In memory-constrained environments (like microcontrollers or embedded systems), you may need a variable that can hold either an integer OR a float at different times, but never both at once. Unions save precious memory by reusing the same memory space.",
        "analogy": "Think of a single hotel room bed. A morning guest can sleep there, or an evening guest can sleep there, but both guests cannot sleep in the bed simultaneously. When the evening guest lies down, the morning guest has left.",
        "concept": "Struct vs Union comparison:\n1. Memory allocation:\n   - In a struct, each member gets its own separate memory block. Total size = sum of all members (plus padding).\n   - In a union, all members share the SAME memory block. Total size = size of the LARGEST member.\n2. Concurrent data:\n   - In a struct, you can store and read all members at the same time.\n   - In a union, only ONE member can hold valid data at any given moment. Modifying one member overwrites the binary bits of the other members.",
        "codeExplanation": [
          {
            "line": "union Packet p;",
            "explanation": "Allocates 4 bytes (the size of the largest member, int or float)."
          },
          {
            "line": "p.intVal = 42;",
            "explanation": "Stores integer 42 in the shared 4 bytes of memory."
          },
          {
            "line": "p.floatVal = 3.14f;",
            "explanation": "Overwrites those exact same 4 bytes with IEEE float bits for 3.14."
          },
          {
            "line": "sizeof(union Packet)",
            "explanation": "Verifies size is 4 bytes, proving memory is shared and not summed."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "union Packet { ... };",
            "meaning": "Defines a union type where all enclosed members share the same starting memory address"
          },
          {
            "part": "sizeof(union)",
            "meaning": "Evaluates to the size of the largest single member inside the union"
          },
          {
            "part": "Shared memory",
            "meaning": "Writing to member B immediately overwrites member A's data"
          }
        ],
        "outputExplanation": "When floatVal is assigned 3.14, it overwrites the 4 bytes where intVal was 42. Reading intVal afterwards interprets 3.14's float bits as an integer (1078523331).",
        "commonMistakes": [
          {
            "mistake": "Assuming a union stores values for all its members at the same time.",
            "fix": "A union can only hold valid data for ONE member at a time. Use a struct if you need all values at once."
          },
          {
            "mistake": "Calculating union size by adding all member sizes.",
            "fix": "A union's size is equal to its largest member (subject to alignment), not the sum."
          },
          {
            "mistake": "Reading from member A after writing to member B.",
            "fix": "Always track which member was most recently written to so you read the correct interpretation."
          }
        ],
        "keyPoints": [
          "All members of a union share the exact same memory address.",
          "Size of a union equals the size of its largest member.",
          "Only one member can hold a valid value at any given time.",
          "Assigning to one member overwrites whatever was stored previously.",
          "Used to save memory in low-level systems and embedded programming."
        ],
        "quickSummary": "In simple words, a union is a single shared storage box with multiple label tags. It can only hold one thing at a time, and putting a new item in replaces the old one.",
        "practiceSet": [
          {
            "question": "What is the main difference between struct and union regarding memory allocation?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\n// Explain in comments or print difference\n\nint main(void) {\n    printf(\"Struct: separate memory; Union: shared memory\\n\");\n    return 0;\n}",
            "hint": "Separate memory vs shared memory.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    // In struct, each member has separate memory (size = sum).\n    // In union, all members share the same memory (size = max).\n    printf(\"Struct allocates separate memory for each member.\\n\");\n    printf(\"Union shares one memory block equal to the largest member.\\n\");\n    return 0;\n}"
          },
          {
            "question": "If a union contains char str[32]; and int num;, write a program to verify its size with sizeof.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nunion Storage {\n    char str[32];\n    int num;\n};\n\nint main(void) {\n    // Print sizeof(union Storage)\n    return 0;\n}",
            "hint": "The largest member is the 32-byte char array.",
            "solution": "#include <stdio.h>\n\nunion Storage {\n    char str[32];\n    int num;\n};\n\nint main(void) {\n    printf(\"Size of Storage: %zu bytes\\n\", sizeof(union Storage));\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "enums",
      "title": "15. Enumerations: enum",
      "summary": "An enumeration (enum) is a user-defined type consisting of a set of named integer constants, improving code clarity and readability.",
      "syntax": "enum Day {\n    SUNDAY,    // 0\n    MONDAY,    // 1\n    TUESDAY,   // 2\n    WEDNESDAY  // 3\n};",
      "codeExample": "#include <stdio.h>\n\nenum TrafficLight {\n    RED,    // 0\n    YELLOW, // 1\n    GREEN   // 2\n};\n\nint main(void) {\n    enum TrafficLight signal = RED;\n\n    if (signal == RED) {\n        printf(\"Stop! Light is RED (value: %d)\\n\", signal);\n    } else if (signal == GREEN) {\n        printf(\"Go! Light is GREEN (value: %d)\\n\", signal);\n    }\n\n    return 0;\n}",
      "expectedOutput": "Stop! Light is RED (value: 0)",
      "commonMistake": "Believing enums store text or strings. In C, enums are purely integer numbers behind the scenes.",
      "practice": {
        "question": "Define an enum for four seasons (SPRING, SUMMER, AUTUMN, WINTER) and print the value of SUMMER.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\n// Define enum Season\n\nint main(void) {\n    // Print value of SUMMER\n    return 0;\n}",
        "hint": "Enums start numbering at 0 by default, so SPRING is 0, SUMMER is 1.",
        "solution": "#include <stdio.h>\n\nenum Season {\n    SPRING,\n    SUMMER,\n    AUTUMN,\n    WINTER\n};\n\nint main(void) {\n    enum Season s = SUMMER;\n    printf(\"SUMMER value: %d\\n\", s);\n    return 0;\n}"
      },
      "explanation": {
        "intro": "An enumeration (enum) is a user-defined data type in C that assigns readable human names to integer constants. Instead of using mysterious numbers like 0, 1, and 2 in your code, you can use meaningful words like RED, YELLOW, and GREEN.",
        "why": "Magic numbers (like if (status == 2)) make code confusing and hard to maintain. Does 2 mean \"Pending\", \"Approved\", or \"Rejected\"? With an enum, writing if (status == APPROVED) makes your code self-documenting and eliminates guesswork.",
        "analogy": "Think of shirt sizes: Small, Medium, Large, Extra-Large. Instead of remembering size numbers 1, 2, 3, 4, the names S, M, L, XL are instantly recognizable to anyone shopping.",
        "concept": "How enums behave in C:\n1. Default values: By default, the first name has value 0, the second has value 1, the third has 2, and so on.\n2. Custom values: You can override the numbers:\n   enum Status { PENDING = 10, APPROVED = 20, REJECTED = 30 };\n3. Automatic continuation: If you set enum Coin { PENNY = 1, NICKEL = 5, DIME = 10, QUARTER = 25 };, subsequent unset items increment by 1 from the previous value.\n4. Integer under the hood: An enum variable in C is simply stored as a standard integer (int).",
        "codeExplanation": [
          {
            "line": "enum TrafficLight { RED, YELLOW, GREEN };",
            "explanation": "Declares named integer constants RED=0, YELLOW=1, GREEN=2."
          },
          {
            "line": "enum TrafficLight signal = RED;",
            "explanation": "Creates variable signal initialized to 0 (RED)."
          },
          {
            "line": "if (signal == RED)",
            "explanation": "Tests if signal equals 0 using readable named identifier."
          },
          {
            "line": "printf(\"... value: %d\", signal);",
            "explanation": "Prints the integer value (0) backing the enum constant."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "enum TrafficLight { ... };",
            "meaning": "Defines an enumerated type with named constant identifiers"
          },
          {
            "part": "RED, YELLOW, GREEN",
            "meaning": "Enumerators assigned integer values 0, 1, 2 sequentially by default"
          },
          {
            "part": "signal == RED",
            "meaning": "Readable comparison that compiles directly to integer comparison"
          }
        ],
        "outputExplanation": "Since signal was assigned RED, the first if condition matches, displaying the message and its underlying integer value (0).",
        "commonMistakes": [
          {
            "mistake": "Trying to print an enum name as a string using %s: printf(\"%s\", signal);",
            "fix": "Enums are integers, not strings! Printing with %s causes a crash. Print with %d or use a switch statement to map to string text."
          },
          {
            "mistake": "Duplicating enum member names across different enums in the same file.",
            "fix": "Enum member names share the global/file scope and must be unique across all enums in that scope."
          },
          {
            "mistake": "Assuming enum values cannot be negative numbers.",
            "fix": "Enum constants can be assigned any valid integer, including negative numbers."
          }
        ],
        "keyPoints": [
          "Enums give meaningful names to integer constants.",
          "Numbering starts at 0 by default and increments by 1 for each member.",
          "You can assign custom integer values to any enum member.",
          "Behind the scenes, enums are represented as integers (int).",
          "Enums make code much more readable and self-documenting."
        ],
        "quickSummary": "In simple words, an enum is a list of friendly nicknames for numbers, making your code easier to read than a bunch of confusing raw integers.",
        "practiceSet": [
          {
            "question": "What is the integer value of WEDNESDAY in: enum Days { MON = 1, TUE, WED };?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nenum Days { MON = 1, TUE, WED };\n\nint main(void) {\n    // Print value of WED\n    return 0;\n}",
            "hint": "Unset members increment by 1 from the previous member.",
            "solution": "#include <stdio.h>\n\nenum Days { MON = 1, TUE, WED };\n\nint main(void) {\n    // MON=1, TUE=2, WED=3\n    printf(\"WED = %d\\n\", WED);\n    return 0;\n}"
          },
          {
            "question": "Write an enum for HTTP status codes: OK = 200, NOT_FOUND = 404, ERROR = 500, and print NOT_FOUND.",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\n// Define enum HttpStatus\n\nint main(void) {\n    // Print NOT_FOUND\n    return 0;\n}",
            "hint": "Assign explicit values inside the enum declaration.",
            "solution": "#include <stdio.h>\n\nenum HttpStatus {\n    OK = 200,\n    NOT_FOUND = 404,\n    ERROR = 500\n};\n\nint main(void) {\n    printf(\"Not Found Code: %d\\n\", NOT_FOUND);\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "file-handling",
      "title": "16. File Handling: fopen, fclose, fprintf, fscanf",
      "summary": "File handling allows C programs to store data permanently on secondary storage (hard drive) using file pointers and standard library functions.",
      "syntax": "FILE *fp = fopen(\"filename.txt\", \"mode\"); // \"r\", \"w\", \"a\"\nfprintf(fp, \"format\", args);\nfscanf(fp, \"format\", &vars);\nfclose(fp);",
      "codeExample": "#include <stdio.h>\n\nint main(void) {\n    // 1. Open file for writing (\"w\")\n    FILE *fp = fopen(\"notes.txt\", \"w\");\n    if (fp == NULL) {\n        printf(\"Error opening file!\\n\");\n        return 1;\n    }\n\n    // 2. Write data to the file\n    fprintf(fp, \"Student Name: Priya\\n\");\n    fprintf(fp, \"Roll: %d\\n\", 108);\n\n    // 3. Close the file to save changes\n    fclose(fp);\n    printf(\"Data successfully written to notes.txt\\n\");\n    return 0;\n}",
      "expectedOutput": "Data successfully written to notes.txt",
      "commonMistake": "Forgetting to check if fopen() returned NULL, or forgetting to fclose() the file, which leaves file locks open and causes data loss.",
      "practice": {
        "question": "Write a program to open a file \"output.txt\" in append mode (\"a\") and add the line \"End of File\".",
        "difficulty": "Medium",
        "starterCode": "#include <stdio.h>\n\nint main(void) {\n    // Open in \"a\" mode, write text, and close\n    return 0;\n}",
        "hint": "Use fopen(\"output.txt\", \"a\") and fprintf.",
        "solution": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"output.txt\", \"a\");\n    if (fp == NULL) {\n        printf(\"Error!\\n\");\n        return 1;\n    }\n    fprintf(fp, \"End of File\\n\");\n    fclose(fp);\n    printf(\"Appended successfully.\\n\");\n    return 0;\n}"
      },
      "explanation": {
        "intro": "File handling in C allows your program to create, read, write, and update files stored permanently on your computer's hard disk or SSD.",
        "why": "Variables in RAM are temporary (volatile). When your program exits or the computer turns off, all variables vanish into thin air. File handling lets you save game high scores, user accounts, and report cards so they persist forever.",
        "analogy": "RAM is like writing notes on a classroom whiteboard (erased at the end of class). A file on your hard disk is like writing in a permanent notebook that you take home and read whenever you want.",
        "concept": "The File Lifecycle in C:\n1. File Pointer (FILE *fp): A pointer that tracks the file stream in memory.\n2. fopen(filename, mode): Opens the file. Common modes:\n   - \"r\" (Read): Opens existing file for reading; fails if file does not exist.\n   - \"w\" (Write): Creates a new file for writing; OVERWRITES existing file completely!\n   - \"a\" (Append): Opens file to add new data to the end without erasing existing content.\n3. Check for NULL: If opening fails (disk full, file not found, permission denied), fopen returns NULL. Always check for NULL!\n4. Reading/Writing: Use fprintf() / fputs() to write, and fscanf() / fgets() to read.\n5. fclose(fp): Flushes buffered data and closes the file handle. Mandatory step!",
        "codeExplanation": [
          {
            "line": "FILE *fp = fopen(\"notes.txt\", \"w\");",
            "explanation": "Creates/opens notes.txt in write mode on disk."
          },
          {
            "line": "if (fp == NULL)",
            "explanation": "Verifies the operating system successfully opened/created the file."
          },
          {
            "line": "fprintf(fp, ...);",
            "explanation": "Directs formatted text output into the file stream instead of standard output."
          },
          {
            "line": "fclose(fp);",
            "explanation": "Flushes remaining buffered bytes to storage and closes file descriptor."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "FILE *fp",
            "meaning": "Pointer to a FILE structure maintaining state of the input/output stream"
          },
          {
            "part": "fopen(\"name\", \"w\")",
            "meaning": "Opens file in write mode (truncates existing file or creates new)"
          },
          {
            "part": "fp == NULL",
            "meaning": "Crucial safety check verifying the file was successfully opened"
          },
          {
            "part": "fprintf(fp, ...)",
            "meaning": "Formatted print directing output into the file stream instead of the console"
          },
          {
            "part": "fclose(fp)",
            "meaning": "Flushes and closes the stream, freeing system file descriptors"
          }
        ],
        "outputExplanation": "The file notes.txt is created in the working directory containing two lines. The terminal confirms the operation completed successfully.",
        "commonMistakes": [
          {
            "mistake": "Using \"w\" mode when you wanted to add data without erasing previous content.",
            "fix": "\"w\" mode immediately wipes any existing file to 0 bytes! Use append mode \"a\" to preserve old content."
          },
          {
            "mistake": "Failing to check if fp == NULL before calling fprintf/fscanf.",
            "fix": "If fopen fails, fp is NULL. Calling fprintf on a NULL pointer causes an instant crash."
          },
          {
            "mistake": "Forgetting fclose(fp).",
            "fix": "Data is often buffered in memory. If you do not close the file, unwritten data may never reach disk before the program terminates."
          }
        ],
        "keyPoints": [
          "Files provide permanent (non-volatile) storage.",
          "Always declare a FILE *fp pointer to work with files.",
          "Always verify if fp == NULL after fopen().",
          "\"w\" overwrites files; \"a\" appends to existing files; \"r\" reads files.",
          "Always close opened files with fclose(fp)."
        ],
        "quickSummary": "In simple words, file handling lets your program write to notebooks on the hard drive (fopen with \"w\" or \"a\") and read them back later (fopen with \"r\"), keeping data safe even after shutdown.",
        "practiceSet": [
          {
            "question": "Which mode should you use with fopen() if you want to add text to the end of a log file without erasing existing entries?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    // Demonstrate append mode \"a\"\n    FILE *f = fopen(\"log.txt\", \"a\");\n    if (f) {\n        fprintf(f, \"New log line\\n\");\n        fclose(f);\n    }\n    return 0;\n}",
            "hint": "Think of \"append\".",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    // \"a\" mode appends without deleting existing content\n    FILE *f = fopen(\"log.txt\", \"a\");\n    if (f) {\n        fprintf(f, \"Log event recorded\\n\");\n        fclose(f);\n        printf(\"Appended successfully in 'a' mode.\\n\");\n    }\n    return 0;\n}"
          },
          {
            "question": "What does fopen() return if you try to open a non-existent file in \"r\" (read) mode?",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"does_not_exist.txt\", \"r\");\n    // Check if NULL\n    return 0;\n}",
            "hint": "It signals failure with a special pointer constant.",
            "solution": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"does_not_exist.txt\", \"r\");\n    if (fp == NULL) {\n        printf(\"File not found! fopen returned NULL.\\n\");\n    }\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "dynamic-memory",
      "title": "17. Dynamic Memory Allocation: malloc, calloc, realloc, free",
      "summary": "Dynamic memory allocation allows programs to request and resize memory from the heap at runtime, rather than fixing sizes at compile time.",
      "syntax": "int *arr = (int *)malloc(n * sizeof(int));\nint *arr = (int *)calloc(n, sizeof(int));\narr = (int *)realloc(arr, new_size * sizeof(int));\nfree(arr);\narr = NULL;",
      "codeExample": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n = 3;\n    // Allocate memory on heap for 3 integers\n    int *arr = (int *)malloc(n * sizeof(int));\n\n    if (arr == NULL) {\n        printf(\"Memory allocation failed!\\n\");\n        return 1;\n    }\n\n    // Populate and print\n    for (int i = 0; i < n; i++) {\n        arr[i] = (i + 1) * 10;\n        printf(\"arr[%d] = %d\\n\", i, arr[i]);\n    }\n\n    // Free the allocated heap memory\n    free(arr);\n    arr = NULL; // Prevent dangling pointer\n\n    printf(\"Memory freed successfully.\\n\");\n    return 0;\n}",
      "expectedOutput": "arr[0] = 10\narr[1] = 20\narr[2] = 30\nMemory freed successfully.",
      "commonMistake": "Forgetting to free() allocated memory, causing memory leaks where RAM remains locked and unavailable until the process exits.",
      "practice": {
        "question": "Write a program that uses malloc to allocate space for 4 floats, assigns values, prints them, and frees memory.",
        "difficulty": "Medium",
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    // Allocate 4 floats, store values, print, and free\n    return 0;\n}",
        "hint": "float *p = (float *)malloc(4 * sizeof(float)); and always free(p); at the end.",
        "solution": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    float *p = (float *)malloc(4 * sizeof(float));\n    if (p == NULL) return 1;\n\n    for (int i = 0; i < 4; i++) {\n        p[i] = (i + 1) * 1.5f;\n        printf(\"%.2f \", p[i]);\n    }\n    printf(\"\\n\");\n\n    free(p);\n    p = NULL;\n    return 0;\n}"
      },
      "explanation": {
        "intro": "Dynamic Memory Allocation allows your program to request exact amounts of memory from the operating system's \"heap\" while the program is actually running, and give it back when finished.",
        "why": "Normal arrays require fixed sizes when writing code (e.g. int arr[100];). If only 5 students show up, 95 slots are wasted. If 101 students show up, the program overflows. Dynamic memory lets you ask the user \"How many students?\" and allocate precisely that size.",
        "analogy": "Imagine booking hotel rooms. Static allocation is like reserving 100 rooms a year in advance just in case. Dynamic allocation is checking in and booking only the exact number of rooms your group needs today, and checking out (free) when you leave.",
        "concept": "The four dynamic memory functions from <stdlib.h>:\n1. malloc(size_in_bytes): Allocates a block of memory of the specified byte size. Leaves the memory UNINITIALIZED (contains random garbage values).\n2. calloc(num_elements, element_size): Allocates memory and automatically clears all bytes to zero (0).\n3. realloc(ptr, new_size): Resizes an existing heap block (growing or shrinking it) without losing existing data.\n4. free(ptr): Releases the heap memory back to the operating system.\nCritical: Always check if ptr == NULL after allocation! If the system is out of memory, allocation will fail.",
        "codeExplanation": [
          {
            "line": "int *arr = (int *)malloc(n * sizeof(int));",
            "explanation": "Requests 3 * 4 = 12 contiguous bytes from the heap memory."
          },
          {
            "line": "if (arr == NULL)",
            "explanation": "Verifies the operating system successfully allocated heap memory."
          },
          {
            "line": "arr[i] = (i + 1) * 10;",
            "explanation": "Accesses dynamic array using standard subscript brackets."
          },
          {
            "line": "free(arr);",
            "explanation": "Releases the allocated heap memory back to the operating system."
          },
          {
            "line": "arr = NULL;",
            "explanation": "Sets pointer to NULL to prevent dangerous dangling pointer bugs."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "(int *)malloc(...)",
            "meaning": "Allocates raw bytes on heap and casts void pointer to int pointer"
          },
          {
            "part": "n * sizeof(int)",
            "meaning": "Calculates exact byte count needed for n integers"
          },
          {
            "part": "arr == NULL",
            "meaning": "Checks if OS successfully granted the requested memory"
          },
          {
            "part": "free(arr)",
            "meaning": "Deallocates heap memory back to the OS pool"
          },
          {
            "part": "arr = NULL;",
            "meaning": "Clears the pointer to prevent a dangling pointer"
          }
        ],
        "outputExplanation": "Memory for 3 integers is created on the heap, populated with 10, 20, 30, printed, and cleanly deallocated.",
        "commonMistakes": [
          {
            "mistake": "Memory Leak: Allocating memory with malloc/calloc in a loop and never calling free().",
            "fix": "Every malloc or calloc MUST have a corresponding free() when the data is no longer needed."
          },
          {
            "mistake": "Dangling Pointer: Accessing or modifying *arr after free(arr) has been called.",
            "fix": "After free(arr);, immediately set arr = NULL; to prevent dangerous dangling accesses."
          },
          {
            "mistake": "Assuming malloc initializes bytes to 0.",
            "fix": "malloc leaves garbage memory. Use calloc() if you need memory initialized to zero."
          },
          {
            "mistake": "Freeing memory that was not dynamically allocated (e.g. freeing a local stack array).",
            "fix": "Only pass pointers returned by malloc, calloc, or realloc to free()."
          }
        ],
        "keyPoints": [
          "malloc allocates uninitialized heap memory.",
          "calloc allocates and zeroes out all allocated memory.",
          "realloc resizes an existing heap allocation.",
          "Always check if allocation returned NULL before using memory.",
          "Always free() heap memory to prevent memory leaks.",
          "Set pointers to NULL after freeing to eliminate dangling pointers."
        ],
        "quickSummary": "In simple words, dynamic memory is like renting storage lockers on demand while your program runs, and returning the keys (free) when you are done so you don't waste RAM.",
        "practiceSet": [
          {
            "question": "What is the key difference between malloc() and calloc() in C?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    // Demonstrate difference between malloc and calloc\n    return 0;\n}",
            "hint": "Think about what values are inside the newly allocated memory.",
            "solution": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    // malloc leaves memory uninitialized (garbage values)\n    // calloc zeroes out all allocated memory to 0\n    int *m = (int *)malloc(sizeof(int));\n    int *c = (int *)calloc(1, sizeof(int));\n    printf(\"malloc val: %d (garbage)\\n\", *m);\n    printf(\"calloc val: %d (guaranteed 0)\\n\", *c);\n    free(m); free(c);\n    return 0;\n}"
          },
          {
            "question": "What happens if a program continuously calls malloc() inside an infinite loop without calling free()?",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    // Explain memory leak in comments\n    return 0;\n}",
            "hint": "Memory leak consumes all system RAM.",
            "solution": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    // Continuously allocating without free() causes a Memory Leak.\n    // RAM will be exhausted until malloc() returns NULL and the process crashes.\n    printf(\"Memory leak will exhaust system RAM.\\n\");\n    return 0;\n}"
          }
        ]
      }
    },
    {
      "id": "preprocessor",
      "title": "18. C Preprocessor Directives & Macros",
      "summary": "The preprocessor is a text-processing phase that executes before actual compilation, handling header inclusion, macro replacement, and conditional compilation.",
      "syntax": "#include <header.h>\n#define NAME value\n#define MACRO(x) ((x) * (x))\n#ifdef DEBUG\n    // conditional code\n#endif",
      "codeExample": "#include <stdio.h>\n\n#define SQUARE(x) ((x) * (x))\n#define MIN(a, b) (((a) < (b)) ? (a) : (b))\n\nint main(void) {\n    int num = 6;\n    printf(\"Square of %d is %d\\n\", num, SQUARE(num));\n\n    int x = 25, y = 40;\n    printf(\"Minimum of %d and %d is %d\\n\", x, y, MIN(x, y));\n\n    return 0;\n}",
      "expectedOutput": "Square of 6 is 36\nMinimum of 25 and 40 is 25",
      "commonMistake": "Failing to wrap macro parameters in parentheses: #define SQUARE(x) x * x causes SQUARE(2 + 3) to expand to 2 + 3 * 2 + 3 = 11 instead of 25.",
      "practice": {
        "question": "Write a macro MAX(a, b) that returns the greater of two numbers.",
        "difficulty": "Easy",
        "starterCode": "#include <stdio.h>\n\n// Define MAX(a, b) here\n\nint main(void) {\n    printf(\"Max: %d\\n\", MAX(15, 29));\n    return 0;\n}",
        "hint": "Use ternary operator: #define MAX(a, b) (((a) > (b)) ? (a) : (b)).",
        "solution": "#include <stdio.h>\n\n#define MAX(a, b) (((a) > (b)) ? (a) : (b))\n\nint main(void) {\n    printf(\"Max: %d\\n\", MAX(15, 29));\n    return 0;\n}"
      },
      "explanation": {
        "intro": "The C Preprocessor is a special tool that scans and modifies your source code text BEFORE the actual C compiler begins compiling it into machine language.",
        "why": "The preprocessor allows you to include external code libraries (#include), define reusable constant formulas without function call overhead (#define), and conditionally compile code for different operating systems (#ifdef).",
        "analogy": "Think of an author using \"Find & Replace\" in Microsoft Word before sending the book manuscript to the printer. Replacing every instance of \"NYC\" with \"New York City\" across the entire document before printing is exactly what the preprocessor does.",
        "concept": "Key preprocessor directives (all start with #):\n1. #include: Copies the entire contents of a header file into your source file.\n   - #include <stdio.h> (angle brackets): Searches standard system library directories.\n   - #include \"myheader.h\" (quotes): Searches the current project folder first.\n2. #define: Creates constant values or parameterized function-like macros.\n3. Conditional Compilation (#ifdef, #ifndef, #endif): Compiles certain blocks of code only if a macro is defined. Used heavily for debugging flags and header guards.\n4. Header Guards: Prevents duplicate inclusion of header files:\n   #ifndef MY_HEADER_H\n   #define MY_HEADER_H\n   // declarations\n   #endif",
        "codeExplanation": [
          {
            "line": "#define SQUARE(x) ((x) * (x))",
            "explanation": "Creates a macro replacing SQUARE(num) with ((num) * (num))."
          },
          {
            "line": "#define MIN(a, b) (((a) < (b)) ? (a) : (b))",
            "explanation": "Ternary macro that evaluates to the smaller of two inputs."
          },
          {
            "line": "SQUARE(num)",
            "explanation": "Expanded to ((6) * (6)) = 36 by text substitution before compilation."
          },
          {
            "line": "MIN(x, y)",
            "explanation": "Expanded to (((25) < (40)) ? (25) : (40)) = 25."
          }
        ],
        "syntaxBreakdown": [
          {
            "part": "#",
            "meaning": "Preprocessor indicator: any line beginning with # is handled by the preprocessor"
          },
          {
            "part": "#define MACRO(x)",
            "meaning": "Function-like macro replaced verbatim wherever used"
          },
          {
            "part": "((x) * (x))",
            "meaning": "Extra parentheses ensure correct operator precedence during text substitution"
          },
          {
            "part": "#ifndef / #endif",
            "meaning": "Conditional compilation directives"
          }
        ],
        "outputExplanation": "The preprocessor replaces SQUARE(6) with ((6) * (6)) yielding 36, and MIN(25, 40) with 25.",
        "commonMistakes": [
          {
            "mistake": "Missing parentheses in macro definitions: #define DOUBLE(x) x * 2. DOUBLE(1 + 3) expands to 1 + 3 * 2 = 7 instead of 8.",
            "fix": "Always wrap every single parameter and the entire macro expression in parentheses: #define DOUBLE(x) ((x) * 2)."
          },
          {
            "mistake": "Putting a semicolon at the end of #define: #define MAX 100;",
            "fix": "The semicolon becomes part of the substituted text, which causes syntax errors in expressions."
          },
          {
            "mistake": "Using increment operators inside a macro call: SQUARE(a++).",
            "fix": "Because SQUARE(x) expands to ((x) * (x)), a++ will be evaluated TWICE, causing unintended side effects."
          }
        ],
        "keyPoints": [
          "Preprocessor directives begin with # and do not end with semicolons.",
          "#include pastes header contents into the file.",
          "Always wrap macro parameters in parentheses to prevent operator precedence bugs.",
          "Header guards (#ifndef / #define / #endif) prevent duplicate inclusion errors.",
          "Macros do text substitution before the compiler ever runs."
        ],
        "quickSummary": "In simple words, the preprocessor is a smart \"Find & Replace\" assistant that prepares your code by copying headers and expanding shorthand macros before the compiler reads it.",
        "practiceSet": [
          {
            "question": "Why should macro parameters always be enclosed in parentheses like ((x) + 1)?",
            "difficulty": "Easy",
            "starterCode": "#include <stdio.h>\n\n#define MULTIPLY(a, b) ((a) * (b))\n\nint main(void) {\n    printf(\"Result: %d\\n\", MULTIPLY(2 + 1, 3));\n    return 0;\n}",
            "hint": "Think of how expressions like 2 * 3 + 1 expand without parentheses.",
            "solution": "#include <stdio.h>\n\n#define MULTIPLY(a, b) ((a) * (b))\n\nint main(void) {\n    // Without ((a)*(b)), MULTIPLY(2+1, 3) expands to 2 + 1 * 3 = 5 instead of 9!\n    printf(\"Result: %d\\n\", MULTIPLY(2 + 1, 3));\n    return 0;\n}"
          },
          {
            "question": "What is the purpose of header guards (#ifndef HEADER_H, #define HEADER_H, #endif)?",
            "difficulty": "Medium",
            "starterCode": "#include <stdio.h>\n\n// Demonstrate header guard concept\n#ifndef MY_HEADER_H\n#define MY_HEADER_H\n#define APP_VERSION 1\n#endif\n\nint main(void) {\n    printf(\"Version: %d\\n\", APP_VERSION);\n    return 0;\n}",
            "hint": "Think about what happens if two files include the same header.",
            "solution": "#include <stdio.h>\n\n#ifndef MY_HEADER_H\n#define MY_HEADER_H\n#define APP_VERSION 1\n#endif\n\nint main(void) {\n    printf(\"Version: %d\\n\", APP_VERSION);\n    return 0;\n}"
          }
        ]
      }
    }
  ],
  "bTechPriority": {
    "semesterExams": [
      "Pointers: Pointer arithmetic, double pointers (**ptr), and call-by-reference mechanisms.",
      "Structures vs Unions: Memory layout differences, byte alignment, and padding.",
      "Dynamic Memory Allocation: Difference between malloc() and calloc(); avoiding dangling pointers and memory leaks.",
      "Recursion: Base cases, stack overflow conditions, and tracing recursion trees (Tower of Hanoi, Factorial, Fibonacci).",
      "String handling algorithms: Palindrome verification, string reversal, substring matching without built-in libraries."
    ],
    "vivaQuestions": [
      {
        "q": "What is a Dangling Pointer in C?",
        "a": "A dangling pointer points to a memory location that has been deallocated or freed. Accessing it causes undefined behavior or segmentation faults."
      },
      {
        "q": "What is the difference between malloc() and calloc()?",
        "a": "malloc() allocates contiguous memory leaving it uninitialized (containing garbage values), while calloc() initializes all allocated bytes to zero."
      },
      {
        "q": "Why does C not check array boundary limits?",
        "a": "Dennis Ritchie designed C for bare-metal systems and OS speed. Omission of boundary checks prevents CPU overhead on every memory read/write."
      },
      {
        "q": "What is a Void Pointer (void*)?",
        "a": "A generic pointer that has no associated data type. It can store the address of any object, but must be explicitly type-cast before dereferencing."
      }
    ],
    "dsaPrerequisites": [
      "Mastery of struct and self-referential structures (struct Node { int data; struct Node *next; }) is mandatory for Linked Lists, Trees, and Graphs.",
      "Pointer arithmetic is essential for array-based queues, circular buffers, and heaps.",
      "Stack memory frames knowledge explains recursion limits and depth in DFS algorithms."
    ],
    "interviewTips": [
      "Be prepared to implement strcpy, strcmp, and strlen from scratch on a whiteboard without using string.h.",
      "Always check if malloc/calloc returns NULL before using dynamic memory in coding tests.",
      "Always free dynamically allocated memory to show awareness of memory leak prevention."
    ]
  }
};
