import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from '../shared/shared.module';
import { IonContent } from '@ionic/angular/standalone';


@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonContent
  ]
})
export class PagesModule { }
