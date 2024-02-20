document.addEventListener('DOMContentLoaded', function() {
    const lengthField = document.getElementById('password_length_input');
    const generateButton = document.getElementById('generate_button');
    const copyButton = document.getElementById('copy_button');
    const passwordArea = document.getElementById('generated_password');

    generateButton.addEventListener('click', generatePassword);
    copyButton.addEventListener('click', copyPassword);

    function generatePassword() {
        const length = parseInt(lengthField.value);
        if (isNaN(length)) {
            alert("Please enter a valid positive integer between 6 to 20.");
            return;
        }
        if (length <= 0) {
            alert("Oops! Looks like you entered zero or a negative integer. Please make sure to enter a valid positive integer.");
            passwordArea.value = "Please enter a positive integer.";
            passwordArea.style.color = "black";
            copyButton.disabled = true;
            copyButton.style.backgroundColor = "black";
            return;
        }

        if (length < 6) {
            alert("Oops! Looks like you entered a limit lesser than the allowed range. Please make sure to enter a number within the provided limit (6 to 20 characters).");
            passwordArea.value = "Only 6 to 20 character password allowed.";
            passwordArea.style.color = "black";
            copyButton.disabled = true;
            copyButton.style.backgroundColor = "black";
            return;
        }

        if (length > 20) {
            alert("Oops! Looks like you entered a limit more than the allowed range. Please make sure to enter a number within the provided limit (6 to 20 characters).");
            passwordArea.value = "Maximum 20 characters are allowed.";
            passwordArea.style.color = "black";
            copyButton.disabled = true;
            copyButton.style.backgroundColor = "black";
            return;
        }

        const generatedPassword = generateRandomPassword(length);
        passwordArea.value = generatedPassword;
        copyButton.disabled = false;
    }

    function copyPassword() {
        const password = passwordArea.value;
        if (password) {
            navigator.clipboard.writeText(password);
            alert("Password copied to clipboard");
        }
    }

    function generateRandomPassword(length) {
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const digits = "0123456789";
        const specialChars = "!@#$%&*()_+";
        const allChars = uppercase + lowercase + digits + specialChars;
        let password = '';
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * allChars.length);
            password += allChars[index];
        }
        return password;
    }
});
