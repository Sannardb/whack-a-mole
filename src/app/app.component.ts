import { Component } from '@angular/core';
import { PassInfoService } from './pass-info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  mathRandom(){

    const mole = new PassInfoService();
    mole.mathRandom();

  }
}
