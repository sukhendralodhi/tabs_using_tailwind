let btns = document.querySelectorAll(".btnLink");
let closeBtn = document.querySelectorAll("span");

const openTextBox = (eve, textBoxVal) => {
  let valueStr = textBoxVal.toString();

  let boxes = document.getElementsByClassName("box");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }

  document.getElementById(valueStr).style.display = "block";
//   eve.currentTarget.classList.add('active:bg-gray-600');
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.currentTarget.innerText;
    openTextBox(e, value);
  });
});

closeBtn.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.currentTarget.parentElement.style.display = "none";
  });
});
document.getElementById("defaultOpen").click();
