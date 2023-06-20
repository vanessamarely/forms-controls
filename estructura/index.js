const form = document.querySelector("form");
const output = document.querySelector("output"); 
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements['name'].value;
  output.value = `Value is: ${name}`
});