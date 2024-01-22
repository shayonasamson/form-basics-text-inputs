/*
FORMS
form element that takes the submit event
*/
const profileForm = document.querySelector("#profile-form");
 
profileForm.addEventListener("submit", onUpdateProfile);
 
function onUpdateProfile(e) {
    // stopping the submit event from refereshing the browser
   
    e.preventDefault();
 
    //RefVAr to the input elements
   
    const firstName = document.querySelector("#first-name").value.trim();
    const lastName = document.querySelector("#last-name").value.trim();
       
    //ref to the DOM that is used to display the text
    const fullNameDisplay = document.querySelector("#full-name");
    fullNameDisplay.textContent =`${firstName} ${lastName}`;
    const name =firstName + " " + lastName;
    console.log(name)
 
    // document.querySelector("#full-name").textContent = `${firstName} ${lastName}`;
}