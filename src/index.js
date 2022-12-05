import './style/style.css';
import Maker from "./maker/maker";
import formDiv from "./maker/boxMaker";

// retrieving the container from the template.
const container = document.querySelector('.container');
// creating the form 
const form = new Maker('form', 'form', '').domMaker();

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
const password2 = formDiv('uPassword', '', 'userPass2', 'password2', 'password2', 'Confirm Password:');
password2.classList.add('formDiv');
// append the email to the form
form.appendChild(password2);

const submitBtn = new Maker('button', 'button', 'submitBtn').domMaker();
submitBtn.setAttribute('type', 'submit');
submitBtn.innerText = 'Submit';
form.appendChild(submitBtn);
// appending the form to the container
container.appendChild(form);

form.addEventListener('click', (e) => {
	e.preventDefault();
	validityChecker();
});


function validityChecker(){
	const userName = document.getElementById('username');
	const userEmailValue = document.getElementById('userEmail').value.trim();
	const countryValue = document.getElementById('userCountry').value.trim();
	const zipCodeValue = document.getElementById('userZipCode').value.trim();
	const passwordValue = document.getElementById('userPass').value.trim();
	const password2Value = document.getElementById('userPass2').value.trim();

	if(userName.value === ''){
		// add error class
		console.log('hi')
		// popup message
		userName.classList.add('error')
		// urName.setCustomValidity('Please Inter your name');
	}else{
		console.log(userName.value.trim())
	}


}