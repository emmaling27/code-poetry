const genderRepresentation = document.querySelector('.gender-presentation');
const fragment = document.createDocumentFragment();
const age = 17;
const traits = [age, age];
const masculinity = traits[0];
const femininity = traits[1];
const whole = masculinity * femininity;

const red = '#FF0900';
const orange = '#FF7F00';
const yellow = '#FFEF00';
const green = '#00F11D';
const blue = '#0079FF';
const violet = '#A800FF';
const colors = [red, orange, yellow, green, blue, violet];
const urABoy = '#89cff0'
const urAGirl = '#f8b9d4'
const femme = 'x';
const masc = 'y';

let traitColors = [];
let traitGenders = [];
let halfBoyHalfGirl = [];
let justATomboy = [];
for (let i = 0; i < whole; i++) {
  fragment.appendChild(document.createElement('div'));
  traitColors.push(_.sample(colors))
  traitGenders.push(_.sample([urABoy, urAGirl]))
  i % age < 9 ? halfBoyHalfGirl.push(urAGirl) : halfBoyHalfGirl.push(urABoy);
  i % age < 13 ? justATomboy.push(urAGirl) : justATomboy.push(urABoy);
}
genderRepresentation.appendChild(fragment);

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

const breakMeApart = axis => [
  {value: anime.stagger('-.1rem', {grid: traits, from: 'center', axis: axis}) },
  {value: anime.stagger('.1rem', {grid: traits, from: 'center', axis: axis}) }
];

const inTheTimeIWasBorn = 1000;
const meStripMeToTheCore = .5;

const theInevitable = anime.stagger(100, {grid: traits, from: 'center'});
const getRidOfThisThingIDontKnowWhatItIs = () => anime.random(-10, 10);
const theCategorization = anime.stagger(8, {from: 'last'});
const foundAWayToPass = axis => 
  anime.stagger('.25rem', { grid: traits, from: 'center', axis: axis });
const backToWhoIAm = axis => 
  anime.stagger(1, { grid: traits, from: 'center', axis: axis });
const nothing = anime.stagger(50, { grid: traits, from: 'center' });
const meLikeAJewel = anime.stagger([90, 0], { grid: traits, from: 'center' });
const likeTheWorldHasExplodedBecauseItHas = 
  anime.stagger([0, 90], { grid: traits, from: 'center', axis: 'x' });

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
  duration: inTheTimeIWasBorn,
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
})
.add({
  backgroundColor: justATomboy,
  translateX: imAGirl,
  translateY: imABoy,
  scale: meStripMeToTheCore,
  scaleX: canIJustBeMyself,
  duration: inTheTimeIWasBorn,
  delay: theInevitable
})
.add({
  scaleY: canIJustBeMyself,
  scale: canIJustBeMyself,
  delay: theInevitable
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