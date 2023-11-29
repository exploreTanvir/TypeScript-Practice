const UserForm = document.querySelector("form") as HTMLFormElement;

const UserName = document.querySelector("#name") as HTMLInputElement;
const UserEmail = document.querySelector("#email") as HTMLInputElement;
const UserNumber = document.querySelector("#number") as HTMLInputElement;
const UserCountry = document.querySelector("#country") as HTMLSelectElement;
const UserFeedback = document.querySelector("#Feedback") as HTMLTextAreaElement;

UserForm.addEventListener("submit", (e: Event) => {
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
