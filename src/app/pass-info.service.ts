import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassInfoService {

  counter: number = 6;
  gameOver: string = '';
  points: number = 0;
  clicked: boolean = false;
  moleImage: string = 'https://www.decalsground.com/img_b/vinyl-decal-sticker-780.jpg'
  visible: boolean = false;
  interval: any = null;


  constructor() { }

  mathRandom(){
    const mole = Math.floor((Math.random() * 25) + 1);
    return mole;
  }

  countdownTimer(){
    this.counter = 6;
    this.points = 0;
    this.gameOver = '';

    this.interval = setInterval(() => {
      this.counter--;
      
      if( this.counter <= 0 ) {
        clearInterval(this.interval);
        this.clicked = false;
        this.gameOver = 'Game Over, start again';
        }
    }, 1000);
  }

  moleHole(){
 
  }

  

  

}
