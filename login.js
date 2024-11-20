function validateForm() {
    // Clear previous error message
    document.getElementById('errorform').textContent = '';

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('State').value;  // Note the capital S here
    const comment = document.getElementById('comment').value;

    // Check if fields are empty




    if (name === "" || email === "" || phone === "" || address === "" || state === "" || comment === "") {
        document.getElementById('errorform').textContent = "All fields must be filled out.";  // Display message in errorform
        return false;
    }

    if (name.length < 8) {
        document.getElementById('errorform').textContent = "name must be at least 8 characters long.";
        return false; // Prevent form submission
    }

    // Validate phone number format 
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('errorform').textContent = "Please enter a valid 10-digit phone number.";  // Display message in errorform
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('errorform').textContent = "Please enter a valid email address.";  // Display message in errorform
        return false;
    }

    if (comment.length < 10) {
        document.getElementById('errorform').textContent = "Comment must be at least 10 characters long.";
        return false; 
    }

    // If all validations pass
    return true;
}




// if (name === "") {
//     document.getElementById('errorform').textContent = "Name is required.";
//     return false;
// }

// // Check if name length is within a valid range (e.g., 3 to 50 characters)
// if (name.length < 3 || name.length > 50) {
//     document.getElementById('errorform').textContent = "Name must be between 3 and 50 characters.";
//     return false;
// }

// // Validate that name only contains letters and spaces (no numbers or special characters)
// const namePattern = /^[A-Za-z\s]+$/;
// if (!namePattern.test(name)) {
//     document.getElementById('errorform').textContent = "Name can only contain letters and spaces.";
//     return false;
// }

// // Check if comment is empty
// if (comment === "") {
//     document.getElementById('errorform').textContent = "Comment is required.";
//     return false;
// }

// // Check if comment has more than 100 words
// const commentWords = comment.trim().split(/\s+/).length;
// if (commentWords > 100) {
//     document.getElementById('errorform').textContent = "Comment cannot exceed 100 words.";
//     return false;
// }

// // If all validations pass
// return true;
// }
// function contactForm() {
//     // Clear previous error messages
//     document.getElementById('nameError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('phoneError').textContent = '';
//     document.getElementById('addressError').textContent = '';
//     document.getElementById('stateError').textContent = '';
//     document.getElementById('commentError').textContent = '';

//     let valid = true; // Set the condition to valid initially

//     // Get values from the form
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     const phone = document.getElementById('phone').value;
//     const phonePattern = /^[0-9]{10}$/;
//     const state = document.getElementById('State').value;
//     const address = document.getElementById('address').value;
//     const comment = document.getElementById('comment').value;

//     // Check if fields are empty
//     if (name === '') {
//         document.getElementById('nameError').textContent = 'Name is required';
//         valid = false;
//     }

//     if (email === '') {
//         document.getElementById('emailError').textContent = 'Email is required';
//         valid = false;
//     } else if (!emailPattern.test(email)) {
//         document.getElementById('emailError').textContent = 'Valid Email is required';
//         valid = false;
//     }

//     if (phone === '') {
//         document.getElementById('phoneError').textContent = 'Number is required';
//         valid = false;
//     } else if (!phonePattern.test(phone)) {
//         document.getElementById('phoneError').textContent = 'Enter a valid number';
//         valid = false;
//     }

//     if (state === '') {
//         document.getElementById('stateError').textContent = 'Select a state';
//         valid = false;
//     }

//     if (address === '') {
//         document.getElementById('addressError').textContent = 'Address is required';
//         valid = false;
//     }

//     if (comment === '') {
//         document.getElementById('commentError').textContent = 'Comment is required';
//         valid = false;
//     } else if (comment.length < 10) {
//         document.getElementById('commentError').textContent = 'Comment must be at least 10 characters long.';
//         valid = false;
//     }

//     // Return the validation status
//     return valid;
// }

