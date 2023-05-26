let seaIce = [
  0.79, 0.75, 1.01, 1.03, 1.15, 0.91, 0.47, 0.75, 0.82, 0.29, 0.55, -0.2, -0.03,
  0.62, -0.04, 0.33, -0.59, 0.52, -0.08, -0.13, -0.16, -0.04, -0.49, -0.25,
  -0.29, -0.12, -0.76, -0.94, -1.47, -0.73, -0.65, -1.06, -1.28, -1.52, -1.21,
  -1.23, -0.84, -1.32, -1.26, -0.96, -1.51, -1.71, -1.9,
];

let range = Math.max(...seaIce) - Math.min(...seaIce);
let minSeaIce = Math.min(...seaIce);

let years = [
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
  1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020, 2021, 2022,
];
document.addEventListener("DOMContentLoaded", function () {
  let col = document.querySelector(".grid");
  col.style.backgroundColor = getColour(42);
});

function getColour(i) {
  let proportionOfMinSeaIce = (seaIce[i] - minSeaIce) / range; // val between 0 and 1
  let seaIcePercentage = (proportionOfMinSeaIce * 0.9 + 0.1) * 100;
  return "hsl(215, 55%," + seaIcePercentage + "% )";
}
