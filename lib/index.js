const gitconfig = require('gitconfig')
 
var configure = function() {
 // Set git config values. 
 gitconfig.set({'alias.vus': 'status'}, {location: 'global'});
 gitconfig.set({'alias.chulent': 'merge'}, {location: 'global'});
 gitconfig.set({'alias.shlep': 'pull'}, {location: 'global'});
 gitconfig.set({'alias.shep': 'fetch'}, {location: 'global'});
 gitconfig.set({'alias.shtup': 'push'}, {location: 'global'});
 gitconfig.set({'alias.loshon-hora': 'blame'}, {location: 'global'});
 gitconfig.set({'alias.nafka-mina': 'diff'}, {location: 'global'});
};

exports.configure = configure;
