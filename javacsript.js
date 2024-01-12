var react = document.querySelector("#center");

react.addEventListener("mousemove", function(details) {
    // console.log(react.getBoundingClientRect())
    var rectangleLocation = react.getBoundingClientRect();
   var insideRectVal = details.clientX - rectangleLocation.left;

   if(insideRectVal<rectangleLocation.width/2) {
    var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectVal);
    gsap.to(react, {
        backgroundColor: `rgb(${redColor}, 0, 0)`,
        ease: Power4,
    })
   }else {
    var blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectVal);
    gsap.to(react, {
        backgroundColor: `rgb(0, 0, ${blueColor})`,
        ease: Power4,
    })
   }
});

react.addEventListener("mouseleave", function() {
    // react.style.backgroundColor = "white";
    gsap.to(react, {
        backgroundColor : "white",
    })
})

// gsap.utils.mapRange(0, 250, 255, 0, 250);