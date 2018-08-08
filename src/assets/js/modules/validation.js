import $ from 'jquery';
import validate from 'validate.js';

// These are the constraints used to validate the form
var constraints = {
	name: {
		// You need to pick a username too
		presence: {
			message: "Это поле не должно быть пустым"
		},
		// And it must be between 3 and 20 characters long
		length: {
			minimum: 2,
			// maximum: 20,
			message: "Имя должно содержать минимум 2 буквы"
		},
	},
	phone: {
		presence: {
			message: "Это поле не должно быть пустым"
		},
		// length: {
		// 	minimum: 18,
		// 	message: "^ Кажется, не хватает цифр))"
		// },
		format: {
			pattern: "^[+]{1}[0-9]{1} [(]{1}[0-9]{3}[)]{1} [0-9]{3} [0-9]{2} [0-9]{2}$",
			message: "^ Кажется, не хватает цифр))"
		}
	},
};

// Hook up the form so we can prevent it from being posted

var forms = document.getElementsByClassName('has-messages');

[].forEach.call(forms, function (form) {

	const inputs = form.querySelectorAll("input, textarea, select") || undefined;

	const formElements = [].slice.call(form.querySelectorAll('input, textarea, select'));
	const simpleValidation = formElements.reduce((acc, item) => {
		return Object.assign(acc, { [item.name]: constraints[item.name] })
	}, {});

	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		handleFormSubmit(form);
	});

	// Hook up the inputs to validate on the fly
	for (var i = 0; i < inputs.length; ++i) {
		inputs.item(i).addEventListener("change", function (ev) {
			var errors = validate(form, simpleValidation) || {};
			showErrorsForInput(this, errors[this.name])
		});
	}

	function handleFormSubmit(form, input) {
		// validate the form aainst the constraints
		var errors = validate(form, simpleValidation, { fullMessages: false });
		// then we update the form to reflect the results
		showErrors(form, errors || {});
		if (!errors) {
			showSuccess();
		}
	}

	// Updates the inputs with the validation errors
	function showErrors(form, errors) {
		// We loop through all the inputs and show the errors for that input
		form.querySelectorAll("input").forEach(function (input) {
			// Since the errors can be null if no errors were found we need to handle
			// that
			showErrorsForInput(input, input.name in errors && errors[input.name]);
		});
	}

	// Shows the errors for a specific input
	function showErrorsForInput(input, errors) {
		// This is the root of the input
		var formGroup = closestParent(input.parentNode, "form-group");
		// Find where the error messages will be insert into sdfh
		var messages = formGroup.querySelector(".messages");
		// First we remove any old messages and resets the classes
		resetFormGroup(formGroup);
		// If we have errors
		if (errors) {
			console.log(input.value);
			// we first mark the group has having errors
			formGroup.classList.add("has-error");
			// then we append all the errors
			errors.forEach(function (error) {
				addError(messages, error);
			});
		} else {
			// otherwise we simply mark it as success
			formGroup.classList.add("has-success");
		}
	}

	// Recusively finds the closest parent that has the specified class
	function closestParent(child, className) {
		if (!child || child == document) {
			return null;
		}
		if (child.classList.contains(className)) {
			return child;
		} else {
			return closestParent(child.parentNode, className);
		}
	}

	function resetFormGroup(formGroup) {
		// Remove the success and error classes
		formGroup.classList.remove("has-error");
		formGroup.classList.remove("has-success");
		// and remove any old messages
		formGroup.querySelectorAll(".help-block.error").forEach(function (el) {
			el.parentNode.removeChild(el);
		});
	}

	// Adds the specified error with the following markup
	// <p class="help-block error">[message]</p>
	function addError(messages, error) {
		var block = document.createElement("div");
		block.classList.add("help-block");
		block.classList.add("error");
		block.innerText = error;
		messages.appendChild(block);
	}

	function showSuccess() {
		// We made it \:D/
		// console.log(form);
		// form.submit();
		form.style.display = 'none';
		$.ajax({
			type: form.getAttribute('method'),
			url: form.getAttribute('action'),
			contentType: false,
			cache: false,
			data: new FormData(form),
			processData: false,

			success: function () {
				$('#succes-form').foundation('open');
			}
		})
	}
});
