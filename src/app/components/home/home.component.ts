import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent{
  nuevasCanciones: any [] = [];
  loading: boolean;
  error: boolean;
  messageError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleses().subscribe( data => {this.nuevasCanciones = data; this.loading = false; }, (errorService) => {
      this.error = true; this.loading = false; this.messageError = errorService.error.error.message;
    });
  }

}
