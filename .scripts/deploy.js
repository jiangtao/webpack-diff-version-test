let fs = require('fs')
let path = require('path')
let ghpages = require('gh-pages')
let dir = path.resolve(path.join(__dirname, '../dist'))
let message = process.argv.slice(2).pop() || 'build: deploy'
ghpages.publish(dir, {
    message
}, function (err) {
    if (err) throw err
    console.log('done.')
})