import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo!');
   }
   getQuery(query: string){
    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers  = new HttpHeaders({ 'Authorization': 'Bearer BQBK73ZESc5Zz28Is2ruZdwpW7_oOqi_NQYygWwQt_WVNn6K4vD7CAReQspPTKYJtVS6mZM3dUJBYihRH8w'});
    return this.http.get(url, {headers});
   }

   getNewReleses = () => this.getQuery('browse/new-releases?limit=20')
                               .pipe(map( data => data['albums'].items ))

   getArtistas = (termino: string) => this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                                          .pipe(map( data => data['artists'].items ))

   getArtista = (termino: string) => this.getQuery(`artists/${termino}`);
   
   getTopTrakcs = (termino: string) => this.getQuery(`artists/${termino}/top-tracks?country=us`).pipe(map( data => data['tracks'] ))

}


