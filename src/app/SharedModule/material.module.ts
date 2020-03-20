import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
/**
 * Módulos a compartir
 */
const modules: any[] = [
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
];

/**
 * Este modulo comparte todas las utilidades
 * y componentes de Angular Material que serán
 * utilizadas a lo largo de la aplicación.
 */
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: []
})
export class MaterialModule { }
