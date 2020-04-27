import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eightpuzzle',
  templateUrl: './eightpuzzle.component.html',
  styleUrls: ['./eightpuzzle.component.css']
})
export class EightpuzzleComponent implements OnInit {

  moves: number = 0;
  grid = [];
  rowAndColIndexForZero: { row: number, col: number };

  constructor() { }

  ngOnInit(): void {
    let randomPermutation = this.randamizePermutation(9);
    for (let i = 0; i < 3; i++) {
      this.grid.push([]);
      for (let j = 0; j < 3; j++) {
        this.grid[i].push(randomPermutation[i * 3 + j]);
        // for condition
        if (randomPermutation[i * 3 + j] == 0) {
          this.rowAndColIndexForZero = {
            row: i,
            col: j
          };
        }
      }
    }
  }

  randamizePermutation(listSize: number) {
    let randomList = [];
    for (let i = 0; i < listSize; i++) {
      randomList.push(i);
    }
    for (let i = listSize - 1; i >= 1; i--) {
      let index = this.getRandomIntInclusive(0, i - 1);
      let temp = randomList[index];
      randomList[index] = randomList[i];
      randomList[i] = temp;
    }
    return randomList;
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  changeGridState() {

  }

  onTileClick(row: number, col: number) {
    if (this.upDateGridAndZeroIndexes(row, col) && !this.isPuzzleSolved()) {
      this.moves++;
    }
  }

  upDateGridAndZeroIndexes(row: number, col: number) {
    // four condition up
    if (this.rowAndColIndexForZero.row == (row - 1) && this.rowAndColIndexForZero.col == col) {
      this.grid[row - 1][col] = this.grid[row][col];
      this.grid[row][col] = 0;
      this.rowAndColIndexForZero = {
        row: row,
        col: col
      };
      // for condition right
    } else if (this.rowAndColIndexForZero.row == (row) && this.rowAndColIndexForZero.col == (col + 1)) {
      this.grid[row][col + 1] = this.grid[row][col];
      this.grid[row][col] = 0;
      this.rowAndColIndexForZero = {
        row: row,
        col: col
      };
      // for condition down
    } else if (this.rowAndColIndexForZero.row == (row + 1) && this.rowAndColIndexForZero.col == col) {
      this.grid[row + 1][col] = this.grid[row][col];
      this.grid[row][col] = 0;
      this.rowAndColIndexForZero = {
        row: row,
        col: col
      };
      // for condition left
    } else if (this.rowAndColIndexForZero.row == (row) && this.rowAndColIndexForZero.col == (col - 1)) {
      this.grid[row][col - 1] = this.grid[row][col];
      this.grid[row][col] = 0;
      this.rowAndColIndexForZero = {
        row: row,
        col: col
      };
    } else {
      return false;
    }
    return true;
  }

  isPuzzleSolved(): boolean {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j] != ((i * 3 + j + 1) % 9)) {
          return false;
        }
      }
    }
    return true;
  }

  autoSolvePuzzle() {
    alert("Sorry!! This functionality is not implemented yet!!");
  }

}
