import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  gridSize = 3;
  grid = [];
  turn = 0;
  solved = false;
  whowin = -1;
  winningrow = [];

  constructor() { }

  ngOnInit(): void { }

  // intialize grid of n * n with value 0
  intializeGrid() {
    this.grid = [];
    this.turn = 0;
    if (this.gridSize >= 3 && this.gridSize <= 8) {
      for (let i = 0; i < this.gridSize; i++) {
        this.grid.push([]);
        for (let j = 0; j < this.gridSize; j++) {
          this.grid[i].push(0);
        }
      }
    }
    else {
      alert("Valid GridSize [3 to 8]");
    }
  }

  getclicked(i: any, j: any) {
    if (this.grid[i][j] == 0) {
      this.turn++;
      this.grid[i][j] = this.turn;
      if (!this.solved) {
        this.solved = this.solvedOrNot(this.grid, this.turn % 2);
        if (this.solved) {
          this.whowin = this.turn % 2;
        }
      }
    }
  }

  getColor(row: number, col: number) {
    if (this.whowin != -1) {
      for (let i = 0; i < this.winningrow.length; i += 2) {
        if (row == this.winningrow[i] && col == this.winningrow[i + 1]) {
          return "yellow";
        }
      }
    }
    return "white";
  }
  getSign(i: any, j: any) {
    if (this.grid[i][j] % 2 != 0) {
      return "O";
    } else if (this.grid[i][j] % 2 == 0 && this.grid[i][j] != 0) {
      return "X";
    } else {
      return "";
    }
  }

  solvedOrNot(grid: any, rem: any) {
    this.winningrow = [];
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
          len1--;
          this.winningrow.push(i);
          this.winningrow.push(j);
        }
      }
      if (len1 == 0) {
        return true;
      }
    }
    //checking for vertical lines
    this.winningrow = [];
    for (let j = 0; j < grid.length; j++) {
      len2 = grid[j].length;
      for (let i = 0; i < grid[j].length; i++) {
        if (grid[i][j] % 2 == rem && grid[i][j] != 0) {
          len2--;
          this.winningrow.push(i);
          this.winningrow.push(j);
        }
      }
      if (len2 == 0) {
        return true;
      }
    }
    //checking for diagnal lines
    this.winningrow = [];
    len1 = grid.length;
    len2 = grid.length;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][i] % 2 == rem && grid[i][i] != 0) {
        len1--;
        this.winningrow.push(i);
        this.winningrow.push(i);
      }
    }
    if ((len1 == 0)) {
      return true;
    }
    this.winningrow = [];
    for (let i = 0; i < grid.length; i++) {
      if (grid[grid.length - i - 1][i] % 2 == rem && grid[grid.length - i - 1][i] != 0) {
        len2--;
        this.winningrow.push(grid.length - i - 1);
        this.winningrow.push(i);
      }
    }
    if ((len2 == 0)) {
      return true;
    }
    return false;
  }
}
