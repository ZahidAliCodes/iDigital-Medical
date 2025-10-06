const textSlides = document.querySelectorAll('.feature-text-slide');
const imageCards = document.querySelectorAll('.feature-image-card');
const totalSlides = textSlides.length;
let currentIndex = 0;

function showSlide(index){
  textSlides.forEach((slide,i)=> slide.classList.toggle('text-active', i===index));
  imageCards.forEach(card=> card.className='feature-image-card'); // reset

  imageCards[index].classList.add('active');

  for(let i=1;i<=4;i++){
    const prevIndex=(index-i+totalSlides)%totalSlides;
    if(imageCards[prevIndex]) imageCards[prevIndex].classList.add(`prev${i}`);
  }
}

showSlide(0);

document.querySelector('.feature-images').addEventListener('click', ()=>{
  currentIndex=(currentIndex+1)%totalSlides;
  showSlide(currentIndex);
});