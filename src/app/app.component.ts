import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';
  gridSize = 3;
  grid = [];
  turn = 0;
  solved = false;
  whowin = -1;
  // intialize grid of n * n with value 0
  intializeGrid() {
    this.grid = [];
    this.turn = 0;
    for (let i = 0; i < this.gridSize; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.gridSize; j++) {
        this.grid[i].push(0);
      }
    }
  }
  getclicked(i: any, j: any) {
    if (this.grid[i][j] == 0) {
      this.turn++;
      this.grid[i][j] = this.turn;
      if (!this.solved) {
        this.solved = this.solvedOrNot(this.grid, this.turn % 2);
        if(this.solved) {
          this.whowin = this.turn % 2;
        }
      }
    }
  }
  getSign(i: any, j: any) {
    if (this.grid[i][j] % 2 != 0) {
      return "O";
    } else if (this.grid[i][j] % 2 == 0 && this.grid[i][j] != 0){
      return "X";
    } else {
      return "";
    }
  }
  solvedOrNot(grid: any, rem: any) {
    if (grid.length == 0) {
      return false;
    }
    let len1 = grid.length;
    let len2 = grid.length;
    // checking for horizontal lines
    for (let i = 0; i < grid.length; i++) {
       len1 = grid[i].length;
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] % 2 == rem && grid[i][j] != 0) {
          len1 --;
        }
      }
      if (len1 == 0) {
        return true;
      }
    }
    //checking for vertical lines
    for (let j = 0; j < grid.length; j++) {
      len2 = grid[j].length;
      for (let i = 0; i < grid[j].length; i++) {
        if (grid[i][j] % 2 == rem && grid[i][j] != 0) {
          len2 --;
        }
      }
      if (len2 == 0 ) {
        return true;
      }
    }
    //checking for diagnal lines
    len1 = grid.length;
    len2 = grid.length;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][i] % 2 == rem && grid[i][i] != 0) {
        len1 --;
      }
      if (grid[grid.length - i -1][i] % 2 == rem && grid[grid.length - i -1][i] != 0) {
        len2 --;
      }
    }
    if ((len1 == 0 ||  len2 == 0)) {
      return true;
    }
    return false;
  }
  
}
