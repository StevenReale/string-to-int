function parseInt(string) {
  const CONVERSIONS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    };
  const numArr = string.split(" ").filter(word => word != "and"); //splits string into array eliminating any ands

  //iterates through the array, converting each entry to an equivalent numeric value
  for (let word = 0; word < numArr.length; word++) {
    let currentNum = 0;

    // hundred, thousand, and million are handled by the number that precedes them, so these words are converted to zero
    if (numArr[word] == "hundred" || numArr[word] == "thousand" || numArr[word] == "million") {numArr[word] = 0;}

    else {
      //converts entry in the array to a base value

      //converts hyphenated number into two digits and processes them
      if (/\-/.test(numArr[word])) {
       const compoundNum = numArr[word].split("-");
        currentNum = CONVERSIONS[compoundNum[0]] + CONVERSIONS[compoundNum[1]];

       // processes single digit conversion
       } else {
        currentNum = CONVERSIONS[numArr[word]];
       }

      //looks ahead and multiplies the base value by 100, 1000, 100000, or 1000000, as needed
      if (numArr[word+1] == "hundred") {
        if (numArr[word+2] == "thousand" || numArr[word+3] == "thousand") {
          currentNum *= 100000;
        } else {
          currentNum *= 100;
        }
      }
      if (numArr[word+1] == "thousand") {
        currentNum *= 1000;
      }
      if (numArr[word + 1] == "million") {
        currentNum *= 1000000;
      }

      //replaces array entry with converted number
      numArr[word] = currentNum;
    }

  }

  //returns sum of converted numbers
  return numArr.reduce((a, b) => a + b);




}

parseInt('two hundred and twenty');
