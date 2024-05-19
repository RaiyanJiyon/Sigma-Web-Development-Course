# JavaScript Strings

Strings in JavaScript are used to represent and manipulate text. They are a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). JavaScript provides various methods and properties to work with strings efficiently.

## Creating Strings
You can create strings using single quotes, double quotes, or template literals.

```js
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;
```

## String Properties
`length:` The length property returns the number of characters in a string.

```js
let str = "Hello";
console.log(str.length); // Output: 5
```

## String Methods
JavaScript provides many methods to manipulate and work with strings.

### Accessing Characters
- `charAt(index):` Returns the character at the specified index.


  ```js
  let str = "Hello";
  console.log(str.charAt(0)); // Output: H
  ```

- `charCodeAt(index):` Returns the Unicode of the character at the specified index.

  ```js
  console.log(str.charCodeAt(0)); // Output: 72
  ```

### String Concatenation

- `concat():` Combines two or more strings.

   ```js
   let str1 = "Hello";
   let str2 = "World";
   let result = str1.concat(' ', str2);
   console.log(result); // Output: Hello World
   ```
- `Template Literals:` Allow embedding expressions within string literals using backticks and ${} syntax.

   ```js
   let name = "Alice";
   let greeting = `Hello, ${name}!`;
   console.log(greeting); // Output: Hello, Alice!
   ```

### Substring Extraction

- `substring(start, end):` Extracts characters from start to end (not inclusive).

   ```js
   let str = "Hello, World!";
   console.log(str.substring(0, 5)); // Output: Hello
   ```

- `slice(start, end):` Similar to substring but also supports negative indices.

   ```js
   console.log(str.slice(-6, -1)); // Output: World
   ```

- `substr(start, length):` Extracts length characters from start

   ```js
   console.log(str.substr(7, 5)); // Output: World
   ```

### Searching Strings

- `indexOf(substring):` Returns the index of the first occurrence of substring.
   ```js
   console.log(str.indexOf("World")); // Output: 7
   ```

- `lastIndexOf(substring):` Returns the index of the last occurrence of substring.

   ```js
   console.log(str.lastIndexOf("o")); // Output: 8
   ```

- `includes(substring):` Checks if substring is found within the string.

   ```js
   console.log(str.includes("Hello")); // Output: true
   ```

- `startsWith(substring):` Checks if the string starts with substring.

   ```js
   console.log(str.startsWith("Hello")); // Output: true
   ```

- `endsWith(substring):` Checks if the string ends with substring.

   ```js
   console.log(str.endsWith("!")); // Output: true
   ```

### Modifying Strings

- `toUpperCase():` Converts all characters to uppercase.

   ```js
   console.log(str.toUpperCase()); // Output: HELLO, WORLD!
   ```

- `toLowerCase():` Converts all characters to lowercase.

   ```js
   console.log(str.toLowerCase()); // Output: hello, world!
   ```

- `trim():` Removes whitespace from both ends of the string.

   ```js
   let strWithSpaces = "   Hello, World!   ";
   console.log(strWithSpaces.trim()); // Output: Hello, World!
   ```

- `replace(searchValue, newValue):` Replaces the first occurrence of searchValue with newValue.

   ```js
   console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!
   ```

- `replaceAll(searchValue, newValue):` Replaces all occurrences of searchValue with newValue.

   ```js
   let repeatedStr = "Hello, World! World!";
   console.log(repeatedStr.replaceAll("World", "JavaScript")); // Output: Hello, JavaScript! JavaScript!
   ```

### Splitting and Joining Strings

- `split(delimiter):` Splits the string into an array of substrings.

  ```js
  let csv = "one,two,three";
  let arr = csv.split(",");
  console.log(arr); // Output: ["one", "two", "three"]
  ```

- `join(separator):` Joins an array of strings into a single string.

  ```js
  let arr2 = ["one", "two", "three"];
  let joinedStr = arr2.join(" - ");
  console.log(joinedStr); // Output: one - two - three
  ```

### String Escaping
To include special characters in strings, you can use escape sequences.

```js
let str = "He said, \"Hello, World!\"";
console.log(str); // Output: He said, "Hello, World!"
```

### Multiline Strings
Using template literals, you can create multiline strings easily.

```js
let multilineStr = `This is line 1
This is line 2
This is line 3`;
console.log(multilineStr);
```

## Conclusion
JavaScript strings are versatile and come with a rich set of methods to manipulate text. Understanding these methods allows you to handle and process text effectively in your applications. Whether you are concatenating, searching, or modifying strings, JavaScript provides powerful tools to meet your needs.