var grid = [["X", "o", " "], [" ", "X", "o"], ["o", " ", "X"]] // I made a 2d array by creating three arrays inside an array
console.log(`       |       |       `) // this is mostly just space apart from a couple of lines, purely for aesthetics
console.log(`   ${grid[0][0]}   |   ${grid[0][1]}   |   ${grid[0][2]}   `) // this is the first row of the array, called 'grid'. All zero on the first sub-array which is x axis, 0-2 on the second sub-array which is the y axis, resulting in the first row of the array
console.log(`       |       |       `)
console.log(`-------+-------+-------`) // this is just lines and plus symbols, again purely for aesthetics to make up a grid
console.log(`       |       |       `)
console.log(`   ${grid[1][0]}   |   ${grid[1][1]}   |   ${grid[1][2]}   `)
console.log(`       |       |       `)
console.log(`-------+-------+-------`)
console.log(`       |       |       `)
console.log(`   ${grid[2][0]}   |   ${grid[2][1]}   |   ${grid[2][2]}   `)
console.log(`       |       |       `)
console.log()
sg = [["1","2","3"],["4","5","6"],["7","8","9"]] // I'm making another 2d array for another naughts and crosses grid. sg means Second Grid

num = 0 // num was used earlier, I'm going to set it to 0 before I reuse it

for (i=0;i<3;i++){ // This section is going to randomise the naughts and crosses which is good for proving that all of this works. I'm going to loop for the x and y of the grid
    for (j=0;j<3;j++){ // i is the x and y is the z, so this will loop 9 times in total
        num = Math.floor(Math.random() * 3) // num is going to be a random number from 0 to 2
        if (num == 0){ // 
            sg[i][j] = " "
        }
        else if (num == 1){
            sg[i][j] = "O"
        }
        else {
            sg[i][j] = "X"
        }
        
    }
}

gp1 = "       |       |       " // this time, I'm using different parts to make the grid, so I can just reuse the same code. gp means Grid Part
gp2 = "-------+-------+-------" 
gp3 = "   " // this piece is used as a margin at the beginning and end of the row
gp4 = "   |   " // this is used to connect the parts of the grid and seperate them with a horisontal bar

row = 0 // If I were to create a function to automate the previous line though, it would look something like this. row is a variable that I'll be using as a parameter in it
gpconcat = "" // to start with, I'm creating a string to hold the gridpiece (the first row) which means I can concatonate it
function gp5(row, zero){ // the function is called Grid Piece 5, and it requires a row parameter. This just means that I can repeat it for the other two rows by changing this number. I have no idea why it needs a psuedo-null secondary paramater...
    gpconcat = "" // the string starts off empty on initiating the function, just to make sure I'm not overwriting anything if I reuse it
    return gpconcat.concat( // the function should return the concatonated result of the following variables, creating a single line which I can write easily
        gp3 + // the row starts with a margin, this is just 3 spaces
        sg[row][0] + // this should be the first O/X piece on the first run-through, because it should be sg[0][0] if 0 is passed into the parameter
        gp4 + // this is a joining piece, it's a few spaces and horizontal bars
        sg[row][1] + // second game piece of the specified row
        gp4 + // joining piece
        sg[row][2] + // third game piece of the specified row
        gp3)} // this function ends with a few spaces. Totally unnecessary actually, but I'd be too OCD to omit the end of the line

console.log()
console.log(gp1) // to long the grid, I start with the first grid piece, which is a load of spaces and two vertical lines
console.log(gp5(0)) // the second line uses grid piece 5, the function that uses 0 as its parameter and should retrieve the first row of the grid array
console.log(gp1)
console.log(gp2)
console.log(gp1)
console.log(gp5(1))
console.log(gp1)
console.log(gp2)
console.log(gp1)
console.log(gp5(2))
console.log(gp1)

function checkLine(ch1, ch2, ch3){ // checkline is fed three different strings, one per piece of a potential naughts and crosses line
    if (ch1 == ch2 && ch1 == ch3 && ch1 != " ") { // its main task is to check that the first is equal to the second and the third, and that they're not just blank
        return ch1} // if they're all a naught or a cross, then whichever it is will be returned 
    else{return null}} // there's no point in returning anything if it's anything else, but just to be safe I'm returning a null
winner = "no one" // the 'winner' variable is what we're going to be using to show who the winner is, if you couldn't guess. It defaults to no one, because no one has won yet
function checkWinner(chxyd, chno){ // the winner checker uses a somewhat odd format. The first variable is either x, y or diagonal and the second is the line of that type that is being checked. For example, x 1 is the middle horizontal line
    if(chxyd == "x"){ 
        return checkLine(sg[chno][0], sg[chno][1], sg[chno][2])
    }
    else if(chxyd == "y"){
        return checkLine(sg[0][chno], sg[1][chno], sg[2][chno])
    }
    else if(chno == 0){
        return checkLine(sg[0][0], sg[1][1], sg[2][2])
    }
    else{
        return checkLine(sg[0][2], sg[1][1], sg[2][0])
    }
}
function updateWinner(xoro){
    if (xoro == "X" || xoro == "O"){ // if the line is filled with noughts or crosses,
        if (winner == "no one"){winner = xoro} // and there isn't a winner, then that player becomes the winner
        else if (winner != " " && winner != xoro){winner = "no one"} // if the winner is already considered the other player, then that means it must be a tie and no one wins
    }
}
function checkWholeGrid(){
    updateWinner(checkWinner("x", 0))
    updateWinner(checkWinner("x", 1))
    updateWinner(checkWinner("x", 2))
    updateWinner(checkWinner("y", 0))
    updateWinner(checkWinner("y", 1))
    updateWinner(checkWinner("y", 2))
    updateWinner(checkWinner("d", 0))
    updateWinner(checkWinner("d", 1))
}
checkWholeGrid()
console.log()
console.log(`${winner} is the winner`)
console.log()