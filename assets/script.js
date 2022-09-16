var checkmarkEl = document.getElementById("show-saved");
//Links the document 
$(document).ready(function(){
    var currentDate = moment();
    
    currentDay.textContent = currentDate.format("MMM DD, YYYY h:mm a");
    // updateTime();
    $('.saveBtn').on('click', function() {
        var text = $(this)
            .siblings('.description')
            .val();
        var time = $(this)
            .parent()
            .attr('id');

        
        // checkmark = setTimeout($(this).append(" ").append('&#10003;'),1000);
        // clearTimeout(checkmark)($(this).remove('&#10003;'));
       ($(this).append("").append('&#10003;'));
       setTimeout((checkmarkEl.remove('&#10003;')), 1000);
        //sends to local storage
        localStorage.setItem(time, text);
    });
    
    function updateTime() {
        var currentHour = parseInt(moment().hour());

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt(($(this).attr("id").split("-")[1]));
            console.log( blockHour, currentHour)
            

            //changes block color depending on time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour > currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }
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

    updateTime();
});