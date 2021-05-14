import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { EightpuzzleComponent } from './eightpuzzle/eightpuzzle.component';

const appRoutes: Routes = [
  { path: "", redirectTo: '/tictactoe', pathMatch: 'full' },
  { path: "tictactoe", component: TictactoeComponent },
  { path: "eightpuzzle", component: EightpuzzleComponent },
  { path: "chess",
    loadChildren: () => import('./chess/chess.module').then(m => m.ChessModule),
  },
  { path: "**", redirectTo: '/tictactoe' }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
