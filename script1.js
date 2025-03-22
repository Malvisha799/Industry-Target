document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("serviceModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeModal = document.querySelector(".close-modal");

  // Service details content
  const serviceDetails = {
    "business-setup": {
      title: "Business Setup",
      overview: `
              <p>Our comprehensive business setup service streamlines the entire process of establishing your company. We handle all aspects of business registration, ensuring a smooth and efficient launch for your enterprise.</p>
          `,
      keyFeatures: `
              <ul>
                  <li>Complete company registration assistance</li>
                  <li>Legal documentation and compliance support</li>
                  <li>Business license acquisition</li>
                  <li>Tax registration and planning</li>
                  <li>Bank account setup assistance</li>
              </ul>
          `,
      services: `
              <div class="service-item">
                  <h4>Registration Package</h4>
                  <p>Complete business registration with all necessary documentation and legal requirements.</p>
              </div>
              <div class="service-item">
                  <h4>Compliance Setup</h4>
                  <p>Ensure your business meets all regulatory requirements and industry standards.</p>
              </div>
              <div class="service-item">
                  <h4>Advisory Services</h4>
                  <p>Expert guidance on business structure, taxation, and legal matters.</p>
              </div>
          `,
    },
    "business-growth": {
      title: "Business Growth",
      overview: `
              <p>Our business growth solutions are designed to help you scale your operations effectively and sustainably. We provide comprehensive strategies for market expansion and revenue growth.</p>
          `,
      keyFeatures: `
              <ul>
                  <li>Market analysis and expansion planning</li>
                  <li>Revenue growth strategies</li>
                  <li>Operational efficiency optimization</li>
                  <li>Performance metrics tracking</li>
                  <li>Scalability assessment</li>
              </ul>
          `,
      services: `
              <div class="service-item">
                  <h4>Growth Strategy</h4>
                  <p>Customized growth plans aligned with your business objectives.</p>
              </div>
              <div class="service-item">
                  <h4>Market Expansion</h4>
                  <p>Support for entering new markets and expanding your customer base.</p>
              </div>
              <div class="service-item">
                  <h4>Operations Scaling</h4>
                  <p>Guidance on scaling operations while maintaining efficiency.</p>
              </div>
          `,
    },
    // [Continue with similar detailed content for all other services...]
  };

  // Add hover effect for cards
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Modal functionality with tabs
  function openModal(service) {
    const serviceData = serviceDetails[service];
    modalTitle.textContent = serviceData.title;

    // Create tabs and content
    modalBody.innerHTML = `
          <div class="tabs">
              <button class="tab active" data-tab="overview">Overview</button>
              <button class="tab" data-tab="keyFeatures">Key Features</button>
              <button class="tab" data-tab="services">Services</button>
          </div>
          <div class="tab-content active" id="overview">
              ${serviceData.overview}
          </div>
          <div class="tab-content" id="keyFeatures">
              ${serviceData.keyFeatures}
          </div>
          <div class="tab-content" id="services">
              ${serviceData.services}
          </div>
      `;

    // Add tab functionality
    const tabs = modalBody.querySelectorAll(".tab");
    const tabContents = modalBody.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs and contents
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((c) => c.classList.remove("active"));

        // Add active class to clicked tab and corresponding content
        tab.classList.add("active");
        const tabId = tab.dataset.tab;
        document.getElementById(tabId).classList.add("active");
      });
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModalHandler() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  cards.forEach((card) => {
    const viewButton = card.querySelector(".view-details");
    viewButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const service = card.dataset.service;
      openModal(service);
    });
  });

  closeModal.addEventListener("click", closeModalHandler);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalHandler();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModalHandler();
    }
  });

  // Add animation classes to cards on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});
