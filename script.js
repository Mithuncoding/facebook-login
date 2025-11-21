const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "") {
        alert("Please enter your email address or phone number.");
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!isLengthValid || !hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
        alert("Password must contain:\n- At least 6 characters\n- At least 1 uppercase letter\n- At least 1 lowercase letter\n- At least 1 number\n- At least 1 special character");
        return;
    }

    window.location.href = "success.html";
});
