import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { peliculasService } from '../services/peliculas.service';


@Component({
  selector: 'app-peliculas-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  constructor( private PeliculasServicetu: peliculasService ) {}

  get characters(): Character[] {
    return [...this.PeliculasServicetu.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.PeliculasServicetu.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.PeliculasServicetu.addCharacter( character );
  }

}
