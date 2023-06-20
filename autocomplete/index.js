const form = document.querySelector("form");
const outputBox = document.querySelector("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = `${form.elements["firstName"].value} ${form.elements["lastName"].value} and email: ${form.elements["email"].value}`;
  outputBox.value = `Submitted name: ${name}.`;
});
