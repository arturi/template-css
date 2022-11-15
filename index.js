var insertCss = require('insert-css')

module.exports = css

function css (template) {
  var args = arguments

  var expressions = Object.keys(args).map(function (i) {
    return args[i]
  })
  expressions.shift()

  var style = template.reduce(function (accumulator, part) {
    return accumulator + expressions.shift() + part
  })

  if (window && window.document) {
    insertCss(style)
  }

  return style
}
