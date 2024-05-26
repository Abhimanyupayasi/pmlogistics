var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');
var abhipic = document.querySelector(".abhipic");
var punitpic = document.querySelector(".punit-pic");
var smallupic = document.querySelector(".change-smallu");
var anuragpic = document.querySelector(".change-anurag");
var changeimg = document.querySelector(".change-img");

if (username === "abhimanyupayasi") {
    document.getElementById("welcomeHeading").innerText = "Welcome Mr. Abhimanyu Payasi";
    let imageElement = document.querySelector(".change-img");
    // abhipic.style = "display: block";
    // punitpic.style = "display: none";
    // smallupic.style = "display: none";
    // anuragpic.style = "display: none";
    // changeimg.style = "display: none";
    changeimg.src = "../images/users/abhimanyu.png";

} else if (username === "punitmishra") {
    document.getElementById("welcomeHeading").innerText = "Welcome Mr. Punit Mishra";
    let imageElement = document.querySelector(".change-img");
    imageElement.src = "../images/users/punit.png";
}
else if (username === "vivekpayasi") {
    document.getElementById("welcomeHeading").innerText = "Welcome Mr. Vivek Payasi";
    let imageElement = document.querySelector(".change-img");
    imageElement.src = "../images/users/smallu.png";
    
}
else if (username === "anuragpayasi") {
    document.getElementById("welcomeHeading").innerText = "Welcome Mr. Anurag Payasi";
    let imageElement = document.querySelector(".change-img");
    imageElement.src = "../images/users/anurag.png";
    
}
else if (username === "extrauser") {
    document.getElementById("welcomeHeading").innerText = "Welcome Back User";
    let imageElement = document.querySelector(".change-img");
    imageElement.src = "../images/users/user.png";
    
}

else{
    window.location.href = "../login/";
}
