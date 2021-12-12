let stack = [];
document.getElementById("button").addEventListener("click", (err) => {
  const bill = parseFloat(document.getElementsByTagName("input")[0].value, 3);
  const people = parseFloat(document.getElementsByTagName("input")[1].value, 3);
  if(people == 0) {
    document.querySelector(".error").textContent = "Can't be zero";
    document.querySelector("input#text.people").style.border = "2px solid red";
  }else {
    const tip = stack.pop();
    const tipAmount = ((tip / 100.00) * bill) / people;
    const total = (bill / 5.00) + tipAmount;
    document.querySelector(".calc__tip__result").textContent = `$ ${tipAmount.toFixed(2)}`;
    document.querySelector(".calc__total__result").textContent = `$ ${total.toFixed(2)}`;  
  }
});



document.getElementById("five").addEventListener("click", () => {
  document.getElementById("five").style.backgroundColor = "hsl(172, 67%, 45%)";
  const five = document.getElementById("five").innerHTML;
  five.replace("%", "");
  stack.push(parseInt(five));
});

document.getElementById("ten").addEventListener("click", () => {document.getElementById("ten").style.backgroundColor = "hsl(172, 67%, 45%)";
  document.getElementById("ten").style.backgroundColor = "hsl(172, 67%, 45%)";
  const ten = document.getElementById("ten").innerHTML;
  ten.replace("%", "");
  stack.push(parseInt(ten));
});

document.getElementById("fifteen").addEventListener("click", () => {
  document.getElementById("fifteen").style.backgroundColor = "hsl(172, 67%, 45%)";
  const fifteen = document.getElementById("fifteen").innerHTML;
  fifteen.replace("%", "");
  stack.push(parseInt(fifteen));
});

document.getElementById("twenty5").addEventListener("click", () => {
  document.getElementById("twenty5").style.backgroundColor = "hsl(172, 67%, 45%)";
  const twenty5 = document.getElementById("five").innerHTML;
  twenty5.replace("%", "");
  stack.push(parseInt(twenty5));
});

document.getElementById("fifty").addEventListener("click", () => {
  document.getElementById("fifty").style.backgroundColor = "hsl(172, 67%, 45%)";
  const fifty = document.getElementById("fifty").innerHTML;
  fifty.replace("%", "");
  stack.push(parseInt(fifty));
});

document.getElementById("custom").addEventListener("click", () => {
  const custom = document.getElementById("custom").innerHTML;
});
