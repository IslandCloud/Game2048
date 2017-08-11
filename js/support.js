function getPosTop(i, j) {
    return 20 + i * 120;
}

function getPosLeft(i, j) {
    return 20 + j * 120;
}

function getNumberFontSize(number){
    if(number < 1024){
        return "60px";
    }else{
        return "35px";
    }
    return 0;
}

function getNumberBackgroundColor(number) {
    switch (number){
        case 2:
            return "#eee4da";
            break;
        case 4:
            return "#eee4da";
            break;
        case 8:
            return "#f26179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e36";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#3365a5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#93c";
            break;
        default:
            break;
    }
    return "black";
}

function getNumberColor(number) {
    if(number <= 4){
        return "#776e65";
    }
    return "white";
}

function ableToMoveUp() {
    for(var i = 1; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(board[i][j] !== 0){
                if(board[i - 1][j] === 0 || board[i][j] === board[i - 1][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function ableToMoveDown() {
    for(var i = 2; i >= 0; i--){
        for(var j = 0; j < 4; j++){
            if(board[i][j] !== 0){
                if(board[i + 1][j] === 0 || board[i][j] === board[i + 1][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function ableToMoveLeft() {
    for(var j = 0; j < 4; j++){
        for(var i = 0; i < 4; i++){
            if(board[i][j] !== 0){
                if(board[i][j - 1] === 0 || board[i][j] === board[i][j - 1]){
                    return true;
                }
            }
        }
    }
    return false;
}

function ableToMoveRight() {
    for(var j = 2; j >= 0; j--){
        for(var i = 0; i < 4; i++){
            if(board[i][j] !== 0){
                if(board[i][j + 1] === 0 || board[i][j] === board[i][j + 1]){
                    return true;
                }
            }
        }
    }
    return false;
}

function moveUp(){

    for(var j = 0; j < 4; j++){
        for(var i = 1; i < 4; i++){//start from the second row
            if(board[i][j] === 0){
                continue;
            }
            var zeroCounter = 0;
            for(var k = 0; k < i; k++){
                if(board[k][j] === 0){
                    zeroCounter++;
                }
            }
            var t = i - zeroCounter;
            var temp = board[t][j];
            board[t][j] = board[i][j];
            board[i][j] = temp;
        }
    }

    for(var j = 0; j < 4; j++){
        for(var i = 0; i < 3; i++){
            if(board[i][j] !== 0 && board[i][j] === board[i + 1][j]){
                board[i][j] *= 2;
                score += board[i][j];
                var t = i + 1;
                while(t < 3){
                    board[t][j] = board[t + 1][j];
                    t++;
                }
                board[3][j] = 0;
            }
        }
    }
    showScore();
    addNewNode();
    
}

function moveDown(){

    for(var j = 0; j < 4; j++){
        for(var i = 2; i >= 0; i--){
            if(board[i][j] === 0){
                continue;
            }
            var zeroCounter = 0;
            for(var k = 3; k > i; k--){
                if(board[k][j] === 0){
                    zeroCounter++;
                }
            }
            var t = i + zeroCounter;
            var temp = board[t][j];
            board[t][j] = board[i][j];
            board[i][j] = temp;
        }
    }

    for(var j = 0; j < 4; j++){
        for(var i = 3; i > 0; i--){
            if(board[i][j] !== 0 && board[i - 1][j] === board[i][j]){
                board[i][j] *= 2;
                score += board[i][j];
                var t = i - 1;
                while(t > 0){
                    board[t][j] = board[t - 1][j];
                    t--;
                }
                board[0][j] = 0;
            }
        }
    }
    showScore();
    addNewNode();

}

function moveLeft(){
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 4; j++){
            if(board[i][j] === 0 || j === 0){
                continue;
            }
            var zeroCounter = 0;
            for(var k = 0; k < j; k++){
                if(board[i][k] === 0){
                    zeroCounter++;
                }
            }
            var t = j - zeroCounter;
            var temp = board[i][t];
            board[i][t] = board[i][j];
            board[i][j] = temp;
        }
    }

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
            if(board[i][j] !== 0 && board[i][j] === board[i][j + 1]){
                board[i][j] *= 2;
                score += board[i][j];
                var t = j + 1;
                while(t < 3){
                    board[i][t] = board[i][t + 1];
                    t++;
                }
                board[i][3] = 0;
            }
        }
    }
    showScore();
    addNewNode();
}

function moveRight(){
    for(var i = 0; i < 4; i++){
        for(var j = 2; j >= 0; j--){
            if(board[i][j] === 0 || j === 3){
                continue;
            }
            var zeroCounter = 0;
            for(var k = 3; k > j; k--){
                if(board[i][k] === 0){
                    zeroCounter++;
                }
            }
            var t = j + zeroCounter;
            var temp = board[i][t];
            board[i][t] = board[i][j];
            board[i][j] = temp;
        }
    }

    for(var i = 0; i < 4; i++){
        for(var j = 3; j > 0; j--){
            if(board[i][j] !== 0 && board[i][j - 1] === board[i][j]){
                board[i][j] *= 2;
                score += board[i][j];
                var t = j - 1;
                while(t > 0){
                    board[i][t] = board[i][t - 1];
                    t--;
                }
                board[i][0] = 0;
            }
        }
    }
    showScore();
    addNewNode();
}

function showScore(){
    $("#score").text(score);
}


function gameOver() {
    return !(ableToMoveUp(board) || ableToMoveDown(board) || ableToMoveLeft(board) || ableToMoveRight(board));
}
