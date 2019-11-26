const easepackagecheck = require('easepackagecheck');
const request = require('request');
const terminalImage = require('terminal-image');

let ora = null;
let spinner = null;
let isOra = null;

if (easepackagecheck.checkPackage('ora')) {
  ora = require('ora');
  spinner = ora('Downloading image...').start();
  spinner.spinner = 'noise';
  isOra = true;
} else {
  console.log("Downloading image...")
  isOra = false;
};

request('https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Faf%2FTux.png%2F220px-Tux.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTux_(mascot)&docid=yTqG6qkJ0m81tM&tbnid=fyIzwsojsss1CM%3A&vet=10ahUKEwjFxsb50aXlAhXt1uAKHaC2Dv4QMwhzKAAwAA..i&w=220&h=261&client=ubuntu&bih=951&biw=1853&q=linux%20tux&ved=0ahUKEwjFxsb50aXlAhXt1uAKHaC2Dv4QMwhzKAAwAA&iact=mrc&uact=8', function (error, response, body) {
  if (isOra) {
    if (error) {
      spinner.fail(error);
    };
  } else {
    if (error) {
      console.error(error);
    };
  };
  if (!error) {
    if (isOra) {
      spinner.succeed('Got It!');
    } else {
      console.log('Got It!');
    };
    (async () => {
      var imgBuffer = await terminalImage.buffer(body);
      console.log(imgBuffer);
    })();
  };
});
