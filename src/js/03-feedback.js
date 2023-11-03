import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log('Form data:', formData);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
});
