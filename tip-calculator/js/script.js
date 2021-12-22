let calValue = [];

function emptyAll() {
  document.querySelector('.button').addEventListener('click', () => {
    document
      .querySelectorAll('input[type=number]')
      .forEach((val) => (val.value = 0));
    document.querySelector('#custom').value = 'Custom';
    document.querySelector('.calc__tip__result').textContent = '$0.00';
    document.querySelector('.calc__total__result').textContent = '$0.00';
    document.querySelector('.button').style.backgroundColor =
      'hsl(185, 84%, 15%)';
    document.querySelector('.button').style.color = 'hsl(184, 14%, 56%)';
  });
}

function calculateAll() {
  document.querySelector('.people').addEventListener('keyup', (enter) => {
    if (enter.key === 'Enter') {
      enter.preventDefault();
      console.log('enter press');
      let nums = parseInt(document.querySelector('#custom').value);
      if (!isNaN(nums)) calValue.push(nums);
      const bill = parseFloat(document.querySelector('.bill').value, 3);
      const people = parseInt(document.querySelector('.people').value);
      console.log(typeof nums);
      if (people <= 0) {
        document.querySelector('.error').textContent = "Can't be zero";
        document.querySelector('input#text.people').style.border =
          '2px solid red';
      } else {
        document.querySelector('.error').textContent = '';
        console.log(calValue);
        const tip = calValue.pop();
        console.log(tip);
        const tipAmount = ((tip / 100.0) * bill) / people;
        const total = bill / 5.0 + tipAmount;
        document.querySelector(
          '.calc__tip__result'
        ).textContent = `$ ${tipAmount.toFixed(2)}`;
        document.querySelector(
          '.calc__total__result'
        ).textContent = `$ ${total.toFixed(2)}`;
      }
      if (!isNaN(nums)) {
        nums = NaN;
        document.querySelector('#custom').value = 'Custom';
      }
      console.log('Nan is NaN', nums);
    }
  });

  document.getElementById('five').addEventListener('click', () => {
    calValue.push(5);
  });

  document.getElementById('ten').addEventListener('click', () => {
    calValue.push(10);
  });

  document.getElementById('fifteen').addEventListener('click', () => {
    calValue.push(15);
  });

  document.getElementById('twenty5').addEventListener('click', () => {
    calValue.push(25);
  });

  document.getElementById('fifty').addEventListener('click', () => {
    calValue.push(50);
  });

  document.getElementById('custom').addEventListener('click', () => {
    document.querySelector('#custom').value = '';
  });
}
emptyAll();
calculateAll();
