let nav = document.querySelector('.navigation');

document.querySelector('#menu-button').onclick = () =>{
    nav.classList.toggle('active');
}

function fnValidate(){
    if(!ValidateName()){
        return
    } else if(!ValidateName2()){
        return
    }else if(!ValidatePassword()){
        return
    }else if(!ValidatePassword2()){
        return
    } else if(!ValidateEmail()){
        return
    } else if(!ValidateAddress()){
        return
    } else if(!Validatecheck()){
        return
    } else {
    var confirmation = "Your fullname : " + document.getElementById('fullname').value +"\nEmail: " + document.getElementById('email').value + "\nPassword: confirm" + "\nAddress: " + document.getElementById('address').value

        confirm(confirmation)
    }
}

function ValidateName(){
    var fullname = document.getElementById('fullname').value
    if(fullname.length < 7 || fullname.length >20){
        alert("fullname name must be more than 7 characters and smaller than 20 characters")
        return 0;
    }
    return 1;
}
function ValidateName2(){
    var fullname = document.getElementById('fullname').value
    if(typeof fullname === Number){
        alert('no number please')
        return 0;
    }
    return 1;
}
function ValidateEmail(){
    var email = document.getElementById('email').value
 if(!email.endsWith('@gmail.com') && !email.endsWith('@gmail.co.id') && !email.endsWith('@Gmail.Co.Id') && !email.endsWith('@Gmail.Com')){
    alert("invalid gmail")
    return 0;
 }
  return 1;
  }
  function ValidatePassword(){
    var password = document.getElementById('password').value
    
     if(password == ""){
        alert('fill password column')
        return 0;
    }
  
return 1;
}
function ValidatePassword2(){
    var password = document.getElementById('password').value

    if(password.length<=8){
        alert('password must be greater than 6 char')
        return 0
    }
    return 1;
}

  
function ValidateAddress(){
    var ALAMAT = document.getElementById('address').value
    
    if(!ALAMAT.startsWith('Jalan')){
        alert("Address must start with Jalan")
        return 0
    }
    return 1
}

function Validatecheck(){
    var check = document.getElementById('logCheck').checked

    if(check == false){
        alert("You must agree with the terms and conditions")
        return 0
    }
    return 1
}



