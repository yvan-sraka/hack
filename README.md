# `hack.css`

## Install

```bash
$ yarn add hack
```

Option #1: Use any pre-processor

```js
import 'hack'
```

Option #2: hot-link the css files:

```html
<link rel="stylesheet" href="/path/to/hack.css">

<!-- markdown theme -->
<body class="hack"></body>

<!-- standard theme -->
<link rel="stylesheet" href="/path/to/standard.css">
<body class="standard"></body>

<!-- dark theme -->
<link rel="stylesheet" href="/path/to/dark.css">
<body class="hack dark"></body>

<!-- dark-grey theme -->
<link rel="stylesheet" href="/path/to/dark-grey.css">
<body class="hack dark-grey"></body>

<!-- solarized-dark theme -->
<link rel="stylesheet" href="/path/to/solarized-dark.css">
<body class="hack solarized-dark"></body>
```

It's also available on [CDNJS](https://cdnjs.com/libraries/hack), [jsDelivr](http://cdn.jsdelivr.net/npm/hack/dist/) and [UNPKG](https://unpkg.com/hack/).

For more usages and style guideline head to [the website](http://hackcss.egoist.moe/) 🎉

## Development

```bash
$ yarn dev

$ yarn build
```

## License

MIT
