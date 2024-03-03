const btn = document.querySelector(".btn");
const colorGrid = document.querySelector(".colors-grid");
const clearBtn = document.querySelector(".clear");
let pickedColors = JSON.parse(localStorage.getItem("pickedColors")) || [];
console.log(pickedColors);

btn.addEventListener("click", activateEyeDrop);
clearBtn.addEventListener("click", clearColors);

// Remove Colors
function clearColors() {
  pickedColors = [];
  localStorage.removeItem("pickedColors");
  document.querySelector(".colors-container").classList.add("hidden");
}

// Showing Previous Colors
if (pickedColors.length) {
  showColors();
}

// Pick Colors
function activateEyeDrop() {
  document.body.style.display = "none";
  setTimeout(async () => {
    try {
      // Open Eyedropper
      let eyeDropper = new EyeDropper();
      let { sRGBHex } = await eyeDropper.open();
      // Add color if it doesn't exists
      if (!pickedColors.includes(sRGBHex)) {
        pickedColors.push(sRGBHex);
        localStorage.setItem("pickedColors", JSON.stringify(pickedColors));
        showColors();
      }
    } catch (err) {
      console.error(err.message);
    }
    document.body.style.display = "block";
  }, 10);
}

// Show Colors
function showColors() {
  colorGrid.innerHTML = pickedColors
    .map(
      (color) => `
        <div class="colors">
            <div class="color" style="background-color: ${color}; border: 1px solid ${
        color == "#ffffff" ? "#ccc" : `${color};`
      }"></div>
            <span class="value" data-color=${color}>${color}</span>
        </div>
    `
    )
    .join("");
  document.querySelector(".colors-container").classList.remove("hidden");
  let elements = document.querySelectorAll(".value");
  elements.forEach((element) => element.addEventListener("click", copyColor));
}

// Copy Color
function copyColor(e) {
  let element = e.currentTarget;
  navigator.clipboard.writeText(element.dataset.color);
  element.innerText = "COPIED";
  setTimeout(() => {
    element.innerText = element.dataset.color;
  }, 1000);
}
