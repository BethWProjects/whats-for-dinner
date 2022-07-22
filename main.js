//query selectors go here
var radioInputType = document.getElementsByName('side')
var radioInputMain = document.querySelector('.main-dish')
var radioInputDessert = document.querySelector('.dessert')
var radioInputEntire = document.querySelector('.entire-meal')
var letsCookButton = document.querySelector('.lets-cook-button')
var h2 = document.querySelector('h2')
var potImage = document.querySelector('.pot-image')
var answerSection = document.querySelector('.answer-section')
// var clearButton = document.querySelector('.clear-button')
//var clearTwoButton = document.querySelector('button').toggle

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


var foodType = {
  answer: 'you should make:',
  food: 'salmon'
}

letsCookButton.addEventListener('click', updateAnswer)
letsCookButton.addEventListener('click', hidePot)
letsCookButton.addEventListener('click', showAnswer)
//ADDING NEW BUTTON TAG FOR ONLY THE CLEAR BUTTON TO SHOW AND HIDE

function hidePot(){
  potImage.classList.add('hidden')
}

function showAnswer(){
  answerSection.classList.remove('hidden')
}

// function clearMessage(){
//   answerSection.classList.add('hidden')
// }
//add event listeners for the radio buttons to invoke the random food functions created above

function updateAnswer() {
  var selectedAnswer =
  document.querySelector('input[name="food-type"]:checked').value;
    if (selectedAnswer === 'side') {
      foodType.food = getRandomIndex(sides)
      //if answer is the variable name of the radio input selector???
      displayAnswer()
      // h2.innerHTML = `${foodType.answer} Caesar salad`
  } if (selectedAnswer === 'main-dish') {
      foodType.food = getRandomIndex(mainDish)
      displayAnswer()
    // h2.innerHTML = `${foodType.answer}  Hamburgers`
  } if (selectedAnswer === 'dessert') {
      foodType.food = getRandomIndex(desserts)
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
  answerSection.innerHTML = '';
  answerSection.innerHTML += `<h1 class="card-two-title"><em>You should make:</em></h1>
    <p class="card-two-answer">${foodType.food}</p>
    <button class="clear-button">Clear</button>`
}


// function displayAnswer(){
//   h2.innerHTML = `${foodType.answer} ${foodType.food}`
// }

//displayAnswer() //was invoking the variable foodType on page load.

//toggle
//input radio data from arrays
//create event listeners for let's cook button and clear button.
//use hidden as toggle to
//get value from radio button
