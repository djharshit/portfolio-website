document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Harshit Mehra";
  } else {
    document.title = "Welcome to My Portfolio";
  }
});

let dataTyping = {
  target: "typing-text",
  text: '["Cloud Computing","DevOps Engineering","Python Programming","Linux Administration","Computer Networking"]',
  delay: "500",
};
let dataTyping2 = {
  target: "typing-text2",
  text: '["My name is Harshit Mehra","You can call me DJ."]',
  delay: "1000",
};

class textType {
  constructor(el, text, delay) {
    this.text = text;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(delay, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    let i = this.loopNum % this.text.length;
    let fullTxt = this.text[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerText = this.txt;

    let that = this;
    let timing = Math.floor(200 - Math.random() * 100);

    if (this.isDeleting) {
      timing /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      timing = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      timing = 500;
    }

    setTimeout(function () {
      that.tick();
    }, timing);
  }
}
window.onload = function () {
  let el = document.getElementsByClassName(dataTyping.target);
  let el2 = document.getElementsByClassName(dataTyping2.target);
  for (let i = 0; i < el.length; i++) {
    if (dataTyping.text) {
      new textType(el[i], JSON.parse(dataTyping.text), dataTyping.delay);
    }
  }
  for (let i = 0; i < el2.length; i++) {
    if (dataTyping2.text) {
      new textType(el2[i], JSON.parse(dataTyping2.text), dataTyping2.delay);
    }
  }
};
navLinks = document.querySelectorAll("ul li a");
section = document.querySelectorAll(".navE");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

const bar = document.querySelector(".barr");
const nav = document.querySelector(".mobile");
bar.addEventListener("click", function () {
  nav.classList.toggle("hide2");
});
