"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
score = true;
var hitesh = {
    name: "aishani singh", id: 22
};
hitesh = { username: "shreya", id: 44 };
function getDbId(id) {
    // making some api calls
    if (typeof (id) === "number") {
        return id;
    }
    else {
        return id.toLowerCase();
    }
}
// more examples
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
//nor i want want both datatypes for array i will do is
// but array should either be of all the strings or all the numbers
// in this case
var data3 = ["2", "9"];
// you can add both the datatypes in one array
var data4 = ["2", "9", 4];
// also different cases
var seatAllotment;
seatAllotment = 'aisel';
// seatAllotment="crew"
