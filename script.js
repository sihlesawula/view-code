const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const slider = document.getElementById("budgetSlider");
const valueText = document.getElementById("budgetValue");
const packageText = document.getElementById("packageText");

// Detect package based on value
function getPackage(value) {
  if (value < 3000) {
    return "Starter";
  } else if (value < 6500) {
    return "Professional";
  } else {
    return "Premium";
  }
}

slider.addEventListener("input", function () {
  const value = Number(this.value);

  valueText.textContent = "R" + value.toLocaleString();
  packageText.textContent = getPackage(value);
});

