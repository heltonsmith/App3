import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner } from '@ionic/angular/standalone';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
  standalone: true,
  imports: [IonSpinner,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule]
})
export class StorePage implements OnInit {

  items: Models.Store.Item[];
  cargando: boolean = true;

  constructor() {
    this.loadItem();
  }

  ngOnInit() {
  }

  loadItem() {
    setTimeout(() => {
      this.items = DataDemo;
      this.cargando = false;
      console.log('items -> ', this.items);
    }, 2000);
  }
}

const DataDemo: Models.Store.Item[] = [
  {
    id: '1',
    name: 'Producto 1',
    description: 'Producto de prueba 1',
    price: 100.50,
    image: 'https://via.placeholder.com/100x100'
  },
  {
    id: '2',
    name: 'Producto 2',
    description: 'Producto de prueba 2',
    price: 200.75,
    image: 'https://via.placeholder.com/100x100'
  },
  {
    id: '3',
    name: 'Producto 2',
    description: 'Producto de prueba 2',
    price: 200.75,
    image: null
  },
  //... más productos...
];
