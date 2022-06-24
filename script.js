const form = document.querySelector('#form');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

function onSubmit(e) {
  e.preventDefault();
  verifyInputs();
}


function verifyInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();


  if (firstNameValue === '') {
    ErrorMsg(firstName, 'First Name cannot be empty');
  } else {
    success(firstName);
  }

 
  if (lastNameValue === '') {
    ErrorMsg(lastName, 'Last Name cannot be empty');
  } else {
    success(lastName);
  }

 
  if (emailValue === '') {
    ErrorMsg(email, 'Email cannot be empty');
  } else if (!isValid(emailValue)) {
    ErrorMsg(email, 'Looks like this is not an email');
  } else {
    success(email);
  }


  if (passwordValue === '') {
    ErrorMsg(password, 'Password cannot be empty');
  } else if (passwordValue.length <= 6) {
    ErrorMsg(password, 'Password should be more than 6 characters');
  } else {
    success(password);
  }
}


function ErrorMsg(name, message) {
  const inputControl = name.parentElement;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
  const errMsg = inputControl.querySelector('.err-msg');
  errMsg.textContent = message;
}


function success(name) {
  const inputControl = name.parentElement;
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
  const errMsg = inputControl.querySelector('.err-msg');
  errMsg.textContent = '';
}


function isValid(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', onSubmit);
