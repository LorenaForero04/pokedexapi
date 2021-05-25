import { Component, OnInit } from '@angular/core';
import { Pokemones } from './common/pokemones';

@Component({
  selector: 'app-pokemones',
  templateUrl: '../vista/pokemones.component.html',
  styleUrls: ['../vista/pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  // pokemones: Pokemones = 
  constructor() { }

  ngOnInit(): void {

  }

}
