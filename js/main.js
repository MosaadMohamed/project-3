//save Data in local storage
if(localStorage.getItem("maincolor") != null)
{
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("maincolor"));


    document.querySelectorAll(".colors-list li").forEach((ele) =>{

        ele.classList.remove("active");

        if(ele.dataset.color === localStorage.getItem("maincolor"))
        {
            ele.classList.add("active");
        }
    });
}
//counter of images
let counter = 1;
//Random backgron option
let backgroundOption = true;
//variable to control the background Interval
let backgroundInterval;

//check local storage 
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {

  // Remove Active Class From All Spans
document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active");

});

if (backgroundLocalItem === 'true') {

    backgroundOption = true;

    document.querySelector(".random-backgrounds .yes").classList.add("active");

} else {

    backgroundOption = false;

    document.querySelector(".random-backgrounds .no").classList.add("active");


}
}
let settting = document.querySelector(".setting-box i");

let settingbox = document.querySelector(".setting-box");
//click on toggle settings Gear
settting.onclick = function(){

    settting.classList.toggle("spin");
    
    settingbox.classList.toggle("open");

}

//switch colors
let colorlist = document.querySelectorAll(".colors-list li");

colorlist.forEach((el)=>{

    el.addEventListener("click", (e)=>{

    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

    window.localStorage.setItem("maincolor",e.target.dataset.color);

    handle(e);
    
});
});


let landing = document.querySelector(".landing-page");

let bullets = document.querySelectorAll(".bullets li");

let paginationCreatedUl = document.querySelector(".bullets");

let nextbutton = document.querySelector(".swiper-button-next");

let prevbutton = document.querySelector(".swiper-button-prev");



// check the randombackground true or false
let randombackground = document.querySelectorAll(".random-backgrounds span");

randombackground.forEach((el)=>{

    el.addEventListener("click", (e)=>{

        handle(e);

    //check the BackgroundOption
    if(e.target.dataset.background==="yes")
    {
        backgroundOption === true;

        location.reload();

        window.localStorage.setItem("background_option",true);

        randomizeImgs();

    } else{
        backgroundOption=== false;

        clearInterval(backgroundInterval);
        
        landing.style.backgroundImage = `url("images/${imgsArray[counter - 1]}")`;

        nextbutton.classList.remove("pause");

        prevbutton.classList.remove("pause");

        removeactive();

        paginationCreatedUl.children[counter - 1].classList.add('active');

        window.localStorage.setItem("background_option",false);

        }
    
    });
});

    
//remove active from bullets 
function removeactive(){
    bullets.forEach((el)=>{
        el.classList.remove("active");
    })
}
//Array  the images of landing
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//randomize function
function randomizeImgs()
{

    if(backgroundOption === true)
    {
        nextbutton.classList.add("pause");

        prevbutton.classList.add("pause");

        backgroundInterval = setInterval(()=>{

        let randomNumber = Math.floor(Math.random() * imgsArray.length);

        landing.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';

        removeactive();
        
        paginationCreatedUl.children[randomNumber].classList.add('active');

        },1000);
    }
}

randomizeImgs();



nextbutton.onclick = nextButton;
prevbutton.onclick = prevButton;


TheChecker();



function prevButton(){
    if(prevbutton.classList.contains("disabled"))
    {
        return false;
        
    } else{
        
        counter--;
        TheChecker();
    }
}

function nextButton(){    
    if(nextbutton.classList.contains("disabled"))
    {
        return false;


    } else{

        counter++;
        TheChecker();
    }
}



function TheChecker()
{
    removeactive();
    paginationCreatedUl.children[counter - 1].classList.add('active');
    landing.style.backgroundImage = 'url("images/' + imgsArray[counter - 1] + '")';

    if(counter === 5)
    {
        nextbutton.classList.add("disabled");
    }else{
        nextbutton.classList.remove("disabled");
    }
    if(counter === 1)
    {
        prevbutton.classList.add("disabled");
    }else{
        prevbutton.classList.remove("disabled");
    }

}






//our-skills

let ourSkills = document.querySelector(".skills");
let span = document.querySelector(".up");

window.onscroll = function () {

  // Skills Offset Top
let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
let windowHeight = this.innerHeight;

  // Window ScrollTop
let windowScrollTop = this.pageYOffset;

if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

    skill.style.width = skill.dataset.widht;

    });
}

if(window.scrollY >=1000)
{
    span.classList.add("show");
} else{
    span.classList.remove("show")
}
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    };

    
//gallery

let ourgallery = document.querySelectorAll(".gallery .images-box img");

let rigthbutton = document.querySelector(".right");
let leftbutton = document.querySelector(".left");

ourgallery.forEach((img)=>{

img.addEventListener("click",function(){

    let poupoverlay = document.createElement("div");
    
    poupoverlay.classList.add("poup-overlay");

    document.body.appendChild(poupoverlay);

    let poupbox = document.createElement("div");

    poupbox.classList.add("poup-box");

    if (img.alt !== null) {

        let imgHeading = document.createElement("h3");

        let imgText = document.createTextNode(img.alt);

        imgHeading.appendChild(imgText);

        poupbox.appendChild(imgHeading);

}

    let poupboxImage = document.createElement("img");

    poupboxImage.src = img.src;

    poupbox.appendChild(poupboxImage);

    document.body.appendChild(poupbox);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    closeButton.className = 'close-button';

    poupbox.appendChild(closeButton);
})
});



document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

    e.target.parentNode.remove();

    document.querySelector(".poup-overlay").remove();
    }
});

let allBullets = document.querySelectorAll(".nav-bullets .bullet");

let allLinks = document.querySelectorAll(".landing-page .links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
    
        e.preventDefault();
    
        document.querySelector(e.target.dataset.section).scrollIntoView({
    
        behavior: 'smooth'
    
        });
});

});

}

scrollToSomewhere(allBullets);

scrollToSomewhere(allLinks);

function handle(ev){

ev.target.parentElement.querySelectorAll(".active").forEach((element)=>{

element.classList.remove("active");

});

ev.target.classList.add("active");

}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

bulletsSpan.forEach(span => {

    span.classList.remove("active");

});

if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

} else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

}

}

bulletsSpan.forEach(span => {

span.addEventListener("click", (e) => {

if (span.dataset.display === 'show') {

    bulletsContainer.style.display = 'block';

    localStorage.setItem("bullets_option", 'block');

    } else {

    bulletsContainer.style.display = "none";

    localStorage.setItem("bullets_option", 'none');

    }

    handle(e);

});

});

document.querySelector(".reset-option").onclick = function(){

    localStorage.clear();

    window.location.reload();

}
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".landing-page .links");

toggleBtn.onclick = function (e) {

e.stopPropagation();

this.classList.toggle("menu-active");

tLinks.classList.toggle("open");

};

document.addEventListener("click", (e) => {

if (e.target !== toggleBtn && e.target !== tLinks) {

    if (tLinks.classList.contains("open")) {

    toggleBtn.classList.toggle("menu-active");

    tLinks.classList.toggle("open");

}

}

});

tLinks.onclick = function (e) {
e.stopPropagation();
}

