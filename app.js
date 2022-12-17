const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

generateEl.addEventListener("click", generatePassword);

function generatePassword() {
  const len = lenEl.value;

  let password = "";

  if (upperEl.checked) {
    password += getUppercase();
  }

  if (lowerEl.checked) {
    password += getLowercase();
  }

  if (numberEl.checked) {
    password += getNumber();
  }

  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
}

function generateX() {
  const xArr = [];
  if (upperEl.checked) {
    xArr.push(getUppercase());
  }
  if (lowerEl.checked) {
    xArr.push(getLowercase());
  }
  if (numberEl.checked) {
    xArr.push(getNumber());
  }
  if (symbolEl.checked) {
    xArr.push(getSymbol());
  }

  if (xArr.length === 0) return "";

  return xArr[Math.floor(Math.random() * xArr.length)];
}

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
