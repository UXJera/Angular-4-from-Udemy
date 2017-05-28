import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  gameOn = true;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.interval= setInterval(() => {
      this.intervalFired.emit(this.lastNumber +1);
      this.lastNumber++;
    },1000);
    this.gameOn = false;
    // This function is run every 1000ms, so every second
  }
  onGamePause() {
    clearInterval(this.interval);
    console.log('Game has paused');
    this.gameOn = true;
  }
  onGameReset() {
    this.interval = 0;
    this.lastNumber = 0;
  }
}
