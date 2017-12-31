#!/usr/bin/env node

var setup = require('../lib/index.js');
console.log("Kashering Git...");
setup.configure();
console.log("Shkuyach, Git is now kosher.")
