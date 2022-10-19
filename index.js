const btnNumbers = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit");
const ratingText = document.querySelector(".feedback");
const gettingThankyou = document.querySelector(".thank-you-form");

let selectedRated = 0;

btnNumbers.forEach(button => {
 button.addEventListener('click', (buttonValue) => {

if (document.querySelector('.rating-btn-active')) {

    document.querySelector('.rating-btn-active').classList.remove('active');
}
button.classList.add('active');
selectedRated = buttonValue.target.getAttribute("data-value");

 });

});


submitBtn.addEventListener('click', (e) => {
if(selectedRated!==0)
{
    ratingText.textContent = "you selected" +  +selectedRated + "out of 5";
    gettingThankyou.style.display = "flex";
    document.querySelector(".feedback-form").style.display = "none";
}


})

// const form = document.getElementById('form');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const firstname = form['firstname'].value;
//     const lastname = form['lastname'].value;
//     const email = form['email'].value;
//     const password = form['password'].value;
//     if (firstname === '') {
//         addError1()
//     } else {
//         console.log("ok")
//     }
//     if (lastname === '') {
//         addError2()
//     } else {
//         console.log("ok")
//     }
//     if (email === '') {
//         addError3()
//         document.querySelector(".def3 em").innerHTML = "Put a valid email"
//     } else if (!isValid(email)) {
//         addError3()
//     } else {
//         console.log("ok")
//     }
//     if (password === '') {
//         addError4()
//     } else {
//         console.log("ok")
//     }
// })
// function addError1() {
//     document.querySelector(".def").classList.remove("error");

// }
// function addError2() {
//     document.querySelector(".def2").classList.remove("error");

// }
// function addError3() {
//     document.querySelector(".def3").classList.remove("error");

// }
// function addError4() {
//     document.querySelector(".def4").classList.remove("error");

// }

// function isValid(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }