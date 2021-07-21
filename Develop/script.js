var saveEl = document.getElementById("saveBtn")
var textEl = document.getElementById("appointment-form")
var hourEl = document.getElementsByClassName("hour")
var containerEl = document.getElementsByClassName("container")


var now = moment();
var dateEl = document.getElementById("currentDay");
dateEl.innerHTML = now;

var times = [
    {hour: 9, id:9},
    {hour: 10, id:10},
    {hour: 11, id:11},
    {hour: 12, id:12},
    {hour: 1, id:1},
    {hour: 2, id:2},
    {hour: 3, id:3},
    {hour: 4, id:4},
    {hour: 5, id:5}
]
// for (let i = 0; i < times.length; i++) {
//     var x = document.createElement("div")
//     x.classList = ("row-mb-4")
//     append(x) 
    
// }

var save = function(){
    
    localStorage.setItem("text", textEl.value)
    
}

saveEl.addEventListener("click", save)
console.log(times)
