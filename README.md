# easePackageCheck [![Build Status](https://travis-ci.com/shahoob/easePackageCheck.svg?branch=master)](https://travis-ci.com/shahoob/easePackageCheck) ![npm](https://img.shields.io/npm/dt/easepackagecheck)
A package made users easy to check packages.

## How to `test` it out
Simple, just run `npm test` nor `npm run test`. they do the same thing

## How to install
1. Clone this repository by running `git clone https;//github.com/shahoob/easePackageCheck.git`
2. run `npm install`

Now installing it from [npm](npmjs.com) is now possible

It's simple as `npm install easepackagecheck` right?

## What's New?
In `1.2.2`:
i also patched another one, Thanks to Visual Studio Code
There are syntax errors now fixed.

Again, it `woooshed` over my head, got'em with help of Visual Studio Code.

In `1.2.1`:

I patched a 1 problem that i missed just like it woooshed over my head then got it now.

### I mean what's the problem?
inside file called `index.js` it contains the `require` consts like `fs`,

This is where all let the `magic` happen:
The `export`, but instead it's only wrong and only vaild object is `exports`

So of course, That's where the famous thing happened on the tester

The `SyntaxError: Unexpected token 'export'`
But why then?

But since [Node.js](nodejs.com) Displayed:
```
export.checkPackage = function(package) {
^^^^^^
```
It told that the `export` isn't a vaild syntax.

So Here's What i did to patch it to the problems

### How being able to patch the syntax error

By replacing all `export` with `exports` on the objects
Or `changing the export with exports`
Still not being able to understand?
Here's The `Before` And `After`

#### The `Before` And `After`

##### `Before`

```javascript

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

export.checkPackageVer = function(package, version) {
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

```

##### `After`

```javascript
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

```


In `1.2.0`:

An Another New function is added which allows users to check package's version using

```javascript
easepackagecheck.checkPackageVer(package, version)
```

In `1.1.0`:

An New function is added which allows users to set settings using

```javascript
easepackagecheck.setSetting(setting, value)
```

There 2 settings available

1. `customlog1`

When this is set, easePackageCheck will log the custom text when it detects the package you want
Defaults to false

2. `customlog0`

same as customLog1 but logs it when easePackageCheck cannot find the package you want
Defaults to false

## Docs
You can find them in wiki
but because there empty
ill create them.


##### Message for all npm users
if you see easePackageCheck's version is 1.1.0,
i just was having problems to re-publish it to npm servers
just forgot to add repository field to package.json :\
so only 1.1.0 i can publish it. sorry :(
