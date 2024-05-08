# CSS Specificity & Cascade

Understanding CSS specificity and the cascade is crucial for effectively styling web pages. Here's an explanation of these concepts:

## Specificity:

- Specificity determines which CSS rule takes precedence when multiple rules apply to the same element.
- It is calculated based on the selectors used in the CSS rules.
- Specificity is represented by four values: inline styles, IDs, classes/attributes/pseudo-classes, and elements.
- The higher the specificity value, the more precedence the rule has.
- Example:
  - Inline styles have the highest specificity.
  - #header has higher specificity than .header.
  - p has lower specificity than both #header and .header.

- Specificity is calculated as follows:
  - Inline styles: 1000
  - IDs: 100
  - Classes, attributes, and pseudo-classes: 10
  - Elements and pseudo-elements: 1
  - Specificity values are summed up for each selector in the CSS rule.

## Cascade:

- The cascade refers to the process of combining multiple CSS rules to determine the final styles applied to an element.
- Stylesheets can contain multiple rules that target the same element(s).
- The cascade determines which styles are applied based on specificity and order of appearance.
- Styles with higher specificity override styles with lower specificity.
- If two rules have the same specificity, the rule that appears last in the stylesheet takes precedence (called the "last rule wins" principle).
- Example:

```css
/* Rule 1 */
p {
    color: blue;
}

/* Rule 2 */
#header {
    color: red;
}
```

- In this example, if both Rule 1 and Rule 2 target the same p element, Rule 2 will override Rule 1 because IDs have higher specificity than elements.


Understanding CSS specificity and the cascade helps you write CSS rules more effectively and predictably. It allows you to control the appearance of elements on your web pages with precision.






