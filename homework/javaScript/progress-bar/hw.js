// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue) {
    const timePass = 100 - timerValue;
    document.getElementById('numeric-display').textContent = timerValue;
    if(timePass >= 90) {
      document.getElementById('numeric-display').style.textColor = '#FF0000';
    };
  },
  drawProgressBars: function(timerValue){
    const timePass = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timePass + '%';
  },
  drawLitFuses: function(timerValue){
    const timePass = timerValue/100;

    document.getElementsByClassName('unburnt')[0].style.width = timePass *98+ '%';
    document.getElementsByClassName('burnt')[0].style.width = (1-timePass) * 98 + '%';
  },
  drawCrawlers: function(timerValue){
    const timePass = 100 - timerValue;
    if (timePass % 2 === 0){
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    } else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timePass*10) + 'px';
  }
};
