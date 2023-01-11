import { Component } from '@angular/core';
import { PassInfoService } from '../pass-info.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {


  constructor(public _passInfoService: PassInfoService) {}

   countdownTimer(){
     const timer = new PassInfoService();
     timer.countdownTimer();
   }
}
