# agender, a code poem
This poem was inspired by my personal experience grappling with gender as a child and Virginia Woolf's exploration of gender in *Orlando*. The following quote where Orlando muses on their own gender resonates with my experience: "[Orlando] pitted one sex against the other, and found each alternately full of the most deplorable infirmities, and was not sure to which she belonged." 

The title "agender" has double meaning, referring to "agender" identification outside the gender binary and trying to define "a gender," a singular identity to fit to oneself. Similarly, the animation code named `genderTroubles` is a reference to Judith Butler's work on theorizing gender performativity in *Gender Trouble* and also a reference to the gender troubles many folks who do not necessarily identify with queer labels still experience through the difficulty in categorizing themselves and performing normative genders.

## Symbolic setup
The self in the poem is represented in the animation by a grid of boxes, and described in the code by `piecesOfMe`, `traitGenders`, `halfBoyHalfGirl`, and `justATomboy`. The code below encapsulates the random generation of the self via genetics and the socially constructed quasi-random nature of the assignment of traits to gender.
```
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
```
The following code reveals connections (and false connections) between different concepts. The inputs (in the parentheses) preceded by underscores are not actually used to compute the outputs that follow the arrows.
```
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
```
## Animation and coded implementation
The poem begins with the display of a white box on a black background to represent the self against nothingness, a high-contrast, introspective view of the universe.

The white box splits into 441 boxes in a 21 x 21 grid determined by the `age` parameter. The boxes represent traits or bits of the self, and each box has a color selected from a rainbow distribution.
```
.add({
  // Here I am exposed.
  backgroundColor: ourTrueColors,
  translateX: breakMeApart(femme),
  translateY: breakMeApart(masc),
  duration: ofMyBirth,
  scale: meStripMeToTheCore,
  delay: theInevitable
})
```
After spreading into the colored grid representation of the self, the underlying binary encoding to blue/pink (masculine/feminine) of each bit is revealed.
 ```  
.add({
  // Here we go. Categorization. Baby blue or little girl pink?
  backgroundColor: whatYouSee,
  delay: theInevitable
})
```
In a desperate attempt to make order from the chaos, the bits explode outward into their true colors and then are paintakingly reorganized into rows of 11/21 pink, 10/21 blue boxes, reflecting the difficult process of trying to understand why society deems certain traits masculine and others feminine and then fit one's gender into a more palatable form. 
```
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
```
The transition from a little more than half pink to mostly pink expresses this effort to be just a "tomboy," a socially acceptable way be a masculine girl. 
```
.add({
  backgroundColor: almostThere,
  translateX: imAGirl,
  translateY: imABoy,
  scale: meStripMeToTheCore,
  scaleX: canIJustBeMyself,
  duration: ofMyBirth / 2,
  delay: theInevitable
})
```

The final explosion into the box's true colors emphasizes the instability of the forced order of the meticulously arranged mostly pink / a little bit blue rows, and the final spin evokes the buzz of embracing the true self, in all their colors.
```
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
```