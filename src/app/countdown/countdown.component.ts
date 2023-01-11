import { Component } from '@angular/core';
import { PassInfoService } from '../pass-info.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {

  counter: number = 0;
  gameOver: string = '';
  points: number = 0;
  clicked: boolean = false;

  countdownTimer(){
    const timer = new PassInfoService();
    timer.countdownTimer();
  }
  
}
