const width = 500;
const height = 500;
const padding = 50;
const radius = 20;
const myInitialX = padding;
const myInitialY = padding;
const yourInitialX = width - myInitialX;
const yourInitialY = height - myInitialY;

const universe = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);
const me = universe.append("circle")
    // .attr("cx", myInitialX)
    // .attr("cy", myInitialY)
    .attr("r", radius)
    .attr("fill", "orange")
    .attr("id", "me");
const you = universe.append("circle")
    // .attr("cx", yourInitialX)
    // .attr("cy", yourInitialX)
    .attr("r", radius)
    .attr("fill", "purple")
    .attr("id", "you");

const myOrbit = universe.append("path")
    .attr("id", "myOrbit")
    .attr("d", 
        "M" + myInitialX + "," + myInitialY + " C300,0 500,0 400,250");

const yourOrbit = universe.append("path")
    .attr("id", "yourOrbit")
    .attr("d",
        "M" + yourInitialX + "," + yourInitialY + " C200,500 0,500 100,250");
const myPath = anime.path("#myOrbit");
const makingMyWay = anime({
    targets: '#me',
    translateX: myPath('x'),
    translateY: myPath('y'),
    duration: 3000,
    easing: 'cubicBezier(.5, .1, .1, .3)'
  });
const yourPath = anime.path("#yourOrbit");

const makingYourWay = anime({
    targets: '#you',
    translateX: yourPath('x'),
    translateY: yourPath('y'),
    duration: 3000,
    easing: 'cubicBezier(.5, .1, .1, .3)'
  });