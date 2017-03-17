# template-css

Write CSS in template strings and it gets injected to DOM like :sparkles: Like so:


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

Atom (and possibly other editors) will automatically syntax highlight your CSS inside template strings, when passed to a function called `css`.

You can also parse your CSS with any PostCSS plugin.

## Optional `babel-plugin-template-strings-postcss`

Runs any PostCSS plugin on the contents of your template string.

**Example .babelrc**
```js
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
```

## See also
* https://github.com/shama/bel
* https://github.com/rtsao/csjs
