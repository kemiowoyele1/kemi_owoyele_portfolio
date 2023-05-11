
const hamburgers =  document.querySelector('.hamburger');
const navLinks =  document.querySelector('.nav-links');      
const links = document.querySelectorAll(' .nav-links li' )
const lines = document.querySelectorAll('.line' )
const container = document.querySelector('.container');


hamburgers.addEventListener('click', () => {

    navLinks.classList.toggle("nav-link-open");
    links.forEach(link => {
        link.classList.toggle('fade');
    })
    lines.forEach(line => {
        line.classList.toggle('hamburger-color');
    })
})

const cancelSetting = document.querySelector('.cancel-setting')
const Setting = document.querySelector('.settings-page');
const selectSetting = document.querySelector('.select-setting');
let hueRotate = "hue-rotate(0deg)";
let contrastSet = "contrast(100%)";
let saturationSet = "saturate(100%)";


document.querySelector('body').addEventListener('mousemove', eyeball);
      let main1 =  document.querySelector('.main-header');
        function eyeball(){
        let eye = document.querySelectorAll('.eye');

        eye.forEach(function(eye){
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = (radian * (90 / Math.PI) * -1) + 180;
            eye.style.transform = "rotate(" + rot + "deg";
        })
    }
    main1.addEventListener('mousemove', function ripple(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
 
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
         ripples.id = "ripples";
        setTimeout(() =>{
            ripples.remove()
        }, 1000);
    } );

    main1.addEventListener('touchmove', function ripple(e) {
        let x = e.touches.clientX;
        let y = e.touches.clientY;
 
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
         ripples.id = "ripples";
        setTimeout(() =>{
            ripples.remove()
        }, 1000);
    } );
   cancelSetting.addEventListener('click', function () {
       Setting.style.display = "none";
   })
   selectSetting.addEventListener('click', function () {
       Setting.style.display = "block";
   })


   function handleMouseMoveFont(value) {
    const rangeValueElement3 = document.querySelector("#range-value3")
    const inputElement3 = document.querySelector('range3[type="range"]')
     const allElements3 = document.querySelectorAll("*")
    
    
    rangeValueElement3.textContent = "Font Size " + value;
   
    rangeValueElement3.style.fontSize = 50- value  + "px";
    for (let index = 0; index < allElements3.length; index++) {
        const element = allElements3[index];
        element.style.fontSize = value/2.5  + "px";
      
    }
  }
   function handleMouseMoveContrast(value) {
    const rangeValueElement2 = document.querySelector("#range-value2")
    // const inputElement = document.querySelector('range3[type="range"]')
     const allElements2 = document.querySelectorAll("*")
    
   
     contrastSet = "contrast(" + value + "%)"
   
     rangeValueElement2.textContent = "contrast: " + value;
     rangeValueElement2.style.filter = contrastSet
     
     for (let index = 0; index < allElements2.length; index++) {
      const element = allElements2[index];
      element.style.filter = contrastSet + hueRotate + saturationSet;
    //   element.style.animationPlayState = "paused"
 
    }
  }
//   function handleMouseMoveHue(value) {
//    const rangeValueElement1 = document.querySelector("#range-value1")
//    const inputElement = document.querySelector('range1[type="range"]')
//    const allElements1 = document.querySelectorAll("*")
//    const allImages = document.querySelectorAll("img")
   
   
   
//    hueRotate = "hue-rotate(" + value + "deg)"
   
//    rangeValueElement1.textContent = "hue: " + value + "deg";
//    rangeValueElement1.style.filter = hueRotate
   
   
//    for (let index = 0; index < allElements1.length; index++) {
//     const element = allElements1[index];
//     element.style.filter = contrastSet + hueRotate + saturationSet;
//     // element.style.animationPlayState = "paused"
 
//   }
//  }
 
 function handleMouseMoveSaturation(value) {
    const rangeValueElement = document.querySelector("#range-value")
    const inputElement = document.querySelector('range[type="range"]')
    const allElements = document.querySelectorAll("*")
    const allImages = document.querySelectorAll("img")
    // const scrollTop = document.querySelector(".scroll-top")
    
    
    
    saturationSet = "saturate(" + value + "%)"
    
    rangeValueElement.textContent = "saturation: " + value;
    rangeValueElement.style.filter = saturationSet
    
    
    for (let index = 0; index < allElements.length; index++) {
     const element = allElements[index];
     element.style.filter = contrastSet + hueRotate + saturationSet;
    // element.style.animationPlayState = "paused"
   }
  }

  window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scroll-top');
    scroll.classList.toggle('active', window.scrollY > 500);
    scroll.style.filter = "none";
})
function scrollToTop() {
window.scrollTo({
    top:0,
    behavior: "smooth"
})
}