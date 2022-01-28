const submit = document.querySelector('#submit');

/**
 * My inputs
 */
// Inputs for name.
const name = document.querySelector('#name');
const errorName = document.querySelector('#error-name');

// Inputs for last name
const lastName = document.querySelector('#lastName');
const lastNameError = document.querySelector('#last-name-error');

//input for email
const email = document.querySelector('#email');
const emailNameError = document.querySelector('#email-name-error');

// input for password
const password = document.querySelector('#password');
const passwordNameError = document.querySelector('#password-name-error');

submit.addEventListener('click', function () {
    console.log(name.value);

    // Errors for name
    if (name.value === '') {
        errorName.innerHTML = 'First name cannot be empty';
        name.classList.add('error-container');
    }

    // errors for last name
    if (lastName.value === '') {
        lastNameError.innerHTML = 'Last name cannot be empty';
        lastName.classList.add('error-container');
    }

    //errors for email
    if (email.value === '') {
        emailNameError.innerHTML = 'Looks like this is not email';
        email.classList.add('error-container');
    }
    //error for password
    if (password.value === '') {
        passwordNameError.innerHTML = 'Password can not be empty';
        password.classList.add('error-container');
    }
})
