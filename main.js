console.log("Hello world!");

const emailEl = document.getElementById("email");
const formEl = document.getElementById("form");

console.log(emailEl);
console.log(formEl);

emailEl.addEventListener("input", (event) => {
  if (emailEl.validity.valid) {
    formEl.classList.remove("invalid");
    return;
  }

  showError();
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailEl.validity.valid) {
    const emailParam = encodeURIComponent(emailEl.value);
    const hrefValue = `/thanks.html?email=${emailParam}`;
    window.location.href = hrefValue;
    return;
  }

  showError();
});

function showError() {
  const errorMessageCssProperty = "--error-message";

  formEl.classList.add("invalid");
  formEl.style.setProperty(errorMessageCssProperty, '"Invalid email"');

  if (emailEl.validity.valueMissing) {
    formEl.style.setProperty(
      errorMessageCssProperty,
      '"Email cannot be empty"'
    );
    return;
  }

  if (emailEl.validity.typeMismatch) {
    formEl.style.setProperty(errorMessageCssProperty, '"Format invalid!"');
    return;
  }

  if (emailEl.validity.tooShort) {
    formEl.style.setProperty(
      errorMessageCssProperty,
      `"Email length should be at least ${emailEl.minLength}"`
    );
  }
}
