let head = document.querySelector("header");
let links = document.querySelectorAll("header .nav-item .nav-link");
let goUpBtn = document.querySelector(".bi-file-arrow-up-fill#goUp");

onscroll = _=>{
    if (scrollY > 100) {
        head.classList.add("fixed")
        goUpBtn.classList.add("show")
    }else{
        head.classList.remove("fixed")
        goUpBtn.classList.remove("show")
    }
}
links.forEach(link => {
    link.onclick = _ => {
        links.forEach(link => {
            link.classList.remove("active")
        });
        link.classList.add("active")
   }
});
goUpBtn.onclick = _ => {
    scrollTo({top:0, behavior: "smooth"})
}

/***************************************************************************** */

let btns = document.querySelectorAll("section.busines-busines .btns .btn-outline-secondary");

btns.forEach(btn => {
    btn.onclick = _ => {
        btns.forEach(btn => {
            btn.classList.remove("active")
        });
        btn.classList.add("active")
   }
});

/******************************************************** */
let imgs = document.querySelectorAll("section.clients .owl-carousel img ");

imgs.forEach(img => {
    img.onclick = _ => {
        imgs.forEach(img => {
            img.classList.remove("active")
        });
        img.classList.add("active")
   }
});

/****************************************************************** */
$('.client').owlCarousel({
    loop:true,
    margin:10,
     rtl:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.options').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.slider').owlCarousel({
    loop:true,
    rtl:true,
    margin:10,
    nav:true,
    navText:['<i class="bi bi-arrow-right-circle rounded-0"></i>','<i class="bi bi-arrow-left-circle rounded-0"></i>'],
   
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})









