// these variables will get name , state and temperature. Messages hold responses to the location and temperature
let userName= prompt("What's your name?")
let currentState = prompt('What state are you in now? respond with the first two letters of the state capitalized.')
let currentTemp = Number(prompt('What is the temperature outside in fahrenheit?'))
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.","wear a warm coat, hat and gloves. Maybe a scarf too."]


// Depending on which case holds true that response will be activated
switch (true){

  case(currentState == "NE" && currentTemp < 32):
    console.log( `${userName} , In ${currentState} it is ${currentTemp} so you should ${messages[0]}`);
    break;

  case (currentState == "NE" && currentTemp >= 32 && currentTemp<= 50):
    console.log( `${userName} , In ${currentState} it is ${currentTemp} so you should ${messages[1]}`);
    break;
    
  case (currentState == "FL" && currentTemp >= 32 && currentTemp<= 50):
    console.log(`${userName} , In ${currentState} it is ${currentTemp} so you should ${messages[2]}`);
    break;
    
  case(currentState == "FL" && currentTemp >= 50 && currentTemp<= 70):
    console.log(`${userName} , In ${currentState} it is ${currentTemp} so you should ${messages[3]}`);
    break;
    
  default:
    console.log(`Error.`);
  }