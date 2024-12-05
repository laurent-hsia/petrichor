
gsap.registerPlugin(ScrollTrigger);


const textElements = gsap.utils.toArray('.smoke');

textElements.forEach((text, index) => {
    gsap.to(text, {
        //color: "black", 
        //y: -50,         
        opacity: 0,     
        scrollTrigger: {
            trigger: text,       
            start: "top 40%", 
            end: "top 20%",     
            scrub: true,          
        },
    });
});