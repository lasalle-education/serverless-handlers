"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handler;

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utility to make a Lambda function handler. Expects to be invoked in response
// to an API Gateway event of Content-Type application/x-www-form-urlencoded.
function handler(fn) {
  if (typeof fn !== 'function') {
    throw new Error('Expected a handler function.');
  }

  return async event => {
    const requestBody = _querystring.default.parse(event.body);

    return fn(requestBody, event.pathParameters);
  };
}