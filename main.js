
var radioInputType = document.getElementsByName('side')
var radioInputMain = document.querySelector('.main-dish')
var radioInputDessert = document.querySelector('.dessert')
var radioInputEntire = document.querySelector('.entire-meal')
var letsCookButton = document.querySelector('.lets-cook-button')
var h2 = document.querySelector('h2')
var potImage = document.querySelector('.pot-image')
var answerSection = document.querySelector('.answer-section')
var clearButton = document.querySelector('.clear-button')


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

function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index]
}

letsCookButton.addEventListener('click', updateAnswer)
letsCookButton.addEventListener('click', hidePot)
letsCookButton.addEventListener('click', showAnswer)
clearButton.addEventListener('click', clearMessage)

function hidePot(){
  potImage.classList.add('hidden')
  clearButton.classList.remove('hidden')
}

function showAnswer(){
  answerSection.classList.remove('hidden')
}

function clearMessage(){
  answerSection.classList.add('hidden')
  clearButton.classList.add('hidden')
  potImage.classList.remove('hidden')
}

var foodType = {
  answer: 'you should make:',
  food: 'salmon'
}

function updateAnswer() {
  var selectedAnswer =
  document.querySelector('input[name="food-type"]:checked').value;
    if (selectedAnswer === 'side') {
      foodType.food = getRandomIndex(sides)
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
    <p class="card-two-answer">${foodType.food}</p>`
}

//<button class="clear-button">Clear</button>
//toggle
//input radio data from arrays
//create event listeners for let's cook button and clear button.
//use hidden as toggle to
//get value from radio button
