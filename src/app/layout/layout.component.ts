import { Component } from '@angular/core';
import { PassInfoService } from '../pass-info.service';
import { State } from '../state';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent {

  constructor(public _passInfoService: PassInfoService) {
    this.state = this._passInfoService.state;
  }



  state!: State;
  clicked!: true;
  points!: 0;

  



    whackedMole(){
      this._passInfoService.whackedMole();

    }

     moleUp(){
      this._passInfoService.moleUp();
     }
}
