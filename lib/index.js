const gitconfig = require('gitconfig')
 
var configure = function() {
 // Set git config values. 
 setTimeout(function(){  
  gitconfig.set({'alias.vus': 'status'}, {location: 'global'});
  process.stdout.write("Toiveling            ##########                 12%");  
 }, 1000);
 setTimeout(function(){  
  gitconfig.set({'alias.chulent': 'merge'}, {location: 'global'});
  process.stdout.clearLine();
  process.stdout.cursorTo(0); 
  process.stdout.write("Trying on Shteimel    ##################         47%");  
  gitconfig.set({'alias.shlep': 'pull'}, {location: 'global'});
  gitconfig.set({'alias.shep': 'fetch'}, {location: 'global'});
  gitconfig.set({'alias.shtup': 'push'}, {location: 'global'});
  gitconfig.set({'alias.loshon-hora': 'blame'}, {location: 'global'});
 }, 5000);
  process.stdout.clearLine();
  process.stdout.cursorTo(0); 
  setTimeout(function(){  
  process.stdout.write("Tasting Herring       ########################   96%");  
  gitconfig.set({'alias.nafka-mina': 'diff'}, {location: 'global'});
 }, 8000);
};

exports.configure = configure;
