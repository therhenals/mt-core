import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';
import { PruebaService } from '../../services/prueba/prueba.service';

@Component({
  selector: 'mt-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private prueba: PruebaService
  ) { }

  ngOnInit() {
  }

  async copy() {
    await Clipboard.write({
      string: "Hello World!"
    });
  }

}
