(function () {
  emailjs.init("VjngeNLu74eAtLTQX");
})();

const form = document.querySelector("#kapcsolat form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = form.querySelector("button[type=submit]");
  const originalText = btn.textContent;
  btn.textContent = "Küldés...";
  btn.disabled = true;

  emailjs
    .sendForm("service_ghofoeb", "template_z2af41b", form)
    .then(function () {
      btn.textContent = "Elküldve!";
      form.reset();
    })
    .catch(function () {
      btn.textContent = "Hiba! Próbálja újra.";
    })
    .finally(function () {
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 2500);
    });
});