import { CourseData } from './types';

export const PYTHON_COURSE: CourseData = {
  id: 'python',
  slug: 'python',
  name: 'Python',
  tagline: 'Simple, Expressive & The Language of Artificial Intelligence',
  shortDescription:
    'Learn simple and readable programming with powerful libraries and automation.',
  difficulty: 'Easy → Intermediate',
  bestFor:
    'Class 12 CS/IP Students, B.Tech AI/ML Coursework, Data Science, Python Lab Exams, Scripting & Backend APIs',
  icon: 'Terminal',
  color: 'emerald',
  intro: {
    whatIs:
      'Python is an easy-to-learn, high-level programming language created by Guido van Rossum in 1991. It looks like plain English, making it the most popular starting language for students worldwide.',
    whyLearn:
      'Python is the primary language used today for Artificial Intelligence, Machine Learning, Data Science, Robotics, and Web Development. It lets you write working programs with far fewer lines of code than C++ or Java.',
    whereUsed: [
      'Artificial Intelligence & Deep Learning (PyTorch, TensorFlow, OpenAI, HuggingFace)',
      'Data Science & Analytics (Pandas, NumPy, Matplotlib, Jupyter Notebooks)',
      'Modern Web Backend Services (FastAPI, Django, Flask)',
      'Automation, Scripting & Cyber Security Tools',
    ],
    advantages: [
      'Ultra-readable, clean syntax that mirrors natural English pseudocode',
      'No complex semicolons or curly braces required for basic code',
      'Massive global library ecosystem for math, AI, games, and web apps',
      'Cross-platform: runs seamlessly on Windows, Mac, Linux, and Chromebooks',
    ],
    limitations: [
      'Slower execution speed compared to compiled languages like C or C++',
      'Global Interpreter Lock (GIL) limits true multi-threaded CPU speed in standard CPython',
      'Errors in variable types only show up when the specific line executes at runtime',
    ],
  },
  visualCallout: {
    title: 'Why Python is the Best First Language for Students',
    description: 'Python lets you focus on understanding logic rather than memorizing complicated syntax rules:',
    items: [
      {
        label: 'English-like Readability',
        detail: 'Code reads like plain English sentences, making debugging intuitive.',
        badge: 'Easy to Read',
      },
      {
        label: 'Artificial Intelligence & ML',
        detail: 'Virtually all modern AI tools, from ChatGPT libraries to computer vision, use Python.',
        badge: 'AI & Data',
      },
      {
        label: 'Instant Feedback',
        detail: 'Run your code line by line and see results immediately without waiting for compilation.',
        badge: 'Fast Learning',
      },
      {
        label: 'All-in-One Power',
        detail: 'Create games, build websites, calculate scientific formulas, and automate boring tasks.',
        badge: 'Versatile',
      },
    ],
  },
  topics: [
    {
      id: 'basic-syntax-io',
      title: '1. Basic Syntax, Indentation & I/O',
      summary:
        'Python uses clean indentation (spaces) instead of curly braces to group code, and simple functions like print() and input() for interacting with the user.',
      syntax: `# Printing output
print("Hello, World!")

# Getting user input & printing with f-string
name = input("Enter your name: ")
print(f"Hello, {name}!")`,
      codeExample: `# Student profile program
student_name = "Aarav"
grade = 12
score = 94.5

print("=== Student Details ===")
print(f"Name: {student_name}")
print(f"Grade: Class {grade}")
print(f"Score: {score}%")`,
      expectedOutput: `=== Student Details ===
Name: Aarav
Grade: Class 12
Score: 94.5%`,
      commonMistake:
        'Mixing tabs and spaces for indentation or forgetting the "f" before quotation marks when printing formatted strings.',
      explanation: {
        intro:
          'Python syntax is the set of rules for writing code that the computer can execute. It avoids extra symbols like semicolons and relies on clean lines and indentation.',
        why:
          'Every computer program needs to communicate: it takes input from the user, computes values, and displays outputs. Simple syntax lets you build interactive tools without confusing boilerplate code.',
        analogy:
          'Think of Python like writing instructions on lined school paper. Instead of drawing boxes or brackets around related steps, you simply indent them by 4 spaces. The teacher immediately knows those indented steps belong under the same heading.',
        concept:
          '1. Python executes sequentially: It reads your file top-to-bottom, one instruction per line.\n2. print() outputs information to the screen.\n3. input() pauses the program and waits for the user to type text.\n4. Indentation (4 spaces) defines code blocks.\n5. f-strings (f"Hello {name}") let you seamlessly inject variables into text.',
        syntaxBreakdown: [
          { part: 'print(...)', meaning: 'Built-in function that displays text or variables to the console' },
          { part: 'input(...)', meaning: 'Prompts the user to type something and returns it as a string (text)' },
          { part: 'f"..."', meaning: 'Formatted string literal: allows expressions inside {curly braces} to be evaluated' },
          { part: '# comment', meaning: 'Ignored by Python; used by humans to explain what the code does' },
        ],
        codeExplanation: [
          { line: 'student_name = "Aarav"', explanation: 'Creates a text variable storing the student name' },
          { line: 'grade = 12', explanation: 'Creates an integer variable storing the class level' },
          { line: 'score = 94.5', explanation: 'Creates a float (decimal) variable storing the percentage' },
          { line: 'print("=== Student Details ===")', explanation: 'Prints the heading to the terminal' },
          { line: 'print(f"Name: {student_name}")', explanation: 'Uses an f-string to insert the value of student_name' },
          { line: 'print(f"Grade: Class {grade}")', explanation: 'Inserts the grade number into the output message' },
          { line: 'print(f"Score: {score}%")', explanation: 'Inserts the score decimal followed by the % sign' },
        ],
        outputExplanation:
          'Each print() statement outputs its contents on a new line. The expressions inside {student_name}, {grade}, and {score} are replaced by their actual stored values before printing.',
        commonMistakes: [
          {
            mistake: 'Writing "{name}" without the leading "f", which prints the literal word {name}.',
            fix: 'Always prefix the string with an "f", e.g., f"Hello, {name}!".',
          },
          {
            mistake: 'Mixing tabs and spaces when indenting code, which causes IndentationError.',
            fix: 'Configure your editor to insert 4 spaces whenever you press the Tab key.',
          },
          {
            mistake: 'Forgetting that input() always returns text (str), even if the user types digits.',
            fix: 'Wrap input() with int() or float(), e.g., age = int(input("Enter age: ")).',
          },
          {
            mistake: 'Capitalizing Print() or Input(), causing a NameError.',
            fix: 'Python is case-sensitive; built-in functions are always lowercase: print() and input().',
          },
        ],
        keyPoints: [
          'Python executes line-by-line from top to bottom.',
          'No semicolons (;) are required at the ends of lines.',
          'Blocks of code are grouped by 4 spaces of indentation.',
          'f-strings f"Text {var}" are the modern, clean way to format text.',
          'Comments start with the # character and are ignored during execution.',
        ],
        quickSummary:
          'In simple words: Python is like writing instructions in plain English. Use print() to display messages, input() to receive user data, indentations to group steps, and f-strings to include variables inside messages.',
        practiceSet: [
          {
            question: 'Write a program that stores your name and age in variables and prints them using an f-string.',
            difficulty: 'Easy',
            starterCode: `# Store name and age, then print them
name = "Priya"
age = 17

# Print using an f-string
`,
            hint: 'Use print(f"My name is {name} and I am {age} years old.")',
            solution: `name = "Priya"
age = 17
print(f"My name is {name} and I am {age} years old.")`,
          },
          {
            question: 'Define length = 15 and width = 8, calculate the rectangle area (length * width), and print the result.',
            difficulty: 'Easy',
            starterCode: `length = 15
width = 8
# Calculate area and print
`,
            hint: 'area = length * width',
            solution: `length = 15
width = 8
area = length * width
print(f"Area of rectangle: {area}")`,
          },
          {
            question: 'Create a program that converts a given temperature from Celsius (37) to Fahrenheit using the formula F = (C * 9/5) + 32.',
            difficulty: 'Medium',
            starterCode: `celsius = 37
# Convert to fahrenheit and print
`,
            hint: 'fahrenheit = (celsius * 9/5) + 32',
            solution: `celsius = 37
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C is equal to {fahrenheit}°F")`,
          },
        ],
      },
      practice: {
        question: 'Read two numbers using input(), convert them to integers with int(), and print their sum.',
        difficulty: 'Easy',
        starterCode: `# Read a and b and print their sum
a = 10
b = 20
print(f"Sum = {a + b}")`,
        hint: 'Remember that input() returns a string, so cast with int(input()).',
        solution: `a = 10
b = 20
print(f"Sum = {a + b}")`,
      },
    },
    {
      id: 'data-types-variables',
      title: '2. Dynamic Variables & Core Data Types',
      summary:
        'Variables in Python are containers that hold values. You do not need to declare their type beforehand; Python automatically detects whether a value is an integer, float, string, or boolean.',
      syntax: `# Dynamic variable assignments
age = 17            # int (integer)
price = 49.99       # float (decimal)
subject = "Physics" # str (string/text)
passed = True       # bool (boolean True/False)
empty_box = None    # NoneType (represents nothing)`,
      codeExample: `# Inspecting Python data types
student_age = 18
height_meters = 1.75
student_name = "Diya"
is_enrolled = True

print(f"Age: {student_age} -> Type: {type(student_age).__name__}")
print(f"Height: {height_meters}m -> Type: {type(height_meters).__name__}")
print(f"Name: {student_name} -> Type: {type(student_name).__name__}")
print(f"Enrolled: {is_enrolled} -> Type: {type(is_enrolled).__name__}")`,
      expectedOutput: `Age: 18 -> Type: int
Height: 1.75m -> Type: float
Name: Diya -> Type: str
Enrolled: True -> Type: bool`,
      commonMistake:
        'Trying to concatenate a string with an integer directly (e.g., "Age: " + 18) which raises a TypeError.',
      explanation: {
        intro:
          'A variable is a labeled container in memory used to store data. In Python, variables are dynamically typed, meaning you just assign a value and Python figures out the type automatically.',
        why:
          'Programs need to remember data—like user scores, account balances, and item names. Different kinds of information need different types: whole numbers for counting, decimals for measurements, and text for names.',
        analogy:
          'Imagine storage boxes with sticky labels on them. One label says "age" and holds the number 18. Another label says "name" and holds a slip of paper with "Diya". Unlike rigid lockers in other languages, Python boxes can hold any item you place inside them at any time.',
        concept:
          'Python provides 5 fundamental primitive data types:\n1. int: Whole numbers, positive or negative (e.g. 5, -12, 1000).\n2. float: Numbers with decimal points (e.g. 3.14, -0.5).\n3. str: Text enclosed in single or double quotes (e.g. "Hello").\n4. bool: True or False (capitalized T and F).\n5. None: A special object representing the absence of a value.',
        syntaxBreakdown: [
          { part: 'variable_name = value', meaning: 'The assignment operator (=) places the value on the right into the named variable on the left' },
          { part: 'type(variable)', meaning: 'Built-in function that reveals the data type of the given variable' },
          { part: 'int() / float() / str()', meaning: 'Type-casting functions used to convert a value from one data type to another' },
        ],
        codeExplanation: [
          { line: 'student_age = 18', explanation: 'Stores whole number 18; Python sets the type to int' },
          { line: 'height_meters = 1.75', explanation: 'Stores decimal 1.75; Python sets the type to float' },
          { line: 'student_name = "Diya"', explanation: 'Stores text in double quotes; Python sets the type to str' },
          { line: 'is_enrolled = True', explanation: 'Stores boolean True; Python sets the type to bool' },
          { line: 'type(student_age).__name__', explanation: 'Gets the clean name ("int") of the variable data type' },
        ],
        outputExplanation:
          'Python checks the object each variable is pointing to and prints its value alongside its recognized data type name (int, float, str, bool).',
        commonMistakes: [
          {
            mistake: 'Adding text and numbers using "+" like "Marks: " + 95, causing a TypeError.',
            fix: 'Use an f-string: f"Marks: {95}", or convert the number using str(95).',
          },
          {
            mistake: 'Writing boolean values in lowercase: true or false instead of True or False.',
            fix: 'In Python, booleans must always start with a capital letter: True or False.',
          },
          {
            mistake: 'Using reserved keywords as variable names (e.g. class = 12 or for = 5).',
            fix: 'Choose descriptive variable names that do not conflict with keywords, like student_class = 12.',
          },
          {
            mistake: 'Assuming a variable name starting with a number is valid (e.g. 1st_rank = "Aman").',
            fix: 'Variable names must begin with a letter or underscore, e.g., rank_1st = "Aman".',
          },
        ],
        keyPoints: [
          'Python is dynamically typed: you never declare "int x" or "float y".',
          'Use type(variable) whenever you need to check what type of data is stored.',
          'Convert types using int(), float(), and str().',
          'Variable names cannot begin with numbers or contain spaces or special symbols like @, $, %.',
          'None represents "no value" or an empty state.',
        ],
        quickSummary:
          'In simple words: Variables are named containers. Put a whole number in to get an int, a decimal for a float, text inside quotes for a str, and True or False for a bool. Python handles the memory and typing automatically.',
        practiceSet: [
          {
            question: 'Create three variables: item_name (string), quantity (int), and unit_price (float). Print total cost = quantity * unit_price.',
            difficulty: 'Easy',
            starterCode: `item_name = "Notebook"
quantity = 4
unit_price = 45.50

# Calculate total cost and print
`,
            hint: 'total_cost = quantity * unit_price',
            solution: `item_name = "Notebook"
quantity = 4
unit_price = 45.50
total_cost = quantity * unit_price
print(f"Total for {quantity} {item_name}s: ₹{total_cost}")`,
          },
          {
            question: 'Given a numeric string s = "250", convert it to an integer, add 50 to it, and print the new sum.',
            difficulty: 'Easy',
            starterCode: `s = "250"
# Convert s to integer and add 50
`,
            hint: 'number = int(s)',
            solution: `s = "250"
number = int(s)
result = number + 50
print(f"Result: {result}")`,
          },
          {
            question: 'Write a snippet that checks whether a variable score = 82 is greater than or equal to 33, and store the result in a boolean is_pass.',
            difficulty: 'Medium',
            starterCode: `score = 82
# Assign is_pass boolean and print
`,
            hint: 'is_pass = score >= 33',
            solution: `score = 82
is_pass = score >= 33
print(f"Passed: {is_pass} (Type: {type(is_pass).__name__})")`,
          },
        ],
      },
      practice: {
        question: 'Create variables for school, roll_no, and percentage. Print them with their data types.',
        difficulty: 'Easy',
        starterCode: `school = "Delhi Public School"
roll_no = 24
percentage = 91.2
# Print values and their types`,
        hint: 'Use f"{school}: {type(school)}"',
        solution: `school = "Delhi Public School"
roll_no = 24
percentage = 91.2
print(f"{school} is {type(school)}")
print(f"{roll_no} is {type(roll_no)}")
print(f"{percentage} is {type(percentage)}")`,
      },
    },
    {
      id: 'conditionals-loops',
      title: '3. Conditions & Loops (for in, while)',
      summary:
        'Conditional statements (if-elif-else) allow programs to make decisions, while loops (for and while) repeat a set of instructions until a condition is met.',
      syntax: `# Conditional decision
if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
else:
    grade = "C"

# For loop with range
for i in range(1, 6):
    print(i)

# While loop
count = 3
while count > 0:
    print(count)
    count -= 1`,
      codeExample: `# Decision making & loop demonstration
marks = 85

if marks >= 90:
    print("Grade: A+ (Outstanding)")
elif marks >= 75:
    print("Grade: A (Very Good)")
else:
    print("Grade: B (Keep working hard)")

print("\nCountdown to Launch:")
countdown = 3
while countdown > 0:
    print(f"{countdown}...")
    countdown -= 1
print("Blast off! 🚀")`,
      expectedOutput: `Grade: A (Very Good)

Countdown to Launch:
3...
2...
1...
Blast off! 🚀`,
      commonMistake:
        'Forgetting the colon (:) at the end of an if, elif, else, for, or while line, or forgetting to update the counter in a while loop causing an infinite loop.',
      explanation: {
        intro:
          'Conditionals let your code make decisions ("if this is true, do this; otherwise do that"). Loops repeat a block of code multiple times so you do not have to write the same line over and over.',
        why:
          'Imagine grading 100 students or checking passwords. Without conditions and loops, you would have to write hundreds of repetitive lines. Conditions provide intelligence, and loops provide automation.',
        analogy:
          'Think of a traffic light for conditions: if the light is green, proceed; elif yellow, slow down; else, stop. For loops are like doing 10 jumping jacks in gym class: you count from 1 to 10 and stop when you reach 10.',
        concept:
          '1. if statement: Checks a condition. If True, executes the indented lines beneath it.\n2. elif (short for else-if): Checks an alternative condition if the first condition was False.\n3. else: Runs if none of the above conditions were met.\n4. for loop: Iterates over a sequence (like range(1, 6)).\n5. while loop: Repeats continuously as long as its condition remains True.',
        syntaxBreakdown: [
          { part: 'if condition:', meaning: 'Evaluates the condition; if True, executes the indented code block below' },
          { part: 'elif condition:', meaning: 'Checked only if preceding if/elif was False' },
          { part: 'else:', meaning: 'Default fallback branch executed when all preceding conditions evaluate to False' },
          { part: 'for item in sequence:', meaning: 'Loops through each element of a collection or range' },
          { part: 'range(start, stop):', meaning: 'Generates integers from start up to (but excluding) stop' },
          { part: 'while condition:', meaning: 'Repeats code block indefinitely until the condition evaluates to False' },
        ],
        codeExplanation: [
          { line: 'marks = 85', explanation: 'Sets student marks to 85' },
          { line: 'if marks >= 90:', explanation: 'Checks if marks are 90 or more (85 >= 90 is False, so skips)' },
          { line: 'elif marks >= 75:', explanation: 'Checks if marks are 75 or more (85 >= 75 is True, so runs this block)' },
          { line: 'countdown = 3', explanation: 'Initializes the countdown counter to 3' },
          { line: 'while countdown > 0:', explanation: 'Runs the loop as long as countdown is greater than 0' },
          { line: 'countdown -= 1', explanation: 'Decrements countdown by 1 each time through the loop' },
        ],
        outputExplanation:
          'Because marks is 85, only the elif branch triggers. The while loop runs 3 times (for 3, 2, 1) before countdown becomes 0, terminating the loop and printing the launch message.',
        commonMistakes: [
          {
            mistake: 'Forgetting the colon (:) at the end of the if / elif / else / for / while line.',
            fix: 'Every control statement header in Python must end with a colon (:).',
          },
          {
            mistake: 'Using a single equals sign (=) instead of double equals (==) in conditions (e.g. if x = 10:).',
            fix: 'Use == to compare two values for equality; = is only for assigning values.',
          },
          {
            mistake: 'Forgetting to increment or decrement the counter inside a while loop.',
            fix: 'Ensure the variable tested in the while condition changes inside the loop to prevent infinite loops.',
          },
          {
            mistake: 'Thinking range(1, 5) includes the number 5.',
            fix: 'range(start, stop) stops at stop - 1. range(1, 5) generates 1, 2, 3, 4.',
          },
        ],
        keyPoints: [
          'All condition and loop headers must terminate with a colon (:).',
          'Indented lines below the colon belong to that block.',
          'Comparison operators: == (equal), != (not equal), <, <=, >, >=.',
          'Logical operators: and, or, not.',
          'range(1, n + 1) generates numbers from 1 to n inclusive.',
        ],
        quickSummary:
          'In simple words: Use if-elif-else to let your program choose between different paths, and use for or while loops to automate repetitive tasks effortlessly.',
        practiceSet: [
          {
            question: 'Write an if-else check that determines if a number num = 14 is even or odd using the % (modulo) operator.',
            difficulty: 'Easy',
            starterCode: `num = 14
# Check if even or odd
`,
            hint: 'if num % 2 == 0: print("Even")',
            solution: `num = 14
if num % 2 == 0:
    print(f"{num} is Even")
else:
    print(f"{num} is Odd")`,
          },
          {
            question: 'Use a for loop and range() to print the multiplication table of 7 from 7 x 1 to 7 x 5.',
            difficulty: 'Easy',
            starterCode: `table_of = 7
# Print 7 x 1 up to 7 x 5
`,
            hint: 'for i in range(1, 6): print(f"{table_of} x {i} = {table_of * i}")',
            solution: `table_of = 7
for i in range(1, 6):
    print(f"{table_of} x {i} = {table_of * i}")`,
          },
          {
            question: 'Calculate the sum of all natural numbers from 1 to 10 using a while loop.',
            difficulty: 'Medium',
            starterCode: `total = 0
current = 1
# Sum numbers 1 to 10
`,
            hint: 'while current <= 10: total += current; current += 1',
            solution: `total = 0
current = 1
while current <= 10:
    total += current
    current += 1
print(f"Sum from 1 to 10 is {total}")`,
          },
        ],
      },
      practice: {
        question: 'Print all even numbers between 1 and 20 using a for loop.',
        difficulty: 'Easy',
        starterCode: `# Print even numbers between 1 and 20
for i in range(2, 21, 2):
    print(i, end=" ")
print()`,
        hint: 'range(2, 21, 2) starts at 2, stops before 21, and steps by 2.',
        solution: `for i in range(2, 21, 2):
    print(i, end=" ")
print()`,
      },
    },
    {
      id: 'functions-args',
      title: '4. Functions, *args & **kwargs',
      summary:
        'Functions are reusable blocks of code defined with the def keyword. They can accept inputs (parameters), perform actions, and send back a result using the return statement.',
      syntax: `# Defining a basic function
def greet_student(name, branch="Science"):
    return f"Welcome {name} to {branch}!"

# Function with flexible *args
def calculate_total(*marks):
    return sum(marks)`,
      codeExample: `# Reusable grade calculator function
def calculate_percentage(obtained_marks, total_marks=500):
    """Calculates percentage given obtained and maximum marks."""
    percentage = (obtained_marks / total_marks) * 100
    return round(percentage, 2)

def describe_student(name, *scores, **details):
    total = sum(scores)
    avg = total / len(scores) if scores else 0
    print(f"Student: {name}")
    print(f"Scores: {scores} -> Average: {avg:.1f}")
    if "city" in details:
        print(f"Location: {details['city']}")

describe_student("Rohan", 85, 90, 78, city="Mumbai")`,
      expectedOutput: `Student: Rohan
Scores: (85, 90, 78) -> Average: 84.3
Location: Mumbai`,
      commonMistake:
        'Forgetting the return keyword in a function and wondering why the function call evaluates to None.',
      explanation: {
        intro:
          'A function is a named block of code that performs a specific task. You write it once, and then you can call (use) it anywhere in your program as many times as you like.',
        why:
          'Without functions, if you need to calculate a percentage or format a date 10 times, you would have to copy and paste identical code 10 times. Functions eliminate duplicate code and make programs neat and easy to fix.',
        analogy:
          'Think of a function like a toaster. You give it input (slices of bread), it performs an internal process (toasts the bread), and it returns the output (crispy toast). You do not need to build a new toaster every morning; you just reuse the one you have.',
        concept:
          '1. def: Keyword used to create (define) a function.\n2. Parameters: Variables listed inside the parentheses in the function definition that receive input.\n3. return: Sends a computed answer back to wherever the function was called.\n4. Default arguments: Parameters that have a fallback value if none is passed.\n5. *args: Allows a function to accept any number of extra positional arguments as a tuple.\n6. **kwargs: Allows a function to accept any number of extra keyword arguments as a dictionary.',
        syntaxBreakdown: [
          { part: 'def function_name(param1, param2):', meaning: 'Header defining the function name and its expected inputs' },
          { part: 'return result', meaning: 'Hands back the calculated result to the caller and exits the function' },
          { part: 'param = default_value', meaning: 'Default argument used if the caller does not supply one' },
          { part: '*args', meaning: 'Collects arbitrary positional arguments into a tuple' },
          { part: '**kwargs', meaning: 'Collects arbitrary keyword arguments (key=value) into a dictionary' },
        ],
        codeExplanation: [
          { line: 'def calculate_percentage(...)', explanation: 'Defines a function with a default total_marks of 500' },
          { line: 'return round(percentage, 2)', explanation: 'Returns the computed percentage rounded to 2 decimal places' },
          { line: 'def describe_student(name, *scores, **details):', explanation: 'Accepts a name, variable scores as *scores, and metadata as **details' },
          { line: 'total = sum(scores)', explanation: 'Adds up all scores passed into the *scores tuple' },
          { line: 'describe_student("Rohan", 85, 90, 78, city="Mumbai")', explanation: 'Calls the function with 3 numeric scores and 1 keyword argument' },
        ],
        outputExplanation:
          'The function receives "Rohan" as name, packs (85, 90, 78) into the scores tuple, calculates the average 84.3, detects city in details, and prints the profile.',
        commonMistakes: [
          {
            mistake: 'Using print() inside a function instead of return, making it impossible to use the result in further calculations.',
            fix: 'Use return when you want the function to give back a value that another part of your code can use.',
          },
          {
            mistake: 'Placing parameters with default values BEFORE required parameters (e.g. def func(a=10, b):).',
            fix: 'Always put non-default arguments first, followed by default arguments: def func(b, a=10):.',
          },
          {
            mistake: 'Trying to use a variable defined inside a function from outside that function.',
            fix: 'Variables created inside a function are local to it. Return the value if you need it outside.',
          },
          {
            mistake: 'Forgetting parentheses when calling a function: my_func instead of my_func().',
            fix: 'Always add () to execute the function; without (), you are just referencing the function object itself.',
          },
        ],
        keyPoints: [
          'Functions start with the def keyword and end with a colon (:).',
          'If a function has no return statement, it implicitly returns None.',
          'Arguments are values passed in; parameters are variable names inside the def header.',
          '*args bundles extra positional values into a tuple.',
          '**kwargs bundles extra keyword values into a dict.',
        ],
        quickSummary:
          'In simple words: Functions are mini-machines in your code. You define them once with def, feed them inputs (parameters), let them do the math, and get the final result back using return.',
        practiceSet: [
          {
            question: 'Write a function square(num) that returns the square of any number passed to it.',
            difficulty: 'Easy',
            starterCode: `# Define square function
def square(num):
    pass

print(square(6))`,
            hint: 'return num * num',
            solution: `def square(num):
    return num * num

print(square(6))  # 36`,
          },
          {
            question: 'Write a function is_eligible_to_vote(age) that returns True if age >= 18, and False otherwise.',
            difficulty: 'Easy',
            starterCode: `def is_eligible_to_vote(age):
    # return True or False
    pass

print(is_eligible_to_vote(19))`,
            hint: 'return age >= 18',
            solution: `def is_eligible_to_vote(age):
    return age >= 18

print(is_eligible_to_vote(19))  # True
print(is_eligible_to_vote(16))  # False`,
          },
          {
            question: 'Write a function find_maximum(*numbers) using *args that returns the largest number from any quantity of numbers passed.',
            difficulty: 'Medium',
            starterCode: `def find_maximum(*numbers):
    # Return max value
    pass

print(find_maximum(12, 45, 67, 23))`,
            hint: 'return max(numbers)',
            solution: `def find_maximum(*numbers):
    return max(numbers)

print(find_maximum(12, 45, 67, 23))  # 67`,
          },
        ],
      },
      practice: {
        question: 'Write a function power(base, exponent=2) that returns base raised to the exponent power.',
        difficulty: 'Easy',
        starterCode: `def power(base, exponent=2):
    # return base ** exponent
    pass

print(power(5))
print(power(2, 3))`,
        hint: 'Use the ** operator for exponentiation.',
        solution: `def power(base, exponent=2):
    return base ** exponent

print(power(5))    # 25
print(power(2, 3)) # 8`,
      },
    },
    {
      id: 'lists-comprehensions',
      title: '5. Lists & List Comprehensions',
      summary:
        'A list is an ordered, changeable collection of items. List comprehensions provide an elegant, compact one-line syntax to build new lists from existing ones.',
      syntax: `# Creating and modifying lists
fruits = ["Apple", "Mango", "Banana"]
fruits.append("Orange") # Add item
fruits[0] = "Guava"     # Modify item

# List comprehension: [expression for item in iterable if condition]
squares = [x * x for x in range(1, 6)]
evens = [x for x in range(1, 11) if x % 2 == 0]`,
      codeExample: `# Working with student mark lists
marks = [78, 92, 45, 88, 64, 95]

# Add a grace mark of 2 to everyone using list comprehension
adjusted_marks = [m + 2 for m in marks]

# Filter only distinction scores (>= 75)
distinctions = [m for m in adjusted_marks if m >= 75]

print(f"Original Marks: {marks}")
print(f"Adjusted (+2):  {adjusted_marks}")
print(f"Distinctions:   {distinctions}")`,
      expectedOutput: `Original Marks: [78, 92, 45, 88, 64, 95]
Adjusted (+2):  [80, 94, 47, 90, 66, 97]
Distinctions:   [80, 94, 90, 97]`,
      commonMistake:
        'Using index 1 to access the first item instead of index 0, or trying to access an index greater than len(list) - 1 causing an IndexError.',
      explanation: {
        intro:
          'A list in Python is an ordered, flexible collection that can hold multiple values under a single variable name. Items in a list are enclosed in square brackets [ ] and separated by commas.',
        why:
          'Without lists, storing 50 student names would require 50 individual variables (name1, name2, ..., name50). With a list, one variable holds all 50 names, and you can sort, search, and modify them in a single step.',
        analogy:
          'Think of a list like an egg carton or a pill organizer with numbered slots. The first slot is labeled 0, the next is 1, and so on. You can place items in slots, swap an item for a new one, or add extra slots to the end.',
        concept:
          '1. Zero-indexed: The first item is at index 0, second at index 1, and the last item is at index -1.\n2. Mutable: You can change, add, or delete items after the list is created.\n3. Common methods: .append(x) adds to end, .remove(x) deletes an item, .sort() orders the list.\n4. List Comprehension: A powerful one-line shortcut to transform or filter items without writing a full 4-line for loop.',
        syntaxBreakdown: [
          { part: '[item1, item2, ...]', meaning: 'Square brackets define a list literal' },
          { part: 'list[0]', meaning: 'Accesses the very first element (index 0)' },
          { part: 'list[-1]', meaning: 'Negative indexing: accesses the last element from the right' },
          { part: 'list.append(value)', meaning: 'Adds a new item to the end of the list' },
          { part: '[expr for x in seq if cond]', meaning: 'List comprehension: produces a new transformed and filtered list' },
        ],
        codeExplanation: [
          { line: 'marks = [78, 92, 45, 88, 64, 95]', explanation: 'Creates a list of 6 integer test scores' },
          { line: '[m + 2 for m in marks]', explanation: 'Loops through each score m in marks, adds 2, and collects into a new list' },
          { line: '[m for m in adjusted_marks if m >= 75]', explanation: 'Filters and keeps only scores that are 75 or higher' },
          { line: 'print(...)', explanation: 'Outputs each list to the terminal' },
        ],
        outputExplanation:
          'Every score in adjusted_marks is increased by 2. The distinctions list then extracts only the four values that met the condition >= 75.',
        commonMistakes: [
          {
            mistake: 'Trying to access list[len(list)], which causes IndexError: list index out of range.',
            fix: 'Remember that indices range from 0 to len - 1. To get the last item, use list[-1].',
          },
          {
            mistake: 'Thinking list.append([1, 2]) adds two separate items.',
            fix: '.append() adds the entire sublist as one element. Use .extend([1, 2]) to add elements individually.',
          },
          {
            mistake: 'Assigning list2 = list1 and expecting list2 to be an independent copy.',
            fix: 'In Python, list2 = list1 just creates a second name for the same list. Use list2 = list1.copy().',
          },
          {
            mistake: 'Overcomplicating list comprehensions with multiple nested loops making them unreadable.',
            fix: 'Keep list comprehensions simple. If it spans more than one condition, write a standard for loop.',
          },
        ],
        keyPoints: [
          'Lists use square brackets [ ] and are zero-indexed.',
          'Negative indices count backwards from the end: -1 is the last item.',
          'Lists are mutable: elements can be reassigned, added, and removed.',
          'List comprehensions replace multi-line loops with clean [x for x in seq] syntax.',
          'len(my_list) gives the total number of items.',
        ],
        quickSummary:
          'In simple words: A list is a numbered collection of items starting at index 0. You can change items anytime, and use list comprehensions [x * 2 for x in my_list] to transform lists in a single clean line.',
        practiceSet: [
          {
            question: 'Create a list of 5 colors. Print the first color and the last color using index 0 and -1.',
            difficulty: 'Easy',
            starterCode: `colors = ["Red", "Green", "Blue", "Yellow", "Purple"]
# Print first and last
`,
            hint: 'print(colors[0], colors[-1])',
            solution: `colors = ["Red", "Green", "Blue", "Yellow", "Purple"]
print(f"First: {colors[0]}")
print(f"Last: {colors[-1]}")`,
          },
          {
            question: 'Given numbers = [1, 2, 3, 4, 5], write a list comprehension that computes the cube (x ** 3) of each number.',
            difficulty: 'Easy',
            starterCode: `numbers = [1, 2, 3, 4, 5]
# List comprehension for cubes
cubes = []
print(cubes)`,
            hint: 'cubes = [x ** 3 for x in numbers]',
            solution: `numbers = [1, 2, 3, 4, 5]
cubes = [x ** 3 for x in numbers]
print(cubes)  # [1, 8, 27, 64, 125]`,
          },
          {
            question: 'From words = ["sun", "mountain", "sea", "sky", "forest"], filter only words with 4 or more letters using a list comprehension.',
            difficulty: 'Medium',
            starterCode: `words = ["sun", "mountain", "sea", "sky", "forest"]
# Filter words with len >= 4
`,
            hint: '[w for w in words if len(w) >= 4]',
            solution: `words = ["sun", "mountain", "sea", "sky", "forest"]
long_words = [w for w in words if len(w) >= 4]
print(long_words)  # ['mountain', 'forest']`,
          },
        ],
      },
      practice: {
        question: 'Given numbers from 1 to 10, create a list containing only odd numbers using a list comprehension.',
        difficulty: 'Easy',
        starterCode: `# Create a list of odd numbers from 1 to 10
odds = [x for x in range(1, 11) if x % 2 != 0]
print(odds)`,
        hint: 'Use the condition if x % 2 != 0 in the comprehension.',
        solution: `odds = [x for x in range(1, 11) if x % 2 != 0]
print(odds)`,
      },
    },
    {
      id: 'tuples-sets-dicts',
      title: '6. Tuples, Sets & Dictionaries',
      summary:
        'Tuples are immutable sequences, sets are collections of unique elements, and dictionaries store data in fast key-value pairs.',
      syntax: `# Tuple: ordered & immutable (cannot be changed)
point = (10, 20)

# Set: unique values, unordered
unique_ids = {101, 102, 103, 101} # 101 is kept only once

# Dictionary: key -> value mapping
student = {"name": "Siddharth", "roll": 15, "city": "Pune"}`,
      codeExample: `# Demonstrating Tuple, Set, and Dictionary
# 1. Tuple for fixed coordinate
college_location = (28.7041, 77.1025)

# 2. Set to remove duplicate hobby entries
hobbies = ["Chess", "Cricket", "Music", "Chess", "Cricket"]
unique_hobbies = set(hobbies)

# 3. Dictionary for student records
student_record = {
    "name": "Kavya",
    "class": 12,
    "stream": "Computer Science",
    "gpa": 9.4
}

print(f"Coordinates: {college_location}")
print(f"Unique Hobbies: {unique_hobbies}")
print(f"Student: {student_record['name']} | Stream: {student_record['stream']}")`,
      expectedOutput: `Coordinates: (28.7041, 77.1025)
Unique Hobbies: {'Chess', 'Cricket', 'Music'}
Student: Kavya | Stream: Computer Science`,
      commonMistake:
        'Trying to modify an element of a tuple (e.g., tuple[0] = 5) which raises a TypeError because tuples are immutable.',
      explanation: {
        intro:
          'Python gives you three specialized data structures besides lists: Tuples (locked lists that cannot change), Sets (bags of unique items with no duplicates), and Dictionaries (key-to-value address books).',
        why:
          'Real software handles different forms of data: GPS coordinates should never be accidentally modified (Tuple), student ID lists should never contain duplicates (Set), and user profiles need fast lookups by name or email (Dictionary).',
        analogy:
          'Tuple: A laminated diploma—once printed, you cannot alter the words.\nSet: A bag of marbles—no matter how many times you drop in a duplicate green marble, you only have green marbles in the collection.\nDictionary: A real phone directory—you look up someone by their unique name (key) to instantly find their phone number (value).',
        concept:
          '1. Tuple (a, b): Defined with round parentheses ( ). Immutable—fast and safe from accidental edits.\n2. Set {a, b}: Defined with curly braces { }. Automatically discards duplicate elements.\n3. Dictionary {key: value}: Key-value pairs. Lookups by key take O(1) instantaneous time.',
        syntaxBreakdown: [
          { part: '(item1, item2)', meaning: 'Tuple literal: ordered and immutable sequence' },
          { part: '{item1, item2}', meaning: 'Set literal: unordered collection of unique values' },
          { part: '{key: value}', meaning: 'Dictionary literal: maps unique keys to values' },
          { part: 'dict[key] = value', meaning: 'Adds a new key-value pair or updates an existing key' },
          { part: 'dict.get(key, default)', meaning: 'Safely gets a value without throwing a KeyError if missing' },
        ],
        codeExplanation: [
          { line: 'college_location = (28.7041, 77.1025)', explanation: 'Creates a 2-element tuple storing latitude and longitude' },
          { line: 'set(hobbies)', explanation: 'Converts a list with duplicates into a set with only unique items' },
          { line: 'student_record = {"name": "Kavya", ...}', explanation: 'Creates a dictionary mapping field names to data' },
          { line: 'student_record["name"]', explanation: 'Accesses the value associated with the key "name"' },
        ],
        outputExplanation:
          'The set removes duplicate entries for "Chess" and "Cricket". The dictionary lets us look up "Kavya" and "Computer Science" directly by their key names.',
        commonMistakes: [
          {
            mistake: 'Trying to modify an element in a tuple: t = (1, 2); t[0] = 10.',
            fix: 'Tuples cannot be modified. If you need a changeable sequence, use a list [ ] instead.',
          },
          {
            mistake: 'Trying to create an empty set using {} (this creates an empty dictionary!).',
            fix: 'To create an empty set, use set(), not {}.',
          },
          {
            mistake: 'Accessing a dictionary key that does not exist (dict["missing"]), causing a KeyError.',
            fix: 'Use dict.get("missing", default_value) to safely retrieve keys without crashing.',
          },
          {
            mistake: 'Using mutable items like lists as dictionary keys.',
            fix: 'Dictionary keys must be immutable (strings, numbers, or tuples).',
          },
        ],
        keyPoints: [
          'Tuples use ( ), are ordered, and cannot be modified (immutable).',
          'Sets use { }, are unordered, and automatically eliminate duplicates.',
          'Dictionaries use {key: value} and provide super-fast lookups by key.',
          'Use .get() on dictionaries to prevent KeyErrors.',
          'Empty set is set(); empty dict is {}.',
        ],
        quickSummary:
          'In simple words: Use Tuples when data should never change, Sets when you want only unique items, and Dictionaries when you want to look up values using names/keys like in a contact book.',
        practiceSet: [
          {
            question: 'Create a dictionary with keys "title", "author", and "pages" for your favorite book, and print the author.',
            difficulty: 'Easy',
            starterCode: `book = {
    # Add title, author, pages
}
# Print author
`,
            hint: 'print(book["author"])',
            solution: `book = {
    "title": "Wings of Fire",
    "author": "Dr. A.P.J. Abdul Kalam",
    "pages": 180
}
print(f"Author: {book['author']}")`,
          },
          {
            question: 'Given a list numbers = [1, 2, 2, 3, 4, 4, 4, 5], convert it to a set to find how many unique numbers exist.',
            difficulty: 'Easy',
            starterCode: `numbers = [1, 2, 2, 3, 4, 4, 4, 5]
# Find count of unique numbers
`,
            hint: 'len(set(numbers))',
            solution: `numbers = [1, 2, 2, 3, 4, 4, 4, 5]
unique = set(numbers)
print(f"Unique values: {unique} (Count: {len(unique)})")`,
          },
          {
            question: 'Store phone numbers in a dictionary. Safely look up "Emergency" with a fallback "112" using the .get() method.',
            difficulty: 'Medium',
            starterCode: `contacts = {"Mom": "9876543210", "Doctor": "9123456780"}
# Look up Emergency with default "112"
`,
            hint: 'contacts.get("Emergency", "112")',
            solution: `contacts = {"Mom": "9876543210", "Doctor": "9123456780"}
number = contacts.get("Emergency", "112")
print(f"Emergency number: {number}")`,
          },
        ],
      },
      practice: {
        question: 'Count frequency of each character in a word using a dictionary.',
        difficulty: 'Easy',
        starterCode: `word = "success"
freq = {}
for ch in word:
    freq[ch] = freq.get(ch, 0) + 1
print(freq)`,
        hint: 'Use freq.get(ch, 0) + 1 to increment counts.',
        solution: `word = "success"
freq = {}
for ch in word:
    freq[ch] = freq.get(ch, 0) + 1
print(freq)`,
      },
    },
    {
      id: 'oop-python',
      title: '7. Object-Oriented Programming (Classes & self)',
      summary:
        'Object-Oriented Programming (OOP) models software around real-world objects using classes as blueprints and instances as working objects.',
      syntax: `class Student:
    def __init__(self, name, roll_no):
        self.name = name       # Attribute
        self.roll_no = roll_no

    def display(self):         # Method
        print(f"Student: {self.name} (#{self.roll_no})")

# Creating an object (instance)
s1 = Student("Aman", 101)
s1.display()`,
      codeExample: `# Class definition for Bank Account
class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        self.holder = account_holder
        self.balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"₹{amount} deposited. New balance: ₹{self.balance}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"₹{amount} withdrawn. Remaining balance: ₹{self.balance}")
        else:
            print("Insufficient funds!")

# Create and use an account object
my_acc = BankAccount("Sneha", 1000)
my_acc.deposit(500)
my_acc.withdraw(300)`,
      expectedOutput: `₹500 deposited. New balance: ₹1500
₹300 withdrawn. Remaining balance: ₹1200`,
      commonMistake:
        'Forgetting self as the first parameter in class methods, which causes a TypeError when calling the method on an object.',
      explanation: {
        intro:
          'Object-Oriented Programming (OOP) is a programming style where you bundle related data (attributes) and functions that work on that data (methods) together into a single blueprint called a Class.',
        why:
          'In large programs (like video games or banking systems), keeping track of loose variables and functions gets messy. OOP lets you treat complex things like a "Car", a "User", or a "Bank Account" as self-contained objects.',
        analogy:
          'A class is like an architectural blueprint for a house. The blueprint itself is not a house you can live in; it just defines that houses have 3 bedrooms and a front door. When a builder constructs a real house from that blueprint, that real house is an Object (instance). You can build 50 houses from one blueprint!',
        concept:
          '1. class: Keyword to declare a blueprint.\n2. __init__: The special "constructor" method automatically called when a new object is created to initialize its values.\n3. self: A reference to the specific object currently being worked on.\n4. Attributes: Variables that belong to an object (e.g. self.balance).\n5. Methods: Functions that belong to an object (e.g. deposit()).',
        syntaxBreakdown: [
          { part: 'class ClassName:', meaning: 'Defines a new class blueprint (by convention, names are PascalCase)' },
          { part: 'def __init__(self, ...):', meaning: 'Constructor method automatically executed when creating an instance' },
          { part: 'self', meaning: 'Refers to the current individual instance of the class' },
          { part: 'self.attribute = value', meaning: 'Attaches a piece of data to the object' },
          { part: 'obj = ClassName()', meaning: 'Instantiates (creates) a new working object from the blueprint' },
        ],
        codeExplanation: [
          { line: 'class BankAccount:', explanation: 'Defines the BankAccount blueprint' },
          { line: 'def __init__(self, account_holder, initial_balance=0):', explanation: 'Initializes the account holder and starting balance' },
          { line: 'self.holder = account_holder', explanation: 'Saves the name into this specific account instance' },
          { line: 'def deposit(self, amount):', explanation: 'Method that increases self.balance by amount' },
          { line: 'my_acc = BankAccount("Sneha", 1000)', explanation: 'Creates a real account object for Sneha with 1000 rupees' },
          { line: 'my_acc.deposit(500)', explanation: 'Invokes deposit; self refers to my_acc' },
        ],
        outputExplanation:
          'The account starts with ₹1000. Depositing ₹500 raises the balance to ₹1500. Withdrawing ₹300 decreases the balance to ₹1200.',
        commonMistakes: [
          {
            mistake: 'Omitting "self" from method signatures: def deposit(amount): instead of def deposit(self, amount):.',
            fix: 'Every normal method inside a class MUST take "self" as its very first parameter.',
          },
          {
            mistake: 'Writing _init_ instead of __init__ (missing the double underscores).',
            fix: 'The constructor has two underscores on each side: __init__.',
          },
          {
            mistake: 'Forgetting to use self when accessing attributes: balance += amount instead of self.balance += amount.',
            fix: 'Always use self.attribute_name to access data that belongs to the object.',
          },
          {
            mistake: 'Confusing the class name with the object name: BankAccount.deposit(500) instead of my_acc.deposit(500).',
            fix: 'Call methods on your instantiated object (my_acc), not the class blueprint.',
          },
        ],
        keyPoints: [
          'A class is a blueprint; an object is an actual instance created from it.',
          '__init__() runs automatically whenever you create a new object.',
          'self points to the current object and must be the first parameter of methods.',
          'Attributes store state (data); methods define behavior (actions).',
          'Multiple objects can be created from the same class, each holding its own independent data.',
        ],
        quickSummary:
          'In simple words: Classes are blueprints that bundle data and actions together. Write class, use __init__ with self to set up starting values, and create objects to bring your blueprints to life.',
        practiceSet: [
          {
            question: 'Create a Book class with attributes title and author. Add a describe() method that prints "Book: <title> by <author>".',
            difficulty: 'Easy',
            starterCode: `class Book:
    # Define __init__ and describe
    pass

b1 = Book("Harry Potter", "J.K. Rowling")
# b1.describe()`,
            hint: 'def __init__(self, title, author): self.title = title; self.author = author',
            solution: `class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def describe(self):
        print(f"Book: {self.title} by {self.author}")

b1 = Book("Harry Potter", "J.K. Rowling")
b1.describe()`,
          },
          {
            question: 'Create a Rectangle class with width and height. Add an area() method that returns width * height.',
            difficulty: 'Easy',
            starterCode: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Add area method

r = Rectangle(10, 5)
# print(r.area())`,
            hint: 'def area(self): return self.width * self.height',
            solution: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

r = Rectangle(10, 5)
print(f"Area: {r.area()}")  # Area: 50`,
          },
          {
            question: 'Create a Student class that tracks a student name and a list of marks. Add a method add_mark(mark) and a method average().',
            difficulty: 'Medium',
            starterCode: `class Student:
    def __init__(self, name):
        self.name = name
        self.marks = []

    # Add add_mark and average methods
`,
            hint: 'def add_mark(self, mark): self.marks.append(mark)',
            solution: `class Student:
    def __init__(self, name):
        self.name = name
        self.marks = []

    def add_mark(self, mark):
        self.marks.append(mark)

    def average(self):
        return sum(self.marks) / len(self.marks) if self.marks else 0

s = Student("Aditi")
s.add_mark(85)
s.add_mark(95)
print(f"{s.name}'s average: {s.average()}")`,
          },
        ],
      },
      practice: {
        question: 'Design a Circle class with a radius attribute and a method get_area() that calculates area (3.14159 * r * r).',
        difficulty: 'Easy',
        starterCode: `class Circle:
    def __init__(self, radius):
        self.radius = radius

    def get_area(self):
        return 3.14159 * (self.radius ** 2)

c = Circle(7)
print(f"Area: {c.get_area():.2f}")`,
        hint: 'Area of circle = pi * r^2.',
        solution: `class Circle:
    def __init__(self, radius):
        self.radius = radius

    def get_area(self):
        return 3.14159 * (self.radius ** 2)

c = Circle(7)
print(f"Area: {c.get_area():.2f}")`,
      },
    },
    {
      id: 'exception-handling',
      title: '8. Exception Handling (try, except, else, finally)',
      summary:
        'Exception handling allows programs to detect runtime errors (like division by zero or invalid user input) and handle them gracefully without crashing.',
      syntax: `try:
    # Code that might cause an error
    result = 10 / number
except ZeroDivisionError:
    # Runs if division by zero occurs
    print("Cannot divide by zero!")
except ValueError:
    # Runs if conversion fails
    print("Invalid numeric input!")
else:
    # Runs only if NO errors occurred
    print("Calculation successful!")
finally:
    # ALWAYS runs, no matter what
    print("Cleanup completed.")`,
      codeExample: `# Safe division calculator program
def safe_divide(a, b):
    try:
        num1 = float(a)
        num2 = float(b)
        result = num1 / num2
    except ZeroDivisionError:
        return "Error: Cannot divide by zero!"
    except ValueError:
        return "Error: Both inputs must be valid numbers!"
    else:
        return f"Result: {result}"
    finally:
        print("[Log] Division operation attempted.")

print(safe_divide(20, 4))
print(safe_divide(10, 0))
print(safe_divide("abc", 5))`,
      expectedOutput: `[Log] Division operation attempted.
Result: 5.0
[Log] Division operation attempted.
Error: Cannot divide by zero!
[Log] Division operation attempted.
Error: Both inputs must be valid numbers!`,
      commonMistake:
        'Using a bare "except:" clause without specifying an exception type, which hides all bugs (even syntax errors and keyboard interrupts).',
      explanation: {
        intro:
          "An exception is an error that happens while a program is running. Exception handling using try and except is Python's safety net to catch errors and prevent your application from abruptly crashing.",
        why:
          'If a user types "hello" when asked for their age, a program without error handling crashes with a red error screen. With exception handling, you catch the mistake, show a polite message, and let the user try again.',
        analogy:
          'Think of the try block like walking on a trapeze wire. The except block is the safety net underneath. If you slip and fall (an error happens), the net catches you safely so the show can go on. The finally block is like washing your hands afterwards—you do it no matter what happens on the trapeze.',
        concept:
          '1. try: Put risky lines here that could fail.\n2. except ErrorType: If that specific error occurs in try, jump here immediately.\n3. else: Runs only if the try block succeeded with zero errors.\n4. finally: Guaranteed to execute whether an error occurred or not (great for closing files or connections).',
        syntaxBreakdown: [
          { part: 'try:', meaning: 'Encloses code that might trigger a runtime error' },
          { part: 'except SpecificError:', meaning: 'Catches and handles that specific error without crashing' },
          { part: 'except Error as e:', meaning: 'Stores the error details inside variable e for printing' },
          { part: 'else:', meaning: 'Runs only when no exception was raised in the try block' },
          { part: 'finally:', meaning: 'Always executes at the end, regardless of success or failure' },
        ],
        codeExplanation: [
          { line: 'try:', explanation: 'Begins the protected block of code' },
          { line: 'result = num1 / num2', explanation: 'Risky line: will throw ZeroDivisionError if num2 is 0' },
          { line: 'except ZeroDivisionError:', explanation: 'Catches attempt to divide by zero and returns a friendly string' },
          { line: 'except ValueError:', explanation: 'Catches failed conversion from string to float' },
          { line: 'finally:', explanation: 'Prints the log message for every single function invocation' },
        ],
        outputExplanation:
          '20 / 4 succeeds and outputs 5.0. 10 / 0 is intercepted by ZeroDivisionError. "abc" / 5 is caught by ValueError. In all three cases, the finally block logs the attempt.',
        commonMistakes: [
          {
            mistake: 'Using a bare "except:" without naming the error type.',
            fix: 'Always name the specific error you expect, like except ValueError: or except ZeroDivisionError:.',
          },
          {
            mistake: 'Putting your entire program inside a single giant try block.',
            fix: 'Keep try blocks small and focused only on the specific lines that might fail.',
          },
          {
            mistake: 'Thinking finally is skipped if return is encountered.',
            fix: 'The finally block executes even if you return inside try or except.',
          },
          {
            mistake: 'Ignoring caught exceptions silently with pass, leaving bugs undiscovered.',
            fix: 'Always log or display an informative message so you know an error took place.',
          },
        ],
        keyPoints: [
          'Code that can fail goes inside the try block.',
          'The except block catches errors and prevents program termination.',
          'Common exceptions: ValueError, TypeError, ZeroDivisionError, IndexError, KeyError.',
          'else runs only when try finishes without errors.',
          'finally runs unconditionally every time.',
        ],
        quickSummary:
          'In simple words: Use try to run risky code, except to catch and handle errors gracefully, else for code that needs zero errors, and finally for cleanup that must always happen.',
        practiceSet: [
          {
            question: 'Write a snippet that asks the user for a number with input(), converts it with int(), and catches ValueError if they type letters.',
            difficulty: 'Easy',
            starterCode: `user_input = "forty"
try:
    # Convert and print
    pass
except ValueError:
    print("Invalid number entered!")`,
            hint: 'val = int(user_input)',
            solution: `user_input = "forty"
try:
    val = int(user_input)
    print(f"Number is {val}")
except ValueError:
    print("Invalid number entered!")`,
          },
          {
            question: 'Safely access the 5th element of a 3-item list items = [10, 20, 30] by catching IndexError.',
            difficulty: 'Easy',
            starterCode: `items = [10, 20, 30]
try:
    # Access items[5]
    pass
except IndexError:
    print("Index out of bounds!")`,
            hint: 'val = items[5]',
            solution: `items = [10, 20, 30]
try:
    val = items[5]
    print(val)
except IndexError:
    print("Index out of bounds!")`,
          },
          {
            question: 'Write a function safe_square_root(n) that raises a ValueError("Cannot take root of negative number") if n < 0, otherwise returns n ** 0.5.',
            difficulty: 'Medium',
            starterCode: `def safe_square_root(n):
    # Raise error if n < 0
    pass

try:
    print(safe_square_root(-9))
except ValueError as e:
    print(f"Caught: {e}")`,
            hint: 'if n < 0: raise ValueError("Cannot take root of negative number")',
            solution: `def safe_square_root(n):
    if n < 0:
        raise ValueError("Cannot take root of negative number")
    return n ** 0.5

try:
    print(safe_square_root(-9))
except ValueError as e:
    print(f"Caught: {e}")`,
          },
        ],
      },
      practice: {
        question: 'Safely convert user input to integer, handling ValueError.',
        difficulty: 'Easy',
        starterCode: `raw = "abc"
try:
    val = int(raw)
    print(f"Value: {val}")
except ValueError:
    print("Invalid integer string provided!")`,
        hint: 'Use try-except with ValueError.',
        solution: `raw = "abc"
try:
    val = int(raw)
    print(f"Value: {val}")
except ValueError:
    print("Invalid integer string provided!")`,
      },
    },
    {
      id: 'generators-iterators',
      title: '9. Generators & The yield Keyword',
      summary:
        'Generators are special functions that produce values on demand one at a time using the yield keyword instead of storing millions of items in memory all at once.',
      syntax: `# Generator function using yield
def count_up_to(max_val):
    count = 1
    while count <= max_val:
        yield count
        count += 1

# Using the generator in a loop
for number in count_up_to(3):
    print(number)`,
      codeExample: `# Memory-efficient Fibonacci number generator
def fibonacci_generator(limit):
    """Yields Fibonacci numbers smaller than the given limit."""
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

# Print Fibonacci numbers under 50
print("Fibonacci under 50:")
for num in fibonacci_generator(50):
    print(num, end=" ")
print()`,
      expectedOutput: `Fibonacci under 50:
0 1 1 2 3 5 8 13 21 34`,
      commonMistake:
        'Treating a generator object like a regular list (e.g. attempting gen[0] or expecting it to print all values directly) instead of iterating over it.',
      explanation: {
        intro:
          'A generator is a function that produces a sequence of values one at a time on demand. Instead of calculating everything upfront and packing it into a huge list, it pauses after each value using the yield keyword.',
        why:
          'Imagine generating 10 million numbers. A list would consume gigabytes of computer RAM and freeze your PC. A generator produces one number at a time, taking virtually zero memory regardless of whether you generate 10 or 10 billion numbers.',
        analogy:
          'Think of a list like buying a 24-can crate of soda: you carry the entire heavy crate home and it takes up all your fridge space. A generator is like a soda fountain dispenser: you press the lever whenever you want a cup, drink it, and get the next cup only when needed.',
        concept:
          '1. yield keyword: Unlike return which finishes a function forever, yield returns a value and PAUSES the function right there.\n2. When asked for the next item (e.g. in a for loop), the function resumes from where it paused.\n3. Lazy Evaluation: Numbers are computed only when requested, saving massive amounts of memory.',
        syntaxBreakdown: [
          { part: 'def func(): yield value', meaning: 'Any function containing yield becomes a generator function' },
          { part: 'yield x', meaning: 'Pauses function execution, yields value x to the caller, and remembers state' },
          { part: 'next(generator)', meaning: 'Manually requests the next yielded value from the generator' },
          { part: 'for item in gen:', meaning: 'Loops through all yielded values until the generator function finishes' },
        ],
        codeExplanation: [
          { line: 'def fibonacci_generator(limit):', explanation: 'Defines a generator function with a limit parameter' },
          { line: 'a, b = 0, 1', explanation: 'Initializes the first two Fibonacci numbers' },
          { line: 'yield a', explanation: 'Yields the current number a and pauses the function' },
          { line: 'a, b = b, a + b', explanation: 'Computes the next terms when resumed' },
          { line: 'for num in fibonacci_generator(50):', explanation: 'Loops through the generator until a reaches 50' },
        ],
        outputExplanation:
          'The generator produces 0, then 1, then 1, 2, 3, 5, 8, 13, 21, 34 sequentially. When a reaches 55 (>= 50), the while loop ends, stopping the iteration.',
        commonMistakes: [
          {
            mistake: 'Trying to index a generator like gen[0], causing TypeError: "generator" object is not subscriptable.',
            fix: 'Generators cannot be indexed. Use next(gen), iterate with a for loop, or convert with list(gen).',
          },
          {
            mistake: 'Trying to reuse a generator that has already finished yielding its values.',
            fix: 'Generators are one-time-use. Once exhausted, you must call the generator function again to create a new one.',
          },
          {
            mistake: 'Using return with a value inside a generator function expecting it to yield.',
            fix: 'Use yield to output values; return inside a generator terminates the sequence.',
          },
          {
            mistake: 'Printing the generator object directly print(gen) and wondering why it says <generator object at 0x...>.',
            fix: 'A generator produces values on demand. Iterate over it or use list(gen) to see the numbers.',
          },
        ],
        keyPoints: [
          'Functions with yield are generator functions.',
          'yield pauses execution and preserves local variables for next time.',
          'Generators use lazy evaluation, using almost zero RAM.',
          'Iterate over them with for loops or next().',
          'Once a generator completes, it is exhausted and cannot be restarted.',
        ],
        quickSummary:
          'In simple words: A generator is a function that dispenses values one at a time using yield instead of dumping everything into memory at once. It is fast, efficient, and saves huge amounts of RAM.',
        practiceSet: [
          {
            question: 'Write a generator count_down(n) that yields numbers counting down from n to 1.',
            difficulty: 'Easy',
            starterCode: `def count_down(n):
    # yield numbers from n down to 1
    pass

for x in count_down(3):
    print(x)`,
            hint: 'while n > 0: yield n; n -= 1',
            solution: `def count_down(n):
    while n > 0:
        yield n
        n -= 1

for x in count_down(3):
    print(x)  # 3, 2, 1`,
          },
          {
            question: 'Write a generator square_gen(n) that yields squares of numbers from 1 to n.',
            difficulty: 'Easy',
            starterCode: `def square_gen(n):
    # yield squares
    pass

for sq in square_gen(4):
    print(sq, end=" ")
print()`,
            hint: 'for i in range(1, n + 1): yield i * i',
            solution: `def square_gen(n):
    for i in range(1, n + 1):
        yield i * i

for sq in square_gen(4):
    print(sq, end=" ")
print()  # 1 4 9 16`,
          },
          {
            question: 'Create an even_numbers(limit) generator that yields even numbers up to limit. Collect them into a list using list(even_numbers(10)).',
            difficulty: 'Medium',
            starterCode: `def even_numbers(limit):
    # yield even numbers
    pass

evens = list(even_numbers(10))
print(evens)`,
            hint: 'for i in range(2, limit + 1, 2): yield i',
            solution: `def even_numbers(limit):
    for i in range(2, limit + 1, 2):
        yield i

evens = list(even_numbers(10))
print(evens)  # [2, 4, 6, 8, 10]`,
          },
        ],
      },
      practice: {
        question: 'Write a generator that yields squares of numbers from 1 to n.',
        difficulty: 'Easy',
        starterCode: `def square_gen(n):
    # yield squares
    pass

for sq in square_gen(4):
    print(sq, end=" ")
print()`,
        hint: 'for i in range(1, n + 1): yield i * i',
        solution: `def square_gen(n):
    for i in range(1, n + 1):
        yield i * i

for sq in square_gen(4):
    print(sq, end=" ")
print()`,
      },
    },
  ],
  bTechPriority: {
    semesterExams: [
      'List comprehensions vs map() and filter() performance and syntax.',
      'Mutable (lists, dicts, sets) vs Immutable types (tuples, strings, ints, frozensets).',
      'The difference between deepcopy and shallow copy using the copy module.',
      'File handling idioms with context managers (with open("file.txt", "r") as f:).',
      'Exception hierarchy and writing custom user-defined Exception classes.',
    ],
    vivaQuestions: [
      {
        q: 'What is the Python Global Interpreter Lock (GIL)?',
        a: 'The GIL is a mutex in CPython that allows only one native thread to execute Python bytecode at a time, preventing race conditions in memory management.',
      },
      {
        q: 'What is the difference between is and == in Python?',
        a: '== checks equality of contents/values, whereas is checks object identity (whether two references point to the exact same location in memory).',
      },
      {
        q: 'What are Python Decorators (@decorator)?',
        a: 'Decorators are higher-order functions that take a function as an argument and extend its behavior without explicitly modifying the function body.',
      },
      {
        q: 'What is the difference between *args and **kwargs?',
        a: '*args collects extra positional arguments into a tuple, while **kwargs collects extra keyword arguments into a dictionary.',
      },
    ],
    dsaPrerequisites: [
      'Python lists are dynamic arrays (similar to C++ vector), offering O(1) append and O(n) insert.',
      'The collections module provides deque (O(1) pops and appends at both ends), Counter, and defaultdict for graph traversal.',
      'heapq provides min-heap operations (heappush, heappop) essential for Priority Queues and Dijkstra algorithm.',
    ],
    interviewTips: [
      'In coding interviews, demonstrate fluency with Python built-ins like zip(), enumerate(), any(), and all().',
      'Know when to use a dictionary or set for O(1) membership testing rather than an O(n) list scan.',
      'Highlight Python applications in modern AI/ML pipelines when answering software engineering interview questions.',
    ],
  },
};
