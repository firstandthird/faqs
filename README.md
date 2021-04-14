# FAQs

Accessible FAQs module.

## Installation

```sh
npm install @firstandthird/faqs
```

## Usage

In your project import the library:

```javascript
import '@firstandthird/faqs'

// or

import Faqs from '@firstandthird/faqs'
```

## Module Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `animateHeight` | _{Boolean}_ | `true` | Enable expand/collapse height animation (requires CSS, [see example](styles.css)) |
| `closeOthers` | _{Boolean}_ | `true` | Only allows one expanded element at a time |
| `hash` | _{Boolean}_ | `true` | Expand elements whose ID matches the current URL hash |

## Example markup

```html
<dl data-module="Faqs"
    data-module-animate-height="false"
    data-module-close-others="true"
    data-module-hash="true">
  <dt>
    <button
      type="button"
      aria-expanded="false"
      aria-controls="question-1"
      data-action="toggle">Question 1?</button>
  </dt>
  <dd id="question-1" aria-hidden="true">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  </dd>
</dl>
```

Full (example here)[./examples/index.html].
