//query selectors go here
var radioInputType = document.getElementsByName('side')
var radioInputMain = document.querySelector('.main-dish')
var radioInputDessert = document.querySelector('.dessert')
var radioInputEntire = document.querySelector('.entire-meal')
var letsCookButton = document.querySelector('.lets-cook-button')
var h2 = document.querySelector('h2')

//array data to use:
var sides = [
  'Miso Glazed Carrots',
  'Garden Salad',
  'Hush Puppies',
  'Crispy Potatoes',
  'Caeser Salad'
];
var mainDish = [
  'Thai Yellow Curry',
  'Chicken Fried Rice',
  'BBQ Chicken Burgers',
  'Margarita Pizza',
  'Sheet Pan Fajitas'
];
var desserts = [
  'Black Forest Cake',
  'Banana Bread',
  'Baklava',
  'Macaroons',
  'Chocolate Cupcakes'
];

//event listeners and functions go here:
//create an object variable for the food type and answer


function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index]
}

function getRandomSides() {
  sidesArray = getRandomIndex(sides)
  console.log(sidesArray)
}
getRandomSides()

function getRandomMainDish() {
  mainDishArray = getRandomIndex(mainDish)
  console.log(mainDishArray)
}
getRandomMainDish()

function getRandomDesserts(){
  dessertsArray = getRandomIndex(desserts)
  console.log(dessertsArray)
}
getRandomDesserts()


var foodType = {
  answer: 'you should make:',
  food: 'salmon'
}

letsCookButton.addEventListener('click', updateAnswer)
//add event listeners for the radio buttons to invoke the random food functions created above

function updateAnswer() {
  var selectedAnswer =
  document.querySelector('input[name="food-type"]:checked').value;
    if (selectedAnswer === 'side') {
      foodType.food = 'Caesar Salad'
      //if answer is the variable name of the radio input selector???
      displayAnswer()
      // h2.innerHTML = `${foodType.answer} Caesar salad`
  } if (selectedAnswer === 'main-dish') {
      foodType.food = 'Hamburgers'
      displayAnswer()
    // h2.innerHTML = `${foodType.answer}  Hamburgers`
  } if (selectedAnswer === 'dessert') {
      foodType.food = 'Chocolate Cake'
      displayAnswer()
    // h2.innerHTML = `${foodType.answer}  Cookies`
  } if (selectedAnswer === 'entire-meal') {
      foodType.food = 'Filet Mignon, Chopped Salad and Creme Brulet'
      displayAnswer()
    //h2.innerHTML = `${foodType.answer}  Filet Mignon, Caesar Salad and Chocolate Cake`
  }
  console.log(foodType.answer, foodType.food)
}

function displayAnswer(){
  h2.innerHTML = `${foodType.answer} ${foodType.food}`
}

//displayAnswer() //was invoking the variable foodType on page load.

//toggle
//input radio data from arrays
//create event listeners for let's cook button and clear button.
//use hidden as toggle to
//get value from radio button
