'use strict';

const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Open the window
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// This for loop is used to select all three button,
// so when one of them is clicked, it will trigger the action.
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
    console.log(btnOpenModal[i].textContent);
}

// Close the window
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
// -- by click close
btnCloseModal.addEventListener('click', closeModal);

// -- by click overlay
overlay.addEventListener('click', closeModal);

// -- by press ESC on keyboard
// function(e) {} only means there will be an event happen and there are actions
// can be doing when the event happens
document.addEventListener('keydown', function (e) {
    // console.log(e.code);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
