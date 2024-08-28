//document.addEventListener("DOMContentLoaded", function(){
const colors = ["#999955", "#229905", "#92a9f5", "#f2a145", "#ff5a45", "#ff091a"]

class Swimmers {
  constructor(name, age, rang, styles) {
    this.name = name;
    this.age = age;
    this.rang = rang;
    this.styles = styles;
  }
  say() {
    return ("Привет, мне " + this.age)
  }
}
const Swimmer_Kolya = new Swimmers("Коля", 16, "МС", "Батт");
console.log(Swimmer_Kolya.name);
console.log(Swimmer_Kolya.say())

class Trener extends Swimmers {
  constructor(name) {
    super(name, 28, "КМС", "Батт"); // Вызов конструктора родительского класса
  }

  do_work() {
    return this.name + " тренирует спортсменов!"; // Возврат строки
  }
}

const Trener_60 = new Trener("Михаил Игоревич");
console.log(Trener_60.do_work());
console.log(Trener_60.say());

//3. Полиморфизм (Polymorphism):
//• Позволяет использовать объекты разных классов через единый интерфейс.
//• Переопределение методов:
//  class Cat {
//    makeSound() {
//      console.log("Мяу!");
//    }
//  }

//  function animalSound(animal) {
//    animal.makeSound();
//  }

//  animalSound(myDog); // Вывод: Рекс лает: Гав!
//  animalSound(myGoldenRetriever); // Вывод: Барни лает: Гав!
//  animalSound(new Cat()); // Вывод: Мяу!
  
class BankAccount {
  #balance = 0; // Private свойство

  constructor(name) {
    this.name = name;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(this.name + ", на вашем счету теперь " + this.#balance);
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      console.log(this.name + ",  с вашего счета снято " +  amount);
    } else {
      console.log(this.name +",  недостаточно средств");
    }
  }

  getBalance() {
    return this.#balance;
  }
}