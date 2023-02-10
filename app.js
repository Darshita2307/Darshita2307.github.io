$(document).ready(function()
{
    $('.slider').slick({
        arrows:false,  /*next and previous hatane k liye*/
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let abcd = document.querySelector('.mobile-nav');
let mobileNav = document.querySelector('.mobile-nav');
let alerts = document.querySelector('.alerts');

alerts.addEventListener('click',function()
{
    let delet = confirm("Do you really want to submit message?");
    console.log(delet);
    if(delet)
    {
        alert("successfully submitted");
    }
    else{
        alert("Retry");
    }
    
})



hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');  /*open class jo css m thi vo execute hogi yha pr when we click hamberger icon*/
    
})

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
    
})
abcd.addEventListener('click',function(){
    mobileNav.classList.remove('open');
    
})


});