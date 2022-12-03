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
form.appendChild(name);

const email = formDiv('uEmail', '', 'userEmail', 'email', 'email', 'Email:');
// append the email to the form
form.appendChild(email);


// address div that shares the country and the zip code
const address = new Maker('div', 'address', '').domMaker();
const country = formDiv('uCountry', '', 'userCountry', 'country', 'country', 'Country:');
// append the country to the address div
address.appendChild(country);

// zip code
const zipCode = formDiv('uZip', '', 'userZipCode', 'zipCode', 'zipCode', 'Zip Code:');
address.appendChild(zipCode);
// append the addressDiv to the form
form.appendChild(address);


const password = formDiv('uPassword', '', 'userPass', 'password', 'password', 'Password:');
// append the email to the form
form.appendChild(password);

const password2 = formDiv('uPassword', '', 'userPass2', 'password2', 'password2', 'Confirm Password:');
// append the email to the form
form.appendChild(password2);

const submitBtn = new Maker('button', 'button', 'submitBtn').domMaker();
submitBtn.setAttribute('type', 'submit');
submitBtn.innerText = 'Submit';
form.appendChild(submitBtn);

container.appendChild(form);