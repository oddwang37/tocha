const modalTriggers = document.querySelectorAll('[modal-trigger]'),
    overlay = document.querySelector('.overlay'),
    modalReg = document.querySelector('.modal_registration'),
    modalLogin = document.querySelector('.modal_login'),
    modalClose = document.querySelector('[modal-close]');

modalTriggers.forEach((item, i) => {
    item.addEventListener('click', () => {
        overlay.classList.toggle('display-none');
        modalReg.classList.toggle('display-none');
        modalReg.classList.add('.animate__backInDown')
    });
});

modalClose.addEventListener('click',() => {
    modalSwitch();
});

overlay.addEventListener('click', e => {
    if(e.target && e.target.classList.contains('overlay')) {
        modalSwitch();
    }
});

function modalSwitch() {
    overlay.classList.toggle('display-none');
    modalReg.classList.toggle('display-none');
}