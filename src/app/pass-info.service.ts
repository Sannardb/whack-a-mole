import { Injectable } from '@angular/core';
import { State } from './state';


@Injectable({
  providedIn: 'root'
})
export class PassInfoService {

 
  state: State = { 
    points: 0, 
    counter: 20, 
    gameOver: '',
    clicked: false,
    moleImage: 'https://www.decalsground.com/img_b/vinyl-decal-sticker-780.jpg',
    lastHole: 0,
    time: 0,
    activeGame: false,
    moleOne: 0,
    moleTwo: 0,
    moleThree: 0,
    isClicked: true,
    ids: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  
  }

  timer: any;
  interval: any;
  randomHole: any;
  randomHole2: any;
  randomHole3: any;
  

  constructor() { }



  countdownTimer(){
    this.state.activeGame = true;
    this.state.counter = 20; // just to be able to play the game again without a reset button
    this.state.points = 0;
    this.state.gameOver = '';
    
    this.interval = setInterval(() => {
      this.state.counter--;
      
      if( this.state.counter <= 0 ) {
        clearInterval(this.interval);
        this.state.clicked = false;
        this.state.gameOver = 'Game over, try again!'
        this.state.activeGame = false;
        this.state.ids = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        
        
        }
    }, 1000);
  }

  whackedMole(i: number){

    if(this.state.ids[i] == true){
      this.state.ids[i] = false;
      this.state.points++;
    }


  }


  randomTime(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
    moleUp(){

        this.mole1()
        this.mole2()
        this.mole3()
  
    }


    mole1(){

      setInterval(() => {
        if(this.state.moleOne < 1 && this.state.activeGame == true){
    
          for(let i = 0; i < 1; i++){
    
            this.randomHole = Math.floor(Math.random() * 25);
            console.log(this.randomHole);
 
            this.state.ids[this.randomHole] = true;
            this.state.moleOne++;
            console.log(this.state.ids[this.randomHole]);
               
            
            setTimeout(()=>{
             this.state.ids[this.randomHole] = false
             this.state.moleOne--;
             console.log(this.state.moleOne);
            }, 4000)
              
          }
        }
      }, 750) 
    }


    mole2(){

     
      setInterval(() => {
        if(this.state.moleTwo < 1 && this.state.activeGame == true){
    
         for(let i = 0; i < 1; i++){
    
             
           this.randomHole2 = Math.floor(Math.random() * 25);
           console.log(this.randomHole2);
 
           this.state.ids[this.randomHole2] = true;
           this.state.moleTwo++;
           console.log(this.state.ids[this.randomHole2]);
               
 
           setTimeout(()=>{
             this.state.ids[this.randomHole2] = false
             this.state.moleTwo--;
             console.log(this.state.moleTwo);
           }, 4000)
              
         }
          }
      
        }, 1500) 
    }

    mole3(){


      setInterval(() => {

          if(this.state.moleThree < 1 && this.state.activeGame == true){
    
         for(let i = 0; i < 1; i++){
    
             
           this.randomHole3 = Math.floor(Math.random() * 25);
 
           this.state.ids[this.randomHole3] = true;
           this.state.moleThree++;
           console.log(this.state.ids[this.randomHole3]);
               
 
           setTimeout(()=>{
             this.state.ids[this.randomHole3] = false
             this.state.moleThree--;
             console.log(this.state.moleThree);
           }, 4000)
              
         }
          }
      
        }, 1000) 
    }
  }
    
    

