const en_toggle = document.getElementById("en_toggle");
const twn_toggle = document.getElementById("twn_toggle");
localStorage.setItem('lang',"en");
twn_toggle.style.display = "none";
$(".slider-cradle").click(function () {
    $(this).toggleClass("is-transitioned");
    if (localStorage.getItem('lang') == "twn") {
      twn_toggle.style.display = "none"; 
      en_toggle.style.display = "flex";
      localStorage.setItem('lang',"en");
    } else {
      en_toggle.style.display = "none"; 
      twn_toggle.style.display = "flex";
      localStorage.setItem('lang',"twn");
    }
     
});