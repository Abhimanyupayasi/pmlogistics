// we are taking for gsap animation
const one = document.querySelector(".menu-bar");

const two = document.querySelector(".menu-bar1");

const three = document.querySelector(".menu-bar2");

const four = document.querySelector(".menu-bar3");
//const two = document.querySelector("menu-items")

var tab = 1;

document.querySelector(".menu-mobile").addEventListener("click", function() { 
    
    if(tab==1){

    one.style.visibility = "visible";
    two.style.visibility = "visible";
    three.style.visibility = "visible";
    four.style.visibility = "visible";

    tab= 2;

    gsap.from(".menu-bar", {
        x:-400,
        opacity: 0,
        delay:0.2
    })
    gsap.from(".menu-bar1", {
        x:-400,
        delay:0.3,
        opacity: 0
    })
    gsap.from(".menu-bar2", {
        x:-400,
        opacity: 0,
        delay:0.4
    })
    gsap.from(".menu-bar3", {
        x:-400,
        opacity: 0,
        delay:0.5
    })

  

}



    

    



    else if(tab==2){

        one.style.visibility = "hidden";
        two.style.visibility = "hidden";
        three.style.visibility = "hidden";
        four.style.visibility = "hidden";
        tab=1;
    

    }
    

    //two.style.visibility="visible";

})


gsap.from("#nav-part1,#nav-part2,#nav-part3",{
        y:-100,
        delay:0.4,
        duration:0.5,
        opacity:0,
        stagger:0.4

})

gsap.from("#text h1, #text-mobile h1",{
    x:-500,
    delay:0.4,
    duration:0.5,
    opacity:0,
    stagger:0.4
})

gsap.from("#h5",{
    y:50,
    yoyo:true,
    repeat:-1,
    opacity:0,
    duration:0.4
})

gsap.from("#image2",{
    x:-100,
    opacity:0,
    rotate:360,
    duration:1
  
})

gsap.from(".section1", {

    x: -500,
    opacity: 0,
    rotate:360,
    scale:0,
    scrollTrigger: {

        trigger:"section1",
        scroller:"body",
        scrub:2,
        start:"top 13vh",
       
        end:"top 80%",
      

        
    },

})


// page rendering

gsap.from("footer", {

   
    opacity: 0,
    x:-1000,
    
    duration:0.9,
    scrollTrigger: {
       trigger: "footer",
       scrub:2,
   
       end:"bottom 100%",
  
}

})

document.querySelector(".menu-bar3").addEventListener("click",function(){
    window.location.href = './login.html';
})

document.querySelector("#nav-part3 h3").addEventListener("click",function(){
    window.location.href = './login.html';
})

document.querySelector("#nav-part3 button").addEventListener("click", function(){
    window.location.href = './contact_us.html';
})

document.querySelector(".menu-bar1").addEventListener("click",function(){
    window.location.href = './services.html';
})

document.querySelector(".Home-home").addEventListener("click",function(){
    window.location.href = './index.html';
})
document.querySelector(".Home-services").addEventListener("click",function(){
    window.location.href = './services.html';
})

document.querySelector(".Home-about").addEventListener("click",function(){
    window.location.href = './about.html';
})

document.querySelector(".Home-join").addEventListener("click",function(){
    window.location.href = './join.html';
})
document.querySelector(".menu-bar").addEventListener("click",function(){
    window.location.href = './index.html';
})
document.querySelector(".menu-bar2").addEventListener("click",function(){
    window.location.href = './about.html';
})

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the form from submitting the traditional way

//     // Get values from input fields
//     var enteredId = document.getElementById('id').value;
//     var enteredPassword = document.getElementById('password').value;

//     // Check if entered ID and password match the specified values
//     if (enteredId === '123456654' && enteredPassword === '123456') {
//         // Redirect to the next page (replace 'next-page.html' with the actual URL)
//         window.location.href = './next-page.html';
//     } else {
//         alert('Invalid ID or password. Please try again.'); // Show an error message
//     }
// });
 // Get the button element by its id













  