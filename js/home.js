// Money add button event handler
document
  .querySelector("#money-add-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = document.querySelector("#cash-in-amount").value;
    const inputPin = document.querySelector("#pin-input").value;

    if (inputPin === "1234") {
      const balance = document.querySelector("#account-balance").innerText;
      const inputAmountNumber = parseInt(inputAmount);
      const balanceNumber = parseInt(balance);
      const newBalance = inputAmountNumber + balanceNumber;
      document.querySelector("#account-balance").innerText = newBalance;
    } else {
      alert("Incorrect Pin Number");
    }
  });

// Cash out button event handler
document
  .querySelector("#cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = document.querySelector("#cash-out-amount").value;
    const cashOutPin = document.querySelector("#cash-out-pin").value;

    if (cashOutPin === "1234") {
      const balance = document.querySelector("#account-balance").innerText;
      const cashOutAmountNumber = parseInt(cashOutAmount);
      const balanceNumber = parseInt(balance);

      if (cashOutAmountNumber <= balanceNumber) {
        const newBalance = balanceNumber - cashOutAmountNumber;
        document.querySelector("#account-balance").innerText = newBalance;
      } else {
        alert("Insufficient Balance");
      }
    } else {
      alert("Incorrect Pin Number");
    }
  });

// Show/hide sections based on button clicks
const addMoneyBtn = document.querySelector("#add-money");
const addMoneySection = document.querySelector("#add-money-section");
const cashOutSection = document.querySelector("#cash-out-section");
const cashOutBtn = document.querySelector("#cash-out");

function showSection(sectionToShow) {
  addMoneySection.classList.add("hidden");
  cashOutSection.classList.add("hidden");
  sectionToShow.classList.remove("hidden");
}

addMoneyBtn.addEventListener("click", function () {
  showSection(addMoneySection);
});

cashOutBtn.addEventListener("click", function () {
  showSection(cashOutSection);
});
