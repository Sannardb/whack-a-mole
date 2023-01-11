import { Component } from '@angular/core';
import { PassInfoService } from '../pass-info.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  mathRandom(){

    const mole = new PassInfoService();
    mole.mathRandom();

  }

}
