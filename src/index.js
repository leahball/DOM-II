import './less/index.less'

// Your code goes here!


//One
const mainNav = document.querySelector('.nav');
    mainNav.addEventListener('mouseover', function(e){
    console.log(`Welcome to the fun bus!`); 
    e.stopPropagation();
   });

//Two
   const imageHeader = document.querySelector('.intro img');
   imageHeader.addEventListener('wheel', function() {
       alert('BUS!');
   })
  
//Three
   const headerFour = document.querySelectorAll('h2');
   headerFour.forEach(item => item.addEventListener('mouseenter', function(e){
       e.target.style.color = 'blue';
   }))

//Four
    const allParagraphsColor = document.querySelectorAll("body p")
    allParagraphsColor.forEach(function (paragraph) {
        paragraph.addEventListener("mouseenter", function (event) {
            event.target.style.color = "yellow"
            event.target.style.backgroundColor = 'pink';
        })
    })

//Five
    allParagraphsColor.forEach(function (paragraph) {
        paragraph.addEventListener("mouseleave", function (event) {
            event.target.style.color = "red"
            setTimeout(function () {
                event.target.style.color = "orange"
            }, 600)
        })
    })

//Six
    const headerTwo = document.querySelectorAll('h4');
    headerTwo.forEach(item => item.addEventListener('click', function(makeBig){
    makeBig.target.style.fontSize = '4rem';
    }))

//Seven
const destination = document.querySelector('.img-content');
destination.addEventListener('drag', function() {
    console.log("you need a vacation!")
})

//Eight
const signUp = document.getElementsByClassName('btn');
signUp[0].addEventListener('dblclick', function(makePrpl) {
    makePrpl.target.style.backgroundColor = 'purple';
})

signUp[1].addEventListener('dblclick', function(makeGrn) {
    makeGrn.target.style.backgroundColor = 'green';
})

signUp[2].addEventListener('dblclick', function() {
    alert('just kidding!');
})

//Nine
window.addEventListener('keydown', function() {
    alert("NO BUTTONS FOR YOU")
})

//Ten
window.addEventListener('load', () => {
    console.log('locked N loaded');
});


