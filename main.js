let allClub = document.querySelectorAll("img");
// Strikers -------------------------------------------------------------
let StrikersName1 = document.querySelector(".StrikersName1");
let StrikersNumber1 = document.querySelector(".StrikersNumber1");
let StrikersName2 = document.querySelector(".StrikersName2");
let StrikersNumber2 = document.querySelector(".StrikersNumber2");
let StrikersName3 = document.querySelector(".StrikersName3");
let StrikersName4 = document.querySelector(".StrikersName4");
let StrikersNumber3 = document.querySelector(".StrikersNumber3");
let StrikersNumber4 = document.querySelector(".StrikersNumber4");
// Midfielders -------------------------------------------------------------
let MidfieldersName1 = document.querySelector(".MidfieldersName1");
let MidfieldersNumber1 = document.querySelector(".MidfieldersNumber1");
let MidfieldersName2 = document.querySelector(".MidfieldersName2");
let MidfieldersNumber2 = document.querySelector(".MidfieldersNumber2");
let MidfieldersName3 = document.querySelector(".MidfieldersName3");
let MidfieldersNumber3 = document.querySelector(".MidfieldersNumber3");
let MidfieldersName4 = document.querySelector(".MidfieldersName4");
let MidfieldersNumber4 = document.querySelector(".MidfieldersNumber4");
// Defenders -------------------------------------------------------------
let DefendersName1 = document.querySelector(".DefendersName1");
let DefendersNumber1 = document.querySelector(".DefendersNumber1");
let DefendersName2 = document.querySelector(".DefendersName2");
let DefendersNumber2 = document.querySelector(".DefendersNumber2");
let DefendersName3 = document.querySelector(".DefendersName3");
let DefendersNumber3 = document.querySelector(".DefendersNumber3");
let DefendersName4 = document.querySelector(".DefendersName4");
let DefendersNumber4 = document.querySelector(".DefendersNumber4");

// Make Active ----------------------------------------------------
allClub.forEach((club)=>{
club.addEventListener("click",(er)=>{
document.querySelector(".active").classList.remove("active");
er.target.classList.add("active");
let id = er.target.id;
let requist = new XMLHttpRequest();
requist.open("GET","JSON/luigi.json");
requist.responseType = "json";
console.log("One");
requist.send();
requist.onload = ()=>{
let posts = requist.response;
let post;
for(post of posts){
    if(posts.userID = id){
let index = club.getAttribute("club");
let indexNumber = parseInt(index);
// Strikers ----------------------------------------------------------------------------
 StrikersName1.innerHTML = posts[indexNumber].StrikersName[0];
 StrikersNumber1.innerHTML = posts[indexNumber].StrikersNumber[0];
 StrikersName2.innerHTML = posts[indexNumber].StrikersName[1];
 StrikersNumber2.innerHTML = posts[indexNumber].StrikersNumber[1];
 StrikersName3.innerHTML = posts[indexNumber].StrikersName[2];
 StrikersName4.innerHTML = posts[indexNumber].StrikersName[3];
 StrikersNumber3.innerHTML = posts[indexNumber].StrikersNumber[2];
 StrikersNumber4.innerHTML = posts[indexNumber].StrikersNumber[3];

// Midfielders ----------------------------------------------------------------------------
 MidfieldersName1.innerHTML = posts[indexNumber].MidfieldersName[0];
 MidfieldersNumber1.innerHTML = posts[indexNumber].MidfieldersNumber[0];
 MidfieldersName2.innerHTML = posts[indexNumber].MidfieldersName[1];
 MidfieldersNumber2.innerHTML = posts[indexNumber].MidfieldersNumber[1];
 MidfieldersName3.innerHTML = posts[indexNumber].MidfieldersName[2]; 
 MidfieldersNumber3.innerHTML = posts[indexNumber].MidfieldersNumber[2];
 MidfieldersName4.innerHTML = posts[indexNumber].MidfieldersName[3]; 
 MidfieldersNumber4.innerHTML = posts[indexNumber].MidfieldersNumber[3]; 

// Defenders ----------------------------------------------------------------------------
 DefendersName1.innerHTML = posts[indexNumber].DefendersName[0];
 DefendersNumber1.innerHTML = posts[indexNumber].DefendersNumber[0]; 
 DefendersName2.innerHTML = posts[indexNumber].DefendersName[1];
 DefendersNumber2.innerHTML = posts[indexNumber].DefendersNumber[1]; 
 DefendersName3.innerHTML = posts[indexNumber].DefendersName[2];
 DefendersNumber3.innerHTML = posts[indexNumber].DefendersNumber[2]; 
 DefendersName4.innerHTML = posts[indexNumber].DefendersName[3];
 DefendersNumber4.innerHTML = posts[indexNumber].DefendersNumber[3]; 

 if(id == "Inter"){
    document.querySelector(".dasboard").style.backgroundImage ='url(./image/inter.png)';
    }else if(id == "Liverpool"){
    document.querySelector(".dasboard").style.backgroundImage ='url(./image/liver.jpg)';
    }else if(id == "City"){
      document.querySelector(".dasboard").style.backgroundImage ='url(./image/Manchster.jpg)';
    }else if(id == "United"){
      document.querySelector(".dasboard").style.backgroundImage ='url(./image/United.jpg)'; 
    }else if(id == "Munchen"){ 
      document.querySelector(".dasboard").style.backgroundImage ='url(./image/Bayer.jpg)';
    }else if(id == "Barcalona"){
      document.querySelector(".dasboard").style.backgroundImage ='url(./image/Barch.png)';  
    }
    }
  }
    }
});
    
});






























