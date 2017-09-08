// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  let leftOver = Math.round(100*payment - 100*price);
if (leftOver < 0){return [0,0,0,0]}
else {
const quarters = Math.floor(leftOver / 25);
leftOver = leftOver % 25;
const dimes = Math.floor(leftOver / 10);
leftOver = leftOver % 10;
const nickles = Math.floor(leftOver / 5);
leftOver = leftOver % 5;
const pennies = Math.floor(leftOver);
return [quarters, dimes, nickles, pennies];
}
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
