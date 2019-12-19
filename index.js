const fs = require('fs')
const path = require('path')

let customLog1 = false;
let customLog0 = false;

module.exports.checkPackage = function (package) {
  if (fs.existsSync(path.join(process.cwd(), 'node_modules', package))) {
    if (customLog1) {
      console.log(customLog1)
    }
    return true;
  } else {
    if (customLog0) {
      console.log(customLog0)
    }
    return false;
  }
}

module.exports.checkPackageVer = function (package, version) {
    if (version) {
      if (fs.existsSync(path.join(process.cwd(), 'node_modules', package))) {
        if (fs.existsSync(path.join(process.cwd(), 'node_modules', package, 'package.json'))) {
            var jsonPackageFile = fs.readFileSync(fs.existsSync(path.join(process.cwd(), 'node_modules', package, 'package.json')))
            var jsonPackageObj = JSON.parse(jsonPackageFile);
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
            if (customLog0) {
              console.log(customLog0)
            }
            return false;
          }
        }
      }

      module.exports.checkPackage_try = function (package) {
        try {
          return require(package);
        } catch (error) {
          return error;
        }
      }

      module.exports.setSetting = function (setting, value) {
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