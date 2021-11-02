import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
}
refs.form.addEventListener('submit', onFormSubmit);
// refs.inputEmail.addEventListener('input', throttle(onInputValue, 200));
// refs.textarea.addEventListener('input', throttle(onInputValue, 200));
refs.form.addEventListener('input', throttle(onForminput, 200));

const formData = {};

function onForminput (e) {
    console.log(e.target.name);
    console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const STORAGE_KEY = 'feedback-form-state';

populateTextarea();

function onFormSubmit (e) {
   e.preventDefault();

   e.currentTarget.reset();
   localStorage.removeItem(STORAGE_KEY);
}

// function onInputValue (e) {
//    const inputValue = e.target.value;

//    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputValue));
// }

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedMessage);
  if (savedMessage) {
    refs.inputEmail.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  } 
}