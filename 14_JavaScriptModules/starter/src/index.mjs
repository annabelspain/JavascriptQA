import {formSubmit} from './formSubmit.mjs'
import {nameInput, validateNameLength} from './validateName.mjs'
import {emailInput, validateEmailFormat} from './validateEmail.mjs'

document.querySelector('form').addEventListener('submit', formSubmit);
nameInput.addEventListener('change', validateNameLength);
emailInput.addEventListener('change', validateEmailFormat);