var LiveForm = require("./LiveForm");
var random = require("./random");


module.exports = class Wather extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
        this.directions = [];
    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.newDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;
            console.log(10);

            let wather = new Wather(x, y);
            watherArr.push(wather);

            this.multiply = 0;
        }


    }
}