import { Component } from '@angular/core';

const displayPieces : Record<string,string>= {
  'blackpawn':'',
  'blackrook':'',
  'blackking':'',
  'blackqueen':'',
  'blackknight':'',
  'whitepawn':'',
  'whiterook':'',
  'whiteking':'',
  'whitequeen':'',
  'whiteknight':'',
}

interface Piece {
  type: string;
  color: 'white' | 'black';
}

interface Cell {
  piece?: Piece;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess_game';
  board:Cell[][] = createBoard()

  displayPiece(row:number,col:number):string{
    const p = this.board[row][col].piece;
    return p? displayPieces[`${p.color}${p.id}`]:'';
  }
}

function createBoard(): Cell[][] {
  const board: Cell[][] = [];
  for(let i = 0; i<8; i++){
    board.push([]);
    for(let j = 0; j < 8; j++){
      const cell:Cell = {};
      cell.piece = getStartingPiece(i,j,board);
      board[i].push(cell);
    }
  }

  return board;
}

function getStartingPiece(row:number,col:number,board:Cell[][]){
  const color = row <= 1 ? 'black' : 'white';

  if(row === 1 || row == 6){
    return pawn(board,color);
  }

  if(row == 0 || row == 7){
    switch(col){
      case 0:
      case 7:
        return rook(board,color);
      case 1:
      case 6:
        return bishop(board,color);
      case 2:
      case 5:
        return knight(board,color);
      case 3:
        return row == 0 ? queen(board,color) : king(board,color);
      case 4:
        return row == 0 ? queen(board,color) : king(board,color);
    }
  }

  return undefined;
}

function pawn(board:Cell[][],color:'white' | 'black'):Piece {
  return{
    id:'pawn',
    color,
  };
}

function queen(board:Cell[][],color:'white' | 'black'):Piece{
  return{
    id:'queen',
    color,
  };
}


function king(board:Cell[][],color:'white' | 'black'):Piece{
  return{
    id:'king',
    color,
  };
}

function rook(board:Cell[][],color:'white' | 'black'):Piece{
  return{
    id:'rook',
    color,
  };
}

function bishop(board:Cell[][],color:'white' | 'black'):Piece{
  return{
    id:'bishop',
    color,
  };
}

function knight(board:Cell[][],color:'white' | 'black'):Piece{
  return{
    id:'knight',
    color,
  };
}

