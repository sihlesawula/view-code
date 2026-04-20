// MENU TOGGLE
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// BUDGET SLIDER
const slider = document.getElementById("budgetSlider");
const valueText = document.getElementById("budgetValue");
const packageText = document.getElementById("packageText");

// Detect package based on value
function getPackage(value) {
  if (value < 3000) return "Starter";
  if (value < 6500) return "Professional";
  return "Premium";
}

// live update slider
if (slider) {
  slider.addEventListener("input", function () {
    const value = Number(this.value);

    valueText.textContent = "R" + value.toLocaleString();
    packageText.textContent = getPackage(value);
  });
}


// WHATSAPP FORM SUBMIT
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const budget = slider.value;
    const packageType = getPackage(budget);

    const whatsappMessage =
`NEW WEBSITE LEAD
-------------------
Name: ${name}
Email: ${email}
Message: ${message}

Budget: R${budget}
Recommended: ${packageType}`;

    const phoneNumber = "27748403931";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
  });
}