const form = document.querySelector('#form');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

function onSubmit(e) {
  e.preventDefault();
  verifyInputs();
}

// get the input values
function verifyInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Here is the logic for each form field

  // check if firstname is empty
  if (firstNameValue === '') {
    ErrorMsg(firstName, 'First Name cannot be empty');
  } else {
    success(firstName);
  }

  // check if lastname is empty
  if (lastNameValue === '') {
    ErrorMsg(lastName, 'Last Name cannot be empty');
  } else {
    success(lastName);
  }

  // check if email is empty
  if (emailValue === '') {
    ErrorMsg(email, 'Email cannot be empty');
  } else if (!isValid(emailValue)) {
    ErrorMsg(email, 'Looks like this is not an email');
  } else {
    success(email);
  }

  // check if password is empty
  if (passwordValue === '') {
    ErrorMsg(password, 'Password cannot be empty');
  } else if (passwordValue.length <= 6) {
    ErrorMsg(password, 'Password should be more than 6 characters');
  } else {
    success(password);
  }
}

// Error function
function ErrorMsg(name, message) {
  const inputControl = name.parentElement;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
  const errMsg = inputControl.querySelector('.err-msg');
  errMsg.textContent = message;
}

// Success function
function success(name) {
  const inputControl = name.parentElement;
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
  const errMsg = inputControl.querySelector('.err-msg');
  errMsg.textContent = '';
}

// check if the mail is empty
function isValid(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', onSubmit);
