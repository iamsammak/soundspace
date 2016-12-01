# Sound Space

![header]
[header]: ./assets/images/header.png

### Background
####Live Site
[Click to Play](https://iamsammak.github.io/soundspace/)

[patatap](http://www.patatap.com/)

Imagine you have a cannon and it shoots cannonballs. You noticed bubbles flying around you. Then a question pops into your head.

What. do. you. do?

### Game Play

User Interaction:

- [ ] Interact with the game by moving the mouse over the game board
- [ ] Shoot cannonballs by clicking the Mouse

Baburu's moving parts:

- [ ] Cannon fixed to the center of canvas that pivots following the user's mouse location
- [ ] Bubbles float around, bound by the viewport
- [ ] Cannonballs will bounce off and expire after 3 seconds

Goal of the game:

- [ ] Pop em' all

### Game views

####Home Screen
![homepage]

####Play view
![gameview]

####Pause Screen
![paused]

####Winner Screen
![winner]

[homepage]: ./icons/splash.png
[gameview]: ./icons/game_play.png
[paused]: ./icons/paused.png
[winner]: ./icons/winner.png

### Future Implementations

Adding sounds with Howler.js :
- [ ] Ambient bubble mood music
- [ ] Shooting cannonballs
- [ ] Bubble pop
Revamp bubble collision with Paper.js :
- [ ] bubble's surface will ripple upon collision with other bubbles

Levels :

- [ ] Level 1: aim and shoot - destroy all the moving objects
- [ ] Level 2: aim and shoot - freeze all the objects (objects will unfreeze when another object or your cannonball collides with it)
- [ ] Level 3: touch all four walls - shot your cannonball so that it will touch every wall before colliding with
