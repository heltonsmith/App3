import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  cant: number = 0;
  carrito = inject(CarritoService);

  private authService = inject(AuthService);
  private router = inject(Router);
  constructor() { }
  //constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.carrito.getCarritoChanges().subscribe(changes => {
      this.cant = changes;
    });
  }

  logout() {
    this.authService.logout(); // Llama al método de cierre de sesión del servicio AuthService
    //this.router.navigate(['/login']); // Redirige al usuario a la página de login
  }

}
