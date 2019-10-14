const fs = require('fs')
const path = require('path')

let customLog1 = false;
let customLog0 = false;

export.checkPackage = function(package) {
  if (fs.existsSync(path.join(process.cwd(), 'node_modules', package))) {
    return true
    if (customlog1) {
      console.log(customLog1)
    }
  } else {
    return false
    if (customLog0) {
      console.log(customLog0)
    }
  }
}

export.setSetting = function(setting, value) {
  switch (setting) {
    case "customlog1":
      customLog1 = value;
      break;
    case "customLog0":
    customLog0 = value;
    break;
    default:

  }
}
