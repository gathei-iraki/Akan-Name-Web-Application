var check = function () {
   var date = document.getElementById("date").value;
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var femaleNames=[ "Adjoa", "Abena", "Akua","Yaa", "Afua", "Ama", "Akosua"];
    var maleNames= ["Kojo","Kwabema","Kwaku","Yaw","Yaw","Kofi","Kwame"];

    var d=new Date();
    d.setDate(parseInt(date));
    d.setMonth(parseInt(month)-1);
    d.setFullYear(parseInt(year));
    var ace= d.getDay();
    if (ace === 0){
      alert("Sunday");
    } else if(ace === 1){
      alert("Monday");
    } else if(ace === 2){
      alert("Tuesday");
    } else if(ace === 3){
      alert("Wednesday");
    } else if(ace === 4){
      alert("Thursday");
    } else if(ace === 5){
      alert("Friday");
    } else if (ace === 6){
      alert("Saturday");
    }
    if (date == "" || date>31 ){
      alert("Please enter a valid date");
    } else if (month == "" || month>12){
      alert("Please enter a valid month");
    } else if (year === "") {
      alert("Please enter a valid year");
    } else if(document.getElementById("male").checked == true && document.getElementById("female").checked == false){
      alert("Your Akan name is " + maleNames[ace]);
    } else if (document.getElementById("male").checked == false && document.getElementById("female").checked == true){
      alert("Your Akan name is " + femaleNames[ace]);
    }
  }
