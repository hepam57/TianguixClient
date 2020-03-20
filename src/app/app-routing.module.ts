import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ SideNavComponent } from './SharedModule/side-nav/side-nav.component'

const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: 'page',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
