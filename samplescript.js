const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');

buttonname.addEventListener("click", function(){
    studentname.textContent = "Maria Santos";
});

// Change Background: toggles the profile card between white and light teal
const buttonbackground = document.getElementById('changeBackground');
const profile = document.getElementById('profile');
let isTealBackground = false;

buttonbackground.addEventListener("click", function(){
    isTealBackground = !isTealBackground;
    profile.style.backgroundColor = isTealBackground ? "#ccfbf1" : "white";
});

// Show/Hide Details: toggles the details paragraph and updates the button label
const buttondetails = document.getElementById('toggleDetails');
const details = document.getElementById('details');

buttondetails.addEventListener("click", function(){
    const isHidden = details.classList.toggle("hidden");
    buttondetails.textContent = isHidden ? "Show Details" : "Hide Details";
});