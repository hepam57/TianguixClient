
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../SharedModule/shared.module';
import { OrdenesComponent } from './ordenes/ordenes.component';


const routes: Routes = [
  {path: 'ordenes', component: OrdenesComponent}
];


@NgModule({
  declarations: [
    OrdenesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  //exports: [RouterModule]
})
export class PagesModule { }
