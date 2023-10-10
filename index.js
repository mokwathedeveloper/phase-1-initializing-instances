// Write your code here
// Create a class for Breakfast
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Create a class for Lunch
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Create a class for Dinner
  class Dinner {
    #dessert; // Private field
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }
  
  // Example usage:
  
  // Breakfast instance
  let myBreakfast = new Breakfast("Oatmeal", "Orange Juice");
  console.log(myBreakfast); // => Breakfast { food: 'Oatmeal', drink: 'Orange Juice' }
  
  // Lunch instance
  let myLunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
  console.log(myLunch); // => Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
  
  // Dinner instance
  let myDinner = new Dinner("Green Salad", "Minestrone Soup", "Grilled Salmon", "Chocolate Cake");
  console.log(myDinner.salad); // => 'Green Salad'
  console.log(myDinner.#dessert); // This will result in an error because #dessert is a private field
  