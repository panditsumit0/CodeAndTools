import { CourseData } from './types';

export const JAVA_COURSE: CourseData = {
  "id": "java",
  "slug": "java",
  "name": "Java",
  "tagline": "Write Once, Run Anywhere (WORA) & Enterprise Architecture",
  "shortDescription": "Learn object-oriented programming, collections, exceptions and application development.",
  "difficulty": "Medium",
  "bestFor": "Class 12 CS/IP Students, B.Tech Core Java Exams, Enterprise Backend (Spring Boot), Android Native Apps, and Campus Placements",
  "icon": "Coffee",
  "color": "amber",
  "intro": {
    "whatIs": "Java is an object-oriented programming language created by James Gosling at Sun Microsystems in 1995. Its key superpower is \"Write Once, Run Anywhere\": Java programs compile into bytecode (.class files) that can run on any device with a Java Virtual Machine (JVM).",
    "whyLearn": "Java is one of the most widely taught programming languages in school and college curricula, and the backbone of enterprise banking and Android apps. Learning Java teaches you strict object-oriented design and clean coding discipline.",
    "whereUsed": [
      "Enterprise Backend Systems & Banking (Spring Boot, Microservices)",
      "Android Mobile Application Development (Android SDK)",
      "Big Data Pipelines (Apache Spark, Hadoop, Kafka)",
      "Large Scale Web Platforms (LinkedIn, Amazon, Netflix backend)"
    ],
    "advantages": [
      "Platform independent: runs on Windows, Mac, Linux, and servers without changing code",
      "Automatic garbage collection frees unused memory automatically",
      "Extremely strong typing prevents silly runtime bugs before code runs",
      "Huge ecosystem with millions of libraries and frameworks"
    ],
    "limitations": [
      "More wordy (verbose) than Python: requires declaring classes and types for everything",
      "Requires slightly more memory than low-level languages like C and C++",
      "Programs must be compiled with javac before they can run"
    ]
  },
  "visualCallout": {
    "title": "JDK vs JRE vs JVM Explained for Beginners",
    "description": "The three layers that make Java work on any computer:",
    "items": [
      {
        "label": "JDK (Java Development Kit)",
        "detail": "The toolbox for developers. Contains the compiler (javac) to turn code into bytecode.",
        "badge": "Developer SDK"
      },
      {
        "label": "JRE (Java Runtime Environment)",
        "detail": "The environment needed to run Java programs. Contains the standard libraries and the JVM.",
        "badge": "Runtime"
      },
      {
        "label": "JVM (Java Virtual Machine)",
        "detail": "The engine that reads bytecode (.class) and translates it into your computer CPU instructions.",
        "badge": "Engine"
      }
    ]
  },
  "topics": [
    {
      "id": "basic-syntax",
      "title": "1. Basic Syntax & Main Method Anatomy",
      "summary": "Every Java application must be defined inside a class, and execution always begins at the public static void main(String[] args) method.",
      "syntax": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
      "codeExample": "// Basic Java Program Structure\npublic class Main {\n    public static void main(String[] args) {\n        String studentName = \"Aarav\";\n        int grade = 12;\n        \n        System.out.println(\"=== Student Profile ===\");\n        System.out.println(\"Name: \" + studentName);\n        System.out.println(\"Class: \" + grade + \"th Grade\");\n        System.out.println(\"Welcome to Java Programming!\");\n    }\n}",
      "expectedOutput": "=== Student Profile ===\nName: Aarav\nClass: 12th Grade\nWelcome to Java Programming!",
      "commonMistake": "Mismatching the class name and the file name (e.g., naming the public class \"Student\" inside a file named \"Main.java\"), which causes a compilation error.",
      "explanation": {
        "intro": "Java syntax is the set of rules that defines how a Java program is written. In Java, everything must live inside a class, and your program always starts executing from a special door called the \"main\" method.",
        "why": "Computers need a clear, unambiguous starting point. In Java, the main method acts as the master key that the operating system turns to start your program, while System.out.println lets the program talk to you on the screen.",
        "analogy": "Think of a Java file like a school building (the Class). To enter the building and start school activities, there is one official front door marked \"Main Entrance\" (public static void main). Statements inside are the daily classes, and System.out.println is the school intercom announcing messages.",
        "concept": "1. public class Main: Defines a public container named Main. The file must be saved as Main.java.\n2. public static void main(String[] args): The exact signature where Java starts running.\n   - public: Accessible from anywhere by the JVM.\n   - static: Can run without creating an object of the class first.\n   - void: Does not return any value back to the OS.\n   - main: The required name of the starting method.\n   - String[] args: Holds optional command-line text arguments.\n3. Semicolons (;): Every complete statement must end with a semicolon.",
        "syntaxBreakdown": [
          {
            "part": "public class Main",
            "meaning": "Declares a publicly accessible class named Main"
          },
          {
            "part": "public static void main",
            "meaning": "The mandatory entry-point method executed by the JVM"
          },
          {
            "part": "String[] args",
            "meaning": "Array of strings passed to the program from the command line"
          },
          {
            "part": "System.out.println(...)",
            "meaning": "Prints the text to the console and moves the cursor to a new line"
          },
          {
            "part": ";",
            "meaning": "Semicolon: marks the end of an executable statement"
          }
        ],
        "codeExplanation": [
          {
            "line": "public class Main {",
            "explanation": "Opens the class block; class name must match file name"
          },
          {
            "line": "public static void main(String[] args) {",
            "explanation": "The entry point method where program execution begins"
          },
          {
            "line": "String studentName = \"Aarav\";",
            "explanation": "Declares a text variable storing the student name"
          },
          {
            "line": "int grade = 12;",
            "explanation": "Declares an integer variable storing the class level"
          },
          {
            "line": "System.out.println(\"Name: \" + studentName);",
            "explanation": "Concatenates the string and prints it to the screen"
          }
        ],
        "outputExplanation": "Java runs the main method line-by-line from top to bottom. Each System.out.println prints its message on a separate new line on the screen.",
        "commonMistakes": [
          {
            "mistake": "Saving the file with a different name than the public class (e.g. class is \"Main\" but file is \"test.java\").",
            "fix": "In Java, the public class name and the file name must match exactly (Main.java for class Main)."
          },
          {
            "mistake": "Writing \"system.out.println\" or \"System.out.Println\" with wrong casing.",
            "fix": "Java is strictly case-sensitive. It is always capital \"System\" and lowercase \"out.println\"."
          },
          {
            "mistake": "Forgetting semicolons (;) at the end of statements.",
            "fix": "Every instruction in Java must end with a semicolon."
          },
          {
            "mistake": "Omitting \"static\" from the main method header.",
            "fix": "Without static, the JVM cannot run the method without first instantiating the class, causing a runtime error."
          }
        ],
        "keyPoints": [
          "Java is strictly case-sensitive (Main != main).",
          "All code must reside inside a class.",
          "Execution always begins at: public static void main(String[] args).",
          "Statements end with a semicolon (;).",
          "Use System.out.println() for printing with a newline, and System.out.print() for printing without a newline."
        ],
        "quickSummary": "In simple words: In Java, code lives inside classes. When you run your program, Java looks for the main() method and runs your instructions inside it line-by-line, ending each line with a semicolon.",
        "practiceSet": [
          {
            "question": "Write a Java program that prints your name and your school name on two separate lines.",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Print name and school\n    }\n}",
            "hint": "Use System.out.println(\"Your Name\"); and another System.out.println(\"Your School\");",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Name: Diya Sharma\");\n        System.out.println(\"School: National Public School\");\n    }\n}"
          },
          {
            "question": "Write a Java program that defines two numbers a = 15 and b = 25, calculates their sum, and prints \"Sum = 40\".",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 25;\n        // Calculate and print sum\n    }\n}",
            "hint": "System.out.println(\"Sum = \" + (a + b));",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 25;\n        int sum = a + b;\n        System.out.println(\"Sum = \" + sum);\n    }\n}"
          },
          {
            "question": "Print a 3-line pattern using stars (*): line 1 with 1 star, line 2 with 2 stars, line 3 with 3 stars.",
            "difficulty": "Medium",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Print star pattern\n    }\n}",
            "hint": "Use 3 separate println statements: \"*\", \"**\", \"***\".",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"*\");\n        System.out.println(\"**\");\n        System.out.println(\"***\");\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Write a Java program that prints your branch name and current semester on two separate lines.",
        "difficulty": "Easy",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Print branch on line 1 and semester on line 2\n    }\n}",
        "hint": "Use System.out.println() twice.",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Branch: Computer Science & Engineering\");\n        System.out.println(\"Semester: 1\");\n    }\n}"
      }
    },
    {
      "id": "variables-datatypes",
      "title": "2. Primitive Data Types & Wrapper Classes",
      "summary": "Java provides 8 primitive types (byte, short, int, long, float, double, char, boolean) for raw performance, alongside object Wrapper Classes (Integer, Double) for collection support.",
      "syntax": "// Primitive type declarations\nint age = 17;\ndouble price = 99.50;\nchar grade = 'A';\nboolean isPassed = true;\n\n// Wrapper classes\nInteger wrappedAge = Integer.valueOf(age);",
      "codeExample": "public class Main {\n    public static void main(String[] args) {\n        // 8 Primitive Data Types in Java\n        int rollNo = 25;\n        double marksPercentage = 94.6;\n        char section = 'B';\n        boolean feeCleared = true;\n        \n        // Wrapper Class Autoboxing\n        Integer wrappedRoll = rollNo; // Automatic conversion (Autoboxing)\n        \n        System.out.println(\"Roll Number: \" + rollNo);\n        System.out.println(\"Marks: \" + marksPercentage + \"%\");\n        System.out.println(\"Section: \" + section);\n        System.out.println(\"Fee Status: \" + feeCleared);\n        System.out.println(\"Max Integer value: \" + Integer.MAX_VALUE);\n    }\n}",
      "expectedOutput": "Roll Number: 25\nMarks: 94.6%\nSection: B\nFee Status: true\nMax Integer value: 2147483647",
      "commonMistake": "Using single quotes for Strings (e.g. String s = 'hello') or double quotes for characters (char c = \"A\"). In Java, single quotes are strictly for char, and double quotes are for String.",
      "explanation": {
        "intro": "Variables are labeled storage locations in memory. In Java, every variable must be declared with an explicit data type before it can store a value. Java has 8 primitive data types for raw values and Wrapper Classes for object representations.",
        "why": "Computers need to know how much memory to set aside. An integer (int) takes 4 bytes of RAM, while a single character (char) takes 2 bytes. Statically typing variables makes Java fast, secure, and predictable.",
        "analogy": "Think of data types like storage containers of specific shapes: a round bottle for liquids (double for decimals), a small envelope for a single stamp (char for a single letter), and a sturdy coin box for counting coins (int for whole numbers). You cannot pour liquid into an envelope—Java prevents type mismatches before they cause spills.",
        "concept": "Java divides types into two categories:\n1. 8 Primitive Types (stored on the Stack):\n   - byte (1 byte), short (2 bytes), int (4 bytes, default whole number), long (8 bytes)\n   - float (4 bytes), double (8 bytes, default decimal)\n   - char (2 bytes Unicode, single quotes 'A')\n   - boolean (true or false)\n2. Wrapper Classes (stored on the Heap):\n   - Integer, Double, Character, Boolean, etc.\n   - Autoboxing: Automatic conversion between primitive and wrapper (e.g. Integer x = 10).\n   - Unboxing: Automatic conversion from wrapper back to primitive.",
        "syntaxBreakdown": [
          {
            "part": "int variable = 10;",
            "meaning": "Declares a 32-bit whole number variable"
          },
          {
            "part": "double variable = 3.14;",
            "meaning": "Declares a 64-bit precision floating-point decimal"
          },
          {
            "part": "char variable = 'A';",
            "meaning": "Declares a single 16-bit Unicode character enclosed in single quotes"
          },
          {
            "part": "boolean variable = true;",
            "meaning": "Stores logical true or false"
          },
          {
            "part": "Integer / Double",
            "meaning": "Wrapper classes that wrap primitives inside objects so they can be stored in collections like ArrayList"
          }
        ],
        "codeExplanation": [
          {
            "line": "int rollNo = 25;",
            "explanation": "Creates a 4-byte integer variable initialized to 25"
          },
          {
            "line": "double marksPercentage = 94.6;",
            "explanation": "Creates an 8-byte double decimal variable"
          },
          {
            "line": "char section = 'B';",
            "explanation": "Creates a character variable holding single letter 'B'"
          },
          {
            "line": "Integer wrappedRoll = rollNo;",
            "explanation": "Autoboxing: converts primitive int 25 into an Integer object"
          },
          {
            "line": "Integer.MAX_VALUE",
            "explanation": "Accesses the built-in constant showing the maximum possible int value"
          }
        ],
        "outputExplanation": "The variables print with their assigned values. Integer.MAX_VALUE demonstrates how wrapper classes provide helpful built-in constants.",
        "commonMistakes": [
          {
            "mistake": "Putting double quotes around a char: char c = \"A\"; (causes type mismatch error).",
            "fix": "In Java, char values MUST be in single quotes: char c = 'A';. Double quotes are only for Strings."
          },
          {
            "mistake": "Writing large long numbers without the \"L\" suffix (e.g. long n = 9999999999;).",
            "fix": "By default Java treats literal numbers as int. Add \"L\" at the end for longs: 9999999999L."
          },
          {
            "mistake": "Expecting integer division to produce decimals: int result = 5 / 2; (result is 2, not 2.5).",
            "fix": "Integer division truncates decimals. Use double: double result = 5.0 / 2; (produces 2.5)."
          },
          {
            "mistake": "Comparing Wrapper objects with == instead of .equals().",
            "fix": "Wrapper classes are objects. == checks memory address; use .equals() to compare values."
          }
        ],
        "keyPoints": [
          "Java has 8 primitive types: byte, short, int, long, float, double, char, boolean.",
          "char uses single quotes ('A'); String uses double quotes (\"Hello\").",
          "int is 4 bytes; double is 8 bytes.",
          "Wrapper classes (Integer, Double) turn primitives into objects for collections.",
          "Autoboxing automatically converts primitives to wrappers and vice versa."
        ],
        "quickSummary": "In simple words: Use int for whole numbers, double for decimals, char with single quotes for one letter, and boolean for true/false. Wrapper classes like Integer let you treat these basic numbers as objects when needed.",
        "practiceSet": [
          {
            "question": "Declare variables for student age (int), height in meters (double), and attendance status (boolean), and print them.",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Declare age, height, and attendance\n    }\n}",
            "hint": "int age = 17; double height = 1.72; boolean isPresent = true;",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        int age = 17;\n        double height = 1.72;\n        boolean isPresent = true;\n        System.out.println(\"Age: \" + age + \", Height: \" + height + \"m, Present: \" + isPresent);\n    }\n}"
          },
          {
            "question": "Calculate the total price of 3 pens costing 12.50 each and 2 notebooks costing 45.00 each using double variables.",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Calculate total\n    }\n}",
            "hint": "double total = (3 * 12.50) + (2 * 45.00);",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        double penPrice = 12.50;\n        double notebookPrice = 45.00;\n        double total = (3 * penPrice) + (2 * notebookPrice);\n        System.out.println(\"Total Bill: ₹\" + total);\n    }\n}"
          },
          {
            "question": "Demonstrate integer division vs decimal division: print the result of 7 / 2 and 7.0 / 2.",
            "difficulty": "Medium",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Compare 7 / 2 and 7.0 / 2\n    }\n}",
            "hint": "System.out.println(\"Int div: \" + (7 / 2)); System.out.println(\"Double div: \" + (7.0 / 2));",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Integer Division (7 / 2): \" + (7 / 2));\n        System.out.println(\"Floating-Point Division (7.0 / 2): \" + (7.0 / 2));\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Print minimum and maximum values of byte, int, and double using their Wrapper classes.",
        "difficulty": "Easy",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Byte: \" + Byte.MIN_VALUE + \" to \" + Byte.MAX_VALUE);\n        System.out.println(\"Int: \" + Integer.MIN_VALUE + \" to \" + Integer.MAX_VALUE);\n    }\n}",
        "hint": "Use Byte.MIN_VALUE, Integer.MAX_VALUE, etc.",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Byte: \" + Byte.MIN_VALUE + \" to \" + Byte.MAX_VALUE);\n        System.out.println(\"Int: \" + Integer.MIN_VALUE + \" to \" + Integer.MAX_VALUE);\n    }\n}"
      }
    },
    {
      "id": "strings-stringpool",
      "title": "3. Strings & The String Constant Pool",
      "summary": "Strings in Java are immutable objects. String literals are stored in the String Constant Pool inside heap memory to optimize memory usage.",
      "syntax": "// String literal (uses String Constant Pool)\nString s1 = \"Hello\";\n\n// New String object (forced on Heap outside pool)\nString s2 = new String(\"Hello\");\n\n// Value comparison vs Reference comparison\ns1.equals(s2); // true (compares characters)\ns1 == s2;      // false (compares memory addresses)",
      "codeExample": "public class Main {\n    public static void main(String[] args) {\n        String s1 = \"Java\";\n        String s2 = \"Java\";\n        String s3 = new String(\"Java\");\n        \n        // Reference comparison (memory address)\n        System.out.println(\"s1 == s2 (same pool literal): \" + (s1 == s2));\n        System.out.println(\"s1 == s3 (pool vs heap object): \" + (s1 == s3));\n        \n        // Content comparison (characters)\n        System.out.println(\"s1.equals(s3) (value check): \" + s1.equals(s3));\n        \n        // String methods\n        System.out.println(\"Length: \" + s1.length());\n        System.out.println(\"Uppercase: \" + s1.toUpperCase());\n    }\n}",
      "expectedOutput": "s1 == s2 (same pool literal): true\ns1 == s3 (pool vs heap object): false\ns1.equals(s3) (value check): true\nLength: 4\nUppercase: JAVA",
      "commonMistake": "Using == to compare the contents of two Strings instead of .equals(). == compares memory addresses, not characters, leading to subtle bugs.",
      "explanation": {
        "intro": "A String in Java is an object that represents a sequence of characters. Unlike numbers, Strings in Java are immutable (cannot be changed once created) and are stored in a special memory area called the String Constant Pool.",
        "why": "In software, words like \"admin\", \"success\", and \"Delhi\" are reused thousands of times. If Java created a new object for every duplicate word, memory would fill up fast. The String Pool shares a single copy among identical string literals.",
        "analogy": "Imagine a communal library book labeled \"Harry Potter\". If two students want to read the book, the library doesn't print a whole new book; both students point to the same copy on the shelf (s1 == s2 is true). But if one student buys their own brand-new printed copy from a bookstore (new String()), it has a different physical location (s1 == s3 is false), even though the story inside is identical (s1.equals(s3) is true).",
        "concept": "1. Immutability: Once a String object is created, its characters cannot be altered. Any method like s.toUpperCase() returns a brand-new String object.\n2. String Constant Pool: A special cache inside the JVM Heap. Literals like \"Java\" are stored once and reused.\n3. == vs .equals():\n   - == checks if two references point to the exact same memory address.\n   - .equals() checks if the actual sequence of characters is identical.\n4. StringBuilder: When you need to build or modify text in a loop, use StringBuilder to avoid creating hundreds of temporary throwaway String objects.",
        "syntaxBreakdown": [
          {
            "part": "String s = \"text\";",
            "meaning": "Creates or reuses a string literal inside the String Constant Pool"
          },
          {
            "part": "new String(\"text\")",
            "meaning": "Forces creation of a new independent object on the heap, bypassing the pool"
          },
          {
            "part": "s1.equals(s2)",
            "meaning": "Compares the actual characters of two strings for equality"
          },
          {
            "part": "s.length()",
            "meaning": "Returns the number of characters in the string"
          },
          {
            "part": "s.charAt(i)",
            "meaning": "Returns the character at index i (zero-indexed)"
          }
        ],
        "codeExplanation": [
          {
            "line": "String s1 = \"Java\";",
            "explanation": "Puts \"Java\" into the String Constant Pool"
          },
          {
            "line": "String s2 = \"Java\";",
            "explanation": "Reuses the existing \"Java\" reference from the pool (s1 == s2 is true)"
          },
          {
            "line": "String s3 = new String(\"Java\");",
            "explanation": "Allocates a new separate object on the heap (s1 == s3 is false)"
          },
          {
            "line": "s1.equals(s3)",
            "explanation": "Verifies that both objects contain the exact same characters \"Java\""
          }
        ],
        "outputExplanation": "s1 == s2 is true because both point to the identical shared pool object. s1 == s3 is false because s3 is a new heap object. s1.equals(s3) is true because both contain \"Java\".",
        "commonMistakes": [
          {
            "mistake": "Comparing strings with ==: if (input == \"yes\").",
            "fix": "Always compare strings with .equals(): if (input.equals(\"yes\")) or .equalsIgnoreCase()."
          },
          {
            "mistake": "Concatenating strings inside a loop using \"+\": s += i in a 10,000 iteration loop.",
            "fix": "Strings are immutable, so \"+\" in loops creates thousands of garbage objects. Use StringBuilder instead."
          },
          {
            "mistake": "Assuming s.toUpperCase() modifies the original string s.",
            "fix": "Strings are immutable! s.toUpperCase() returns a new string. Assign it: s = s.toUpperCase();."
          }
        ],
        "keyPoints": [
          "Strings in Java are immutable; they can never be modified in-place.",
          "Always use .equals() or .equalsIgnoreCase() to compare string contents.",
          "== checks memory addresses, not the text characters.",
          "String literals are cached in the String Constant Pool for memory efficiency.",
          "Use StringBuilder when appending strings frequently inside loops."
        ],
        "quickSummary": "In simple words: Strings hold text. They are frozen (immutable) once made. Always use .equals() to compare words, never ==, and remember that methods like toUpperCase() give you a new string without altering the original.",
        "practiceSet": [
          {
            "question": "Given String city = \"Bengaluru\", print its length and the character at index 0.",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        String city = \"Bengaluru\";\n        // Print length and first character\n    }\n}",
            "hint": "Use city.length() and city.charAt(0).",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        String city = \"Bengaluru\";\n        System.out.println(\"Length: \" + city.length());\n        System.out.println(\"First Char: \" + city.charAt(0));\n    }\n}"
          },
          {
            "question": "Check if two strings str1 = \"Computer\" and str2 = \"computer\" are equal ignoring case.",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        String str1 = \"Computer\";\n        String str2 = \"computer\";\n        // Check equality ignoring case\n    }\n}",
            "hint": "Use str1.equalsIgnoreCase(str2);",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        String str1 = \"Computer\";\n        String str2 = \"computer\";\n        boolean match = str1.equalsIgnoreCase(str2);\n        System.out.println(\"Equal ignoring case: \" + match);\n    }\n}"
          },
          {
            "question": "Use StringBuilder to build a string containing numbers 1 to 5 separated by hyphens (1-2-3-4-5).",
            "difficulty": "Medium",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        // Append 1 to 5 with hyphens\n    }\n}",
            "hint": "Loop from 1 to 5. Append number, and if i < 5 append \"-\".",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 1; i <= 5; i++) {\n            sb.append(i);\n            if (i < 5) sb.append(\"-\");\n        }\n        System.out.println(\"Result: \" + sb.toString());\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Demonstrate that s.concat(\" World\") does not modify the original string s.",
        "difficulty": "Easy",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        s.concat(\" World\");\n        System.out.println(s); // Still \"Hello\"\n    }\n}",
        "hint": "Assign the result to observe the change: s = s.concat(\" World\");",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        s.concat(\" World\");\n        System.out.println(\"s without reassigning: \" + s);\n        s = s.concat(\" World\");\n        System.out.println(\"s after reassigning: \" + s);\n    }\n}"
      }
    },
    {
      "id": "classes-objects",
      "title": "4. Classes, Objects & Constructors",
      "summary": "A class is a blueprint defining attributes (state) and methods (behavior). Objects are instantiated instances with their own independent state initialized via constructors.",
      "syntax": "class Student {\n    String name;\n    int rollNo;\n\n    // Constructor\n    Student(String name, int rollNo) {\n        this.name = name;\n        this.rollNo = rollNo;\n    }\n\n    void display() {\n        System.out.println(name + \" - #\" + rollNo);\n    }\n}",
      "codeExample": "class Student {\n    String name;\n    int rollNo;\n    double marks;\n\n    // Parameterized Constructor\n    Student(String name, int rollNo, double marks) {\n        this.name = name;\n        this.rollNo = rollNo;\n        this.marks = marks;\n    }\n\n    void displayDetails() {\n        System.out.println(\"Student: \" + name + \" | Roll: \" + rollNo + \" | Marks: \" + marks);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Instantiating objects using the constructor\n        Student s1 = new Student(\"Aman\", 101, 88.5);\n        Student s2 = new Student(\"Priya\", 102, 95.0);\n        \n        s1.displayDetails();\n        s2.displayDetails();\n    }\n}",
      "expectedOutput": "Student: Aman | Roll: 101 | Marks: 88.5\nStudent: Priya | Roll: 102 | Marks: 95.0",
      "commonMistake": "Writing a return type for a constructor (e.g. void Student()), which turns it into a normal method and breaks object initialization.",
      "explanation": {
        "intro": "In Java, a Class is an architectural blueprint, and an Object is a real thing built from that blueprint. A Constructor is a special method that runs automatically when a new object is born to set up its starting values.",
        "why": "In real software, you handle complex real-world entities like Bank Accounts, Car engines, and Students. Classes let you bundle data (name, rollNo) and actions (displayDetails()) together so code is organized and reusable.",
        "analogy": "Think of a class like an empty car blueprint drafted by automobile engineers. The blueprint specifies that every car has wheels, a color, and an engine. When the factory uses that blueprint to assemble a red car and a blue car, each physical car parked in the lot is an Object.",
        "concept": "1. Class: The blueprint specifying fields (variables) and methods (functions).\n2. Object: A working instance created in memory using the new keyword.\n3. Constructor: A method with the EXACT same name as the class and NO return type.\n4. this keyword: Refers to the current object. Used to distinguish field variables from incoming parameter names (this.name = name).\n5. Default Constructor: If you do not define any constructor, Java automatically provides an empty default constructor.",
        "syntaxBreakdown": [
          {
            "part": "class ClassName { ... }",
            "meaning": "Defines the blueprint"
          },
          {
            "part": "ClassName(params) { ... }",
            "meaning": "Constructor: has same name as class and NO return type"
          },
          {
            "part": "this.field = param",
            "meaning": "Resolves ambiguity: assigns the parameter to the current object field"
          },
          {
            "part": "new ClassName(...)",
            "meaning": "Allocates memory on the heap and executes the constructor"
          }
        ],
        "codeExplanation": [
          {
            "line": "class Student {",
            "explanation": "Defines the blueprint with name, rollNo, and marks fields"
          },
          {
            "line": "Student(String name, int rollNo, double marks) {",
            "explanation": "Constructor initializing the three fields"
          },
          {
            "line": "this.name = name;",
            "explanation": "Sets this instance name to the passed parameter"
          },
          {
            "line": "Student s1 = new Student(\"Aman\", 101, 88.5);",
            "explanation": "Creates the first real student object on the heap"
          },
          {
            "line": "s1.displayDetails();",
            "explanation": "Calls the display method on Aman object"
          }
        ],
        "outputExplanation": "Each student object holds its own independent data in heap memory and prints its unique details when displayDetails() is called.",
        "commonMistakes": [
          {
            "mistake": "Putting a return type like \"void\" on a constructor: void Student() { }.",
            "fix": "Constructors NEVER have return types (not even void). If you add void, Java treats it as a regular method."
          },
          {
            "mistake": "Forgetting \"this.\" when constructor parameter names match class field names: name = name;.",
            "fix": "Writing name = name assigns the parameter to itself! Use this.name = name;."
          },
          {
            "mistake": "Attempting to call non-static methods without creating an object first.",
            "fix": "Non-static methods belong to instances. Create an object with new before calling them: s1.displayDetails()."
          }
        ],
        "keyPoints": [
          "A class is a blueprint; an object is an instance built with new.",
          "Constructors have the exact same name as the class and no return type.",
          "The this keyword refers to the current instance.",
          "Multiple objects can be created from one class, each with independent state.",
          "Fields hold state; methods define behavior."
        ],
        "quickSummary": "In simple words: A class is a blueprint; an object is a real instance created from it using new. The constructor initializes starting values with help from the this keyword.",
        "practiceSet": [
          {
            "question": "Create a Book class with title and price. Add a constructor and a display() method.",
            "difficulty": "Easy",
            "starterCode": "class Book {\n    // Add fields, constructor, display\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create and display a book\n    }\n}",
            "hint": "Book(String title, double price) { this.title = title; this.price = price; }",
            "solution": "class Book {\n    String title;\n    double price;\n\n    Book(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n\n    void display() {\n        System.out.println(\"Book: \" + title + \" (₹\" + price + \")\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"Atomic Habits\", 499.0);\n        b.display();\n    }\n}"
          },
          {
            "question": "Create a Rectangle class with width and height. Add a method getArea() that returns width * height.",
            "difficulty": "Easy",
            "starterCode": "class Rectangle {\n    int width, height;\n    Rectangle(int w, int h) { width = w; height = h; }\n    // Add getArea method\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(5, 8);\n        // Print area\n    }\n}",
            "hint": "int getArea() { return width * height; }",
            "solution": "class Rectangle {\n    int width, height;\n    Rectangle(int w, int h) { width = w; height = h; }\n    int getArea() { return width * height; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(5, 8);\n        System.out.println(\"Area: \" + r.getArea());\n    }\n}"
          },
          {
            "question": "Demonstrate constructor overloading: provide a default constructor setting default values, and a parameterized constructor.",
            "difficulty": "Medium",
            "starterCode": "class Account {\n    String holder;\n    double balance;\n    // Default constructor\n    // Parameterized constructor\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create both accounts\n    }\n}",
            "hint": "Account() { holder = \"Unknown\"; balance = 0.0; } Account(String h, double b) { holder = h; balance = b; }",
            "solution": "class Account {\n    String holder;\n    double balance;\n\n    Account() {\n        holder = \"Guest\";\n        balance = 0.0;\n    }\n\n    Account(String h, double b) {\n        holder = h;\n        balance = b;\n    }\n\n    void show() {\n        System.out.println(holder + \" - ₹\" + balance);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Account a1 = new Account();\n        Account a2 = new Account(\"Neha\", 1500.0);\n        a1.show();\n        a2.show();\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Design a Circle class with a radius field, constructor, and getArea() method.",
        "difficulty": "Easy",
        "starterCode": "class Circle {\n    double radius;\n    Circle(double r) { this.radius = r; }\n    double getArea() { return Math.PI * radius * radius; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Circle c = new Circle(7.0);\n        System.out.printf(\"Area: %.2f\\n\", c.getArea());\n    }\n}",
        "hint": "Use Math.PI * radius * radius.",
        "solution": "class Circle {\n    double radius;\n    Circle(double r) { this.radius = r; }\n    double getArea() { return Math.PI * radius * radius; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Circle c = new Circle(7.0);\n        System.out.printf(\"Area: %.2f\\n\", c.getArea());\n    }\n}"
      }
    },
    {
      "id": "inheritance-polymorphism",
      "title": "5. Inheritance, Overriding & Super",
      "summary": "Inheritance allows a subclass to inherit fields and methods from a superclass using extends. Runtime polymorphism allows dynamic method dispatch via method overriding.",
      "syntax": "class Animal {\n    void sound() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}",
      "codeExample": "// Inheritance and Runtime Polymorphism\nclass Person {\n    String name;\n    Person(String name) {\n        this.name = name;\n    }\n    void displayRole() {\n        System.out.println(name + \" is a Person\");\n    }\n}\n\nclass Teacher extends Person {\n    String subject;\n    Teacher(String name, String subject) {\n        super(name); // Call parent constructor\n        this.subject = subject;\n    }\n    @Override\n    void displayRole() {\n        System.out.println(name + \" teaches \" + subject);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Polymorphic reference: Parent type pointing to Child object\n        Person p1 = new Person(\"Ramesh\");\n        Person p2 = new Teacher(\"Dr. Sharma\", \"Physics\");\n        \n        p1.displayRole();\n        p2.displayRole(); // Dynamically calls Teacher's displayRole\n    }\n}",
      "expectedOutput": "Ramesh is a Person\nDr. Sharma teaches Physics",
      "commonMistake": "Forgetting to call super() when the parent class has a parameterized constructor, which leads to a compiler error.",
      "explanation": {
        "intro": "Inheritance lets a new class automatically inherit all properties and methods from an existing class using the \"extends\" keyword. Polymorphism (\"many forms\") allows different child classes to respond to the same method in their own unique way.",
        "why": "Without inheritance, if you have Person, Student, Teacher, and Principal, you would have to rewrite name, email, and phone number in all 4 classes. Inheritance eliminates duplicate code and lets you write general code that works across all subclasses.",
        "analogy": "Think of genetic inheritance: you inherit basic human traits from your parents (arms, eyes, speech). But polymorphism is how you express those traits: if the parent sings classical music, the child can override that behavior to sing rock music. They both respond to the action \"sing\", but in their own unique style.",
        "concept": "1. extends keyword: Establishes a parent-child relationship.\n2. super keyword: Refers to the immediate parent class. super() calls the parent constructor.\n3. Method Overriding: When a child class provides its own specific implementation of a method already defined in the parent.\n4. @Override annotation: Tells the compiler to verify that you are actually overriding a valid parent method.\n5. Runtime Polymorphism: When a parent reference points to a child object (Person p = new Teacher()), Java calls the child method dynamically at runtime.",
        "syntaxBreakdown": [
          {
            "part": "class Child extends Parent",
            "meaning": "Child inherits all public and protected members of Parent"
          },
          {
            "part": "super(args)",
            "meaning": "Calls the matching constructor of the parent class"
          },
          {
            "part": "@Override",
            "meaning": "Annotation ensuring the method correctly overrides a parent method"
          },
          {
            "part": "Parent obj = new Child()",
            "meaning": "Polymorphic assignment: general reference pointing to specific instance"
          }
        ],
        "codeExplanation": [
          {
            "line": "class Teacher extends Person {",
            "explanation": "Teacher inherits the name field from Person"
          },
          {
            "line": "super(name);",
            "explanation": "Hands name to Person constructor to initialize the inherited field"
          },
          {
            "line": "@Override void displayRole()",
            "explanation": "Overrides Person displayRole with Teacher specific logic"
          },
          {
            "line": "Person p2 = new Teacher(...)",
            "explanation": "Polymorphic reference: type is Person, but actual object is Teacher"
          },
          {
            "line": "p2.displayRole();",
            "explanation": "Java sees actual object is Teacher and runs Teacher displayRole"
          }
        ],
        "outputExplanation": "p1 calls the base Person method. Even though p2 is declared as type Person, runtime polymorphism executes Teacher's overridden method because the real object on the heap is a Teacher.",
        "commonMistakes": [
          {
            "mistake": "Trying to inherit multiple classes using extends A, B (Java does NOT support multiple inheritance of classes).",
            "fix": "Java only supports single class inheritance. Use Interfaces if you need multiple behaviors."
          },
          {
            "mistake": "Calling super() on any line other than the FIRST line of the child constructor.",
            "fix": "super() MUST be the very first statement inside a child constructor."
          },
          {
            "mistake": "Thinking private fields are accessible directly in the child class.",
            "fix": "private fields are strictly private to the parent. Use protected or parent getter methods."
          }
        ],
        "keyPoints": [
          "Use extends to inherit from a parent class.",
          "Java supports single inheritance for classes (one direct parent only).",
          "Use super() to invoke the parent constructor on line 1.",
          "Use @Override when replacing a parent method.",
          "Parent reference pointing to Child object activates runtime polymorphism."
        ],
        "quickSummary": "In simple words: Inheritance lets a child class inherit features from a parent using extends. Polymorphism lets child classes override parent methods with their own custom actions.",
        "practiceSet": [
          {
            "question": "Create a parent class Vehicle with method start(), and a child class Car that overrides start() to print \"Car engine roaring!\".",
            "difficulty": "Easy",
            "starterCode": "class Vehicle {\n    void start() { System.out.println(\"Vehicle starting\"); }\n}\n// Create Car extending Vehicle\n\npublic class Main {\n    public static void main(String[] args) {\n        // Test Vehicle and Car\n    }\n}",
            "hint": "class Car extends Vehicle { @Override void start() { ... } }",
            "solution": "class Vehicle {\n    void start() { System.out.println(\"Vehicle starting\"); }\n}\n\nclass Car extends Vehicle {\n    @Override\n    void start() {\n        System.out.println(\"Car engine roaring!\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle v = new Car();\n        v.start();\n    }\n}"
          },
          {
            "question": "Create Shape with method getArea() returning 0. Create Square extending Shape with int side and override getArea() to return side * side.",
            "difficulty": "Easy",
            "starterCode": "class Shape {\n    int getArea() { return 0; }\n}\n// Create Square extending Shape\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Square(6);\n        System.out.println(\"Area: \" + s.getArea());\n    }\n}",
            "hint": "class Square extends Shape { int side; Square(int s) { side = s; } int getArea() { return side * side; } }",
            "solution": "class Shape {\n    int getArea() { return 0; }\n}\n\nclass Square extends Shape {\n    int side;\n    Square(int s) { side = s; }\n    @Override\n    int getArea() {\n        return side * side;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Square(6);\n        System.out.println(\"Area: \" + s.getArea());\n    }\n}"
          },
          {
            "question": "Demonstrate super: create Employee with salary, and Manager with bonus. In Manager showTotal(), print salary + bonus using super.salary.",
            "difficulty": "Medium",
            "starterCode": "class Employee {\n    double salary;\n    Employee(double sal) { this.salary = sal; }\n}\n// Create Manager extending Employee\n",
            "hint": "class Manager extends Employee { double bonus; Manager(double sal, double b) { super(sal); bonus = b; } }",
            "solution": "class Employee {\n    double salary;\n    Employee(double sal) { this.salary = sal; }\n}\n\nclass Manager extends Employee {\n    double bonus;\n    Manager(double sal, double b) {\n        super(sal);\n        this.bonus = b;\n    }\n    void showTotal() {\n        System.out.println(\"Total Compensation: ₹\" + (salary + bonus));\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Manager m = new Manager(50000, 15000);\n        m.showTotal();\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Demonstrate polymorphism with an Animal array containing Dog and Cat instances calling speak().",
        "difficulty": "Easy",
        "starterCode": "class Animal { void speak() { System.out.println(\"Sound\"); } }\nclass Dog extends Animal { void speak() { System.out.println(\"Woof\"); } }\nclass Cat extends Animal { void speak() { System.out.println(\"Meow\"); } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal[] pets = { new Dog(), new Cat() };\n        for (Animal a : pets) a.speak();\n    }\n}",
        "hint": "Iterate over the array and invoke speak().",
        "solution": "class Animal { void speak() { System.out.println(\"Sound\"); } }\nclass Dog extends Animal { void speak() { System.out.println(\"Woof\"); } }\nclass Cat extends Animal { void speak() { System.out.println(\"Meow\"); } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal[] pets = { new Dog(), new Cat() };\n        for (Animal a : pets) a.speak();\n    }\n}"
      }
    },
    {
      "id": "interfaces-abstraction",
      "title": "6. Abstract Classes & Interfaces",
      "summary": "Abstraction hides complex implementation details and exposes only essential interfaces. Abstract classes use abstract methods, while Interfaces define 100% pure behavior contracts.",
      "syntax": "// Interface contract\ninterface PaymentMethod {\n    void pay(double amount);\n}\n\n// Abstract class\nabstract class Vehicle {\n    abstract void accelerate();\n    void horn() {\n        System.out.println(\"Beep beep!\");\n    }\n}",
      "codeExample": "// Interface for electronic payments\ninterface PaymentGateway {\n    void processPayment(double amount);\n}\n\nclass UpiPayment implements PaymentGateway {\n    String upiId;\n    UpiPayment(String upiId) {\n        this.upiId = upiId;\n    }\n    @Override\n    public void processPayment(double amount) {\n        System.out.println(\"Processing ₹\" + amount + \" via UPI ID: \" + upiId);\n    }\n}\n\nclass CardPayment implements PaymentGateway {\n    String last4Digits;\n    CardPayment(String last4) {\n        this.last4Digits = last4;\n    }\n    @Override\n    public void processPayment(double amount) {\n        System.out.println(\"Charging ₹\" + amount + \" to Card ending in \" + last4Digits);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        PaymentGateway payment1 = new UpiPayment(\"student@oksbi\");\n        PaymentGateway payment2 = new CardPayment(\"4589\");\n        \n        payment1.processPayment(500.0);\n        payment2.processPayment(1200.0);\n    }\n}",
      "expectedOutput": "Processing ₹500.0 via UPI ID: student@oksbi\nCharging ₹1200.0 to Card ending in 4589",
      "commonMistake": "Attempting to instantiate an abstract class or interface directly (e.g. new PaymentGateway()), which causes a compile error because abstract types cannot be instantiated.",
      "explanation": {
        "intro": "Abstraction means showing only what something does while hiding how it does it. An Interface is a pure contract that says \"any class that implements me must provide these specific methods\". An Abstract Class is a partial blueprint that can have both unfinished (abstract) methods and finished regular methods.",
        "why": "When you pay on an online shopping site, the checkout button only cares that your payment method can \"processPayment\". It does not need to know the internal banking secrets of credit cards, UPI, or PayPal. Interfaces let software connect smoothly without caring about internal details.",
        "analogy": "Think of a TV Remote Control. The buttons (Power, Volume, Channel) are an Interface. You press Volume Up, and the sound increases. You do not need to know what microchips, infrared sensors, or circuit voltages are firing inside the TV. The TV implements the remote control interface.",
        "concept": "1. abstract class: Cannot be instantiated with new. Can contain abstract methods (no body) and concrete methods (with body).\n2. interface: Declared with interface keyword. Classes connect using implements.\n3. Multiple implementation: A class can implement multiple interfaces (class Mobile implements Phone, Camera, GPS).\n4. Default methods: Since Java 8, interfaces can contain optional default methods with code bodies.",
        "syntaxBreakdown": [
          {
            "part": "abstract class Name",
            "meaning": "Class that cannot be directly instantiated and may contain abstract methods"
          },
          {
            "part": "abstract void method();",
            "meaning": "Method signature with NO curly braces/body that subclasses must implement"
          },
          {
            "part": "interface Name",
            "meaning": "Contract declaring methods that implementing classes must satisfy"
          },
          {
            "part": "class A implements InterfaceB",
            "meaning": "Class A agrees to write the code for all methods in InterfaceB"
          }
        ],
        "codeExplanation": [
          {
            "line": "interface PaymentGateway {",
            "explanation": "Declares the payment contract with processPayment"
          },
          {
            "line": "class UpiPayment implements PaymentGateway",
            "explanation": "UpiPayment fulfills the contract using UPI logic"
          },
          {
            "line": "class CardPayment implements PaymentGateway",
            "explanation": "CardPayment fulfills the same contract using credit card logic"
          },
          {
            "line": "payment1.processPayment(500.0);",
            "explanation": "Calls processPayment through the shared interface contract"
          }
        ],
        "outputExplanation": "Both payment types share the PaymentGateway contract. The user triggers processPayment and the appropriate payment processor executes seamlessly.",
        "commonMistakes": [
          {
            "mistake": "Trying to create an object directly from an interface: new PaymentGateway().",
            "fix": "Interfaces have no implementation. You must instantiate a concrete class: new UpiPayment(...)."
          },
          {
            "mistake": "Forgetting \"public\" on overridden interface methods: void processPayment() instead of public void processPayment().",
            "fix": "Interface methods are implicitly public. When implementing them in a class, you MUST mark them public."
          },
          {
            "mistake": "Confusing extends (for classes) and implements (for interfaces).",
            "fix": "A class extends another class, but implements an interface."
          }
        ],
        "keyPoints": [
          "Abstract classes and interfaces cannot be instantiated directly with new.",
          "A class can implement multiple interfaces (class A implements B, C).",
          "A class can only extend one class.",
          "Interface methods are public and abstract by default.",
          "Abstraction hides internal complexity and exposes only clean interfaces."
        ],
        "quickSummary": "In simple words: Interfaces are checklists of actions that classes promise to implement. They let different classes (like UPI and Credit Card) be used interchangeably through the same command (like pay()).",
        "practiceSet": [
          {
            "question": "Create an interface Printable with method print(). Implement it in a Document class.",
            "difficulty": "Easy",
            "starterCode": "interface Printable {\n    void print();\n}\n// Implement in Document\n\npublic class Main {\n    public static void main(String[] args) {\n        Printable p = new Document();\n        p.print();\n    }\n}",
            "hint": "class Document implements Printable { public void print() { System.out.println(\"Printing doc\"); } }",
            "solution": "interface Printable {\n    void print();\n}\n\nclass Document implements Printable {\n    @Override\n    public void print() {\n        System.out.println(\"Printing document on paper...\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Printable p = new Document();\n        p.print();\n    }\n}"
          },
          {
            "question": "Create an abstract class Bank with abstract double getInterestRate(). Create SBI returning 6.5 and HDFC returning 7.0.",
            "difficulty": "Easy",
            "starterCode": "abstract class Bank {\n    abstract double getInterestRate();\n}\n// Create SBI and HDFC\n\npublic class Main {\n    public static void main(String[] args) {\n        // Test both\n    }\n}",
            "hint": "class SBI extends Bank { double getInterestRate() { return 6.5; } }",
            "solution": "abstract class Bank {\n    abstract double getInterestRate();\n}\n\nclass SBI extends Bank {\n    @Override\n    double getInterestRate() { return 6.5; }\n}\n\nclass HDFC extends Bank {\n    @Override\n    double getInterestRate() { return 7.0; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Bank b1 = new SBI();\n        Bank b2 = new HDFC();\n        System.out.println(\"SBI Rate: \" + b1.getInterestRate() + \"%\");\n        System.out.println(\"HDFC Rate: \" + b2.getInterestRate() + \"%\");\n    }\n}"
          },
          {
            "question": "Demonstrate multiple interface implementation: create Swimmer and Flyer interfaces, and a Duck class implementing both.",
            "difficulty": "Medium",
            "starterCode": "interface Swimmer { void swim(); }\ninterface Flyer { void fly(); }\n// Duck implements both\n\npublic class Main {\n    public static void main(String[] args) {\n        // Test duck\n    }\n}",
            "hint": "class Duck implements Swimmer, Flyer { public void swim() { ... } public void fly() { ... } }",
            "solution": "interface Swimmer { void swim(); }\ninterface Flyer { void fly(); }\n\nclass Duck implements Swimmer, Flyer {\n    @Override\n    public void swim() { System.out.println(\"Duck swimming in pond\"); }\n    @Override\n    public void fly() { System.out.println(\"Duck flying in sky\"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Duck d = new Duck();\n        d.swim();\n        d.fly();\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Define an interface Drawable with draw() and implement it in Circle and Square.",
        "difficulty": "Easy",
        "starterCode": "interface Drawable { void draw(); }\nclass Circle implements Drawable { public void draw() { System.out.println(\"Drawing Circle\"); } }\nclass Square implements Drawable { public void draw() { System.out.println(\"Drawing Square\"); } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Drawable d = new Circle();\n        d.draw();\n    }\n}",
        "hint": "Implement public void draw() in both.",
        "solution": "interface Drawable { void draw(); }\nclass Circle implements Drawable { public void draw() { System.out.println(\"Drawing Circle\"); } }\nclass Square implements Drawable { public void draw() { System.out.println(\"Drawing Square\"); } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Drawable d = new Circle();\n        d.draw();\n    }\n}"
      }
    },
    {
      "id": "exception-handling",
      "title": "7. Exception Handling (try, catch, finally, throws)",
      "summary": "Exception handling protects programs from crashing when runtime errors occur. Java distinguishes Checked exceptions (verified at compile time) from Unchecked exceptions (RuntimeExceptions).",
      "syntax": "try {\n    int result = 10 / number;\n} catch (ArithmeticException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n} finally {\n    System.out.println(\"Cleanup always runs\");\n}",
      "codeExample": "public class Main {\n    public static void main(String[] args) {\n        int[] marks = { 85, 92, 78 };\n        \n        try {\n            System.out.println(\"Attempting to access array...\");\n            int score = marks[5]; // Risky line: index out of bounds\n            System.out.println(\"Score: \" + score);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Caught Error: Requested index does not exist in array!\");\n        } catch (Exception e) {\n            System.out.println(\"General error: \" + e.getMessage());\n        } finally {\n            System.out.println(\"Execution finished safely without crashing.\");\n        }\n    }\n}",
      "expectedOutput": "Attempting to access array...\nCaught Error: Requested index does not exist in array!\nExecution finished safely without crashing.",
      "commonMistake": "Catching generic Exception BEFORE specific exceptions (e.g. catch (Exception e) before catch (ArithmeticException e)), which causes a compiler error because the specific catch block is unreachable.",
      "explanation": {
        "intro": "An Exception is an abnormal condition or error that happens while your program is running (like trying to open a file that doesn't exist or dividing by zero). Exception handling using try, catch, and finally catches these problems so your program doesn't abruptly crash.",
        "why": "In a banking ATM, if the machine runs out of cash or encounters a network glitch, you don't want the machine screen to go blue and freeze. You want it to display \"Cash temporarily unavailable\" and return the card safely. Exception handling provides this reliability.",
        "analogy": "Think of driving a car with an emergency spare tire in the trunk. The try block is your normal driving on the road. If you get a flat tire (an exception occurs), the catch block pulls over and swaps in the spare tire so you can continue driving. The finally block is locking your car doors when you get home—you do it whether you had a flat tire or not.",
        "concept": "1. try block: Encloses code that might cause a problem.\n2. catch block: Catches the specific error and runs recovery steps.\n3. finally block: ALWAYS runs, whether an error occurred or not (used to close database connections or files).\n4. throw: Explicitly triggers an exception manually (throw new IllegalArgumentException()).\n5. throws: Declared in a method signature to warn callers that this method might produce a checked exception.",
        "syntaxBreakdown": [
          {
            "part": "try { ... }",
            "meaning": "Monitors the enclosed code for runtime exceptions"
          },
          {
            "part": "catch (ExceptionType e)",
            "meaning": "Catches matching exception and provides the exception object e"
          },
          {
            "part": "finally { ... }",
            "meaning": "Guaranteed to execute regardless of whether an exception was thrown or caught"
          },
          {
            "part": "throw new Exception()",
            "meaning": "Manually creates and throws an exception object"
          },
          {
            "part": "void method() throws IOException",
            "meaning": "Warns callers that this method may throw a checked exception"
          }
        ],
        "codeExplanation": [
          {
            "line": "int[] marks = { 85, 92, 78 };",
            "explanation": "Creates an array with 3 elements (indices 0, 1, 2)"
          },
          {
            "line": "int score = marks[5];",
            "explanation": "Throws ArrayIndexOutOfBoundsException because index 5 does not exist"
          },
          {
            "line": "catch (ArrayIndexOutOfBoundsException e)",
            "explanation": "Intercepts the error, preventing the program from terminating"
          },
          {
            "line": "finally {",
            "explanation": "Executes the final safety message cleanly"
          }
        ],
        "outputExplanation": "The array access at index 5 triggers an ArrayIndexOutOfBoundsException, jumping directly into the catch block and then through the finally block.",
        "commonMistakes": [
          {
            "mistake": "Putting general catch (Exception e) before specific catch blocks.",
            "fix": "Always catch specific exceptions first (e.g. ArithmeticException), followed by general Exception at the bottom."
          },
          {
            "mistake": "Using empty catch blocks catch (Exception e) { } that silently swallow errors.",
            "fix": "Never leave catch blocks empty. At minimum log the message: System.out.println(e.getMessage())."
          },
          {
            "mistake": "Thinking finally is skipped if a return statement is inside try.",
            "fix": "The finally block runs even if a return statement is encountered in the try block."
          }
        ],
        "keyPoints": [
          "Code that can fail goes inside the try block.",
          "catch blocks handle errors gracefully and prevent crashes.",
          "finally runs unconditionally every single time.",
          "Checked exceptions must be caught or declared with throws; unchecked (Runtime) exceptions are optional.",
          "Common exceptions: NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException."
        ],
        "quickSummary": "In simple words: try runs code that might fail; catch handles the error if things go wrong; finally does essential cleanup at the end no matter what happened.",
        "practiceSet": [
          {
            "question": "Write a try-catch block that divides 100 by 0 and catches ArithmeticException.",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Try dividing 100 by 0 and catch error\n    }\n}",
            "hint": "try { int res = 100 / 0; } catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero!\"); }",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int res = 100 / 0;\n            System.out.println(res);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero!\");\n        }\n    }\n}"
          },
          {
            "question": "Safely parse a string \"abc\" into an integer using Integer.parseInt() by catching NumberFormatException.",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        String str = \"abc\";\n        // Parse and catch error\n    }\n}",
            "hint": "try { int num = Integer.parseInt(str); } catch (NumberFormatException e) { ... }",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        String str = \"abc\";\n        try {\n            int num = Integer.parseInt(str);\n            System.out.println(\"Parsed: \" + num);\n        } catch (NumberFormatException e) {\n            System.out.println(\"Invalid number format for string: \" + str);\n        }\n    }\n}"
          },
          {
            "question": "Write a method checkAge(int age) that throws an IllegalArgumentException(\"Age must be 18+\") if age < 18.",
            "difficulty": "Medium",
            "starterCode": "public class Main {\n    static void checkAge(int age) {\n        // Throw exception if age < 18\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkAge(15);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}",
            "hint": "if (age < 18) throw new IllegalArgumentException(\"Age must be 18+\");",
            "solution": "public class Main {\n    static void checkAge(int age) {\n        if (age < 18) {\n            throw new IllegalArgumentException(\"Age must be 18+\");\n        }\n        System.out.println(\"Access granted\");\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkAge(15);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Demonstrate try-catch-finally by dividing numbers and printing a finally log message.",
        "difficulty": "Easy",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int res = 10 / 2;\n            System.out.println(\"Result: \" + res);\n        } finally {\n            System.out.println(\"Done\");\n        }\n    }\n}",
        "hint": "finally runs even when no error occurs.",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int res = 10 / 2;\n            System.out.println(\"Result: \" + res);\n        } finally {\n            System.out.println(\"Done\");\n        }\n    }\n}"
      }
    },
    {
      "id": "collections-framework",
      "title": "8. Collections Framework: ArrayList, HashMap & HashSet",
      "summary": "The Java Collections Framework provides ready-to-use data structures: ArrayList (dynamic resizable array), HashSet (unique elements), and HashMap (fast key-value pairs).",
      "syntax": "// ArrayList: dynamic resizable array\nList<String> list = new ArrayList<>();\nlist.add(\"Apple\");\n\n// HashSet: unique items, fast lookups\nSet<Integer> set = new HashSet<>();\nset.add(101);\n\n// HashMap: key -> value mapping\nMap<String, Integer> map = new HashMap<>();\nmap.put(\"Aarav\", 95);",
      "codeExample": "import java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.HashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 1. ArrayList (ordered, resizable)\n        ArrayList<String> students = new ArrayList<>();\n        students.add(\"Aman\");\n        students.add(\"Priya\");\n        students.add(\"Rohan\");\n        \n        // 2. HashSet (unique only)\n        HashSet<Integer> rollNumbers = new HashSet<>();\n        rollNumbers.add(101);\n        rollNumbers.add(102);\n        rollNumbers.add(101); // Duplicate ignored automatically\n        \n        // 3. HashMap (Key -> Value)\n        HashMap<String, Integer> marksMap = new HashMap<>();\n        marksMap.put(\"Aman\", 88);\n        marksMap.put(\"Priya\", 95);\n        \n        System.out.println(\"Students List: \" + students);\n        System.out.println(\"Unique Rolls: \" + rollNumbers);\n        System.out.println(\"Priya's Score: \" + marksMap.get(\"Priya\"));\n    }\n}",
      "expectedOutput": "Students List: [Aman, Priya, Rohan]\nUnique Rolls: [101, 102]\nPriya's Score: 95",
      "commonMistake": "Attempting to use primitive types in Collections generics (e.g. ArrayList<int> instead of ArrayList<Integer>), which causes a compilation error.",
      "explanation": {
        "intro": "In Java, regular arrays have a fixed size: if you make an array of size 5, you cannot add a 6th item. The Java Collections Framework provides dynamic data structures that automatically expand and shrink: ArrayList, HashSet, and HashMap.",
        "why": "Real software handles changing amounts of data: a shopping cart where users add and remove items (ArrayList), a list of registered voter IDs with no duplicates (HashSet), and a phone directory searching numbers by name (HashMap). Collections handle all memory resizing automatically.",
        "analogy": "A normal array is like an egg carton: exactly 12 fixed indentations. An ArrayList is like an elastic expandable accordion file: you can slip in as many sheets as you want. A HashSet is a bouncer checking IDs at a club: if you already entered, you cannot get in twice. A HashMap is a coat check counter: you hand them your ticket number (Key) to retrieve your jacket (Value).",
        "concept": "1. ArrayList<T>: Resizable array. Preserves insertion order. Allows duplicates. Fast access by index (get(i)).\n2. HashSet<T>: Unordered collection of unique items. Discards duplicates automatically.\n3. HashMap<K, V>: Key-value dictionary. Fast O(1) lookups by key using get(key).\n4. Generics (<T>): Collections only accept objects. You must use Wrapper classes like <Integer> instead of <int>.",
        "syntaxBreakdown": [
          {
            "part": "ArrayList<Type> list = new ArrayList<>()",
            "meaning": "Creates an expandable dynamic list"
          },
          {
            "part": "HashSet<Type> set = new HashSet<>()",
            "meaning": "Creates a set that rejects duplicate items"
          },
          {
            "part": "HashMap<Key, Val> map = new HashMap<>()",
            "meaning": "Creates a key-to-value lookup table"
          },
          {
            "part": "list.add(item)",
            "meaning": "Appends an element to the end of the collection"
          },
          {
            "part": "map.put(key, value)",
            "meaning": "Stores a key-value mapping"
          },
          {
            "part": "map.get(key)",
            "meaning": "Retrieves the value associated with the specified key"
          }
        ],
        "codeExplanation": [
          {
            "line": "ArrayList<String> students = new ArrayList<>();",
            "explanation": "Creates a dynamic list holding student names"
          },
          {
            "line": "rollNumbers.add(101); rollNumbers.add(101);",
            "explanation": "HashSet detects the duplicate 101 and keeps only one copy"
          },
          {
            "line": "marksMap.put(\"Priya\", 95);",
            "explanation": "Associates the score 95 with the key \"Priya\""
          },
          {
            "line": "marksMap.get(\"Priya\")",
            "explanation": "Fetches the score 95 using the key in O(1) instant time"
          }
        ],
        "outputExplanation": "The ArrayList displays all three students. The HashSet contains only unique IDs [101, 102]. The HashMap looks up and outputs Priya's score 95.",
        "commonMistakes": [
          {
            "mistake": "Using primitives inside generics: ArrayList<int> list = new ArrayList<>();.",
            "fix": "Generics only accept objects. Use wrapper classes: ArrayList<Integer> list = new ArrayList<>();."
          },
          {
            "mistake": "Accessing an ArrayList with bracket notation like list[0].",
            "fix": "In Java, ArrayList elements must be accessed with methods: list.get(0) and list.set(0, value)."
          },
          {
            "mistake": "Assuming a HashSet preserves the insertion order of elements.",
            "fix": "HashSet is unordered. If you need insertion order preserved, use LinkedHashSet."
          }
        ],
        "keyPoints": [
          "ArrayList: Dynamic resizable array; allows duplicates.",
          "HashSet: Unordered collection of unique elements.",
          "HashMap: Fast key-value pairs; lookups by key take O(1) time.",
          "Collections require Wrapper classes (Integer, Double), not primitives.",
          "Import from java.util package."
        ],
        "quickSummary": "In simple words: Use ArrayList when you need a growing list of items, HashSet when you need unique items with no duplicates, and HashMap when you want to look up values by name or key.",
        "practiceSet": [
          {
            "question": "Create an ArrayList of 3 city names, add a 4th city, and print the total count of cities using .size().",
            "difficulty": "Easy",
            "starterCode": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create ArrayList and print size\n    }\n}",
            "hint": "cities.size() gives the number of items.",
            "solution": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> cities = new ArrayList<>();\n        cities.add(\"Delhi\");\n        cities.add(\"Mumbai\");\n        cities.add(\"Kolkata\");\n        cities.add(\"Chennai\");\n        System.out.println(\"Total cities: \" + cities.size());\n    }\n}"
          },
          {
            "question": "Create a HashMap mapping fruit names to their prices. Add 3 fruits and check if a fruit exists using containsKey().",
            "difficulty": "Easy",
            "starterCode": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create HashMap and check containsKey\n    }\n}",
            "hint": "map.containsKey(\"Apple\");",
            "solution": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> fruits = new HashMap<>();\n        fruits.put(\"Apple\", 120);\n        fruits.put(\"Banana\", 40);\n        fruits.put(\"Mango\", 80);\n        System.out.println(\"Has Mango? \" + fruits.containsKey(\"Mango\"));\n    }\n}"
          },
          {
            "question": "Given an array with duplicates {1, 2, 2, 3, 4, 4, 5}, remove all duplicates by loading them into a HashSet.",
            "difficulty": "Medium",
            "starterCode": "import java.util.HashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] nums = {1, 2, 2, 3, 4, 4, 5};\n        // Load into HashSet\n    }\n}",
            "hint": "Loop through array and call set.add(num).",
            "solution": "import java.util.HashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] nums = {1, 2, 2, 3, 4, 4, 5};\n        HashSet<Integer> unique = new HashSet<>();\n        for (int n : nums) unique.add(n);\n        System.out.println(\"Unique values: \" + unique);\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Count the frequency of each word in a sentence using HashMap<String, Integer>.",
        "difficulty": "Easy",
        "starterCode": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        String text = \"java python java c java\";\n        HashMap<String, Integer> counts = new HashMap<>();\n        for (String w : text.split(\" \")) {\n            counts.put(w, counts.getOrDefault(w, 0) + 1);\n        }\n        System.out.println(counts);\n    }\n}",
        "hint": "Use counts.getOrDefault(w, 0) + 1.",
        "solution": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        String text = \"java python java c java\";\n        HashMap<String, Integer> counts = new HashMap<>();\n        for (String w : text.split(\" \")) {\n            counts.put(w, counts.getOrDefault(w, 0) + 1);\n        }\n        System.out.println(counts);\n    }\n}"
      }
    },
    {
      "id": "multithreading-basics",
      "title": "9. Multithreading Basics (Thread & Runnable)",
      "summary": "Multithreading allows multiple tasks to execute concurrently inside a single program by subclassing the Thread class or implementing the Runnable interface.",
      "syntax": "// Creating a thread using Runnable\nRunnable task = () -> {\n    System.out.println(\"Running in background thread\");\n};\nThread t = new Thread(task);\nt.start(); // Spawns new thread (Do NOT call t.run() directly)",
      "codeExample": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        // Thread 1: Cooking task\n        Thread chefThread = new Thread(() -> {\n            System.out.println(\"Chef is baking pizza in thread: \" + Thread.currentThread().getName());\n        });\n        \n        // Thread 2: Cashier task\n        Thread cashierThread = new Thread(() -> {\n            System.out.println(\"Cashier is taking orders in thread: \" + Thread.currentThread().getName());\n        });\n        \n        chefThread.start();\n        cashierThread.start();\n        \n        chefThread.join();    // Main thread waits for chef\n        cashierThread.join(); // Main thread waits for cashier\n        System.out.println(\"Restaurant operations completed successfully!\");\n    }\n}",
      "expectedOutput": "Chef is baking pizza in thread: Thread-0\nCashier is taking orders in thread: Thread-1\nRestaurant operations completed successfully!",
      "commonMistake": "Calling t.run() instead of t.start(). Calling run() executes the method sequentially in the main thread rather than spawning a new concurrent thread.",
      "explanation": {
        "intro": "A thread is the smallest unit of execution inside a program. Multithreading means your program can do multiple things at the exact same time—like playing background music in a game while simultaneously calculating player physics.",
        "why": "If a computer only had one single thread of execution, every time you downloaded a file, the entire computer would freeze and become unresponsive until the download finished. Multithreading lets long-running tasks run in the background.",
        "analogy": "Imagine a busy restaurant kitchen. If only one person (one thread) works there, they have to take an order, cook the burger, bake the fries, and wash the dishes one after the other. With multithreading, you have 3 staff members working simultaneously: one takes orders, one cooks, and one cleans.",
        "concept": "1. Thread class: Java's built-in representation of an execution thread.\n2. Runnable interface: A functional interface with a single void run() method representing the task.\n3. start() vs run():\n   - Calling .start() requests the operating system to create a brand new thread.\n   - Calling .run() just runs the code like a normal function inside the current thread!\n4. join(): Tells the calling thread to wait until this thread has finished its work.",
        "syntaxBreakdown": [
          {
            "part": "new Thread(runnable)",
            "meaning": "Creates a new Thread object wrapped around the specified task"
          },
          {
            "part": "thread.start()",
            "meaning": "Spawns a new OS thread and executes the run() method concurrently"
          },
          {
            "part": "thread.join()",
            "meaning": "Pauses the calling thread until this thread finishes executing"
          },
          {
            "part": "Thread.currentThread().getName()",
            "meaning": "Returns the name of the thread currently executing this line"
          }
        ],
        "codeExplanation": [
          {
            "line": "Thread chefThread = new Thread(() -> ...);",
            "explanation": "Creates thread 1 using a lambda expression"
          },
          {
            "line": "chefThread.start();",
            "explanation": "Spawns Thread-0 and begins execution concurrently"
          },
          {
            "line": "cashierThread.start();",
            "explanation": "Spawns Thread-1 running simultaneously alongside Thread-0"
          },
          {
            "line": "chefThread.join();",
            "explanation": "Ensures the main thread waits before printing the closing message"
          }
        ],
        "outputExplanation": "Both worker threads run concurrently in parallel. The main thread waits using join() and announces completion once both finish.",
        "commonMistakes": [
          {
            "mistake": "Invoking thread.run() instead of thread.start().",
            "fix": "Calling run() does NOT start a new thread! Always call thread.start()."
          },
          {
            "mistake": "Starting the same thread twice: t.start(); t.start(); (causes IllegalThreadStateException).",
            "fix": "A thread cannot be restarted once started. Create a new Thread instance for each run."
          },
          {
            "mistake": "Forgetting to handle InterruptedException when using Thread.sleep() or thread.join().",
            "fix": "Wrap sleep() and join() in a try-catch block or add throws InterruptedException to the method header."
          }
        ],
        "keyPoints": [
          "Multithreading allows multiple tasks to execute simultaneously.",
          "Implement Runnable interface (recommended) or extend Thread class.",
          "Always call .start() to spawn a thread; never call .run() directly.",
          "Use .join() to wait for a background thread to complete.",
          "Thread.sleep(ms) pauses execution for the specified milliseconds."
        ],
        "quickSummary": "In simple words: Threads are parallel workers inside your program. You give them a job (Runnable), launch them with .start(), and they work in the background without freezing your main program.",
        "practiceSet": [
          {
            "question": "Create and start a thread that prints \"Background task finished\".",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Create and start thread\n    }\n}",
            "hint": "new Thread(() -> System.out.println(\"Background task finished\")).start();",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> System.out.println(\"Background task finished\"));\n        t.start();\n    }\n}"
          },
          {
            "question": "Create two threads: one printing \"Tick\" and the other printing \"Tock\". Start both.",
            "difficulty": "Easy",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Create Tick and Tock threads\n    }\n}",
            "hint": "Create t1 and t2, then call t1.start() and t2.start().",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        Thread t1 = new Thread(() -> System.out.println(\"Tick\"));\n        Thread t2 = new Thread(() -> System.out.println(\"Tock\"));\n        t1.start();\n        t2.start();\n    }\n}"
          },
          {
            "question": "Use Thread.sleep(1000) inside a thread to pause for 1 second before printing \"Awake!\". Catch InterruptedException.",
            "difficulty": "Medium",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Thread with Thread.sleep\n    }\n}",
            "hint": "try { Thread.sleep(1000); System.out.println(\"Awake!\"); } catch (InterruptedException e) { }",
            "solution": "public class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> {\n            try {\n                Thread.sleep(1000);\n                System.out.println(\"Awake!\");\n            } catch (InterruptedException e) {\n                System.out.println(\"Interrupted\");\n            }\n        });\n        t.start();\n    }\n}"
          }
        ]
      },
      "practice": {
        "question": "Create and start two threads that print \"Ping\" and \"Pong\" respectively.",
        "difficulty": "Easy",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        Thread t1 = new Thread(() -> System.out.println(\"Ping\"));\n        Thread t2 = new Thread(() -> System.out.println(\"Pong\"));\n        t1.start();\n        t2.start();\n    }\n}",
        "hint": "Call start() on both threads.",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        Thread t1 = new Thread(() -> System.out.println(\"Ping\"));\n        Thread t2 = new Thread(() -> System.out.println(\"Pong\"));\n        t1.start();\n        t2.start();\n    }\n}"
      }
    }
  ],
  "bTechPriority": {
    "semesterExams": [
      "JDK vs JRE vs JVM architectural layers and bytecode execution lifecycle.",
      "String Constant Pool: String immutability, equals() vs ==, and StringBuilder vs StringBuffer.",
      "Method Overloading (compile-time) vs Method Overriding (runtime dynamic dispatch).",
      "Abstract Class vs Interface (Default and static methods in Java 8+).",
      "Checked vs Unchecked Exceptions hierarchy and try-with-resources syntax.",
      "Collections Framework: List vs Set vs Map and HashMap internal bucketing / hashing mechanics."
    ],
    "vivaQuestions": [
      {
        "q": "Why is Java platform independent?",
        "a": "The Java compiler produces platform-neutral bytecode (.class) rather than native machine code. Any machine equipped with a platform-specific JVM can execute this bytecode."
      },
      {
        "q": "Why are Strings immutable in Java?",
        "a": "For security (network connections and file paths), thread-safety without synchronization, and caching efficiency in the String Constant Pool."
      },
      {
        "q": "What is the purpose of the Garbage Collector (GC)?",
        "a": "GC automatically frees memory on the heap occupied by unreachable objects, eliminating manual memory deallocation risks like memory leaks."
      },
      {
        "q": "What is the difference between final, finally, and finalize?",
        "a": "final is a modifier (constant variable, unextendable class, unoverridable method); finally is an exception handling block that always runs; finalize() is a deprecated method formerly invoked before GC cleanup."
      }
    ],
    "dsaPrerequisites": [
      "ArrayList and LinkedList are foundational for building Queues, Stacks, and Adjacency lists.",
      "HashMap and HashSet provide average O(1) lookups for Two-Sum, Graph visited arrays, and frequency tables.",
      "PriorityQueue is used for Min/Max Heaps, Top-K elements, and Dijkstra shortest paths."
    ],
    "interviewTips": [
      "Know the internal workings of HashMap (Hashing, array of buckets, linked lists with Treeify threshold at 8 nodes).",
      "Always implement equals() and hashCode() contracts together when using custom objects as HashMap keys.",
      "Understand how the JVM memory layout splits between the Thread-local Stack (frames, primitives, references) and the shared Heap (objects)."
    ]
  }
};
