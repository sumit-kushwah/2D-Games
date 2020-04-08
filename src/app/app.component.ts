import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';
  clickedList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turn = 0;
  firstList = [];
  secondList = [];
  result = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
  ];
  solved = false;
  whowin = 0;
  turnList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  getClicked(num : any) {
    if (this.clickedList[num - 1] == 0) {
      this.clickedList[num - 1] = 1;
      this.turn++;
      this.turnList[num - 1] = this.turn; 
    }
    if (this.turn % 2 != 0) {
      this.firstList.push(num);
      if (this.firstList.length >= 3 ) {
        this.solved = this.foundOrNot(this.result, this.firstList);
        if(this.solved) {
          this.whowin = 1;
        }
      }
    } else {
      this.secondList.push(num);
      if (this.secondList.length >= 3) {
        this.solved = this.foundOrNot(this.result, this.secondList);
        if(this.solved) {
        this.whowin = 2;
        }
      }
    }
    // console.log(this.firstList);
    // console.log(this.secondList);

  }
  getSign(num: any) {
    if (this.turnList[num - 1] % 2 != 0) {
      return "O";
    } else {
      return "X";
    }
  }
  foundOrNot(result: any, arr: any) {
    arr.sort();
    // console.log(result);
    // console.log(arr);
    // let templist = [];
    for (let i = 0; i < result.length; i++) {
      let count = 0;
      let temp = result[i];
      for (let j = 0; j < arr.length; j++) {
        if(arr[j] == temp[count]) {
          count ++;
        }
        if (count == 3) {
          // templist.push(count);
          // console.log(templist);
          return true;
        }
      }
      
      
    }
    return false;
  }
}
