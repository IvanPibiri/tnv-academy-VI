import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent},
  { path: 'users', component: UsersComponent},
  { path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
