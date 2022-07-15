"use strict";
document.querySelector('.main__first').addEventListener('click', () => {
    document.querySelector('.main__first').classList.add('active-swich');
    document.querySelector('.main__first-card').classList.add('active-card');
    document.querySelector('.main__second').classList.remove('active-swich');
    document.querySelector('.main__second-card').classList.remove('active-card');
})
document.querySelector('.main__second').addEventListener('click', () => {
    document.querySelector('.main__second').classList.add('active-swich');
    document.querySelector('.main__second-card').classList.add('active-card');
    document.querySelector('.main__first').classList.remove('active-swich');
    document.querySelector('.main__first-card').classList.remove('active-card');
})