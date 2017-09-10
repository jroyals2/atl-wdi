// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    this.millisecs += 10;
    if (this.millisecs >= 1000) {
      this.millisecs -= 1000;
      this.seconds ++;
    } 
    if (this.seconds >= 60){
      this.seconds -= 60;
      this.mins++;
    }
  },
  reset: function(){
    this.millisecs = 0;
    this.secs = 0;
    this.mins = 0;
    // Your Code Here
  },
  start: function(){
    if (!this.isRunning) {
      this.isRunning = true;
      this.tickClock();
    }
    
  },
  stop: function(){
    this.isRunning = false;
    // Your Code Here
  },
  lap: function(){
    if (this.isRunning = true){
      this.laps.push({
        millisecs: this.millisecs,
        seconds: this.seconds,
        mins: this.mins,
      })
    }
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    document.getElementById('millisecs').innerHTML = 
    document.getElementById('seconds').innerHTML =
    document.getElementById('mins').innerHTML =
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // code
  },
  handleClickStart: function() {
    if(!Stopwatch.isRunning){
      Stopwatch.start();}
  },
  handleClickStopReset: function(){
    // Your Code Here
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('lap').onclick = AppController.handleClickLap;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
};
