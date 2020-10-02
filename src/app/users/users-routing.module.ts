import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/index', pathMatch: 'full'},
  { path: 'user/index', component: IndexComponent },
  { path: 'user/:userId/view', component: ViewComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/:Id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
