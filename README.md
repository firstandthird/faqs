<h1 align="center">FAQs</h1>

<p align="center">
  <a href="https://github.com/firstandthird/domodule/actions">
    <img src="https://img.shields.io/github/workflow/status/firstandthird/faqs/Lint/main?label=Lint&style=for-the-badge" alt="Lint Status"/>
  </a>
  <img src="https://img.shields.io/npm/v/firstandthird/faqs.svg?label=npm&style=for-the-badge" alt="NPM" />
</p>

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

Full [example here](./examples/index.html).

---

<a href="https://firstandthird.com"><img src="https://firstandthird.com/_static/ui/images/safari-pinned-tab-62813db097.svg" height="32" width="32" align="right"></a>

_A [First + Third](https://firstandthird.com) Project_
