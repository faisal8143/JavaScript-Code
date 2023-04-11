// Question 1 
function createAdder(num) {
    return function adder(x) {
      return x + num;
    }
  }

  const addFive = createAdder(5);
console.log(addFive(10)); // 15
console.log(addFive(100)); // 105




// Question 2
function recursiveSearch(array, value) {
    // Base case: If the array is empty or has only one element, check if it is equal to the value
    if (array.length === 0) {
      return false;
    } else if (array.length === 1) {
      return array[0] === value;
    }
    
    // Recursive case: Divide the array in half and search each half for the value
    const middleIndex = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middleIndex);
    const rightHalf = array.slice(middleIndex);
  
    // Check if the value is in the left or right half of the array
    if (value < rightHalf[0]) {
      // If the value is less than the first element of the right half, search the left half
      return recursiveSearch(leftHalf, value);
    } else {
      // Otherwise, search the right half
      return recursiveSearch(rightHalf, value);
    }
  }
  const myArray = [1, 3, 5, 7, 9];
  console.log(recursiveSearch(myArray, 5)); // true
  console.log(recursiveSearch(myArray, 6)); // false



// Question 3
function addParagraph(text) {
  // Create a new paragraph element and set its text content to the provided text
  const newParagraph = document.createElement("p");
  newParagraph.textContent = text;

  // Find the body element of the document and append the new paragraph element to it
  const body = document.querySelector("body");
  body.appendChild(newParagraph);
}



// Question 4
function addListItemToList(listText) {
    // Find the unordered list element in the document
    const list = document.querySelector('ul');
  
    // Create a new list item element
    const newListItem = document.createElement('li');
  
    // Add text to the new list item element
    const listItemText = document.createTextNode(listText);
    newListItem.appendChild(listItemText);
  
    // Append the new list item element to the unordered list
    list.appendChild(newListItem);
  }



// Question 5
function changeBackgroundColor(element, color) {
    // Set the background color of the element to the provided color
    element.style.backgroundColor = color;
  }



// Question 6
function saveObjectToLocalStorage(key, object) {
    // Convert the object to a JSON string
    const objectString = JSON.stringify(object);
  
    // Save the object string to localStorage using the provided key
    localStorage.setItem(key, objectString);
  }



// Question 7
function getObjectFromLocalStorage(key) {
    // Retrieve the object string from localStorage using the provided key
    const objectString = localStorage.getItem(key);
  
    // Convert the object string to an object and return it
    return JSON.parse(objectString);
  }



// Question 8
function saveObjectPropertiesToLocalStorage(object) {
  // Loop over the properties of the object
  for (const property in object) {
    // Save the property value to localStorage using the property name as the key
    localStorage.setItem(property, object[property]);
  }

  // Create a new object to return
  const newObject = {};

  // Loop over the properties of the object again
  for (const property in object) {
    // Retrieve the property value from localStorage using the property name as the key
    const propertyValue = localStorage.getItem(property);

    // Set the property value on the new object
    newObject[property] = propertyValue;
  }

  // Return the new object
  return newObject;
}