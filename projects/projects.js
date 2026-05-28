// Lightbox functionality for images
document.addEventListener("DOMContentLoaded", function () {
  // Create modal HTML if it doesn't exist
  if (!document.querySelector(".lightbox-modal")) {
    const modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close">&times;</button>
                <img src="" alt="" />
            </div>
        `;
    document.body.appendChild(modal);
  }

  const lightboxModal = document.querySelector(".lightbox-modal");
  const lightboxImage = lightboxModal.querySelector("img");
  const closeButton = lightboxModal.querySelector(".lightbox-close");

  // Add click listeners to all images in .inner
  const images = document.querySelectorAll(".inner img");
  images.forEach((img) => {
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      lightboxImage.src = this.src;
      lightboxImage.alt = this.alt;
      lightboxModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  });

  // Close modal when clicking the close button
  closeButton.addEventListener("click", function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  // Close modal when clicking the overlay
  lightboxModal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

  // Close modal when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightboxModal.classList.contains("active")) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "auto"; // Restore scrolling
  }
});
