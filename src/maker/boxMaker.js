import Maker from "./maker";


// creates the form element with label and input box
function formDiv(className, id, inputId, inputName, inputType, labelName) {
	const formDiv = new Maker('div', `${className}`, `${id}`).domMaker();
	const label = new Maker('label', '', '').domMaker();
	label.setAttribute('for', inputName)
	label.innerText = `${labelName}`;
	const input = new Maker('input', `${className}`, `${inputId}`).domMaker();
	input.name = `${inputName}`;
	input.setAttribute('type', `${inputType}`);
	input.required = true




	formDiv.appendChild(label);
	formDiv.appendChild(input);

	return formDiv;
}

export default formDiv;