let btn = document.querySelector(".top-page");
let started = false;

window.onscroll = () => {
  if (window.scrollY >= 838) {
    btn.style.display = "block";
  } else btn.style.display = "none";
  if (window.scrollY >= document.querySelector(".states").offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => counter(num));
    }
    started = true;
  }
  if (window.scrollY >= document.querySelector(".skills").offsetTop - 400) {
    let spanProg = document.querySelectorAll(".skills .progress span");
    spanProg.forEach((s) => (s.style.width = s.dataset.prog = s.dataset.width));
  }
  if (window.scrollY >= document.querySelector(".discount").offsetTop - 200) {
    document
      .querySelectorAll(".discount h2")
      .forEach((h2) => h2.classList.add("typing"));
  }
};
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/************************************************************************************* */

let lscolors = document.querySelectorAll(".lscolors li");

if (window.localStorage.getItem("mcolor")) {
  document.querySelector(
    ":root"
  ).style.cssText = `--mcolor: ${window.localStorage.mcolor}; --mhcolor: ${window.localStorage.mhcolor}`;
  lscolors.forEach((e) => e.classList.remove("active"));
  document
    .querySelector(`[data-mcolor="${window.localStorage.mcolor}"`)
    .classList.add("active");
}

lscolors.forEach((li) => {
  li.onclick = () => {
    lscolors.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");

    window.localStorage.mcolor = li.dataset.mcolor;
    window.localStorage.mhcolor = li.dataset.mhcolor;
    document.querySelector(
      ":root"
    ).style.cssText = `--mcolor: ${window.localStorage.mcolor}; --mhcolor: ${window.localStorage.mhcolor}`;
  };
});

/************************************************************************************* */

let nums = document.querySelectorAll(".states .box h1");

function counter(n) {
  let goal = n.dataset.goal;
  let count = setInterval(() => {
    n.textContent++;
    if (n.textContent == goal) {
      clearInterval(count);
    }
  }, 0.1);
}

/************************************************************************************* */

let syear = new Date("Apr 29, 2022 23:59:59").getTime();

let countdown = setInterval(() => {
  let date = syear - new Date().getTime();

  let days = Math.floor(date / (1000 * 60 * 60 * 24));
  let hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((date % (1000 * 60)) / 1000);

  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

/************************************************************************************* */

let txtarea = document.querySelector(".discount .form textarea");
let maxl = txtarea.getAttribute("maxlength");

txtarea.oninput = () => {
  let count = maxl - txtarea.value.length;
  document.querySelector(".discount .form .count").innerHTML = count;
  let prog = document.querySelector(".discount .form .progress");
  prog.style.width = `${(txtarea.value.length / maxl) * 100}%`;
  txtarea.value.length == maxl
    ? prog.classList.add("max")
    : prog.classList.remove("max");
};

/************************************************************************************* */

let libtn = document.querySelector("header ul > li:last-of-type");
let links = document.querySelector("header .links");
let apeared = false;

libtn.onclick = () => {
  if (!apeared) {
    links.classList.add("apear");
    apeared = true;
  } else {
    links.classList.remove("apear");
    apeared = false;
  }
};
links.onclick = () => {
  links.classList.remove("apear");
};

/************************************************************************************* */

let cr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
let rand = [];

for (let i = 0; i < 6; i++) {
  rand.push(cr[Math.floor(Math.random() * cr.length)]);
}
let coll = console.log(`#${rand.join("")}`);

/************************************************************************************* */

let hovered = false;
let mtitle = document.querySelectorAll(".mtitle");
mtitle.forEach((t) => {
  t.onclick = () => {
    if (!hovered) {
      t.classList.add("hover");
      hovered = true;
    } else {
      t.classList.remove("hover");
      hovered = false;
    }
  };
});

/************************************************************************************* */

let wb = false;
let game = document.querySelectorAll(".team .box");

game.forEach((g) => {
  g.onclick = () => {
    game.forEach((g) => {
      g.classList.remove("hover");
      wb = false;
    });
    if (!wb) {
      g.classList.add("hover");
      wb = true;
    } else {
      g.classList.remove("hover");
      wb = false;
    }
  };
});
