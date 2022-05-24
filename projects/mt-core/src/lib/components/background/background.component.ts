import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {

  @Input() height: number;

  constructor() { }

  ngOnInit() { }

}
