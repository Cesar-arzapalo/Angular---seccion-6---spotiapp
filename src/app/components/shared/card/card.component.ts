import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent{
  @Input() items: any[] = [];
  constructor(private router: Router) { }
  verArtista = (item: any) => this.router.navigate(['/artist', (item.type === 'artist') ? item.id : item.artists[0].id]);

}
