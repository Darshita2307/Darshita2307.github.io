$(document).ready(function()
{
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots',
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let abcd = document.querySelector('.mobile-nav');

let mobileNav = document.querySelector('.mobile-nav');
let alerts = document.querySelector('.alert');


alerts.addEventListener('click',function()
    {
        let delet = confirm("DO you really want to submit message ?");
        console.log(delet);
        if(delet)
        {
            console.log("Successfully Submitted ");
            alert('Successfully Submitted');
        }
        else{
            console.log("Retry"); 
            alert('Retry');
        }
    })


hamberger.addEventListener('click',function()
{
    mobileNav.classList.add('open');
})

times.addEventListener('click',function()
{
    mobileNav.classList.remove('open');
})

abcd.addEventListener('click',function()
{
    mobileNav.classList.remove('open');
})



});



