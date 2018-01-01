const gitconfig = require('gitconfig');

var configure = function () {
  console.log("Kashering Git...");
  gitconfig.set({
    'alias.vus': 'status',
    'alias.chulent': 'merge',
    'alias.shlep': 'pull',
    'alias.chap': 'fetch',
    'alias.shtup': 'push',
    'alias.loshon-hora': 'blame',
    'alias.nafka-mina': 'diff',
    'alias.gniza': 'stash',
    'alias.farbinden': 'connect',
    'alias.apikoyres': 'checkout -b',
    'alias.drochim': 'branch'
  }, { location: 'global' }).then();

  setTimeout(function () {
    console.log("Toiveling...");
  }, 2000);

  setTimeout(function () {
    console.log("Trying on Shtreimel...");
  }, 5000);

  setTimeout(function () {
    console.log("Tasting Herring...");
  }, 8000);

  setTimeout(function () {
    console.log("Shkuyach, Git is now kosher.");
  }, 10000);
};

exports.configure = configure;
