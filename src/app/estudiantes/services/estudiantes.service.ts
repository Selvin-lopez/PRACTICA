import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class estudiantesService {

  public characters: Character[] = [{
    id: uuid(),
    nombre: 'Krillin',
    edad: 1000,
    email: "krilin@gmail.com"
  },{
    id: uuid(),
    nombre: 'jose',
    edad: 20,
    email:'jose@gmail.com'
  },{
    id: uuid(),
    nombre: 'Vegeta',
    edad: 7500,
    email: 'vegeta@gmail.com'
  }];


  addCharacter( character: Character ):void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index:number ) {
  // this.characters.splice(index,1);
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }


}
