import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'details',
    loadChildren: './components/details/details.module#DetailsModule'
    },
    {
      path: 'details',
      loadChildren: () => import('./components/details/details.module').then(m => m.DetailsModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
