import { SupportedLanguageId } from '@/lib/compiler/types';

export interface BTechPracticeQuestion {
  id: string;
  language: SupportedLanguageId;
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

export type PracticeQuestion = BTechPracticeQuestion;

/* =========================================================================
 * 1. C PROGRAMMING PRACTICE QUESTIONS (26 QUESTIONS)
 * ========================================================================= */
export const C_PRACTICE_QUESTIONS: BTechPracticeQuestion[] = [
  // --- EASY (10) ---
  {
    id: 'c-hello-world',
    language: 'c',
    title: 'Hello World',
    difficulty: 'Easy',
    topic: 'Basic I/O',
    question: 'Write a C program to print "Hello, B.Tech World!" followed by a newline.',
    hint: 'Use the printf() function from <stdio.h> with \\n.',
    solution: `#include <stdio.h>

int main() {
    printf("Hello, B.Tech World!\\n");
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
    sampleStdin: '',
    expectedOutput: 'Hello, B.Tech World!',
  },
  {
    id: 'c-sum-two-numbers',
    language: 'c',
    title: 'Sum of Two Numbers',
    difficulty: 'Easy',
    topic: 'Basic I/O & Arithmetic',
    question: 'Read two integers a and b from standard input and print their sum.',
    hint: 'Use scanf("%d %d", &a, &b) and print a + b with printf.',
    solution: `#include <stdio.h>

int main() {
    int a, b;
    if (scanf("%d %d", &a, &b) == 2) {
        printf("%d\\n", a + b);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int a, b;
    // Read a and b and print their sum
    
    return 0;
}`,
    sampleStdin: '10 20',
    expectedOutput: '30',
  },
  {
    id: 'c-even-odd',
    language: 'c',
    title: 'Even or Odd Number',
    difficulty: 'Easy',
    topic: 'Conditions',
    question: 'Read an integer and print whether it is "Even" or "Odd".',
    hint: 'Use the modulus operator (n % 2 == 0) to check for even numbers.',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        if (n % 2 == 0) {
            printf("Even\\n");
        } else {
            printf("Odd\\n");
        }
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Check if n is Even or Odd
    
    return 0;
}`,
    sampleStdin: '7',
    expectedOutput: 'Odd',
  },
  {
    id: 'c-positive-negative',
    language: 'c',
    title: 'Positive, Negative, or Zero',
    difficulty: 'Easy',
    topic: 'Conditions',
    question: 'Given an integer n, print "Positive", "Negative", or "Zero".',
    hint: 'Use if (n > 0), else if (n < 0), else.',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        if (n > 0) printf("Positive\\n");
        else if (n < 0) printf("Negative\\n");
        else printf("Zero\\n");
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Print Positive, Negative, or Zero
    
    return 0;
}`,
    sampleStdin: '-15',
    expectedOutput: 'Negative',
  },
  {
    id: 'c-largest-two',
    language: 'c',
    title: 'Largest of Two Numbers',
    difficulty: 'Easy',
    topic: 'Conditions',
    question: 'Read two integers and print the larger one.',
    hint: 'Use ternary operator: int max = (a > b) ? a : b;',
    solution: `#include <stdio.h>

int main() {
    int a, b;
    if (scanf("%d %d", &a, &b) == 2) {
        printf("%d\\n", (a > b) ? a : b);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int a, b;
    // Print largest of two numbers
    
    return 0;
}`,
    sampleStdin: '45 78',
    expectedOutput: '78',
  },
  {
    id: 'c-largest-three',
    language: 'c',
    title: 'Largest of Three Numbers',
    difficulty: 'Easy',
    topic: 'Conditions',
    question: 'Read three integers a, b, and c, and print the largest value.',
    hint: 'Compare a with b and c using logical AND (&&).',
    solution: `#include <stdio.h>

int main() {
    int a, b, c;
    if (scanf("%d %d %d", &a, &b, &c) == 3) {
        if (a >= b && a >= c) printf("%d\\n", a);
        else if (b >= a && b >= c) printf("%d\\n", b);
        else printf("%d\\n", c);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int a, b, c;
    // Print largest of three
    
    return 0;
}`,
    sampleStdin: '12 45 32',
    expectedOutput: '45',
  },
  {
    id: 'c-factorial',
    language: 'c',
    title: 'Factorial of a Number',
    difficulty: 'Easy',
    topic: 'Loops',
    question: 'Calculate and print the factorial of a non-negative integer N (N <= 15).',
    hint: 'Use long long to prevent integer overflow and iterate from 1 to N.',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        long long fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        printf("%lld\\n", fact);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Calculate factorial
    
    return 0;
}`,
    sampleStdin: '5',
    expectedOutput: '120',
  },
  {
    id: 'c-mult-table',
    language: 'c',
    title: 'Multiplication Table',
    difficulty: 'Easy',
    topic: 'Loops',
    question: 'Print the multiplication table of a given number N up to 10 multiples.',
    hint: 'Loop from i = 1 to 10 and print N * i.',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        for (int i = 1; i <= 10; i++) {
            printf("%d x %d = %d\\n", n, i, n * i);
        }
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Print multiplication table up to 10
    
    return 0;
}`,
    sampleStdin: '6',
    expectedOutput: '6 x 1 = 6\n6 x 2 = 12\n6 x 3 = 18\n6 x 4 = 24\n6 x 5 = 30\n6 x 6 = 36\n6 x 7 = 42\n6 x 8 = 48\n6 x 9 = 54\n6 x 10 = 60',
  },
  {
    id: 'c-reverse-number',
    language: 'c',
    title: 'Reverse a Number',
    difficulty: 'Easy',
    topic: 'Loops & Math',
    question: 'Given an integer N, reverse its digits and print the reversed number.',
    hint: 'Extract the last digit using n % 10, add it to rev * 10, then divide n by 10.',
    solution: `#include <stdio.h>

int main() {
    int n, rev = 0;
    if (scanf("%d", &n) == 1) {
        while (n != 0) {
            rev = rev * 10 + (n % 10);
            n /= 10;
        }
        printf("%d\\n", rev);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Reverse the digits of n
    
    return 0;
}`,
    sampleStdin: '12345',
    expectedOutput: '54321',
  },
  {
    id: 'c-sum-digits',
    language: 'c',
    title: 'Sum of Digits',
    difficulty: 'Easy',
    topic: 'Loops & Math',
    question: 'Read an integer and compute the sum of its individual digits.',
    hint: 'Sum remainder n % 10 in a loop while n > 0.',
    solution: `#include <stdio.h>

int main() {
    int n, sum = 0;
    if (scanf("%d", &n) == 1) {
        if (n < 0) n = -n;
        while (n > 0) {
            sum += (n % 10);
            n /= 10;
        }
        printf("%d\\n", sum);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Compute sum of digits
    
    return 0;
}`,
    sampleStdin: '432',
    expectedOutput: '9',
  },

  // --- MEDIUM (10) ---
  {
    id: 'c-prime-check',
    language: 'c',
    title: 'Prime Number Verification',
    difficulty: 'Medium',
    topic: 'Algorithms & Math',
    question: 'Check whether a given integer N is prime or not. Print "Prime" or "Not Prime".',
    hint: 'Check divisibility from 2 up to sqrt(N) (i * i <= N).',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        if (n <= 1) {
            printf("Not Prime\\n");
            return 0;
        }
        int isPrime = 1;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime) printf("Prime\\n");
        else printf("Not Prime\\n");
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Check if n is prime
    
    return 0;
}`,
    sampleStdin: '29',
    expectedOutput: 'Prime',
  },
  {
    id: 'c-fibonacci',
    language: 'c',
    title: 'Fibonacci Series (N Terms)',
    difficulty: 'Medium',
    topic: 'Loops & Series',
    question: 'Generate and print the first N terms of the Fibonacci sequence separated by spaces.',
    hint: 'Start with t1 = 0, t2 = 1. In each step: next = t1 + t2; t1 = t2; t2 = next;',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1 && n > 0) {
        long long t1 = 0, t2 = 1, next;
        for (int i = 1; i <= n; i++) {
            printf("%lld%c", t1, (i == n) ? '\\n' : ' ');
            next = t1 + t2;
            t1 = t2;
            t2 = next;
        }
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Print first n Fibonacci numbers
    
    return 0;
}`,
    sampleStdin: '7',
    expectedOutput: '0 1 1 2 3 5 8',
  },
  {
    id: 'c-palindrome-number',
    language: 'c',
    title: 'Palindrome Number Check',
    difficulty: 'Medium',
    topic: 'Loops & Math',
    question: 'Check if a given integer is a palindrome (e.g. 1221). Print "Palindrome" or "Not Palindrome".',
    hint: 'Reverse the number and compare with the original stored copy.',
    solution: `#include <stdio.h>

int main() {
    int n, original, rev = 0;
    if (scanf("%d", &n) == 1) {
        original = n;
        while (n > 0) {
            rev = rev * 10 + (n % 10);
            n /= 10;
        }
        if (original == rev) printf("Palindrome\\n");
        else printf("Not Palindrome\\n");
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Check if n is a palindrome
    
    return 0;
}`,
    sampleStdin: '1221',
    expectedOutput: 'Palindrome',
  },
  {
    id: 'c-armstrong-number',
    language: 'c',
    title: 'Armstrong Number Check',
    difficulty: 'Medium',
    topic: 'Loops & Math',
    question: 'Verify if a 3-digit number is an Armstrong number (sum of cubes of digits equals the number).',
    hint: 'For 153: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.',
    solution: `#include <stdio.h>

int main() {
    int n, original, sum = 0, d;
    if (scanf("%d", &n) == 1) {
        original = n;
        while (n > 0) {
            d = n % 10;
            sum += (d * d * d);
            n /= 10;
        }
        if (sum == original) printf("Armstrong Number\\n");
        else printf("Not Armstrong\\n");
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Check if 3-digit n is Armstrong
    
    return 0;
}`,
    sampleStdin: '153',
    expectedOutput: 'Armstrong Number',
  },
  {
    id: 'c-gcd-lcm',
    language: 'c',
    title: 'GCD and LCM (Euclidean Algorithm)',
    difficulty: 'Medium',
    topic: 'Algorithms & Math',
    question: 'Read two positive integers a and b. Print their GCD and LCM on separate lines.',
    hint: 'Use Euclidean algorithm: while (b != 0) { int t = b; b = a % b; a = t; }. LCM = (origA * origB) / GCD.',
    solution: `#include <stdio.h>

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int a, b;
    if (scanf("%d %d", &a, &b) == 2) {
        int g = gcd(a, b);
        long long lcm = ((long long)a * b) / g;
        printf("GCD = %d\\n", g);
        printf("LCM = %lld\\n", lcm);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int a, b;
    // Print GCD and LCM
    
    return 0;
}`,
    sampleStdin: '12 18',
    expectedOutput: 'GCD = 6\nLCM = 36',
  },
  {
    id: 'c-reverse-array',
    language: 'c',
    title: 'Reverse an Array in Place',
    difficulty: 'Medium',
    topic: 'Arrays',
    question: 'Read array size N followed by N integers. Reverse the array in-place and print the result.',
    hint: 'Use two pointers start = 0 and end = N - 1, and swap until start >= end.',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        int arr[100];
        for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
        
        int start = 0, end = n - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++; end--;
        }
        for (int i = 0; i < n; i++) {
            printf("%d%c", arr[i], (i == n - 1) ? '\\n' : ' ');
        }
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Reverse array in place
    
    return 0;
}`,
    sampleStdin: '5\n1 2 3 4 5',
    expectedOutput: '5 4 3 2 1',
  },
  {
    id: 'c-min-max-array',
    language: 'c',
    title: 'Find Min and Max in Array',
    difficulty: 'Medium',
    topic: 'Arrays',
    question: 'Given an array of N integers, find and print the minimum and maximum elements.',
    hint: 'Initialize min and max with arr[0], then iterate through the remaining elements.',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1 && n > 0) {
        int val, min, max;
        scanf("%d", &val);
        min = max = val;
        for (int i = 1; i < n; i++) {
            scanf("%d", &val);
            if (val < min) min = val;
            if (val > max) max = val;
        }
        printf("Min: %d | Max: %d\\n", min, max);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    int n;
    // Find min and max
    
    return 0;
}`,
    sampleStdin: '5\n12 45 7 89 23',
    expectedOutput: 'Min: 7 | Max: 89',
  },
  {
    id: 'c-linear-search',
    language: 'c',
    title: 'Linear Search',
    difficulty: 'Medium',
    topic: 'Searching Algorithms',
    question: 'Read size N, array elements, and a target value. Print the 0-based index or -1 if not found.',
    hint: 'Iterate from index 0 to N-1; if arr[i] == target, print i and exit.',
    solution: `#include <stdio.h>

int main() {
    int n, target;
    if (scanf("%d", &n) == 1) {
        int arr[100];
        for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
        scanf("%d", &target);
        
        int found = -1;
        for (int i = 0; i < n; i++) {
            if (arr[i] == target) {
                found = i;
                break;
            }
        }
        printf("%d\\n", found);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    // Linear search implementation
    return 0;
}`,
    sampleStdin: '5\n10 20 30 40 50\n30',
    expectedOutput: '2',
  },
  {
    id: 'c-binary-search',
    language: 'c',
    title: 'Binary Search (Iterative)',
    difficulty: 'Medium',
    topic: 'Searching Algorithms',
    question: 'Perform binary search on a sorted array of N elements for target key X. Print index or -1.',
    hint: 'Compute mid = low + (high - low) / 2. If arr[mid] == key return mid.',
    solution: `#include <stdio.h>

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int n, key;
    if (scanf("%d", &n) == 1) {
        int arr[100];
        for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
        scanf("%d", &key);
        printf("%d\\n", binarySearch(arr, n, key));
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    // Binary search on sorted array
    return 0;
}`,
    sampleStdin: '6\n10 20 30 40 50 60\n40',
    expectedOutput: '3',
  },
  {
    id: 'c-sort-array',
    language: 'c',
    title: 'Bubble Sort Algorithm',
    difficulty: 'Medium',
    topic: 'Sorting Algorithms',
    question: 'Sort an array of N integers in ascending order using Bubble Sort.',
    hint: 'Compare adjacent elements arr[j] and arr[j+1] and swap if arr[j] > arr[j+1].',
    solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        int a[100];
        for (int i = 0; i < n; i++) scanf("%d", &a[i]);
        
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (a[j] > a[j + 1]) {
                    int t = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = t;
                }
            }
        }
        for (int i = 0; i < n; i++) {
            printf("%d%c", a[i], (i == n - 1) ? '\\n' : ' ');
        }
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

int main() {
    // Implement bubble sort
    return 0;
}`,
    sampleStdin: '5\n64 25 12 22 11',
    expectedOutput: '11 12 22 25 64',
  },

  // --- HARD (6) ---
  {
    id: 'c-tower-of-hanoi',
    language: 'c',
    title: 'Tower of Hanoi (Recursion)',
    difficulty: 'Hard',
    topic: 'Recursion & Stack',
    question: 'Solve Tower of Hanoi puzzle for N disks moving from peg A to peg C using auxiliary peg B.',
    hint: 'Recursively move n-1 disks from source to aux, move 1 disk from source to dest, then n-1 disks from aux to dest.',
    solution: `#include <stdio.h>

void solveHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    if (n == 0) return;
    solveHanoi(n - 1, from_rod, aux_rod, to_rod);
    printf("Move disk %d from %c to %c\\n", n, from_rod, to_rod);
    solveHanoi(n - 1, aux_rod, to_rod, from_rod);
}

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        solveHanoi(n, 'A', 'C', 'B');
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

void solveHanoi(int n, char from, char to, char aux) {
    // Recursive Tower of Hanoi
}

int main() {
    int n;
    if (scanf("%d", &n) == 1) solveHanoi(n, 'A', 'C', 'B');
    return 0;
}`,
    sampleStdin: '3',
    expectedOutput: 'Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C',
  },
  {
    id: 'c-pointer-manipulation',
    language: 'c',
    title: 'Pointer-Based In-Place String Reversal',
    difficulty: 'Hard',
    topic: 'Pointers',
    question: 'Reverse a C-string in-place using two pointer variables (char *left, char *right) without string.h.',
    hint: 'Advance right pointer to the character before \\0, then swap *left and *right while left < right.',
    solution: `#include <stdio.h>

void reverseString(char *str) {
    if (!str || !*str) return;
    char *left = str;
    char *right = str;
    while (*right) right++;
    right--; // Step back from null-terminator
    
    while (left < right) {
        char temp = *left;
        *left = *right;
        *right = temp;
        left++;
        right--;
    }
}

int main() {
    char s[100];
    if (scanf("%99s", s) == 1) {
        reverseString(s);
        printf("%s\\n", s);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

void reverseString(char *str) {
    // Reverse using pointer arithmetic
}

int main() {
    char s[100];
    if (scanf("%99s", s) == 1) {
        reverseString(s);
        printf("%s\\n", s);
    }
    return 0;
}`,
    sampleStdin: 'BTechEngineering',
    expectedOutput: 'gnireenignEhceTB',
  },
  {
    id: 'c-dynamic-array',
    language: 'c',
    title: 'Dynamic Array Allocation & Resizing',
    difficulty: 'Hard',
    topic: 'Dynamic Memory (malloc/realloc)',
    question: 'Allocate dynamic memory for N integers with malloc, read them, resize array to N+2 with realloc, and free.',
    hint: 'int *arr = (int*)malloc(n * sizeof(int)); arr = realloc(arr, newSize * sizeof(int)); free(arr);',
    solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        int *arr = (int*) malloc(n * sizeof(int));
        if (!arr) return 1;
        for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

        int *temp = (int*) realloc(arr, (n + 2) * sizeof(int));
        if (!temp) { free(arr); return 1; }
        arr = temp;
        scanf("%d %d", &arr[n], &arr[n + 1]);

        for (int i = 0; i < n + 2; i++) {
            printf("%d%c", arr[i], (i == n + 1) ? '\\n' : ' ');
        }
        free(arr);
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // malloc and realloc implementation
    return 0;
}`,
    sampleStdin: '3\n10 20 30\n40 50',
    expectedOutput: '10 20 30 40 50',
  },
  {
    id: 'c-linked-list',
    language: 'c',
    title: 'Singly Linked List Implementation',
    difficulty: 'Hard',
    topic: 'Data Structures',
    question: 'Implement a Singly Linked List in C: create nodes, insert N integers at the end, and print the list.',
    hint: 'struct Node { int data; struct Node *next; }; allocate nodes with malloc.',
    solution: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

void append(struct Node **head, int val) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = NULL;
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    struct Node *curr = *head;
    while (curr->next != NULL) curr = curr->next;
    curr->next = newNode;
}

int main() {
    int n, val;
    struct Node *head = NULL;
    if (scanf("%d", &n) == 1) {
        for (int i = 0; i < n; i++) {
            scanf("%d", &val);
            append(&head, val);
        }
        struct Node *curr = head;
        while (curr != NULL) {
            printf("%d -> ", curr->data);
            struct Node *toFree = curr;
            curr = curr->next;
            free(toFree);
        }
        printf("NULL\\n");
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };

int main() {
    // Linked list implementation
    return 0;
}`,
    sampleStdin: '3\n10 20 30',
    expectedOutput: '10 -> 20 -> 30 -> NULL',
  },
  {
    id: 'c-stack-array',
    language: 'c',
    title: 'Stack Implementation Using Array',
    difficulty: 'Hard',
    topic: 'Data Structures',
    question: 'Implement stack operations (push, pop, peek) using an array and print the popped sequence.',
    hint: 'Maintain top = -1. Push increments top; pop returns arr[top--].',
    solution: `#include <stdio.h>

#define MAX 100
int stack[MAX];
int top = -1;

void push(int x) { stack[++top] = x; }
int pop() { return stack[top--]; }

int main() {
    int n, val;
    if (scanf("%d", &n) == 1) {
        for (int i = 0; i < n; i++) {
            scanf("%d", &val);
            push(val);
        }
        printf("Popped: ");
        while (top >= 0) {
            printf("%d ", pop());
        }
        printf("\\n");
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

// Implement Stack with array
int main() {
    return 0;
}`,
    sampleStdin: '3\n5 15 25',
    expectedOutput: 'Popped: 25 15 5',
  },
  {
    id: 'c-queue-array',
    language: 'c',
    title: 'Queue Implementation Using Array',
    difficulty: 'Hard',
    topic: 'Data Structures',
    question: 'Implement FIFO queue enqueue and dequeue operations and display elements.',
    hint: 'Maintain front = 0 and rear = -1. Enqueue increments rear; dequeue increments front.',
    solution: `#include <stdio.h>

#define MAX 100
int queue[MAX];
int front = 0, rear = -1;

void enqueue(int x) { queue[++rear] = x; }
int dequeue() { return queue[front++]; }

int main() {
    int n, x;
    if (scanf("%d", &n) == 1) {
        for (int i = 0; i < n; i++) {
            scanf("%d", &x);
            enqueue(x);
        }
        printf("Dequeued: ");
        while (front <= rear) {
            printf("%d ", dequeue());
        }
        printf("\\n");
    }
    return 0;
}`,
    starterCode: `#include <stdio.h>

// Implement Queue with array
int main() {
    return 0;
}`,
    sampleStdin: '3\n1 2 3',
    expectedOutput: 'Dequeued: 1 2 3',
  },
];

export const cQuestions = C_PRACTICE_QUESTIONS;
