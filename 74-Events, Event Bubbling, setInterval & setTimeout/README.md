# Events, Event Bubbling, setInterval & setTimeout


JavaScript events are actions or occurrences that happen in the browser, such as a user clicking a button, submitting a form, or loading a page. JavaScript provides ways to handle these events, and understanding how to work with them is crucial for creating interactive web applications. Additionally, event bubbling, `setInterval`, and `setTimeout` are important concepts for managing events and timing in JavaScript.

## Handling Events
### addEventListener
The `addEventListener` method is used to attach an event handler to an element.

```js
let button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button was clicked!');
});
```

### removeEventListener
The removeEventListener method removes an event handler that was attached with addEventListener.

```js
function handleClick() {
  alert('Button was clicked!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

## Event Bubbling
Event bubbling is a mechanism where an event starts from the target element and then bubbles up to its parent elements and other ancestors. This means that if you have multiple nested elements with event handlers, the event will trigger handlers on the target element and then propagate to its parent elements unless stopped.

```html
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', function() {
    alert('Parent clicked!');
  });

  document.getElementById('child').addEventListener('click', function(event) {
    alert('Child clicked!');
    event.stopPropagation(); // Stop the event from bubbling up
  });
</script>
```

In this example, clicking the button triggers both the button's and the parent's event handlers unless `stopPropagation` is called.

## setTimeout
The setTimeout function is used to execute a function after a specified delay (in milliseconds).

```js
setTimeout(function() {
  console.log('This message will be displayed after 2 seconds');
}, 2000);
```

You can cancel a timeout using `clearTimeout`.

```js
let timeoutId = setTimeout(function() {
  console.log('This will not be displayed');
}, 2000);

clearTimeout(timeoutId);
```

## setInterval
The `setInterval` function is used to repeatedly execute a function at specified intervals (in milliseconds).

```js
let intervalId = setInterval(function() {
  console.log('This message is displayed every 2 seconds');
}, 2000);
```

You can cancel an interval using `clearInterval`.

```js
clearInterval(intervalId);
```

### Examples
#### Example: Click Event with Event Bubbling

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Bubbling Example</title>
</head>
<body>
  <div id="outer" style="padding: 20px; border: 1px solid black;">
    Outer Div
    <div id="inner" style="padding: 20px; border: 1px solid red;">
      Inner Div
    </div>
  </div>

  <script>
    document.getElementById('outer').addEventListener('click', function() {
      alert('Outer div clicked!');
    });

    document.getElementById('inner').addEventListener('click', function(event) {
      alert('Inner div clicked!');
      event.stopPropagation(); // Prevents the outer div click event
    });
  </script>
</body>
</html>
```

#### Example: setTimeout and setInterval

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>setTimeout and setInterval Example</title>
</head>
<body>
  <button id="startInterval">Start Interval</button>
  <button id="stopInterval">Stop Interval</button>
  <button id="startTimeout">Start Timeout</button>

  <script>
    let intervalId;

    document.getElementById('startInterval').addEventListener('click', function() {
      intervalId = setInterval(function() {
        console.log('Interval running every 2 seconds');
      }, 2000);
    });

    document.getElementById('stopInterval').addEventListener('click', function() {
      clearInterval(intervalId);
      console.log('Interval stopped');
    });

    document.getElementById('startTimeout').addEventListener('click', function() {
      setTimeout(function() {
        console.log('Timeout triggered after 2 seconds');
      }, 2000);
    });
  </script>
</body>
</html>
```

### Summary

- `Handling Events:` Use addEventListener and removeEventListener to manage event listeners.
- `Event Bubbling:` Understand how events propagate from child to parent elements and how to stop this propagation using event.stopPropagation().
- `setTimeout:` Execute a function after a specified delay, and cancel it using clearTimeout.
- `setInterval:` Execute a function repeatedly at specified intervals, and cancel it using clearInterval.

Mastering these concepts will enable you to create dynamic and interactive web applications with JavaScript.