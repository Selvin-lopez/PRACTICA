import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { estudiantesService } from '../services/estudiantes.service';

@Component({
  selector: 'app-estudiantes-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  constructor( private EsestudiantesServicetu: estudiantesService ) {}

  get characters(): Character[] {
    return [...this.EsestudiantesServicetu.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.EsestudiantesServicetu.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.EsestudiantesServicetu.addCharacter( character );
  }

}
