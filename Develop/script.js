var saveEl = document.getElementById("saveBtn")
var textEl = document.querySelector(".description")
var hourEl = document.getElementsByClassName("hour")
var containerEl = document.querySelector('.container')
var dateEl = document.getElementById("currentDay");

var now = parseInt(moment().format('h'));




window.setInterval(function () {
    $(dateEl).html(moment().format('MMM Do YY, h:mm:ss a'))
}, 1000);

for (let i = 9; i < 18; i++) {
     $(containerEl).append(time(i))
    
}

function time(slot) {
    const workDay = $('<div>')
    .attr('class', 'row time-block')
    .attr('id', 'hour-' + slot);


    const p = $("<div>").attr('class', "col-md")
    if (slot > 12) {
        p.text(slot - 12 + "pm")
    }
    else if (slot === 12) {
        p.text(slot + "pm")
    }
    else {
       p.text(slot + "am")
    }
    const text = $('<textarea>')
    .attr('class', 'col-md-10 description');
    if(slot > now){
        text.addClass('future')
    }
    if(slot == now){
        text.addClass('present')
    }
    if(slot < now){
        text.addClass('past')
    }
  
    const button = $('<button>')
    .attr('class', 'btn saveBtn col-md-1')
    .append($('<i>').attr('class', 'fas fa-save'));

    workDay.append(p, text, button);
    return workDay;
}

$(window).on('load', function () {
    for (let i = 9; i < 18; i++) {
        var getDescription = localStorage.getItem("hour-" + i.toString());
        $(`#hour-${i} textarea`).text(getDescription)
    }
})


$(".saveBtn").on("click", function () {
    var setHour = $(this).parent().attr("id")
    var description = $(this).siblings(".description").val()
    localStorage.setItem(setHour, description)
})

$('.hour').on('click', 'p', function () {
    $(this).html(moment().format('MMM Do YY, h:mm:ss a'))
    if (`$(this)` > dateEl) {
        $(this).siblings('.description').addClass('future')
    }
})