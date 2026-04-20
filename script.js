// =====================
// MENU TOGGLE
// =====================
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// =====================
// ELEMENTS
// =====================
const slider = document.getElementById("budgetSlider");
const valueText = document.getElementById("budgetValue");
const packageText = document.getElementById("packageText");
const form = document.getElementById("contactForm");

// STOP if elements not found
if (!slider || !valueText || !packageText || !form) {
  console.warn("Contact form elements missing");
}

// =====================
// LIVE STATE
// =====================
let currentBudget = slider ? Number(slider.value) : 4500;

// =====================
// PACKAGE LOGIC
// =====================
function getPackage(value) {
  if (value < 3000) return "Starter";
  if (value < 6500) return "Professional";
  return "Premium";
}

// =====================
// SLIDER UPDATE
// =====================
if (slider) {
  slider.addEventListener("input", function () {
    currentBudget = Number(this.value);

    if (valueText) {
      valueText.textContent = "R" + currentBudget.toLocaleString();
    }

    if (packageText) {
      packageText.textContent = getPackage(currentBudget);
    }
  });
}

// =====================
// WHATSAPP SUBMIT
// =====================
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const budget = currentBudget;
    const packageType = getPackage(budget);

    const whatsappMessage =
`NEW WEBSITE LEAD
-------------------
Name: ${name}
Email: ${email}
Message: ${message}

Budget: R${budget.toLocaleString()}
Recommended Package: ${packageType}`;

    const phoneNumber = "27748403931";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
  });
}