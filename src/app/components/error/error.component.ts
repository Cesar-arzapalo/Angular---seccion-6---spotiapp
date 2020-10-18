import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: []
})
export class ErrorComponent implements OnInit {
  @Input() messageError: string;
  constructor() { }

  ngOnInit(): void {
  }

}
