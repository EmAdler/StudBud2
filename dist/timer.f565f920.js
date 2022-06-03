//TIMER JS
///REFERENCE////
//Cloudflare. (n.d.-b). CodePen. Retrieved June 3, 2022, from https://codepen.io/rajdgreat007/pen/edvZpx
//setting varibles for the pomodoro timer 
var pomodoro = {
    started: false,
    minutes: 0,
    seconds: 0,
    fillerHeight: 0,
    fillerIncrement: 0,
    interval: null,
    minutesDom: null,
    secondsDom: null,
    fillerDom: null,
    //function to select the digits  
    init: function() {
        var self = this;
        this.minutesDom = document.querySelector("#minutes");
        this.secondsDom = document.querySelector("#seconds");
        this.fillerDom = document.querySelector("#filler");
        this.interval = setInterval(function() {
            self.intervalCallback.apply(self);
        }, 1000);
        //Queryselector to create functions for each button from the id in HTML
        document.querySelector("#work").onclick = function() {
            self.startWork.apply(self);
        };
        document.querySelector("#extendedWork").onclick = function() {
            self.startExtendedWork.apply(self);
        };
        document.querySelector("#shortBreak").onclick = function() {
            self.startShortBreak.apply(self);
        };
        document.querySelector("#longBreak").onclick = function() {
            self.startLongBreak.apply(self);
        };
        document.querySelector("#stop").onclick = function() {
            self.stopTimer.apply(self);
        };
    },
    //Reset the values 
    resetVariables: function(mins, secs, started) {
        this.minutes = mins;
        this.seconds = secs;
        this.started = started;
        this.fillerIncrement = 200 / (this.minutes * 60);
        this.fillerHeight = 0;
    },
    //Buttons to display how long each button will set the timer for
    startWork: function() {
        this.resetVariables(30, 0, true);
    },
    startExtendedWork: function() {
        this.resetVariables(60, 0, true);
    },
    startShortBreak: function() {
        this.resetVariables(5, 0, true);
    },
    startLongBreak: function() {
        this.resetVariables(15, 0, true);
    },
    stopTimer: function() {
        this.resetVariables(0, 0, false);
        this.updateDom();
    },
    //Function to check if double digits 
    toDoubleDigit: function(num) {
        if (num < 10) return "0" + parseInt(num, 10);
        return num;
    },
    //update function to display double digits
    updateDom: function() {
        this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
        this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
        this.fillerHeight = this.fillerHeight + this.fillerIncrement;
        this.fillerDom.style.height = this.fillerHeight + "px";
    },
    //Default call back functions, to make the digitis frun off each other e.g. ones it has been 60sec make it 1min
    intervalCallback: function() {
        if (!this.started) return false;
        if (this.seconds == 0) {
            if (this.minutes == 0) {
                this.timerComplete();
                return;
            }
            this.seconds = 59;
            this.minutes--;
        } else this.seconds--;
        this.updateDom();
    },
    timerComplete: function() {
        this.started = false;
        this.fillerHeight = 0;
    }
};
//function to onload the info
window.onload = function() {
    pomodoro.init();
};

//# sourceMappingURL=timer.f565f920.js.map
