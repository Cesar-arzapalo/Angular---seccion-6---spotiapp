import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: []
})
export class ArtistaComponent{
  artista: any;
  topTracks: any;
  loading: boolean;
  loadingTopTrakcs: boolean;
  error: boolean;
  errorDescripcion: string;
  constructor(private activatedRouter: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.loading = true;
    this.loadingTopTrakcs = true;
    this.activatedRouter.params.subscribe(params => {
    this.getArtista(params.id);
    this.getTopTrakcs(params.id);
    });
   }

  getArtista = (id: string) => this.spotifyService.getArtista(id) 
    .subscribe(artista => {this.artista = artista; this.loading = false; },
      (errorService) => {this.error = true; this.errorDescripcion = errorService.error.error.message; })
  getTopTrakcs = (id: string) => this.spotifyService.getTopTrakcs(id)
    .subscribe(topTrakcs => {this.topTracks = topTrakcs; this.loadingTopTrakcs = false; console.log(topTrakcs); },
      (errorService) => {this.error = true; this.errorDescripcion = errorService.error.error.message; })
  }
