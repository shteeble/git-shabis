const gitconfig = require('gitconfig');
 
var uninstall = function() {
 console.log("Trefing up Git..."); 
 gitconfig.unset([ 'alias.vus', 'alias.chulent', 'alias.shlep', 
                   'alias.chap', 'alias.shtup', 'alias.loshon-hora',
                   'alias.nafka-mina', 'alias.gniza', 'alias.farbinden',
                   'alias.apikoyres','alias.drochim' ], 
  {location: 'global'}).then();
 
 setTimeout(function(){ 
   console.log("nebuch, Git is now treif."); 
 }, 5000);
};

exports.uninstall = uninstall;
