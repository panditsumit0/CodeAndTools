import { CourseData } from './types';

export const CPP_COURSE: CourseData = {
  "id": "cpp",
  "slug": "cpp",
  "name": "C++",
  "tagline": "High-Performance Systems & Competitive Programming Powerhouse",
  "shortDescription": "Learn object-oriented programming, STL, algorithms and competitive programming concepts.",
  "difficulty": "Medium → Hard",
  "bestFor": "Class 12 CS Students, B.Tech Data Structures & Algorithms (DSA), LeetCode, Game Engines, and High-Performance Software",
  "icon": "Code2",
  "color": "blue",
  "intro": {
    "whatIs": "C++ is an extension of the C language created by Bjarne Stroustrup in 1979 at Bell Labs, originally called \"C with Classes\". It adds Object-Oriented Programming, the Standard Template Library (STL), and high-level abstractions without sacrificing lightning-fast speed.",
    "whyLearn": "C++ is the number one choice for Competitive Programming (LeetCode, Codeforces) and high-performance applications like video game engines (Unreal Engine) and operating systems. It teaches you how computer hardware, CPU caches, and memory work.",
    "whereUsed": [
      "Competitive Programming platforms (Codeforces, LeetCode, CodeChef)",
      "High-end 3D Game Engines (Unreal Engine 5, CryEngine, EA Frostbite)",
      "High-Frequency Financial Trading (sub-millisecond execution engines)",
      "Operating systems & Web browsers (Google Chrome V8, Chromium, Windows subsystem)"
    ],
    "advantages": [
      "Blazing execution speed with zero runtime overhead",
      "The Standard Template Library (STL) provides fast pre-built data structures like vectors, sets, and maps",
      "Direct control over computer memory and pointer management",
      "Rich multi-paradigm support: Procedural, Object-Oriented, and Generic (Templates)"
    ],
    "limitations": [
      "More complex syntax and features than Python or JavaScript",
      "Requires careful attention to memory management when using raw pointers",
      "Compiler error messages for templates can be long and intimidating"
    ]
  },
  "visualCallout": {
    "title": "Why C++ is the King of Competitive Programming and Speed",
    "description": "C++ gives you the speed of C with modern, powerful abstractions:",
    "items": [
      {
        "label": "Fast Execution",
        "detail": "Compiles straight to raw CPU machine code with no virtual machine or interpreter delay.",
        "badge": "Blazing Fast"
      },
      {
        "label": "The STL Powerhouse",
        "detail": "Sort arrays, search values, and build dynamic lists in single lines of code.",
        "badge": "Built-in Tools"
      },
      {
        "label": "Object-Oriented Design",
        "detail": "Organize code into clean classes with public and private protection.",
        "badge": "Clean Structure"
      },
      {
        "label": "Hardware Control",
        "detail": "Direct access to memory addresses and hardware optimization when every millisecond counts.",
        "badge": "Low-Level Power"
      }
    ]
  },
  "topics": [
    {
      "id": "basic-syntax",
      "title": "1. Basic Syntax & Streams (cin / cout)",
      "summary": "C++ programs start at the main() function. The iostream library provides cout (with insertion operator <<) for printing and cin (with extraction operator >>) for input.",
      "syntax": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, C++!\" << endl;\n    return 0;\n}",
      "codeExample": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string studentName = \"Aarav\";\n    int grade = 12;\n    double percentage = 93.4;\n\n    cout << \"=== Student Profile ===\" << endl;\n    cout << \"Name: \" << studentName << endl;\n    cout << \"Class: \" << grade << \"th Grade\" << endl;\n    cout << \"Score: \" << percentage << \"%\" << endl;\n\n    return 0;\n}",
      "expectedOutput": "=== Student Profile ===\nName: Aarav\nClass: 12th Grade\nScore: 93.4%",
      "commonMistake": "Confusing the stream direction arrows: using >> with cout (cout >> text) or << with cin (cin << val), causing compilation errors.",
      "explanation": {
        "intro": "C++ syntax is the set of grammar rules for writing C++ code. Unlike C which uses printf, C++ uses intuitive streams: cout << to send data out to the screen, and cin >> to bring user data in.",
        "why": "Every program needs to communicate with the user. Stream operators (<< and >>) make printing and reading data much easier than old C-style format strings (%d, %s) because C++ automatically figures out the data type.",
        "analogy": "Think of the << and >> operators like conveyor belt arrows. cout << data pushes data onto the conveyor belt towards the screen. cin >> variable takes data from the keyboard and drops it into your variable box.",
        "concept": "1. #include <iostream>: Header file that loads the input/output stream tools.\n2. using namespace std;: Allows you to write cout instead of the longer std::cout.\n3. int main(): The entry door where your program starts running.\n4. cout <<: The character output stream. Pushes text to the terminal.\n5. endl: Inserts a newline and flushes the screen buffer.\n6. return 0;: Signals that the program executed successfully without errors.",
        "syntaxBreakdown": [
          {
            "part": "#include <iostream>",
            "meaning": "Includes standard input/output stream definitions"
          },
          {
            "part": "using namespace std;",
            "meaning": "Brings all standard C++ names into the current scope"
          },
          {
            "part": "cout << data",
            "meaning": "Sends data to the screen using the stream insertion operator (<<)"
          },
          {
            "part": "cin >> variable",
            "meaning": "Reads data from the keyboard into a variable using stream extraction (>>)"
          },
          {
            "part": "endl",
            "meaning": "Outputs a newline character and flushes the output stream"
          }
        ],
        "codeExplanation": [
          {
            "line": "#include <iostream>",
            "explanation": "Includes tools needed for cout and cin"
          },
          {
            "line": "string studentName = \"Aarav\";",
            "explanation": "Creates a C++ string object storing the name"
          },
          {
            "line": "cout << \"Name: \" << studentName << endl;",
            "explanation": "Chains the label, student name, and a newline to the output stream"
          },
          {
            "line": "return 0;",
            "explanation": "Exits the main function with status 0 (success)"
          }
        ],
        "outputExplanation": "cout sequentially displays each line of text and variable value, followed by endl which moves the cursor to the next line.",
        "commonMistakes": [
          {
            "mistake": "Reversing stream operator arrows: writing cout >> \"Hello\" or cin << name.",
            "fix": "Remember: cout uses << (arrows pointing left to cout); cin uses >> (arrows pointing right to the variable)."
          },
          {
            "mistake": "Omitting #include <iostream> or forgetting using namespace std;.",
            "fix": "Include <iostream> at the top. If not using namespace std, write std::cout and std::endl."
          },
          {
            "mistake": "Forgetting semicolons (;) at the end of statements.",
            "fix": "Every statement in C++ must end with a semicolon."
          }
        ],
        "keyPoints": [
          "Every C++ program begins execution at int main().",
          "cout << prints out; cin >> reads in.",
          "<< points towards cout; >> points towards the variable.",
          "endl creates a newline and flushes the buffer.",
          "Statements must end with a semicolon (;)."
        ],
        "quickSummary": "In simple words: C++ uses cout << to display text and variables on the screen, and cin >> to get answers from the user. Think of the arrows as conveyor belts moving data to where it belongs.",
        "practiceSet": [
          {
            "question": "Write a C++ program that prints your favorite subject and marks out of 100 on two separate lines.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print subject and marks\n    return 0;\n}",
            "hint": "Use cout << \"Subject: Computer Science\" << endl;",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Subject: Computer Science\" << endl;\n    cout << \"Marks: 98/100\" << endl;\n    return 0;\n}"
          },
          {
            "question": "Write a program that takes two integer numbers from variables a = 12 and b = 8, and prints their sum, difference, and product.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 12, b = 8;\n    // Print sum, diff, product\n    return 0;\n}",
            "hint": "cout << \"Sum: \" << (a + b) << endl;",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 12, b = 8;\n    cout << \"Sum: \" << (a + b) << endl;\n    cout << \"Diff: \" << (a - b) << endl;\n    cout << \"Product: \" << (a * b) << endl;\n    return 0;\n}"
          },
          {
            "question": "Demonstrate reading input with cin by declaring a string variable hobby, assigning it or reading it, and printing a welcome sentence.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string hobby = \"Coding\";\n    // Print hobby\n    return 0;\n}",
            "hint": "cout << \"My favorite hobby is \" << hobby << \"!\" << endl;",
            "solution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string hobby = \"Coding\";\n    cout << \"My favorite hobby is \" << hobby << \"!\" << endl;\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Print your college branch and semester on two separate lines using cout.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Branch: CSE\" << endl;\n    cout << \"Semester: 2\" << endl;\n    return 0;\n}",
        "hint": "Use cout and endl.",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Branch: CSE\" << endl;\n    cout << \"Semester: 2\" << endl;\n    return 0;\n}"
      }
    },
    {
      "id": "variables-types",
      "title": "2. Variables & Auto Type Deduction",
      "summary": "C++ supports primitive types (int, float, double, char, bool) and introduces the auto keyword (C++11) for automatic compile-time type deduction.",
      "syntax": "// Explicit typing\nint roll = 42;\ndouble gpa = 9.2;\n\n// Automatic type deduction with auto\nauto score = 98.5; // deduced as double\nauto name = \"Aman\"; // deduced as const char*",
      "codeExample": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Basic types\n    int rollNumber = 101;\n    char grade = 'A';\n    bool isFeePaid = true;\n\n    // Modern C++ auto keyword\n    auto averageMarks = 94.75; // Compiler automatically knows this is double\n    auto studentName = string(\"Tanvi\"); // Deduced as std::string\n\n    cout << \"Roll: \" << rollNumber << \" | Grade: \" << grade << endl;\n    cout << \"Name: \" << studentName << \" | Average: \" << averageMarks << endl;\n    cout << \"Fee Cleared: \" << (isFeePaid ? \"Yes\" : \"No\") << endl;\n\n    return 0;\n}",
      "expectedOutput": "Roll: 101 | Grade: A\nName: Tanvi | Average: 94.75\nFee Cleared: Yes",
      "commonMistake": "Declaring an auto variable without an initial value (e.g. auto x;), which causes a compile error because C++ needs a value to deduce the type.",
      "explanation": {
        "intro": "A variable is a named storage container in your computer's RAM. In C++, you can declare types explicitly (like int, double, string) or let C++ deduce the type automatically using the modern \"auto\" keyword.",
        "why": "In modern C++, complex types like iterator names can be 50 characters long (std::vector<int>::const_iterator). The auto keyword saves your fingers from typing tedious names while remaining 100% statically type-safe.",
        "analogy": "Think of labeling storage jars in a pantry. Explicit typing is writing \"Flour\" on the label before you buy it. Using \"auto\" is having a smart assistant look at what you just put into the jar and instantly slapping the correct \"Flour\" label on it for you.",
        "concept": "1. Primitive Types: int (whole numbers, 4 bytes), double (decimals, 8 bytes), char (single character in single quotes, 1 byte), bool (true or false, 1 byte).\n2. auto Keyword (since C++11): The compiler examines the value on the right-hand side and automatically assigns the exact type at compile time.\n3. Zero Runtime Cost: Using auto does NOT slow down your program; it is resolved entirely while compiling.",
        "syntaxBreakdown": [
          {
            "part": "int var = 10;",
            "meaning": "Explicit declaration of a 32-bit whole number"
          },
          {
            "part": "double var = 3.14;",
            "meaning": "Explicit declaration of a floating-point decimal"
          },
          {
            "part": "auto var = value;",
            "meaning": "Tells the C++ compiler to automatically deduce the type from the initializer"
          },
          {
            "part": "bool var = true;",
            "meaning": "Boolean variable holding true or false"
          }
        ],
        "codeExplanation": [
          {
            "line": "int rollNumber = 101;",
            "explanation": "Explicitly declares integer variable rollNumber"
          },
          {
            "line": "char grade = 'A';",
            "explanation": "Explicitly declares single-character variable in single quotes"
          },
          {
            "line": "auto averageMarks = 94.75;",
            "explanation": "C++ sees 94.75 and automatically types averageMarks as double"
          },
          {
            "line": "auto studentName = string(\"Tanvi\");",
            "explanation": "C++ deduces studentName as std::string"
          }
        ],
        "outputExplanation": "All variables, whether typed explicitly or deduced via auto, hold their values and print accurately to the terminal.",
        "commonMistakes": [
          {
            "mistake": "Writing \"auto x;\" without an initial value.",
            "fix": "auto requires an initializer so C++ can deduce what type it is: auto x = 10;."
          },
          {
            "mistake": "Putting double quotes around a char: char c = \"A\";.",
            "fix": "char values MUST be in single quotes: char c = 'A';. Double quotes are for strings."
          },
          {
            "mistake": "Assuming auto makes C++ dynamically typed like Python.",
            "fix": "C++ remains 100% statically typed! Once an auto variable is deduced as int, you cannot assign a string to it."
          }
        ],
        "keyPoints": [
          "Basic types: int, double, float, char, bool.",
          "auto deduces types at compile time with zero performance loss.",
          "auto variables MUST be initialized on the line they are declared.",
          "char uses single quotes ('x'); string uses double quotes (\"text\").",
          "Use const to create unchangeable constant variables."
        ],
        "quickSummary": "In simple words: Variables hold your data. You can declare them explicitly (int, double) or let C++ deduce the type with auto x = 10. Once set, the type is fixed and cannot be changed.",
        "practiceSet": [
          {
            "question": "Declare an integer age = 17, double height = 5.9, and char section = 'C', and print them.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Declare age, height, section\n    return 0;\n}",
            "hint": "int age = 17; double height = 5.9; char section = 'C';",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 17;\n    double height = 5.9;\n    char section = 'C';\n    cout << \"Age: \" << age << \", Height: \" << height << \", Section: \" << section << endl;\n    return 0;\n}"
          },
          {
            "question": "Use the auto keyword to declare a variable pi = 3.14159 and radius = 5, and calculate area = pi * radius * radius.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    auto pi = 3.14159;\n    auto radius = 5;\n    // Calculate and print area\n    return 0;\n}",
            "hint": "auto area = pi * radius * radius;",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    auto pi = 3.14159;\n    auto radius = 5;\n    auto area = pi * radius * radius;\n    cout << \"Area of circle: \" << area << endl;\n    return 0;\n}"
          },
          {
            "question": "Demonstrate const: create a const int MAX_MARKS = 100. Print it, and explain why modifying it would fail.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const int MAX_MARKS = 100;\n    // Print MAX_MARKS\n    return 0;\n}",
            "hint": "const variables cannot be modified after initialization.",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const int MAX_MARKS = 100;\n    cout << \"Maximum Marks: \" << MAX_MARKS << endl;\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Declare auto variables for an integer, a float, and a boolean, and print their values.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    auto a = 10;\n    auto b = 3.14;\n    auto c = true;\n    cout << a << \" \" << b << \" \" << c << endl;\n    return 0;\n}",
        "hint": "Assign initial values so auto can deduce types.",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    auto a = 10;\n    auto b = 3.14;\n    auto c = true;\n    cout << a << \" \" << b << \" \" << c << endl;\n    return 0;\n}"
      }
    },
    {
      "id": "operators",
      "title": "3. Operators & Stream Manipulation",
      "summary": "C++ provides arithmetic, relational, and logical operators, alongside the iomanip library for formatting numbers (fixed, setprecision).",
      "syntax": "#include <iomanip>\ncout << fixed << setprecision(2) << 3.14159; // prints 3.14\n\n// Logical operators\nif (score >= 90 && attendance >= 75) { ... }",
      "codeExample": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double totalMarks = 465.0;\n    double maxMarks = 500.0;\n    double percentage = (totalMarks / maxMarks) * 100.0;\n\n    // Using iomanip stream manipulators for clean currency/decimal output\n    cout << \"Raw percentage: \" << percentage << \"%\" << endl;\n    cout << \"Formatted (2 decimals): \" << fixed << setprecision(2) << percentage << \"%\" << endl;\n\n    // Logical operators\n    bool isDistinction = (percentage >= 75.0);\n    cout << \"Distinction achieved: \" << (isDistinction ? \"YES\" : \"NO\") << endl;\n\n    return 0;\n}",
      "expectedOutput": "Raw percentage: 93%\nFormatted (2 decimals): 93.00%\nDistinction achieved: YES",
      "commonMistake": "Using single equals (=) instead of double equals (==) inside if condition checks: if (score = 100) assigns 100 instead of checking equality.",
      "explanation": {
        "intro": "Operators are symbols that tell the computer to perform calculations or comparisons (+, -, *, /, %). Stream manipulators from <iomanip> (like setprecision) format how numbers look on the screen.",
        "why": "Without operators, programs cannot calculate test averages or verify passwords. Without stream manipulators, numbers with repeating decimals (like 10/3 = 3.3333333333) look messy on screen.",
        "analogy": "Operators are like the buttons on a scientific calculator (+, -, *, ==). Stream manipulators are like setting your calculator display mode to \"Fixed 2 Decimal Places\" so money amounts look like ₹45.50 instead of ₹45.50000000.",
        "concept": "1. Arithmetic: + (add), - (subtract), * (multiply), / (divide), % (modulo/remainder).\n2. Relational: == (equal), != (not equal), <, <=, >, >=.\n3. Logical: && (AND - both must be true), || (OR - at least one true), ! (NOT - inverts true/false).\n4. #include <iomanip>: fixed combined with setprecision(n) rounds decimals to n places.",
        "syntaxBreakdown": [
          {
            "part": "fixed",
            "meaning": "Forces floating-point numbers to display in standard fixed-point decimal notation"
          },
          {
            "part": "setprecision(n)",
            "meaning": "Sets the number of decimal digits displayed after the decimal point"
          },
          {
            "part": "a && b",
            "meaning": "Logical AND: evaluates to true only if both a and b are true"
          },
          {
            "part": "a || b",
            "meaning": "Logical OR: evaluates to true if either a or b is true"
          },
          {
            "part": "a % b",
            "meaning": "Modulo operator: returns the integer remainder after division"
          }
        ],
        "codeExplanation": [
          {
            "line": "double percentage = (totalMarks / maxMarks) * 100.0;",
            "explanation": "Calculates student percentage"
          },
          {
            "line": "cout << fixed << setprecision(2) << percentage;",
            "explanation": "Rounds and prints percentage to exactly 2 decimal digits"
          },
          {
            "line": "bool isDistinction = (percentage >= 75.0);",
            "explanation": "Relational operator >= tests if percentage is 75 or higher"
          },
          {
            "line": "isDistinction ? \"YES\" : \"NO\"",
            "explanation": "Ternary operator choosing \"YES\" or \"NO\""
          }
        ],
        "outputExplanation": "The raw calculation produces 93%. fixed and setprecision(2) format it as 93.00%. The logical check verifies distinction as YES.",
        "commonMistakes": [
          {
            "mistake": "Using = (assignment) instead of == (equality check): if (x = 5).",
            "fix": "Always use == to check equality: if (x == 5)."
          },
          {
            "mistake": "Integer division surprise: 5 / 2 yields 2 instead of 2.5.",
            "fix": "At least one operand must be a decimal: 5.0 / 2 or (double)5 / 2."
          },
          {
            "mistake": "Using % (modulo) on floating-point numbers (e.g. 5.5 % 2).",
            "fix": "The % operator only works on integer whole numbers in C++."
          }
        ],
        "keyPoints": [
          "Use == for comparisons; = is only for assignment.",
          "Integer division 5 / 2 truncates to 2; use 5.0 / 2 for 2.5.",
          "Logical operators: && (AND), || (OR), ! (NOT).",
          "Include <iomanip> for fixed and setprecision(n).",
          "Modulo (%) yields the remainder of integer division."
        ],
        "quickSummary": "In simple words: Use arithmetic operators to calculate answers, relational operators (==, !=, <) to compare values, and <iomanip> with setprecision(2) to neatly format decimal numbers.",
        "practiceSet": [
          {
            "question": "Write a program that calculates the remainder when 47 is divided by 5 using the % operator.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Calculate and print 47 % 5\n    return 0;\n}",
            "hint": "cout << (47 % 5) << endl;",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int remainder = 47 % 5;\n    cout << \"Remainder: \" << remainder << endl;\n    return 0;\n}"
          },
          {
            "question": "Use fixed and setprecision(3) from <iomanip> to print the value of 22.0 / 7.0 rounded to 3 decimal places.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    // Print 22.0 / 7.0 with 3 decimal digits\n    return 0;\n}",
            "hint": "cout << fixed << setprecision(3) << (22.0 / 7.0) << endl;",
            "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << fixed << setprecision(3) << (22.0 / 7.0) << endl;\n    return 0;\n}"
          },
          {
            "question": "Check if a student passed both Theory (>= 40) AND Practical (>= 20) using the && operator.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int theory = 65, practical = 25;\n    // Check if passed both\n    return 0;\n}",
            "hint": "if (theory >= 40 && practical >= 20) { ... }",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int theory = 65, practical = 25;\n    if (theory >= 40 && practical >= 20) {\n        cout << \"Result: Passed Overall!\" << endl;\n    } else {\n        cout << \"Result: Failed\" << endl;\n    }\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Print 10.0 / 3.0 formatted to 4 decimal places using setprecision.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << fixed << setprecision(4) << (10.0 / 3.0) << endl;\n    return 0;\n}",
        "hint": "Use fixed << setprecision(4).",
        "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << fixed << setprecision(4) << (10.0 / 3.0) << endl;\n    return 0;\n}"
      }
    },
    {
      "id": "conditions-loops",
      "title": "4. Conditions & Range-Based For Loops",
      "summary": "C++ supports standard if-else branching and modern range-based for loops (C++11) for iterating cleanly over collections without index math.",
      "syntax": "// If-else condition\nif (score >= 90) { ... } else { ... }\n\n// Modern Range-Based For Loop\nint scores[] = {80, 90, 95};\nfor (int s : scores) {\n    cout << s << \" \";\n}",
      "codeExample": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int marks = 82;\n\n    // Decision making\n    if (marks >= 90) {\n        cout << \"Grade: A+ (Outstanding)\" << endl;\n    } else if (marks >= 75) {\n        cout << \"Grade: A (Very Good)\" << endl;\n    } else {\n        cout << \"Grade: B\" << endl;\n    }\n\n    // Modern C++ Range-Based For Loop\n    vector<int> numbers = {10, 20, 30, 40, 50};\n    cout << \"Iterating with range-based loop: \";\n    for (int num : numbers) {\n        cout << num << \" \";\n    }\n    cout << endl;\n\n    return 0;\n}",
      "expectedOutput": "Grade: A (Very Good)\nIterating with range-based loop: 10 20 30 40 50",
      "commonMistake": "Using traditional index loops (for int i = 0; i <= size; i++) with <= instead of <, resulting in an out-of-bounds memory access error.",
      "explanation": {
        "intro": "Conditions let your program make smart decisions based on data. Range-based for loops (introduced in C++11) let you visit every element in an array or vector cleanly without needing counter variables like \"i = 0; i < n; i++\".",
        "why": "Off-by-one loop errors (like looping one step too far and reading garbage memory) are the leading cause of crashes in beginner C++ programs. Range-based loops completely eliminate index math.",
        "analogy": "A traditional index loop is like a postman checking a map: \"Walk to mailbox 0, walk to mailbox 1, walk to mailbox 2...\". A range-based for loop is like dealing cards from a deck: \"Take card from deck, hand it to student, repeat until deck is empty\". It is impossible to deal past the end of the deck.",
        "concept": "1. if-else if-else: Evaluates conditions in order; runs the first block that evaluates to true.\n2. Range-Based for loop: for (type item : collection). Directly reads each element sequentially.\n3. By-Value vs By-Reference: for (int x : list) copies each element. for (const auto &x : list) avoids copies and is faster for large objects.\n4. while & do-while loops: Repeat as long as a condition holds true.",
        "syntaxBreakdown": [
          {
            "part": "if (condition) { ... }",
            "meaning": "Executes block if condition is true"
          },
          {
            "part": "else if (condition) { ... }",
            "meaning": "Checked if preceding if condition was false"
          },
          {
            "part": "for (type item : collection)",
            "meaning": "Range-based loop: loops over each item in the collection automatically"
          },
          {
            "part": "for (const auto &item : collection)",
            "meaning": "High-performance loop: reads by constant reference without copying data"
          }
        ],
        "codeExplanation": [
          {
            "line": "if (marks >= 90)",
            "explanation": "82 >= 90 is false, so moves to the next branch"
          },
          {
            "line": "else if (marks >= 75)",
            "explanation": "82 >= 75 is true, so prints Grade A (Very Good)"
          },
          {
            "line": "for (int num : numbers)",
            "explanation": "Copies each element from the vector into num one by one and prints it"
          }
        ],
        "outputExplanation": "The conditional evaluates to Grade A. The range-based loop automatically walks through all 5 numbers in the vector without index variables.",
        "commonMistakes": [
          {
            "mistake": "Putting a semicolon immediately after the if or for statement: if (x > 5); { ... }.",
            "fix": "A semicolon immediately terminates the if statement, making the code block run unconditionally!"
          },
          {
            "mistake": "Looping with <= array.size() in traditional loops: causes buffer overflow.",
            "fix": "Arrays are 0-indexed; the last element is size - 1. Use < size, or better, use range-based loops."
          },
          {
            "mistake": "Trying to modify elements in a range-based loop with \"for (int x : arr) x *= 2;\".",
            "fix": "x is a copy! Use a reference to modify in-place: for (int &x : arr) x *= 2;."
          }
        ],
        "keyPoints": [
          "Range-based for loops eliminate out-of-bounds index errors.",
          "Use for (const auto &x : arr) for maximum speed with zero copying.",
          "Never put a semicolon directly after if (...) or for (...).",
          "Use while loops when you do not know the exact number of iterations beforehand.",
          "break exits a loop immediately; continue skips to the next iteration."
        ],
        "quickSummary": "In simple words: Use if-else to choose which code to run, and use range-based for loops for (int x : list) to easily visit every item in an array without dealing with loop counters.",
        "practiceSet": [
          {
            "question": "Write a program with an array of 5 test marks {88, 92, 79, 64, 95} and calculate their total sum using a range-based for loop.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int marks[] = {88, 92, 79, 64, 95};\n    int total = 0;\n    // Calculate total using range-based loop\n    return 0;\n}",
            "hint": "for (int m : marks) total += m;",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int marks[] = {88, 92, 79, 64, 95};\n    int total = 0;\n    for (int m : marks) {\n        total += m;\n    }\n    cout << \"Total Marks: \" << total << endl;\n    return 0;\n}"
          },
          {
            "question": "Check if a given number n = 28 is positive, negative, or zero using if-else statements.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 28;\n    // Check if positive, negative, or zero\n    return 0;\n}",
            "hint": "if (n > 0) ... else if (n < 0) ... else ...",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 28;\n    if (n > 0) cout << \"Positive\" << endl;\n    else if (n < 0) cout << \"Negative\" << endl;\n    else cout << \"Zero\" << endl;\n    return 0;\n}"
          },
          {
            "question": "Use a range-based loop by reference (for (int &x : arr)) to double every number in an array {2, 4, 6}, then print the modified array.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 4, 6};\n    // Double elements with reference\n    return 0;\n}",
            "hint": "for (int &x : arr) x *= 2;",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 4, 6};\n    for (int &x : arr) {\n        x *= 2;\n    }\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Print all numbers in an array greater than 50 using a range-based for loop.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 65, 34, 89, 45, 99};\n    for (int x : arr) {\n        if (x > 50) cout << x << \" \";\n    }\n    cout << endl;\n    return 0;\n}",
        "hint": "Use if (x > 50) inside the range loop.",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 65, 34, 89, 45, 99};\n    for (int x : arr) {\n        if (x > 50) cout << x << \" \";\n    }\n    cout << endl;\n    return 0;\n}"
      }
    },
    {
      "id": "references",
      "title": "5. References vs Pointers",
      "summary": "A reference (&) is an alias for an existing variable that cannot be null or reseated, while a pointer (*) holds a memory address and can be reassigned.",
      "syntax": "int x = 10;\nint &ref = x;  // Reference: ref IS x (alias)\nint *ptr = &x; // Pointer: ptr stores memory address of x",
      "codeExample": "#include <iostream>\nusing namespace std;\n\n// Pass by reference: modifies caller variable directly\nvoid giveBonusMarks(int &marks) {\n    marks += 5; // Directly modifies original variable\n}\n\nint main() {\n    int studentScore = 85;\n\n    cout << \"Original Score: \" << studentScore << endl;\n    giveBonusMarks(studentScore);\n    cout << \"Score after +5 Bonus: \" << studentScore << endl;\n\n    // Reference as an alias\n    int &alias = studentScore;\n    alias = 95;\n    cout << \"Score after alias update: \" << studentScore << endl;\n\n    return 0;\n}",
      "expectedOutput": "Original Score: 85\nScore after +5 Bonus: 90\nScore after alias update: 95",
      "commonMistake": "Attempting to declare an uninitialized reference (int &ref;), which causes a compile error because references must be bound to a variable upon creation.",
      "explanation": {
        "intro": "A Reference in C++ is simply a nickname (alias) for an already existing variable. A Pointer is a separate variable that stores the physical memory address of another variable in RAM.",
        "why": "When you pass a large list or image to a function, copying all that data takes time and memory. Passing by reference (&) allows the function to work directly on the original data with zero copying overhead.",
        "analogy": "Think of a person whose official name is \"Alexander\", but everyone calls him \"Alex\". \"Alex\" is not a separate human being; it is just another name for the exact same person (Reference). In contrast, writing down Alexander's street address on a slip of paper is a Pointer.",
        "concept": "1. Reference (&):\n   - Must be initialized when declared.\n   - Cannot be null.\n   - Cannot be rebound to point to something else.\n   - Uses normal dot syntax (no arrow or dereference * needed).\n2. Pointer (*):\n   - Stores memory address (&var).\n   - Can be nullptr.\n   - Can be reassigned to point to different variables.\n   - Must be dereferenced (*ptr) to read or write the value.",
        "syntaxBreakdown": [
          {
            "part": "int &ref = x;",
            "meaning": "Declares ref as a reference (alias) to variable x"
          },
          {
            "part": "int *ptr = &x;",
            "meaning": "Declares pointer ptr storing the memory address of x (& is address-of)"
          },
          {
            "part": "*ptr",
            "meaning": "Dereference operator: accesses the value stored at the address pointed to by ptr"
          },
          {
            "part": "void fn(int &val)",
            "meaning": "Pass-by-reference parameter: changes to val modify the caller's original variable"
          }
        ],
        "codeExplanation": [
          {
            "line": "void giveBonusMarks(int &marks)",
            "explanation": "Parameter is passed by reference (&), so marks is an alias for studentScore"
          },
          {
            "line": "marks += 5;",
            "explanation": "Directly modifies studentScore in the caller's stack frame"
          },
          {
            "line": "int &alias = studentScore;",
            "explanation": "Creates a nickname alias for studentScore"
          },
          {
            "line": "alias = 95;",
            "explanation": "Changing alias directly changes studentScore to 95"
          }
        ],
        "outputExplanation": "Passing by reference increases the score from 85 to 90. Setting alias = 95 changes studentScore to 95 because alias and studentScore share the exact same memory location.",
        "commonMistakes": [
          {
            "mistake": "Declaring an uninitialized reference: int &ref;.",
            "fix": "References cannot be empty. They must be bound to an existing variable: int &ref = x;."
          },
          {
            "mistake": "Trying to make a reference point to a new variable: ref = y.",
            "fix": "This does NOT rebind the reference! It simply copies y's value into whatever ref was originally bound to."
          },
          {
            "mistake": "Returning a reference to a local stack variable from a function.",
            "fix": "Local variables are destroyed when the function returns! Returning a reference to them causes dangling reference bugs."
          }
        ],
        "keyPoints": [
          "A reference (&) is an alias for an existing variable.",
          "References cannot be null and must be initialized immediately.",
          "Pass by reference (void fn(Type &x)) avoids expensive copies.",
          "Use const Type &x to pass large objects safely without allowing modifications.",
          "Pointers can be nullptr and reassigned; references cannot."
        ],
        "quickSummary": "In simple words: A reference (&) is just a nickname for an existing variable. When you pass by reference to a function, the function works on your original variable with zero copying.",
        "practiceSet": [
          {
            "question": "Write a swap function void swapNumbers(int &a, int &b) using references that swaps two numbers.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nvoid swapNumbers(int &a, int &b) {\n    // Swap a and b\n}\n\nint main() {\n    int x = 5, y = 10;\n    swapNumbers(x, y);\n    cout << x << \" \" << y << endl;\n    return 0;\n}",
            "hint": "int temp = a; a = b; b = temp;",
            "solution": "#include <iostream>\nusing namespace std;\n\nvoid swapNumbers(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    swapNumbers(x, y);\n    cout << x << \" \" << y << endl; // 10 5\n    return 0;\n}"
          },
          {
            "question": "Create an int variable val = 50. Create a reference ref to val, change ref to 100, and print val.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 50;\n    // Create ref and modify\n    return 0;\n}",
            "hint": "int &ref = val; ref = 100;",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 50;\n    int &ref = val;\n    ref = 100;\n    cout << \"val is now: \" << val << endl;\n    return 0;\n}"
          },
          {
            "question": "Compare pointer vs reference: print the value and address of a variable x using both a pointer and a reference.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    // Use pointer and reference\n    return 0;\n}",
            "hint": "int &r = x; int *p = &x; cout << r << \" \" << *p << endl;",
            "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    int &r = x;\n    int *p = &x;\n    cout << \"Via Ref: \" << r << \" (Address: \" << &r << \")\" << endl;\n    cout << \"Via Ptr: \" << *p << \" (Address: \" << p << \")\" << endl;\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Write a function that triples a number in-place using pass-by-reference.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\nusing namespace std;\n\nvoid triple(int &n) {\n    n *= 3;\n}\n\nint main() {\n    int num = 7;\n    triple(num);\n    cout << num << endl;\n    return 0;\n}",
        "hint": "Use n *= 3 with int &n.",
        "solution": "#include <iostream>\nusing namespace std;\n\nvoid triple(int &n) {\n    n *= 3;\n}\n\nint main() {\n    int num = 7;\n    triple(num);\n    cout << num << endl;\n    return 0;\n}"
      }
    },
    {
      "id": "classes-objects",
      "title": "6. Classes, Objects & Constructors",
      "summary": "C++ classes bundle private data members with public member functions. Constructors initialize state, often using member initializer lists for performance.",
      "syntax": "class Student {\nprivate:\n    string name;\n    int roll;\npublic:\n    Student(string n, int r) : name(n), roll(r) {}\n    void show() { cout << name << \" #\" << roll << endl; }\n};",
      "codeExample": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;   // Encapsulated data: private\n    int rollNumber;\n    double marks;\n\npublic:\n    // Constructor using Member Initializer List\n    Student(string n, int r, double m) : name(n), rollNumber(r), marks(m) {}\n\n    void display() const {\n        cout << \"Student: \" << name << \" | Roll: \" << rollNumber << \" | Marks: \" << marks << endl;\n    }\n\n    bool isDistinction() const {\n        return marks >= 75.0;\n    }\n};\n\nint main() {\n    Student s1(\"Aarav\", 101, 88.5);\n    Student s2(\"Ananya\", 102, 94.0);\n\n    s1.display();\n    s2.display();\n    cout << \"Ananya distinction? \" << (s2.isDistinction() ? \"Yes\" : \"No\") << endl;\n\n    return 0;\n}",
      "expectedOutput": "Student: Aarav | Roll: 101 | Marks: 88.5\nStudent: Ananya | Roll: 102 | Marks: 94.0\nAnanya distinction? Yes",
      "commonMistake": "Forgetting the semicolon at the end of a class definition (class Student { ... };), which produces confusing compiler syntax errors.",
      "explanation": {
        "intro": "A Class in C++ is a user-defined blueprint that groups data (attributes) and functions (methods) together. By default, everything inside a C++ class is private (hidden), keeping data safe.",
        "why": "If variables like bankBalance or studentMarks are open to the public, any part of a program can accidentally modify them without validation. Classes enforce Encapsulation: data is private, and changes must go through approved public member functions.",
        "analogy": "Think of a digital wristwatch. The internal quartz gears, battery, and microchip are private (inside the waterproof case). The buttons on the side and the digital display are public. You press the buttons to adjust time; you don't open the watch case with a screwdriver.",
        "concept": "1. Encapsulation: Keeping data private and exposing only safe public methods.\n2. Access Specifiers:\n   - private: Accessible only by member functions inside this class.\n   - public: Accessible from anywhere outside the class.\n3. Member Initializer List: Initializing class members before the constructor body executes (: name(n), roll(r)). Faster and cleaner than assignment inside the body.\n4. Semicolon at End: Every class declaration MUST end with a semicolon (};).",
        "syntaxBreakdown": [
          {
            "part": "class ClassName { ... };",
            "meaning": "Class definition header and body ending with a mandatory semicolon"
          },
          {
            "part": "private:",
            "meaning": "Access specifier: hides subsequent members from outside code"
          },
          {
            "part": "public:",
            "meaning": "Access specifier: exposes subsequent members to outside code"
          },
          {
            "part": "ClassName(...) : var(val)",
            "meaning": "Member initializer list: directly initializes fields"
          },
          {
            "part": "void fn() const",
            "meaning": "Const member function: promises not to modify any member variables"
          }
        ],
        "codeExplanation": [
          {
            "line": "class Student { private: ... };",
            "explanation": "Defines the blueprint with private name, rollNumber, and marks"
          },
          {
            "line": "Student(string n, int r, double m) : name(n), ...",
            "explanation": "Constructor initializing members using an initializer list"
          },
          {
            "line": "void display() const",
            "explanation": "Const method that reads and prints student data safely"
          },
          {
            "line": "Student s1(\"Aarav\", 101, 88.5);",
            "explanation": "Instantiates object s1 on the stack"
          }
        ],
        "outputExplanation": "Both student objects are created on the stack, their private fields are initialized via the constructor, and their data is displayed via public methods.",
        "commonMistakes": [
          {
            "mistake": "Forgetting the semicolon after the closing brace of a class: class Foo { } (missing ;).",
            "fix": "In C++, classes MUST end with a semicolon: class Foo { };."
          },
          {
            "mistake": "Trying to access private fields directly from main(): s1.marks = 100;.",
            "fix": "Private members cannot be accessed directly. Provide a public setter method like s1.setMarks(100);."
          },
          {
            "mistake": "Using assignment inside constructor body instead of member initializer lists.",
            "fix": "Prefer member initializer lists (: name(n), marks(m)) for maximum performance."
          }
        ],
        "keyPoints": [
          "In C++, class members are private by default.",
          "Class definitions must always terminate with a semicolon (};).",
          "Use public for methods and private for member variables (Encapsulation).",
          "Use member initializer lists (: field(val)) in constructors.",
          "Mark methods that only read data as const (void show() const)."
        ],
        "quickSummary": "In simple words: A class is a blueprint where you lock sensitive data under private: and provide safe controls under public:. Always remember the semicolon after the class definition!",
        "practiceSet": [
          {
            "question": "Create a Rectangle class with private width and height, a constructor, and a public getArea() method.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nclass Rectangle {\n    // Add private fields, constructor, getArea\n};\n\nint main() {\n    // Create and test rectangle\n    return 0;\n}",
            "hint": "Rectangle(int w, int h) : width(w), height(h) {}",
            "solution": "#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) : width(w), height(h) {}\n    int getArea() const { return width * height; }\n};\n\nint main() {\n    Rectangle r(10, 5);\n    cout << \"Area: \" << r.getArea() << endl;\n    return 0;\n}"
          },
          {
            "question": "Create a BankAccount class with private double balance. Provide deposit(amount) and getBalance() methods.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nclass BankAccount {\n    // Add private balance and public methods\n};\n\nint main() {\n    // Test account\n    return 0;\n}",
            "hint": "void deposit(double amt) { balance += amt; }",
            "solution": "#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\npublic:\n    BankAccount(double init) : balance(init) {}\n    void deposit(double amt) { balance += amt; }\n    double getBalance() const { return balance; }\n};\n\nint main() {\n    BankAccount acc(500.0);\n    acc.deposit(250.0);\n    cout << \"Balance: ₹\" << acc.getBalance() << endl;\n    return 0;\n}"
          },
          {
            "question": "Demonstrate constructor overloading: provide a default constructor setting balance = 0, and a parameterized constructor.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nclass Wallet {\n    // Overloaded constructors\n};\n\nint main() {\n    // Test both constructors\n    return 0;\n}",
            "hint": "Wallet() : balance(0) {} Wallet(double b) : balance(b) {}",
            "solution": "#include <iostream>\nusing namespace std;\n\nclass Wallet {\nprivate:\n    double balance;\npublic:\n    Wallet() : balance(0.0) {}\n    Wallet(double b) : balance(b) {}\n    double get() const { return balance; }\n};\n\nint main() {\n    Wallet w1;\n    Wallet w2(500.0);\n    cout << \"W1: \" << w1.get() << \", W2: \" << w2.get() << endl;\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Design a Car class with brand and year, printing details via display().",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\n    string brand;\n    int year;\npublic:\n    Car(string b, int y) : brand(b), year(y) {}\n    void display() { cout << brand << \" (\" << year << \")\" << endl; }\n};\n\nint main() {\n    Car c(\"Honda\", 2022);\n    c.display();\n    return 0;\n}",
        "hint": "Use member initializer list in constructor.",
        "solution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\n    string brand;\n    int year;\npublic:\n    Car(string b, int y) : brand(b), year(y) {}\n    void display() { cout << brand << \" (\" << year << \")\" << endl; }\n};\n\nint main() {\n    Car c(\"Honda\", 2022);\n    c.display();\n    return 0;\n}"
      }
    },
    {
      "id": "destructors-raii",
      "title": "7. Destructors & RAII",
      "summary": "Destructors (~ClassName) automatically clean up resources when an object leaves scope. This pattern—Resource Acquisition Is Initialization (RAII)—prevents memory leaks.",
      "syntax": "class ResourceManager {\npublic:\n    ResourceManager() { cout << \"Resource acquired\\n\"; }\n    ~ResourceManager() { cout << \"Resource freed\\n\"; } // Destructor\n};",
      "codeExample": "#include <iostream>\nusing namespace std;\n\nclass DynamicArray {\nprivate:\n    int *data;\n    int size;\n\npublic:\n    // Constructor: acquires resource\n    DynamicArray(int s) : size(s) {\n        data = new int[size];\n        cout << \"Allocated heap array of size \" << size << endl;\n    }\n\n    // Destructor: guarantees cleanup when object goes out of scope\n    ~DynamicArray() {\n        delete[] data;\n        cout << \"Deallocated heap array safely via Destructor!\" << endl;\n    }\n};\n\nint main() {\n    cout << \"Entering inner block...\" << endl;\n    {\n        DynamicArray arr(5); // Lives only inside these curly braces\n        cout << \"Using array inside block...\" << endl;\n    } // Destructor runs automatically RIGHT HERE\n    cout << \"Exited inner block successfully.\" << endl;\n\n    return 0;\n}",
      "expectedOutput": "Entering inner block...\nAllocated heap array of size 5\nUsing array inside block...\nDeallocated heap array safely via Destructor!\nExited inner block successfully.",
      "commonMistake": "Allocating memory with \"new[]\" but freeing it with \"delete\" instead of \"delete[]\", which causes undefined behavior and memory leaks.",
      "explanation": {
        "intro": "A Destructor is a special class method preceded by a tilde (~ClassName) that C++ executes automatically the exact millisecond an object leaves scope (like reaching the closing curly brace }). RAII stands for \"Resource Acquisition Is Initialization\"—binding a resource to an object's lifetime.",
        "why": "In languages without automatic destructors, if you open a file or allocate memory and forget to close or free it before a return statement, memory leaks occur. RAII guarantees that cleanup runs 100% of the time, even if errors occur.",
        "analogy": "Think of renting a locker at an amusement park. When you put on the locker wristband (Constructor), you get locker access. The moment you walk out through the exit turnstile (Object leaves scope), the turnstile automatically collects the wristband and releases the locker (Destructor). You can never accidentally leave with the locker key.",
        "concept": "1. Destructor name: Exact same name as class with a tilde ~ in front (~Student()).\n2. No arguments, no return type: A class can have only ONE destructor.\n3. Automatic Invocation: When a local stack object leaves its { } block, its destructor triggers immediately.\n4. RAII: Memory allocated in constructor (new) is deleted in destructor (delete[]).",
        "syntaxBreakdown": [
          {
            "part": "~ClassName()",
            "meaning": "Destructor declaration (preceded by tilde ~)"
          },
          {
            "part": "new int[n]",
            "meaning": "Allocates dynamic array memory on the heap"
          },
          {
            "part": "delete[] ptr;",
            "meaning": "Deallocates array memory previously allocated with new[]"
          },
          {
            "part": "{ ... }",
            "meaning": "Defines the scope lifetime of stack-allocated objects"
          }
        ],
        "codeExplanation": [
          {
            "line": "DynamicArray(int s) : size(s)",
            "explanation": "Constructor allocates heap memory with new[]"
          },
          {
            "line": "~DynamicArray()",
            "explanation": "Destructor frees heap memory with delete[]"
          },
          {
            "line": "{ DynamicArray arr(5); ... }",
            "explanation": "Defines an inner scope block"
          },
          {
            "line": "} // Destructor runs here",
            "explanation": "As execution exits the block, ~DynamicArray() is called automatically"
          }
        ],
        "outputExplanation": "The constructor allocates memory when arr is created. When the closing brace } is crossed, the destructor automatically frees the heap memory without any manual delete call from the programmer.",
        "commonMistakes": [
          {
            "mistake": "Pairing new[] with single delete (delete data;) instead of array delete (delete[] data;).",
            "fix": "Always pair new[] with delete[], and single new with single delete."
          },
          {
            "mistake": "Trying to pass parameters to a destructor (e.g. ~Student(int x)).",
            "fix": "Destructors take NO arguments and cannot be overloaded."
          },
          {
            "mistake": "Calling the destructor manually like arr.~DynamicArray().",
            "fix": "Never call destructors manually on stack objects. C++ calls them automatically."
          }
        ],
        "keyPoints": [
          "Destructors are named ~ClassName() and take no arguments.",
          "Called automatically when an object goes out of scope.",
          "RAII binds resource allocation to object lifetime to prevent leaks.",
          "Pair new with delete, and new[] with delete[].",
          "Modern C++ smart pointers (std::unique_ptr) use RAII to eliminate raw pointers."
        ],
        "quickSummary": "In simple words: A destructor (~ClassName) is your cleanup crew. It runs automatically when an object leaves its curly brace block, ensuring memory and files are freed with zero leaks.",
        "practiceSet": [
          {
            "question": "Create a simple Logger class whose constructor prints \"Start Logging\" and destructor prints \"Stop Logging\". Observe when it prints.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nclass Logger {\n    // Add constructor and destructor\n};\n\nint main() {\n    cout << \"Before block\" << endl;\n    {\n        Logger l;\n    }\n    cout << \"After block\" << endl;\n    return 0;\n}",
            "hint": "~Logger() { cout << \"Stop Logging\" << endl; }",
            "solution": "#include <iostream>\nusing namespace std;\n\nclass Logger {\npublic:\n    Logger() { cout << \"Start Logging\" << endl; }\n    ~Logger() { cout << \"Stop Logging\" << endl; }\n};\n\nint main() {\n    cout << \"Before block\" << endl;\n    {\n        Logger l;\n    }\n    cout << \"After block\" << endl;\n    return 0;\n}"
          },
          {
            "question": "Write a class HeapValue that allocates a single integer on the heap in constructor and deletes it in destructor.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nclass HeapValue {\n    int *ptr;\npublic:\n    // Constructor and destructor\n};\n\nint main() {\n    HeapValue hv;\n    return 0;\n}",
            "hint": "HeapValue() { ptr = new int(10); } ~HeapValue() { delete ptr; }",
            "solution": "#include <iostream>\nusing namespace std;\n\nclass HeapValue {\n    int *ptr;\npublic:\n    HeapValue() {\n        ptr = new int(100);\n        cout << \"Created heap int: \" << *ptr << endl;\n    }\n    ~HeapValue() {\n        delete ptr;\n        cout << \"Deleted heap int safely\" << endl;\n    }\n};\n\nint main() {\n    HeapValue hv;\n    return 0;\n}"
          },
          {
            "question": "Explain why smart pointers (std::unique_ptr) are preferred over raw pointers in modern C++.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    // Create a unique_ptr\n    unique_ptr<int> p = make_unique<int>(42);\n    cout << *p << endl;\n    return 0;\n}",
            "hint": "unique_ptr automatically calls delete when it leaves scope.",
            "solution": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    unique_ptr<int> p = make_unique<int>(42);\n    cout << \"Value via unique_ptr: \" << *p << endl;\n    // No manual delete needed! Cleans up automatically.\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Create a scoped timer message printer using constructor and destructor.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\nusing namespace std;\n\nclass ScopeTimer {\npublic:\n    ScopeTimer() { cout << \"Timer started\\n\"; }\n    ~ScopeTimer() { cout << \"Timer ended\\n\"; }\n};\n\nint main() {\n    ScopeTimer t;\n    return 0;\n}",
        "hint": "Destructor runs at end of main.",
        "solution": "#include <iostream>\nusing namespace std;\n\nclass ScopeTimer {\npublic:\n    ScopeTimer() { cout << \"Timer started\\n\"; }\n    ~ScopeTimer() { cout << \"Timer ended\\n\"; }\n};\n\nint main() {\n    ScopeTimer t;\n    return 0;\n}"
      }
    },
    {
      "id": "inheritance-polymorphism",
      "title": "8. Inheritance & Runtime Polymorphism",
      "summary": "C++ inheritance enables code reuse via public derivation, while virtual functions and vtables enable dynamic method dispatch (runtime polymorphism).",
      "syntax": "class Base {\npublic:\n    virtual void speak() { cout << \"Base speak\"; } // Virtual enables polymorphism\n    virtual ~Base() {} // Always make base destructors virtual!\n};\n\nclass Derived : public Base {\npublic:\n    void speak() override { cout << \"Derived speak\"; }\n};",
      "codeExample": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\nprotected:\n    string name;\npublic:\n    Person(string n) : name(n) {}\n    virtual void showRole() const {\n        cout << name << \" is a Person\" << endl;\n    }\n    virtual ~Person() {} // Virtual destructor for safe deletion\n};\n\nclass Teacher : public Person {\nprivate:\n    string subject;\npublic:\n    Teacher(string n, string sub) : Person(n), subject(sub) {}\n    void showRole() const override {\n        cout << name << \" teaches \" << subject << endl;\n    }\n};\n\nint main() {\n    // Base pointer pointing to Derived object (Polymorphism)\n    Person *p1 = new Person(\"Ramesh\");\n    Person *p2 = new Teacher(\"Dr. Sharma\", \"Physics\");\n\n    p1->showRole();\n    p2->showRole(); // Dynamically calls Teacher::showRole\n\n    delete p1;\n    delete p2;\n    return 0;\n}",
      "expectedOutput": "Ramesh is a Person\nDr. Sharma teaches Physics",
      "commonMistake": "Omitting the \"virtual\" keyword on base class methods when expecting polymorphism, or forgetting to make the base class destructor virtual.",
      "explanation": {
        "intro": "Inheritance lets a derived class inherit members from a base class (: public Base). Runtime Polymorphism allows a base class pointer (Person *p) to execute the correct derived method (Teacher::showRole) using the \"virtual\" keyword.",
        "why": "In a video game, you might have 50 types of enemies (Zombie, Dragon, Robot) all derived from Enemy. With virtual functions, you can loop through a list of Enemy pointers and call enemy->attack(); each enemy attacks in its own unique way without messy if-else checks.",
        "analogy": "Think of the \"Play\" button on different media devices. The button icon is identical (Base class interface), but when you press play on a CD player, it spins a disc. When you press play on a streaming app, it streams video. The device decides how to play at runtime.",
        "concept": "1. : public Base: Inherits public and protected members.\n2. virtual keyword: Enables dynamic binding via a hidden table of function pointers called the vtable.\n3. override keyword (C++11): Ensures the method signature matches a base virtual function.\n4. Virtual Destructors: Base class destructors MUST be virtual (virtual ~Base()) so deleting through a base pointer cleans up the derived class properly.",
        "syntaxBreakdown": [
          {
            "part": "class Derived : public Base",
            "meaning": "Derived class inherits public interface of Base"
          },
          {
            "part": "virtual void fn()",
            "meaning": "Declares a method for dynamic dispatch via the vtable"
          },
          {
            "part": "void fn() override",
            "meaning": "Guarantees this method is overriding a base virtual method"
          },
          {
            "part": "virtual ~Base()",
            "meaning": "Guarantees derived destructors run when deleting through a base pointer"
          }
        ],
        "codeExplanation": [
          {
            "line": "class Teacher : public Person",
            "explanation": "Teacher inherits from Person"
          },
          {
            "line": "virtual void showRole() const",
            "explanation": "Declared virtual in Person to allow dynamic overriding"
          },
          {
            "line": "Person *p2 = new Teacher(...)",
            "explanation": "Base pointer pointing to derived object"
          },
          {
            "line": "p2->showRole();",
            "explanation": "Virtual dispatch: calls Teacher showRole because p2 points to a Teacher"
          }
        ],
        "outputExplanation": "p1 calls Person::showRole. Even though p2 is a Person*, C++ uses the vtable to dynamically invoke Teacher::showRole.",
        "commonMistakes": [
          {
            "mistake": "Forgetting \"virtual\" in the base class: without virtual, p2->showRole() calls Person::showRole.",
            "fix": "Always add the virtual keyword in the base class when you intend to override methods."
          },
          {
            "mistake": "Non-virtual base destructor: deleting a derived object via base pointer leaks derived resources.",
            "fix": "Always write virtual ~Base() {} in any class that contains virtual methods."
          },
          {
            "mistake": "Using private inheritance by accident (forgetting the \"public\" keyword: class Derived : Base).",
            "fix": "In C++, inheritance is private by default! Always write : public Base."
          }
        ],
        "keyPoints": [
          "Use : public Base for inheritance.",
          "virtual keyword enables runtime polymorphism.",
          "override catches typos in overridden method signatures.",
          "Base class destructors must always be declared virtual.",
          "vtable (virtual table) resolves function calls dynamically at runtime."
        ],
        "quickSummary": "In simple words: Inheritance lets child classes inherit features. Marking methods virtual lets a base pointer run the child class custom behavior at runtime.",
        "practiceSet": [
          {
            "question": "Create a base Animal with virtual void sound() and a derived Dog that overrides sound() to print \"Woof!\".",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() { cout << \"Animal sound\\n\"; }\n    virtual ~Animal() {}\n};\n\n// Create Dog\n\nint main() {\n    Animal *a = new Dog();\n    a->sound();\n    delete a;\n    return 0;\n}",
            "hint": "class Dog : public Animal { public: void sound() override { cout << \"Woof!\\n\"; } };",
            "solution": "#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() { cout << \"Animal sound\\n\"; }\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override { cout << \"Woof!\\n\"; }\n};\n\nint main() {\n    Animal *a = new Dog();\n    a->sound();\n    delete a;\n    return 0;\n}"
          },
          {
            "question": "Create Shape with pure virtual function virtual double getArea() = 0; making it an abstract class. Implement Circle.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double getArea() = 0; // Pure virtual\n    virtual ~Shape() {}\n};\n\n// Implement Circle\n",
            "hint": "class Circle : public Shape { double r; public: Circle(double r) : r(r) {} double getArea() override { return 3.14159 * r * r; } };",
            "solution": "#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double getArea() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\n    double r;\npublic:\n    Circle(double r) : r(r) {}\n    double getArea() override { return 3.14159 * r * r; }\n};\n\nint main() {\n    Shape *s = new Circle(7.0);\n    cout << \"Area: \" << s->getArea() << endl;\n    delete s;\n    return 0;\n}"
          },
          {
            "question": "Demonstrate polymorphism with an array of Shape pointers containing a Rectangle and Circle.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Polymorphic array\n    return 0;\n}",
            "hint": "Shape* shapes[2]; shapes[0] = new Circle(5); ...",
            "solution": "#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() const = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() const override { cout << \"Drawing Circle\\n\"; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() const override { cout << \"Drawing Square\\n\"; }\n};\n\nint main() {\n    Shape* shapes[] = { new Circle(), new Square() };\n    for (Shape* s : shapes) s->draw();\n    for (Shape* s : shapes) delete s;\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Demonstrate virtual destructor necessity when deleting derived object via base pointer.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual ~Base() { cout << \"Base deleted\\n\"; }\n};\nclass Derived : public Base {\npublic:\n    ~Derived() { cout << \"Derived deleted\\n\"; }\n};\n\nint main() {\n    Base *b = new Derived();\n    delete b;\n    return 0;\n}",
        "hint": "Notice both Derived and Base destructors execute.",
        "solution": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual ~Base() { cout << \"Base deleted\\n\"; }\n};\nclass Derived : public Base {\npublic:\n    ~Derived() { cout << \"Derived deleted\\n\"; }\n};\n\nint main() {\n    Base *b = new Derived();\n    delete b;\n    return 0;\n}"
      }
    },
    {
      "id": "templates",
      "title": "9. Templates (Generic Programming)",
      "summary": "Templates enable type-independent code. The compiler generates specialized machine code for each type used, providing zero-overhead generic algorithms.",
      "syntax": "// Function template\ntemplate <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\n// Class template\ntemplate <typename T>\nclass Box { T data; };",
      "codeExample": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// Generic function template\ntemplate <typename T>\nT findMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\n// Generic class template\ntemplate <typename T>\nclass Storage {\nprivate:\n    T item;\npublic:\n    Storage(T val) : item(val) {}\n    T get() const { return item; }\n};\n\nint main() {\n    // Function template handles ints, doubles, and strings automatically\n    cout << \"Max int: \" << findMax(15, 42) << endl;\n    cout << \"Max double: \" << findMax(3.14, 2.71) << endl;\n    cout << \"Max string: \" << findMax(string(\"Apple\"), string(\"Banana\")) << endl;\n\n    // Class template\n    Storage<int> intStore(100);\n    Storage<string> strStore(\"C++ Power\");\n    cout << \"Stored: \" << intStore.get() << \" & \" << strStore.get() << endl;\n\n    return 0;\n}",
      "expectedOutput": "Max int: 42\nMax double: 3.14\nMax string: Banana\nStored: 100 & C++ Power",
      "commonMistake": "Defining template functions in a .cpp file instead of the header (.h) file. Templates must be visible to the compiler at call sites during compilation.",
      "explanation": {
        "intro": "Templates in C++ let you write generic functions and classes that work with any data type. Instead of writing separate functions for integers, floats, and strings, you write one template using \"template <typename T>\".",
        "why": "If you need a swap() function or a stack data structure, you don't want to copy-paste identical code 10 times for ints, floats, doubles, and custom classes. Templates let you write once, and the compiler generates the type-specific machine code on demand.",
        "analogy": "Think of a metal cookie cutter shaped like a star. The cutter itself has no flavor or color. If you stamp chocolate dough, you get chocolate stars. If you stamp ginger dough, you get ginger stars. The cookie cutter is the Template, and the baked cookies are the specialized instances.",
        "concept": "1. template <typename T>: T is a type placeholder.\n2. Monomorphization: When you call findMax(5, 10), the compiler literally creates an int version in the binary. When you call findMax(3.14, 2.0), it creates a double version.\n3. Zero Runtime Overhead: There is no performance penalty compared to manually handwritten types.\n4. Class Templates: Classes like std::vector<T> that can store any data type.",
        "syntaxBreakdown": [
          {
            "part": "template <typename T>",
            "meaning": "Declares a template parameterized by type placeholder T"
          },
          {
            "part": "T findMax(T a, T b)",
            "meaning": "Function returning type T and taking two arguments of type T"
          },
          {
            "part": "Storage<int>",
            "meaning": "Explicit template instantiation for integer data"
          }
        ],
        "codeExplanation": [
          {
            "line": "template <typename T> T findMax(T a, T b)",
            "explanation": "Generic function that works for any type supporting the > operator"
          },
          {
            "line": "findMax(15, 42)",
            "explanation": "Compiler deduces T as int and generates the integer version"
          },
          {
            "line": "Storage<string> strStore(\"C++ Power\");",
            "explanation": "Instantiates the class template with std::string"
          }
        ],
        "outputExplanation": "findMax determines the larger value for integers, floating-point numbers, and strings (alphabetical comparison) seamlessly.",
        "commonMistakes": [
          {
            "mistake": "Calling findMax(5, 3.14) with conflicting types (int and double).",
            "fix": "Both arguments must match type T, or explicitly specify: findMax<double>(5, 3.14)."
          },
          {
            "mistake": "Using a type that does not support the operators used inside the template (e.g. > operator).",
            "fix": "The type passed to the template must support all operations used inside the template code."
          },
          {
            "mistake": "Defining templates in a .cpp file instead of a header file.",
            "fix": "Template definitions must be visible in header files so the compiler can generate specializations at compile time."
          }
        ],
        "keyPoints": [
          "template <typename T> defines a generic blueprint.",
          "The compiler generates specialized code for each type used.",
          "Zero runtime overhead: as fast as handcrafted code.",
          "Templates form the foundation of the C++ Standard Template Library (STL)."
        ],
        "quickSummary": "In simple words: Templates are cookie cutters for code. Write your logic once using <typename T>, and C++ will automatically stamp out perfect versions for numbers, decimals, or text.",
        "practiceSet": [
          {
            "question": "Write a template function add(T a, T b) that adds two values of any type and returns the result.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write add template function\n\nint main() {\n    cout << add(10, 20) << endl;\n    cout << add(2.5, 3.5) << endl;\n    return 0;\n}",
            "hint": "template <typename T> T add(T a, T b) { return a + b; }",
            "solution": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT add(T a, T b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(10, 20) << endl;\n    cout << add(2.5, 3.5) << endl;\n    return 0;\n}"
          },
          {
            "question": "Write a template function printTwice(T val) that prints the value twice separated by a space.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write printTwice template\n\nint main() {\n    return 0;\n}",
            "hint": "cout << val << \" \" << val << endl;",
            "solution": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nvoid printTwice(T val) {\n    cout << val << \" \" << val << endl;\n}\n\nint main() {\n    printTwice(42);\n    printTwice(\"Code\");\n    return 0;\n}"
          },
          {
            "question": "Create a Pair template class template <typename T1, typename T2> holding two different types, with a display() method.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\nusing namespace std;\n\n// Create Pair template class\n\nint main() {\n    return 0;\n}",
            "hint": "template <typename T1, typename T2> class Pair { T1 first; T2 second; ... };",
            "solution": "#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate <typename T1, typename T2>\nclass Pair {\npublic:\n    T1 first;\n    T2 second;\n    Pair(T1 f, T2 s) : first(f), second(s) {}\n    void display() const { cout << first << \" : \" << second << endl; }\n};\n\nint main() {\n    Pair<string, int> student(\"Aarav\", 12);\n    student.display();\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Write a template function swapValues(T &a, T &b) that swaps two variables of any type.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nvoid swapValues(T &a, T &b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 1, y = 2;\n    swapValues(x, y);\n    cout << x << \" \" << y << endl;\n    return 0;\n}",
        "hint": "Use a temporary variable of type T.",
        "solution": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nvoid swapValues(T &a, T &b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 1, y = 2;\n    swapValues(x, y);\n    cout << x << \" \" << y << endl;\n    return 0;\n}"
      }
    },
    {
      "id": "stl-vector",
      "title": "10. STL: std::vector (Dynamic Arrays)",
      "summary": "std::vector is a dynamic array that grows automatically. It provides contiguous memory, fast O(1) random access, and amortized O(1) push_back operations.",
      "syntax": "#include <vector>\nvector<int> v = {1, 2, 3};\nv.push_back(4);   // Append to end\nv.pop_back();     // Remove last element\nint x = v[0];     // O(1) index access",
      "codeExample": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    // Create a dynamic vector of integers\n    vector<int> scores;\n\n    // Adding elements dynamically\n    scores.push_back(85);\n    scores.push_back(92);\n    scores.push_back(78);\n    scores.push_back(95);\n\n    cout << \"Vector Size: \" << scores.size() << endl;\n    cout << \"First Element: \" << scores.front() << endl;\n    cout << \"Last Element: \" << scores.back() << endl;\n\n    cout << \"All Scores: \";\n    for (int s : scores) {\n        cout << s << \" \";\n    }\n    cout << endl;\n\n    return 0;\n}",
      "expectedOutput": "Vector Size: 4\nFirst Element: 85\nLast Element: 95\nAll Scores: 85 92 78 95",
      "commonMistake": "Accessing an out-of-bounds index using [] (e.g. v[10] when size is 4); operator [] does NOT perform bounds checking. Use v.at(10) if you need exception checking.",
      "explanation": {
        "intro": "std::vector is the most important data structure in C++. It is a dynamic array: just like a regular array, it stores elements next to each other in memory, but it expands and shrinks automatically as you add or remove items.",
        "why": "In competitive programming and software engineering, you rarely know how many items a user will input (10 or 100,000). A regular array requires picking a fixed size upfront. A vector grows seamlessly on demand.",
        "analogy": "Think of a regular array like a bench that seats exactly 4 people: if a 5th person arrives, they have nowhere to sit. A vector is like a row of expandable folding chairs: as more guests arrive, the venue automatically brings in more chairs.",
        "concept": "1. #include <vector>: Header required to use std::vector.\n2. push_back(val): Adds an item to the end in amortized O(1) time.\n3. size(): Returns the current number of elements.\n4. Contiguous Memory: Elements sit consecutively in RAM, making CPU cache access blazing fast.\n5. pop_back(): Removes the last element.",
        "syntaxBreakdown": [
          {
            "part": "vector<Type> name;",
            "meaning": "Declares a dynamic vector of the specified type"
          },
          {
            "part": "v.push_back(x)",
            "meaning": "Appends element x to the end of the vector"
          },
          {
            "part": "v.size()",
            "meaning": "Returns the current count of elements stored"
          },
          {
            "part": "v.front() / v.back()",
            "meaning": "Returns the first and last elements respectively"
          },
          {
            "part": "v.pop_back()",
            "meaning": "Deletes the last element from the vector"
          }
        ],
        "codeExplanation": [
          {
            "line": "vector<int> scores;",
            "explanation": "Initializes an empty dynamic array of integers"
          },
          {
            "line": "scores.push_back(85);",
            "explanation": "Expands the array and appends 85"
          },
          {
            "line": "scores.front() / scores.back()",
            "explanation": "Accesses the first (85) and last (95) elements"
          },
          {
            "line": "for (int s : scores)",
            "explanation": "Range-based loop visiting every score in order"
          }
        ],
        "outputExplanation": "The vector starts empty, grows to size 4 as items are pushed, and prints its contents in order.",
        "commonMistakes": [
          {
            "mistake": "Using v[i] on an empty vector to insert items: vector<int> v; v[0] = 10; (Crash!).",
            "fix": "operator [] cannot add new elements! Use v.push_back(10); to append new items."
          },
          {
            "mistake": "Passing vectors to functions by value (void fn(vector<int> v)), which makes a full copy of all elements.",
            "fix": "Pass vectors by reference to prevent slow copying: void fn(const vector<int> &v)."
          },
          {
            "mistake": "Modifying a vector inside a loop while iterating with iterators (iterator invalidation).",
            "fix": "Adding elements can cause vector reallocation, invalidating previous pointers and iterators."
          }
        ],
        "keyPoints": [
          "std::vector is a dynamic array stored consecutively in memory.",
          "Use .push_back() to add elements to the end.",
          "Fast O(1) access by index.",
          "Pass by reference (&) to avoid copying thousands of elements.",
          "Use .size() to get the current number of elements."
        ],
        "quickSummary": "In simple words: std::vector is a smart, resizable array. You don't need to worry about size limits—just call .push_back() whenever you want to add an item.",
        "practiceSet": [
          {
            "question": "Create a vector of strings containing 3 names, add 2 more with push_back(), and print the size.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Create vector and add names\n    return 0;\n}",
            "hint": "names.push_back(\"Name\"); cout << names.size();",
            "solution": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<string> names = {\"Aman\", \"Riya\", \"Diya\"};\n    names.push_back(\"Siddharth\");\n    names.push_back(\"Kavya\");\n    cout << \"Total names: \" << names.size() << endl;\n    return 0;\n}"
          },
          {
            "question": "Calculate the sum of all elements in a vector<int> nums = {5, 10, 15, 20}.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {5, 10, 15, 20};\n    // Calculate sum\n    return 0;\n}",
            "hint": "int sum = 0; for (int n : nums) sum += n;",
            "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {5, 10, 15, 20};\n    int sum = 0;\n    for (int n : nums) sum += n;\n    cout << \"Sum: \" << sum << endl;\n    return 0;\n}"
          },
          {
            "question": "Reverse a vector in-place using two pointers or the std::reverse function from <algorithm>.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    // Reverse and print\n    return 0;\n}",
            "hint": "reverse(v.begin(), v.end());",
            "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    reverse(v.begin(), v.end());\n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Create a vector, push numbers 1 to 5, pop the last one, and print the remaining.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v;\n    for (int i = 1; i <= 5; i++) v.push_back(i);\n    v.pop_back();\n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
        "hint": "Use push_back and pop_back.",
        "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v;\n    for (int i = 1; i <= 5; i++) v.push_back(i);\n    v.pop_back();\n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    return 0;\n}"
      }
    },
    {
      "id": "stl-map-set",
      "title": "11. STL: std::map & std::unordered_map",
      "summary": "std::map stores key-value pairs sorted by key using Red-Black trees (O(log N)), while std::unordered_map uses hash tables for average O(1) lookups.",
      "syntax": "#include <map>\n#include <unordered_map>\n\n// Sorted map (Red-Black Tree: O(log N))\nmap<string, int> ageMap;\nageMap[\"Aarav\"] = 17;\n\n// Hash map (Hash Table: O(1) average)\nunordered_map<string, int> fastMap;",
      "codeExample": "#include <iostream>\n#include <map>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nint main() {\n    // std::map keeps keys sorted alphabetically\n    map<string, int> studentRanks;\n    studentRanks[\"Varun\"] = 3;\n    studentRanks[\"Aarav\"] = 1;\n    studentRanks[\"Priya\"] = 2;\n\n    cout << \"Sorted student ranks (by name):\" << endl;\n    for (const auto &pair : studentRanks) {\n        cout << \"  \" << pair.first << \" -> Rank #\" << pair.second << endl;\n    }\n\n    // Checking if a key exists\n    if (studentRanks.count(\"Aarav\")) {\n        cout << \"Aarav is present in the record!\" << endl;\n    }\n\n    return 0;\n}",
      "expectedOutput": "Sorted student ranks (by name):\n  Aarav -> Rank #1\n  Priya -> Rank #2\n  Varun -> Rank #3\nAarav is present in the record!",
      "commonMistake": "Using map[key] just to check if an element exists. If the key is missing, operator [] inserts a default-initialized key into the map! Use map.count(key) or map.find(key) instead.",
      "explanation": {
        "intro": "A Map is a lookup table that maps Keys to Values (like linking a student's name to their marks). std::map keeps keys sorted in order using a balanced binary tree, while std::unordered_map uses a hash table for lightning-fast O(1) lookups.",
        "why": "If you have 100,000 students and want to find \"Aarav\"'s score, scanning an array one-by-one takes up to 100,000 steps. A map finds it in just ~17 steps (O(log N)), and an unordered_map finds it in 1 step (O(1)).",
        "analogy": "std::map is like an English dictionary: words are strictly sorted alphabetically from A to Z, so you can binary-search words easily. std::unordered_map is like a coat check room with numbered bins: you hand the ticket, and the attendant grabs your coat from that exact bin instantly.",
        "concept": "1. map (Red-Black Tree): O(log N) operations. Keys are always kept sorted.\n2. unordered_map (Hash Table): Average O(1) operations. Order of keys is arbitrary.\n3. pair.first & pair.second: When iterating over a map, pair.first is the Key and pair.second is the Value.\n4. count(key): Returns 1 if key exists, 0 otherwise.",
        "syntaxBreakdown": [
          {
            "part": "map<KeyType, ValueType> m;",
            "meaning": "Declares an ordered key-value map"
          },
          {
            "part": "unordered_map<K, V> um;",
            "meaning": "Declares an unordered hash map for O(1) lookups"
          },
          {
            "part": "m[key] = val;",
            "meaning": "Inserts or updates the value associated with the key"
          },
          {
            "part": "m.count(key)",
            "meaning": "Returns 1 if key exists, 0 if not (safe existence check)"
          },
          {
            "part": "pair.first / pair.second",
            "meaning": "Accesses the key and value in an iterator pair"
          }
        ],
        "codeExplanation": [
          {
            "line": "map<string, int> studentRanks;",
            "explanation": "Creates an ordered map mapping student names to ranks"
          },
          {
            "line": "studentRanks[\"Varun\"] = 3;",
            "explanation": "Inserts Varun, Aarav, and Priya in arbitrary order"
          },
          {
            "line": "for (const auto &pair : studentRanks)",
            "explanation": "Loops through elements; notice they print sorted alphabetically (Aarav, Priya, Varun)"
          },
          {
            "line": "studentRanks.count(\"Aarav\")",
            "explanation": "Safely checks existence without modifying the map"
          }
        ],
        "outputExplanation": "Although inserted in arbitrary order, std::map automatically sorts keys alphabetically (Aarav, Priya, Varun). count confirms Aarav is present.",
        "commonMistakes": [
          {
            "mistake": "Using if (m[\"missing\"]) to check if a key exists.",
            "fix": "operator [] inserts a default value if missing! Use if (m.count(\"missing\")) instead."
          },
          {
            "mistake": "Using std::map when sorted order is not needed.",
            "fix": "If you just need fast lookups without sorting, use std::unordered_map for O(1) speed instead of O(log N)."
          },
          {
            "mistake": "Inserting duplicate items into std::set or std::map and expecting multiple entries.",
            "fix": "std::set and std::map strictly store unique keys; duplicates are ignored. Use std::multiset or std::multimap if duplicates are needed."
          }
        ],
        "keyPoints": [
          "std::map keeps keys automatically sorted (O(log N)).",
          "std::unordered_map provides fast average O(1) lookups.",
          "pair.first is Key; pair.second is Value.",
          "Use .count(key) to safely check if an item exists.",
          "Essential for competitive programming frequency counting."
        ],
        "quickSummary": "In simple words: Use a Map when you want to look up data by name or key. Use std::map if you want items sorted alphabetically, and std::unordered_map if you want instant O(1) lookup speed.",
        "practiceSet": [
          {
            "question": "Count the frequency of each word in a list of words using an unordered_map<string, int>.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\n#include <unordered_map>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<string> words = {\"apple\", \"banana\", \"apple\", \"cherry\", \"banana\", \"apple\"};\n    // Count frequencies\n    return 0;\n}",
            "hint": "for (const string &w : words) freq[w]++;",
            "solution": "#include <iostream>\n#include <unordered_map>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<string> words = {\"apple\", \"banana\", \"apple\", \"cherry\", \"banana\", \"apple\"};\n    unordered_map<string, int> freq;\n    for (const string &w : words) {\n        freq[w]++;\n    }\n    for (const auto &p : freq) {\n        cout << p.first << \": \" << p.second << endl;\n    }\n    return 0;\n}"
          },
          {
            "question": "Store state capitals in a map<string, string>. Look up the capital of \"Karnataka\".",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Store capitals and print Karnataka\n    return 0;\n}",
            "hint": "capitals[\"Karnataka\"] = \"Bengaluru\";",
            "solution": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, string> capitals;\n    capitals[\"Karnataka\"] = \"Bengaluru\";\n    capitals[\"Maharashtra\"] = \"Mumbai\";\n    cout << \"Capital: \" << capitals[\"Karnataka\"] << endl;\n    return 0;\n}"
          },
          {
            "question": "Demonstrate std::set: insert numbers {5, 2, 8, 2, 5, 1} and print to verify automatic sorting and duplicate removal.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    // Test std::set\n    return 0;\n}",
            "hint": "set<int> s = {5, 2, 8, 2, 5, 1}; for (int x : s) cout << x << \" \";",
            "solution": "#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    set<int> s = {5, 2, 8, 2, 5, 1};\n    for (int x : s) cout << x << \" \";\n    cout << endl; // 1 2 5 8\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Count frequencies of characters in a string using unordered_map.",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s = \"engineering\";\n    unordered_map<char, int> count;\n    for (char c : s) count[c]++;\n    for (auto p : count) cout << p.first << \":\" << p.second << \" \";\n    cout << endl;\n    return 0;\n}",
        "hint": "Loop through string and increment count[c].",
        "solution": "#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s = \"engineering\";\n    unordered_map<char, int> count;\n    for (char c : s) count[c]++;\n    for (auto p : count) cout << p.first << \":\" << p.second << \" \";\n    cout << endl;\n    return 0;\n}"
      }
    },
    {
      "id": "stl-algorithms",
      "title": "12. STL Algorithms (sort, binary_search, lower_bound)",
      "summary": "The <algorithm> library provides optimized algorithms for sorting, searching, and transforming collections in O(N log N) or O(log N) time.",
      "syntax": "#include <algorithm>\nsort(v.begin(), v.end());\nbool found = binary_search(v.begin(), v.end(), target);\nauto it = lower_bound(v.begin(), v.end(), target);",
      "codeExample": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {45, 12, 85, 32, 89, 21};\n\n    // 1. Sort ascending\n    sort(nums.begin(), nums.end());\n\n    cout << \"Sorted vector: \";\n    for (int n : nums) cout << n << \" \";\n    cout << endl;\n\n    // 2. Binary search on sorted collection (O(log N))\n    int target = 32;\n    if (binary_search(nums.begin(), nums.end(), target)) {\n        cout << \"Found \" << target << \" via Binary Search!\" << endl;\n    }\n\n    // 3. Lower bound: first element >= target\n    auto it = lower_bound(nums.begin(), nums.end(), 32);\n    cout << \"Index of first element >= 32: \" << (it - nums.begin()) << endl;\n\n    return 0;\n}",
      "expectedOutput": "Sorted vector: 12 21 32 45 85 89\nFound 32 via Binary Search!\nIndex of first element >= 32: 2",
      "commonMistake": "Calling binary_search() or lower_bound() on an unsorted vector; this produces completely wrong results or undefined behavior.",
      "explanation": {
        "intro": "The <algorithm> header is C++'s built-in algorithm engine. Instead of writing nested for-loops for sorting or binary searching by hand, C++ provides battle-tested, ultra-optimized algorithms: sort, binary_search, and lower_bound.",
        "why": "Writing a QuickSort algorithm from scratch takes 30 lines and is prone to bugs. std::sort runs Introsort (a hybrid of QuickSort, HeapSort, and InsertionSort) that is guaranteed to run in O(N log N) time and is faster than almost any handwritten sort.",
        "analogy": "Imagine organizing a deck of scattered cards. Doing it yourself card-by-card takes minutes. std::sort is an automated card-shuffling and sorting machine: you drop the cards in at begin() and pick them up sorted at end().",
        "concept": "1. Iterator Range: Algorithms take two iterators: v.begin() (start) and v.end() (one past the end).\n2. std::sort: Sorts in ascending order in O(N log N) time.\n3. std::binary_search: Returns true/false indicating if a target exists in O(log N) time (REQUIRES sorted data!).\n4. std::lower_bound: Finds the first element >= target in O(log N) time.\n5. Custom Comparator: Pass greater<int>() to sort in descending order.",
        "syntaxBreakdown": [
          {
            "part": "sort(start, end)",
            "meaning": "Sorts elements in ascending order in O(N log N) time"
          },
          {
            "part": "binary_search(start, end, val)",
            "meaning": "Returns boolean true if val exists in sorted collection"
          },
          {
            "part": "lower_bound(start, end, val)",
            "meaning": "Returns iterator to the first element >= val"
          },
          {
            "part": "v.begin() / v.end()",
            "meaning": "Iterators defining the range to process"
          },
          {
            "part": "greater<int>()",
            "meaning": "Comparator for descending order sort"
          }
        ],
        "codeExplanation": [
          {
            "line": "sort(nums.begin(), nums.end());",
            "explanation": "Sorts numbers in ascending order"
          },
          {
            "line": "binary_search(nums.begin(), nums.end(), 32)",
            "explanation": "Executes binary search on sorted vector; returns true"
          },
          {
            "line": "auto it = lower_bound(...)",
            "explanation": "Finds position of 32 in O(log N)"
          },
          {
            "line": "it - nums.begin()",
            "explanation": "Calculates the 0-based index of the iterator position (index 2)"
          }
        ],
        "outputExplanation": "The vector is sorted into 12, 21, 32, 45, 85, 89. Binary search successfully confirms 32, and lower_bound reports index 2.",
        "commonMistakes": [
          {
            "mistake": "Using binary_search() on an unsorted array.",
            "fix": "Binary search REQUIRES sorted data. Always call sort(v.begin(), v.end()) first!"
          },
          {
            "mistake": "Passing v.size() instead of iterators: sort(v, v.size()) (Compiler error).",
            "fix": "C++ algorithms take iterators: sort(v.begin(), v.end())."
          },
          {
            "mistake": "Thinking lower_bound returns an index; it returns an iterator.",
            "fix": "To get the index from an iterator, subtract the beginning: int idx = it - v.begin();."
          }
        ],
        "keyPoints": [
          "#include <algorithm> contains sort, binary_search, reverse, min, max.",
          "std::sort runs in O(N log N) time.",
          "binary_search and lower_bound require data to be sorted first.",
          "Subtract v.begin() from an iterator to get its numeric 0-based index.",
          "Use greater<int>() for descending order."
        ],
        "quickSummary": "In simple words: Don't write sorting and searching algorithms by hand. Use sort(v.begin(), v.end()) to sort, and binary_search() to find items instantly in O(log N) time.",
        "practiceSet": [
          {
            "question": "Sort a vector<int> in descending order using sort() and greater<int>().",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {4, 1, 9, 2, 7};\n    // Sort descending and print\n    return 0;\n}",
            "hint": "sort(nums.begin(), nums.end(), greater<int>());",
            "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {4, 1, 9, 2, 7};\n    sort(nums.begin(), nums.end(), greater<int>());\n    for (int n : nums) cout << n << \" \";\n    cout << endl; // 9 7 4 2 1\n    return 0;\n}"
          },
          {
            "question": "Find the minimum and maximum element in a vector using *min_element and *max_element from <algorithm>.",
            "difficulty": "Easy",
            "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {45, 12, 85, 32};\n    // Print min and max\n    return 0;\n}",
            "hint": "cout << *min_element(v.begin(), v.end()) << endl;",
            "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {45, 12, 85, 32};\n    cout << \"Min: \" << *min_element(v.begin(), v.end()) << endl;\n    cout << \"Max: \" << *max_element(v.begin(), v.end()) << endl;\n    return 0;\n}"
          },
          {
            "question": "Given a sorted vector {10, 20, 30, 40, 50}, use lower_bound to find the index of the first number >= 30.",
            "difficulty": "Medium",
            "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {10, 20, 30, 40, 50};\n    // Find lower_bound index of 30\n    return 0;\n}",
            "hint": "auto it = lower_bound(v.begin(), v.end(), 30); int idx = it - v.begin();",
            "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {10, 20, 30, 40, 50};\n    auto it = lower_bound(v.begin(), v.end(), 30);\n    cout << \"Index of first element >= 30: \" << (it - v.begin()) << endl;\n    return 0;\n}"
          }
        ]
      },
      "practice": {
        "question": "Sort a vector in descending order using std::greater<int>().",
        "difficulty": "Easy",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 1, 4, 1, 5, 9};\n    sort(v.begin(), v.end(), greater<int>());\n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
        "hint": "Pass greater<int>() as third argument to sort.",
        "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 1, 4, 1, 5, 9};\n    sort(v.begin(), v.end(), greater<int>());\n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    return 0;\n}"
      }
    }
  ],
  "bTechPriority": {
    "semesterExams": [
      "Four Pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism with code diagrams.",
      "Virtual Functions and vtables: How dynamic binding and virtual method tables work under the hood.",
      "Constructors & Destructors: Copy constructor (deep copy vs shallow copy), member initializer list, and virtual destructors.",
      "Operator Overloading: Syntax and rules (overloading +, <<, >>, ==).",
      "Exception Handling: try, catch, throw, and standard exceptions (std::runtime_error, std::out_of_range)."
    ],
    "vivaQuestions": [
      {
        "q": "What is a Virtual Function and what is a vtable?",
        "a": "A virtual function is resolved at runtime via dynamic dispatch. The compiler creates a virtual table (vtable) containing function pointers for each class with virtual functions."
      },
      {
        "q": "What is the difference between Shallow Copy and Deep Copy?",
        "a": "Shallow copy duplicates pointer addresses, leading to double-free errors. Deep copy allocates separate heap memory and duplicates the underlying data."
      },
      {
        "q": "Why should a base class destructor always be declared virtual?",
        "a": "If a derived object is deleted via a base pointer, a non-virtual destructor only executes the base cleanup, leaking derived class heap allocations."
      },
      {
        "q": "What is the difference between std::vector::size() and capacity()?",
        "a": "size() is the number of elements currently stored; capacity() is the total memory allocated before a reallocation is triggered."
      }
    ],
    "dsaPrerequisites": [
      "std::vector, std::pair, and std::tuple are the backbone of graph adjacency lists (vector<pair<int, int>> adj[N]).",
      "std::priority_queue is essential for Dijkstra shortest path and Prim minimum spanning tree algorithms.",
      "std::set and std::unordered_map are critical for hash maps, disjoint set unions (DSU), and frequency counters in LeetCode problems."
    ],
    "interviewTips": [
      "In technical interviews, state time complexities of STL operations (e.g. map is O(log N), unordered_map is average O(1)).",
      "Pass non-primitive objects by constant reference (const string &s, const vector<int> &v) to avoid costly heap copies.",
      "Use ios_base::sync_with_stdio(false); cin.tie(NULL); for fast competitive programming I/O."
    ]
  }
};
