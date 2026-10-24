
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕ Close" : "☰ Menu";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰ Menu";
      });
    });
  }

  const form = document.getElementById("tradeForm");
  const whatsappButton = document.getElementById("whatsappSubmit");
  const messageBox = document.getElementById("formMessage");

  if (!form) return;

  function getInquiry() {
    if (!form.reportValidity()) return null;

    const data = new FormData(form);

    return [
      "TRADE INQUIRY — A. Awan Port City Traders",
      "",
      "Name / Company: " + data.get("name"),
      "Business Email: " + data.get("email"),
      "Phone / WhatsApp: " + (data.get("phone") || "Not provided"),
      "Product: " + data.get("product"),
      "Quantity: " + data.get("quantity"),
      "Destination: " + data.get("destination"),
      "",
      "Inquiry Details:",
      data.get("details")
    ].join("\n");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inquiry = getInquiry();
    if (!inquiry) return;

    const subject = encodeURIComponent("Trade Inquiry - " + form.product.value);
    const body = encodeURIComponent(inquiry);
    const mailto = "mailto:trade@awanportcitytraders.com?subject=" +
      subject + "&body=" + body;

    if (messageBox) {
      messageBox.hidden = false;
      messageBox.textContent =
        "Your email application should open with the inquiry prepared. Review it and press Send to deliver it.";
    }

    window.location.href = mailto;
  });

  if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {
      const inquiry = getInquiry();
      if (!inquiry) return;

      const url = "https://wa.me/971526553541?text=" +
        encodeURIComponent(inquiry);

      window.open(url, "_blank", "noopener,noreferrer");

      if (messageBox) {
        messageBox.hidden = false;
        messageBox.textContent =
          "WhatsApp opened with your inquiry. Review the message and press Send.";
      }
    });
  }
});

