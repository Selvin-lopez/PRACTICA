import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'estudiantes-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    nombre: '',
    edad: 0,
    email: ''
  };

  emitCharacter():void {

    if ( this.character.nombre.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { nombre: '', edad: 0 , email:''};
  }

}
