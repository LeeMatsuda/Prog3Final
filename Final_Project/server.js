//! Requiring modules  --  START
let count =true;
let Grass = require("./modules/Grass.js");
let GrassEater = require("./modules/GrassEater.js");
let Predatel = require("./modules/Predatel.js");
let Predator = require("./modules/Predator.js");
let Cogotsm = require("./modules/Cogotsm.js");
let random = require('./modules/random.js');
let Fish = require('./modules/Fish.js');
let Water = require('./modules/Water.js');
//! Requiring modules  --  END

//! Initializing global arrays  --  START
grassArr = [];
grassEaterArr = [];
predatorArr = [];
predatelArr = [];
cogotsmArr = [];
fishArr = [];
waterArr = [];
matrix = [];
//! Initializing global arrays  --  END

// statistics start
grassHashiv = 0;
grassEaterHashiv = 0;
predatorHashiv = 0;
predatelHashiv = 0;
cogotsmHashiv = 0;
fishHashiv = 0;
waterHashiv = 0;

// statistics end

// time = 0
//! Creating MATRIX -- START

function matrixGenerator(matrixSize, grass, grassEater, predator,predatel, cogotsm, water, fish ) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < predatel; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < cogotsm; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < water; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
    for (let i = 0; i < fish; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 7;
    }
    
}

matrixGenerator(88, 20, 10, 20 ,3, 24, 1,0);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
                predatorHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var predatel = new Predatel(x, y);
                predatelArr.push(predatel);
                predatelHashiv++;
            }
            else if (matrix[y][x] == 5) {
                var cogotsm = new Cogotsm(x, y);
                cogotsmArr.push(cogotsm);
                cogotsmHashiv++;
            }
            else if (matrix[y][x] == 6) {
                var water = new Water(x, y);
                waterArr.push(water); 
                waterHashiv++;
            }
            else if (matrix[y][x] == 7) {
                var fish = new Fish(x, y);
                fishArr.push(fish);
                fishHashiv++;

            }
        }
    }
}

creatingObjects();

let exanak = 0;
let weather = "winter";

function game() {

    exanak++;
    if (exanak <= 10){
        weather = "лето";
    }
    else if (exanak <= 20){
        weather = "осень";
    }
    else if (exanak <= 30){
        weather = "зима";
    } 
    else if (exanak <=40 ){
        weather = "весна";
    } 
    else if (exanak = 50){
        exanak = 0;
    }


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (waterArr[0] !== undefined){
        for (var i in waterArr){
            waterArr[i].eat();
        }
    }
    if (predatorArr[0] !== undefined) {
        for (var i in predatorArr) {
            predatorArr[i].eat();
        }
    }
    if (predatelArr[0] !== undefined) {
        for (var i in predatelArr) {
            predatelArr[i].eat();
        }
    }
    if (cogotsmArr[0] !== undefined) {
        for (var i in cogotsmArr) {
            cogotsmArr[i].eat();
        }
        if (waterArr[0] !== undefined) {
            for (var i in waterArr) {
                waterArr[i].mul();
                
                if (waterArr.length == 10 && count ) {
                    count =false
                    let curr = random(waterArr);
                    for (var l = 0; l < 2; l++) {
                        matrix[curr.y][curr.x] = 7;
                        let fish = new Fish(curr.x, curr.y);
                        fishArr.push(fish)
                    }
        
                    for (let i in waterArr) {
                        if (waterArr[i].x == curr.x && waterArr[i].y == curr.y) {
                            waterArr.splice(i, 1)
                        }
                    }
                     count = 0;
                }
            }
        }
        if (fishArr[0] !== undefined) {
            for (let i in fishArr) {
                fishArr[i].move();
            }
        }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,

        grassEaterCounter: grassEaterHashiv,
        grassEaterLiveCounter: grassEaterArr.length,

        predatorCounter: predatorHashiv,
        predatorLiveCounter: predatorArr.length,

        predatelCounter: 25,
        predatelLiveCounter: predatelArr.length,

        cogotsmCounter: 24,
        cogotsmLiveCounter: cogotsmArr.length,

        waterCounter: waterHashiv,
        waterLiveCounter: waterArr.length,

        fishCounter: 2,
        fishLiveCounter: 2,
        
        weather: weather,
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}
}


setInterval(game, 300)