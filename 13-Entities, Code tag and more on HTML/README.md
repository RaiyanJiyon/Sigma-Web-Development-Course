# Entities, Code tag and more on HTML

In HTML, entities are special characters that have a predefined meaning and are represented by their entity name or entity number. They are used to display characters that are reserved for HTML syntax or have special significance. Here are some commonly used entities:

Character Entities:
- `&lt;` for < (less than)
- `&gt;` for > (greater than)
- `&amp;` for & (ampersand)
- `&quot;` for " (double quote)
- `&apos;` for ' (apostrophe/single quote)

Special Characters:
- `&copy;` for © (copyright symbol)
- `&reg;` for ® (registered trademark symbol)
- `&trade;` for ™ (trademark symbol)
- `&nbsp;` for a non-breaking space
- `&euro;` for € (Euro currency symbol)
- `&pound;` for £ (British Pound currency symbol)

Using entities ensures that special characters are correctly rendered in HTML documents and helps avoid parsing errors.

The `<code>` tag is used to define a piece of computer code. It is typically used to display code snippets or inline code within a paragraph. The `<code>` element does not add any semantic meaning to its content, but it indicates that the enclosed text should be interpreted as code.

Example:

```html
<p>This is an example of inline code: <code>var x = 5;</code></p>
```

Output:

```lua
This is an example of inline code: var x = 5;
```

Additionally, HTML provides tags like `<pre>` and `<samp>` for displaying preformatted text and sample output, respectively, which are often used in conjunction with `<code>`.

The `<pre>` tag preserves whitespace and line breaks, making it suitable for displaying code blocks.
The `<samp>` tag is used to represent sample output or user input.


Example:

```html
<pre>
<code>
function greet(name) {
    return 'Hello, ' + name + '!';
}
</code>
</pre>

<p>Sample output: <samp>Hello, World!</samp></p>
```

Output:

```lua
function greet(name) {
    return 'Hello, ' + name + '!';
}

Sample output: Hello, World!
```

These elements are useful for presenting code examples and ensuring that code formatting is preserved in HTML documents.