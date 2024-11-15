# 🐍 Snake Game Project

A classic Snake Game built with HTML, Tailwind CSS, and vanilla JavaScript. This game allows players to control a snake that grows longer every time it eats food. The objective is to eat as much food as possible without running into the walls or the snake's own body.

## 📋 Table of Contents
- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Gameplay Instructions](#-gameplay-instructions)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## 🎮 Demo
Try out the game live here: **[Snake Game Demo](https://github.com/Sushank-ghimire/snake-game)**

## ✨ Features
- Real-time snake movement controlled by arrow keys.
- Randomly generated food positions on the board.
- Score tracking system with high score saved in `localStorage`.
- Responsive design that adjusts to different screen sizes.
- Clean UI styled with Tailwind CSS.

## 🛠 Tech Stack
The following technologies were used to build this project:

- **HTML**: For creating the structure of the game.
- **Tailwind CSS**: For styling the game board and UI elements.
- **JavaScript**: For game logic, including snake movement, food generation, and collision detection.

## 🚀 Installation
To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sushank-ghimire/snake-game.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd snake-game
   ```

3. **Open the `index.html` file in your browser**:
   You can simply double-click the `index.html` file or use a live server extension in your code editor (like VSCode).

That's it! The game should be running in your browser.

## 🎮 Gameplay Instructions
1. Click the "Start Game" button to begin.
2. Control the snake using the arrow keys:
   - **Up Arrow**: Move Up
   - **Down Arrow**: Move Down
   - **Left Arrow**: Move Left
   - **Right Arrow**: Move Right
3. The snake will grow longer each time it eats the yellow food block.
4. The game ends if the snake hits the walls or itself.
5. Your score will be displayed on the screen, and the highest score is saved in your browser.

## ⚙️ How It Works
### Game Mechanics
- **Snake Movement**: The snake moves continuously in the direction of the arrow key pressed by the player.
- **Food Generation**: Food is placed randomly on the board. When the snake eats the food, its length increases.
- **Collision Detection**: The game detects collisions with the walls and the snake's own body to determine if the game is over.
- **Score Tracking**: The game tracks the player's score and saves the high score in `localStorage`, allowing it to persist across sessions.

### Code Highlights
- The game board is rendered using an HTML `<canvas>` element.
- JavaScript handles the game loop, updating the snake's position and checking for collisions.
- Tailwind CSS is used to style the game board and buttons.

## 📁 Project Structure
```
snake-game/
├── index.html         # The main HTML file
├── styles.css         # Tailwind CSS styles
├── script.js          # JavaScript game logic
└── README.md          # Project documentation
```

## 📄 License
This project is licensed under the MIT License.
