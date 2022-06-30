var date = document.querySelector("#date");
var text = document.querySelector("#leap");
var btn = document.querySelector("#click");
var divot = document.querySelector("#ot");
var userName = document.querySelector("#name");
var nameout = document.querySelector("#nameot");
// function handler(input){

// }
userName.addEventListener("input", function(){
nameout.innerHTML = `${userName.value}, heyy how are you`
})

btn.addEventListener(
    "click",
    function eventhandler() {
      nameout.innerHTML = userName.value;
    let input = date.value;
    if (date.value.lenght === 0) {
      alert("plese enter date first");
    } else {
      let split = input.split("-");
      let yearString = split[0];
      let year = parseInt(yearString);
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      if (year >= 1000 && year <= currentYear) {
        if (year % 400 === 0 || year % 4 === 0) {
          divot.innerHTML = "you are born in leap year";
          console.log("you are born in leap year");
        } else if (year % 100 === 0) {
          divot.innerHTML = "you are not born in sss leap year";
          // console.log("you are not born in sss leap year");
        } else {
          divot.innerHTML = "you are not born in sss leap year";
          // console.log("your not born in leap year");
        }
      }
    }
  }
  // console.log("clicked");
  // text.innerHTML = date.value;
  // console.log(date.value);
);
