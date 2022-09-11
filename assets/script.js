//Links the document 
$(document).ready(function(){
    var currentDate = moment();

    currentDay.textContent = currentDate.format("MMM DD, YYYY h:mm a");

    $('.saveBtn').on('click', function() {
        var input = $(this).siblings('description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, input);
    })
}) 

