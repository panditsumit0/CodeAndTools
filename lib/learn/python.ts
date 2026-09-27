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
    'B.Tech AI/ML Coursework, Data Science, Python Lab Exams, Scripting & Backend APIs (FastAPI/Django)',
  icon: 'Terminal',
  color: 'emerald',
  intro: {
    whatIs:
      'Python is an interpreted, high-level, dynamically-typed programming language created by Guido van Rossum in 1991. It emphasizes code readability through clean indentation ("The Zen of Python") and rapid developer productivity.',
    whyLearn:
      'Python is the uncontested industry leader for Artificial Intelligence, Machine Learning, Deep Learning, Data Analytics, and DevOps automation. For B.Tech undergraduates, Python allows you to build working neural networks, web scrapers, and automated scripts with minimal boilerplate code.',
    whereUsed: [
      'Artificial Intelligence & Deep Learning (PyTorch, TensorFlow, HuggingFace, scikit-learn)',
      'Data Science & Analytics (Pandas, NumPy, Matplotlib, Jupyter Notebooks)',
      'Modern Web Backend Services (FastAPI, Django, Flask)',
      'Cloud, DevOps, Automation & Scripting (Ansible, AWS Boto3, Docker SDK)',
    ],
    advantages: [
      'Ultra-readable, clean syntax that mirrors natural English pseudocode',
      'Massive global library ecosystem for math, AI, automation, and web development',
      'Dynamic typing enables rapid prototyping and short development cycles',
      'Cross-platform execution on Linux, macOS, and Windows without recompilation',
    ],
    limitations: [
      'Slower execution speed compared to compiled languages like C, C++, or Rust',
      'Global Interpreter Lock (GIL) limits true multi-core CPU parallelism in standard CPython',
      'Type errors surface at runtime rather than during a compile phase (mitigated with type hints)',
    ],
  },
  visualCallout: {
    title: 'Why Python Dominates Modern Engineering',
    description: 'Python is the foundational language for the current generation of software and AI:',
    items: [
      {
        label: 'Artificial Intelligence & ML',
        detail: 'TensorFlow, PyTorch, LangChain, and OpenAI SDKs are built Python-first.',
        badge: 'AI / ML',
      },
      {
        label: 'Data Science',
        detail: 'Pandas DataFrames and NumPy vectorized math replace manual matrix arithmetic.',
        badge: 'Data',
      },
      {
        label: 'Fast Prototyping',
        detail: 'Implement algorithms in 10 lines of Python that require 60 lines in C or Java.',
        badge: 'Speed',
      },
      {
        label: 'Automation & APIs',
        detail: 'FastAPI and Requests simplify web crawling, serverless functions, and microservices.',
        badge: 'Backend',
      },
    ],
  },
  topics: [
    {
      id: 'basic-syntax-io',
      title: '1. Basic Syntax, Indentation & I/O',
      summary:
        'Python uses clean indentation (4 spaces) rather than curly braces to define code blocks. Formatted string literals (f-strings) provide clean string interpolation.',
      syntax: `name = input("Enter name: ")
print(f"Hello, {name}!")`,
      codeExample: `# Python syntax and f-string demonstration
department = "Computer Science"
semester = 2
students = 120

print(f"B.Tech Department: {department}")
print(f"Current Semester: {semester} | Enrolled: {students} students")`,
      expectedOutput: `B.Tech Department: Computer Science
Current Semester: 2 | Enrolled: 120 students`,
      commonMistake:
        'Mixing tabs and spaces for indentation, which raises an IndentationError or TabError in Python 3.',
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
        'Variables in Python do not require explicit type declarations; types are bound dynamically to objects at runtime. Built-in primitives include int, float, bool, str, and NoneType.',
      syntax: `count = 10         # int
pi = 3.14159       # float
is_active = True   # bool
title = "DevForge"   # str
user = None        # NoneType`,
      codeExample: `x = 42
print(f"Value: {x}, Type: {type(x).__name__}")

x = "Now I am a string"
print(f"Value: {x}, Type: {type(x).__name__}")`,
      expectedOutput: `Value: 42, Type: int
Value: Now I am a string, Type: str`,
      commonMistake:
        'Attempting to concatenate a string and a number directly ("Roll: " + 42) without converting via str(42) or an f-string.',
      practice: {
        question: 'Demonstrate multiple variable assignment and variable swapping in a single line.',
        difficulty: 'Easy',
        starterCode: `a, b = 5, 10
# Swap a and b in one line without a temp variable
print(f"a={a}, b={b}")`,
        hint: 'Use tuple unpacking: a, b = b, a',
        solution: `a, b = 5, 10
a, b = b, a
print(f"a={a}, b={b}")`,
      },
    },
    {
      id: 'conditionals-loops',
      title: '3. Conditions & Loops (for in, while)',
      summary:
        'Use if, elif, and else for branching. Python loops iterate directly over iterable sequences (lists, strings, ranges) using for ... in, with optional break, continue, and else clauses.',
      syntax: `if score >= 90:
    grade = 'O'
elif score >= 80:
    grade = 'A'
else:
    grade = 'B'

for i in range(5):
    print(i)`,
      codeExample: `# Range iteration and loop control
print("Even numbers under 10:")
for num in range(0, 10, 2):
    print(num, end=" ")
print()`,
      expectedOutput: `Even numbers under 10:
0 2 4 6 8`,
      commonMistake:
        'Forgetting the colon (:) at the end of if, elif, else, for, or while statements.',
      practice: {
        question: 'Write a loop that prints the multiplication table of 7 up to 7 x 5.',
        difficulty: 'Easy',
        starterCode: `# Print 7 x 1 through 7 x 5
for i in range(1, 6):
    pass`,
        hint: 'print(f"7 x {i} = {7 * i}")',
        solution: `for i in range(1, 6):
    print(f"7 x {i} = {7 * i}")`,
      },
    },
    {
      id: 'functions-args',
      title: '4. Functions, *args & **kwargs',
      summary:
        'Functions are defined using the def keyword. Python supports default parameter values, variable positional arguments (*args), and keyword arguments (**kwargs).',
      syntax: `def calculate_stats(*numbers, multiplier=1):
    total = sum(numbers) * multiplier
    return total`,
      codeExample: `def greet(name, role="Student"):
    return f"Hello {name}, Role: {role}"

def summarize(*scores):
    return f"Count: {len(scores)}, Average: {sum(scores)/len(scores):.2f}"

print(greet("Aditya"))
print(greet("Dr. Sharma", role="Professor"))
print(summarize(85, 92, 78, 90))`,
      expectedOutput: `Hello Aditya, Role: Student
Hello Dr. Sharma, Role: Professor
Count: 4, Average: 86.25`,
      commonMistake:
        'Using a mutable object (like a list [] or dict {}) as a default argument parameter (e.g. def add(x, list=[]):), which retains mutated state across calls.',
      practice: {
        question: 'Write a function is_palindrome(text) that ignores casing and returns True if text is a palindrome.',
        difficulty: 'Easy',
        starterCode: `def is_palindrome(text: str) -> bool:
    # check palindrome
    return False

print(is_palindrome("Racecar"))`,
        hint: 'cleaned = text.lower(); return cleaned == cleaned[::-1]',
        solution: `def is_palindrome(text: str) -> bool:
    cleaned = text.lower()
    return cleaned == cleaned[::-1]

print(is_palindrome("Racecar"))`,
      },
    },
    {
      id: 'lists-comprehensions',
      title: '5. Lists & List Comprehensions',
      summary:
        'Lists are ordered, mutable collections. List comprehensions provide an elegant, expressive syntax to filter and transform sequences in a single readable line.',
      syntax: `# [expression for item in iterable if condition]
squares = [x**2 for x in range(10) if x % 2 == 0]`,
      codeExample: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List comprehension filtering even numbers and squaring them
even_squares = [n**2 for n in numbers if n % 2 == 0]

print("Original:", numbers)
print("Even Squares:", even_squares)`,
      expectedOutput: `Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Even Squares: [4, 16, 36, 64, 100]`,
      commonMistake:
        'Modifying a list while iterating over it with a for loop, which skips elements due to internal index shifts.',
      practice: {
        question: 'Use a list comprehension to extract all uppercase words from ["apple", "BANANA", "cherry", "DATE"].',
        difficulty: 'Easy',
        starterCode: `words = ["apple", "BANANA", "cherry", "DATE"]
# list comprehension here`,
        hint: '[w for w in words if w.isupper()]',
        solution: `words = ["apple", "BANANA", "cherry", "DATE"]
uppercase_words = [w for w in words if w.isupper()]
print(uppercase_words)`,
      },
    },
    {
      id: 'tuples-sets-dicts',
      title: '6. Tuples, Sets & Dictionaries',
      summary:
        'Tuples () are immutable sequences; Sets {} store unique, unordered elements with set operations (union, intersection); Dictionaries {k: v} map hashable keys to values in O(1) time.',
      syntax: `point = (10, 20)           # tuple
unique_ids = {101, 102}     # set
student = {"id": 101}       # dict`,
      codeExample: `# Dictionary and Set operations
student_records = {
    "101": {"name": "Aryan", "branch": "CSE", "gpa": 9.1},
    "102": {"name": "Meera", "branch": "ECE", "gpa": 8.8},
}

for roll, info in student_records.items():
    print(f"Roll {roll}: {info['name']} ({info['branch']}) - GPA {info['gpa']}")`,
      expectedOutput: `Roll 101: Aryan (CSE) - GPA 9.1
Roll 102: Meera (ECE) - GPA 8.8`,
      commonMistake:
        'Accessing a non-existent dictionary key directly via dict[key] (raises KeyError) instead of using safe dict.get(key, default).',
      practice: {
        question: 'Find the common elements between two lists using set intersection.',
        difficulty: 'Easy',
        starterCode: `list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
# Print common elements`,
        hint: 'set(list1) & set(list2)',
        solution: `list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
common = set(list1) & set(list2)
print("Common elements:", sorted(list(common)))`,
      },
    },
    {
      id: 'oop-python',
      title: '7. Object-Oriented Programming (Classes & self)',
      summary:
        'Classes in Python group data and methods. The __init__ method is the constructor, and self explicitly refers to the instance executing the method.',
      syntax: `class Student:
    def __init__(self, name: str, roll: int):
        self.name = name
        self.roll = roll

    def display(self):
        print(f"{self.name} ({self.roll})")`,
      codeExample: `class BankAccount:
    def __init__(self, owner: str, balance: float = 0.0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount: float):
        self.balance += amount
        return self.balance

    def __str__(self):
        return f"Account({self.owner}: Rs. {self.balance:.2f})"

acc = BankAccount("Rohit", 5000.0)
acc.deposit(1500.0)
print(acc)`,
      expectedOutput: `Account(Rohit: Rs. 6500.00)`,
      commonMistake:
        'Forgetting the self parameter as the first argument in class instance methods (e.g. def display(): instead of def display(self):).',
      practice: {
        question: 'Create a Circle class with a radius attribute and an area() method.',
        difficulty: 'Easy',
        starterCode: `import math

class Circle:
    # constructor and area method
    pass

c = Circle(5)
print(f"Area: {c.area():.2f}")`,
        hint: 'def area(self): return math.pi * self.radius ** 2',
        solution: `import math

class Circle:
    def __init__(self, radius: float):
        self.radius = radius
    def area(self) -> float:
        return math.pi * self.radius ** 2

c = Circle(5)
print(f"Area: {c.area():.2f}")`,
      },
    },
    {
      id: 'exception-handling',
      title: '8. Exception Handling (try, except, else, finally)',
      summary:
        'Exceptions are handled using try and except blocks. An optional else block runs only if no exception occurred, and finally runs unconditionally for cleanup.',
      syntax: `try:
    result = 10 / 0
except ZeroDivisionError as e:
    print("Cannot divide by zero")
else:
    print("Success")
finally:
    print("Cleanup completed")`,
      codeExample: `def safe_divide(a, b):
    try:
        val = a / b
    except ZeroDivisionError:
        return "Error: Division by zero is undefined"
    except TypeError:
        return "Error: Operands must be numerical"
    else:
        return f"Result: {val:.2f}"

print(safe_divide(20, 4))
print(safe_divide(10, 0))`,
      expectedOutput: `Result: 5.00
Error: Division by zero is undefined`,
      commonMistake:
        'Using a bare except: statement, which catches SystemExit and KeyboardInterrupt, preventing programs from terminating cleanly.',
      practice: {
        question: 'Write a function safe_int(val) that attempts to convert a string to int and returns None if a ValueError occurs.',
        difficulty: 'Easy',
        starterCode: `def safe_int(val):
    # try converting to int
    pass

print(safe_int("123"))
print(safe_int("abc"))`,
        hint: 'try: return int(val) except ValueError: return None',
        solution: `def safe_int(val):
    try:
        return int(val)
    except ValueError:
        return None

print(safe_int("123"))
print(safe_int("abc"))`,
      },
    },
    {
      id: 'generators-iterators',
      title: '9. Generators & The yield Keyword',
      summary:
        'Generators produce sequences on demand without loading the entire collection into memory. When a generator function reaches a yield statement, it pauses execution and yields the value.',
      syntax: `def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1`,
      codeExample: `def fibonacci_generator(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

print("Fibonacci under 50:")
for num in fibonacci_generator(50):
    print(num, end=" ")
print()`,
      expectedOutput: `Fibonacci under 50:
0 1 1 2 3 5 8 13 21 34`,
      commonMistake:
        'Treating a generator object like a regular list (e.g. attempting gen[0]); generators must be iterated over or converted with list(gen).',
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
