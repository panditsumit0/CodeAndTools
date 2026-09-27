import { CourseData } from './types';

export const JAVA_COURSE: CourseData = {
  id: 'java',
  slug: 'java',
  name: 'Java',
  tagline: 'Write Once, Run Anywhere (WORA) & Enterprise Architecture',
  shortDescription:
    'Learn object-oriented programming, collections, exceptions and application development.',
  difficulty: 'Medium',
  bestFor:
    'B.Tech Core Java Exams, Enterprise Backend (Spring Boot), Android Native Apps, and Campus Placement Drives',
  icon: 'Coffee',
  color: 'amber',
  intro: {
    whatIs:
      'Java is a high-level, class-based, object-oriented programming language designed by James Gosling at Sun Microsystems in 1995. Its core design philosophy is "Write Once, Run Anywhere" (WORA): Java source code is compiled into bytecode (.class) that executes on any Java Virtual Machine (JVM).',
    whyLearn:
      'Java is central to university B.Tech curriculum and IT recruitment drives (TCS, Infosys, Wipro, Amazon, Google, JPMorgan). It enforces disciplined OOP, robust exception handling, and features the powerful Java Collections Framework and Spring Boot ecosystem.',
    whereUsed: [
      'Enterprise Backend Services & Microservices (Spring Boot, Quarkus, Micronaut)',
      'Big Data Processing Frameworks (Apache Hadoop, Apache Spark, Apache Kafka)',
      'Android Mobile Applications (Native Android SDK and Jetpack)',
      'Banking, Financial, and Trading Transaction Platforms',
    ],
    advantages: [
      'Platform independent via Java Virtual Machine (JVM) bytecode',
      'Automatic garbage collection eliminates memory leaks and dangling pointers',
      'Rich standard library and comprehensive Collections Framework',
      'Strongly typed with compile-time safety and structured exception handling',
    ],
    limitations: [
      'Higher memory footprint compared to native binaries compiled in C/C++',
      'Slight JVM startup overhead and JIT compilation warmup period',
      'More verbose syntax than modern scripting languages like Python',
    ],
  },
  visualCallout: {
    title: 'JDK vs JRE vs JVM Explained',
    description: 'The three layers of the Java Runtime Architecture:',
    items: [
      {
        label: 'JDK (Java Development Kit)',
        detail: 'The complete SDK needed to DEVELOP Java programs. Contains JRE + javac compiler + jar packager + jdb debugger.',
        badge: 'Developer SDK',
      },
      {
        label: 'JRE (Java Runtime Environment)',
        detail: 'The runtime environment needed to RUN compiled Java programs. Contains JVM + core class libraries (rt.jar).',
        badge: 'Runtime',
      },
      {
        label: 'JVM (Java Virtual Machine)',
        detail: 'The abstract virtual machine engine that loads, verifies, and executes Java Bytecode via JIT compiler and Garbage Collector.',
        badge: 'Engine',
      },
    ],
  },
  topics: [
    {
      id: 'basic-syntax',
      title: '1. Basic Syntax & Main Method Anatomy',
      summary:
        'In Java, every piece of executable code resides inside a class. The main method is public (callable from anywhere), static (invoked without instantiating an object), void (returns nothing), and accepts String[] args.',
      syntax: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      codeExample: `public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to B.Tech Java Programming!");
        int semester = 3;
        System.out.println("Current Semester: " + semester);
    }
}`,
      expectedOutput: `Welcome to B.Tech Java Programming!
Current Semester: 3`,
      commonMistake:
        'Declaring a public class whose name does not match the file name (e.g., public class App saved in Main.java), or forgetting static on the main method.',
      practice: {
        question: 'Print your college name and major on separate lines using System.out.println().',
        difficulty: 'Easy',
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Print college name and major
    }
}`,
        hint: 'Use two consecutive System.out.println() calls.',
        solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("College: Institute of Engineering & Technology");
        System.out.println("Major: Computer Science & Engineering");
    }
}`,
      },
    },
    {
      id: 'variables-datatypes',
      title: '2. Primitive Data Types & Wrapper Classes',
      summary:
        'Java features 8 primitive types: byte, short, int, long, float, double, boolean, and char. Each has a corresponding object wrapper class (e.g. Integer, Double, Boolean) for use in Collections.',
      syntax: `int age = 21;
double gpa = 8.75;
boolean isPlaced = true;
Integer wrappedAge = Integer.valueOf(age); // Autoboxing`,
      codeExample: `public class Main {
    public static void main(String[] args) {
        byte b = 127;
        int i = 50000;
        double d = 19.99;
        boolean flag = true;
        char grade = 'A';

        System.out.println("byte: " + b + " | int: " + i + " | double: " + d);
        System.out.println("flag: " + flag + " | grade: " + grade);
    }
}`,
      expectedOutput: `byte: 127 | int: 50000 | double: 19.99
flag: true | grade: A`,
      commonMistake:
        'Assigning a long literal without the "L" suffix (e.g. long n = 9999999999;) which causes an "integer number too large" compiler error.',
      practice: {
        question: 'Demonstrate autoboxing by converting a primitive int to an Integer wrapper and back (unboxing).',
        difficulty: 'Easy',
        starterCode: `public class Main {
    public static void main(String[] args) {
        int primitiveVal = 42;
        // Autobox to Integer and unbox back to int
    }
}`,
        hint: 'Integer wrapped = primitiveVal; int unboxed = wrapped;',
        solution: `public class Main {
    public static void main(String[] args) {
        int primitiveVal = 42;
        Integer wrapped = primitiveVal; // Autoboxing
        int unboxed = wrapped;          // Unboxing
        System.out.println("Wrapped: " + wrapped + ", Unboxed: " + unboxed);
    }
}`,
      },
    },
    {
      id: 'strings-stringpool',
      title: '3. Strings & The String Constant Pool',
      summary:
        'String objects in Java are immutable and cached in the String Constant Pool in heap memory. Modifying a string creates a new object; for mutable string manipulation, use StringBuilder.',
      syntax: `String s1 = "DevForge"; // Stored in String Pool
String s2 = new String("DevForge"); // Forces new heap object
boolean addressMatch = (s1 == s2); // false
boolean contentMatch = s1.equals(s2); // true`,
      codeExample: `public class Main {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");

        System.out.println("s1 == s2: " + (s1 == s2)); // true (same pool reference)
        System.out.println("s1 == s3: " + (s1 == s3)); // false (different objects)
        System.out.println("s1.equals(s3): " + s1.equals(s3)); // true (same characters)

        StringBuilder sb = new StringBuilder("Java");
        sb.append(" Programming");
        System.out.println("StringBuilder result: " + sb.toString());
    }
}`,
      expectedOutput: `s1 == s2: true
s1 == s3: false
s1.equals(s3): true
StringBuilder result: Java Programming`,
      commonMistake:
        'Using == to compare string values instead of .equals(). In Java, == compares memory object addresses, not string characters.',
      practice: {
        question: 'Reverse a string using StringBuilder.',
        difficulty: 'Easy',
        starterCode: `public class Main {
    public static void main(String[] args) {
        String original = "Engineering";
        // Reverse using StringBuilder
    }
}`,
        hint: 'new StringBuilder(original).reverse().toString()',
        solution: `public class Main {
    public static void main(String[] args) {
        String original = "Engineering";
        String reversed = new StringBuilder(original).reverse().toString();
        System.out.println("Reversed: " + reversed);
    }
}`,
      },
    },
    {
      id: 'classes-objects',
      title: '4. Classes, Objects & Constructors',
      summary:
        'Classes encapsulate fields and methods. Constructors initialize objects and can be overloaded with different parameter signatures. The "this" keyword refers to the current object instance.',
      syntax: `public class Student {
    private int id;
    private String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
}`,
      codeExample: `public class Main {
    static class Student {
        private int rollNo;
        private String name;

        public Student(int rollNo, String name) {
            this.rollNo = rollNo;
            this.name = name;
        }

        public void display() {
            System.out.println("Student: " + name + " (Roll: " + rollNo + ")");
        }
    }

    public static void main(String[] args) {
        Student s = new Student(101, "Priya Sharma");
        s.display();
    }
}`,
      expectedOutput: `Student: Priya Sharma (Roll: 101)`,
      commonMistake:
        'Defining a parameterized constructor without an explicit default no-arg constructor when no-arg instantiation is still required.',
      practice: {
        question: 'Create a BankAccount class with balance, deposit(), and withdraw() methods.',
        difficulty: 'Medium',
        starterCode: `public class Main {
    static class BankAccount {
        // fields & methods
    }
    public static void main(String[] args) {
        // test account
    }
}`,
        hint: 'Keep balance private and provide public deposit(double amount) and withdraw(double amount).',
        solution: `public class Main {
    static class BankAccount {
        private double balance;
        public BankAccount(double initial) { this.balance = initial; }
        public void deposit(double amt) { balance += amt; }
        public void withdraw(double amt) { if (balance >= amt) balance -= amt; }
        public double getBalance() { return balance; }
    }
    public static void main(String[] args) {
        BankAccount acc = new BankAccount(1000);
        acc.deposit(500);
        acc.withdraw(200);
        System.out.println("Final Balance: " + acc.getBalance());
    }
}`,
      },
    },
    {
      id: 'inheritance-polymorphism',
      title: '5. Inheritance, Overriding & Super',
      summary:
        'Java supports single class inheritance using the extends keyword. Child classes override parent methods with @Override and access parent constructors via super().',
      syntax: `class Animal {
    void speak() { System.out.println("Sound"); }
}
class Dog extends Animal {
    @Override
    void speak() { System.out.println("Bark"); }
}`,
      codeExample: `public class Main {
    static class Employee {
        String name;
        Employee(String name) { this.name = name; }
        void work() { System.out.println(name + " is working."); }
    }

    static class Developer extends Employee {
        String language;
        Developer(String name, String language) {
            super(name);
            this.language = language;
        }
        @Override
        void work() {
            System.out.println(name + " is coding in " + language + ".");
        }
    }

    public static void main(String[] args) {
        Employee emp = new Developer("Vikram", "Java");
        emp.work(); // Dynamic method dispatch
    }
}`,
      expectedOutput: `Vikram is coding in Java.`,
      commonMistake:
        'Attempting multiple class inheritance (class C extends A, B). Java forbids multiple class inheritance to avoid the Diamond Problem (use interfaces instead).',
      practice: {
        question: 'Demonstrate super() calling a superclass constructor with two parameters.',
        difficulty: 'Easy',
        starterCode: `public class Main {
    // Implement Vehicle and Car classes
    public static void main(String[] args) {
        // Test
    }
}`,
        hint: 'In Car constructor, call super(brand, model); as the very first line.',
        solution: `public class Main {
    static class Vehicle {
        String brand;
        Vehicle(String b) { this.brand = b; }
    }
    static class Car extends Vehicle {
        int seats;
        Car(String b, int s) { super(b); this.seats = s; }
        void info() { System.out.println(brand + " with " + seats + " seats"); }
    }
    public static void main(String[] args) {
        Car c = new Car("Toyota", 5);
        c.info();
    }
}`,
      },
    },
    {
      id: 'interfaces-abstraction',
      title: '6. Abstract Classes & Interfaces',
      summary:
        'Abstract classes cannot be instantiated and provide partial implementations. Interfaces specify pure contracts that classes fulfill using implements. A class can implement multiple interfaces.',
      syntax: `interface Payable {
    void processPayment(double amount);
}
class CreditCardPayment implements Payable {
    public void processPayment(double amount) { /* ... */ }
}`,
      codeExample: `public class Main {
    interface Flyable {
        void fly();
    }

    interface Swimmable {
        void swim();
    }

    static class Duck implements Flyable, Swimmable {
        public void fly() { System.out.println("Duck is flying!"); }
        public void swim() { System.out.println("Duck is swimming!"); }
    }

    public static void main(String[] args) {
        Duck donald = new Duck();
        donald.fly();
        donald.swim();
    }
}`,
      expectedOutput: `Duck is flying!
Duck is swimming!`,
      commonMistake:
        'Forgetting that methods declared in an interface are implicitly public and abstract; omitting the public modifier when overriding them in the implementing class triggers a compiler error.',
      practice: {
        question: 'Create an interface DatabaseConnector with connect() and disconnect() methods.',
        difficulty: 'Easy',
        starterCode: `public class Main {
    interface DatabaseConnector {
        // method declarations
    }
    public static void main(String[] args) {}
}`,
        hint: 'Declare void connect(); and void disconnect(); without bodies.',
        solution: `public class Main {
    interface DatabaseConnector {
        void connect();
        void disconnect();
    }
    static class MySQL implements DatabaseConnector {
        public void connect() { System.out.println("Connected to MySQL"); }
        public void disconnect() { System.out.println("Disconnected"); }
    }
    public static void main(String[] args) {
        DatabaseConnector db = new MySQL();
        db.connect();
        db.disconnect();
    }
}`,
      },
    },
    {
      id: 'exception-handling',
      title: '7. Exception Handling (try, catch, finally, throws)',
      summary:
        'Exceptions represent anomalous runtime conditions. Checked exceptions (subclasses of Exception) require mandatory handling at compile time; unchecked exceptions (subclasses of RuntimeException) do not. The finally block always executes.',
      syntax: `try {
    int res = 10 / 0;
} catch (ArithmeticException e) {
    System.err.println("Math error: " + e.getMessage());
} finally {
    // Always runs, perfect for resource cleanup
}`,
      codeExample: `public class Main {
    public static void main(String[] args) {
        try {
            int[] nums = {1, 2, 3};
            System.out.println("Accessing index 5: " + nums[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught Exception: " + e.getClass().getSimpleName());
        } finally {
            System.out.println("Finally block executed regardless of exception.");
        }
    }
}`,
      expectedOutput: `Caught Exception: ArrayIndexOutOfBoundsException
Finally block executed regardless of exception.`,
      commonMistake:
        'Catching generic Exception or Throwable before specific exceptions, masking bugs and preventing targeted recovery.',
      practice: {
        question: 'Write a method validateAge(int age) that throws an IllegalArgumentException if age is less than 18.',
        difficulty: 'Easy',
        starterCode: `public class Main {
    static void validateAge(int age) {
        // throw exception if age < 18
    }
    public static void main(String[] args) {
        // test validateAge
    }
}`,
        hint: 'Use if (age < 18) throw new IllegalArgumentException("Not eligible");',
        solution: `public class Main {
    static void validateAge(int age) {
        if (age < 18) throw new IllegalArgumentException("Must be 18 or older");
        System.out.println("Eligible: " + age);
    }
    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Validation Error: " + e.getMessage());
        }
    }
}`,
      },
    },
    {
      id: 'collections-framework',
      title: '8. Collections Framework: ArrayList, HashMap & HashSet',
      summary:
        'The Java Collections Framework standardizes data structure manipulation. List (ArrayList, LinkedList) stores ordered elements; Set (HashSet) enforces uniqueness; Map (HashMap) stores key-value pairs.',
      syntax: `import java.util.*;
List<String> list = new ArrayList<>();
Set<Integer> set = new HashSet<>();
Map<String, Integer> map = new HashMap<>();`,
      codeExample: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> languages = new ArrayList<>();
        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        System.out.println("ArrayList elements: " + languages);

        HashMap<String, Integer> studentScores = new HashMap<>();
        studentScores.put("Rohit", 92);
        studentScores.put("Aditi", 98);

        System.out.println("HashMap entries:");
        for (Map.Entry<String, Integer> entry : studentScores.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}`,
      expectedOutput: `ArrayList elements: [Java, Python, C++]
HashMap entries:
Rohit -> 92
Aditi -> 98`,
      commonMistake:
        'Using primitive types as generic type arguments (e.g. ArrayList<int> instead of ArrayList<Integer>). Generics only accept reference types.',
      practice: {
        question: 'Use a HashSet to filter duplicate integers from an array [5, 2, 5, 8, 2, 9].',
        difficulty: 'Easy',
        starterCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 5, 8, 2, 9};
        // Add to HashSet and print unique values
    }
}`,
        hint: 'A Set automatically rejects duplicates when calling set.add(val).',
        solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 5, 8, 2, 9};
        Set<Integer> set = new HashSet<>();
        for (int n : arr) set.add(n);
        System.out.println("Unique: " + set);
    }
}`,
      },
    },
    {
      id: 'multithreading-basics',
      title: '9. Multithreading Basics (Thread & Runnable)',
      summary:
        'Multithreading executes concurrent tasks. You can spawn threads by subclassing Thread or implementing the Runnable interface (preferred for separation of task and thread lifecycle).',
      syntax: `class Task implements Runnable {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}
Thread t = new Thread(new Task());
t.start(); // Do NOT call t.run() directly`,
      codeExample: `public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread thread1 = new Thread(() -> {
            System.out.println("Worker thread executing asynchronously: " + Thread.currentThread().getName());
        });

        thread1.start();
        thread1.join(); // Wait for thread1 to finish
        System.out.println("Main thread completed.");
    }
}`,
      expectedOutput: `Worker thread executing asynchronously: Thread-0
Main thread completed.`,
      commonMistake:
        'Calling run() instead of start(). Calling run() executes the method synchronously in the caller thread rather than spawning a new OS thread.',
      practice: {
        question: 'Create and start two threads that print "Ping" and "Pong" respectively.',
        difficulty: 'Easy',
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Create Ping and Pong threads
    }
}`,
        hint: 'Use new Thread(() -> System.out.println("Ping")).start();',
        solution: `public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> System.out.println("Ping"));
        Thread t2 = new Thread(() -> System.out.println("Pong"));
        t1.start();
        t2.start();
    }
}`,
      },
    },
  ],
  bTechPriority: {
    semesterExams: [
      'JDK vs JRE vs JVM architectural layers and bytecode execution lifecycle.',
      'String Constant Pool: String immutability, equals() vs ==, and StringBuilder vs StringBuffer.',
      'Method Overloading (compile-time) vs Method Overriding (runtime dynamic dispatch).',
      'Abstract Class vs Interface (Default and static methods in Java 8+).',
      'Checked vs Unchecked Exceptions hierarchy and try-with-resources syntax.',
      'Collections Framework: List vs Set vs Map and HashMap internal bucketing / hashing mechanics.',
    ],
    vivaQuestions: [
      {
        q: 'Why is Java platform independent?',
        a: 'The Java compiler produces platform-neutral bytecode (.class) rather than native machine code. Any machine equipped with a platform-specific JVM can execute this bytecode.',
      },
      {
        q: 'Why are Strings immutable in Java?',
        a: 'For security (network connections and file paths), thread-safety without synchronization, and caching efficiency in the String Constant Pool.',
      },
      {
        q: 'What is the purpose of the Garbage Collector (GC)?',
        a: 'GC automatically frees memory on the heap occupied by unreachable objects, eliminating manual memory deallocation risks like memory leaks.',
      },
      {
        q: 'What is the difference between final, finally, and finalize?',
        a: 'final is a modifier (constant variable, unextendable class, unoverridable method); finally is an exception handling block that always runs; finalize() is a deprecated method formerly invoked before GC cleanup.',
      },
    ],
    dsaPrerequisites: [
      'ArrayList and LinkedList are foundational for building Queues, Stacks, and Adjacency lists.',
      'HashMap and HashSet provide average O(1) lookups for Two-Sum, Graph visited arrays, and frequency tables.',
      'PriorityQueue is used for Min/Max Heaps, Top-K elements, and Dijkstra shortest paths.',
    ],
    interviewTips: [
      'Know the internal workings of HashMap (Hashing, array of buckets, linked lists with Treeify threshold at 8 nodes).',
      'Always implement equals() and hashCode() contracts together when using custom objects as HashMap keys.',
      'Understand how the JVM memory layout splits between the Thread-local Stack (frames, primitives, references) and the shared Heap (objects).',
    ],
  },
};
