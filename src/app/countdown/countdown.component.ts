import { Component } from '@angular/core';
import { PassInfoService } from '../pass-info.service';
import { State } from '../state';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {


  constructor(public _passInfoService: PassInfoService) {
    this.state = this._passInfoService.state;
  }

  state!: State;


   countdownTimer(){
     this._passInfoService.countdownTimer();
   }


    moleUp(){
      this._passInfoService.moleUp();
    }



    

    

    
   
}
