console.log("hello") // comment

/* for(i=0; i<5; i++){
    thing.do
}*/
var x = "  hello  " // example text for removing whitespace
x = x.trim() // x is changed to itself trimmed; without whitespace
y = x.length  // the length of x, because it's used afterwards somewhat frequently

console.log(`${String(y)} letters in ${x.toLowerCase()}`) // 5 letters in HELLO
if(y == 4 || y == 5){console.log(`there are 4 or 5 letters in ${x}`)} // || is or, && is AND
console.log(`${String(y)} squared is ${String(y**2)}`) // ** is exponent
console.log(`You roll a 6 sided dice, and your result is ${Math.floor(Math.random()*6)+1}`) // 1d6 (1 dice, with 6 sides)

me = { // this is how you create an object; simply add attributes
    name:"Robert", // my name is Robert
    favColour:"Purple", // my favourite colour is purple
    age:24, // my age is 24
    favDrink:"Coke", // my favourite drink is coke
    ateBreakfast:"a sausage and bacon bap", // I ate this yesterday
    ateLunch:"a sandwich", // I ate this yesterday
    ateDinner:"rice and meat", // I also ate this yesterday
    birthDay: new Date(1995,4,7), // I was born on the 7th of may, 1995. That's year 1995, month 4 (starting at 0) and day 7
    country: "UK"} // you probably know this, but I'm in the UK
console.log(`${me.name} is my name`) // this is how you refer to an object's attributes

mnlc = me.name.toLowerCase() // my name in lowercase, this just makes things easier
z = "r".toLowerCase() // this is here as a variable so I can change it and prove that what follows works

if(mnlc.search(z) == -1){console.log(`There is no ${z} in my name`)} // search searches a string for another string and returns the second string's first position in the first
else{console.log(`${z} is first found in place ${mnlc.search(z)+1} of my name`)} // search returns a -1 if it is not found
if(mnlc.lastIndexOf(z) == -1){console.log(`There is no ${z} in my name`)} //l astIndexOf is basically search, but for the last occurance
else{console.log(`${z} is last found in place ${mnlc.lastIndexOf(z)+1} of my name`)} // these second lines are only initiated if the first string can be found in the second

console.log(`the second and third letters of my name are '${mnlc.slice(1,3)}'`) // slice returns a part of the string between the positions specified, including the first number but excluding the second
console.log(`${mnlc.substring(1,3)} sounds silly`) // substring seems to work the same?
console.log(`${mnlc.substr(1,3)} is the second, third and forth letter of my name combined`) // substr, however, includes the character at the end of the selection. In this case, the 4th letter
console.log(mnlc.replace("ob", "bo") + " is my name with the second and third letters reversed") // replaces a each occurance of 'ob' with 'bo' in the name
console.log(x.concat(", ", mnlc, "!")) // concatenates (joins) 'hello', ', ' 'robert' and '!' to make hello, robert!

console.log() // new line just to seperate stuff in the console a little

console.log("All Around the world".toUpperCase().charAt(7) + " is the 8th letter of 'All around the world'") // returns the character at the 7th position of "All Around the world", in upper case
let favouriteDrink = "Coke" // I didn't use this because I put my favourite drink in my 'me' class, but the fact this doesn't throw an error is proof that 'let' works for creating a variable
console.log(`My name is ${me.name}, I am ${me.age}, my favourite colour is ${me.favColour} and my favourite drink is ${me.favDrink}`) // all true!
me.favdrink = "Cola" // well, mostly...
console.log(`Well, technically my favourite drink is ${me.favDrink}`) // I say 'coke', but that refers to Coka Cola brand cola, precluding Fentimans cherry cola
console.log(`Yesterday I ate ${me.ateBreakfast} for breakfast, ${me.ateLunch} for lunch and ${me.ateDinner} for dinner`) // this uses the variables already created earlier, under the 'me' object

me.ateBreakfast = "a sandwich" // this is me changing what I ate yesterday to what I ate today
me.ateLunch = null // though, I wrote this before having lunch
me.ateDinner = null // and since I wrote this before lunch, you can guess that I haven't eaten dinner yet either

console.log(`Today I ate ${me.ateBreakfast} for breakfast, ${me.ateLunch} for lunch and ${me.ateDinner} for dinner (the nulls are intentional. I haven't eaten lunch or dinner yet)`) // thought it'd be more fun this way, I was tempted to investigate error handling for this

var todayDate = new Date() // this creates a date, and defaults to the current time. Very useful!
let timeCounter = todayDate - me.birthDay // timeCounter is a variable I'm using to save time, a temporary variable which I'll change a couple of times leaving the other variables intact and not recalculating unnecessarily

console.log(`${timeCounter} is my age in milliseconds`) // at first, timeCounter is today's date minus my birthday, which is my age in milliseconds
timeCounter /= 86400000 // this isn't spectacularly useful for human readability, so I divide it by how many milliseconds are in a day
console.log(`${Math.floor(timeCounter)} is my age in days`) // the result of this is my age in days
timeCounter /= 7 // by dividing this again I can get my age in weeks
console.log(`${Math.floor(timeCounter)} is my age in weeks`) // leap years don't need to be taken into consideration for this
timeCounter *= 7 // If we re-multiply by 7, we'll get my age in days again. This way is quicker than recalculating the date minus my birthday divided by 86,400,000
timeCounter /= 365.25 // to get my age in years, I divide this by 365.25 to take leap years into account
console.log(`${Math.floor(timeCounter)} is my age in years`) // I can then simply say my date in years. This is more to prove theory than anything, since this is already present in me.birthDay
timeCounter = todayDate - me.birthDay // I'm now resetting the timeCounter to its original value, my age in milliseconds
timeCounter /= 86400000 // of course, I'll need to re-divide it by this huge number to get my age in days
timeCounter %= 365.25 // then I can use the modulous of a year to get how many days past my birthday I currently am
console.log(`That means that I'm ${me.age} years and ${Math.floor(timeCounter)} days old`) // this is a much more useful and human-readable format than anything else so far, but I still don't know what I'd actually do with it...

console.log() // another line just to seperate stuff a little

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


palinNumber = "123454321" // this is a palindrome number. Regardless of length, it'll be checked for whether or not it's a palindrome
palindromeness = true // it's probably traditional to say that it's 'innocent until proven guilty', but that really doesn't matter here so I'm going to assume that it's true at first


for (i=0; i < palinNumber.length / 2 ;i++){ // this is the start of a for loop, which lasts as long as half of the length of the palindrome. There's no point in checking past halfway, because I'd end up checking the numbers twice
    if (palinNumber.charAt(i) != palinNumber.charAt(palinNumber.length - (i+1))){ // this line checks if the character at i's position is NOT equal to the character at the end minus i+1. The +1 is necessary to compensate for length being longer since it doesn't start at 0
        palindromeness = false // effectively, this is checking the first and last digit of palinNumber then moving inwards, and if they're not the same then it can't be a palindrome and its 'palindromeness' is false
        escape // if we confirm that the number is not a palindrome, then we don't need to continue checking and we can escape the for loop
    }
}
if (palindromeness){ //if it has held on to its palindromeness throughout the for loop, 
    console.log("It's a palindrome!") //<---
}
else{ // if it has failed the palindrome check, 
    console.log("It's not a palindrome...") //<---
}



if (me.age > 17 && me.country == "UK") // if I'm 17 and I'm in the country UK,
    {console.log("Yes, I can serve you") // I can be served
}
else // however, if I weren't over 17 and in the UK...
    {console.log("Sorry, I can't serve you") // ...I couldn't be served
}

let password = "blah" // the password used for the following

if (password.length >= 8){ // if the password is at least 8 characters long
    console.log(`Your password is long enough. Also, it is ${password}`) // then you will be told so, and the password will be displayed
}
else{ // if it isn't long enough, though...
    console.log("Your password is too short") // you'll be told that it's too short
}

num = 15 // num is a number, its value isn't particularly important, but it'll be checked for its divisibility

if (num % 3 == 0 || num % 5 == 0){ // if the remainder when dividing by 3 is zero, that means that it's divisible by 3. This line checks that num is divisible by by 3 or 5
    console.log("This number is divisible by 3 or 5”") // when the num is divisible by 3, 5 or 3 and 5 then the console will show this
    if (num % 3 == 0){ //this is  checking whether the number is divisible by 3 again
        console.log("fizz") // and will output "fizz" if it is 
    }
    if (num % 5 == 0){ // this will check if it's divisible by 5
        console.log("buzz") // then output "buzz" if it is
    }
}
else{
    console.log("This number is not divisible by 3 or 5") // if it isn't divisible by 3 or 5, this line will show
}

let favsongs = [ // an array of my favourite songs
    "19-2000 - Gorrilaz", // I don't really listen to music
    "Danny don't you know - NSP",
    "Honeybee - Steam Powered Giraffe"
]
favsongs[1] = "Danny, don't you know? - NSP" // this line is overwriting the second entry of the array with proper punctuation
favsongs.push("Secret song") // there's a secret song in the array now! It's placed at the end of the array
console.log(`My favourite songs are '${favsongs[0]}', '${favsongs[1]}', and '${favsongs[2]}'`) // this is a log of the aforementioned favourite songs, but obviously the secret song isn't mentioned
console.log(`the length of the array is ${favsongs.length} songs`) // this reveals the true length of the array, including the secret song
favsongs.pop(); // now the secret song is removed
console.log(favsongs) // now the array of favourite songs is logged again, and there's no secret song!

favsites = ["Youtube", "Netflix", "Pointlesssites.com"] // an array of my favourite sites, I guess?
console.log(favsites) // showing the favourite sites
console.log(favsites.shift() + " removed") // removing the first entry and simultaneously logging that it has been removed
console.log(favsites) // showing the favourite sites now that the first one has been removed
favsites.unshift("Youtube") // adding Youtube back to the sites, at the beginning as it was before
console.log(`${favsites[0]} re-added`) // logging that the first entry was just re-added
console.log(favsites) // showing all the favourite sites as they originally were
console.log(favsites.slice(1)) // logging the slice at position 1, which is the second position and Netflix
favsites.splice(1,1, "aSiteName") // splicing the second slice, after removing 1 site at that position, with "aSiteName". Basically, replacing Netflix with aSiteName
console.log(favsites) // displaying the new list of favourite sites

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
    if(chxyd == "x"){ // the first potential kind of line is horizontal, so the next line checks for a horizontal line
        return checkLine(sg[chno][0], sg[chno][1], sg[chno][2]) // checkline is occurring for each y combination with this loop's current row
    }
    else if(chxyd == "y"){ // similarly, this line checks for all of the columns
        return checkLine(sg[0][chno], sg[1][chno], sg[2][chno])
    }
    else if(chno == 0){ // if the first variable of the function is neither x nor y, then it has to be checking diagonals. Doesn't really matter what it is, so I'm checking the second variable to see which diagonal this is
        return checkLine(sg[0][0], sg[1][1], sg[2][2]) // the 'zeroth' line is the first cell, the middle cell and the final cell
    }
    else{
        return checkLine(sg[0][2], sg[1][1], sg[2][0]) // the other line is a backslash. If any of these find a line of O's or X's, it'll return what kind of line it is
    }
}
function updateWinner(xoro){ // updateWinner will update the winner variable, something which is more complicated because if X gets a line and O gets a line, neither should win
    if (xoro == "X" || xoro == "O"){ // if the line is filled with noughts or crosses,
        if (winner == "no one"){winner = xoro} // and there isn't a winner, then that player becomes the winner
        else if (winner != " " && winner != xoro){winner = "no one"} // if the winner is already considered the other player, then that means it must be a tie and no one wins
    }
}
function checkWholeGrid(){ // to check the whole grid, I made a function, just in case I'd want to run it again for whatever reason
    updateWinner(checkWinner("x", 0)) // all the function does is use the checkWinner function for each possible kind of line
    updateWinner(checkWinner("x", 1))
    updateWinner(checkWinner("x", 2))
    updateWinner(checkWinner("y", 0))
    updateWinner(checkWinner("y", 1))
    updateWinner(checkWinner("y", 2))
    updateWinner(checkWinner("d", 0))
    updateWinner(checkWinner("d", 1))
}
checkWholeGrid() // now that it's defined and I want to run it, I run it

console.log()
console.log(`${winner} is the winner`) // this is the lazy way of doing this; it not only shows 'X is the winner' or 'O is the winner', but also simply says 'no one is the winner' instead of something more human-readable like 'it's a draw'. I put more time and effort into writing this...
console.log()

let isThinking = false // I'm making a thinking machine, which by default is deactivated. This variable is a simple boolean which indicates whether the thinking machine is thinking or not
const thinkingMachine = () => { // thinkingMachine is a constant object and, rather than being a sophisticated AI, just says that it's thinking if the relevant boolean is true
    if (isThinking){console.log("Thinking...")} // this is almost human readable: If it's thinking (boolean is true), log to the console that it's thinking
    isThinking = !isThinking // whether it's thinking or not, trying to access the thinking machine will switch it from on to off. When it's not 'thinking', it doesn't do anything
}

thinkingMachine() // the first run of the thinking machine shouldn't log anything to the console, but will activate it
thinkingMachine() // now that it's active, it'll start thinking, before being deactivated  again

const colouriser = (colour, object) => { // another constant object I've created is the colouriser, which colourises an object
    console.log(`You've painted the ${object} ${colour}`) // depending on the colour and object passed into it as parameters, it'll paint the object that colour (or at least say that you've done so)
}
colouriser("red", "town") // now that it's created, lets paint the town red

let orderCount = 1 // the pizzabot(tm) takes a number of orders, and those orders are numbered starting at 1

function takeOrder(topping, base, size){ // taking an order requires the topping, base and size as parameters
    console.log(`Order ${orderCount} is a ${size}-inch ${base} base pizza with ${topping} on top`) // it'll tell you that the order number x is an x-inch, x-base pizza with x-topping(s)
    orderCount++ // to make the order count actually useful, it'll increment whenever the function is run
}

takeOrder("chicken", "BBQ", 12) // to test it, here's the kind of pizza that I'd eat
takeOrder("pineapple and chicken", "cheese and tomato", 10) // and here's the kind of pizza that my housemate'd eat

class Account{ // making an account class will mean that I can create an account
    constructor(no, pass, bal){ // the constructor contains the variables that every account will need to have
        this.no = no, // to make these variables accessable, they're tied to the dot notation
        this.pass = pass, // the variables are no for account number, pass for password and bal for balance
        this.bal = bal 
    }
}

myAccount = new Account(1234321, 12341234, 1000) // my example account has £1000, or it would have if I'd specified the currency

function checkAccount(pin, amm){ // the checkAccount function requires a pin and the ammount to withdraw, it's already assuming that the account is my account
    if (pin == myAccount.pass && amm <= myAccount.bal) // if the pin supplied to the function matches my account's password and the ammount supplied to the function is less than my total balance, then I can withdraw it
    {console.log(`£${amm} withdrawn from account ${myAccount.no}`) // this shows in the console that it has successfully been withdrawn from the theoretical bank
    myAccount.bal -= amm}
    else (console.log("Error!")) // however, if it's too much money or the password isn't right, the bank'll just throw an error at you
}

checkAccount(1444141, 999) // now that there's an account, I'll try withdrawing using the wrong pass
checkAccount(12341234, 1111) // now I'm trying to withdraw too much
checkAccount(12341234, 666) // now I'm withdrawing a sane (but sinister) ammount and using the right code

function subsandwich(f1, f2, f3, f4, f5){
    console.log(`Your fillings are ${f1}, ${f2}, ${f3}, ${f4} and ${f5}`)
}
subsandwich("ham", "cheese", "salami", "pepperoni", "meatballs")

favFilms = ["no idea", "not a clue", "I dunno"]
favFilms.push("something")
favFilms.unshift("some film")
for (i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])
}

function filmCheck(){
    film = favFilms[2]
    if (film == "Ghostbusters")
        {console.log("yay")}
    else{console.log("boo")}
}
filmCheck()

num = 0
while( num != 50 ){
    num = Math.floor(Math.random()*100)
    console.log(num)
}



function coffeemachine (drink){
    if (drink == "chocolate"){
        goodtaste = true
        moneyleft = true
    }
    if (drink == "espresso"){
        goodtaste = false
        moneyleft = false
    }
    if (goodtaste && moneyleft){console.log("You're in for a good time")}
    else{console.log("You're gonna have a bad time")}
}

coffeemachine("espresso")
coffeemachine("chocolate")

class car{
    constructor(name){
        this.name = name
    }
}

class companycar extends car{
    constructor(name, discount, staffno){
        super(name)
        this.name = name
        this.discount = discount
        this.staffno = staffno
    }
}

mycar = new companycar("A car name", 30, 12341234)
console.log(`My car, ${mycar.name}, gets a ${mycar.discount}% discount and has the staff number ${mycar.staffno}`)

class animal{
    constructor(name, species){
        this.species = species
        this.name = name
    }
}

class bunny extends animal{
    constructor(name, species, breed, lovescarrots){
        super(name, species)
        this.breed = breed
        this._lovescarrots = lovescarrots
    }
    get lovescarrots(){return this._lovescarrots}
}

hoppy = new bunny("hopps", "bunny", "hopper", true)

console.log(`The bunny ${hoppy.name} is a ${hoppy.breed} ${hoppy.species}`)
if(hoppy.lovescarrots){console.log("they love carrots")}