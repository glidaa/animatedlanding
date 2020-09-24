 //GSAP Functions
 studyingGSAP()
 girlGSAP()
 coWorkersGSAP()
 workoutGSAP()

 
 //Functions
 function studyingGSAP() {
     let tl = gsap.timeline({
         scrollTrigger: {
             trigger: '#studies-container',
             toggleActions:"restart none none none",
             start: "top bottom"
         }
     });

     tl.from('#studying-animation', {
         x: 150,
         opacity: 0,
         duration: 1.5
     })

         .from("#studies .centered-header", {
             Y: 300,
             opacity: 0,
             duration: 1,

         }, "-=1") //One second before normaly we have (to complete animation smoothly)
 }


 function girlGSAP() {
     let tl = gsap.timeline({
         scrollTrigger: {
             trigger: '#girl-container',
             toggleActions:"restart none none none",
             start: "top bottom"
         }
     });

     tl.from('#girl-animation', {
         x: -200,
         opacity: 0,
         duration: 1.5
     })

         .from("#girl .centered-header", {
             Y: 300,
             opacity: 0,
             duration: 1.5,

         }, "-=1")
 }

 function coWorkersGSAP(){
     let tl = gsap.timeline({
         scrollTrigger: {
             trigger: '#workers-container',
             toggleActions:"restart none none none",
             start: "top bottom"
         }
     });

     tl.from('#co-workers-animation', {
         x: 150,
         opacity: 0,
         duration: 1.5
     })

         .from("#co-workers .centered-header", {
             Y: 300,
             opacity: 0,
             duration: 1.5,

         }, "-=1")

 }

 function workoutGSAP() {

     let tl = gsap.timeline({
         scrollTrigger: {
             trigger: '#workout-container',
             toggleActions:"restart none none none",
             start: "top bottom"
         }
     });

     tl.from('#workout-animation', {
         x: -200,
         opacity: 0,
         duration: 1.5
     })

         .from("#workout .centered-header", {
             Y: 300,
             opacity: 0,
             duration: 1.5,

         }, "-=1")


 }
