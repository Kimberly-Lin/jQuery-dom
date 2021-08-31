"use strict";

//capture form input values
/**append them do the DOM along with a button 
 * to remove each title and rating from the DOM. */



/**Doc String */
function addMovie(evt) { //Note: use the function keyword instead. pass in a named function for on click
    evt.preventDefault();
    // Capture form inputs
    let title = $("input[name = 'title']").val(); //Note: make lets a const
    let rating = $("input[name = 'rating']").val();

    //Append form inputs to DOM
    /**Create a button first
     * create a div 
     * append title, rating, button into div
     */
    let newButton = $("<button>").attr("class", "remove").text("x"); //Note: add class method instead
    let row = $("<div>").text(`${title}, ${rating}`).append(newButton);
    $("body").append(row);
}

$("body").on("click", ".remove", (evt) => {
    console.log("evt target: ", $(evt.target));
    $(evt.target).parent().remove();
    // evt.target.remove();
});

$("button").on("click", addMovie);