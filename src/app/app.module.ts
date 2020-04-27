import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { EightpuzzleComponent } from './eightpuzzle/eightpuzzle.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TictactoeComponent,
    EightpuzzleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
