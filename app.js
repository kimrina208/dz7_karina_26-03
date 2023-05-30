// получаем все кнопки "показать ответ"
const showAnswerButtons = document.querySelectorAll('.show-answer');

// перебираем все кнопки и добавляем на каждую обработчик события click
showAnswerButtons.forEach(button => {
  button.addEventListener('click', () => {
    // находим рядом с кнопкой элемент с правильным ответом
    const answer = button.nextElementSibling;

    // переключаем класс "hidden" у элемента с правильным ответом
    answer.classList.toggle('hidden');

    // меняем текст на кнопке в зависимости от состояния
    if (answer.classList.contains('hidden')) {
      button.textContent = 'Показать ответ';
    } else {
      button.textContent = 'Скрыть ответ';
    }
  });
});