import { Component } from '@angular/core';
import { PassInfoService } from '../pass-info.service';

@Component({
  selector: 'app-mole-hole',
  template: `
    
  `,
  styles: [
  ]
})
export class MoleHoleComponent {

    mathRandom(){
      const mole = new PassInfoService();
      mole.mathRandom();
     }
  

}
