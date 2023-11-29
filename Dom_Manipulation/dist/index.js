"use strict";
const UserForm = document.querySelector("form");
const UserName = document.querySelector("#name");
const UserEmail = document.querySelector("#email");
const UserNumber = document.querySelector("#number");
const UserCountry = document.querySelector("#country");
const UserFeedback = document.querySelector("#Feedback");
UserForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        UserName: UserName.value,
        UserEmail: UserEmail.value,
        UserNumber: UserNumber.value,
        UserCountry: UserCountry.value,
        UserFeedback: UserFeedback.value,
    };
    console.log(data);
});
