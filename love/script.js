// ===========================
// Surprise Button
// ===========================

const loveBtn = document.getElementById("loveBtn");
const message = document.getElementById("message");

loveBtn.addEventListener("click", () => {

    if(message.style.display === "block"){

        message.style.display = "none";
        loveBtn.innerHTML = "Open My Heart ❤️";

    }else{

        message.style.display = "block";
        loveBtn.innerHTML = "I Love You ❤️";

        message.scrollIntoView({
            behavior:"smooth"
        });

    }

});


// ===========================
// Floating Hearts
// ===========================

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (15 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,400);


// ===========================
// Fade Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("fade");

    observer.observe(sec);

});


// ===========================
// Navbar Blur On Scroll
// ===========================

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY>60){

        header.style.background="rgba(20,0,34,.75)";

    }else{

        header.style.background="rgba(255,255,255,.08)";

    }

});


// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===========================
// Welcome Message
// ===========================

window.onload=()=>{

    console.log("Welcome ❤️");

};


// ===========================
// Gallery Hover
// ===========================

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("zoom");

    });

});
