/**
 * Array reducing utility.
 * @module arrayreduce
 */

"use strict";

module.exports = {
    get arrayConcat() { return require('./array_concat'); },
    get booleanAnd() { return require('./boolean_and'); },
    get booleanOr() { return require('./boolean_or'); },
    get indexByAttr() { return require('./index_by_attr'); }
};