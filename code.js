const education = document.querySelector("#education");
const worth = document.querySelector("#worth");
const caste = document.querySelector("#caste");
const skills = document.querySelectorAll("#skills");
const age = document.querySelector("#age");
const reputation=document.querySelectorAll("#reputation");

calculate=()=>{
    const Groom=((price* family.Value() * education.Value()* reputation.Value() * age.Value() + caste.Value() + skills.Value() ));
   education.value = "";
   family.value = "";
   caste.value = "";
   skills.value=" ";
   age.value="";
   reputation.value=" "
    if(Groom == "Not given"){
        GroomEducation.textContent = "Groom is 0 ";
      showGroomBid();
    }
    else{
      GroomEducation.textContent = "Groom $" + groom + " each";
      showGroomBid();
    }
  }
  
 