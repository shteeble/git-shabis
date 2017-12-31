#!/usr/bin/env node

/**
 * Share this project.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    sharegit = require('sharegit');

apeTasking.runTasks('share', [
    (callback) => {
        sharegit(callback);
    }
], true);
