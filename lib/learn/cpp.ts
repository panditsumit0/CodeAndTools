import { CourseData } from './types';

export const CPP_COURSE: CourseData = {
  id: 'cpp',
  slug: 'cpp',
  name: 'C++',
  tagline: 'High-Performance Systems & Competitive Programming Powerhouse',
  shortDescription:
    'Learn object-oriented programming, STL, algorithms and competitive programming concepts.',
  difficulty: 'Medium → Hard',
  bestFor:
    'B.Tech Data Structures & Algorithms (DSA), LeetCode, Codeforces, Game Engines, and High-Frequency Trading',
  icon: 'Code2',
  color: 'blue',
  intro: {
    whatIs:
      'C++ is an extension of C developed in 1979 by Bjarne Stroustrup at Bell Labs, originally titled "C with Classes". It combines zero-overhead abstractions, object-oriented design, generic programming via templates, and direct hardware memory control.',
    whyLearn:
      'For engineering students, C++ is the gold standard for Competitive Programming and technical interview DSA rounds. The Standard Template Library (STL) provides blazing fast pre-implemented heaps, maps, sorting routines, and dynamic arrays.',
    whereUsed: [
      'Competitive Programming platforms (Codeforces, LeetCode, CodeChef, AtCoder)',
      'AAA Game Engines (Unreal Engine 5, CryEngine, EA Frostbite)',
      'High-Frequency Financial Trading (low-latency execution engines)',
      'Operating systems & Web browsers (Google Chrome V8, Chromium, Windows audio subsystem)',
    ],
    advantages: [
      'Near-C raw execution speed with modern Object-Oriented and Generic programming features',
      'The Standard Template Library (STL) drastically accelerates algorithm problem solving',
      'Deterministic Resource Acquisition Is Initialization (RAII) and smart pointers',
      'Fine-grained control over cache locality and memory layout',
    ],
    limitations: [
      'Steep learning curve due to vast feature set across C++11, C++17, and C++20',
      'Manual memory management risks if raw pointers are used improperly',
      'Cryptic compiler error messages when dealing with complex nested templates',
    ],
  },
  visualCallout: {
    title: 'Procedural C vs Object-Oriented C++',
    description: 'Key paradigm shift from imperative C to abstraction-rich modern C++:',
    items: [
      {
        label: 'Paradigm',
        detail: 'C is purely procedural & function-driven; C++ is multi-paradigm (OOP, Generic, Procedural).',
        badge: 'Paradigm',
      },
      {
        label: 'Data Encapsulation',
        detail: 'In C, struct members are always public; C++ introduces private, protected, and public class access modifiers.',
        badge: 'Encapsulation',
      },
      {
        label: 'Data Structures',
        detail: 'In C, linked lists and dynamic arrays are coded by hand; C++ includes std::vector, std::map, and std::set.',
        badge: 'STL',
      },
      {
        label: 'Function Overloading',
        detail: 'C does not support multiple functions with identical names; C++ supports overloading and operator overloading.',
        badge: 'Polymorphism',
      },
    ],
  },
  topics: [
    {
      id: 'basic-syntax',
      title: '1. Basic Syntax & Streams (cin / cout)',
      summary:
        'C++ uses streams for standard I/O: std::cout with the insertion operator (<<) and std::cin with the extraction operator (>>). The std namespace holds standard library symbols.',
      syntax: `#include <iostream>
using namespace std;

int main() {
    cout << "Message" << endl;
    return 0;
}`,
      codeExample: `#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to B.Tech C++ Programming!" << endl;
    int year = 2026;
    cout << "Academic Session: " << year << endl;
    return 0;
}`,
      expectedOutput: `Welcome to B.Tech C++ Programming!
Academic Session: 2026`,
      commonMistake:
        'Reversing the stream operators: using >> with cout or << with cin triggers compiler errors.',
      practice: {
        question: 'Read two integers a and b from stdin and print their sum and product using cout.',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    // Read a and b, then print sum and product
    return 0;
}`,
        hint: 'Use cin >> a >> b; followed by cout << ...',
        solution: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    if (cin >> a >> b) {}
    cout << "Sum = " << a + b << endl;
    cout << "Product = " << a * b << endl;
    return 0;
}`,
      },
    },
    {
      id: 'variables-types',
      title: '2. Variables & Auto Type Deduction',
      summary:
        'C++ supports all C primitive types, plus bool (true/false) and modern auto keyword for automatic compile-time type deduction.',
      syntax: `int age = 20;
bool isGraduated = false;
auto score = 95.8; // deduced as double`,
      codeExample: `#include <iostream>
using namespace std;

int main() {
    auto pi = 3.14159; // double
    auto count = 100;   // int
    bool passed = true;

    cout << "pi: " << pi << " | count: " << count << " | passed: " << boolalpha << passed << endl;
    return 0;
}`,
      expectedOutput: `pi: 3.14159 | count: 100 | passed: true`,
      explanation: {
        intro: 'C++ provides strongly typed variables and introduces the auto keyword for compile-time type deduction.',
        why: 'Writing long type names (like std::vector<int>::iterator) is tedious and error-prone. The auto keyword lets the compiler figure out the type automatically based on the assigned value.',
        analogy: 'Think of auto like a smart labeling machine. Instead of you telling the box it contains "Apples", you just put apples in it, and the machine automatically prints the "Apples" label based on what it sees inside.',
        concept: 'C++ retains all primitive types from C (int, float, char) and adds a dedicated bool type. Variables must be declared before use. The auto keyword deduces type at compile-time, so it has ZERO performance cost.',
        syntaxBreakdown: [
          { part: 'bool', meaning: 'Boolean data type that holds either true or false.' },
          { part: 'auto', meaning: 'Instructs the compiler to deduce the variable\'s type from its initializer.' },
          { part: 'boolalpha', meaning: 'An I/O manipulator that formats boolean values as text ("true"/"false") instead of integers (1/0).' }
        ],
        keyPoints: [
          'auto requires an initializer; you cannot write auto x; without assigning a value.',
          'auto does not mean dynamic typing (like Python or JS). The type is fixed at compile time.',
          'C++ boolean sizes are typically 1 byte.'
        ],
        examTip: 'If an exam asks for the output of cout << true;, the answer is 1. To print "true", you must use cout << boolalpha << true;.',
        interviewTip: 'Use auto for complex iterator types or when the type is obvious from the right-hand side (e.g. auto ptr = new MyClass();). Do not over-use it if it reduces code readability.',
      },
      commonMistake:
        'Using auto without an initializer (e.g. auto x;), which cannot be compiled because the compiler needs an expression to deduce type.',
      practice: {
        question: 'Declare a bool flag and print it as "true"/"false" using std::boolalpha.',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
using namespace std;

int main() {
    bool flag = true;
    // Print flag with boolalpha
    return 0;
}`,
        hint: 'cout << boolalpha << flag << endl;',
        solution: `#include <iostream>
using namespace std;

int main() {
    bool flag = true;
    cout << "Flag: " << boolalpha << flag << endl;
    return 0;
}`,
      },
    },
    {
      id: 'operators',
      title: '3. Operators & Stream Manipulation',
      summary:
        'In addition to standard arithmetic and bitwise operators, C++ supports operator overloading, scope resolution (::), and formatting manipulators like fixed and setprecision.',
      syntax: `int result = (a > b) ? a : b;
#include <iomanip>
cout << fixed << setprecision(2) << 3.14159;`,
      codeExample: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double marks = 87.4567;
    cout << "Formatted marks: " << fixed << setprecision(2) << marks << endl;
    return 0;
}`,
      expectedOutput: `Formatted marks: 87.46`,
      explanation: {
        intro: 'C++ has the same operators as C, but introduces operator overloading and advanced stream manipulators.',
        why: 'Formatting output in C using printf required complex format specifiers like %0.2f. C++ streams use manipulators like setprecision which are type-safe and chainable.',
        analogy: 'Using printf is like giving a chef a rigid recipe ticket (%f)—if you pass the wrong food (string instead of float), the kitchen crashes. C++ streams are like an open buffet where the plates (types) sort themselves out safely.',
        concept: 'To format output in C++, include <iomanip>. The fixed manipulator forces decimal notation, and setprecision(N) sets the number of digits after the decimal point.',
        syntaxBreakdown: [
          { part: '#include <iomanip>', meaning: 'Input/Output Manipulation library.' },
          { part: 'fixed', meaning: 'Forces floating point numbers to not use scientific notation (e.g. 1.2e3).' },
          { part: 'setprecision(2)', meaning: 'Restricts the float output to exactly 2 decimal places.' }
        ],
        keyPoints: [
          'Stream manipulators alter the state of the stream. Once setprecision is called, it affects all subsequent prints until changed.',
          'Integer division truncates the decimal. 5/2 is 2. You must do 5.0/2 to get 2.5.'
        ],
        examTip: 'Watch out for ternary operators in MCQs: int x = (a > b) ? a : b; It evaluates the condition; if true, returns a, else b.',
      },
      commonMistake:
        'Performing integer division (e.g. 5 / 2 = 2) when expecting a floating-point answer (2.5). Cast one operand: 5.0 / 2.',
      practice: {
        question: 'Compute the average of 3 integers and print the result with 3 decimal places.',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int x = 10, y = 15, z = 22;
    // Calculate average and print with 3 decimal places
    return 0;
}`,
        hint: 'Cast sum to double before dividing by 3.0.',
        solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int x = 10, y = 15, z = 22;
    double avg = (x + y + z) / 3.0;
    cout << "Average: " << fixed << setprecision(3) << avg << endl;
    return 0;
}`,
      },
    },
    {
      id: 'conditions-loops',
      title: '4. Conditions & Range-Based For Loops',
      summary:
        'C++ extends traditional for loops with modern range-based for loops (for (const auto& item : container)), which eliminate index out-of-bounds errors.',
      syntax: `for (const auto& val : numbers) {
    cout << val << " ";
}`,
      codeExample: `#include <iostream>
using namespace std;

int main() {
    int primes[] = {2, 3, 5, 7, 11, 13};

    cout << "First 6 Primes (Range-based for loop):\\n";
    for (int p : primes) {
        cout << p << " ";
    }
    cout << endl;
    return 0;
}`,
      expectedOutput: `First 6 Primes (Range-based for loop):
2 3 5 7 11 13`,
      commonMistake:
        'Accidentally making a full copy of each container element in range loop by using for (auto x : vec) instead of for (const auto& x : vec).',
      practice: {
        question: 'Use a range-based for loop to calculate the sum of an integer array.',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40};
    int total = 0;
    // Sum using range-based loop
    return 0;
}`,
        hint: 'for (int n : arr) total += n;',
        solution: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40};
    int total = 0;
    for (int n : arr) total += n;
    cout << "Total = " << total << endl;
    return 0;
}`,
      },
    },
    {
      id: 'references',
      title: '5. References vs Pointers',
      summary:
        'A reference in C++ (type &ref = original;) is an alias for an existing variable. Unlike pointers, references cannot be NULL, cannot be reseated, and do not need the * dereferencing operator.',
      syntax: `int original = 50;
int &ref = original; // alias to original
ref = 99; // original is now 99`,
      codeExample: `#include <iostream>
using namespace std;

void swapByRef(int &x, int &y) {
    int temp = x;
    x = y;
    y = temp;
}

int main() {
    int a = 10, b = 20;
    cout << "Before swap: a=" << a << ", b=" << b << endl;
    swapByRef(a, b);
    cout << "After swap:  a=" << a << ", b=" << b << endl;
    return 0;
}`,
      expectedOutput: `Before swap: a=10, b=20
After swap:  a=20, b=10`,
      commonMistake:
        'Declaring an uninitialized reference (int &ref;). References MUST be bound to a valid lvalue at the point of declaration.',
      practice: {
        question: 'Write a function increment(int &num) that increments the passed variable by 5.',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
using namespace std;

void increment(int &num) {
    // increment by 5
}

int main() {
    int val = 20;
    increment(val);
    cout << "Val: " << val << endl;
    return 0;
}`,
        hint: 'Use num += 5 inside the function.',
        solution: `#include <iostream>
using namespace std;

void increment(int &num) {
    num += 5;
}

int main() {
    int val = 20;
    increment(val);
    cout << "Val: " << val << endl;
    return 0;
}`,
      },
    },
    {
      id: 'classes-objects',
      title: '6. Classes, Objects & Constructors',
      summary:
        'A class is a blueprint containing member variables (state) and methods (behavior). Constructors initialize object state, and access specifiers (public, private, protected) enforce encapsulation.',
      syntax: `class ClassName {
private:
    int hiddenData;
public:
    ClassName(int val) : hiddenData(val) {} // Member initializer list
    void display();
};`,
      codeExample: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    int roll;
    string name;
public:
    // Parameterized constructor with initializer list
    Student(int r, string n) : roll(r), name(n) {}

    void display() const {
        cout << "Student: " << name << " | Roll No: " << roll << endl;
    }
};

int main() {
    Student s1(101, "Ananya Verma");
    s1.display();
    return 0;
}`,
      expectedOutput: `Student: Ananya Verma | Roll No: 101`,
      explanation: {
        intro: 'Classes are the fundamental building blocks of Object-Oriented Programming (OOP), bundling data and functions into a single unit.',
        why: 'In C, structs only hold data. If you have a BankAccount struct, the withdraw() function is separate, leading to disorganized code where anyone can accidentally modify the balance. C++ classes fix this by encapsulating data and restricting access.',
        analogy: 'A Class is like a blueprint for a house. An Object is the actual physical house built from that blueprint. You can build many houses (objects) from one blueprint (class).',
        concept: 'A class defines private data (hidden from the outside) and public methods (ways to interact with the data). The constructor is a special function that runs automatically when the object is created to set initial values.',
        syntaxBreakdown: [
          { part: 'class ClassName { ... };', meaning: 'Defines a class. MUST end with a semicolon.' },
          { part: 'private:', meaning: 'Access modifier. Variables here cannot be touched directly from main().' },
          { part: 'public:', meaning: 'Access modifier. Functions here can be called by anyone.' },
          { part: 'Student(int r) : roll(r) {}', meaning: 'A Constructor using a Member Initializer List (faster than assigning inside the body).' }
        ],
        keyPoints: [
          'By default, all members of a class are private. In a struct, they are public.',
          'Constructors share the exact name of the class and have no return type.',
          'Encapsulation means hiding the internal state and requiring all interaction to be performed through an object\'s methods.'
        ],
        examTip: 'Always remember the semicolon at the end of the class definition. Forgetting it is the #1 syntax error students make.',
      },
      commonMistake:
        'Forgetting the semicolon after the class closing bracket (};), causing difficult-to-parse compiler errors.',
      practice: {
        question: 'Create a Rectangle class with width and height, and an area() method.',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
using namespace std;

class Rectangle {
    // members & constructor
};

int main() {
    // instantiate and print area
    return 0;
}`,
        hint: 'Return width * height from the area() method.',
        solution: `#include <iostream>
using namespace std;

class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    int area() const { return width * height; }
};

int main() {
    Rectangle r(5, 8);
    cout << "Area: " << r.area() << endl;
    return 0;
}`,
      },
    },
    {
      id: 'destructors-raii',
      title: '7. Destructors & RAII',
      summary:
        'A destructor (~ClassName()) is automatically invoked when an object leaves its scope. Resource Acquisition Is Initialization (RAII) ensures heap memory, file handles, or network sockets are safely released.',
      syntax: `class ResourceHolder {
public:
    ~ResourceHolder() {
        // cleanup code automatically called
    }
};`,
      codeExample: `#include <iostream>
using namespace std;

class Tracker {
public:
    Tracker() { cout << "Tracker initialized." << endl; }
    ~Tracker() { cout << "Tracker destroyed (scope ended)." << endl; }
};

int main() {
    cout << "Entering outer scope" << endl;
    {
        Tracker t;
        cout << "Inside local inner block" << endl;
    }
    cout << "Exited inner scope" << endl;
    return 0;
}`,
      expectedOutput: `Entering outer scope
Tracker initialized.
Inside local inner block
Tracker destroyed (scope ended).
Exited inner scope`,
      commonMistake:
        'Not making base class destructors virtual when using inheritance (virtual ~Base() = default;), leading to partial destruction and memory leaks.',
      practice: {
        question: 'Demonstrate constructor and destructor execution order for two objects.',
        difficulty: 'Medium',
        starterCode: `#include <iostream>
using namespace std;

class Demo {
    int id;
public:
    Demo(int i) : id(i) { cout << "Construct " << id << endl; }
    ~Demo() { cout << "Destruct " << id << endl; }
};

int main() {
    Demo d1(1);
    Demo d2(2);
    return 0;
}`,
        hint: 'Objects on the stack are destroyed in reverse order of construction (LIFO).',
        solution: `#include <iostream>
using namespace std;

class Demo {
    int id;
public:
    Demo(int i) : id(i) { cout << "Construct " << id << endl; }
    ~Demo() { cout << "Destruct " << id << endl; }
};

int main() {
    Demo d1(1);
    Demo d2(2);
    return 0;
}`,
      },
    },
    {
      id: 'inheritance-polymorphism',
      title: '8. Inheritance & Runtime Polymorphism',
      summary:
        'Inheritance models "is-a" relationships. Runtime polymorphism enables derived classes to override base virtual methods, invoked dynamically via base class pointers or references.',
      syntax: `class Base {
public:
    virtual void speak() { cout << "Base speaks"; }
    virtual ~Base() = default;
};
class Derived : public Base {
public:
    void speak() override { cout << "Derived speaks"; }
};`,
      codeExample: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void makeSound() const {
        cout << "Generic animal sound" << endl;
    }
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void makeSound() const override {
        cout << "Woof! Woof!" << endl;
    }
};

int main() {
    Animal *pet = new Dog();
    pet->makeSound(); // Dispatches dynamically to Dog::makeSound via vtable
    delete pet;
    return 0;
}`,
      expectedOutput: `Woof! Woof!`,
      explanation: {
        intro: 'Inheritance enables code reuse, while Runtime Polymorphism allows identical function calls to behave differently based on the actual object type.',
        why: 'Without polymorphism, if you had an array of different Enemy types in a game, you would need complex switch-statements to call the right attack() function. Virtual functions let you just call enemy->attack() and C++ figures out the correct version at runtime.',
        analogy: 'Polymorphism means "many forms". If a teacher says "Speak!" to a class of animals, the dog barks, the cat meows, and the duck quacks. The command ("Speak") is the same, but the implementation differs based on the entity receiving it.',
        concept: 'To enable runtime polymorphism, a base class method must be marked virtual. The compiler creates a Virtual Table (vtable) mapping the function to its correct derived implementation. You MUST call it via a base class pointer or reference.',
        syntaxBreakdown: [
          { part: 'class Dog : public Animal', meaning: 'Dog inherits from Animal (Dog "is a" Animal).' },
          { part: 'virtual void makeSound()', meaning: 'Marks the function as overridable for dynamic dispatch via vtable.' },
          { part: 'override', meaning: 'Optional but highly recommended keyword to ensure you are actually overriding a base method, not making a typo.' },
          { part: 'virtual ~Animal() = default;', meaning: 'Base classes MUST have virtual destructors to prevent memory leaks when deleting via base pointer.' }
        ],
        keyPoints: [
          'A Pure Virtual Function (virtual void foo() = 0;) makes the class Abstract. You cannot instantiate an Abstract class.',
          'Runtime polymorphism ONLY works when passing objects by pointer (*) or reference (&).'
        ],
        examTip: 'A common viva question: "What happens if a base class destructor is NOT virtual?" Answer: If you delete a derived object via a base pointer, only the base destructor runs, causing a memory leak.',
      },
      commonMistake:
        'Omitting the virtual keyword in the base class method. Without virtual, the compiler performs static (compile-time) binding to the base method.',
      practice: {
        question: 'Create an abstract base class Shape with a pure virtual method virtual double area() = 0; and implement it in Circle.',
        difficulty: 'Medium',
        starterCode: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual double area() const = 0; // Pure virtual function
};

class Circle : public Shape {
    double r;
public:
    Circle(double radius) : r(radius) {}
    // Implement area()
};

int main() {
    Circle c(7.0);
    cout << "Area = " << c.area() << endl;
    return 0;
}`,
        hint: 'Use return 3.14159 * r * r; in the overridden area() method.',
        solution: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual double area() const = 0;
};

class Circle : public Shape {
    double r;
public:
    Circle(double radius) : r(radius) {}
    double area() const override { return 3.14159 * r * r; }
};

int main() {
    Circle c(7.0);
    cout << "Area = " << c.area() << endl;
    return 0;
}`,
      },
    },
    {
      id: 'templates',
      title: '9. Templates (Generic Programming)',
      summary:
        'Templates empower you to write type-independent algorithms and containers. The compiler generates specialized code instances at compile time for each type used.',
      syntax: `template <typename T>
T myMax(T a, T b) {
    return (a > b) ? a : b;
}`,
      codeExample: `#include <iostream>
#include <string>
using namespace std;

template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Max int:    " << getMax(45, 89) << endl;
    cout << "Max double: " << getMax(3.14, 2.71) << endl;
    cout << "Max string: " << getMax(string("apple"), string("banana")) << endl;
    return 0;
}`,
      expectedOutput: `Max int:    89
Max double: 3.14
Max string: banana`,
      commonMistake:
        'Separating template declarations into .h header and definitions into .cpp files without explicit instantiation, leading to unresolved symbol linker errors.',
      practice: {
        question: 'Write a template function swapValues<T>(T &a, T &b) that swaps two variables of any type.',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
using namespace std;

template <typename T>
void swapValues(T &a, T &b) {
    // Generic swap
}

int main() {
    int x = 5, y = 10;
    swapValues(x, y);
    cout << "x=" << x << ", y=" << y << endl;
    return 0;
}`,
        hint: 'T temp = a; a = b; b = temp;',
        solution: `#include <iostream>
using namespace std;

template <typename T>
void swapValues(T &a, T &b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;
    swapValues(x, y);
    cout << "x=" << x << ", y=" << y << endl;
    return 0;
}`,
      },
    },
    {
      id: 'stl-vector',
      title: '10. STL: std::vector (Dynamic Arrays)',
      summary:
        'std::vector is a contiguous, self-resizing dynamic array. It offers amortized O(1) push_back(), O(1) random access, and automatic memory reallocation.',
      syntax: `#include <vector>
vector<int> v = {1, 2, 3};
v.push_back(4);
v.pop_back();
size_t sz = v.size();`,
      codeExample: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> scores;
    scores.push_back(88);
    scores.push_back(94);
    scores.push_back(76);

    cout << "Vector elements (size = " << scores.size() << "):\\n";
    for (int score : scores) {
        cout << score << " ";
    }
    cout << endl;
    return 0;
}`,
      expectedOutput: `Vector elements (size = 3):
88 94 76`,
      commonMistake:
        'Using [] operator (scores[i]) on an empty vector without first resizing or pushing elements, which results in undefined memory corruption.',
      practice: {
        question: 'Create a vector of 5 integers and remove the last element using pop_back().',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30, 40, 50};
    // remove last element and print remaining
    return 0;
}`,
        hint: 'v.pop_back(); removes the trailing element.',
        solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30, 40, 50};
    v.pop_back();
    for (int x : v) cout << x << " ";
    cout << endl;
    return 0;
}`,
      },
    },
    {
      id: 'stl-map-set',
      title: '11. STL: std::map & std::unordered_map',
      summary:
        'std::map stores key-value pairs sorted by key using a Red-Black self-balancing BST with O(log N) operations. std::unordered_map uses a hash table with average O(1) lookups.',
      syntax: `#include <map>
#include <unordered_map>
map<string, int> ageMap;
ageMap["Rohan"] = 21;`,
      codeExample: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, int> branchCount;
    branchCount["CSE"] = 120;
    branchCount["ECE"] = 90;
    branchCount["ME"]  = 60;

    cout << "Engineering Department Batches (Sorted):\\n";
    for (const auto &[dept, count] : branchCount) {
        cout << dept << ": " << count << " students\\n";
    }
    return 0;
}`,
      expectedOutput: `Engineering Department Batches (Sorted):
CSE: 120 students
ECE: 90 students
ME: 60 students`,
      commonMistake:
        'Using map[key] to merely check for existence. If the key is not present, map[key] automatically inserts it with a default value.',
      practice: {
        question: 'Count the frequency of each character in a given string using an unordered_map.',
        difficulty: 'Medium',
        starterCode: `#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int main() {
    string word = "engineering";
    // Count char frequency
    return 0;
}`,
        hint: 'for (char c : word) freq[c]++;',
        solution: `#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int main() {
    string word = "engineering";
    unordered_map<char, int> freq;
    for (char c : word) freq[c]++;
    for (auto &[ch, count] : freq) {
        cout << ch << ": " << count << endl;
    }
    return 0;
}`,
      },
    },
    {
      id: 'stl-algorithms',
      title: '12. STL Algorithms (sort, binary_search, lower_bound)',
      summary:
        'The <algorithm> library provides highly optimized routines. std::sort runs in O(N log N) time using Introsort (quicksort + heapsort fallback). std::binary_search and lower_bound require sorted input.',
      syntax: `#include <algorithm>
sort(v.begin(), v.end());
bool found = binary_search(v.begin(), v.end(), target);
auto it = lower_bound(v.begin(), v.end(), target);`,
      codeExample: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {45, 12, 85, 32, 89, 21};

    // Sort ascending
    sort(nums.begin(), nums.end());

    cout << "Sorted array: ";
    for (int n : nums) cout << n << " ";
    cout << endl;

    int target = 32;
    if (binary_search(nums.begin(), nums.end(), target)) {
        cout << target << " found in vector via Binary Search!\\n";
    }
    return 0;
}`,
      expectedOutput: `Sorted array: 12 21 32 45 85 89 
32 found in vector via Binary Search!`,
      commonMistake:
        'Calling binary_search() or lower_bound() on an unsorted vector; this produces incorrect search results.',
      practice: {
        question: 'Sort a vector in descending order using std::greater<int>().',
        difficulty: 'Easy',
        starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 1, 5, 9};
    // Sort descending
    return 0;
}`,
        hint: 'sort(v.begin(), v.end(), greater<int>());',
        solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 1, 5, 9};
    sort(v.begin(), v.end(), greater<int>());
    for (int x : v) cout << x << " ";
    cout << endl;
    return 0;
}`,
      },
    },
  ],
  bTechPriority: {
    semesterExams: [
      'Four Pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism with code diagrams.',
      'Virtual Functions and vtables: How dynamic binding and virtual method tables work under the hood.',
      'Constructors & Destructors: Copy constructor (deep copy vs shallow copy), member initializer list, and virtual destructors.',
      'Operator Overloading: Syntax and rules (overloading +, <<, >>, ==).',
      'Exception Handling: try, catch, throw, and standard exceptions (std::runtime_error, std::out_of_range).',
    ],
    vivaQuestions: [
      {
        q: 'What is a Virtual Function and what is a vtable?',
        a: 'A virtual function is resolved at runtime via dynamic dispatch. The compiler creates a virtual table (vtable) containing function pointers for each class with virtual functions.',
      },
      {
        q: 'What is the difference between Shallow Copy and Deep Copy?',
        a: 'Shallow copy duplicates pointer addresses, leading to double-free errors. Deep copy allocates separate heap memory and duplicates the underlying data.',
      },
      {
        q: 'Why should a base class destructor always be declared virtual?',
        a: 'If a derived object is deleted via a base pointer, a non-virtual destructor only executes the base cleanup, leaking derived class heap allocations.',
      },
      {
        q: 'What is the difference between std::vector::size() and capacity()?',
        a: 'size() is the number of elements currently stored; capacity() is the total memory allocated before a reallocation is triggered.',
      },
    ],
    dsaPrerequisites: [
      'std::vector, std::pair, and std::tuple are the backbone of graph adjacency lists (vector<pair<int, int>> adj[N]).',
      'std::priority_queue is essential for Dijkstra shortest path and Prim minimum spanning tree algorithms.',
      'std::set and std::unordered_map are critical for hash maps, disjoint set unions (DSU), and frequency counters in LeetCode problems.',
    ],
    interviewTips: [
      'In technical interviews, state time complexities of STL operations (e.g. map is O(log N), unordered_map is average O(1)).',
      'Pass non-primitive objects by constant reference (const string &s, const vector<int> &v) to avoid costly heap copies.',
      'Use ios_base::sync_with_stdio(false); cin.tie(NULL); for fast competitive programming I/O.',
    ],
  },
};
