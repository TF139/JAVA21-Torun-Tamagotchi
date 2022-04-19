export class Tamagotchi {

  #hungerLevel = 5;
  #happinessLevel = 5;
  #name;

  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name
  }
  getHunger() {
    return this.#hungerLevel;
  }
  getHappiness() {
    return this.#happinessLevel;
  }
  hungerDrain() {
    setInterval(() => {
      if (this.#hungerLevel >= 10) {
        clearInterval(this.hungerDrain());
        clearInterval(this.happinessDrain());
        document.querySelector("#hunger").innerText = "Tama died out of hunger";
      }
      else {
        this.#hungerLevel += 1;
        document.querySelector("#hunger").innerText = this.#hungerLevel;
      }

    }, 1000 * 2);
  }

  happinessDrain() {
    setInterval(() => {
      if (this.#happinessLevel <= 0) {
        clearInterval(this.happinessDrain());
        clearInterval(this.hungerDrain());
        document.querySelector("#happy").innerText = "Tama died out for boredom";
        document.querySelector("#status").innerText = "Refresh the tab to restart the game!";
      }
      else {
        this.#happinessLevel -= 1;
        document.querySelector("#happy").innerText = this.#happinessLevel;
      }

    }, 1000 * 2);
  }

  feed() {
    if (((this.#happinessLevel && this.#hungerLevel) > 0) && ((this.#happinessLevel && this.#hungerLevel) < 10)) {
      this.#hungerLevel -= 1;
    }
  }

  play() {
    if (((this.#happinessLevel) > 0) && ((this.#happinessLevel) < 10)) {
      this.#happinessLevel += 1;
    }
  }

  isTamaDead() {
    if (this.#happinessLevel <= 0 || this.#hungerLevel >= 10) {
      return true;
    }
    else {
      return false
    }
  }
}