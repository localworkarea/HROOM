// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function() {
// ==== Переключение cекций =====================
  const button = document.querySelector('.section-01__action');
  const currentSection = document.querySelector('.section-01');
  const nextSection = document.querySelector('.section-02');
  if (button) {
    button.addEventListener('click', function() {
      currentSection.classList.remove('_show');
        currentSection.classList.add('_hidden');
        nextSection.classList.add('_show');
        nextSection.classList.remove('_hidden');
    });
  }
// ---------------------------------------------------------

// ==== Переключение блоков puzzle__item =====================
  const puzzleItems = document.querySelectorAll('.puzzle__item');
  if (puzzleItems) {
    puzzleItems.forEach(function(item) {
        const buttons = item.querySelectorAll('.puzzle__btn');
        const nextButton = item.querySelector('.puzzle__next');
  
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                buttons.forEach(function(btn) {
                    btn.classList.add('_active');
                });
                nextButton.classList.remove('inactive');
                nextButton.removeAttribute('disabled');
            });
        });
  
        nextButton.addEventListener('click', function() {
            const currentItem = item;
            const nextItem = currentItem.nextElementSibling;
  
            currentItem.classList.remove('_show');
            currentItem.classList.add('_hidden');
  
            if (nextItem) {
                nextItem.classList.add('_show');
                nextItem.classList.remove('_hidden');
            }
        });
    });
  }
  // ---------------------------------------------------------
});
