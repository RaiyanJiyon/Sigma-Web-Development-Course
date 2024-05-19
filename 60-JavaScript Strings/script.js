let str = "Hello";

console.log(str.length)


console.log(str.charAt(2))
console.log(str.charCodeAt(0))

let str1 = "Hello";
let str2 = "World";

console.log(str1.concat(' ', str2))


let first_name = "Raiyan";
let last_name = "Jiyon";

let full_name = `My name is ${first_name} ${last_name}`;
console.log(full_name);

let string = "Hello, World!";

console.log(string.slice(0, 5));
console.log(string.slice(-6, -1));

console.log(string.substr(7, 5));

console.log(string.indexOf("World"))
console.log(string.lastIndexOf("o"))

console.log(string.includes("Hello"))

console.log(string.startsWith("H"))
console.log(string.endsWith("!"))

console.log(string.toUpperCase())
console.log(string.toLowerCase())

let strWithSpaces = "    Hello, World!  ";
console.log(strWithSpaces.trim())

console.log(string.replace("World!", "JavaScript"))

let js = "Hello JavaScript JavaScript"

console.log(js.replaceAll("JavaScript", "CSS"))


let csv = "one, two, three";
let arr =  csv.split(",");
console.log(arr)

let arr2 = [ 'one', ' two', ' three' ];

let joinString = arr2.join(" - ");
console.log(joinString);


let multilineStr = `line 1,
line 2,
line 3`;

console.log(multilineStr);