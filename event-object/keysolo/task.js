"use strict"
class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeRemaining = container.querySelector('.timer');
    this.stopwatch;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  
  registerEvents() {
    addEventListener ('keypress', (event) => {
      const inputSymbol = event.key.toLowerCase();
      const currentSymbol = this.currentSymbol.textContent.toLowerCase();
      
      if(inputSymbol === currentSymbol) {
        this.success();
      } else {
        this.fail();
      }
      
      }
    )
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.timerReset();
    this.timer(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'я люблю popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  timer(word) { 
    this.timeRemaining.textContent = `${word.length} сек.`;
    let secondsRemain = word.length;
    this.stopwatch = setInterval(() => {
      secondsRemain -=1;
      this.timeRemaining.textContent = `${secondsRemain} сек.`;
      if(secondsRemain === 0) {
        this.fail();
      } 
    }, 1000);
  }

  timerReset() {
    clearInterval(this.stopwatch);
  }
}



new Game(document.getElementById('game'))

