import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemones } from 'src/app/controlador/common/pokemones';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl = 'https://pokemon-go1.p.rapidapi.com/pokemon_types.json';
  constructor(private httpClient: HttpClient) { 

  }


  getPokedexList(): Observable<Pokemones[]> {

    const headers = new HttpHeaders({
      "x-rapidapi-key": "926c419031msh6d694000bab82fdp15c697jsncee624998a48",
      "x-rapidapi-host": "pokemon-go1.p.rapidapi.com"
    });

    return this.httpClient.get<GetResponse>(this.baseUrl, {headers}).pipe(
      map(response => response.pokemones)
    )
  }
}

interface GetResponse {
  pokemones: Pokemones[];
}