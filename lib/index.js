const gitconfig = require('gitconfig');

var configure = function () {
  console.log("Kashering Git...");
  gitconfig.set({
    'alias.vus': 'status',
    'alias.chollent': 'merge',
    'alias.shlep': 'pull',
    'alias.chap': 'fetch',
    'alias.shtup': 'push',
    'alias.loshon-hora': 'blame',
    'alias.nafka-mina': 'diff',
    'alias.gniza': 'stash',
    'alias.shmutz': 'stash',
    'alias.farbinden': 'connect',
    'alias.apikoyres': 'checkout -b',
    'alias.drochim': 'branch',
    'alias.givald': 'help',
    'alias.oy-vey': 'help',
    'alias.shmooz': 'log'
  }, { location: 'global' }).then();

  setTimeout(function () {
    console.log("Toiveling...");
  }, 2000);

  setTimeout(function () {
    console.log("Learning Yiddish...");
  }, 5000);

  setTimeout(function () {
    console.log("Tasting Herring...");
  }, 8000);

  setTimeout(function () {
    console.log("Shkuyach, Git is now kosher.");
  }, 10000);
};

exports.configure = configure;
