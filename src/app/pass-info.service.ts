import { Injectable } from '@angular/core';
import { State } from './state';
import { Squares } from './squares';

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
    visible: false,
    moleUp: false
  }



  squares: Squares = [
    {square: 1},
    {square: 2},
    {square: 3},
    {square: 4},
    {square: 5},
    {square: 6},
    {square: 7},
    {square: 8},
    {square: 9},
    {square: 10},
    {square: 11},
    {square: 12},
    {square: 13},
    {square: 14},
    {square: 15},
    {square: 16},
    {square: 17},
    {square: 18},
    {square: 19},
    {square: 20},
    {square: 21},
    {square: 22},
    {square: 23},
    {square: 24},
    {square: 25},
  ]



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

  whackedMole(){
    this.state.points++;
  }


  showMole(){
    for(let i = 0; i < this.squares.length; i++){
      // console.log(this.ids[Math.floor(Math.random() * this.ids.length)]);
       console.log(this.squares[i]);
    }
  }
  

}
