
let links = document.querySelectorAll('.navbar a.nav-link');

// function ativarLink(link){
//   const url = location.href;
//   const href = link.href;
  // document.querySelector('.active').classList.remove('active')
  // link.addEventListner('click', function(){
  //   link.classList.add('active');
  // });
  // if (url.includes(href)) {    
  //   link.classList.add('active');
  //   console.log(href);
  // }
  
// }

links.forEach(link => {
  link.addEventListener('click', function(){
    links.forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});

