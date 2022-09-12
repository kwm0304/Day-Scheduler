//Links the document 
$(document).ready(function(){
    var currentDate = moment();

    currentDay.textContent = currentDate.format("MMM DD, YYYY h:mm a");

    $('.saveBtn').on('click', function() {
        var input = $(this)
            .siblings('.description')
            .val();
        var time = $(this)
            .parent()
            .attr('id');
        //sends to local storage
        localStorage.setItem(time, input);
    });

    //loads from local storage. Will figure out how to use .each for this later
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
}) 

