function dogAgeInHumanYears() {
  let dogAgeStr = prompt("Dog age: ");
  let dogAge = parseFloat(dogAgeStr);
  let humanAge = parseInt(16 * Math.log(dogAge)) + 31;
  if (!isNaN(dogAge) && dogAge > 0 && humanAge >= 0) {
    alert(`A ${dogAge} year old dog is ~${humanAge} years old in human years.`);
  } else {
    alert(`"${dogAgeStr}" is an invalid input.
Please input a valid positive number.
Some low values between 0 and 1 produce negative human years numbers
and are considered not valid.`);
  }
}
