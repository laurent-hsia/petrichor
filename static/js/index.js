
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

  



 
// const container = document.querySelector(".switch_container");
const targetText = document.querySelector(".switch_text");

gsap.timeline({ repeat: -1, repeatDelay: 0 })
.to(targetText, {
  duration: 0.75,
  
  // opacity: 0,
  onComplete: () => {
    targetText.textContent =
      targetText.textContent === "scientists"
        ? "artists"
        : "scientists"; 
  },
})
.to(targetText, {
  duration: 0.75,
  
  // opacity: 1,
  ease: "power2.out",
});

// container.addEventListener("mouseenter", () => {
//   gsap.to(targetText, {
//     duration: 0.7,
//     text: "artist / scientist",
//     // scale: 1.1,
//     ease: "power2.out",
//   });
// });

// container.addEventListener("mouseleave", () => {
//   gsap.to(targetText, {
//     duration: 0.7,
//     text: "scientist / artist",
//     // scale: 1,
//     ease: "power2.out",
//   });
// });

//------------------------------------------------------------
// targetText.addEventListener("mouseenter", () => {
//   gsap.to(targetText, {
//     duration: 0.7,
//     text: "artist / scientist", 
//     // scale: 1.2,              
//     ease: "power2.out"
//   });
// });


// targetText.addEventListener("mouseleave", () => {
//   gsap.to(targetText, {
//     duration: 0.7,
//     text: "scientist / artist", 
//     scale: 1,                 
//     ease: "power2.out"
//   });
// });

//------------------------------------------------------------



// scale and turn over
// container.addEventListener("mouseenter", () => {
//   gsap.to(targetText, {
//     duration: 0.5,
//     scale: 0.8,
//     rotationX: 90,
//     opacity: 0,
//     onComplete: () => {
//       targetText.textContent = "artist / scientist";
//       gsap.to(targetText, {
//         duration: 0.5,
//         scale: 1,
//         rotationX: 0,
//         opacity: 1,
//         ease: "power2.out",
//       });
//     },
//   });
// });

// container.addEventListener("mouseleave", () => {
//   gsap.to(targetText, {
//     duration: 0.5,
//     scale: 0.8,
//     rotationX: 90,
//     opacity: 0,
//     onComplete: () => {
//       targetText.textContent = "scientist / artist";
//       gsap.to(targetText, {
//         duration: 0.5,
//         scale: 1,
//         rotationX: 0,
//         opacity: 1,
//         ease: "power2.out",
//       });
//     },
//   });
// });

// // slidw in
// container.addEventListener("mouseenter", () => {
//   gsap.to(targetText, {
//     duration: 0.5,
//     x: -50,
//     opacity: 0,
//     onComplete: () => {
//       targetText.textContent = "artist / scientist";
//       gsap.fromTo(
//         targetText,
//         { x: 50, opacity: 0 },
//         { duration: 0.5, x: 0, opacity: 1, ease: "power2.out" }
//       );
//     },
//   });
// });

// container.addEventListener("mouseleave", () => {
//   gsap.to(targetText, {
//     duration: 0.5,
//     x: 50,
//     opacity: 0,
//     onComplete: () => {
//       targetText.textContent = "scientist / artist";
//       gsap.fromTo(
//         targetText,
//         { x: -50, opacity: 0 },
//         { duration: 0.5, x: 0, opacity: 1, ease: "power2.out" }
//       );
//     },
//   });
// });

// 3D flip
// container.addEventListener("mouseenter", () => {
//   gsap.to(targetText, {
//     duration: 0.5,
//     rotationY: 90,
//     opacity: 0,
//     onComplete: () => {
//       targetText.textContent = "artist / scientist";
//       gsap.fromTo(
//         targetText,
//         { rotationY: -90, opacity: 0 },
//         { duration: 0.5, rotationY: 0, opacity: 1, ease: "power2.out" }
//       );
//     },
//   });
// });

// container.addEventListener("mouseleave", () => {
//   gsap.to(targetText, {
//     duration: 0.5,
//     rotationY: 90,
//     opacity: 0,
//     onComplete: () => {
//       targetText.textContent = "scientist / artist";
//       gsap.fromTo(
//         targetText,
//         { rotationY: -90, opacity: 0 },
//         { duration: 0.5, rotationY: 0, opacity: 1, ease: "power2.out" }
//       );
//     },
//   });
// });

// 字母逐個浮動切換
// container.addEventListener("mouseenter", () => {
//   gsap.to(targetText, {
//     duration: 0.3,
//     opacity: 0,
//     onComplete: () => {
//       targetText.textContent = "artist / scientist";
//       gsap.fromTo(
//         targetText,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
//       );
//     },
//   });
// });

// container.addEventListener("mouseleave", () => {
//   gsap.to(targetText, {
//     duration: 0.3,
//     opacity: 0,
//     onComplete: () => {
//       targetText.textContent = "scientist / artist";
//       gsap.fromTo(
//         targetText,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
//       );
//     },
//   });
// });



    
    