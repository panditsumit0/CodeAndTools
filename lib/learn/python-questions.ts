import { PracticeQuestion } from './java-questions';

export const pythonQuestions: PracticeQuestion[] = [
  // EASY (10 questions)
  {
    id: 'py-easy-01',
    title: 'Hello World and Basic Output',
    difficulty: 'Easy',
    topic: 'Basic I/O',
    question: 'Write a Python program to print "Hello, DevForge B.Tech Python!" to the console.',
    hint: 'Use `print(...)`.',
    solution: `print("Hello, DevForge B.Tech Python!")`,
    starterCode: `# Write your code here
`,
    sampleStdin: '',
    expectedOutput: 'Hello, DevForge B.Tech Python!',
  },
  {
    id: 'py-easy-02',
    title: 'Sum of Two Numbers from Input',
    difficulty: 'Easy',
    topic: 'Standard Input & Type Casting',
    question: 'Read two space-separated integers a and b from standard input and print their sum.',
    hint: 'Use `input().split()` and map to `int`.',
    solution: `a, b = map(int, input().split())
print(a + b)`,
    starterCode: `# Read two integers and print their sum
`,
    sampleStdin: '18 24',
    expectedOutput: '42',
  },
  {
    id: 'py-easy-03',
    title: 'Even or Odd Number',
    difficulty: 'Easy',
    topic: 'Conditions',
    question: 'Read an integer n and print "Even" if divisible by 2, otherwise "Odd".',
    hint: '`if n % 2 == 0:`',
    solution: `n = int(input())
print("Even" if n % 2 == 0 else "Odd")`,
    starterCode: `# Check if input integer is even or odd
`,
    sampleStdin: '7',
    expectedOutput: 'Odd',
  },
  {
    id: 'py-easy-04',
    title: 'Multiplication Table',
    difficulty: 'Easy',
    topic: 'Loops',
    question: 'Read an integer n and print its multiplication table from 1 to 10 in the format "n x i = result".',
    hint: 'Use `for i in range(1, 11):` and f-strings.',
    solution: `n = int(input())
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`,
    starterCode: `# Print multiplication table of n from 1 to 10
`,
    sampleStdin: '5',
    expectedOutput: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50',
  },
  {
    id: 'py-easy-05',
    title: 'Largest of Three Numbers',
    difficulty: 'Easy',
    topic: 'Built-in Functions',
    question: 'Read three numbers and print the largest value using Python built-in `max`.',
    hint: '`max(a, b, c)` or `max(map(int, input().split()))`',
    solution: `nums = list(map(int, input().split()))
print(max(nums))`,
    starterCode: `# Read 3 integers and print the maximum
`,
    sampleStdin: '15 42 27',
    expectedOutput: '42',
  },
  {
    id: 'py-easy-06',
    title: 'Factorial Calculation',
    difficulty: 'Easy',
    topic: 'Loops / Math',
    question: 'Read a non-negative integer n and calculate its factorial. (0! = 1).',
    hint: 'Multiply in a loop or use `math.prod(range(1, n + 1))`',
    solution: `n = int(input())
fact = 1
for i in range(2, n + 1):
    fact *= i
print(fact)`,
    starterCode: `# Compute factorial of n
`,
    sampleStdin: '6',
    expectedOutput: '720',
  },
  {
    id: 'py-easy-07',
    title: 'String Slicing and Reversal',
    difficulty: 'Easy',
    topic: 'Strings',
    question: 'Read a string from input and print it in reverse using slicing notation.',
    hint: '`s[::-1]`',
    solution: `s = input()
print(s[::-1])`,
    starterCode: `# Read string and print reversed
`,
    sampleStdin: 'algorithm',
    expectedOutput: 'mhtirogla',
  },
  {
    id: 'py-easy-08',
    title: 'Sum and Average of a List',
    difficulty: 'Easy',
    topic: 'Lists',
    question: 'Read a line of numbers. Print their sum and average formatted to 2 decimal places.',
    hint: '`sum(nums)` and `sum(nums) / len(nums)`',
    solution: `nums = list(map(float, input().split()))
total = sum(nums)
avg = total / len(nums) if nums else 0.0
print(f"Sum: {total:.0f}, Avg: {avg:.2f}")`,
    starterCode: `# Read numbers, calculate sum and average
`,
    sampleStdin: '10 20 30 40',
    expectedOutput: 'Sum: 100, Avg: 25.00',
  },
  {
    id: 'py-easy-09',
    title: 'Vowel and Consonant Counter',
    difficulty: 'Easy',
    topic: 'String Manipulation',
    question: 'Count the number of vowels and consonants in an input word (alphabetic characters only).',
    hint: 'Convert to `.lower()` and check against `"aeiou"`.',
    solution: `s = input().lower()
vowels = sum(1 for c in s if c in 'aeiou')
consonants = sum(1 for c in s if c.isalpha() and c not in 'aeiou')
print(f"Vowels: {vowels}, Consonants: {consonants}")`,
    starterCode: `# Count vowels and consonants in word
`,
    sampleStdin: 'Engineering',
    expectedOutput: 'Vowels: 5, Consonants: 4',
  },
  {
    id: 'py-easy-10',
    title: 'Word Length Dictionary',
    difficulty: 'Easy',
    topic: 'Dictionaries',
    question: 'Read a space-separated sentence. Create a dictionary mapping each word to its character length and print it.',
    hint: '`{w: len(w) for w in words}`',
    solution: `words = input().split()
lengths = {w: len(w) for w in words}
for word, length in lengths.items():
    print(f"{word}: {length}")`,
    starterCode: `# Map each word to its length and print
`,
    sampleStdin: 'data science python',
    expectedOutput: 'data: 4\nscience: 7\npython: 6',
  },

  // MEDIUM (10 questions)
  {
    id: 'py-med-01',
    title: 'List Comprehension with Filtering',
    difficulty: 'Medium',
    topic: 'List Comprehensions',
    question: 'Read a list of numbers. Using a list comprehension, create a new list containing squares of only the positive odd integers, then print space-separated.',
    hint: '`[x**2 for x in nums if x > 0 and x % 2 != 0]`',
    solution: `nums = list(map(int, input().split()))
squares = [x**2 for x in nums if x > 0 and x % 2 != 0]
print(*(squares))`,
    starterCode: `# Using list comprehension, square positive odd numbers
`,
    sampleStdin: '-3 2 5 -1 7 8',
    expectedOutput: '25 49',
  },
  {
    id: 'py-med-02',
    title: 'Frequency Counter using collections.Counter',
    difficulty: 'Medium',
    topic: 'Collections Module',
    question: 'Read a sequence of words. Use `collections.Counter` to find frequencies and print each unique word and its count in sorted alphabetical order.',
    hint: '`from collections import Counter` and `sorted(counter.items())`',
    solution: `from collections import Counter
words = input().split()
counts = Counter(words)
for word in sorted(counts.keys()):
    print(f"{word}: {counts[word]}")`,
    starterCode: `from collections import Counter

# Count word frequencies and print sorted
`,
    sampleStdin: 'apple banana apple cherry banana apple',
    expectedOutput: 'apple: 3\nbanana: 2\ncherry: 1',
  },
  {
    id: 'py-med-03',
    title: 'Two Sum Problem',
    difficulty: 'Medium',
    topic: 'Hash Maps & Algorithms',
    question: 'Given a list of numbers and a target value, find indices (0-based) of the two numbers that add up to target. Print the indices separated by space, or "-1".',
    hint: 'Store `{val: index}` in a hash map as you iterate through the list.',
    solution: `nums = list(map(int, input().split()))
target = int(input())
seen = {}
found = False

for i, num in enumerate(nums):
    diff = target - num
    if diff in seen:
        print(f"{seen[diff]} {i}")
        found = True
        break
    seen[num] = i

if not found:
    print("-1")`,
    starterCode: `# Find indices of two numbers that add up to target
`,
    sampleStdin: '2 7 11 15\n9',
    expectedOutput: '0 1',
  },
  {
    id: 'py-med-04',
    title: 'OOP Bank Account with Exception Handling',
    difficulty: 'Medium',
    topic: 'OOP & Custom Exceptions',
    question: 'Create a `BankAccount` class with `deposit(amount)` and `withdraw(amount)`. If withdrawal exceeds balance, raise `ValueError("Insufficient funds")`. Test with operations from input.',
    hint: 'Use `try...except ValueError as e:` to catch and print the error message.',
    solution: `class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amt):
        self.balance += amt

    def withdraw(self, amt):
        if amt > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amt

acc = BankAccount()
actions = input().split()
try:
    for act in actions:
        cmd, val = act.split(':')
        val = int(val)
        if cmd == 'D':
            acc.deposit(val)
        elif cmd == 'W':
            acc.withdraw(val)
    print(f"Final Balance: {acc.balance}")
except ValueError as e:
    print(f"Error: {e}")`,
    starterCode: `# Define BankAccount class and test transactions
`,
    sampleStdin: 'D:100 W:40 D:50 W:200',
    expectedOutput: 'Error: Insufficient funds',
  },
  {
    id: 'py-med-05',
    title: 'Recursive Fibonacci with Memoization',
    difficulty: 'Medium',
    topic: 'Recursion & Memoization',
    question: 'Calculate the n-th Fibonacci number using recursion and `functools.lru_cache` (where fib(0)=0, fib(1)=1).',
    hint: 'Use `@functools.lru_cache(maxsize=None)` on top of `def fib(n):`.',
    solution: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

n = int(input())
print(fib(n))`,
    starterCode: `from functools import lru_cache

# Define recursive memoized fibonacci
`,
    sampleStdin: '15',
    expectedOutput: '610',
  },
  {
    id: 'py-med-06',
    title: 'Anagram Checker',
    difficulty: 'Medium',
    topic: 'Strings & Hash Table',
    question: 'Read two strings and print "Anagram" if they contain the exact same characters with the same frequencies, otherwise "Not Anagram".',
    hint: 'Compare `sorted(s1.replace(" ", "").lower()) == sorted(s2.replace(" ", "").lower())`.',
    solution: `s1 = input().strip().lower()
s2 = input().strip().lower()
clean_s1 = ''.join(c for c in s1 if c.isalnum())
clean_s2 = ''.join(c for c in s2 if c.isalnum())
print("Anagram" if sorted(clean_s1) == sorted(clean_s2) else "Not Anagram")`,
    starterCode: `# Check if two strings are anagrams
`,
    sampleStdin: 'listen\nsilent',
    expectedOutput: 'Anagram',
  },
  {
    id: 'py-med-07',
    title: 'Group Anagrams',
    difficulty: 'Medium',
    topic: 'Dictionaries & Sorting',
    question: 'Given a space-separated list of words, group words that are anagrams together and print each group sorted on a separate line.',
    hint: 'Use `tuple(sorted(word))` as the key in a `collections.defaultdict(list)`.',
    solution: `from collections import defaultdict

words = input().split()
groups = defaultdict(list)
for w in words:
    key = ''.join(sorted(w))
    groups[key].append(w)

for group in groups.values():
    print(' '.join(sorted(group)))`,
    starterCode: `from collections import defaultdict

# Group anagrams together
`,
    sampleStdin: 'eat tea tan ate nat bat',
    expectedOutput: 'ate eat tea\nnat tan\nbat',
  },
  {
    id: 'py-med-08',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    topic: 'Intervals & Sorting',
    question: 'Given n intervals (start end), merge all overlapping intervals and print the consolidated list.',
    hint: 'Sort intervals by start time and iterate, comparing `next.start <= current.end`.',
    solution: `n = int(input())
intervals = []
for _ in range(n):
    s, e = map(int, input().split())
    intervals.append([s, e])

intervals.sort(key=lambda x: x[0])
merged = [intervals[0]]

for current in intervals[1:]:
    prev = merged[-1]
    if current[0] <= prev[1]:
        prev[1] = max(prev[1], current[1])
    else:
        merged.append(current)

for interval in merged:
    print(f"{interval[0]} {interval[1]}")`,
    starterCode: `# Read and merge intervals
`,
    sampleStdin: '4\n1 3\n2 6\n8 10\n15 18',
    expectedOutput: '1 6\n8 10\n15 18',
  },
  {
    id: 'py-med-09',
    title: 'Matrix Transpose using Zip',
    difficulty: 'Medium',
    topic: '2D Lists & Zip',
    question: 'Read an R x C matrix from input and compute its transpose using Python idiom `zip(*matrix)`.',
    hint: '`[list(row) for row in zip(*matrix)]`',
    solution: `r, c = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(r)]
transposed = list(zip(*matrix))
for row in transposed:
    print(*(row))`,
    starterCode: `# Transpose matrix using zip
`,
    sampleStdin: '2 3\n1 2 3\n4 5 6',
    expectedOutput: '1 4\n2 5\n3 6',
  },
  {
    id: 'py-med-10',
    title: 'Binary Search Implementation',
    difficulty: 'Medium',
    topic: 'Searching Algorithms',
    question: 'Implement iterative binary search on a sorted list. Print the index of the target or -1 if not found.',
    hint: 'Maintain `low` and `high` pointers, calculating `mid = (low + high) // 2`.',
    solution: `nums = list(map(int, input().split()))
target = int(input())

low, high = 0, len(nums) - 1
ans = -1
while low <= high:
    mid = (low + high) // 2
    if nums[mid] == target:
        ans = mid
        break
    elif nums[mid] < target:
        low = mid + 1
    else:
        high = mid - 1

print(ans)`,
    starterCode: `# Binary search on sorted list
`,
    sampleStdin: '10 20 30 40 50 60\n50',
    expectedOutput: '4',
  },

  // HARD (6 questions)
  {
    id: 'py-hard-01',
    title: 'Generator for Infinite Prime Numbers',
    difficulty: 'Hard',
    topic: 'Generators & Yield',
    question: 'Write a generator function `prime_gen()` that yields prime numbers on demand. Read an integer k and print the first k primes space-separated.',
    hint: 'Use `yield` keyword inside an infinite while loop and test primality efficiently.',
    solution: `def is_prime(num):
    if num < 2: return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0: return False
    return True

def prime_gen():
    num = 2
    while True:
        if is_prime(num):
            yield num
        num += 1

k = int(input())
gen = prime_gen()
primes = [next(gen) for _ in range(k)]
print(*(primes))`,
    starterCode: `# Implement prime generator and print first k primes
`,
    sampleStdin: '7',
    expectedOutput: '2 3 5 7 11 13 17',
  },
  {
    id: 'py-hard-02',
    title: 'Custom Execution Timing Decorator',
    difficulty: 'Hard',
    topic: 'Decorators',
    question: 'Write a custom decorator `@log_call` that prints "Calling <func_name>" before running and "Done <func_name>" after returning the result.',
    hint: 'Use `functools.wraps` and define an inner wrapper `*args, **kwargs`.',
    solution: `from functools import wraps

def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        res = func(*args, **kwargs)
        print(f"Done {func.__name__}")
        return res
    return wrapper

@log_call
def compute(n):
    return sum(range(n + 1))

n = int(input())
print(f"Result: {compute(n)}")`,
    starterCode: `from functools import wraps

# Define log_call decorator
`,
    sampleStdin: '5',
    expectedOutput: 'Calling compute\nDone compute\nResult: 15',
  },
  {
    id: 'py-hard-03',
    title: 'Min Stack with O(1) Minimum Retrieval',
    difficulty: 'Hard',
    topic: 'DSA & Stack Design',
    question: 'Implement a `MinStack` class supporting `push(val)`, `pop()`, `top()`, and `get_min()` all in O(1) time complexity. Test with simulated commands from stdin.',
    hint: 'Maintain a secondary stack that tracks the running minimum at each height.',
    solution: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self):
        if self.stack:
            val = self.stack.pop()
            if val == self.min_stack[-1]:
                self.min_stack.pop()

    def get_min(self):
        return self.min_stack[-1] if self.min_stack else None

s = MinStack()
commands = input().split()
for cmd in commands:
    if cmd.startswith("push:"):
        val = int(cmd.split(":")[1])
        s.push(val)
    elif cmd == "pop":
        s.pop()
    elif cmd == "min":
        print(s.get_min())`,
    starterCode: `# Implement MinStack with O(1) get_min
`,
    sampleStdin: 'push:5 push:2 push:8 min pop min',
    expectedOutput: '2\n2',
  },
  {
    id: 'py-hard-04',
    title: 'Backtracking: Generate All Subsets (Power Set)',
    difficulty: 'Hard',
    topic: 'Backtracking & Recursion',
    question: 'Given an array of distinct integers, generate all possible subsets (the power set). Print each subset on a line, sorted by length then elements.',
    hint: 'Use backtracking with `index` or recursion by deciding whether to include `nums[i]`.',
    solution: `nums = sorted(list(map(int, input().split())))
subsets = []

def backtrack(start, current):
    subsets.append(list(current))
    for i in range(start, len(nums)):
        current.append(nums[i])
        backtrack(i + 1, current)
        current.pop()

backtrack(0, [])
subsets.sort(key=lambda s: (len(s), s))
for s in subsets:
    print(s)`,
    starterCode: `# Generate and print power set
`,
    sampleStdin: '1 2 3',
    expectedOutput: '[]\n[1]\n[2]\n[3]\n[1, 2]\n[1, 3]\n[2, 3]\n[1, 2, 3]',
  },
  {
    id: 'py-hard-05',
    title: 'Dijkstra Shortest Path Algorithm',
    difficulty: 'Hard',
    topic: 'Graph Algorithms & Priority Queue',
    question: 'Given a weighted directed graph with V vertices (0 to V-1) and E edges, compute the shortest distance from node 0 to all other nodes using `heapq`.',
    hint: 'Use `heapq.heappush(pq, (dist, u))` and maintain `dist = [float("inf")] * V`.',
    solution: `import heapq

v, e = map(int, input().split())
adj = [[] for _ in range(v)]
for _ in range(e):
    u, to, w = map(int, input().split())
    adj[u].append((to, w))

dist = [float('inf')] * v
dist[0] = 0
pq = [(0, 0)]  # (dist, u)

while pq:
    d, u = heapq.heappop(pq)
    if d > dist[u]:
        continue
    for to, weight in adj[u]:
        if dist[u] + weight < dist[to]:
            dist[to] = dist[u] + weight
            heapq.heappush(pq, (dist[to], to))

for i in range(v):
    print(f"Node {i}: {dist[i]}")`,
    starterCode: `import heapq

# Implement Dijkstra algorithm
`,
    sampleStdin: '4 4\n0 1 4\n0 2 1\n2 1 2\n1 3 1',
    expectedOutput: 'Node 0: 0\nNode 1: 3\nNode 2: 1\nNode 3: 4',
  },
  {
    id: 'py-hard-06',
    title: 'Longest Increasing Subsequence (O(N log N))',
    difficulty: 'Hard',
    topic: 'Dynamic Programming & Binary Search',
    question: 'Find the length of the longest strictly increasing subsequence in an array using the patience sorting algorithm with `bisect_left`.',
    hint: 'Maintain an array `tails` and use `bisect.bisect_left(tails, x)`.',
    solution: `from bisect import bisect_left

nums = list(map(int, input().split()))
tails = []

for x in nums:
    idx = bisect_left(tails, x)
    if idx == len(tails):
        tails.append(x)
    else:
        tails[idx] = x

print(len(tails))`,
    starterCode: `from bisect import bisect_left

# Compute LIS length in O(N log N)
`,
    sampleStdin: '10 9 2 5 3 7 101 18',
    expectedOutput: '4',
  },
];
