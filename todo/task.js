var Input=document.getElementById('myInput');
var myDiv=document.getElementById('new');
var Button=document.getElementById('main');

Button.addEventListener("click",display);

  function display()
  {
    let number = Input.value;
    fetch("http://numbersapi.com/" + number + "/year")
      .then(res => res.text())
      .then(data => {
       myDiv.innerText=data;
       if(number!="") {
           myDiv.style.backgroundColor="silver";
          
          
       } else if (number=="")
       {
        myDiv.style.backgroundColor = "white";
      myDiv.innerText = "Please Enter Another Year";
     
      
       }
  })
}



