
// nav button
const navBtn = document.getElementById('navBtn');
navBtn.addEventListener('click', function(){
  const hasClass = navBtn.classList.contains('on');
  if (hasClass) {
    navBtn.classList.remove('on');
  }else {
    navBtn.classList.add('on');
  }
});

const popClose = document.getElementById('popClose');
popClose.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('.pop').style.opacity = 0;
});
