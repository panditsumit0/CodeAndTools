import { BTechPracticeQuestion } from './c-questions';

export const CPP_PRACTICE_QUESTIONS: BTechPracticeQuestion[] = [
  // --- EASY (10) ---
  {
    id: 'cpp-basic-io',
    language: 'cpp',
    title: 'Basic I/O with cin and cout',
    difficulty: 'Easy',
    topic: 'Basic I/O',
    question: 'Read a name (string) and age (int) from standard input, and print "Hello <name>, you are <age> years old!".',
    hint: 'Use string name; int age; cin >> name >> age;',
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    if (cin >> name >> age) {
        cout << "Hello " << name << ", you are " << age << " years old!" << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Read name and age
    return 0;
}`,
    sampleStdin: 'John 20',
    expectedOutput: 'Hello John, you are 20 years old!',
  },
  {
    id: 'cpp-leap-year',
    language: 'cpp',
    title: 'Leap Year Checker',
    difficulty: 'Easy',
    topic: 'Conditions',
    question: 'Determine if a given year is a leap year. Print "Leap Year" or "Not Leap Year".',
    hint: 'A year is leap if (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0).',
    solution: `#include <iostream>
using namespace std;

int main() {
    int year;
    if (cin >> year) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            cout << "Leap Year" << endl;
        } else {
            cout << "Not Leap Year" << endl;
        }
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int year;
    // Check leap year
    return 0;
}`,
    sampleStdin: '2024',
    expectedOutput: 'Leap Year',
  },
  {
    id: 'cpp-sum-n',
    language: 'cpp',
    title: 'Sum of First N Natural Numbers',
    difficulty: 'Easy',
    topic: 'Loops',
    question: 'Compute the sum of first N natural numbers using the formula n * (n + 1) / 2.',
    hint: 'Use long long to prevent integer overflow for large N.',
    solution: `#include <iostream>
using namespace std;

int main() {
    long long n;
    if (cin >> n) {
        long long sum = n * (n + 1) / 2;
        cout << sum << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

int main() {
    long long n;
    // Calculate sum of 1 to n
    return 0;
}`,
    sampleStdin: '10',
    expectedOutput: '55',
  },
  {
    id: 'cpp-swap-ref',
    language: 'cpp',
    title: 'Swap by Reference',
    difficulty: 'Easy',
    topic: 'Functions & References',
    question: 'Write a function swapRef(int &a, int &b) to swap two integers without pointers.',
    hint: 'Pass parameters as reference type int &x and use a temp variable.',
    solution: `#include <iostream>
using namespace std;

void swapRef(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x, y;
    if (cin >> x >> y) {
        swapRef(x, y);
        cout << x << " " << y << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

void swapRef(int &a, int &b) {
    // Implement swap
}

int main() {
    int a, b;
    if (cin >> a >> b) {
        swapRef(a, b);
        cout << a << " " << b << endl;
    }
    return 0;
}`,
    sampleStdin: '100 200',
    expectedOutput: '200 100',
  },
  {
    id: 'cpp-count-occ',
    language: 'cpp',
    title: 'Count Occurrences in Array',
    difficulty: 'Easy',
    topic: 'Arrays',
    question: 'Given an array of N integers and a key X, count how many times X appears in the array.',
    hint: 'Iterate through the array and increment count whenever arr[i] == key.',
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, key;
    if (cin >> n) {
        vector<int> v(n);
        for (int i = 0; i < n; i++) cin >> v[i];
        cin >> key;
        int count = 0;
        for (int x : v) if (x == key) count++;
        cout << count << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // Count occurrences of key
    return 0;
}`,
    sampleStdin: '6\n2 3 2 5 2 7\n2',
    expectedOutput: '3',
  },
  {
    id: 'cpp-string-palindrome',
    language: 'cpp',
    title: 'String Palindrome Check',
    difficulty: 'Easy',
    topic: 'Strings',
    question: 'Check if a given string s is a palindrome using std::string.',
    hint: 'Compare character at index i with s[s.length() - 1 - i].',
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    if (cin >> s) {
        bool isPal = true;
        int l = 0, r = s.length() - 1;
        while (l < r) {
            if (s[l] != s[r]) { isPal = false; break; }
            l++; r--;
        }
        cout << (isPal ? "Palindrome" : "Not Palindrome") << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Check if string is palindrome
    return 0;
}`,
    sampleStdin: 'racecar',
    expectedOutput: 'Palindrome',
  },
  {
    id: 'cpp-vowel-count',
    language: 'cpp',
    title: 'Count Vowels in String',
    difficulty: 'Easy',
    topic: 'Strings',
    question: 'Read a lowercase word and count the total number of vowels (a, e, i, o, u).',
    hint: 'Check if ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u".',
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    if (cin >> s) {
        int vowels = 0;
        for (char c : s) {
            char lower = tolower(c);
            if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {
                vowels++;
            }
        }
        cout << vowels << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Count vowels
    return 0;
}`,
    sampleStdin: 'engineering',
    expectedOutput: '5',
  },
  {
    id: 'cpp-class-rect',
    language: 'cpp',
    title: 'Rectangle Class Implementation',
    difficulty: 'Easy',
    topic: 'Classes & Objects',
    question: 'Create a Rectangle class with width and height. Implement area() and perimeter() methods.',
    hint: 'area = width * height; perimeter = 2 * (width + height).',
    solution: `#include <iostream>
using namespace std;

class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    int area() const { return width * height; }
    int perimeter() const { return 2 * (width + height); }
};

int main() {
    int w, h;
    if (cin >> w >> h) {
        Rectangle r(w, h);
        cout << "Area: " << r.area() << " | Perimeter: " << r.perimeter() << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

class Rectangle {
    // Implement class
};

int main() {
    return 0;
}`,
    sampleStdin: '5 8',
    expectedOutput: 'Area: 40 | Perimeter: 26',
  },
  {
    id: 'cpp-power',
    language: 'cpp',
    title: 'Fast Exponentiation (Binary Exponentiation)',
    difficulty: 'Easy',
    topic: 'Math & Functions',
    question: 'Compute base^exp using binary exponentiation in O(log exp) time.',
    hint: 'If exp is odd, res *= base; base *= base; exp /= 2;',
    solution: `#include <iostream>
using namespace std;

long long power(long long base, long long exp) {
    long long res = 1;
    while (exp > 0) {
        if (exp & 1) res *= base;
        base *= base;
        exp >>= 1;
    }
    return res;
}

int main() {
    long long b, e;
    if (cin >> b >> e) {
        cout << power(b, e) << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

// Implement power function
int main() {
    return 0;
}`,
    sampleStdin: '2 5',
    expectedOutput: '32',
  },
  {
    id: 'cpp-second-largest',
    language: 'cpp',
    title: 'Second Largest Element in Array',
    difficulty: 'Easy',
    topic: 'Arrays',
    question: 'Find the second largest unique element in an array of N integers.',
    hint: 'Maintain first and second variables, updating them as you scan.',
    solution: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int main() {
    int n;
    if (cin >> n && n >= 2) {
        vector<int> a(n);
        for (int i = 0; i < n; i++) cin >> a[i];

        int first = INT_MIN, second = INT_MIN;
        for (int x : a) {
            if (x > first) {
                second = first;
                first = x;
            } else if (x > second && x != first) {
                second = x;
            }
        }
        cout << second << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // Find second largest
    return 0;
}`,
    sampleStdin: '5\n10 50 20 40 30',
    expectedOutput: '40',
  },

  // --- MEDIUM (10) ---
  {
    id: 'cpp-construct-destruct',
    language: 'cpp',
    title: 'Constructor & Destructor Lifecycle',
    difficulty: 'Medium',
    topic: 'OOP Concepts',
    question: 'Implement a Tracker class that prints "[ID] Created" in constructor and "[ID] Destroyed" in destructor.',
    hint: 'Create objects in nested scopes to observe LIFO destructor call order.',
    solution: `#include <iostream>
using namespace std;

class Tracker {
    int id;
public:
    Tracker(int i) : id(i) { cout << "[" << id << "] Created" << endl; }
    ~Tracker() { cout << "[" << id << "] Destroyed" << endl; }
};

int main() {
    Tracker t1(1);
    {
        Tracker t2(2);
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

// Implement Tracker with constructor & destructor
int main() {
    return 0;
}`,
    sampleStdin: '',
    expectedOutput: '[1] Created\n[2] Created\n[2] Destroyed\n[1] Destroyed',
  },
  {
    id: 'cpp-inheritance',
    language: 'cpp',
    title: 'Inheritance: Person and Student',
    difficulty: 'Medium',
    topic: 'OOP Concepts',
    question: 'Derive class Student from Person using public inheritance and display student info.',
    hint: 'Initialize base class constructor using member initializer list Student(...) : Person(...) {}',
    solution: `#include <iostream>
#include <string>
using namespace std;

class Person {
protected:
    string name;
public:
    Person(string n) : name(n) {}
};

class Student : public Person {
    int roll;
    string branch;
public:
    Student(string n, int r, string b) : Person(n), roll(r), branch(b) {}
    void display() {
        cout << "Name: " << name << " | Roll: " << roll << " | Branch: " << branch << endl;
    }
};

int main() {
    string name, branch;
    int roll;
    if (cin >> name >> roll >> branch) {
        Student s(name, roll, branch);
        s.display();
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Base class Person, Derived class Student
int main() {
    return 0;
}`,
    sampleStdin: 'Aarav 101 CSE',
    expectedOutput: 'Name: Aarav | Roll: 101 | Branch: CSE',
  },
  {
    id: 'cpp-virtual-func',
    language: 'cpp',
    title: 'Runtime Polymorphism (Virtual Functions)',
    difficulty: 'Medium',
    topic: 'OOP Concepts',
    question: 'Demonstrate runtime polymorphism using a base pointer Shape* pointing to Circle and Square.',
    hint: 'Declare virtual void draw() in Shape and override it in derived classes.',
    solution: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() const { cout << "Drawing Shape" << endl; }
    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    void draw() const override { cout << "Drawing Circle" << endl; }
};

class Square : public Shape {
public:
    void draw() const override { cout << "Drawing Square" << endl; }
};

int main() {
    Shape* s1 = new Circle();
    Shape* s2 = new Square();
    s1->draw();
    s2->draw();
    delete s1;
    delete s2;
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

// Implement Shape, Circle, Square with virtual methods
int main() {
    return 0;
}`,
    sampleStdin: '',
    expectedOutput: 'Drawing Circle\nDrawing Square',
  },
  {
    id: 'cpp-vector-ops',
    language: 'cpp',
    title: 'STL Vector Sorting and Erasing',
    difficulty: 'Medium',
    topic: 'STL Containers',
    question: 'Read N integers into a vector, sort in ascending order, remove duplicates, and print.',
    hint: 'sort(v.begin(), v.end()); v.erase(unique(v.begin(), v.end()), v.end());',
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if (cin >> n) {
        vector<int> v(n);
        for (int i = 0; i < n; i++) cin >> v[i];
        sort(v.begin(), v.end());
        v.erase(unique(v.begin(), v.end()), v.end());
        for (size_t i = 0; i < v.size(); i++) {
            cout << v[i] << (i + 1 == v.size() ? "" : " ");
        }
        cout << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Sort and remove duplicates from vector
    return 0;
}`,
    sampleStdin: '5\n40 10 30 50 20',
    expectedOutput: '10 20 30 40 50',
  },
  {
    id: 'cpp-map-freq',
    language: 'cpp',
    title: 'Character Frequency with std::map',
    difficulty: 'Medium',
    topic: 'STL Containers',
    question: 'Count the frequency of each non-space character in a string and print sorted by character.',
    hint: 'std::map<char, int> automatically stores keys in sorted order.',
    solution: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    string line;
    if (getline(cin, line)) {
        map<char, int> freq;
        for (char c : line) {
            if (c != ' ') freq[c]++;
        }
        for (auto p : freq) {
            cout << p.first << ":" << p.second << " ";
        }
        cout << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    // Character frequency count with map
    return 0;
}`,
    sampleStdin: 'hello world',
    expectedOutput: 'd:1 e:1 h:1 l:3 o:2 r:1 w:1',
  },
  {
    id: 'cpp-set-unique',
    language: 'cpp',
    title: 'Unique Elements using std::set',
    difficulty: 'Medium',
    topic: 'STL Containers',
    question: 'Given N integers with duplicates, print the sorted unique elements and count using std::set.',
    hint: 'std::set automatically rejects duplicates and sorts elements in logarithmic time.',
    solution: `#include <iostream>
#include <set>
using namespace std;

int main() {
    int n, x;
    if (cin >> n) {
        set<int> s;
        for (int i = 0; i < n; i++) {
            cin >> x;
            s.insert(x);
        }
        cout << "Count: " << s.size() << " | Elements: ";
        for (int val : s) cout << val << " ";
        cout << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <set>
using namespace std;

int main() {
    // Unique elements using set
    return 0;
}`,
    sampleStdin: '6\n5 2 5 8 2 9',
    expectedOutput: 'Count: 4 | Elements: 2 5 8 9',
  },
  {
    id: 'cpp-balanced-parens',
    language: 'cpp',
    title: 'Balanced Parentheses using std::stack',
    difficulty: 'Medium',
    topic: 'STL Stack',
    question: 'Check if a string of brackets (), {}, [] is balanced. Print "Balanced" or "Not Balanced".',
    hint: 'Push opening brackets to stack; pop on matching closing bracket. If stack is empty at end, it is balanced.',
    solution: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isBalanced(const string &s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if (st.empty()) return false;
            char top = st.top();
            if ((c == ')' && top == '(') || (c == '}' && top == '{') || (c == ']' && top == '[')) st.pop();
            else return false;
        }
    }
    return st.empty();
}

int main() {
    string s;
    if (cin >> s) {
        cout << (isBalanced(s) ? "Balanced" : "Not Balanced") << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <stack>
using namespace std;

int main() {
    // Check balanced parentheses
    return 0;
}`,
    sampleStdin: '{[()]}',
    expectedOutput: 'Balanced',
  },
  {
    id: 'cpp-first-non-repeating',
    language: 'cpp',
    title: 'First Non-Repeating Character in Stream',
    difficulty: 'Medium',
    topic: 'STL Queue',
    question: 'For each character in a stream, print the first non-repeating character using a queue.',
    hint: 'Use queue<char> and frequency array. Pop from queue while front element frequency > 1.',
    solution: `#include <iostream>
#include <queue>
#include <string>
#include <vector>
using namespace std;

int main() {
    string s;
    if (cin >> s) {
        queue<char> q;
        vector<int> freq(256, 0);
        for (char c : s) {
            freq[c]++;
            q.push(c);
            while (!q.empty() && freq[q.front()] > 1) q.pop();
            if (q.empty()) cout << "#";
            else cout << q.front();
        }
        cout << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    // First non-repeating character in stream
    return 0;
}`,
    sampleStdin: 'aabcc',
    expectedOutput: 'a#bbc',
  },
  {
    id: 'cpp-lower-bound',
    language: 'cpp',
    title: 'Binary Search with std::lower_bound',
    difficulty: 'Medium',
    topic: 'STL Algorithms',
    question: 'Find the first index where element >= target in a sorted array using std::lower_bound.',
    hint: 'auto it = lower_bound(v.begin(), v.end(), target); index = distance(v.begin(), it);',
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, target;
    if (cin >> n) {
        vector<int> v(n);
        for (int i = 0; i < n; i++) cin >> v[i];
        cin >> target;
        auto it = lower_bound(v.begin(), v.end(), target);
        if (it != v.end()) {
            cout << "Index: " << distance(v.begin(), it) << " | Value: " << *it << endl;
        } else {
            cout << "Not Found" << endl;
        }
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // std::lower_bound usage
    return 0;
}`,
    sampleStdin: '5\n10 20 30 40 50\n30',
    expectedOutput: 'Index: 2 | Value: 30',
  },
  {
    id: 'cpp-custom-comparator',
    language: 'cpp',
    title: 'Custom Comparator Sort',
    difficulty: 'Medium',
    topic: 'STL Algorithms',
    question: 'Sort N students by marks in descending order. If marks are equal, sort by name ascending.',
    hint: 'Use bool compare(const Student &a, const Student &b) with std::sort.',
    solution: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

struct Student {
    string name;
    int marks;
};

bool compareStudents(const Student &a, const Student &b) {
    if (a.marks != b.marks) return a.marks > b.marks;
    return a.name < b.name;
}

int main() {
    int n;
    if (cin >> n) {
        vector<Student> v(n);
        for (int i = 0; i < n; i++) cin >> v[i].name >> v[i].marks;
        sort(v.begin(), v.end(), compareStudents);
        for (const auto &s : v) {
            cout << s.name << " " << s.marks << endl;
        }
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    // Sort students by marks descending
    return 0;
}`,
    sampleStdin: '3\nRahul 85\nAmit 92\nPriya 88',
    expectedOutput: 'Amit 92\nPriya 88\nRahul 85',
  },

  // --- HARD (6) ---
  {
    id: 'cpp-kth-largest',
    language: 'cpp',
    title: 'Kth Largest Element (Min-Heap Priority Queue)',
    difficulty: 'Hard',
    topic: 'STL Priority Queue',
    question: 'Find the Kth largest element in an array of size N using a min-heap priority_queue in O(N log K).',
    hint: 'Maintain a min-heap of size K: priority_queue<int, vector<int>, greater<int>> pq; if (pq.size() > k) pq.pop();',
    solution: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int findKthLargest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int x : nums) {
        minHeap.push(x);
        if ((int)minHeap.size() > k) minHeap.pop();
    }
    return minHeap.top();
}

int main() {
    int n, k;
    if (cin >> n >> k) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << findKthLargest(nums, k) << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    // Find Kth largest with min-heap
    return 0;
}`,
    sampleStdin: '6 3\n12 3 5 7 19 26',
    expectedOutput: '12',
  },
  {
    id: 'cpp-subsets',
    language: 'cpp',
    title: 'Generate All Subsets (Backtracking)',
    difficulty: 'Hard',
    topic: 'Recursion & Backtracking',
    question: 'Generate all 2^N subsets of a given set of N distinct integers.',
    hint: 'Use backtracking: choose to include nums[index] or exclude nums[index].',
    solution: `#include <iostream>
#include <vector>
using namespace std;

void getSubsets(vector<int>& nums, int idx, vector<int>& curr) {
    if (idx == (int)nums.size()) {
        cout << "[ ";
        for (int x : curr) cout << x << " ";
        cout << "]" << endl;
        return;
    }
    // Include
    curr.push_back(nums[idx]);
    getSubsets(nums, idx + 1, curr);
    // Exclude
    curr.pop_back();
    getSubsets(nums, idx + 1, curr);
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        vector<int> curr;
        getSubsets(nums, 0, curr);
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Backtracking subsets
    return 0;
}`,
    sampleStdin: '3\n1 2 3',
    expectedOutput: '[ 1 2 3 ]\n[ 1 2 ]\n[ 1 3 ]\n[ 1 ]\n[ 2 3 ]\n[ 2 ]\n[ 3 ]\n[ ]',
  },
  {
    id: 'cpp-reverse-linked-list',
    language: 'cpp',
    title: 'Reverse a Singly Linked List',
    difficulty: 'Hard',
    topic: 'Data Structures',
    question: 'Reverse a Singly Linked List iteratively by adjusting next pointers.',
    hint: 'Maintain prev = nullptr, curr = head. Save next = curr->next; curr->next = prev; prev = curr; curr = next;',
    solution: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

int main() {
    int n, x;
    if (cin >> n && n > 0) {
        ListNode* head = nullptr;
        ListNode* tail = nullptr;
        for (int i = 0; i < n; i++) {
            cin >> x;
            ListNode* node = new ListNode(x);
            if (!head) head = tail = node;
            else { tail->next = node; tail = node; }
        }
        head = reverseList(head);
        while (head) {
            cout << head->val << (head->next ? " -> " : "");
            ListNode* toDel = head;
            head = head->next;
            delete toDel;
        }
        cout << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

struct ListNode { int val; ListNode* next; };
int main() {
    // Reverse linked list
    return 0;
}`,
    sampleStdin: '4\n1 2 3 4',
    expectedOutput: '4 -> 3 -> 2 -> 1',
  },
  {
    id: 'cpp-binary-tree',
    language: 'cpp',
    title: 'Binary Tree Inorder Traversal',
    difficulty: 'Hard',
    topic: 'Trees',
    question: 'Construct a simple binary tree and print its Inorder (Left, Root, Right) traversal.',
    hint: 'void inorder(TreeNode* root) { if (!root) return; inorder(root->left); cout << root->val; inorder(root->right); }',
    solution: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

void inorder(TreeNode* root) {
    if (!root) return;
    inorder(root->left);
    cout << root->val << " ";
    inorder(root->right);
}

int main() {
    // Tree: 1 -> left: 2, right: 3 -> 2 left: 4, right: 5
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);

    cout << "Inorder: ";
    inorder(root);
    cout << endl;
    return 0;
}`,
    starterCode: `#include <iostream>
using namespace std;

// Tree inorder traversal
int main() {
    return 0;
}`,
    sampleStdin: '',
    expectedOutput: 'Inorder: 4 2 5 1 3',
  },
  {
    id: 'cpp-graph-bfs',
    language: 'cpp',
    title: 'Breadth-First Search (BFS) on Graph',
    difficulty: 'Hard',
    topic: 'Graphs',
    question: 'Read V vertices and E edges, and perform BFS starting from vertex 0 using an adjacency list and queue.',
    hint: 'vector<bool> visited(V, false); queue<int> q; q.push(start); visited[start] = true;',
    solution: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    int v, e;
    if (cin >> v >> e) {
        vector<vector<int>> adj(v);
        for (int i = 0; i < e; i++) {
            int u, w;
            cin >> u >> w;
            adj[u].push_back(w);
            adj[w].push_back(u);
        }
        vector<bool> visited(v, false);
        queue<int> q;
        q.push(0);
        visited[0] = true;
        cout << "BFS: ";
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            cout << node << " ";
            for (int neighbor : adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                }
            }
        }
        cout << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    // BFS on Graph
    return 0;
}`,
    sampleStdin: '4 4\n0 1\n0 2\n1 2\n2 3',
    expectedOutput: 'BFS: 0 1 2 3',
  },
  {
    id: 'cpp-knapsack',
    language: 'cpp',
    title: '0/1 Knapsack Problem (Dynamic Programming)',
    difficulty: 'Hard',
    topic: 'Dynamic Programming',
    question: 'Given N items with weight and value, find maximum value that fits in knapsack capacity W.',
    hint: 'DP table dp[w] = max(dp[w], dp[w - wt[i]] + val[i]); iterate capacity backwards from W to wt[i].',
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, W;
    if (cin >> n >> W) {
        vector<int> wt(n), val(n);
        for (int i = 0; i < n; i++) cin >> wt[i] >> val[i];

        vector<int> dp(W + 1, 0);
        for (int i = 0; i < n; i++) {
            for (int w = W; w >= wt[i]; w--) {
                dp[w] = max(dp[w], dp[w - wt[i]] + val[i]);
            }
        }
        cout << "Max Value: " << dp[W] << endl;
    }
    return 0;
}`,
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // 0/1 Knapsack DP
    return 0;
}`,
    sampleStdin: '3 50\n10 60\n20 100\n30 120',
    expectedOutput: 'Max Value: 220',
  },
];

export const cppQuestions = CPP_PRACTICE_QUESTIONS;
