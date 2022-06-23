const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstname === '') {
        addErrorTo('firstname', 'First Name is required');
    } else {
        removeErrorFrom('firstname')
    }

    if (lastname === '') {
        addErrorTo('lastname', 'Last Name is required');
    } else {
        removeErrorFrom('lastname')
    }

    if (email === '') {
        addErrorTo('email', 'Looks like this is not an email');
    }else if (isValid (email)){

    } else {
        removeErrorFrom('email')
    }

    if (!isValid(email)) {
        addErrorTo('email', 'Looks like this is not an email');
    }


    if (password === '') {
        addErrorTo('password', 'Password is required');
    }
 

});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode
    formControl.classLiist.add('error');
    const small = formControl.queryselector('small')
    small.innerText = message;

}

function removeErrorFrom(field) {
    const formControl = form[field].parentNode
    formControl.classLiist.remove('error');

}


function isValid(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}