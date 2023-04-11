  //  1. function createAdder(num) {
  //   return function(x) {
  //     return x + num;
  //   }
  // }
  //  const addFive = createAdder(5);
  // console.log(addFive(10)); // Output: 15
  // console.log(addFive(20)); // Output: 25



  // 2. function searchArray(arr, value) {
  //   if (arr.length === 0) {
  //     return false; 
  //   } else if (arr[0] === value) {
  //     return true; 
  //   } else {
  //     return searchArray(arr.slice(1), value);
  //   }
  // }


  // // 3. function addParagraph(text) {
  // //   const newParagraph = document.createElement('p');  
  // //   const textNode = document.createTextNode(text);   
  // //   newParagraph.appendChild(textNode);               
  // //   document.body.appendChild(newParagraph);       
  // }



  // // 4. function addListItem(text) {
  // //   const newListItem = document.createElement('li');   
  // //   const textNode = document.createTextNode(text);   
  // //   newListItem.appendChild(textNode);                  
  // //   const unorderedList = document.querySelector('ul'); 
  // //   unorderedList.appendChild(newListItem);             
  // }



  // 5. function changeBackgroundColor(element, color) {
  //   element.style.backgroundColor = color;   
  // }
  // const myElement = document.querySelector('#my-element');
  // changeBackgroundColor(myElement, 'red'); 



  // 6. function saveObjectToLocalStorage(key, obj) {
  //   const json = JSON.stringify(obj);   
  //   localStorage.setItem(key, json);   
  // }
  // const myObj = { name: 'John', age: 30 };
  // saveObjectToLocalStorage('my-object', myObj); 




  // 7. function getObjectFromLocalStorage(key) {
  //   const json = localStorage.getItem(key);   
  //   const obj = JSON.parse(json);             
  //   return obj;                              
  // }
  // const myObject = getObjectFromLocalStorage('my-object');  
  // console.log(myObject);  



  // 8. function saveToLocalStorage(obj) {
  //   for (const [key, value] of Object.entries(obj)) {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   }
  
  //   const newObj = {};
  //   for (const key in obj) {
  //     const storedValue = localStorage.getItem(key);
  //     if (storedValue) {
  //       newObj[key] = JSON.parse(storedValue);
  //     }
  //   }
  
  //   return newObj;
  // }