document.addEventListener('DOMContentLoaded', function () {
    // Get the Display Clients form and the displayClients div
    var displayClientsForm = document.querySelector('#displayClientsContainer form');
    var displayClientsDiv = document.getElementById('displayClients');

    // Get the form for creating a client
    var createClientForm = document.querySelector('#createClient form');

    // Initialize counter variable
    var submitCount = 0;

    // Attach an event listener to the 'Create a Client' form
    createClientForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        submitCount++;

        // Get the values from the form
        var clientName = createClientForm.querySelector('#name').value;
        var clientEmail = createClientForm.querySelector('#email').value;
        var clientAddress = createClientForm.querySelector('#address').value;

        // Create a new client element with a checkbox
        var clientElement = document.createElement('div');
        clientElement.innerHTML = '<input type="checkbox" name="selectedClients" id = "client'+ submitCount +'" value="' + clientName + '"> ' +
                                  '<strong>Name:</strong> ' + clientName + ', ' +
                                  '<strong>Email:</strong> ' + clientEmail + ', ' +
                                  '<strong>Address:</strong> ' + clientAddress;

        // Append the new client to the displayClients div
        displayClientsDiv.appendChild(clientElement);

        // Reset the 'Create a Client' form
        createClientForm.reset();
    });

    // Get the Create a Meeting form and the SelectedClients div
    var createMeetingForm = document.querySelector('#createMeeting form');
    var SelectedClientsDiv = document.getElementById('SelectedClients');
    var scheduleOutputDiv = document.getElementById('scheduleOutput');


    // Attach an event listener to the 'Display Clients' form
    displayClientsForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
    
        // Get all selected checkboxes
        var selectedCheckboxes = document.querySelectorAll('input[name="selectedClients"]:checked');
    
        // Clear the content of SelectedClientsDiv
        SelectedClientsDiv.innerHTML = '';
    
        // Iterate through selected checkboxes and display the selected clients
        selectedCheckboxes.forEach(function (checkbox) {
            var selectedClientName = checkbox.value;
    
            // Create a new div for selected client
            var selectedClientElement = document.createElement('div');
            selectedClientElement.textContent = selectedClientName;
    
            // Append the new client to the SelectedClients div
            SelectedClientsDiv.appendChild(selectedClientElement);
        });
    
        // Reset the 'Display Clients' form
        displayClientsForm.reset();
    });

// Attach an event listener to the 'Reset' button of 'Create a Meeting' form
var createMeetingResetButton = document.getElementById('createMeetingReset');
createMeetingResetButton.addEventListener('click', function () {
    // Clear the content of SelectedClientsDiv
    SelectedClientsDiv.innerHTML = '';
});

 // Attach an event listener to the 'Create Meeting' form
 createMeetingForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    var meetingTopic = createMeetingForm.querySelector('#meetingTopic').value;
    var dateTime = createMeetingForm.querySelector('#dateTime').value;

    // Get the selected clients from the SelectedClients div
    var selectedClients = SelectedClientsDiv.innerText;

   // Create a new meeting element with meeting details
   var meetingElement = document.createElement('div');
   meetingElement.innerHTML = '<strong>Meeting Topic:</strong> ' + meetingTopic + '<br>' +
       '<strong>Date & Time:</strong> ' + dateTime + '<br>' +
       '<strong>Selected Clients:</strong> ' + selectedClients + '<br><hr>';

    // Add a data-date attribute to store the date value
    meetingElement.setAttribute('data-date', dateTime);

    // Append the new meeting to the scheduleOutput div
    scheduleOutputDiv.appendChild(meetingElement);

    // Reset the 'Create Meeting' form
    createMeetingForm.reset();

    // Clear the content of SelectedClientsDiv
    SelectedClientsDiv.innerHTML = '';
});


// Function to sort meetings by date
function sortScheduleByDate() {
    var meetings = Array.from(scheduleOutputDiv.children);

    // Sort meetings based on data-date attribute
    meetings.sort(function (a, b) {
        var dateA = new Date(a.getAttribute('data-date'));
        var dateB = new Date(b.getAttribute('data-date'));
        return dateA - dateB;
    });

    // Clear and re-append sorted meetings to scheduleOutput div
    scheduleOutputDiv.innerHTML = '';
    meetings.forEach(function (meeting) {
        scheduleOutputDiv.appendChild(meeting);
    });
}

// Attach an event listener to the 'Sort by Date' button
var sortButton = document.getElementById('sortBTN');
sortButton.addEventListener('click', sortScheduleByDate);



});
