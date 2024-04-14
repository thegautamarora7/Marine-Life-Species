function fNameValidation() {
  let error_message = document.getElementById("error_message");
  let text;
  error_message.style.padding = "10px";
  let fName = document.getElementById("firstName").value;
  // let lName = document.getElementById("lastName").value;
  // let date = document.getElementById("Date").value;
  // let phone = document.getElementById("phone").value;
  // let email = document.getElementById("email").value;
  // let msg = document.getElementById("message").value;

  if (fName.length < 5) {
    text = "Please Enter valid First Name";
    error_message.innerHTML = text;

    return false;
  }

  // if(lName.length < 5){
  //     text = "Please Enter valid Last Name";
  //     error_message.innerHTML = text;
  //     return false;
  //   }

  // 
  //   text = "Please Enter valid Phone Number";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  // if(email.indexOf("@") == -1 || email.length < 6){
  //   text = "Please Enter valid Email";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  // if(msg.length <50){
  //   text = "Please Enter More Than 50 Characters";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  // alert("Form Submitted Successfully!");
  return true;
}

function lNameValidation() {
  let error_message = document.getElementById("error_message");
  let text;
  error_message.style.padding = "10px";
  let lName = document.getElementById("lastName").value;

  if (lName.length < 5) {
    text = "Please Enter valid Last Name";
    error_message.innerHTML = text;
    return false;
  }

  return true;
}

function emailValidation() {
  let error_message = document.getElementById("error_message");
  let text;
  error_message.style.padding = "10px";
  let email = document.getElementById("uEmail").value;

  let atSymbol = email.indexOf("@");
  let dot = email.lastIndexOf(".");

  if (
    atSymbol < 1 ||
    dot === -1 ||
    dot < atSymbol + 2 ||
    dot + 2 >= email.length
  ) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  return true;
}

function dateValidation() {
  let error_message = document.getElementById("error_message");
  let text;
  error_message.style.padding = "10px";
  let date = document.getElementById("Date").value;


    const dateExpression = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2})$/;
    if(!(dateExpression.test(date))){
      text = "Please Enter valid Date";
    error_message.innerHTML = text;
      return false;
    }
    
    return true;
    
}
  




function phoneValidation() {
    let error_message = document.getElementById("error_message");
    let text;
    error_message.style.padding = "10px";
    let phone = document.getElementById("uPhone").value;
  
    
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
  
    return true;
}

function msgValidation() {
    let error_message = document.getElementById("error_message");
    let text;
    error_message.style.padding = "10px";
    let msg = document.getElementById("uMsg").value;
  
    if(msg.length <50){
      text = "Please Enter a message more than 50 chracters";
      error_message.innerHTML = text;
      return false;
    }
  
    return true;
}


  
  
  