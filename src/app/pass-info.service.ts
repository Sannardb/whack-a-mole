import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassInfoService {

  counter: number = 6;
  gameOver: string = '';
  points: number = 0;
  clicked: boolean = false;


  constructor() { }

  mathRandom(){
    const mole = Math.floor((Math.random() * 25) + 1);
    console.log(mole);
  }

  countdownTimer(){
    this.counter = 6;
    this.points = 0;
    this.gameOver = '';

    const interval = setInterval(() => {
      this.counter--;
      console.log(this.counter);

    if( this.counter <= 0 ) {
      clearInterval(interval);
      this.clicked = false;
      this.gameOver = 'Game Over, start again';
      }
    }, 1000);
  }

}
