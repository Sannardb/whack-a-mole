import { Component } from '@angular/core';
import { PassInfoService } from '../pass-info.service';
import { State } from '../state';
import { Squares } from '../squares';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent {

  constructor(public _passInfoService: PassInfoService) {
    this.state = this._passInfoService.state;
    this.squares = this._passInfoService.squares;
  }



  state!: State;
  squares!: Squares;
  clicked!: true;
  points!: 0;
  visible!: true;
  moleUp!: true;

  
  mathRandom(){
    this._passInfoService.mathRandom();
  
  }
  

  showMole(){
    this._passInfoService.showMole();
   
  }


  whackedMole(){
    this._passInfoService.whackedMole();

  }


}
