

function setup() {
    var socket = io();
    var side = 10;
    var matrix = [];
    
    //! Getting DOM objects (HTML elements)
    let weatherElement = document.getElementById('weather');

    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');

    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');

    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');

    let predatelCountElement = document.getElementById('predatelCount');
    let predatelLiveCountElement = document.getElementById('predatelLiveCount');

    let cogotsmCountElement = document.getElementById('cogotsmCount');
    let cogotsmLiveCountElement = document.getElementById('cogotsmLiveCount');

    let waterCountElement = document.getElementById('waterCount');
    let waterCountLiveElement = document.getElementById('waterLiveCount')

    let fishCountElement = document.getElementById('fishCount');
    let fishCountLiveElement = document.getElementById('fishLiveCount');
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);


    function drawCreatures(data) {
 
    
        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        
        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;

        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;
       
        predatelCountElement.innerText = data.predatelCounter;
        predatelLiveCountElement.innerText = data.predatelLiveCounter;
        
        cogotsmCountElement.innerText = data.cogotsmCounter;
        cogotsmLiveCountElement.innerText = data.cogotsmLiveCounter;

        waterCountElement.innerText = data.waterCounter;
        waterCountLiveElement.innerText = data.waterLiveCounter;

        fishCountElement.innerText = data.fishCounter;
        fishCountLiveElement.innerText = data.fishLiveCounter;
        //! Every time it creates new Canvas with new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "лето"){
                        fill("green");
                    }   else if (data.weather == "осень"){
                        fill("orange");
                    }   else if (data.weather == "зима"){
                        fill("white");
                    }   else if (data.weather == "весна"){
                        fill("rgb(123, 163, 107)");
                    }
                        rect(j * side, i * side, side, side);
                    }   else if (matrix[i][j] == 2) {
                        fill("yellow");
                        rect(j * side, i * side, side, side);
                    }  else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }   else if (matrix[i][j] == 3) {
                        fill('red');
                        rect(j * side, i * side, side, side);
                    }   else if (matrix[i][j] == 4) {
                        fill('blue');
                        rect(j * side, i * side, side, side);
                    }   else if (matrix[i][j] == 5) {
                        fill('black');
                        rect(j * side, i * side, side, side);
                    }
                        else if (matrix[i][j] == 7) {
                        fill('#F0E68C');
                        rect(j * side, i * side, side, side);
                    }
                        else if (matrix[i][j] == 6) {
                        fill('#3977ff');
                        rect(j * side, i * side, side, side);
        }
    }
}
}
}