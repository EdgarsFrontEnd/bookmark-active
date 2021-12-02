const lis = document.getElementsByTagName("li");
const sections = document.getElementsByClassName("section");

const sectionTop = []; //array containing distances from browser top to each section top
for (let i = 0; i < 4; i++) {
  sectionTop[i] = sections[i].getBoundingClientRect().top;
  console.log(sectionTop[i]);
}

lis[0].classList.add("active");

document.addEventListener("scroll", () => {
  var acitveSection = 1;
  const navHeight = document
    .querySelector(".navbar")
    .getBoundingClientRect().height;
  let scrollAmount = window.pageYOffset + navHeight;
  if (sectionTop[1] >= scrollAmount) {
    acitveSection = 1;
  } else if (sectionTop[2] >= scrollAmount) {
    acitveSection = 2;
  } else if (sectionTop[3] >= scrollAmount) acitveSection = 3;
  else acitveSection = 4;

  //removes active class for evey other section and adds to current
  for (let i = 0; i < 4; i++) {
    if (i != acitveSection - 1) {
      lis[i].classList.remove("active");
    } else lis[acitveSection - 1].classList.add("active");
  }
});
