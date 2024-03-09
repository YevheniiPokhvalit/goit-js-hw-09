document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  // Перевірка стану сховища під час завантаження сторінки
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    feedbackForm.email.value = email;
    feedbackForm.message.value = message;
  }

  // Збереження даних у локальне сховище при введенні
  feedbackForm.addEventListener('input', event => {
    const { name, value } = event.target;
    const storedData =
      JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ ...storedData, [name]: value.trim() })
    );
  });

  // Очищення сховища та полів форми під час сабміту
  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    const { email, message } = feedbackForm;

    if (email.value.trim() && message.value.trim()) {
      console.log({
        email: email.value.trim(),
        message: message.value.trim(),
      });

      // Очищення сховища та полів форми
      localStorage.removeItem('feedback-form-state');
      email.value = '';
      message.value = '';
    }
  });
});
