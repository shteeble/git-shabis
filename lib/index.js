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
 
 for(var i = 0; i<= 100000000000; i++) {
  console.write("Toiveling...")
  if(i % 1000000000 === 0) {
  process.stdout.write("|");
  }
 }
 for(var i = 0; i<= 100000000000; i++) {
  console.write("Trying on Shtreimel...")
  if(i % 1000000000 === 0) {
  process.stdout.write("|");
  }
 }
  for(var i = 0; i<= 100000000000; i++) {
  console.write("Tasting Herring...")
  if(i % 1000000000 === 0) {
  process.stdout.write("|");
  }
 }
 setTimeout(function(){ 
   console.log("Shkuyach, Git is now kosher."); 
 }, 2000);
};

exports.configure = configure;
