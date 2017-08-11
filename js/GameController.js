var board = new Array();
var score = 0;

$(document).ready(function(){
    newGame();
});

$(document).keydown(function(event){
    if(!gameOver()){
        switch(event.keyCode){
            case 37://Left
                if(ableToMoveLeft()){
                    moveLeft();
                    showCurrentBoard();
                }
                break;
            case 38://Up
                if(ableToMoveUp()){
                    moveUp();
                    showCurrentBoard();
                }
                break;
            case 39://Right
                if(ableToMoveRight()){
                    moveRight();
                    showCurrentBoard();
                }
                break;
            case 40://Down
                if(ableToMoveDown()){
                    moveDown();
                    showCurrentBoard();
                }
                break;
            default:
                break;
        }
    }else{
        alert("Game Over!\nYour Final Score is " + score);
    }
});

function newGame(){
    score = 0;
    showScore();
    init();
    addNewNode();
    addNewNode();
    showCurrentBoard();
}

function init(){
    score = 0;

    for(var i = 0; i < 4; i++){
        board[i] = new Array();
        for(var j = 0; j < 4; j++){
            board[i][j] = 0;
        }
    }

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            var cell = $("#grid-cell-" + i + j);
            cell.css("top", getPosTop(i, j));
            cell.css("left", getPosLeft(i, j));
            cell.css("background-color", "#ccc0b3");
        }
    }

}

function addNewNode(){

    var randx, randy;
    do{
        randx = parseInt(Math.floor(Math.random() * 4));
        randy = parseInt(Math.floor(Math.random() * 4));
    }while(board[randx][randy] !== 0);
    board[randx][randy] = Math.random() > 0.3 ? 2 : 4;

}

function showCurrentBoard(){

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            var cell = $("#grid-cell-" + i + j);
            if(board[i][j] === 0){
                cell.css("top", getPosTop(i, j));
                cell.css("left", getPosLeft(i, j));
                cell.css("background-color", "#ccc0b3");
                cell.css("font-size", "1px");//隐藏数字
            }else{
                cell.css("top", getPosTop(i, j));
                cell.css("left", getPosLeft(i, j));
                cell.css("background-color", getNumberBackgroundColor(board[i][j]));
                cell.css("color", getNumberColor(board[i][j]));
                cell.css("font-size", getNumberFontSize(board[i][j]));//显示数字
                cell.text(board[i][j]);
            }
        }
    }

}