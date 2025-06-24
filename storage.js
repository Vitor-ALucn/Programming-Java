// Local Storage (Data persists across sessions)

localStorage.setItem('key', 'value');    // Storage data in local storage
let value = localStorage.getItem('key'); // Retrieve data from local storage
localStorage.removeItem('key');          // Remove specific item local
localStorage.clear();                    // Remove all items from local storage
localStorage.length;                     // Get number of storage items
let key = localStorage.key(0);           // Get the key of the first item

// Session Storage (Data persists only for the duration the session)

sessionStorage.setItem('key', 'value');  //Sotorage data in session storage
let sessionValue = sessionStorage.getItem('key'); // Retrieve data from session storage
sessionStorage.removeItem('key');       // Remove specific item from session storage
sessionStorage.clear();                 // Remove all items from session storage
sessionStorage.length;                  // Get number of session storage items
let sessionKey = sessionStorage.key(0); // Get the key of the first item in session storage

// Storing and Retrieving Objects (Local and Session Storage)

// Storing an object (convert to string firts)
let obj = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(obj)); // Store object in local storage

// Retrieving an object (parse the string back to an object)
let retrievedObj = JSON.parse(localStorage.getItem('user')); // Retrieve object from local storage

// Similarly for session storage
sessionStorage.setItem('user', JSON.stringify(obj)); // Store object in session storage
let sessionObj = JSON.parse(sessionStorage.getItem('user')); // Retrieve object from session storage