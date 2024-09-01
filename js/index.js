function submitForm(event) {
  event.preventDefault();
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  let h2 = document.getElementById("contact");
  h2.innerHTML = `Thank you ${firstName.value} ${lastName.value}, your message has been submitted.`;

  sendEmail(firstName.value, lastName.value, email.value, message.value);
}
function sendEmail(first, last, email, message) {
  let subject = `${first} ${last}'s inquiry - Novia's Portfolio Page`;
  let emailString = `noviahoyte@gmail.com?subject=${subject}&body=${message}`;
  window.open(`mailto:${emailString}`);
}

let form = document.querySelector("#contactForm");
form.addEventListener("submit", submitForm);
