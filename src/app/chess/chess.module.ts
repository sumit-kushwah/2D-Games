import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessRoutingModule } from './chess-routing.module';
import { ChessComponent } from './chess.component';


@NgModule({
  declarations: [ChessComponent],
  imports: [
    CommonModule,
    ChessRoutingModule
  ]
})
export class ChessModule { }
