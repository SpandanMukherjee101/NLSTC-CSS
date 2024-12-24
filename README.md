
# CSS Utility Classes

A lightweight CSS utility library for margins, paddings, flexbox layouts, text alignment, and animations. This package simplifies styling by providing pre-defined utility classes.

## Installation

Install via npm:

```bash
npm install css-utility-classes
```

## Usage

Import the CSS file in your project:

### In HTML
```html
<link rel="stylesheet" href="node_modules/css-utility-classes/dist/styles.css">
```

### In JavaScript/TypeScript
```javascript
import 'css-utility-classes/dist/styles.css';
```

## Features

### Margins and Paddings
Utility classes for consistent spacing:
- `.m-{size}`: Sets margin.
- `.p-{size}`: Sets padding.
- Sizes: `0`, `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`.

Examples:
```html
<div class="m-16px p-8px">Content</div>
```

### Responsive Variants
Use `sm`, `md`, `lg`, and `xl` for responsive spacing:
```html
<div class="m-sm-4px m-lg-32px">Responsive Spacing</div>
```

### Flexbox Utilities
- `.flex`: Sets `display: flex`.
- `.inline-flex`: Sets `display: inline-flex`.
- `.flex-row` / `.flex-column`: Set flex direction.
- `.justify-center` / `.justify-between`: Align items horizontally.
- `.align-center` / `.align-start`: Align items vertically.

### Text Utilities
- `.text-left`, `.text-center`, `.text-right`: Text alignment.
- `.font-bold`, `.font-normal`, `.font-light`: Font weights.

### Animations
Predefined animations for basic effects:
- `.fade-in`: Fade in effect.
- `.spin`: Rotating effect.
- `.bounce`: Bounce effect.
- `.slide-in`: Slide in effect.
- `.zoom-in`: Zoom in effect.
- `.zoom-out`: Zooom out effect.
- `.shake`: Shake effect.
- `.pulse`: Pulse effect.

```html
<div class="fade-in">Fades in on load</div>
<div class="spin">Spins continuously</div>
```

## Customization

Modify the source CSS file to add or adjust classes as needed.

## License

This project is licensed under the MIT License.
