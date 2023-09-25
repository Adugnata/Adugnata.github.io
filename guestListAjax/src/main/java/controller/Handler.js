$(document).ready(function () {
    // Handle form submission
    $("#addGuestForm").submit(function (event) {
        event.preventDefault();

        // Get input values
        var firstInput = $("#first").val();
        var lastInput = $("#last").val();

        // AJAX POST request to add a guest
        $.ajax({
            type: "POST",
            url: "guestServlet.ajax", // Update the URL to match your servlet mapping
            data: { first: firstInput, last: lastInput },
            dataType: "json",
            success: function (response) {
                // Update the guest list on success
                updateGuestList(response);
                $("#first").val(""); // Clear input fields
                $("#last").val("");
            },
            error: function (xhr, status, error) {
                console.error("Error: " + error);
            }
        });
    });

    // Function to update the guest list on the page
    function updateGuestList(guests) {
        var guestList = $("#guestList");
        guestList.empty(); // Clear the list

        // Add each guest to the list
        guests.forEach(function (guest) {
            var listItem = $("<li>").text(guest.first + " " + guest.last);
            guestList.append(listItem);
        });
    }

    // Load the initial guest list when the page loads
    $.ajax({
        type: "GET",
        url: "guestServlet.ajax", // Update the URL to match your servlet mapping
        dataType: "json",
        success: function (response) {
            updateGuestList(response);
        },
        error: function (xhr, status, error) {
            console.error("Error: " + error);
        }
    });
});
