// money add btn er event handler

document
  .querySelector("#money-add-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = document.querySelector("#cash-in-amount").value;
    const inputPin = document.querySelector("#pin-input").value;
    console.log(inputAmount);
    console.log(inputPin);

    if (inputPin === "1234") {
      const balance = document.querySelector("#account-balance").innerText;
      const inputAmountNumber = parseInt(inputAmount);
      const balanceNumber = parseInt(balance);
      const newBalance = inputAmountNumber + balanceNumber;
      console.log(newBalance);
      document.querySelector("#account-balance").innerText = newBalance;
    } else {
      alert("Incorrect Pin Number");
    }
  });


// hiden and show hero section

// const addMoneyBtn = document.querySelector("#add-money");
// const addMoneySection = document.querySelector("#add-money-section")
// const cashOutSection = document.querySelector("#cash-out-section")
// const cashOutBtn = document.querySelector("#cash-out");

// function showSection(sectionToShow){
//     addMoneySection.classList.add("hidden");
//     cashOutSection.classList.add("hidden");

//     sectionToShow.classList.remove("hidden");
// }

// addMoneyBtn.addEventListener("click", function(){
//     showSection(addMoneySection);
// })
// cashOutBtn.addEventListener("click", function(){
//     showSection(cashOutSection);
// })