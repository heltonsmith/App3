import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  article: ArticuloI;

  constructor() {
    this.cargarArticulo();
  }

  ngOnInit() {}

  cargarArticulo(){
    const data: ArticuloI = {
      title: 'Articulo de prueba',
      description: 'Este es un articulo de prueba, con una descripcion larga y un enlace a una imagen.',
      image: {
        url: 'https://via.placeholder.com/100x100',
        alt: 'Imagen de prueba'
      }
    };
    this.article = data;
  }

}

interface ArticuloI{
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  }
  id?: string;
}
