"use strict";

// IIFE - Immediately Invoked Function Expression
(function (module, require) {
  require(path);

  function calculateSum(a, b) {
    console.log(a + b);
  }

  module.exports = { calculateSum };
})();