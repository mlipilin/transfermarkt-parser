const fs = require('fs')
const path = require('path')

const PACKAGE_JSON_PATH = path.join(__dirname, 'build', 'package.json')
const packageJson = require(PACKAGE_JSON_PATH)

fs.writeFileSync(
  PACKAGE_JSON_PATH,
  JSON.stringify(
    {
      ...packageJson,
      main: 'index.js',
    },
    null,
    2
  )
)
