const gitconfig = require('gitconfig')
 
// Set git config values. 
gitconfig.set({
  'alias.mail': 'foo@example.com'
}, {
  location: 'local'
})
