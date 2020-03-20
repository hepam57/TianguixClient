import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { SideNavComponent } from './side-nav/side-nav.component';


import { NgxCurrencyModule } from "ngx-currency";


/**
 * Módulos a compartir
 */
const modules: any[] = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule,
  NgxCurrencyModule
];

/**
 * Contiene todos los módulos que se comparten a
 * lo largo de la aplicación.
 */
@NgModule({
  declarations:[SideNavComponent],
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule { }
