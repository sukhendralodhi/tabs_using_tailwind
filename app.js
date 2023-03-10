let btns = document.querySelectorAll(".btnLink");

const openTextBox = (eve, textBoxVal) => {
  // let i, tabContent, tabLinks;
  let valueStr = textBoxVal.toString();
  // console.log(valueStr);
  let boxes = document.getElementsByClassName("box");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }

  console.log("Hello");
  document.getElementById(valueStr).style.display = "block";
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.currentTarget.innerText;
    // console.log(e.currentTarget);
    // console.log(value);
    openTextBox(e, value);
  });
});
