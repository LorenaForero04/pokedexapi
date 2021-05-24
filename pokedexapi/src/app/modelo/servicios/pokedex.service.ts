import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private httpClient: HttpClient) { }

//   getPokedexList(): Observable<Pokedex[]> {

//     return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
//       map(response => response.pokedex) 
//     )
//   }
// }

// interface GetResponse {
//   _embedded: {
//     offers: Pokedex[];
//   }
}