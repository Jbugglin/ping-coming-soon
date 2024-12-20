
/**
 *  Basic Validation
 */
const submitBtn = document.getElementById('submit-button');
const validate = (e) => {
    e.preventDefault();
    const emailAddress = document.getElementById('user-email-input')
    if (emailAddress.value === ""){
        emailAddress.focus();
        document.getElementById('error-message').style.display = "block";
        document.getElementById('user-email-input').style.borderColor = "var(--sec-light-red)";
        return false;
    } else {
        document.getElementById('user-email-input').style.borderColor = "green";
    }

    if (!emailFormatIsValid(emailAddress.value)) {
        emailAddress.focus();
        document.getElementById('error-message').style.display = "block";
        document.getElementById('user-email-input').style.borderColor = "var(--sec-light-red)";
        return false;
    } else {
        document.getElementById('user-email-input').style.borderColor = "green";
    }
    return true
}

const emailFormatIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);