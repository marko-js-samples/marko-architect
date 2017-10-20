require('marko/compiler').configure({
  writeToDisk: false
})

const arc = require('@architect/functions')
const template = require('./page')

require('lasso').configure(require('./lasso-config'))

function route (req, res) {
  template.render({ name: 'Austin' })
    .then(out => res({ html: out.getOutput() }))
    .catch(err => res({ status: 500 }))
}

exports.handler = arc.html.get(route)
