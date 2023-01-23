import { Injectable } from '@angular/core';
import { State } from './state';


@Injectable({
  providedIn: 'root'
})
export class PassInfoService 

{

 
  state: State =
  { 
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
  clearTimeout: any;
  

  constructor() { }



  countdownTimer()
  {
    this.state.activeGame = true;
    this.state.countdownTimer = 60; // just to be able to play the game again without a reset button
    this.state.points = 0;
    this.state.gameOver = '';
    this.state.moles = 0;
    
    
    this.interval = setInterval(() => // Set interval every 1s to execute timer
    {
      this.state.countdownTimer--;
      
      if(this.state.countdownTimer <= 0) // if timer is less than or 0, clear interval and reset below
      {
        clearInterval(this.interval);
        this.state.clicked = false;
        this.state.gameOver = 'Game over, try again!'
        this.state.activeGame = false;
        this.state.squares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]        
      }
    }, 1000);
  }

  
  moleUp(){
    
    setInterval(() =>
    {
      
      if(this.state.activeGame == true) // if true, run code below
      {
        
        this.state.chanceNumber = Math.floor(Math.random() * 100) // get a random number and set to chanceNumber
        
        if(this.state.chanceNumber > 20 && this.state.moles < 3) // if the chanceNumber is bigger than 20 and moles are less than 3, run code below
        {
          
          this.randomHole = Math.floor(Math.random() * 25); // get a random number and set to randomHole
          
          if(this.state.squares[this.randomHole] == false) // if the square position is not busy, show a mole
          {
            this.state.squares[this.randomHole] = true; 
            this.state.moles++;
          }
          
          this.clearTimeout = setTimeout((hole: number)=> // run this timeout after 4 seconds
          {
            if(this.state.squares[hole] == true) // to not get more moles than we want we need this if statement
            {
              this.state.squares[hole] = false;
              this.state.moles--;
            } 
          }, 4000, this.randomHole);  
         
        }   
      }
        
    }, 200);
  }
  
  
  whackedMole(i: number){  // get the index as parameter from the template
    console.log('whacked a mole');
    if(this.state.squares[i] == true) // if the index from the template is true, set it to false to make it disappear in the template, add one point and remove a mole
    {
      this.state.squares[i] = false;
      this.state.points++;
      this.state.moles--;
      clearTimeout(this.clearTimeout); 
    }
  }
  
  
  
}