document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });

    // Call a function to submit the data to Google Sheets
    submitToGoogleSheets(data);
});
document.getElementById("myFormMobile").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });

    // Call a function to submit the data to Google Sheets
    submitToGoogleSheets(data);
});


document.getElementById("myFormNewsLetterMobile").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });

    // Call a function to submit the data to Google Sheets
    submitToGoogleSheetsNewsLetter(data);
});
document.getElementById("myFormNewsLetter").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });

    // Call a function to submit the data to Google Sheets
    submitToGoogleSheetsNewsLetter(data);
});



function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
 
    var formData = new FormData(document.getElementById('myForm'));
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });

    // Call a function to submit the data to Google Sheets
    submitToGoogleSheets(data);
}

// form email notifications
function submitToGoogleSheets(data) {
    // Use Google Apps Script to handle form submission to Google Sheets
    // var scriptURL = 'https://script.google.com/macros/s/AKfycbwPvkEDUvhHIPmhTfPwuaxth1czYGAO3R31scxIhFE6oO1MUd3KifYXc8FxRedbC0p1/exec';
    var scriptURL = 'https://script.google.com/macros/s/AKfycbzNTStCJKy6RZbAp89Dx0SWYLtNlDrIhC0E2gSpOUS6Va8Ex8JVq4v3lrnBj93sFevz9g/exec';
    var payload = JSON.stringify(data);

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: payload,
    })
        .then(response => {
            console.log('Success!', response)
            alert("Subscribe Email")
            showToaster();

        })
        .catch(error => {
         
            console.error('Error:', error)
        });
}
// for news letter
function submitToGoogleSheetsNewsLetter(data) {
    // Use Google Apps Script to handle form submission to Google Sheets
    var scriptURL = 'https://script.google.com/macros/s/AKfycbzNTStCJKy6RZbAp89Dx0SWYLtNlDrIhC0E2gSpOUS6Va8Ex8JVq4v3lrnBj93sFevz9g/exec';
    var payload = JSON.stringify(data);

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: payload,
    })
        .then(response => {
            console.log('Success!', response)
            alert("Subscribe Email")
            showToaster();

        })
        .catch(error => {
         
            console.error('Error:', error)
        });
}

function showToaster() {
    var toaster = document.getElementById('toaster');
    toaster.style.display = 'block';

    // Hide the toaster after 3 seconds (adjust as needed)
    setTimeout(function () {
        toaster.style.display = 'none';
    }, 3000);
}
