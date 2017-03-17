# template-css

Write CSS in template strings and it gets injected to DOM like :sparkles: optionally parse with any PostCSS plugin. Like so:


```js
var css = require('template-css')

var colors = {
  red: '#c0392b',
  blue: '#2980b9'
}

var style = css`
  body {
    background-color: ${colors.red};
  }
  
  .title {
    font-size: 3em;
    font-weight: bold;
    color: ${colors.blue};
  }
`
```

## Optional `babel-plugin-template-strings-postcss`

Runs any PostCSS plugin on the contents of your template string.

**Example .babelrc**

{
  "plugins": [
    ["babel-plugin-template-strings-postcss", {
      "plugins": [
        tagName: "css",
        ["autoprefixer", {"browsers": ["last 2 versions"]}],
        ["postcss-class-prefix", "MyPrefix-"],
        "postcss-nested"
      ]
    }]
  ]
}
