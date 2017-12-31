const gitconfig = require('gitconfig')
var readline = require('readline');
 
var configure = function() {
 console.log("Kashering Git..."); 
 setTimeout(function(){  
  gitconfig.set({'alias.vus': 'status'}, {location: 'global'});
  readline.write("Toiveling           ##########                 12%");  
 }, 1000);
 setTimeout(function(){  
  gitconfig.set({'alias.chulent': 'merge'}, {location: 'global'});
  readline.clearLine();
  readline.cursorTo(0); 
  readline.write("Trying on Shteimel  ##################         47%");  
  gitconfig.set({'alias.shlep': 'pull'}, {location: 'global'});
  gitconfig.set({'alias.shep': 'fetch'}, {location: 'global'});
  gitconfig.set({'alias.shtup': 'push'}, {location: 'global'});
  gitconfig.set({'alias.loshon-hora': 'blame'}, {location: 'global'});
 }, 5000);
 setTimeout(function(){ 
  readline.clearLine();
  readline.cursorTo(0); 
  readline.write("Tasting Herring     ########################   96%");  
  gitconfig.set({'alias.nafka-mina': 'diff'}, {location: 'global'});
 }, 8000);
 setTimeout(function(){ 
  console.log("Kashering Git..."); 
 }, 10000);
};

exports.configure = configure;
