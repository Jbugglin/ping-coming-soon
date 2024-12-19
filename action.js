
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
        return false;
    }

    if (!emailFormatIsValid(emailAddress.value)) {
        emailAddress.focus();
        document.getElementById('error-message').style.display = "block";    
        return false;
    }
    return true
}
/**
 *  Adding in data format validation...
 *    Email needs to have 1x '@' and atleast 1x '.' characters.
 *    @ character needs to be first.
 *    . character needs to be after the @ character.
 *    Use regex for this validation....
 */

const emailFormatIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);