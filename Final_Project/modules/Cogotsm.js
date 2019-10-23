var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Cogotsm extends LiveForm {
    constructor(x, y) {
       super(x,y);
        this.hp = 50;
    }
    getNewCoordinates() {
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
        this.getNewCoordinates();
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
    eat() {
        let emptyCells = this.chooseCell(2);
        let emptyCells1 = this.chooseCell(3);
        let emptyCells2 = this.chooseCell(4);
        let newCell = random(emptyCells.concat(emptyCells1.concat(emptyCells2)));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            for (let i in predatorArr) {
                if (predatorArr[i].x == x && predatorArr[i].y == y) {
                    predatorArr.splice(i, 1)
                }
            }
            for (let i in predatelArr) {
                if (predatelArr[i].x == x && predatelArr[i].y == y) {
                    predatelArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;
        }
        else {
            this.move()
        }
    }
    move() {
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells1));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            cogotsmHashiv++
            this.y = y;
            this.x = x;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

        }
    }

    die() {
        matrix[this.y][this.x] = 0;

        for (let i in cogotsmArr) {
            if (cogotsmArr[i].x == this.x && cogotsmArr[i].y == this.y) {
                cogotsmArr.splice(i, 1)
            }
        }
    }
}