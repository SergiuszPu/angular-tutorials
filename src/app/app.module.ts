import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularProComponent } from './angular-pro/angular-pro.componen';
import { FormContentComponent } from './angular-pro/form-content/form-content.component';
import { AuthRememberComponent } from './angular-pro/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './angular-pro/auth-message/auth-message.component';


const routes: Routes = [
  {path:'todd', component: AngularProComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormContentComponent,
    AuthRememberComponent,
    AngularProComponent,
    AuthMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
