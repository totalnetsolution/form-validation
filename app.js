function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;
    const age = document.getElementById('age').value;

    let isValid = true;

    // Username validation
    const usernamePattern = /^[a-zA-Z0-9]{4,15}$/;
    if (!usernamePattern.test(username)) {
        document.getElementById('usernameError').innerText = 'Username must be 4-15 characters long.';
        isValid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long, contain at least one uppercase letter and one special character.';
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // CNIC validation
    const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
    if (!cnicPattern.test(cnic)) {
        document.getElementById('cnicError').innerText = 'Invalid CNIC format. Correct format: 12345-1234567-1.';
        isValid = false;
    } else {
        document.getElementById('cnicError').innerText = '';
    }

    // Age validation
    if (age < 18 || age > 60) {
        document.getElementById('ageError').innerText = 'Age must be between 18 and 60.';
        isValid = false;
    } else {
        document.getElementById('ageError').innerText = '';
    }

    // If all validations pass
    if (isValid) {
        alert('Form submitted successfully!');
    }
}