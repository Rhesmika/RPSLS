# Rock, Paper, Scissors, Lizard, Spock!

This website hosts a game for the user to play 'Rock, Paper, Scissors, Lizard Spock' against the computer. There are three levels; each level introduces a new move. Level one includes moves 'Rock', 'Paper' and 'Scissors'. Level two introduces the move 'Lizard'. Level three introduces move 'Spock'. 

![am-i-responsive](assets/images/readme/am-i-responsive.png)

## Mockup

The mock-up for the website was created on Illustrator. 

### Icons
The original icons used for Rock, Paper, and Scissors were sourced from the below website. 

https://www.flaticon.com/free-icon/rock-paper-scissors_4144475

I then used Adobe Illustrator to develop my own Lizard and Spock icons, to create a consistent style for all my icons. the same colouring, stroke width, and arm length of each icon were all taken into consideration when these icons were in development. 

![icon-development](assets/images/readme/icon-development-illustrator.png)

As seen above, the 'fav' icon was also created at the same time to cultivate consistency. 

All 5 icons were then used to create the rules diagram so the user has a pictoral visual of how to play the game. 

![rules-diagram](assets/images/readme/rules-diagram-illustrator.png)

### Design

The layout and colours used were chosen to be internationally simple and clean. The three colours create a crisp and friendly asthetic. 

![colour-pallett](assets/images/readme/library-illustrator.png)


The rounded corners on the icons, match the font chosen, as well as the rounded corners of the game area and buttons.  The overall game feel is soft, yet crisp. 

### Layout

The website layout was designed in Illustrator; This enabled me to have a realistic view of what the website could look like. 
![layout-illustrator](assets/images/readme/layout-illustrator.png)

![layout-mobile-illustrator](assets/images/readme/layout-mobile-illustrator.png)


As you can see by the markings on the background of the above image, I also used this layout to make out the different sections of the website; This really helped when it came to putting the website together and assigning classes and ID's to different sections. 

## Edits

Once the website was actually being created, there were some changes made. 

Game Rules:
The rules of the game were set out in a table format and I decided to center the text instead of aligning it to the left; This makes the rules area flow much better and appear as one whole section of the page, rather than information which was completely seperate to the diagram. 

Game Message:
When the user first enters the game page, there isn't any instruction on how to make a move against the computer. I added a simple message below the icons to notify the user they can either click with their mouse on their move of choice, or they can use the corresponding number on their keyboard. Looking back this is definitely something that should have been thought out in the designing process. 

Game Outcome Buttons:
It was decided that yellow, black, and white were the main colours of the website. Having the buttons at the bottom of the game in blue, felt too foreign to the look of the page. These buttons were changed to a darker shade of yellow. 

Scoring: 
The scoring of the game was initally only going to count the games the user lost. As the website developed, I created a leveling system and determined it to be a more positive experience for the user to see how many more games they needed to win before they could level up. 


## Features
The game has 3 levels. Each level can be achieved by winning three games against the computer.  If the user loses three games in the level, the lose score restarts to 0. They can then stay on the level until they achieve 3 wins before they achieve 3 losses. The level the user is on displays at the top of each page. 
When the user completes a level, a popup appears to let the user know.  The user then has the option to level up or restart the game. 

![popup-level-complete](assets/images/readme/popup.png)


As mentioned above, the game tracks the score of the user depending on if they win or lose each round. 3 wins before 3 losses means the user gets to level up.

Each level introduces a new rule.  The game gets harder with each level as there's more of a chance for attack and defense.

![level2](assets/images/readme/level2.png)
![level3](assets/images/readme/level3.png)


The user plays the game against the computer. The computer automatically chooses their move based on the level the user is on. If the user only has asccess to rock, paper, and scissors - then so does the computer. 

Dependent on what the user and computer play, an outcome message appears at the bottom of the game section. This message shows the user who wins and how they won; ie. "Lizard POISONS Spock". This is then followed by a message notifying the user who wins that round. 

### Future Features
- Allow the user to play against their friends (player 1 and player 2)
- A leaderboard
- New Levels with new rules
- If the user looses 3 games they must return to level 1


## Testing

The game and all links/ features have been tested on both mobile and laptop. On laptop, the browser was Chrome, on movile, the browser was Safari.

Media queries created were suitable for each screen size and didn't affect the radio of images etc. On mobile, all hand moves could be seen clearly along with the scores without the need to scroll. 

### Lighthouse

Lighouse reports were generated on all 4 pages of the website. See below the scores:
![lighthouse-score-index](assets/images/readme/lighthouse-index.png)
![lighthouse-score-level1](assets/images/readme/lighthouse-level1.png)
![lighthouse-score-level2](assets/images/readme/lighthouse-level2.png)
![lighthouse-score-level3](assets/images/readme/lighthouse-level3.png)


### Validator Testing

HTML:
When passed through W3C Validator, only minor errors were highlighted. Simple issues such as spacing and punctuation were ammended. 
The report now returns no errors. 
![html-w3c](assets/images/readme/html-w3c.png)

CSS: 
When passed through jigsaw, no errors were found. 
![css-jigsaw](assets/images/readme/css-jigsaw.png)

JavaScript:
When passed through JSHint, there are warnings that appear.  A majority of these are the same warnings relating to the following : "let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)". 
![js-hint](assets/images/readme/js-jshint.png)

### Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - Navigate to the pages section on the left hand side
  - See the drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page was automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://rhesmika.github.io/RPSLS/

## Credits

### Icons
First three icons used on the website and used for inspiration for lizard and spock icon: 
https://www.flaticon.com/free-icon/rock-paper-scissors_4144475

### Popup
Popup tutorial was found on Youtube:
https://www.youtube.com/watch?v=sEJB7FtBoug&t=8s

### HTML
Event listener code at top of Javascript was referenced from the Love Maths website: https://rhesmika.github.io/love-maths/
