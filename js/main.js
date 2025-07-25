

// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration){
//      obj = document.getElementById(id),
//         current = start,
//         range = end - start,
//         increment = end > start ? 1 : -1,
//         step = Maths.abs(Math.floor(duration/ range)),
//         timer = setInterval(() => {
//             current += increment;
//             obj.textContent = current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         }, step);
//     }
//     counter("count1", 0, 1200, 3000);
//     counter("count2", 100, 5086, 2500);
//     counter("count3", 0, 1550, 3000);
//     counter("count4", 0, 7210, 3000);
// });


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        const obj = document.getElementById(id);
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        // const step = Math.abs(Math.floor(duration / range));
        const step = Math.max(1, Math.abs(Math.floor(duration / range)));


        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 0, 1200, 3000);
    counter("count2", 100, 5086, 2500);
    counter("count3", 0, 1550, 3000);
    counter("count4", 0, 7210, 3000);
});


let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}


let navBar = querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
});
