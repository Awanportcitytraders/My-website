document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  const form = document.getElementById("trade-inquiry");

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const status = document.getElementById("form-status");
      const button = form.querySelector('button[type="submit"]');

      status.textContent = "Sending your inquiry...";
      button.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.reset();
          status.textContent =
            "Thank you! Your inquiry was submitted successfully.";
        } else {
          status.textContent =
            "Submission failed. Please email trade@awanportcitytraders.com or contact us on WhatsApp.";
        }
      } catch (error) {
        status.textContent =
          "Connection issue. Please email trade@awanportcitytraders.com or contact us on WhatsApp.";
      } finally {
        button.disabled = false;
      }
    });
  }
});
