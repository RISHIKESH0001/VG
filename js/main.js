`use strict`;
// live time & date start here
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
// live time & date end here


// slider start here
let signup = document.querySelector(".signup");
let signin = document.querySelector(".signin");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
signin.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
// slider end here

// searchbar start here
function search_video() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('videos');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}
// searchbar end here

// iframe start here
function changeIframe(change) {
  document.getElementById('webpage').src = change;
 }
//  iframe end here


var nameArray=[];
var passwordArray=[];
var emailArray=[];


var loginBox = document.getElementById("signin_box");
var regBox = document.getElementById("signup_box");
var forgetBox = document.getElementById("forgot");


function signUp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var passwordRetype = document.getElementById("cpass").value;

    if (name == ""){
        alert("Username required.");
        return ;
    }
    else if (email == ""){
      alert("Email required");
      return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if(nameArray.indexOf(name) == -1){
        nameArray.push(name);
        passwordArray.push(password);
        emailArray.push(email);

        alert(name + "  Thanks for registration. \nTry to login Now");

        document.getElementById("name").value ="";
        document.getElementById("email").value="";
        document.getElementById("pass").value="";
        document.getElementById("cpass").value="";
    }
    else{
        alert(name + " is already register.");
        return ;
    }
    
}

function getDataForSignUp(){

  let userData = JSON.parse(localStorage.getItem("singUpData"));

  return userData;
}


function signIn(){

    var name = document.getElementById("sname").value;
    var password = document.getElementById("spass").value;

    var i = nameArray.indexOf(name);

    if(nameArray.indexOf(name) == -1){
        if (name == ""){
            alert("Username required.");
            return ;
        }
        alert("Username does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("No scam applicable here. Enter the correct password");
        return ;
    }
    else {
        alert(name + " yor are login Now \n welcome to our website.");
        {window.open('home.html')}

        document.getElementById("sname").value ="";
        document.getElementById("spass").value="";
        return ;
    }

}
function forgot(){
    var email = document.getElementById("femail").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("femail").value ="";
}
function forTabFun(){
  forgetBox.style.visibility="visible";
  signin_box.style.visibility="hidden";
  signup_box.style.visibility="hidden";
  regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
  loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

}

function loginTabFun(){
    signup_box.style.visibility="hidden";
    signin_box.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    loginTab.style.backgroundColor="rgb(12, 132, 189)";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}

function regTabFun(){
    signup_box.style.visibility="visible";
    signin_box.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}


function playVideo1() {
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
    document.getElementById('video7').pause();
    document.getElementById('video8').pause();
  }
  
  function playVideo2() {
    document.getElementById('video1').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
    document.getElementById('video7').pause();
    document.getElementById('video8').pause();
  }

  function playVideo3() {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
    document.getElementById('video7').pause();
    document.getElementById('video8').pause();
  }
  
  function playVideo4() {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
    document.getElementById('video7').pause();
    document.getElementById('video8').pause();
  }

  function playVideo5() {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video6').pause();
    document.getElementById('video7').pause();
    document.getElementById('video8').pause();
  }
  
  function playVideo6() {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video7').pause();
    document.getElementById('video8').pause();
  }

  function playVideo7() {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
    document.getElementById('video8').pause();
  }
  
  function playVideo8() {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
    document.getElementById('video7').pause();
  }

