// grab id "currentday" and have value set to moment().format("dddd, MMMM Do");
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));

//empty div to hold textarea input
//var savedEvents = [];

// new div to hold table
var tableEl = $("<div>");
//append new div to the .container
$(".container").append(tableEl);


// for loop to display every hour; look into .each() ?
// $.each(tableEl), function(i, tableRowEl) {
//    tableEl.append(tableRowEL) ??
//}
for (var i = 0; i <9; i++) {
    //new div to hold every new row to be looped
    var tableRowEl = $("<div>");
    //use moment to get the format for the hour column; moment().hours(number);
    // i+9 for 8 rows; set as value for new variable newHourEl
    var newHourEl = moment().hours(i+9);
    // append the row to the tableEl
    //NOTE to self: Why addClass vs .attr():
    // addClass manipulate the element's class attribute whereas
    //.attr would really only be used if there wasn't another built in 
    // way to manipulate the attribute ?
    tableEl.append(tableRowEl);
    // add class to tableRowEl from css; set attribute ID with value of i
    tableRowEl.addClass("row time-block").attr("id", i);

    //create new div for hour and add class with columns
    var hourEl = $("<div>").addClass("col-md-2");
    //create new div for the event and add class with columns
    var eventEl = $("<textarea>").addClass("col-md-8");
    //create savebtn to save event and add class with col
    var saveBtn = $("<button>").addClass("col-md-2");
    //append new elements
    tableRowEl.append(hourEl, eventEl, saveBtn);
    
    //add classes to new variables
    // hour element needs to display hour with the newHourEl var
    //formatted as just hour and am/pm; format("h A");   
    hourEl.addClass("hour").text(newHourEl.format("h A")).attr("id", i);
    // the event needs to have: a class with description +
    // a function to display past, present, future by the hour
    eventEl.addClass("description " + colorClass(newHourEl.hour()));
    //this button needs a click event to save the eventEl; save icon
    saveBtn.addClass("saveBtn fas fa-save").attr("id", i);
    
    // function to differentiate between past, present, & future
    // with the hour set as parameter
    function colorClass(hour) {
        //new variable for current time; use moment to get current hour
        var currentTime = moment().hour();
        // 
        if (hour < currentTime) {
            return "past";
        } else if (hour === currentTime) {
            return "present";
        } else {
            return "future";
        }
    };
    
}; 
//    //moved savebtn out of loop bc it would save
//    //in all indexes?

$(".saveBtn").on("click", function(event) {
    var savedEvents = event.target.previousElementSibling.value
    console.log(event);
    localStorage.setItem(event.target.attributes[1].value, savedEvents);
    console.log(savedEvents);
    
    if (localStorage["id"] !== null && localStorage["savedEvents"] !== undefined) {
        var nineAm = $("<p>" + localStorage["id", savedEvents] + "</p>");
        $("#nineAm").append(nineAm[0].innerText);
    } else {
        ("");
    };
    
    //if (localStorage[savedEvents] !== null && localStorage[savedEvents] !== undefined) {
    //  $(".description").val(localStorage.getItem(event.target.attributes[1].value, savedEvents));
    //} else {
    //  ("");
    //}
    //var savedEvents = $(".description").val();
    //$(".description").val(localStorage.setItem(savedEvents));
    //var time = $("#id").val();
    //localStorage.setItem(time, savedEvents);
    //localStorage.getItem(event.target.attributes[1].value, savedEvents);

});
//$(document).ready(function() {
//    if (localStorage["savedEvents"] !== null && localStorage["savedEvents"] !== undefined) {
//        var nineAm = $("<p>" + localStorage["saveEvents"] + "</p>");
//        $("#nineAm").append(nineAm[0].innerText);
//      } else {
//        ("");
//    };
//})

//$(document).ready(function() {
//    if (localStorage[time, savedEvents] !== null && localStorage[time, savedEvents] !== undefined) {
//    var savedEvents = $("<p>" + localStorage[savedEvents] + "<p>");
//    var time = $("<p>" + localStorage[time] + "<p>");
//    $(".description").append(savedEvents[0].innerText);
//    $("id").append(savedEvent[0].innerText);
//    }   else {
//        $(" .description").val(localStorage.getItem(time, savedEvents));
//    }
    //$(".saveBtn").each(function() {
    //    $("")
    //    //var savedEvents = event.target.previousElementSibling.value
    //    //if (localStorage["savedEvents"] !== null && localStorage["savedEvents"] !== undefined) {
    //    //var savedEvents = $("<p>" + localStorage["savedEvents"] + "<p>");
    //    //$("#savedEvents").append(savedEvents[0].innerText);
    //    //}   else {
    //    //    ("");
    //    //};
    //    //localStorage.setItem(event.target.attributes[1].value, savedEvents);
    //});
    //   
    
    //var savedEvents = $("textarea").val();
    //console.log(JSON.stringify(savedEvents));
    //var eventEl = $.trim($(".description").val());
    //if (eventEl != "") {
    //    alert(eventEl);
    //}
    //localStorage.setItem("textarea", JSON.stringify(savedEvents));
    //var savedEvents = JSON.parse(localStorage.getItem("textarea"));
    //localStorage.setItem("eventEl", savedEvents.get("eventEl"));
    //console.log(localStorage);

//});