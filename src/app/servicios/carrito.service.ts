import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito$ = new Subject<number>();
  carrito: number;

  constructor() {
    this.initVariale();
   }

  initVariale(){
    this.carrito = 0;
  }

  subir(){
    this.carrito++;
    this.getCarrito();
  }

  bajar(){
    this.carrito--;
    this.getCarrito();
  }

  getCarrito(){
    this.carrito$.next(this.carrito);  // Emitimos el nuevo
    console.log(this.carrito);
    return this.carrito;
  }

  getCarritoChanges(){
    return this.carrito$.asObservable();
  }
}
