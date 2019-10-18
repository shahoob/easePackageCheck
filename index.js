const fs = require('fs')
const path = require('path')

let customLog1 = false;
let customLog0 = false;

exports.checkPackage = function(package) {
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

exports.checkPackageVer = function(package, version) {
  if (version) {
    if (fs.existsSync(path.join(process.cwd(), 'node_modules', package))) {
      if (fs.existsSync(path.join(process.cwd(), 'node_modules', package, 'package.json')) {
        var jsonPackageFile = fs.readFileSync(fs.existsSync(path.join(process.cwd(), 'node_modules', package, 'package.json'))
        var jsonPackageObj = JSON.parse(jsonPackageFile)
        if (jsonPackageObj.version() == version) {
          return true;
        } else {
          return "outdated";
        }
      }
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
}

exports.setSetting = function(setting, value) {
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
