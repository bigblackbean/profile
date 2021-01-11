
// Navigation button
const navBtn = document.querySelector('#navBtn');
const navMenu = document.querySelector('.navi');
navBtn.addEventListener('click', function(){
  const hasClass = navBtn.classList.contains('on');
  if (hasClass) {
    navBtn.classList.remove('on');
    navMenu.style.left = '-100%';
  }else {
    navBtn.classList.add('on');
    navMenu.style.left = '0%';
  }
});

// Layer pop up
const popClose = document.getElementById('popClose');
popClose.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('.pop').style.opacity = 0;
});

// About Me Flip
const aboutMeCont = document.querySelector('.about-cont');
aboutMeCont.addEventListener('click', function(){
  const hasClass = aboutMeCont.classList.contains('flip');
  if (hasClass) {
    aboutMeCont.classList.remove('flip');
  }else {
    aboutMeCont.classList.add('flip');
  }
});
