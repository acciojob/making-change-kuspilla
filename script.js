const makeChange = (c) => {
  // your name here
       let cents = c;
	const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Initialize variables to count the number of each coin
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of each coin needed
  while (cents > 0) {
    if (cents >= quarterValue) {
      quarters++;
      cents -= quarterValue;
    } else if (cents >= dimeValue) {
      dimes++;
      cents -= dimeValue;
    } else if (cents >= nickelValue) {
      nickels++;
      cents -= nickelValue;
    } else {
      pennies = cents;
      cents = 0;
    }
  }

  // Create and return the result object
  const result = {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies
  };

  return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
