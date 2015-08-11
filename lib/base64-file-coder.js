/**
 * @module base64-file-coder
 * @description Base64 file encoder/decoder.
 * @version 1.0.0
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

"use strict";

/**
 * @private
 * @description Module dependencies.
 */

var fs = require("fs");
var freeze = require("deep-freeze-node");

/**
 * @public
 * @constructor
 * @description Initialize instance of Base64FileCoder.
 */

function Base64FileCoder() {}

/**
 * @public
 * @function encode
 * @description Encode file to Base64 string.
 * @param {String} path - Path to file.
 * @param {encode~callback} callback - Callback when file is encoded.
 */

Base64FileCoder.prototype.encode = function(path, callback) {
    if(!(typeof path === "string")) {
        throw new Error("encode(): path is undefined or contains non-string value");
    }
    if(!(typeof callback === "function") || !(callback instanceof Function)) {
        throw new Error("encode(): callback is undefined or contains non-function value");
    }

    fs.exists(path, function(exists) {
        if(exists) {
            fs.readFile(path, function(error, buffer) {
                if(!error) {
                    callback(null, buffer.toString("base64"));
                } else {
                    callback(error);
                }
            });
        } else {
            callback(new Error("file at path does not exist"));
        }
    });
};

/**
 * @callback encode~callback
 * @description Use as callback in encode function.
 * @param {Object} error - Generic error object.
 * @param {String} base64 - Base64 encoded file string.
 */

/**
 * @public
 * @function decode
 * @description Decode Base64 string to byte buffer.
 * @param {String} base64 - Base64 encoded file string.
 * @returns {Object} - Byte buffer.
 */

Base64FileCoder.prototype.decode = function(base64) {
    return new Buffer(base64, "base64");
};

/**
 * @public
 * @description Expose unchangeable instance of Base64FileCoder.
 * @returns {Object} - Unchangeable instance of Base64FileCoder.
 */

module.exports = function() {
    return freeze(new Base64FileCoder());
};