const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contacts");
const surveySection = document.getElementById("survey");
const homelink = document.getElementById("homelink");
const aboutlink = document.getElementById("aboutlink");
const contactlink = document.getElementById("contactlink");

//eventlisteners
homelink.addEventListener("click", function () {
  homeSection.style.display = "block";
  surveySection.style.display = "block";
  aboutSection.style.display = "none";
  contactSection.style.display = "none";
});
aboutlink.addEventListener("click", function () {
  homeSection.style.display = "none";
  aboutSection.style.display = "block";
  contactSection.style.display = "none";
  surveySection.style.display = "none";
});
contactlink.addEventListener("click", function () {
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  surveySection.style.display = "none";
  contactSection.style.display = "block";
});
