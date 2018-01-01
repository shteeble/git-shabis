const gitconfig = require('gitconfig');
 
var configure = function() {
 console.log("Kashering Git..."); 
 gitconfig.set({'alias.vus': 'status'}, {location: 'global'}).then();
 gitconfig.set({'alias.chulent': 'merge'}, {location: 'global'}).then();
 gitconfig.set({'alias.shlep': 'pull'}, {location: 'global'}).then();
 gitconfig.set({'alias.shep': 'fetch'}, {location: 'global'}).then();
 gitconfig.set({'alias.shtup': 'push'}, {location: 'global'}).then();
 gitconfig.set({'alias.loshon-hora': 'blame'}, {location: 'global'}).then();
 gitconfig.set({'alias.nafka-mina': 'diff'}, {location: 'global'}).then();
 
 setTimeout(function(){
  console.log("Toiveling...");
 }, 2000);
 
 setTimeout(function(){
  console.log("Trying on Shtreimel...");
 }, 5000);
 
 setTimeout(function(){
  console.log("Tasting Herring...");
 }, 8000);
 
 setTimeout(function(){ 
   console.log("Shkuyach, Git is now kosher."); 
 }, 10000);
};

exports.configure = configure;
