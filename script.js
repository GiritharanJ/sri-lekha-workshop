// ============================================================
// Sri Lekha Auto Spares & Workshop — shared behaviour
// ============================================================

const WHATSAPP_NUMBER = "919841677317"; // +91 98416 77317
const CALL_NUMBER = "+919841677317";

/** Build a wa.me deep link with a pre-filled, readable message. */
function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Quick one-line enquiry link, e.g. for a single service/product card. */
function enquiryLink(itemName, kind) {
  const label = kind === "product" ? "this part" : "this service";
  const msg =
    `Hello Sri Lekha Auto Spares & Workshop,\n\n` +
    `I'd like to enquire about ${label}: ${itemName}.\n` +
    `Please share availability and estimate.`;
  return buildWhatsAppLink(msg);
}

// Expose for inline onclick handlers
window.enquiryLink = enquiryLink;
window.CALL_NUMBER = CALL_NUMBER;

document.addEventListener("DOMContentLoaded", () => {
  // AOS
  if (window.AOS) {
    AOS.init({ once: true, duration: 600, easing: "ease-out-quart", offset: 40 });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Reviews swiper (home page only)
  const reviewsEl = document.querySelector(".reviews-swiper");
  if (reviewsEl && window.Swiper) {
    new Swiper(".reviews-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: ".reviews-pagination", clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }
});

/** Alpine component: the "Send to WhatsApp" booking form */
function bookingForm() {
  return {
    name: "",
    phone: "",
    vehicleModel: "",
    vehicleNumber: "",
    service: "",
    description: "",
    fileName: "",

    onFile(e) {
      this.fileName = e.target.files.length ? e.target.files[0].name : "";
    },

    get isValid() {
      return this.name.trim() && this.phone.trim() && this.service.trim();
    },

    submit() {
      if (!this.isValid) return;

      const lines = [
        "Hello Sri Lekha Auto Spares & Workshop,",
        "",
        `Name: ${this.name}`,
        `Phone: ${this.phone}`,
      ];
      if (this.vehicleModel) lines.push("", "Vehicle:", this.vehicleModel);
      if (this.vehicleNumber) lines.push("", "Vehicle Number:", this.vehicleNumber);
      lines.push("", "Service:", this.service);
      if (this.description) lines.push("", "Problem:", this.description);
      if (this.fileName) lines.push("", `(Photo to follow: ${this.fileName})`);
      lines.push("", "Please contact me.");

      window.open(buildWhatsAppLink(lines.join("\n")), "_blank");
    },
  };
}
window.bookingForm = bookingForm;
