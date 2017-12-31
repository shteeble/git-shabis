#!/usr/bin/env node

/**
 * Update project.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    apeUpdating = require('ape-updating');

apeTasking.runTasks('update', [
    (callback) => {
        apeUpdating.updateDependencies({}, callback);
    }
], true);
