import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  article: Models.Home.ArticuloI;

  constructor() {
    this.cargarArticulo();
  }

  ngOnInit() {}

  cargarArticulo(){
    const data: Models.Home.ArticuloI = {
      title: 'Articulo de prueba',
      description: 'Este es un articulo de prueba, con una descripcion larga y un enlace a una imagen.',
      image: {
        url: 'https://via.placeholder.com/100x100',
        alt: 'Imagen de prueba'
      }
    };
    this.article = data;
  }

  presionar() {
    console.log('Presionar');
  }

  soltar(){
    console.log('Soltar');
  }

}



