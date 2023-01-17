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
    moleUp: false,
    lastHole: 0,
    ids: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  
    
  }

  timer: any;
  interval: any;
  randomNumber: any;

  constructor() { }



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

  whackedMole(){
    this.state.points++;
    // this.state.ids[this.randomNumber] = false;
  }



    
  

    moleUp(){

      console.log(this.state.counter);
      setInterval(() => {

        this.randomNumber = Math.floor(Math.random() * 25);
        console.log(this.randomNumber);
        this.state.ids[this.randomNumber] = true;
       
      
      }, 1000)
    }

      
    }
    
    
    

