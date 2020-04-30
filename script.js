const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;


const red = '#FF0900';
const orange = '#FF7F00';
const yellow = '#FFEF00';
const green = '#00F11D';
const blue = '#0079FF';
const violet = '#A800FF';
const colors = [red, orange, yellow, green, blue, violet];
const urABoy = '#89cff0'
const urAGirl = '#f8b9d4'

let traitColors = [];
let traitGenders = [];
let halfBoyHalfGirl = [];
let justATomboy = [];
for (let i = 0; i < numberOfElements; i++) {
  const elt = document.createElement('div');
  elt.setAttribute("id", i);
  fragment.appendChild(elt);
  traitColors.push(_.sample(colors))
  traitGenders.push(_.sample([urABoy, urAGirl])) // choosing not to abstract away here to emphasize the gender binary
  i % 17 < 9 ? halfBoyHalfGirl.push(urAGirl) : halfBoyHalfGirl.push(urABoy);
  i % 17 < 13 ? justATomboy.push(urAGirl) : justATomboy.push(urABoy);
}
staggerVisualizerEl.appendChild(fragment);

const ourTrueColors = 
  (_yourBiases, whoIAm, _whoTheWorldThinksIAm) => traitColors[whoIAm];
const whatYouSee = 
  (_whoIAm, yourBiases, _whoTheWorldThinksIAm) => traitGenders[yourBiases];
const tryingToConform = 
  (_whoIAm, theWorldsExpectations, _whoTheWorldThinksIAm) => 
  halfBoyHalfGirl[theWorldsExpectations];
const almostThere = 
  (_whoIAm, theWorldsExpectations, _whoTheWorldThinksIAm) => 
  justATomboy[theWorldsExpectations];

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: false,
  autoplay: false
})
.add({
  backgroundColor: ourTrueColors,
  translateX: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  backgroundColor: whatYouSee,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  backgroundColor: ourTrueColors,
  translateX: () => anime.random(-10, 10),
  translateY: () => anime.random(-10, 10),
  delay: anime.stagger(8, {from: 'last'})
})
.add({
  backgroundColor: tryingToConform,
  translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  delay: anime.stagger(4, {from: 'center'})
})
.add({
  backgroundColor: justATomboy,
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  duration: 1000,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  scaleY: 1,
  scale: 1,
  delay: anime.stagger(20, {grid: grid, from: 'center'})
})
.add({
  backgroundColor: ourTrueColors,
  translateX: anime.stagger(1, {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger(1, {grid: grid, from: 'center', axis: 'y'}),
  rotateZ: anime.stagger([0, 90], {grid: grid, from: 'center', axis: 'x'}),
  delay: anime.stagger(100, {grid: grid, from: 'center'}),
  easing: 'easeInOutQuad'
})
.add({
  rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
  delay: anime.stagger(50, {grid: grid, from: 'center'})
})



staggersAnimation.play();
