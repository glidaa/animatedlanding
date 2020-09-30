 //GSAP Functions
 studyingGSAP()
 girlGSAP()
 coWorkersGSAP()
 workoutGSAP()

 
 //Functions
 function studyingGSAP() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#studies',
            toggleActions:"restart none none none",
            start: "top top",
            //start:top bottom
            scrub:true,
            pin:true
        }
    });

    tl.from('#studying-animation', {
        x: 150,
        opacity: 0,
        duration: 10
    })

    .from("#text-content-studying", {
        opacity:0,
        duration: 10,
        y:800

    })

    .fromTo("#text-content-studying", {
        opacity: 1
    },{opacity:0, duration: 7,})

        .from("#text-content-studying-2", {
            opacity: 0,
            duration: 10,
            y:400

        }, "-=1") //One second before normaly we have (to complete animation smoothly)
}


 function girlGSAP() {
     let tl = gsap.timeline({
         scrollTrigger: {
             trigger: '#girl',
             toggleActions:"restart none none none",
             start: "top top",
             scrub:true,
             pin:true
         }
     });

     tl.from('#girl-animation', {
         x: -200,
         opacity: 0,
         duration: 3
     })


         .from("#girl .centered-header", {
             opacity: 0,
             duration: 3,
             y:800

         }, "-=1")
 }

 function coWorkersGSAP(){
     let tl = gsap.timeline({
         scrollTrigger: {
             trigger: '#co-workers',
             toggleActions:"restart none none none",
             start: "top top",
             scrub:true,
             pin:true
         }
     });

     tl.from('#co-workers-animation', {
         x: 150,
         opacity: 0,
         duration: 3
     })

         .from("#text-content-workers", {
             opacity: 0,
             duration: 3,
             y:800

         }, "-=1")

 }

 function workoutGSAP() {

     let tl = gsap.timeline({
         scrollTrigger: {
             trigger: '#workout',
             toggleActions:"restart none none none",
             start: "top top",
             scrub:true,
             pin:true
         }
     });

     tl.from('#workout-animation', {
         x: -200,
         opacity: 0,
         duration: 3
     })

         .from("#text-content-workout", {
             opacity: 0,
             duration: 3,
             y:800

         }, "-=1")


 }
