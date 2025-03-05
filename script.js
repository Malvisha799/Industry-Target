const industries = [
  {
    id: 1,
    title: "Business Setup",
    description: "Streamline your business registration process",
    details: {
      overview:
        "Our business setup services include company registration, license acquisition, documentation support, and compliance guidance. We help you navigate through the complex process of establishing your business legally and efficiently.",
      features: [
        "Company Registration & Incorporation",
        "Business License Acquisition",
        "Legal Documentation Support",
        "Compliance Guidance",
        "Tax Registration & Setup",
      ],
      benefits: [
        "Quick and hassle-free setup process",
        "Expert guidance at every step",
        "Compliance with all legal requirements",
        "Time and cost-efficient solutions",
        "Ongoing support and consultation",
      ],
      process: [
        "Initial Consultation",
        "Documentation Preparation",
        "Registration Process",
        "License Acquisition",
        "Compliance Setup",
      ],
      services: [
        {
          name: "Company Registration",
          description:
            "Complete assistance in registering your company with all necessary authorities. We handle the paperwork, submissions, and follow-ups to ensure a smooth registration process.",
          features: [
            "Business Name Registration",
            "Company Structure Setup",
            "Government Registration",
            "Tax ID Registration",
            "Business License Applications",
          ],
        },
        {
          name: "Documentation Support",
          description:
            "Professional assistance in preparing and managing all required business documentation, ensuring compliance with legal requirements.",
          features: [
            "Legal Document Preparation",
            "Compliance Documentation",
            "Record Keeping Setup",
            "Document Management System",
            "Regular Updates and Maintenance",
          ],
        },
        {
          name: "Compliance Services",
          description:
            "Comprehensive compliance services to ensure your business meets all regulatory requirements and maintains good standing.",
          features: [
            "Regulatory Compliance Review",
            "Compliance Monitoring",
            "Risk Assessment",
            "Policy Development",
            "Compliance Training",
          ],
        },
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"/></svg>',
  },
  {
    id: 2,
    title: "Business Growth",
    description: "Scale your business operations effectively",
    details: {
      overview:
        "Accelerate your business growth with our strategic planning, market analysis, and expansion strategies. We provide tailored solutions to help you scale operations and increase market presence.",
      features: [
        "Strategic Business Planning",
        "Market Analysis & Research",
        "Expansion Strategy Development",
        "Performance Optimization",
        "Growth Opportunity Assessment",
      ],
      benefits: [
        "Sustainable business growth",
        "Increased market presence",
        "Optimized operations",
        "Enhanced competitive advantage",
        "Strategic market positioning",
      ],
      process: [
        "Growth Assessment",
        "Strategy Development",
        "Implementation Planning",
        "Execution Support",
        "Progress Monitoring",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  },
  {
    id: 3,
    title: "Performance Analysis",
    description: "Track and optimize business metrics",
    details: {
      overview:
        "Get detailed insights into your business performance with our advanced analytics tools. Monitor KPIs, track growth metrics, and make data-driven decisions to optimize your operations.",
      features: [
        "Advanced Analytics Tools",
        "KPI Monitoring",
        "Performance Metrics Tracking",
        "Data-Driven Insights",
        "Custom Report Generation",
      ],
      benefits: [
        "Improved decision making",
        "Better resource allocation",
        "Enhanced operational efficiency",
        "Clear performance visibility",
        "Strategic growth planning",
      ],
      process: [
        "Data Collection",
        "Analysis Setup",
        "Performance Tracking",
        "Insight Generation",
        "Optimization Planning",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m3 12 5-5 5 5 8-8"/></svg>',
  },
  {
    id: 4,
    title: "Business Protection",
    description: "Secure your business assets and data",
    details: {
      overview:
        "Protect your business with comprehensive security solutions including data protection, cyber security, and risk management strategies to safeguard your valuable assets.",
      features: [
        "Data Protection Systems",
        "Cyber Security Solutions",
        "Risk Management",
        "Asset Protection",
        "Security Compliance",
      ],
      benefits: [
        "Enhanced data security",
        "Protected business assets",
        "Reduced security risks",
        "Regulatory compliance",
        "Peace of mind",
      ],
      process: [
        "Security Assessment",
        "Protection Planning",
        "Implementation",
        "Monitoring Setup",
        "Regular Reviews",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>',
  },
  {
    id: 5,
    title: "Affordable Nearby Solution",
    description: "Local business support services",
    details: {
      overview:
        "Access cost-effective local business support services including consulting, resource management, and operational assistance tailored to your specific location.",
      features: [
        "Local Business Consulting",
        "Resource Management",
        "Operational Support",
        "Cost-Effective Solutions",
        "Location-Specific Services",
      ],
      benefits: [
        "Reduced operational costs",
        "Local market expertise",
        "Quick response times",
        "Customized solutions",
        "Community integration",
      ],
      process: [
        "Local Assessment",
        "Solution Design",
        "Resource Allocation",
        "Implementation",
        "Local Support",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    id: 6,
    title: "Modern IT Infrastructure",
    description: "Advanced technology solutions",
    details: {
      overview:
        "Implement cutting-edge IT solutions to modernize your business infrastructure. Our services include cloud integration, software implementation, and technical support.",
      features: [
        "Cloud Integration",
        "Software Implementation",
        "Technical Support",
        "Infrastructure Modernization",
        "System Optimization",
      ],
      benefits: [
        "Improved efficiency",
        "Enhanced productivity",
        "Modern technology stack",
        "Scalable solutions",
        "Reliable performance",
      ],
      process: [
        "Tech Assessment",
        "Solution Design",
        "Implementation",
        "Testing",
        "Ongoing Support",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"/><path d="M4 7h16"/><path d="M4 11h16"/><path d="M4 15h16"/></svg>',
  },
  {
    id: 7,
    title: "Digital Marketing",
    description: "Boost your online presence digital marketing",
    details: {
      overview:
        "Enhance your digital presence with our comprehensive marketing solutions including SEO, social media management, content marketing, and digital advertising campaigns.",
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing",
        "Digital Advertising",
        "Analytics & Reporting",
      ],
      benefits: [
        "Increased online visibility",
        "Higher engagement rates",
        "Better brand awareness",
        "Targeted marketing",
        "Measurable results",
      ],
      process: [
        "Strategy Development",
        "Campaign Planning",
        "Content Creation",
        "Implementation",
        "Performance Monitoring",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>',
  },
  {
    id: 8,
    title: "Expert Support",
    description: "Professional guidance and assistance",
    details: {
      overview:
        "Get expert guidance from our team of professionals who provide personalized support, training, and consultation services to help your business succeed.",
      features: [
        "Professional Consultation",
        "Personalized Support",
        "Training Services",
        "Expert Guidance",
        "Problem Resolution",
      ],
      benefits: [
        "Professional expertise",
        "Customized solutions",
        "Continuous support",
        "Knowledge transfer",
        "Improved capabilities",
      ],
      process: [
        "Need Assessment",
        "Expert Assignment",
        "Support Planning",
        "Implementation",
        "Progress Review",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  },
  {
    id: 9,
    title: "Business Setup",
    description: "Streamline your business registration process",
    details: {
      overview:
        "Our business setup services include company registration, license acquisition, documentation support, and compliance guidance. We help you navigate through the complex process of establishing your business legally and efficiently.",
      features: [
        "Company Registration & Incorporation",
        "Business License Acquisition",
        "Legal Documentation Support",
        "Compliance Guidance",
        "Tax Registration & Setup",
      ],
      benefits: [
        "Quick and hassle-free setup process",
        "Expert guidance at every step",
        "Compliance with all legal requirements",
        "Time and cost-efficient solutions",
        "Ongoing support and consultation",
      ],
      process: [
        "Initial Consultation",
        "Documentation Preparation",
        "Registration Process",
        "License Acquisition",
        "Compliance Setup",
      ],
      services: [
        {
          name: "Company Registration",
          description:
            "Complete assistance in registering your company with all necessary authorities. We handle the paperwork, submissions, and follow-ups to ensure a smooth registration process.",
          features: [
            "Business Name Registration",
            "Company Structure Setup",
            "Government Registration",
            "Tax ID Registration",
            "Business License Applications",
          ],
        },
        {
          name: "Documentation Support",
          description:
            "Professional assistance in preparing and managing all required business documentation, ensuring compliance with legal requirements.",
          features: [
            "Legal Document Preparation",
            "Compliance Documentation",
            "Record Keeping Setup",
            "Document Management System",
            "Regular Updates and Maintenance",
          ],
        },
        {
          name: "Compliance Services",
          description:
            "Comprehensive compliance services to ensure your business meets all regulatory requirements and maintains good standing.",
          features: [
            "Regulatory Compliance Review",
            "Compliance Monitoring",
            "Risk Assessment",
            "Policy Development",
            "Compliance Training",
          ],
        },
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"/></svg>',
  },
  {
    id: 10,
    title: "Business Growth",
    description: "Scale your business operations effectively",
    details: {
      overview:
        "Accelerate your business growth with our strategic planning, market analysis, and expansion strategies. We provide tailored solutions to help you scale operations and increase market presence.",
      features: [
        "Strategic Business Planning",
        "Market Analysis & Research",
        "Expansion Strategy Development",
        "Performance Optimization",
        "Growth Opportunity Assessment",
      ],
      benefits: [
        "Sustainable business growth",
        "Increased market presence",
        "Optimized operations",
        "Enhanced competitive advantage",
        "Strategic market positioning",
      ],
      process: [
        "Growth Assessment",
        "Strategy Development",
        "Implementation Planning",
        "Execution Support",
        "Progress Monitoring",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  },
  {
    id: 11,
    title: "Performance Analysis",
    description: "Track and optimize business metrics",
    details: {
      overview:
        "Get detailed insights into your business performance with our advanced analytics tools. Monitor KPIs, track growth metrics, and make data-driven decisions to optimize your operations.",
      features: [
        "Advanced Analytics Tools",
        "KPI Monitoring",
        "Performance Metrics Tracking",
        "Data-Driven Insights",
        "Custom Report Generation",
      ],
      benefits: [
        "Improved decision making",
        "Better resource allocation",
        "Enhanced operational efficiency",
        "Clear performance visibility",
        "Strategic growth planning",
      ],
      process: [
        "Data Collection",
        "Analysis Setup",
        "Performance Tracking",
        "Insight Generation",
        "Optimization Planning",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m3 12 5-5 5 5 8-8"/></svg>',
  },
  {
    id: 12,
    title: "Business Protection",
    description: "Secure your business assets and data",
    details: {
      overview:
        "Protect your business with comprehensive security solutions including data protection, cyber security, and risk management strategies to safeguard your valuable assets.",
      features: [
        "Data Protection Systems",
        "Cyber Security Solutions",
        "Risk Management",
        "Asset Protection",
        "Security Compliance",
      ],
      benefits: [
        "Enhanced data security",
        "Protected business assets",
        "Reduced security risks",
        "Regulatory compliance",
        "Peace of mind",
      ],
      process: [
        "Security Assessment",
        "Protection Planning",
        "Implementation",
        "Monitoring Setup",
        "Regular Reviews",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>',
  },
  {
    id: 13,
    title: "Affordable Nearby Solution",
    description: "Local business support services",
    details: {
      overview:
        "Access cost-effective local business support services including consulting, resource management, and operational assistance tailored to your specific location.",
      features: [
        "Local Business Consulting",
        "Resource Management",
        "Operational Support",
        "Cost-Effective Solutions",
        "Location-Specific Services",
      ],
      benefits: [
        "Reduced operational costs",
        "Local market expertise",
        "Quick response times",
        "Customized solutions",
        "Community integration",
      ],
      process: [
        "Local Assessment",
        "Solution Design",
        "Resource Allocation",
        "Implementation",
        "Local Support",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    id: 14,
    title: "Modern IT Infrastructure",
    description: "Advanced technology solutions",
    details: {
      overview:
        "Implement cutting-edge IT solutions to modernize your business infrastructure. Our services include cloud integration, software implementation, and technical support.",
      features: [
        "Cloud Integration",
        "Software Implementation",
        "Technical Support",
        "Infrastructure Modernization",
        "System Optimization",
      ],
      benefits: [
        "Improved efficiency",
        "Enhanced productivity",
        "Modern technology stack",
        "Scalable solutions",
        "Reliable performance",
      ],
      process: [
        "Tech Assessment",
        "Solution Design",
        "Implementation",
        "Testing",
        "Ongoing Support",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"/><path d="M4 7h16"/><path d="M4 11h16"/><path d="M4 15h16"/></svg>',
  },
  {
    id: 15,
    title: "Digital Marketing",
    description: "Boost your online presence digital marketing",
    details: {
      overview:
        "Enhance your digital presence with our comprehensive marketing solutions including SEO, social media management, content marketing, and digital advertising campaigns.",
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing",
        "Digital Advertising",
        "Analytics & Reporting",
      ],
      benefits: [
        "Increased online visibility",
        "Higher engagement rates",
        "Better brand awareness",
        "Targeted marketing",
        "Measurable results",
      ],
      process: [
        "Strategy Development",
        "Campaign Planning",
        "Content Creation",
        "Implementation",
        "Performance Monitoring",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>',
  },
  {
    id: 16,
    title: "Expert Support",
    description: "Professional guidance and assistance",
    details: {
      overview:
        "Get expert guidance from our team of professionals who provide personalized support, training, and consultation services to help your business succeed.",
      features: [
        "Professional Consultation",
        "Personalized Support",
        "Training Services",
        "Expert Guidance",
        "Problem Resolution",
      ],
      benefits: [
        "Professional expertise",
        "Customized solutions",
        "Continuous support",
        "Knowledge transfer",
        "Improved capabilities",
      ],
      process: [
        "Need Assessment",
        "Expert Assignment",
        "Support Planning",
        "Implementation",
        "Progress Review",
      ],
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  },
];

function createCard(industry) {
  const card = document.createElement("div");
  card.className = "industry-card";
  card.innerHTML = `
      <div class="icon-wrapper">${industry.icon}</div>
      <h3>${industry.title}</h3>
      <p>${industry.description}</p>
      <button class="explore-btn" data-id="${industry.id}">View Details</button>
  `;
  return card;
}

function createTabContent(details) {
  return `
      <div class="tabs">
          <button class="tab-btn active" data-tab="overview">Overview</button>
          <button class="tab-btn" data-tab="features">Features</button>
          <button class="tab-btn" data-tab="services">Services</button>
      </div>
      <div class="tab-content">
          <div class="tab-pane active" id="overview">
              <div class="details-section">
                  <h4>Overview</h4>
                  <p>${details.overview}</p>
              </div>
              <div class="details-section">
                  <h4>Benefits</h4>
                  <ul class="details-list">
                      ${details.benefits
                        .map((benefit) => `<li>${benefit}</li>`)
                        .join("")}
                  </ul>
              </div>
              <div class="details-section">
                  <h4>Process</h4>
                  <ul class="details-list">
                      ${details.process
                        .map((step) => `<li>${step}</li>`)
                        .join("")}
                  </ul>
              </div>
          </div>
          <div class="tab-pane" id="features">
              <div class="details-section">
                  <h4>Key Features</h4>
                  <ul class="details-list">
                      ${details.features
                        .map((feature) => `<li>${feature}</li>`)
                        .join("")}
                  </ul>
              </div>
          </div>
          <div class="tab-pane" id="services">
              ${
                details.services
                  ? details.services
                      .map(
                        (service) => `
                  <div class="service-card">
                      <h4>${service.name}</h4>
                      <p>${service.description}</p>
                      <ul class="details-list">
                          ${service.features
                            .map((feature) => `<li>${feature}</li>`)
                            .join("")}
                      </ul>
                  </div>
              `
                      )
                      .join("")
                  : "<p>No specific services available for this category.</p>"
              }
          </div>
      </div>
  `;
}

function showDetails(industry) {
  const detailsBox = document.querySelector(".details-box");
  const overlay = document.querySelector(".overlay");
  const detailsIcon = detailsBox.querySelector(".details-icon");
  const title = detailsBox.querySelector(".details-title");
  const body = detailsBox.querySelector(".details-body");

  detailsIcon.innerHTML = industry.icon;
  title.textContent = industry.title;
  body.innerHTML = createTabContent(industry.details);

  // Add tab functionality
  const tabs = body.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");

      // Update active tab button
      body
        .querySelectorAll(".tab-btn")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Update active tab content
      body
        .querySelectorAll(".tab-pane")
        .forEach((pane) => pane.classList.remove("active"));
      body.querySelector(`#${tabId}`).classList.add("active");
    });
  });

  overlay.classList.add("active");
  detailsBox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideDetails() {
  const detailsBox = document.querySelector(".details-box");
  const overlay = document.querySelector(".overlay");

  overlay.classList.remove("active");
  detailsBox.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const industryGrid = document.querySelector(".industry-grid");

  // Create and append all cards
  industries.forEach((industry) => {
    const card = createCard(industry);
    industryGrid.appendChild(card);
  });

  // Add click event listeners
  document.querySelectorAll(".explore-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const industryId = parseInt(e.target.getAttribute("data-id"));
      const industry = industries.find((ind) => ind.id === industryId);
      if (industry) {
        showDetails(industry);
      }
    });
  });

  // Close button event listener
  document.querySelector(".close-btn").addEventListener("click", hideDetails);

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideDetails();
    }
  });

  // Close when clicking overlay
  document.querySelector(".overlay").addEventListener("click", hideDetails);
});
