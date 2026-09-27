export interface PracticeQuestion {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  question: string;
  hint: string;
  solution: string;
  starterCode: string;
  sampleStdin: string;
  expectedOutput: string;
}

export const javaQuestions: PracticeQuestion[] = [
  // EASY (10 questions)
  {
    id: 'java-easy-01',
    title: 'Hello World and Console Output',
    difficulty: 'Easy',
    topic: 'Basic I/O',
    question: 'Write a Java program to print "Hello, DevForge B.Tech Java!" followed by a new line.',
    hint: 'Use `System.out.println("...");` inside `public static void main(String[] args)` in class Main.',
    solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, DevForge B.Tech Java!");
    }
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
    sampleStdin: '',
    expectedOutput: 'Hello, DevForge B.Tech Java!',
  },
  {
    id: 'java-easy-02',
    title: 'Sum of Two Integers from Scanner',
    difficulty: 'Easy',
    topic: 'Scanner Input',
    question: 'Read two integers a and b from standard input using Scanner and print their sum.',
    hint: 'Import `java.util.Scanner` and use `sc.nextInt()`.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println(a + b);
        }
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read two integers and print sum
    }
}`,
    sampleStdin: '45 55',
    expectedOutput: '100',
  },
  {
    id: 'java-easy-03',
    title: 'Check Even or Odd',
    difficulty: 'Easy',
    topic: 'Conditional Logic',
    question: 'Read an integer n and print "Even" if divisible by 2, otherwise print "Odd".',
    hint: 'Check if `n % 2 == 0`.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println((n % 2 == 0) ? "Even" : "Odd");
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read n and print Even or Odd
    }
}`,
    sampleStdin: '17',
    expectedOutput: 'Odd',
  },
  {
    id: 'java-easy-04',
    title: 'Multiplication Table',
    difficulty: 'Easy',
    topic: 'Loops',
    question: 'Read an integer n and print its multiplication table from 1 to 10 in the format: n x i = result.',
    hint: 'Use a for-loop from `i = 1` to `10`.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read n and print multiplication table up to 10
    }
}`,
    sampleStdin: '6',
    expectedOutput: '6 x 1 = 6\n6 x 2 = 12\n6 x 3 = 18\n6 x 4 = 24\n6 x 5 = 30\n6 x 6 = 36\n6 x 7 = 42\n6 x 8 = 48\n6 x 9 = 54\n6 x 10 = 60',
  },
  {
    id: 'java-easy-05',
    title: 'Largest of Three Numbers',
    difficulty: 'Easy',
    topic: 'Conditionals',
    question: 'Read three numbers a, b, and c, and print the largest value using Math.max.',
    hint: '`Math.max(a, Math.max(b, c))`',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        System.out.println(Math.max(a, Math.max(b, c)));
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Print the largest of 3 numbers
    }
}`,
    sampleStdin: '14 89 53',
    expectedOutput: '89',
  },
  {
    id: 'java-easy-06',
    title: 'Factorial of a Number',
    difficulty: 'Easy',
    topic: 'Loops / BigInteger',
    question: 'Read a non-negative integer n (0 <= n <= 20) and calculate its factorial using a long.',
    hint: 'Remember that 0! is 1. Store results in a `long` to avoid integer overflow.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long fact = 1;
        for (int i = 2; i <= n; i++) {
            fact *= i;
        }
        System.out.println(fact);
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Calculate factorial
    }
}`,
    sampleStdin: '6',
    expectedOutput: '720',
  },
  {
    id: 'java-easy-07',
    title: 'Reverse a String',
    difficulty: 'Easy',
    topic: 'Strings & StringBuilder',
    question: 'Read a string from standard input and print its reverse using StringBuilder.',
    hint: '`new StringBuilder(str).reverse().toString()`',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        System.out.println(new StringBuilder(s).reverse().toString());
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Reverse string
    }
}`,
    sampleStdin: 'Engineering',
    expectedOutput: 'gnireenignE',
  },
  {
    id: 'java-easy-08',
    title: 'Array Sum and Average',
    difficulty: 'Easy',
    topic: 'Arrays',
    question: 'Read an integer n, followed by n numbers. Print their sum and average formatted to 2 decimal places.',
    hint: 'Use `String.format("%.2f", avg)` or `System.out.printf`.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        double sum = 0;
        for (int i = 0; i < n; i++) {
            sum += sc.nextDouble();
        }
        double avg = (n == 0) ? 0 : sum / n;
        System.out.printf("Sum: %.0f, Avg: %.2f\\n", sum, avg);
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Calculate sum and average
    }
}`,
    sampleStdin: '4\n10 20 30 40',
    expectedOutput: 'Sum: 100, Avg: 25.00',
  },
  {
    id: 'java-easy-09',
    title: 'Simple Student Class',
    difficulty: 'Easy',
    topic: 'Classes & Objects',
    question: 'Create a Student class with name and rollNumber fields. Instantiate it with input values and print "Student: <name> (Roll: <rollNumber>)".',
    hint: 'Define a constructor `Student(String name, int rollNumber)` and override `toString()`.',
    solution: `import java.util.Scanner;

class Student {
    String name;
    int rollNumber;

    Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    public String toString() {
        return "Student: " + name + " (Roll: " + rollNumber + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        int roll = sc.nextInt();
        Student s = new Student(name, roll);
        System.out.println(s);
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

// Define Student class

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Create and print student
    }
}`,
    sampleStdin: 'Aarav 101',
    expectedOutput: 'Student: Aarav (Roll: 101)',
  },
  {
    id: 'java-easy-10',
    title: 'Count Vowels and Consonants',
    difficulty: 'Easy',
    topic: 'Strings & Character Handling',
    question: 'Read a word and count the number of vowels and consonants (letters only).',
    hint: 'Convert to lowercase, check `ch >= \'a\' && ch <= \'z\'`, and check if it is one of \'a\', \'e\', \'i\', \'o\', \'u\'.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next().toLowerCase();
        int vowels = 0, consonants = 0;
        for (char c : s.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                if ("aeiou".indexOf(c) != -1) vowels++;
                else consonants++;
            }
        }
        System.out.println("Vowels: " + vowels + ", Consonants: " + consonants);
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Count vowels and consonants
    }
}`,
    sampleStdin: 'Education',
    expectedOutput: 'Vowels: 5, Consonants: 4',
  },

  // MEDIUM (10 questions)
  {
    id: 'java-med-01',
    title: 'OOP Inheritance and Polymorphism',
    difficulty: 'Medium',
    topic: 'Inheritance & Abstract Classes',
    question: 'Define an abstract class Shape with abstract method `double area()`. Implement Circle and Rectangle subclasses. Read shape type and dimensions, then print the calculated area.',
    hint: 'Use `public class Circle extends Shape` and override `area()`.',
    solution: `import java.util.Scanner;

abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String type = sc.next();
        Shape shape;
        if (type.equalsIgnoreCase("circle")) {
            shape = new Circle(sc.nextDouble());
        } else {
            shape = new Rectangle(sc.nextDouble(), sc.nextDouble());
        }
        System.out.printf("%.2f\\n", shape.area());
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

// Define abstract class Shape and subclasses

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: 'circle 5',
    expectedOutput: '78.54',
  },
  {
    id: 'java-med-02',
    title: 'Custom Exception Handling',
    difficulty: 'Medium',
    topic: 'Exceptions',
    question: 'Write a program with a custom checked exception `InvalidAgeException`. If input age < 18, throw the exception and print its message. Otherwise print "Access Granted".',
    hint: 'Create `class InvalidAgeException extends Exception` with a constructor taking a message.',
    solution: `import java.util.Scanner;

class InvalidAgeException extends Exception {
    public InvalidAgeException(String msg) {
        super(msg);
    }
}

public class Main {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age " + age + " is not eligible (must be >= 18)");
        }
        System.out.println("Access Granted");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        try {
            checkAge(age);
        } catch (InvalidAgeException e) {
            System.out.println("Caught: " + e.getMessage());
        }
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

// Define InvalidAgeException

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '15',
    expectedOutput: 'Caught: Age 15 is not eligible (must be >= 18)',
  },
  {
    id: 'java-med-03',
    title: 'Word Frequency using HashMap',
    difficulty: 'Medium',
    topic: 'Collections (HashMap)',
    question: 'Read an integer n followed by n words. Count the occurrence of each word and print in alphabetical order: "<word>: <count>".',
    hint: 'Use `TreeMap<String, Integer>` to automatically maintain sorted keys.',
    solution: `import java.util.Scanner;
import java.util.TreeMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        TreeMap<String, Integer> map = new TreeMap<>();
        for (int i = 0; i < n; i++) {
            String word = sc.next();
            map.put(word, map.getOrDefault(word, 0) + 1);
        }
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '6\napple banana apple orange banana apple',
    expectedOutput: 'apple: 3\nbanana: 2\norange: 1',
  },
  {
    id: 'java-med-04',
    title: 'Remove Duplicates from List using HashSet',
    difficulty: 'Medium',
    topic: 'Collections (HashSet)',
    question: 'Read n integers with potential duplicates. Preserve their first appearance order while filtering out duplicates using LinkedHashSet.',
    hint: '`LinkedHashSet<Integer>` preserves insertion order and eliminates duplicates.',
    solution: `import java.util.Scanner;
import java.util.LinkedHashSet;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        LinkedHashSet<Integer> set = new LinkedHashSet<>();
        for (int i = 0; i < n; i++) {
            set.add(sc.nextInt());
        }
        StringBuilder sb = new StringBuilder();
        for (int x : set) {
            sb.append(x).append(" ");
        }
        System.out.println(sb.toString().trim());
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '8\n4 2 4 5 2 3 1 5',
    expectedOutput: '4 2 5 3 1',
  },
  {
    id: 'java-med-05',
    title: 'Custom Comparator for Sorting Students',
    difficulty: 'Medium',
    topic: 'Collections.sort & Comparator',
    question: 'Read n students (name and marks). Sort them in descending order of marks. If marks are equal, sort alphabetically by name.',
    hint: 'Implement `Comparable<Student>` or pass a lambda `(a, b) -> ...` to `Collections.sort`.',
    solution: `import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

class Student {
    String name;
    int marks;

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Student> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            list.add(new Student(sc.next(), sc.nextInt()));
        }
        Collections.sort(list, (a, b) -> {
            if (b.marks != a.marks) return Integer.compare(b.marks, a.marks);
            return a.name.compareTo(b.name);
        });
        for (Student s : list) {
            System.out.println(s.name + " " + s.marks);
        }
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '3\nBob 85\nAlice 92\nCharlie 85',
    expectedOutput: 'Alice 92\nBob 85\nCharlie 85',
  },
  {
    id: 'java-med-06',
    title: 'Interface Implementation (Payment Gateway)',
    difficulty: 'Medium',
    topic: 'Interfaces & Abstraction',
    question: 'Create an interface `PaymentMethod` with method `void pay(double amount)`. Implement `CreditCard` and `UPI`. Read method and amount, then print the transaction receipt.',
    hint: 'Use interface contracts and dynamic method dispatch.',
    solution: `import java.util.Scanner;

interface PaymentMethod {
    void pay(double amount);
}

class CreditCard implements PaymentMethod {
    public void pay(double amount) {
        System.out.printf("Paid $%.2f via Credit Card (2%% fee included: $%.2f)\\n", amount * 1.02, amount * 0.02);
    }
}

class UPI implements PaymentMethod {
    public void pay(double amount) {
        System.out.printf("Paid $%.2f via UPI Instant Transfer (Zero fee)\\n", amount);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String mode = sc.next();
        double amount = sc.nextDouble();
        PaymentMethod pm = mode.equalsIgnoreCase("upi") ? new UPI() : new CreditCard();
        pm.pay(amount);
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

// Define PaymentMethod interface and classes

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: 'upi 500',
    expectedOutput: 'Paid $500.00 via UPI Instant Transfer (Zero fee)',
  },
  {
    id: 'java-med-07',
    title: 'Check Palindrome Ignoring Non-Alphanumeric',
    difficulty: 'Medium',
    topic: 'Strings & Two Pointers',
    question: 'Read a phrase and determine whether it is a palindrome considering only alphanumeric characters and ignoring cases.',
    hint: 'Use two pointers from left and right skipping non-letters/digits.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int left = 0, right = s.length() - 1;
        boolean isPal = true;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                isPal = false;
                break;
            }
            left++;
            right--;
        }
        System.out.println(isPal ? "Palindrome" : "Not Palindrome");
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: 'A man, a plan, a canal: Panama',
    expectedOutput: 'Palindrome',
  },
  {
    id: 'java-med-08',
    title: 'Matrix Multiplication',
    difficulty: 'Medium',
    topic: '2D Arrays',
    question: 'Multiply two 2x2 matrices given by standard input (8 numbers total) and print the resulting 2x2 product.',
    hint: '`C[i][j] = sum(A[i][k] * B[k][j])`.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] A = new int[2][2];
        int[][] B = new int[2][2];
        int[][] C = new int[2][2];
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 2; j++)
                A[i][j] = sc.nextInt();
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 2; j++)
                B[i][j] = sc.nextInt();

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 2; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
                System.out.print(C[i][j] + (j == 1 ? "" : " "));
            }
            System.out.println();
        }
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '1 2\n3 4\n2 0\n1 2',
    expectedOutput: '4 4\n10 8',
  },
  {
    id: 'java-med-09',
    title: 'Binary Search in an Array',
    difficulty: 'Medium',
    topic: 'Searching Algorithms',
    question: 'Given a sorted array of n integers and a target key, print the 0-based index if found, else print -1.',
    hint: 'Use binary search with `low <= high` and `mid = low + (high - low) / 2`.',
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int target = sc.nextInt();

        int low = 0, high = n - 1, ans = -1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) {
                ans = mid;
                break;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        System.out.println(ans);
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '6\n10 20 30 40 50 60\n40',
    expectedOutput: '3',
  },
  {
    id: 'java-med-10',
    title: 'Balanced Parentheses using Stack',
    difficulty: 'Medium',
    topic: 'Collections (Stack / Deque)',
    question: 'Given a string containing (), {}, and [], determine if the bracket sequence is valid.',
    hint: 'Use `java.util.ArrayDeque<Character>` as a stack.',
    solution: `import java.util.Scanner;
import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        Deque<Character> stack = new ArrayDeque<>();
        boolean ok = true;
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) { ok = false; break; }
                char top = stack.pop();
                if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) {
                    ok = false;
                    break;
                }
            }
        }
        if (!stack.isEmpty()) ok = false;
        System.out.println(ok ? "Balanced" : "Not Balanced");
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '{[()]}',
    expectedOutput: 'Balanced',
  },

  // HARD (6 questions)
  {
    id: 'java-hard-01',
    title: 'Custom Singly Linked List Implementation',
    difficulty: 'Hard',
    topic: 'Data Structures (Pointers/References)',
    question: 'Implement a Singly Linked List from scratch with `insertAtEnd(int val)` and `reverse()`. Read n elements, insert them, reverse the list, and print the reversed list separated by spaces.',
    hint: 'Maintain `head` and standard three-pointer reversal (`prev`, `curr`, `next`).',
    solution: `import java.util.Scanner;

class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

public class Main {
    Node head;

    void insert(int val) {
        Node newNode = new Node(val);
        if (head == null) { head = newNode; return; }
        Node cur = head;
        while (cur.next != null) cur = cur.next;
        cur.next = newNode;
    }

    void reverse() {
        Node prev = null, cur = head, next = null;
        while (cur != null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        head = prev;
    }

    void print() {
        Node cur = head;
        while (cur != null) {
            System.out.print(cur.data + (cur.next != null ? " " : ""));
            cur = cur.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Main list = new Main();
        for (int i = 0; i < n; i++) list.insert(sc.nextInt());
        list.reverse();
        list.print();
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

// Implement Singly Linked List

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '5\n1 2 3 4 5',
    expectedOutput: '5 4 3 2 1',
  },
  {
    id: 'java-hard-02',
    title: 'Generic Pair and Min-Max Finder',
    difficulty: 'Hard',
    topic: 'Java Generics',
    question: 'Implement a generic class `Pair<T, U>`. Write a method that reads n integers and returns a `Pair<Integer, Integer>` containing the minimum and maximum values in a single pass.',
    hint: '`class Pair<T, U> { T first; U second; ... }`',
    solution: `import java.util.Scanner;

class Pair<T, U> {
    T first;
    U second;
    Pair(T first, U second) {
        this.first = first;
        this.second = second;
    }
}

public class Main {
    static Pair<Integer, Integer> findMinMax(int[] arr) {
        int min = arr[0], max = arr[0];
        for (int x : arr) {
            if (x < min) min = x;
            if (x > max) max = x;
        }
        return new Pair<>(min, max);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        Pair<Integer, Integer> res = findMinMax(arr);
        System.out.println("Min: " + res.first + ", Max: " + res.second);
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

// Implement generic Pair class

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '6\n34 12 89 2 56 71',
    expectedOutput: 'Min: 2, Max: 89',
  },
  {
    id: 'java-hard-03',
    title: 'Multithreading with Producer-Consumer Counter',
    difficulty: 'Hard',
    topic: 'Concurrency & Threads',
    question: 'Create two threads: Thread A increments a synchronized counter `n` times, Thread B increments it `n` times. Use `join()` to ensure both finish, then print the final counter value.',
    hint: 'Use `synchronized` or `java.util.concurrent.atomic.AtomicInteger`.',
    solution: `import java.util.Scanner;
import java.util.concurrent.atomic.AtomicInteger;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Scanner sc = new Scanner(System.in);
        final int n = sc.nextInt();
        AtomicInteger counter = new AtomicInteger(0);

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < n; i++) counter.incrementAndGet();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < n; i++) counter.incrementAndGet();
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Final Count: " + counter.get());
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '1000',
    expectedOutput: 'Final Count: 2000',
  },
  {
    id: 'java-hard-04',
    title: 'Binary Search Tree Traversal (Inorder & Preorder)',
    difficulty: 'Hard',
    topic: 'Trees (DSA)',
    question: 'Insert n integers into a Binary Search Tree (BST). Print its Inorder traversal (which produces sorted elements) on line 1, and its Preorder traversal on line 2.',
    hint: 'BST property: elements < root go to left subtree, elements >= root go to right subtree.',
    solution: `import java.util.Scanner;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public class Main {
    static TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        if (val < root.val) root.left = insert(root.left, val);
        else root.right = insert(root.right, val);
        return root;
    }

    static void inorder(TreeNode root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }

    static void preorder(TreeNode root) {
        if (root == null) return;
        System.out.print(root.val + " ");
        preorder(root.left);
        preorder(root.right);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        TreeNode root = null;
        for (int i = 0; i < n; i++) root = insert(root, sc.nextInt());
        System.out.print("Inorder: ");
        inorder(root);
        System.out.println();
        System.out.print("Preorder: ");
        preorder(root);
        System.out.println();
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

// Implement BST insert and traversals

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '5\n50 30 20 40 70',
    expectedOutput: 'Inorder: 20 30 40 50 70 \nPreorder: 50 30 20 40 70 ',
  },
  {
    id: 'java-hard-05',
    title: 'Top K Frequent Elements using PriorityQueue',
    difficulty: 'Hard',
    topic: 'Heap / PriorityQueue',
    question: 'Given an array of n numbers and an integer k, find the k most frequent numbers. Print them in descending order of frequency.',
    hint: 'Count frequencies into a Map, then insert into a Max-Heap / PriorityQueue sorted by frequency.',
    solution: `import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        HashMap<Integer, Integer> freq = new HashMap<>();
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            freq.put(arr[i], freq.getOrDefault(arr[i], 0) + 1);
        }
        int k = sc.nextInt();

        PriorityQueue<Map.Entry<Integer, Integer>> pq =
            new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
        pq.addAll(freq.entrySet());

        for (int i = 0; i < k && !pq.isEmpty(); i++) {
            Map.Entry<Integer, Integer> entry = pq.poll();
            System.out.print(entry.getKey() + (i + 1 == k ? "" : " "));
        }
        System.out.println();
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '7\n1 1 1 2 2 3 4\n2',
    expectedOutput: '1 2',
  },
  {
    id: 'java-hard-06',
    title: 'Graph Cycle Detection (Undirected Graph)',
    difficulty: 'Hard',
    topic: 'Graph Algorithms (DFS)',
    question: 'Given an undirected graph with V vertices (0 to V-1) and E edges, determine if it contains a cycle using Depth First Search (DFS). Print "Cycle Detected" or "No Cycle".',
    hint: 'Use a visited array and track parent vertex in DFS to avoid trivial backtracking.',
    solution: `import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

public class Main {
    static boolean dfs(int u, int parent, List<List<Integer>> adj, boolean[] visited) {
        visited[u] = true;
        for (int v : adj.get(u)) {
            if (!visited[v]) {
                if (dfs(v, u, adj, visited)) return true;
            } else if (v != parent) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int V = sc.nextInt();
        int E = sc.nextInt();
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());
        for (int i = 0; i < E; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj.get(u).add(v);
            adj.get(v).add(u);
        }

        boolean[] visited = new boolean[V];
        boolean hasCycle = false;
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (dfs(i, -1, adj, visited)) {
                    hasCycle = true;
                    break;
                }
            }
        }
        System.out.println(hasCycle ? "Cycle Detected" : "No Cycle");
        sc.close();
    }
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
    sampleStdin: '4 4\n0 1\n1 2\n2 3\n3 0',
    expectedOutput: 'Cycle Detected',
  },
];
