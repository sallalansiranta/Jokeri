const newRowButton = document.querySelector('#newRow');
const numbersTable = document.querySelector('#numbers');
const rowCountElement = document.querySelector('#rowCount');

let rowCount = 0;

const generateRandomNumber = () => Math.floor(Math.random() * 10); 

const generateJokerRow = () => Array.from({ length: 7 }, generateRandomNumber); 

const addRowToTable = (row) => {
  const newRow = numbersTable.insertRow();
  row.forEach(number => newRow.insertCell().textContent = number);
};

newRowButton.addEventListener('click', () => {
  addRowToTable(generateJokerRow());
  rowCountElement.textContent = ++rowCount; 
});
