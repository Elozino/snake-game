# snake-game

### Step by step on how to create snake game
# Step One
Create your html, css and JavaScript files and link them together

# Step Two
In your html file, add a canvas style with an Id, width and height
In your CSS file, erase default styling and center everything to the middle

# Step Three
Here is where we perform our JS logics

- Select the canvas ID from the html file
- Use the canvas to get a 2D context so your can draw on the screen
- Create a function to draw the snake board game
- Create a function that will dictate how the game/code will run
- Create a function to draw the snake
- Create a function to draw the food
- Create a function to increase the score
- Create an object that will draw the snake parts
- Create a function that will control the game
- Craete a function that will increase the snake length by removing the last snake tail position and adding it to the current snake head position.
- Create a function that will change the snake position
- Create a function that will clear the screen and redraw every Xseconds
- Create a function that will accomplish the game rule
- Arrange all the function into the game function (refer to line 15 here)




## My Talks
To create a snake game using JavaScript, there are periquiste you must know:

- Array Methods
- Canvas
- SetIntervals
- SetTimeout

Above everything, you must have an idea of how you want to create it and the logic/data structure to use

- Drawing of the game board
- Drawing of the snake
- Add event listeners to make the snake move
- Clearing of the canvas during intervals

Rule of the game
- It should not move within itself
- It should add score when it eats food && as it eats food the snake length becomes longer
- It should prompt game over if any of the rule is not met



Question
Difference between setInterval and setTimeout