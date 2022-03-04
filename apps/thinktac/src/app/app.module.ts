import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule,HttpClientModule,RouterModule,CardModule,DropdownModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
