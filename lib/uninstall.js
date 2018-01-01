const gitconfig = require('gitconfig');
 
var configure = function() {
 console.log("Trefing up Git..."); 
 gitconfig.unset({
  'alias.vus': 'status',
  'alias.chulent': 'merge',
  'alias.shlep': 'pull',
  'alias.shep': 'fetch',
  'alias.shtup': 'push',
  'alias.loshon-hora': 'blame',
  'alias.nafka-mina': 'diff'
 }, {location: 'global'}).then();
 
 setTimeout(function(){ 
   console.log("nebuch, Git is now treif."); 
 }, 5000);
};

exports.uninstall = uninstall;
