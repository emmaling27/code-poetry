const genderRepresentation = document.querySelector('.gender-presentation');
const fragment = document.createDocumentFragment();
const age = 21;
const traitSpace = [age, age];
const masculinity = traitSpace[0];
const femininity = traitSpace[1];
const whole = masculinity * femininity;

const red = '#FF0900';
const orange = '#FF7F00';
const yellow = '#FFEF00';
const green = '#00F11D';
const blue = '#0079FF';
const violet = '#A800FF';
const traits = [red, orange, yellow, green, blue, violet];
const urABoy = '#89cff0'
const urAGirl = '#f8b9d4'
const femme = 'x';
const masc = 'y';

let piecesOfMe = [];
let traitGenders = [];
let halfBoyHalfGirl = [];
let justATomboy = [];
for (let i = 0; i < whole; i++) {
  fragment.appendChild(document.createElement('div'));
  piecesOfMe.push(_.sample(traits))
  traitGenders.push(_.sample([urABoy, urAGirl]))
  i % age < age / 2 ? halfBoyHalfGirl.push(urAGirl) : halfBoyHalfGirl.push(urABoy);
  i % age < age * 3 / 4 ? justATomboy.push(urAGirl) : justATomboy.push(urABoy);
}
genderRepresentation.appendChild(fragment);

const ourTrueColors = 
  (_yourBiases, whoIAm, _whoTheWorldThinksIAm) => piecesOfMe[whoIAm];
const whatYouSee = 
  (_whoIAm, yourBiases, _whoTheWorldThinksIAm) => traitGenders[yourBiases];
const tryingToConform = 
  (_whoIAm, theWorldsExpectations, _whoTheWorldThinksIAm) => 
  halfBoyHalfGirl[theWorldsExpectations];
const almostThere = 
  (_whoIAm, theWorldsExpectations, _whoTheWorldThinksIAm) => 
  justATomboy[theWorldsExpectations];

const breakMeApart = axis => [
  {value: anime.stagger('-.1rem', {grid: traitSpace, from: 'center', axis: axis}) },
  {value: anime.stagger('.1rem', {grid: traitSpace, from: 'center', axis: axis}) }
];

const ofMyBirth = 1500;
const meStripMeToTheCore = .5;

const theInevitable = anime.stagger(100, {grid: traitSpace, from: 'center'});
const getRidOfThisThingIDontKnowWhatItIs = () => anime.random(-10, 10);
const theCategorization = anime.stagger(8, {from: 'last'});
const foundAWayToPass = axis => 
  anime.stagger('.25rem', {grid: traitSpace, from: 'center', axis: axis});
const backToWhoIAm = axis => 
  anime.stagger(1, {grid: traitSpace, from: 'center', axis: axis});
const nothing = anime.stagger(50, {grid: traitSpace, from: 'center'});
const meLikeAJewel = anime.stagger([180, 0], {grid: traitSpace, from: 'center'});
const likeTheWorldHasExplodedBecauseItHas = 
  anime.stagger([0, 90], {grid: traitSpace, from: 'center', axis: 'x'});
const theChoice = anime.stagger(80, {from: 'first'});


const imAGirl = imABoy = 0;
const canIJustBeMyself = 1;
const mostOfSociety = 'easeInOutSine';
const me = 'easeInOutQuad';

const genderTroubles = anime.timeline({
  targets: '.gender-presentation div',
  easing: mostOfSociety,
  delay: nothing,
  loop: false,
  autoplay: false
})
.add({
  // Here I am exposed.
  backgroundColor: ourTrueColors,
  translateX: breakMeApart(femme),
  translateY: breakMeApart(masc),
  duration: ofMyBirth,
  scale: meStripMeToTheCore,
  delay: theInevitable
})
.add({
  // Here we go. Categorization. Baby blue or little girl pink?
  backgroundColor: whatYouSee,
  delay: theInevitable
})
.add({
  // I can fit I swear I can figure this out.
  backgroundColor: ourTrueColors,
  translateX: getRidOfThisThingIDontKnowWhatItIs,
  translateY: getRidOfThisThingIDontKnowWhatItIs,
  delay: theCategorization
})
.add({
  backgroundColor: tryingToConform,
  translateX: foundAWayToPass(femme),
  translateY: foundAWayToPass(masc),
  delay: theChoice
})
.add({
  backgroundColor: almostThere,
  translateX: imAGirl,
  translateY: imABoy,
  scale: meStripMeToTheCore,
  scaleX: canIJustBeMyself,
  duration: ofMyBirth / 2,
  delay: theInevitable
})
.add({
  scaleY: canIJustBeMyself,
  scale: canIJustBeMyself,
  delay: nothing
})
.add({
  backgroundColor: ourTrueColors,
  translateX: backToWhoIAm(femme),
  translateY: backToWhoIAm(masc),
  rotateZ: likeTheWorldHasExplodedBecauseItHas,
  delay: nothing,
  easing: me
})
.add({
  rotate: meLikeAJewel,
  delay: nothing
})

genderTroubles.play();
