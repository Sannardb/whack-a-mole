import { Injectable } from '@angular/core';
import { State } from './state';


@Injectable({
  providedIn: 'root'
})
export class PassInfoService {

 
  state: State = { 
    points: 0, 
    countdownTimer: 60, 
    gameOver: '',
    clicked: false,
    moleImage: 'https://www.decalsground.com/img_b/vinyl-decal-sticker-780.jpg',
    activeGame: false,
    moles: 0,
    chanceNumber: 0,
    squares: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  
  }

  timer: any;
  interval: any;
  randomHole: any;
  moleAppear: any;
  clearTimeout: any;
  

  constructor() { }



  countdownTimer(){
    this.state.activeGame = true;
    this.state.countdownTimer = 60; // just to be able to play the game again without a reset button
    this.state.points = 0;
    this.state.gameOver = '';
    this.state.moles = 0;
    
    
    this.interval = setInterval(() => {
      this.state.countdownTimer--;
      
      if( this.state.countdownTimer <= 0 ) {
        clearInterval(this.interval);
        this.state.clicked = false;
        this.state.gameOver = 'Game over, try again!'
        this.state.activeGame = false;
        this.state.squares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        
        
      }
    }, 1000);
  }

  
  moleUp(){
    
    setInterval(() => {
      
      if(this.state.activeGame == true){
        
        console.log(this.state.moles);
        
        this.state.chanceNumber = Math.floor(Math.random() * 100)
        
        if(this.state.chanceNumber > 20 && this.state.moles < 3){
          
          this.randomHole = Math.floor(Math.random() * 25);
          
          if(this.state.squares[this.randomHole] == false){
            console.log('this is random hole ' + this.randomHole);
            this.state.squares[this.randomHole] = true;
            this.state.moles++;
          }
          
          
          this.clearTimeout = setTimeout((hole: number)=>{
            if(this.state.squares[hole] == true){

              this.state.squares[hole] = false;
              this.state.moles--;
            } 
          }, 4000, this.randomHole);  
         
        }   
      }  
    }, 500);
  }
  
  
  whackedMole(i: number){ 
    console.log('whacked a mole');
    if(this.state.squares[i] == true){// if the index from the template is true, set it to false to make it disappear, add one point and remove a mole
      
      this.state.squares[i] = false;
      this.state.points++;
      this.state.moles--;
      clearTimeout(this.clearTimeout);

    }
  }
  
  
  
}