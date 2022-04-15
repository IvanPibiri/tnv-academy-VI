import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UsersComponent } from './components/users/users.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { FormSampleComponent } from './components/form-sample/form-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    UsersComponent,
    NavbarComponent,
    LoginComponent,
    PostDetailComponent,
    PostListItemComponent,
    FormSampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
