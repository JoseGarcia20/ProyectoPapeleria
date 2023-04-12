const slider = document.querySelector('.slider');
const prevButton = slider.querySelector('.prev-button');
const nextButton = slider.querySelector('.next-button');
const userList = slider.querySelector('.user-list');

prevButton.addEventListener('click', () => {
  userList.scrollLeft -= 300; // ajusta el valor según sea necesario
});

nextButton.addEventListener('click', () => {
  userList.scrollLeft += 300; // ajusta el valor según sea necesario
});