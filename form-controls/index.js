const form = document.querySelector("form");
const output = document.querySelector("output");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const subscribe = form.elements["subscribe"].value;
  const webfeature = form.elements["webfeature"].value;
  const languages = form.elements["languages"].value;
  output.value = `Subscribed is: ${subscribe}
  favorite web technology is ${webfeature} and favorite programming language ${languages}`;
});
