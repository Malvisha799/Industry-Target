document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("serviceModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalIcon = document.getElementById("modalIcon");
  const closeModal = document.querySelector(".close-modal");

  // Service details content
  const serviceDetails = {
    "business-setup": {
      title: "Business Setup",
      icon: "business-setup-icon",
      overview: `
              <h3>Overview</h3>
              <p>Our comprehensive business setup service streamlines the entire process of establishing your company. We handle all aspects of business registration, ensuring a smooth and efficient launch for your enterprise.</p>
          `,
      keyFeatures: `
              <h3>Key Features</h3>
              <ul>
                  <li>Complete company registration assistance</li>
                  <li>Legal documentation and compliance support</li>
                  <li>Business license acquisition</li>
                  <li>Tax registration and planning</li>
                  <li>Bank account setup assistance</li>
              </ul>
          `,
      services: `
              <h3>Our Services</h3>
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
      icon: "business-growth-icon",
      overview: `
              <h3>Overview</h3>
              <p>Our business growth solutions are designed to help you scale your operations effectively and sustainably. We provide comprehensive strategies for market expansion and revenue growth.</p>
          `,
      keyFeatures: `
              <h3>Key Features</h3>
              <ul>
                  <li>Market analysis and expansion planning</li>
                  <li>Revenue growth strategies</li>
                  <li>Operational efficiency optimization</li>
                  <li>Performance metrics tracking</li>
                  <li>Scalability assessment</li>
              </ul>
          `,
      services: `
              <h3>Our Services</h3>
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
    performance: {
      title: "Performance Analysis",
      icon: "performance-icon",
      overview: `
              <h3>Overview</h3>
              <p>Track and optimize your business performance with our comprehensive analysis tools and expert insights.</p>
          `,
      keyFeatures: `
              <h3>Key Features</h3>
              <ul>
                  <li>Real-time performance monitoring</li>
                  <li>Data-driven insights</li>
                  <li>Custom KPI tracking</li>
                  <li>Performance optimization recommendations</li>
                  <li>Regular performance reports</li>
              </ul>
          `,
      services: `
              <h3>Our Services</h3>
              <div class="service-item">
                  <h4>Performance Monitoring</h4>
                  <p>Continuous tracking of key business metrics and performance indicators.</p>
              </div>
              <div class="service-item">
                  <h4>Analysis & Reporting</h4>
                  <p>Detailed analysis and reporting of business performance metrics.</p>
              </div>
              <div class="service-item">
                  <h4>Optimization Services</h4>
                  <p>Strategic recommendations for improving business performance.</p>
              </div>
          `,
    },
    protection: {
      title: "Business Protection",
      icon: "protection-icon",
      overview: `
              <h3>Overview</h3>
              <p>Protect your business assets and data with our comprehensive security solutions.</p>
          `,
      keyFeatures: `
              <h3>Key Features</h3>
              <ul>
                  <li>Advanced data security measures</li>
                  <li>Asset protection strategies</li>
                  <li>Risk management solutions</li>
                  <li>Compliance monitoring</li>
                  <li>Regular security audits</li>
              </ul>
          `,
      services: `
              <h3>Our Services</h3>
              <div class="service-item">
                  <h4>Data Security</h4>
                  <p>Comprehensive data protection and security measures.</p>
              </div>
              <div class="service-item">
                  <h4>Asset Protection</h4>
                  <p>Strategic protection of business assets and resources.</p>
              </div>
              <div class="service-item">
                  <h4>Risk Management</h4>
                  <p>Proactive risk assessment and management solutions.</p>
              </div>
          `,
    },
    nearby: {
      title: "Affordable Nearby Solution",
      icon: "nearby-icon",
      overview: `
              <h3>Overview</h3>
              <p>Access cost-effective local business support services tailored to your needs.</p>
          `,
      keyFeatures: `
              <h3>Key Features</h3>
              <ul>
                  <li>Local market expertise</li>
                  <li>Cost-effective solutions</li>
                  <li>Community networking</li>
                  <li>Local support services</li>
                  <li>Regional business insights</li>
              </ul>
          `,
      services: `
              <h3>Our Services</h3>
              <div class="service-item">
                  <h4>Local Support</h4>
                  <p>On-ground support and assistance for your business needs.</p>
              </div>
              <div class="service-item">
                  <h4>Community Integration</h4>
                  <p>Help integrate your business into the local community.</p>
              </div>
              <div class="service-item">
                  <h4>Resource Access</h4>
                  <p>Access to local resources and business networks.</p>
              </div>
          `,
    },
    it: {
      title: "Modern IT Infrastructure",
      icon: "it-icon",
      overview: `
              <h3>Overview</h3>
              <p>Build and maintain a modern IT infrastructure that supports your business growth.</p>
          `,
      keyFeatures: `
              <h3>Key Features</h3>
              <ul>
                  <li>Cloud infrastructure setup</li>
                  <li>System integration</li>
                  <li>IT security implementation</li>
                  <li>Digital transformation</li>
                  <li>Technology optimization</li>
              </ul>
          `,
      services: `
              <h3>Our Services</h3>
              <div class="service-item">
                  <h4>Infrastructure Setup</h4>
                  <p>Complete IT infrastructure design and implementation.</p>
              </div>
              <div class="service-item">
                  <h4>System Integration</h4>
                  <p>Seamless integration of various IT systems and tools.</p>
              </div>
              <div class="service-item">
                  <h4>Tech Support</h4>
                  <p>Ongoing technical support and maintenance services.</p>
              </div>
          `,
    },
    marketing: {
      title: "Digital Marketing",
      icon: "marketing-icon",
      overview: `
              <h3>Overview</h3>
              <p>Enhance your online presence and reach your target audience effectively.</p>
          `,
      keyFeatures: `
              <h3>Key Features</h3>
              <ul>
                  <li>SEO optimization</li>
                  <li>Social media management</li>
                  <li>Content marketing</li>
                  <li>Online advertising</li>
                  <li>Analytics tracking</li>
              </ul>
          `,
      services: `
              <h3>Our Services</h3>
              <div class="service-item">
                  <h4>Digital Strategy</h4>
                  <p>Comprehensive digital marketing strategy development.</p>
              </div>
              <div class="service-item">
                  <h4>Content Creation</h4>
                  <p>Professional content creation and management services.</p>
              </div>
              <div class="service-item">
                  <h4>Campaign Management</h4>
                  <p>End-to-end digital campaign planning and execution.</p>
              </div>
          `,
    },
    support: {
      title: "Expert Support",
      icon: "support-icon",
      overview: `
              <h3>Overview</h3>
              <p>Get reliable professional support and guidance for your business operations.</p>
          `,
      keyFeatures: `
              <h3>Key Features</h3>
              <ul>
                  <li>24/7 technical support</li>
                  <li>Professional consulting</li>
                  <li>Problem resolution</li>
                  <li>Training services</li>
                  <li>Ongoing guidance</li>
              </ul>
          `,
      services: `
              <h3>Our Services</h3>
              <div class="service-item">
                  <h4>Technical Support</h4>
                  <p>Round-the-clock technical assistance and support.</p>
              </div>
              <div class="service-item">
                  <h4>Business Consulting</h4>
                  <p>Expert business advice and consulting services.</p>
              </div>
              <div class="service-item">
                  <h4>Training Programs</h4>
                  <p>Comprehensive training and development programs.</p>
              </div>
          `,
    },
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
    modalIcon.className = `icon ${serviceData.icon}`;

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
