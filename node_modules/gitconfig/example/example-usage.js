'use strict'

const gitconfig = require('gitconfig')

// Set git config values.
gitconfig.set({
  'user.mail': 'foo@example.com'
}, {
  location: 'local'
}).then(() => {
  /* ... */
})

// Unset git config values.
gitconfig.unset([ 'user.mail' ], {
  location: 'local'
}).then(() => {
  /* ... */
})

// Git all config values.
gitconfig.get({
  location: 'global'
}).then((config) => {
  /* ... */
})