// задача


const firstNumInput = document.querySelector('.first-num');
console.log(firstNumInput);
const btnUserName = document.querySelector('.btn-name');
console.log(btnUserName);
const resultTitle = document.querySelector('.result-value');
console.log(resultTitle);

function formatUserName(str){
  const lowerCase = str.toLowerCase().slice(1)
  const firstLetter = str[0].toUpperCase()
  console.log(lowerCase);
  console.log(firstLetter);
  return userName = firstLetter + lowerCase; 
}

btnUserName.addEventListener('click', function() {
    resultTitle.textContent = firstNumInput.value;
    formatUserName(firstNumInput.value);
  });
  

