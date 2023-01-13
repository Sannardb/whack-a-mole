import { Injectable } from '@angular/core';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class PassInfoService {

 
  state: State = { 
    points: 0, 
    counter: 6, 
    gameOver: '',
    clicked: false,
    moleImage: 'https://www.decalsground.com/img_b/vinyl-decal-sticker-780.jpg',
    visible: false
  }

  interval: any;

  constructor() { }

  mathRandom(){
    Math.floor((Math.random() * 25) + 1);
  }

  countdownTimer(){
    this.state.counter = 6; // just to be able to play the game again without a reset button
    this.state.points = 0;
    this.state.gameOver = '';

    this.interval = setInterval(() => {
      this.state.counter--;
      
      if( this.state.counter <= 0 ) {
        clearInterval(this.interval);
        this.state.clicked = false;
        this.state.gameOver = 'Game over, try again!'
        }
    }, 1000);
  }

  moleHole(){

  }

  

  

}
