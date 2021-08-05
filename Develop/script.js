var saveEl = document.getElementById("saveBtn")
var textEl = document.getElementById("appointment-form")
var hourEl = document.getElementsByClassName("hour")
var containerEl = document.getElementsByClassName("container")


var now = moment();
var dateEl = document.getElementById("currentDay");
dateEl.innerHTML = now;





$(".saveBtn").on("click", function(){
    var setHour = $(this).parent().attr("id")
    var description = $(this).siblings(".description").val()
    localStorage.setItem(setHour, description)
})
