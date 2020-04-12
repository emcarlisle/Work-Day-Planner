// grab id "currentday" and have value set to moment().format("dddd, MMMM Do");
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));



// new div to hold table
var tableEl = $("<div>");
//append new div to the .container
$(".container").append(tableEl);
//empty div to hold textarea input
var savedEvents = [];

// for loop to display every hour; look into .each() ?
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
    hourEl.addClass("hour").text(newHourEl.format("h A"));
    // the event needs to have: a class with description +
    // a function to display past, present, future by the hour
    eventEl.addClass("description " + colorClass(newHourEl.hour()));
    //this button needs a click event to save the eventEl; save icon
    saveBtn.addClass("saveBtn fas fa-save");

    $("saveBtn").on("click", function(i) {
        //save eventEl to local storage
    });


};  

// function to differentiate between past, present, & future
// of the current hour
function colorClass(hour) {
    var currentTime = moment().hour();
    if (hour < currentTime) {
        return "past";
    } else if (hour === currentTime) {
        return "present";
    } else {
        return "future";
    }
}