import './style/style.css';
import Maker from "./maker/maker";
import formDiv from "./maker/boxMaker";

// retrieving the container from the template.
const container = document.querySelector('.container');

// creating the form 
const form = new Maker('form', 'form', '').domMaker();
const messageBox = new Maker('div', 'messageBox').domMaker();
form.appendChild(messageBox);
// create form element 
// create name element for name
// label and input
// formDiv('divClassName', 'divId', 'inputId', 'inputName', 'inputType', 'labelName');
const name = formDiv('uName', '', 'username', 'username', 'text', 'Name:');
// append the name to the form
name.classList.add('formDiv');
form.appendChild(name);

// formDiv('divClassName', 'divId', 'inputId', 'inputName', 'inputType', 'labelName');
const email = formDiv('uEmail', '', 'userEmail', 'email', 'email', 'Email:');
// append the email to the form
form.appendChild(email);


// address div that shares the country and the zip code
const address = new Maker('div', 'address', '').domMaker();

// formDiv('divClassName', 'divId', 'inputId', 'inputName', 'inputType', 'labelName');
const country = formDiv('uCountry', '', 'userCountry', 'country', 'country', 'Country:');
country.classList.add('formDiv');
// append the country to the address div
address.appendChild(country);

// zip code

// formDiv('divClassName', 'divId', 'inputId', 'inputName', 'inputType', 'labelName');
const zipCode = formDiv('uZip', '', 'userZipCode', 'zipCode', 'zipCode', 'Zip Code:');
zipCode.classList.add('formDiv');
address.appendChild(zipCode);
// append the addressDiv to the form
form.appendChild(address);

// formDiv('divClassName', 'divId', 'inputId', 'inputName', 'inputType', 'labelName');
const password = formDiv('uPassword', '', 'userPass', 'password', 'password', 'Password:');
password.classList.add('formDiv');
// append the email to the form
form.appendChild(password);

// formDiv('divClassName', 'divId', 'inputId', 'inputName', 'inputType', 'labelName');
const password2 = formDiv('uPassword', '', 'userPass2', 'password2', 'password', 'Confirm Password:');
password2.classList.add('formDiv');
// append the email to the form
form.appendChild(password2);



const submitBtn = new Maker('button', 'button', 'submitBtn').domMaker();
submitBtn.setAttribute('type', 'submit');
submitBtn.innerText = 'Submit';
form.appendChild(submitBtn);
// appending the form to the container
container.appendChild(form);

form.addEventListener('submit', (e) => {
	validityChecker(e);
})



function validityChecker(event) {
	let message = [];
	const userName = document.getElementById('username');
	const userEmailValue = document.getElementById('userEmail');
	const passwordValue = document.getElementById('userPass');
	const password2Value = document.getElementById('userPass2');

	// check if the user name 
	if (userName.value === '' || userName.value === null) {
		message.push('pass word shouldn\'t be null or empty');
		// userName.classList('error');
		displayError(message, event)
	}
	else if (userName.value.length < 4) {
		// if the user name length less than 4
		message.push('user name should be greater than 4 character');
		// userName.classList('error')
		displayError(message, event)
	}
	// check if the email is valid
	if (userEmailValue.value === '' || userEmailValue.value === null) {
		message.push('email shouldn\'t be empty');
		// userEmailValue.classList('error')
		displayError(message, event);
	}
	if(passwordValue.value.length <= 4){
		// password too short
		message.push('Password too short');
		displayError(message, event);
	}
	// check if the two password match
	if (passwordValue.value !== password2Value.value) {
		// password doesn't match
		message.push('Password doesn\'t match');
		// passwordValue.classList('error');
		// password2Value.classList('error')
		displayError(message, event);
	}
}


function displayError(message, event) {
	if (message.length > 0) {
		event.preventDefault();
		messageBox.style.backgroundColor = '#ff000069';
		messageBox.innerText = message.join(', ')
	}
}