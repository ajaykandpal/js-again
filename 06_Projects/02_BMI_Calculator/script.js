const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    // form get submitted using GET or POST. since we are not submitting it to a server here, stop the default action
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); //if not type number, wrap it around parseInt to convert into int
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);  //upto 2 decimal value
    let result;
    if(bmi < 18.6) result = "Underweight"
    else if(bmi < 24.9) result = "Normal Weight"
    else result = "Overweight"
    //show the result
    results.innerHTML = `<span>${bmi}</span><br><span>You are ${result}</span>`;
  }
});