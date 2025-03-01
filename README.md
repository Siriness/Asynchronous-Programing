# JavaScript Asynchronous Programming Exercises

This repository contains a collection of exercises that demonstrate asynchronous programming techniques in JavaScript. These exercises were designed to help developers understand and master the concepts of asynchronous JavaScript, promises, and the async/await syntax.

## Overview

Asynchronous programming is a critical skill for JavaScript developers, especially for web applications that need to fetch data, handle user interactions, and perform operations without blocking the main thread. This repository provides practical examples of common asynchronous patterns.

## Exercises Included

The repository includes the following tasks:

### Task 1: Iterating with Async/Await
An implementation of an async function that iterates through an array, logging each value with a 1-second delay between logs.

```javascript
async function iterateWithAsyncAwait(array) {
  // Implementation that creates a delay between logging each item
}
```

### Task 2: Awaiting a Call
A function that simulates fetching data from an API, using await to wait for the response before processing.

```javascript
async function awaitCall() {
  // Simulates an API call and waits for the response
}
```

### Task 3: Handling Errors with Async/Await
An extension of the previous function that adds robust error handling for API requests.

```javascript
async function awaitCallWithErrorHandling() {
  // Handles potential errors during API calls
}
```

### Task 4: Chaining Async/Await
A demonstration of how to chain multiple async functions sequentially using await.

```javascript
async function chainedAsyncFunctions() {
  // Chains multiple async operations in sequence
}
```

### Task 5: Awaiting Concurrent Requests
Shows how to make multiple API calls concurrently using Promise.all() and process the combined results.

```javascript
async function concurrentRequests() {
  // Makes multiple API calls concurrently
}
```

### Task 6: Awaiting Parallel Calls
A function that fetches data from multiple URLs in parallel and handles both successful and failed requests.

```javascript
async function parallelCalls(urls) {
  // Fetches data from multiple URLs in parallel
}
```

## Key Concepts Demonstrated

- Creating and using Promises
- Using async/await syntax
- Error handling in asynchronous code
- Sequential vs. concurrent operations
- Working with Promise.all() and Promise.allSettled()
- Simulating network delays and API calls
- Handling partial success scenarios

## Getting Started

### Prerequisites
- Basic knowledge of JavaScript
- Node.js installed on your machine

### Installation
1. Clone this repository:
```
git clone https://github.com/yourusername/async-js-exercises.git
```

2. Navigate to the repository folder:
```
cd async-js-exercises
```

3. Run the exercises using Node.js:
```
node index.js
```

## Learning Path

For those new to asynchronous programming, I recommend following these exercises in order:

1. Start with Task 1 to understand the basic async/await syntax
2. Move to Task 2 to see how to wait for API responses
3. Learn error handling with Task 3
4. Understand sequential operations with Task 4
5. Explore concurrent operations with Task 5
6. Finally, tackle more complex parallel calls with Task 6

## Further Resources

To deepen your understanding of asynchronous JavaScript, check out these resources:

- [MDN Web Docs: Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [JavaScript.info: Promises, async/await](https://javascript.info/async)
- [Node.js Documentation: Promises](https://nodejs.org/api/promises.html)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Feel free to submit pull requests with additional exercises or improvements to the existing ones. For major changes, please open an issue first to discuss what you would like to change.
