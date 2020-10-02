# [WordSpace](https://travisa9.github.io/WordSpace/)
[View Alpha version online](https://travisa9.github.io/WordSpace/)

Break text into indexed vector particles and manipulate them through forces in space.

## Basic idea:

Words are broken into letter-to-letter vectors along with their index within the article. 
So you have an array of three details ( 1: from-letter, 2:to-letter, 3:index ). 

There are also X and Y fields to keep track of the position in the canvas. 
So, the particles are randomely sprayed -as it were- into the center of the canvas. 

Now the proccess can begin: each particle is moved toward or away from every other particle 
depending on the relationship between the three details (from, to, index-adjacency).

Some very cool effects can be seen under very specific circumstances such as continuous rotation 
and fractal patterns when collapsing. Also, you can get comets, clumps and fractal fibres.

## General Goals:

### Visual:

* **Clumps:** many, higherarchial clumps are a good sign that your data is being classified (grouped).

* **Branching Fibres:** A decent degree of branching made of fibres of particles and clumps is a good sign 
that there is not only grouping, but that conditional correlation has been found between those groups.

### Functional: 

* **Word recognition:** it is hoped that through the first two visually oriented goals it will be possible to 
clearly identify words.

* **Abstraction:** Once a word is recognized, remove the particles (which = activations) 
and replace them with a new particle which represents the word. The same would be done for word groupings. 
until the text is fully abstracted into ideas.


### User Interface:

* **Time travel:** Create a slider or other control to move through time within the provided text and show only 
the activations within that sliding window. ...Maybe show the correlated abstractions as well.

* **Area Selection:** Add the ability to select all particles within a given area and view their contents as text.





