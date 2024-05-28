# JavaScript Callbacks & Promises

In JavaScript, callbacks and promises are essential for handling asynchronous operations. Asynchronous programming allows your code to perform tasks like fetching data from a server or reading files without blocking the main thread, making your applications more responsive and efficient.

## Callbacks
A callback is a function passed as an argument to another function, which is then executed within the outer function to complete some kind of routine or action.

### Example: Using Callbacks
Here's a simple example of using a callback to handle an asynchronous operation:

```js
function fetchData(callback) {
  setTimeout(() => {
    // Simulate an API call
    let data = { id: 1, name: 'John Doe' };
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log('Data received:', data);
}

fetchData(handleData);
```

In this example, `fetchData` simulates fetching data with a delay, and `handleData` is called when the data is ready.

### Handling Errors with Callbacks
To handle errors, you can pass an error object as the first argument in the callback:

```js
function fetchData(callback) {
  setTimeout(() => {
    let error = null;
    let data = { id: 1, name: 'John Doe' };

    if (Math.random() < 0.5) {
      error = 'Error occurred';
      data = null;
    }

    callback(error, data);
  }, 2000);
}

function handleData(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('Data received:', data);
  }
}

fetchData(handleData);
```

## Promises
Promises provide a more powerful and flexible way to handle asynchronous operations. A promise represents a value that may be available now, or in the future, or never.

### Creating a Promise
To create a promise, use the Promise constructor and pass in a function that takes two arguments: `resolve` and `reject`.

```js
let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = { id: 1, name: 'John Doe' };

    if (Math.random() < 0.5) {
      resolve(data);
    } else {
      reject('Error occurred');
    }
  }, 2000);
});

fetchData
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error(error);
  });
```

### Chaining Promises
Promises can be chained to handle multiple asynchronous operations sequentially:

```js
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = { id: 1, name: 'John Doe' };

            // Simulate a random error occurring
            if (Math.random() < 0.5) {
                resolve(data); // Resolving the promise with data
            } else {
                reject('Fetch error: Data could not be fetched'); // Rejecting the promise with an error message
            }
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a random error occurring during processing
            if (Math.random() < 0.5) {
                data.processed = true; // Processing the data
                resolve(data); // Resolving the promise with processed data
            } else {
                reject('Process error: Data could not be processed'); // Rejecting the promise with an error message
            }
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log('Data received:', data);
        return processData(data); // Returning the promise from processData
    })
    .then(processedData => {
        console.log('Processed data:', processedData);
    })
    .catch(error => {
        console.error(error); // Handling any error that occurs in the promise chain
    });

```

### Using Async/Await
Async/await is a more readable and concise way to work with promises. Functions can be marked with the `async` keyword, and within them, you can use the `await` keyword to wait for a promise to resolve.

```js
async function fetchDataAndProcess() {
  try {
    let data = await fetchData();
    console.log('Data received:', data);
    let processedData = await processData(data);
    console.log('Processed data:', processedData);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAndProcess();
```

## Example: Callback to Promise Conversion
Here's how you can convert a callback-based function to return a promise:

```js
function fetchData(callback) {
  setTimeout(() => {
    let error = null;
    let data = { id: 1, name: 'John Doe' };

    if (Math.random() < 0.5) {
      error = 'Error occurred';
      data = null;
    }

    callback(error, data);
  }, 2000);
}

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    fetchData((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

fetchDataPromise()
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error(error);
  });
```

## Summary

### Callbacks
Functions passed as arguments to other functions and executed after some operation is completed.

**Pros:** Simple and straightforward for small tasks.  
**Cons:** Can lead to "callback hell" or "pyramid of doom" with nested callbacks.

### Promises
Objects representing the eventual completion (or failure) of an asynchronous operation.

**Methods:** `then`, `catch`, `finally`.  
**Pros:** More readable than nested callbacks, error handling via `catch`.  
**Cons:** Still can become complex with many chained promises.

### Async/Await
Syntactic sugar built on top of promises, making asynchronous code look synchronous.

**Pros:** Simplifies promise chaining, more readable and easier to write.  
**Cons:** Requires modern JavaScript environments or transpilation.

By using callbacks, promises, and async/await, you can efficiently handle asynchronous operations in JavaScript, improving the performance and responsiveness of your web applications.
