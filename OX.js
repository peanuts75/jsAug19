function initgrid(){
    grd = [["1","2","3"],["4","5","6"],["7","8","9"]]
    grdwin = [[false, false, false],[false, false, false],[false, false, false]]
    winners = "no one"
}


function scramblegrid(){
    for ( i = 0; i < 3; i++){
        for ( j = 0; j < 3; j++){
            num = Math.floor(Math.random()*3)
            switch (num){
                case 0: grd[i][j] = "X"
                    break
                case 1: grd[i][j] = "O"
                    break
                case 2: grd[i][j] = " "
                    break
            }
        }
    }
}

function spc(spaces, x, y){
    winsq = grdwin[x][y]
    if (winsq){return "░".repeat(spaces)}
    else { return " ".repeat(spaces)}
}
function horizline(){console.log("-".repeat(23))}
function gapline(lineno){
    console.log(`${spc(7, lineno, 0)}|${spc(7, lineno, 1)}|${spc(7, lineno, 2)}`)
}
function numline(lineno){
    console.log(`${spc(3, lineno, 0)}${grd[lineno][0]}${spc(3, lineno, 0)}|${spc(3, lineno, 1)}${grd[lineno][1]}${spc(3, lineno, 1)}|${spc(3, lineno, 2)}${grd[lineno][2]}${spc(3, lineno, 2)}`)
}

function chkln(type, variation){
    score = " "
    if (type == "h"){
        if (grd[variation][0] == grd[variation][1] && grd[variation][1] == grd[variation][2] && grd[variation][0] != " "){
            grdwin[variation][0] = true
            grdwin[variation][1] = true
            grdwin[variation][2] = true
            score = grd[variation][0]
        }
    }
    if (type == "v"){
        if (grd[0][variation] == grd[1][variation] && grd[1][variation] == grd[2][variation] && grd[0][variation] != " "){
            grdwin[0][variation] = true
            grdwin[1][variation] = true
            grdwin[2][variation] = true
            score = grd[0][variation]
        } 
    }
    else{
        if (variation == 0){
            if (grd[0][0] == grd[1][1] && grd[1][1] == grd[2][2] && grd[1][1] != " "){
                grdwin[0][0] = true
                grdwin[1][1] = true
                grdwin[2][2] = true
                score = grd[1][1]
            }
        }
        if (grd[0][2] == grd[1][1] && grd[1][1] == grd[2][0] && grd[1][1] != " "){ // shows O wins
            grdwin[0][2] = true
            grdwin[1][1] = true
            grdwin[2][0] = true
            score = grd[1][1]
        }     
    }
    if (score == "X" && winners == "O"){winners = "tie"}
    else if (score == "O" && winners == "X"){winners = "tie"}
    else if (score == "X" || score == "O"){winners = score}
}
function checkgrid(){
    chkln("h",0)
    chkln("h",1)
    chkln("h",2)
    chkln("v",0)
    chkln("v",1)
    chkln("v",2)
    chkln("d",0)
    chkln("d",1)
}
function drawgrid(){
    gapline(0)
    numline(0)
    gapline(0)
    horizline()
    gapline(1)
    numline(1)
    gapline(1)
    horizline()
    gapline(2)
    numline(2)
    gapline(2)
}

function checkwinners(){
    if (winners == "no one"){console.log("No one wins")}
    if (winners == "O"){console.log("O wins")}
    if (winners == "X"){console.log("X wins")}
    if (winners == "tie"){console.log("The game is tied")}
}

initgrid()
scramblegrid()
checkgrid()
drawgrid()
checkwinners()