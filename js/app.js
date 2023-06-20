let text = document.getElementById("text");
let leaf = document.getElementById("leaf")
let hill1 = document.getElementById("hill1")
let hill4 = document.getElementById("hill4")
let hill5 = document.getElementById("hill5")

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * - 1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1.5 + 'px';
    if (value >= 400) {
        hill1.hidden = true;
        text.hidden = true;
    } else {
        hill1.hidden = false;
        text.hidden = false;

    }
});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".round1", {
    x: 1000,
    //duration: 5,
    
    scrollTrigger: {
        trigger: ".round1",
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
        //toggleActions: "restart reverse none none",
                   // onenter onleave onenterback onleaveback
    },
});
gsap.to(".round2", {
    x: -1000,
    //duration: 5,
    
    scrollTrigger: {
        trigger: ".round2",
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
        //toggleActions: "restart reverse none none",
                   // onenter onleave onenterback onleaveback
    },
});
gsap.to(".round3", {
    x: 1000,
    //duration: 5,
    
    scrollTrigger: {
        trigger: ".round3",
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
        //toggleActions: "restart reverse none none",
                   // onenter onleave onenterback onleaveback
    },
});
gsap.to(".round4", {
    x: -1000,
    //duration: 5,
    
    scrollTrigger: {
        trigger: ".round4",
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
        //toggleActions: "restart reverse none none",
                   // onenter onleave onenterback onleaveback
    },
});
gsap.to(".card1", {
    x: -600,
    //duration: 5,
    
    scrollTrigger: {
        trigger: ".card1",
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
        //toggleActions: "restart reverse none none",
                   // onenter onleave onenterback onleaveback
    },
});
gsap.to(".card2", {
    x: 600,
    //duration: 5,
    
    scrollTrigger: {
        trigger: ".card2",
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
        //toggleActions: "restart reverse none none",
                   // onenter onleave onenterback onleaveback
    },
});
gsap.to(".card3", {
    x: -600,
    //duration: 5,
    
    scrollTrigger: {
        trigger: ".card3",
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
        //toggleActions: "restart reverse none none",
                   // onenter onleave onenterback onleaveback
    },
});
gsap.to(".card4", {
    x: 600,
    //duration: 5,
    
    scrollTrigger: {
        trigger: ".card4",
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
        //toggleActions: "restart reverse none none",
                   // onenter onleave onenterback onleaveback
    },
});
