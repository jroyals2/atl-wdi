// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue) {
    document.getElementById('numeric-display').textContent = timerValue;
  },
  drawProgressBars: function(timerValue){
    const timePass = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timePass + '%';
  },
  drawLitFuses: function(timerValue){
    const timePass = timerValue/100;

    document.getElementsByClassName('unburnt')[0].style.width = timePass *98+ '%';
    document.getElementsByClassName('burnt')[0].style.width = timePass + '%';
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
