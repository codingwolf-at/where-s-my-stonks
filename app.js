const initialPriceInput = document.querySelector("#initial-price-input");
const stockNumberInput = document.querySelector("#stock-number-input");
const currentPriceInput = document.querySelector("#current-price-input");
const tellMeBtn = document.querySelector("#tell-me-btn");
const outputDiv = document.querySelector("#output-div");

const calculateProfitAndLoss = () => {
  const initialPrice = Number(initialPriceInput.value);
  const stockNumber = Number(stockNumberInput.value);
  const currentPrice = Number(currentPriceInput.value);

  if (initialPrice && stockNumber && currentPrice) {
    if (initialPrice < currentPrice) {
      const profit = (currentPrice - initialPrice) * stockNumber;
      const profitPercentage = (profit / (initialPrice * stockNumber)) * 100;
      outputDiv.style.color = "green";
      outputDiv.innerText = `Yay!! Your Profit is ${profit.toFixed(2)} and profit Percentage is ${profitPercentage.toFixed(2)}%`;
    } else if (currentPrice < initialPrice) {
      const loss = (initialPrice - currentPrice) * stockNumber;
      const lossPercentage = (loss / (initialPrice * stockNumber)) * 100;
      outputDiv.style.color = 'red';
      outputDiv.innerText = `Whoops!! Your loss is ${loss.toFixed(2)} and loss Percentage is ${lossPercentage.toFixed(2)}% :(`;
    } else {
      outputDiv.style.color = 'white';
      outputDiv.innerHTML = `No pain No gain, and no gain no pain :)`;
    }
  } else {
    alert("Fill all the fields correctly \nInput can not be 0 or empty!")
  }
}

tellMeBtn.addEventListener("click", calculateProfitAndLoss)