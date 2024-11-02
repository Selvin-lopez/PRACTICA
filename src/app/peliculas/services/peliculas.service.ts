import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class peliculasService {

  public characters: Character[] = [{
    id: uuid(),
    nombre: 'Krillin',
    precio: 1000,
    genero: "krilin@gmail.com"
  },{
    id: uuid(),
    nombre: 'jose',
    precio: 20,
    genero:'jose@gmail.com'
  },{
    id: uuid(),
    nombre: 'Vegeta',
    precio: 7500,
    genero: 'vegeta@gmail.com'
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
