function setup() {
  var myImage = document.getElementsByClassName("image");
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", () => button.parentElement.remove());
  });
}
function looog() {}

window.onload = function () {
  document.body.innerHTML = `
  <div class="image">
    <img src="firstimage.jpg" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="secondimage.jpg" alt="Second">
    <button class="remove">X</button>
  </div>`;

  setup();

  // document.getElementsByClassName("remove")[0].click();
  console.log(document.body.innerHTML);
};

// Example case.
