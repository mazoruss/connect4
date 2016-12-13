import React, { Component } from 'react';
import './App.css';
import Board from './board.js';

var matrix = [];
for (var i = 0; i < 7; i++) {
  var row = [];
  for (var j = 0; j < 7; j++) {
    row.push(0);
  }
  matrix.push(row);
}

console.log(matrix);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: matrix,
      player: 1,
      message: 'player 1',
      isOver: false
    }
    this.drop = this.drop.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  drop(x) {
    if (this.state.isOver) { return; }
    var board = this.state.board;
    var y = 6;
    while(board[y][x] !== 0 && y > -1) {
      y--;
    }
    if (y === -1) { return; }
    board[y][x] = this.state.player;
    var player = this.state.player % 2 + 1;
    this.setState({ board , player, message: 'player ' + player }, this.checkWinner);
  }

  checkWinner() {
    var board = this.state.board;
    var winner = null;
    board.forEach((row, y) => {
      row.forEach((player, x) => {
        if ( player > 0 && (
            this.checkRow(x, y, board, player) ||
            this.checkCol(x, y, board, player) ||
            this.checkDiag1(x, y, board, player) ||
            this.checkDiag2(x, y, board, player)))
        {
          winner = player;
        }
      })
    })
    if (winner) {
      this.setState({isOver: true, message: 'WINNER!'})
    }
  }

  checkRow(x, y, board, player) {
    if (board[y][x] === player && board[y][x+1] === player 
      && board[y][x+2] === player && board[y][x+3] === player) {
      return true;
    }
    return false;
  }

  checkCol(x, y, board, player) {
    if (board[y] && board[y+1] && board[y+2] && board[y+3] &&
      board[y][x] === player && board[y+1][x] === player && board[y+2][x] === player && board[y+3][x] === player) 
    {
      return true;
    }
    return false;
  }

  checkDiag1(x, y, board, player) {
    if (board[y] && board[y+1] && board[y+2] && board[y+3] &&
      board[y][x] === player && board[y+1][x+1] === player && board[y+2][x+2] === player && board[y+3][x+3] === player) 
    {
      return true;
    }
    return false;
  }

  checkDiag2(x, y, board, player) {
    if (board[y] && board[y+1] && board[y+2] && board[y+3] &&
      board[y][x] === player && board[y+1][x-1] === player && board[y+2][x-2] === player && board[y+3][x-3] === player) 
    {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <Board board={this.state.board} drop={this.drop}/>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
