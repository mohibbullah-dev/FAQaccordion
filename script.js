let q_part = document.querySelector('.q_part');
let plus_icons = document.querySelectorAll('.plus_icon');
let minus_icons = document.querySelectorAll('.minus_icon');
let FAQ_des = document.querySelectorAll('.FAQ_des');

const firstQu = document.querySelectorAll('.firstQu');
let currentIndex = 0;

console.log("plus Icons ="+plus_icons.length)
console.log("minus icons ="+minus_icons.length)

FAQ_des[currentIndex].classList.add('active');

plus_icons[currentIndex].style.display='none'
minus_icons[currentIndex].style.display='block'

// plus_icons[currentIndex].classList.add('hide');
// minus_icons[currentIndex].classList.add('show')

document.addEventListener('keydown', function(event){
  let IsActive = true;
  FAQ_des[currentIndex].classList.remove('active');

    plus_icons[currentIndex].style.display='block'
 minus_icons[currentIndex].style.display='none'
 
if(event.key==='ArrowDown'){

currentIndex++;

if(currentIndex >= FAQ_des.length){
 currentIndex =0
}
FAQ_des[currentIndex].classList.add('active');

plus_icons[currentIndex].style.display='none'
minus_icons[currentIndex].style.display='block'

}else if(event.key==='ArrowUp'){
  FAQ_des[currentIndex].classList.remove('active');
  plus_icons[currentIndex].style.display='block'
 minus_icons[currentIndex].style.display='none'

 if (currentIndex <= 0 ) {
  currentIndex= FAQ_des.length;
 }
 currentIndex--;

 FAQ_des[currentIndex].classList.add('active')

 
 plus_icons[currentIndex].style.display='none'
 minus_icons[currentIndex].style.display='block'
}

})


function collupsOpen(){
 let contentHeight=FAQ_des.scrollHeight;
  FAQ_des.style.maxHeight=contentHeight+'px'
  FAQ_des.style.opacity='1'
  minus_icon.style.display='block'
  plus_icon.style.display='none'
}

function collupsOut(){
  alert('clickek')
   FAQ_des.style.maxHeight='0'
  FAQ_des.style.opacity='0'
  minus_icon.style.display='none'
  plus_icon.style.display='lock'
}

