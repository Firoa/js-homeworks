'use strict';
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerNode = document.querySelector(selector);
    this.targetDate = targetDate;
    this.seconds;
    this.minutes;
    this.hours;
    this.days;
    this.delta;
    this.currentDate = new Date();
    this.__log();
    this.__StartTimer();
  }
  __log = () => {
    console.log(this.currentDate);
    console.log(this.timerNode.children[0].firstElementChild.textContent);
  };
  __StartTimer = () => {
    setInterval(() => {
      this.currentDate = new Date();
      this.delta = this.targetDate - this.currentDate;
      this.days = Math.floor(this.delta / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      this.minutes = Math.floor((this.delta % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.delta % (1000 * 60)) / 1000);
      this.timerNode.children[0].firstElementChild.textContent = this.days;
      this.timerNode.children[1].firstElementChild.textContent = this.hours;
      this.timerNode.children[2].firstElementChild.textContent = this.minutes;
      this.timerNode.children[3].firstElementChild.textContent = this.seconds;
    }, 1000);
  };
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 15, 2017'),
});


