'use strict';

let tableEl = document.querySelector('table');
let figuresArray = [
 ['-', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
 ['8', '<i class="fas fa-chess-rook blackFigure">', '<i class="fas fa-chess-knight blackFigure">', '<i class="fas fa-chess-bishop blackFigure">', '<i class="fas fa-chess-queen blackFigure">', '<i class="fas fa-chess-king blackFigure">', '<i class="fas fa-chess-bishop blackFigure">', '<i class="fas fa-chess-knight blackFigure">', '<i class="fas fa-chess-rook blackFigure">'],
 ['7', '<i class="fas fa-chess-pawn blackFigure">', '<i class="fas fa-chess-pawn blackFigure">', '<i class="fas fa-chess-pawn blackFigure">', '<i class="fas fa-chess-pawn blackFigure">', '<i class="fas fa-chess-pawn blackFigure">', '<i class="fas fa-chess-pawn blackFigure">', '<i class="fas fa-chess-pawn blackFigure">', '<i class="fas fa-chess-pawn blackFigure">'],
 ['6', '', '', '', '', '', '', '', ''],
 ['5', '', '', '', '', '', '', '', ''],
 ['4', '', '', '', '', '', '', '', ''],
 ['3', '', '', '', '', '', '', '', ''],
 ['2', '<i class="fas fa-chess-pawn whiteFigure">', '<i class="fas fa-chess-pawn whiteFigure">', '<i class="fas fa-chess-pawn whiteFigure">', '<i class="fas fa-chess-pawn whiteFigure">', '<i class="fas fa-chess-pawn whiteFigure">', '<i class="fas fa-chess-pawn whiteFigure">', '<i class="fas fa-chess-pawn whiteFigure">', '<i class="fas fa-chess-pawn whiteFigure">', ],
 ['1', '<i class="fas fa-chess-rook whiteFigure">', '<i class="fas fa-chess-knight whiteFigure">', '<i class="fas fa-chess-bishop whiteFigure">', '<i class="fas fa-chess-queen whiteFigure">', '<i class="fas fa-chess-king whiteFigure">', '<i class="fas fa-chess-bishop whiteFigure">', '<i class="fas fa-chess-knight whiteFigure">', '<i class="fas fa-chess-rook whiteFigure">']
 ];

 function getChessBoard(arr) {

 	for(let i = 0; i < arr.length; i++) {

 		let tableLine = document.createElement('tr');

 		for(let j = 0; j < arr[i].length; j++) {

 			let tableCell = document.createElement('td');
 			pasteFiguresOnTheBoard(figuresArray, tableCell, i, j);
 			if(i == 1 && j % 2 == 0 && j !== 0) {
 				tableCell.classList.add('blackColorCell');
 			} 
 			if(i == 2 && j % 2 !== 0 && j !== 0) {
 				tableCell.classList.add('blackColorCell');
 			}
 			if(i == 3 && j % 2 == 0 && j !== 0) {
 				tableCell.classList.add('blackColorCell');
 			}
 			if(i == 4 && j % 2 !== 0 && j !== 0) {
 				tableCell.classList.add('blackColorCell');
 			}
 			if(i == 5 && j % 2 == 0 && j !== 0) {
 				tableCell.classList.add('blackColorCell');
 			}
 			if(i == 6 && j % 2 !== 0 && j !== 0) {
 				tableCell.classList.add('blackColorCell');
 			}
 			if(i == 7 && j % 2 == 0 && j !== 0) {
 				tableCell.classList.add('blackColorCell');
 			}
 			if(i == 8 && j % 2 !== 0 && j !== 0) {
 				tableCell.classList.add('blackColorCell');
 			}

 			tableLine.appendChild(tableCell);

 		};

 		tableEl.appendChild(tableLine);
 	};
 }

 getChessBoard(figuresArray);

 function pasteFiguresOnTheBoard(arr2, cell, numberLine, numberCell) {
 	cell.innerHTML = arr2[numberLine][numberCell];		
 }

















