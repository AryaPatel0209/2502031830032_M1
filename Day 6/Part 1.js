function validate() {
  var form1 = document.getElementById("RegForm");
  var name = form1.Name.value;
  var email = form1.EMail.value;
  var phone = form1.Telephone.value;
  var what = form1.Subject.value;
  var password = form1.Password.value;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regPhone = /^\d{10}$/;

  if (name == "") {
    window.alert("Please Enter Your Name");
    return false;
  } else if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    return false;
  } else if (password == "") {
    alert("Please enter your password");
    return false;
  } else if (password.length < 6) {
    alert("Password should be atleast 6 character long");
    return false;
  } else if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
    return false;
  } else if (what.selectedIndex == -1) {
    alert("Please enter your course.");
    return false;
  }
}

var product = document.getElementById("product");
    var qunatity = document.getElementById("quantity");
    var amount = document.getElementById("amount");
    var prize = document.getElementById("prize");

    product.addEventListener("change",()=>{
        prize.value = product.value;
    });

    amount.addEventListener("focus",()=>{
    amount.value=product.value * qunatity.value;
    });

