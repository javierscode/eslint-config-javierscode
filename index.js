const eslintrc = require('./src/base.js')
const typescript = require('./src/typescript.js')
const react = require('./src/react-typescript.js')
const reactTypescript = require('./src/react-typescript.js')

module.exports = { default: eslintrc, typescript, react, 'react-typescript': reactTypescript }