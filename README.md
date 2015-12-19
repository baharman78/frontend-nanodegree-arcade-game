frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://www.udacity.com/course/viewer/#!/c-nd001/l-2696458597/m-2687128535) for self-checking their submission.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

###### Forked off of Udacity's starter [code](https://github.com/udacity/frontend-nanodegree-arcade-game)
## Instructions

The point of the game is to move your player from starting position to the water without being hit by the enemies.  The game will restart if player hits enemies or if player reaches the water.

## Suggested Modifications
The initial speed can be modified using the spd variable for
both the player and the enemies.
```
Player's speed is based on grid system
  - Ex. spd 2 will jump two spaces for every button press
```
```  
Enemy's speeds are determined by the customized random function
mathRandomRange(input1, input2)
  - input 1 will provide minimum possible speed
  - input 2 will provide maximum possible speed
```
