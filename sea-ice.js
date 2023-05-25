var i = 0;
let seaIce = [
  0.79, 0.75, 1.01, 1.03, 1.15, 0.51, 0.47, 0.75, 0.82, 0.29, 0.55, -0.2, -0.03,
  0.62, -0.04, 0.33, -0.59, 0.52, -0.08, -0.13, -0.16, -0.04, -0.49, -0.25,
  -0.29, -0.12, -0.76, -0.94, -1.47, -0.73, -0.65, -1.06, -1.28, -1.52, -1.21,
  -1.23, -0.84, -1.32, -1.26, -0.96, -1.51, -1.91, -1.52, -1.04,
];

let range = Math.max(...seaIce) - Math.min(...seaIce);

let minSeaIce = Math.min(...seaIce);
// function change() {
//   let background = document.getElementById("grid");
//   let text = document.getElementById("text");
//   let proportionOfMinSeaIce = (seaIce[i] - minSeaIce) / range; // val between 0 and 1
//   // scale to between 0.25 and 1
//   let seaIcePercentage = (proportionOfMinSeaIce * 0.75 + 0.25) * 100;
//   background.style.backgroundColor =
//     "hsl(215, 100%," + seaIcePercentage + "% )";
//   text.textContent = years[i];
//   i = (i + 1) % seaIce.length;
// }
// setInterval(change, 100);

let years = [
  1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
  1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
  2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
  2018, 2019, 2020, 2021, 2022,
];
document.addEventListener("DOMContentLoaded", function () {
  const value = document.querySelector("#value");
  const input = document.querySelector("#pi_input");
  value.textContent = input.value;
  updateBackground(input.value);
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    updateBackground(input.value);
  });
});

function updateBackground(year) {
  let background = document.getElementById("grid");
  let text = document.getElementById("text");
  let i = year - 1979;
  let proportionOfMinSeaIce = (seaIce[i] - minSeaIce) / range; // val between 0 and 1
  // scale to between 0.25 and 1
  let seaIcePercentage = (proportionOfMinSeaIce * 0.75 + 0.25) * 100;
  background.style.backgroundColor =
    "hsl(215, 100%," + seaIcePercentage + "% )";
  text.textContent = years[i];
}

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function () {
//   output.innerHTML = this.value;
// };

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function () {
//   output.innerHTML = this.value;
// };
