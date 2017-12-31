const gitconfig = require('gitconfig')
var readline = require('readline');
 
var configure = function() {
 console.log("Kashering Git..."); 
 gitconfig.set({'alias.vus': 'status'}, {location: 'global'});
 gitconfig.set({'alias.chulent': 'merge'}, {location: 'global'});
 gitconfig.set({'alias.shlep': 'pull'}, {location: 'global'});
 gitconfig.set({'alias.shep': 'fetch'}, {location: 'global'});
 gitconfig.set({'alias.shtup': 'push'}, {location: 'global'});
 gitconfig.set({'alias.loshon-hora': 'blame'}, {location: 'global'});
 gitconfig.set({'alias.nafka-mina': 'diff'}, {location: 'global'});
 
 setTimeout(function(){ 
   process.stdout.write("Toiveling           ##########                 12%");  
 }, 1000);
 setTimeout(function(){  
  readline.clearLine();
  readline.cursorTo(0); 
   process.stdout.write("Trying on Shtreimel ##################         47%"); 
 }, 5000);
 setTimeout(function(){ 
  readline.clearLine();
  readline.cursorTo(0); 
   process.stdout.write("Tasting Herring     ########################   96%");
 }, 8000);
 setTimeout(function(){ 
   console.log("Shkuyach, Git is now kosher."); 
 }, 10000);
};

exports.configure = configure;
