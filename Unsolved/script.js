// grab id "currentday" and have value set to moment().format("dddd, MMMM Do");
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));

// new div to hold table
var tableEl = $("<div>");
//append new div to the .container
$(".container").append(tableEl);


// for loop to display every hour; look into .each() ?
for (var i = 0; i <9; i++) {
    //new div to hold every new row to be looped
    var tableRowEl = $("<div>");
    //use moment to get the format for the hour column; moment().hours(number);
    // i+9 for 8 rows; set as value for new variable colHourEl(column 1 contains hour)
    var colHourEl = moment().hours(i+9);
    // append the row to the tableEl
    tableEl.append(tableRowEl);
    // add class to tableRowEl from css; set attribute ID with value of i
    tableRowEl.addClass("row time-block").attr("id", i);

    //create new div for hour and add class with columns
    var hourEl = $("<div>").addClass("col-md-2");
    //create new div for the event and add class with columns
    var eventEl = $("<textarea>").addClass("col-md-8");
    //create savebtn to save event and add class with col
    var saveEvent = $("<button>").addClass("col-md-2");
    //append new elements
    tableRowEl.append(hourEl, eventEl, saveEvent);
    




};  
    
function colorClass(time) {
    var currentTime = moment().hour();
    if (time < currentTime) {
        return "past";
    } else if (time === currentTime) {
        return "present";
    } else {
        return "future";
    }
}
    
    
    
    
    // create td to hold time and enter time from workHours[i]
    //var hourEl = $("<div>").addClass("col-md-2").attr("class", "hour").text(workHours[i]);
    //var eventEl = $("<textarea>").addClass("col-md-8").attr("class", "description").text();
    //var saveBtn = $("<button>").addClass("col-md-2").attr("class", "saveBtn").text();
    //append the hourEl to table row
    
    //append the table row to the table
    
    
    





    // append the table to the container



    // 

    //color code time blocks for past, present, future
    // use moment to check time and set attr for time block to match color based on time
    // for loop to check time for each individual time block
    // if statement to set attr(background color) for time block to match color based on time


    //click time block to enter event
    // create on click event to allow input


    //click save button to save event in local storage
    // on click for save btn and add onclick event to save to local storage


    // test to make sure on page reload event stays












    // create an empty array to store data from textarea
    //var userData = [];
    //
    ////create a new div for table to hold columns of hour, description, & save button
    //var tableEl = $("<div>");
    //// make a variable for row? new row every hour?
    //
    //var hour = $("<div>").text(moment().format("h, A"));
    //var event = $("<textarea>").addClass("description")
    //
    ////variable for button, need to save description
    //var saveEvent = $("<button>");
    //
    //// create a for loop to make rows for hour, description & save btn (look into .each())
    //// append rows to tableEL
    //for (var i =0; i < 9; i++);
