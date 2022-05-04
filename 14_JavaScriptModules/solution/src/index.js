import { formSubmit } from './formSubmit';
import { nameInput, validateNameLength } from './validateName';
import { emailInput, validateEmailFormat } from './validateEmail';

document.querySelector('form').addEventListener('submit', formSubmit);
nameInput.addEventListener('change', validateNameLength);
emailInput.addEventListener('change', validateEmailFormat);