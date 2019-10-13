const fs = require('fs')
const path = require('path')

export.checkPackage = function(package) {
  if (fs.existsSync(path.join(process.cwd(), 'node_modules', package))) {
    return true
  } else {
    return false
  }
}
