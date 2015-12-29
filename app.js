"use strict";
var x = 5;
var y = 5;
var MY_NUMBER = 10;
var z = "hello";
var me = true;
var things = [];
var other_things = [];
var many_things = ["hello", 5, 5];
var you = {};
var multiple = "test";
multiple = 4;
var result = addNumbers(5, 7);
function stuff() {
    console.log(x);
    return;
}
function addNumbers(x, y) {
    return x + y;
}
var str = "hello";
if (str !== null && str !== undefined && str !== "") {
    console.log('cool');
}
if (str) {
    console.log('cool');
}
function getAndDisplayName(event) {
    event.preventDefault();
    var inputField = document.getElementById("inputName");
    var name = inputField.value;
    document.getElementById('display-name').innerHTML = "<h1>" + name + ", hello you sexy beast</h1>";
}
try {
    getAndDisplayName();
}
catch (ex) {
    console.log('You have hit an error');
}
finally {
    console.log('Run this last');
}
