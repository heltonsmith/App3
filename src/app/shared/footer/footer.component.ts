import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  cant: number = 0;
  carrito = inject(CarritoService);

  constructor() { }

  ngOnInit() {
    this.carrito.getCarritoChanges().subscribe(changes => {
      this.cant = changes;
    });
  }

}
