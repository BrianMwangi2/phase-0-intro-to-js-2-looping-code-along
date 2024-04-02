// Code your solutions in this file

function writeCards(names) {
    let thankYouMessages = []; // Create an empty array to hold the messages
  
    // Iterate through the input array and build 'thank you' messages
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message); // Add the message to the array
    }
  
    return thankYouMessages; // Return the array of messages
  }
  let names = ["Guadalupe", "Ollie", "Aki"];
  let thankYouMessages = writeCards(names);
  console.log(thankYouMessages);

  // while loop 
  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  // Example usage:
  countDown(10);
  
