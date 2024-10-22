import {makeAutoObservable} from "mobx";


class Bar {
  isBarActive = true
  tokens = 0

  constructor() {
    makeAutoObservable(this)
  }

  initTokens() {
    const today = new Date().toISOString().split('T')[0]; // Сьогоднішня дата у форматі YYYY-MM-DD
    const storedData = localStorage.getItem('tokensData');
    const parsedData = storedData ? JSON.parse(storedData) : null;

    if (!parsedData || parsedData.date !== today) {
      this.tokens = 5;
      const newData = {
        tokens: this.tokens,
        date: today
      };
      localStorage.setItem('tokensData', JSON.stringify(newData));
    } else {
      this.tokens = parsedData.tokens;
    }
  }

  // Функція для зменшення токенів на 1
  decreaseTokens() {
    if (this.tokens > 0) {
      this.tokens -= 1; // Зменшуємо токени на 1
      const today = new Date().toISOString().split('T')[0];

      const updatedData = {
        tokens: this.tokens,
        date: today
      };
      localStorage.setItem('tokensData', JSON.stringify(updatedData));
    }
  }

  openBar() {
    this.isBarActive = true
  }

  closeBar() {
    this.isBarActive = false
  }

  toggleBarActiveHandler() {
    this.isBarActive = !this.isBarActive
  }
}

const BarStore = new Bar()

export {
  BarStore
}
