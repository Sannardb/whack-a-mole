import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {

  counter: number = 0;
  gameOver: string = '';
  points: number = 0;
  clicked: boolean = false;


  countdownTimer(){
    this.counter = 6;
    this.points = 0;

    const interval = setInterval(() => {
      this.counter--;
      this.gameOver = '';
      console.log(this.counter);

    if( this.counter <= 0 ) {
      clearInterval(interval);
      this.gameOver = 'Game Over, start again';
      }
    }, 1000);
  }

}