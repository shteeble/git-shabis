const gitconfig = require('gitconfig');
 
var configure = function() {
 console.log("Kashering Git..."); 
 gitconfig.set({'alias.vus': 'status'}, {location: 'global'});
 gitconfig.set({'alias.chulent': 'merge'}, {location: 'global'});
 gitconfig.set({'alias.shlep': 'pull'}, {location: 'global'});
 gitconfig.set({'alias.shep': 'fetch'}, {location: 'global'});
 gitconfig.set({'alias.shtup': 'push'}, {location: 'global'});
 gitconfig.set({'alias.loshon-hora': 'blame'}, {location: 'global'});
 gitconfig.set({'alias.nafka-mina': 'diff'}, {location: 'global'});
 
 console.log("Toiveling...");
 for(var i = 0; i<= 10000000; i++) {
  if(i % 1000000 === 0) {
   process.stdout.write("#");
  }
   if(i === 10000000) {
   process.stdout.write("100%");
  }
 }
 
 console.log("Trying on Shtreimel...");
 for(var i = 0; i<= 10000000; i++) {
  if(i % 1000000 === 0) {
   process.stdout.write("#");
  }
   if(i === 10000000) {
   process.stdout.write("100%");
  }
 }
 
 console.log("Tasting Herring...");
 for(var i = 0; i<= 10000000; i++) {
  if(i % 1000000 === 0) {
   process.stdout.write("#");
  }
  if(i === 10000000) {
   process.stdout.write("100%");
  }
 }
 
 setTimeout(function(){ 
   console.log("Shkuyach, Git is now kosher."); 
 }, 2000);
};

exports.configure = configure;
