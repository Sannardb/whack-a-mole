import { Injectable } from '@angular/core';
import { State } from './state';


@Injectable({
  providedIn: 'root'
})
export class PassInfoService {

 
  state: State = { 
    points: 0, 
    counter: 60, 
    gameOver: '',
    clicked: false,
    moleImage: 'https://www.decalsground.com/img_b/vinyl-decal-sticker-780.jpg',
    activeGame: false,
    moles: 0,
    list: [],
    squares: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  
  }

  timer: any;
  interval: any;
  randomHole: any;
  randomHole2: any;
  randomHole3: any;
  timeout: any;
  moleAppear: any;
  hej: any;
  

  constructor() { }



  countdownTimer(){
    this.state.activeGame = true;
    this.state.counter = 60; // just to be able to play the game again without a reset button
    this.state.points = 0;
    this.state.gameOver = '';
    
    this.interval = setInterval(() => {
      this.state.counter--;
      
      if( this.state.counter <= 0 ) {
        clearInterval(this.interval);
        this.state.clicked = false;
        this.state.gameOver = 'Game over, try again!'
        this.state.activeGame = false;
        this.state.squares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        
        
      }
    }, 1000);
  }



  whackedMole(i: number){ 
    console.log('whacked a mole');
    if(this.state.squares[i] == true){ // if the index from the template is true, set it to false to make it disappear, add one point
      this.state.squares[i] = false;
      this.state.points++;
      this.state.moles--
    

    
      // clearTimeout(this.timeout)
  
    }
  }


  // randomTime(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }
  
  
  moleUp(){
    
    this.myMoles()
   
  }

  myGameLoop(){
    return this.moleAppear = Math.floor(Math.random() * 100)
  }




  /* myMoles(){

        setInterval(() => {

        console.log(this.state.moles);

          if(this.state.moles < 3 && this.state.activeGame == true){

            
              this.myGameLoop()
              if(this.moleAppear > 20){
           

                this.randomHole = Math.floor(Math.random() * 25);
                if(this.state.squares[this.randomHole] == false){
                  console.log('this is random hole' + this.randomHole)
                  this.state.squares[this.randomHole] = true;
                  this.state.moles++;
               
                }
                
                
                 setTimeout((hole: number)=>{
                  this.state.squares[hole] = false;
                  this.state.moles--;
                   console.log('hej ' + this.state.moles);
                   console.log('this is another random hole!' + hole);
     
                  
                }, 4000, this.randomHole)
                
              }
            }
          }, 1000)
          

      }
    }

*/


    

    

  myMoles(){

    

    setInterval(() => {

      console.log(this.state.moles);
      if(this.state.moles < 3 && this.state.activeGame == true){
      
        this.myGameLoop()

        if(this.moleAppear > 20){

          this.randomHole = Math.floor(Math.random() * 25);
          if(this.state.squares[this.randomHole] == false){
            console.log('this is random hole' + this.randomHole)
            this.state.squares[this.randomHole] = true;
            this.state.moles++;
          }
          
          setTimeout((hole: number)=>{
            this.state.squares[hole] = false;
            this.state.moles--;
            console.log('hej ' + this.state.moles);
            console.log('this is another random hole!' + hole);
          }, 4000, this.randomHole)
        
        }
      
      }
    
    }, 1000)



  }







}


  
       
    /*
    
    




  /*

  mole1(){

    setTimeout(()=>{

      setInterval(() => {
        if(this.state.moleOne < 1 && this.state.activeGame == true){
      
          for(let i = 0; i < 1; i++){
      
            
            this.randomHole = Math.floor(Math.random() * 25);
            if(this.state.squares[this.randomHole] == false){

              this.state.squares[this.randomHole] = true;
              this.state.moleOne++;
             
                 
              this.timeout = setTimeout(()=>{
                this.state.squares[this.randomHole] = false;
                this.state.moleOne--;
                
              }, 4000)
            }
          }
        }
      }, this.randomTime(100, 600))


    }, this.randomTime(100, 600));

      
  }



  mole2(){

    setTimeout(()=>{

      setInterval(() => {
        if(this.state.moleTwo < 1 && this.state.activeGame == true){ 
      
          for(let i = 0; i < 1; i++){
              
           
            this.randomHole2 = Math.floor(Math.random() * 25);
    
            if(this.state.squares[this.randomHole2] == false){
              this.state.squares[this.randomHole2] = true;
              this.state.moleTwo++;
              
    
              setTimeout(()=>{
                this.state.squares[this.randomHole2] = false
                this.state.moleTwo--;
              
              }, 4000)     
            }
          }
        }
      }, this.randomTime(1000, 2000)); 


    }, this.randomTime(1000, 2000));

  }




  mole3(){

    setTimeout(() => {


      setInterval(() => {
  
        if(this.state.moleThree < 1 && this.state.activeGame == true){
      
          for(let i = 0; i < 1; i++){
              this.randomHole3 = Math.floor(Math.random() * 25);
  
            if(this.state.squares[this.randomHole3] == false){
              
              this.state.squares[this.randomHole3] = true;
              this.state.moleThree++;
              
   
              setTimeout(()=>{
  
                this.state.squares[this.randomHole3] = false
                this.state.moleThree--;
            
  
              }, 4000);
            }
          }
        }
      }, this.randomTime(500, 2000));


    }, this.randomTime(500, 2000));

  }
*/
  


