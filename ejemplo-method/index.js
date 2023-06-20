//const showButton is for the button
const showButton = document.getElementById("showDialog");
//const outputBox is for the output
const outputBox = document.querySelector("output");
//const dialog is for the dialog
const dialog = document.getElementById("confirmationModal");

//requesting the dialog to be shown
showButton.addEventListener("click", () => {
  dialog.showModal();
});

//when the dialog is closed, the output will be shown
dialog.addEventListener("close", function(event) {
  outputBox.value =
    dialog.returnValue === "default"
      ? "No submitted value."
      : `Submitted value: ${dialog.returnValue}.`;
});
