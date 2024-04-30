 const btnhamburger = document.querySelector('#btnhamburger');

 btnhamburger.addEventListener('click', () => {
   btnhamburger.classList.toggle('active');
 });
 const overlay = document.querySelector('#overlay');

 btnhamburger.addEventListener('click', () => {
   overlay.classList.toggle('active');
 });
 const mobile = document.querySelector('#mobile');

 btnhamburger.addEventListener('click', () => {
   mobile.classList.toggle('active');
 });

 const body = document.querySelector('body');
 btnhamburger.addEventListener('click', () => {
  body.classList.toggle('noscroll');
});