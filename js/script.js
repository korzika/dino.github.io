

/* ---------------- toggle navbar ------------------*/
const navToggler=document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* close nav when clicking on a nav item*/
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

/*------------sticky header------------*/
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
        }
        else{
            document.querySelector(".header").classList.remove("sticky");
        }
});
/*------------------------------ meni tabs ----------------------*/
const meniTabs = document.querySelector(".meni-tabs");
meniTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("meni-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        meniTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const meniSection = document.querySelector(".meni-section");
        meniSection.querySelector(".meni-tab-content.active").classList.remove("active");
        meniSection.querySelector(target).classList.add("active");
    }
});