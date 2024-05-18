# Introduction to JavaScript & Installing Node.js 

# Introduction to JavaScript
JavaScript is a versatile and widely-used programming language primarily known for its role in web development. It allows developers to create dynamic and interactive content on websites. JavaScript can be run on the client side in the browser as well as on the server side using platforms like Node.js.

## Key Features of JavaScript:
- **Interactivity:** JavaScript enables the creation of interactive elements on websites, such as forms, animations, and dynamic content updates.
- **Event Handling:** JavaScript can respond to user actions like clicks, mouse movements, and keyboard inputs.
- **DOM Manipulation:** JavaScript can access and modify the Document Object Model (DOM), allowing for dynamic changes to the structure and content of web pages.
- **Asynchronous Programming:** JavaScript supports asynchronous operations through callbacks, promises, and async/await, allowing for non-blocking code execution.
- **Versatility:** JavaScript can be used for both front-end (in the browser) and back-end (using Node.js) development.

## Installing Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a browser, making it possible to create server-side applications with JavaScript.

### Steps to Install Node.js:

1. **Download the Installer:**
   - Visit the [Node.js official website](https://nodejs.org/).
   - Download the LTS (Long Term Support) version for your operating system. The website usually recommends the best version for your system.

2. **Run the Installer:**
   - Open the downloaded installer file and follow the instructions to install Node.js.
   - The installer will include Node.js and npm (Node Package Manager).

3. **Verify the Installation:**
   - Open a terminal or command prompt.
   - Check the installed version of Node.js by running:
     ```sh
     node -v
     ```
   - Check the installed version of npm by running:
     ```sh
     npm -v
     ```
4. **Test the Installation:**
   - Create a simple JavaScript file to test the installation:
     ```
     // Create a file named test.js with the following content
     console.log('Node.js is working!');
     ```
   - Run the file using Node.js:

     ```
     node test.js
     ```

   - You should see the output Node.js is working! in the terminal.

## Example of Using JavaScript in the Browser
Here's a basic example of JavaScript interacting with HTML:

### HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Example</title>
</head>
<body>
  <h1 id="greeting">Hello, World!</h1>
  <button onclick="changeGreeting()">Click me</button>

  <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js):

```js
function changeGreeting() {
  document.getElementById('greeting').textContent = 'Hello, JavaScript!';
}
```

In this example, clicking the button will change the text content of the <h1> element from "Hello, World!" to "Hello, JavaScript!".

## Example of Using Node.js
Here's a basic example of a simple Node.js server:

Create a file named server.js:

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Run the server:

```
node server.js
```

Navigate to `http://127.0.0.1:3000/` in your web browser, and you should see "Hello, World!" displayed.

These examples and steps should give you a solid starting point for working with JavaScript both in the browser and on the server using Node.js.