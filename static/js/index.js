gsap.registerPlugin(ScrollTrigger);


const textElements = gsap.utils.toArray('.smoke');

textElements.forEach((text, index) => {
    gsap.to(text, {
        //color: "black", 
        //y: -50,         
        opacity: 1,     
        scrollTrigger: {
            trigger: text,       
            start: "top 60%", 
            end: "top 70%",     
            scrub: true,          
        },
    });
});

const images = document.querySelectorAll('.BDCimage');
images.forEach((image) => {
  gsap.to(image, {
      opacity: 1,
      scrollTrigger: {
          trigger: image,
          start: "top 60%",
          end: "top 70%",
          scrub: true,
          toggleActions: "play reverse play reverse",
      },
    });
});

 

const targetTexts = document.querySelectorAll(".switch_text");
targetTexts.forEach((targetText) => {
  gsap.timeline({ repeat: -1, repeatDelay: 0 })
  .to(targetText, {
    duration: 0.75,
    
    // opacity: 0,
    onComplete: () => {
      if(targetText.textContent === "scientists") {
        targetText.textContent = "artists";
      }
      else if(targetText.textContent === "artists") {
        targetText.textContent = "scientists";
      }

      if(targetText.textContent === "科學家") {
        targetText.textContent = "藝術家";
      }
      else if(targetText.textContent === "藝術家") {
        targetText.textContent = "科學家";
      }
    },
  })
  .to(targetText, {
    duration: 0.75,
    
    // opacity: 1,
    ease: "power2.out",
  });
});





const salute = document.querySelector(".salutation-en");

gsap.timeline({ repeat: -1, repeatDelay: 0 })
.to(salute, {
  duration: 0.75,
  
  // opacity: 0,
  onComplete: () => {
    if(salute.textContent === "scientists") {
      salute.textContent = "artists";
    }
    else if(salute.textContent === "artists") {
      salute.textContent = "engineers";
    }
    else if(salute.textContent === "engineers") {
      salute.textContent = "designers";
    }
    else if(salute.textContent === "designers") {
      salute.textContent = "litterateurs";
    }
    else if(salute.textContent === "litterateurs") {
      salute.textContent = "scientists";
    }
  },
})
.to(salute, {
  duration: 0.75,
  // opacity: 1,
  ease: "power2.out",
});

const salute_tw = document.querySelector(".salutation-twn");

gsap.timeline({ repeat: -1, repeatDelay: 0 })
.to(salute_tw, {
  duration: 0.75,
  
  // opacity: 0,
  onComplete: () => {


    if(salute_tw.textContent === "科學家") {
      salute_tw.textContent = "藝術家";
    }
    else if(salute_tw.textContent === "藝術家") {
      salute_tw.textContent = "工程師";
    }
    else if(salute_tw.textContent === "工程師") {
      salute_tw.textContent = "設計師";
    }
    else if(salute_tw.textContent === "設計師") {
      salute_tw.textContent = "文學家";
    }
    else if(salute_tw.textContent === "文學家") {
      salute_tw.textContent = "科學家";
    }
    
  },
})
.to(salute_tw, {
  duration: 0.75,
  // opacity: 1,
  ease: "power2.out",
});

//-------------------------------------------中文動畫
// const targetTextTW = document.querySelector(".switch_text-twn");

// gsap.timeline({ repeat: -1, repeatDelay: 0 })
// .to(targetTextTW, {
//   duration: 0.75,
  
//   // opacity: 0,
//   onComplete: () => {
//     targetTextTW.textContent =
//       targetTextTW.textContent === "科學家們"
//         ? "藝術家們"
//         : "科學家們"; 
//   },
// })
// .to(targetTextTW, {
//   duration: 0.75,
  
//   // opacity: 1,
//   ease: "power2.out",
// });

// const saluteTW = document.getElementById("salutation-twn");

// gsap.timeline({ repeat: -1, repeatDelay: 0 })
// .to(saluteTW, {
//   duration: 0.75,
  
//   // opacity: 0,
//   onComplete: () => {
//     if(salute.textContent === "科學家們") {
//       saluteTW.textContent = "藝術家們";
//     }
//     else if(salute.textContent === "藝術家們") {
//       saluteTW.textContent = "工程師們";
//     }
//     else if(salute.textContent === "工程師們") {
//       saluteTW.textContent = "設計師們";
//     }
//     else if(salute.textContent === "設計師們") {
//       saluteTW.textContent = "文學家們";
//     }
//     else if(salute.textContent === "文學家們") {
//       saluteTW.textContent = "科學家們";
//     }
    
//   },
// })
// .to(saluteTW, {
//   duration: 0.75,
//   // opacity: 1,
//   ease: "power2.out",
// });





//-------------------------------------------尚未修復-------------------------------------------
// gsap.registerPlugin(ScrollTrigger);

// // 動畫實例存儲變數
// let smokeAnimations = [];
// let imageAnimation = null;
// let switchAnimation = null;

// // 初始化動畫函數
// function initializeAnimations(language) {
//     // 清理舊的動畫
//     clearAllAnimations();

//     // 初始化 `smoke` 動畫
//     const smokeElements = gsap.utils.toArray(`.smoke-${language}`);
//     smokeElements.forEach((element) => {
//         const animation = gsap.to(element, {
//             opacity: 1,
//             scrollTrigger: {
//                 trigger: element,
//                 start: "top 60%",
//                 end: "top 70%",
//                 scrub: true,
//             },
//         });
//         smokeAnimations.push(animation);
//     });

//     // 初始化 `image` 動畫
//     const imageElement = document.querySelector(`.BDCimage-${language}`);
//     if (imageElement) {
//         imageAnimation = gsap.to(imageElement, {
//             opacity: 1,
//             scrollTrigger: {
//                 trigger: imageElement,
//                 start: "top 60%",
//                 end: "top 70%",
//                 scrub: true,
//                 toggleActions: "play reverse play reverse",
//             },
//         });
//     }

//     // 初始化 `switch` 動畫
//     const switchElement = document.querySelector(`.switch_text-${language}`);
//     if (switchElement) {
//         switchAnimation = gsap.timeline({ repeat: -1, repeatDelay: 0 })
//             .to(switchElement, {
//                 duration: 0.75,
//                 onComplete: () => {
//                     const texts =
//                         language === "en"
//                             ? ["scientists", "artists"]
//                             : ["科學家們", "藝術家們"];
//                     const currentIndex = texts.indexOf(switchElement.textContent);
//                     const nextIndex = (currentIndex + 1) % texts.length;
//                     switchElement.textContent = texts[nextIndex];
//                 },
//             })
//             .to(switchElement, {
//                 duration: 0.75,
//                 ease: "power2.out",
//             });
//     }

//         // 初始化 `salutation` 動畫
//     const salutationElement = document.querySelector(`#salutation-${language}`);
//     if (salutationElement) {
//         const salutationTexts =
//             language === "en"
//                 ? ["scientists", "artists", "engineers", "designers", "litterateurs"]
//                 : ["科學家們", "藝術家們", "工程師們", "設計師們", "文學家們"];

//         salutationAnimation = gsap.timeline({ repeat: -1, repeatDelay: 0 })
//             .to(salutationElement, {
//                 duration: 0.75,
//                 onComplete: () => {
//                     const currentIndex = salutationTexts.indexOf(salutationElement.textContent);
//                     const nextIndex = (currentIndex + 1) % salutationTexts.length;
//                     salutationElement.textContent = salutationTexts[nextIndex];
//                 },
//             })
//             .to(salutationElement, {
//                 duration: 0.75,
//                 ease: "power2.out",
//             });
//     }
// }

// // 清理所有動畫
// function clearAllAnimations() {
//     smokeAnimations.forEach((animation) => animation.kill());
//     smokeAnimations = [];
//     if (imageAnimation) {
//         imageAnimation.kill();
//         imageAnimation = null;
//     }
//     if (switchAnimation) {
//         switchAnimation.kill();
//         switchAnimation = null;
//     }
// }