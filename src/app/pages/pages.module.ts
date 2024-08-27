import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule, // Añádelo en la sección de imports,
    ReactiveFormsModule, // Añade ReactiveFormsModule aquí
    IonicModule, // Añade IonicModule aquí
  ]
})
export class PagesModule { }
