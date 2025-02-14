function validateForm() {
    let isValid = true;

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;
    let message = document.getElementById("message").value.trim();

    // Reset errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("countryError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Full Name is required.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    }

    // Phone number validation (10-digit only)
    let phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        document.getElementById("phoneError").innerText = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Country validation
    if (country === "") {
        document.getElementById("countryError").innerText = "Please select a country.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerText = "Message cannot be empty.";
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
        isValid = false;
    }

    // If form is valid, submit
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("enquiryForm").reset(); // Reset form fields
    }
}
