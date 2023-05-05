# JavaScript Practice Projects

This repository contains a collection of JavaScript projects that I practiced while taking Jonas Schmedtmann's JavaScript course. These projects helped me improve my JavaScript skills and gain a better understanding of the language.

## Table of contents

- [Dice Rolling Game](#Dice Rolling Game)
- [Guess Number Game](#Guess Number Game)
- [Pop-up Window](#Pop-up Window)
- [Useful resources](#Useful resources)

## Dice Rolling Game

The dice rolling game is a simple game where two players roll a dice and the player reach 100 first wins.
This project helped me understand how to manipulate the DOM to update the game state as well as practiced the basic programming thinking.

### Useful takeaways

Construct a init function for a game.

```js
const init = function () {
  // 0 is player 1, 1 is player 2
  scores = [0, 0];
  activePlayer = 0;
  poolScore = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  dice.classList.add("hidden");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  document.querySelector(".player").classList.remove("player--winner");
};
init();
```

Set player 1 and 2 as 0 and 1, to be able to manipulate the game in a easy way.

```js
document.getElementById(`current--${activePlayer}`).textContent = poolScore;
```

## Guess Number Game

The guess number game is a game where the user has to guess a randomly generated number within a specified range. This project helped me understand how to use JavaScript's Math object to generate random numbers and how to use conditional statements to control the flow of the game.

### Useful takeaways

Use Math.trunc and Math.random to generate random number.

```js
number = Math.trunc(Math.random() * 20 + 1);
```

Use js way to write simple function.

````js
document.querySelector('.message').textContent = guess > number ? 'Too High!' : 'Too Low!';
```

## Pop-up Window

The pop-up window project is a simple project where a pop-up window appears when the user clicks on the buttons. This project helped me understand how to use JavaScript event listeners to detect user actions and how to manipulate the DOM to create and display elements.

### Useful takeaways

Practice of using addEventListener to listen the keyboard action.
```js
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
```

## Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - The best doc for new web developers.
````
