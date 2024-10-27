let loginButton = document.querySelector("#login-btn");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  let phoneNumber = document.querySelector("#number").value;
  let pinNumber = document.querySelector("#pin").value;
//   console.log(phoneNumber, pinNumber);

  if(phoneNumber==='1234' && pinNumber === '1234'){
    console.log("You are log in");
    window.location.href = 'js/home.html';
  }
  else{
    console.log("Wrong phone number or pin number")
  }
});

