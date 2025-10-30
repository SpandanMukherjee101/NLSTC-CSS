
# CSS Utility Classes

A lightweight CSS utility library for margins, paddings, flexbox layouts, text alignment, and animations. This package simplifies styling by providing pre-defined utility classes.

## Installation

Install via npm:

```bash
npm i nlstc-css
```

## Usage

Import the CSS file in your project:

### In HTML
```html
<link rel="stylesheet" href="node_modules/nlstc.css">
```

### In JavaScript/TypeScript
```javascript
import 'nlstc.css';
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
<div class="m-sm-4px mt-lg-32px">Responsive Spacing</div>
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
Predefined animations for various visual effects:

- `.fade-in`: Fade in effect.  
- `.spin`: Rotating effect.  
- `.bounce`: Bounce effect.  
- `.slide-in`: Slide in from the left.  
- `.zoom-in`: Zoom in effect.  
- `.zoom-out`: Zoom out effect.  
- `.shake`: Shake horizontally.  
- `.pulse`: Smooth pulsing effect.  
- `.rotate-in`: Rotates while fading in.  
- `.flip`: 3D flip rotation effect.  
- `.slide-down`: Slides down from the top.  
- `.slide-up`: Slides up from the bottom.  
- `.wobble`: Wobbles side to side with rotation.  
- `.bounce-in`: Bounces into view with scaling.  
- `.flash`: Repeated flashing effect.  
- `.swing`: Swings back and forth.  
- `.fade-in-down`: Fades in while sliding down.  
- `.fade-out-up`: Fades out while sliding upward.  
- `.heartbeat`: Heartbeat-like pulsing effect.  
- `.rubber-band`: Stretchy elastic effect.  
- `.light-speed-in`: Slides in quickly with a skewed light-speed effect.  
- `.light-speed-out`: Slides out quickly with a skewed light-speed exit.

```html
<div class="fade-in">Fades in on load</div>
<div class="spin">Spins continuously</div>
```

## Customization

Modify the source CSS file to add or adjust classes as needed.

## License

This project is licensed under the MIT License.
