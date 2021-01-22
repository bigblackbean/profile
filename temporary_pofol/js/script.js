
// Navigation button
const navBtn = document.querySelector('#navBtn');
const navMenu = document.querySelector('.navi');
navBtn.addEventListener('click', function naviToggle(){
  const hasClass = navBtn.classList.contains('on');
  if (hasClass) {
    navBtn.classList.remove('on');
    navMenu.style.right = '-100%';
  }else {
    navBtn.classList.add('on');
    navMenu.style.right = '0%';
  }
});

// Layer pop up
// const popClose = document.getElementById('popClose');
// popClose.addEventListener('click', function(e){
//   e.preventDefault();
//   document.querySelector('.pop').style.opacity = 0;
// });

// About Me Flip
const aboutMeContIdx = document.getElementsByClassName('about-cont');
const aboutMeCont = document.querySelector('.about-cont');
const aboutMeContLength = aboutMeContIdx.length;
aboutMeCont.addEventListener('click', function(){
  console.log(this);
  for(var i = 0; i < aboutMeContLength; i++) {
    const hasClass = this[i].classList.contains('flip');
    if (hasClass) {
      aboutMeCont.classList.remove('flip');
    }else {
      aboutMeCont.classList.add('flip');
    }
  }
});
