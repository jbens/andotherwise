// Get the container element
const container = document.querySelector(".container");

// Attach hover event listener to the services
container.addEventListener("mouseover", (event) => {
  const target = event.target;

  if (target.classList.contains("service")) {
    const selectedType = target.getAttribute("data-type");

    const services = document.querySelectorAll(".service");
    services.forEach((service) => {
      if (service === target) {
        service.style.opacity = "1";
      } else {
        service.style.opacity = "0.25";
      }
    });

    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach((item) => {
      const projectType = item
        .querySelector(".project-type")
        .textContent.toLowerCase();

      switch (projectType) {
        case "production":
          if (selectedType === "production") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "installation":
          if (selectedType === "installations") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "lighting design":
          if (selectedType === "production") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "nightclub":
          if (selectedType === "architecture") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "furniture":
          if (selectedType === "ideas") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "memorial":
          if (selectedType === "architecture") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "cultural institution":
          if (selectedType === "architecture") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "stage design":
          if (selectedType === "production") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "film":
          if (selectedType === "ideas") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;
          
        case "retail":
          if (selectedType === "architecture") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        case "built":
        case "renovation":
        case "in progress":
          if (selectedType === "architecture") {
            item.style.opacity = "1";
          } else {
            item.style.opacity = ".25";
          }
          break;

        default:
          item.style.opacity = "1";
          break;
      }
    });
  }
});

// Restore opacity on mouseout of the services
container.addEventListener("mouseout", () => {
  const services = document.querySelectorAll(".service");
  services.forEach((service) => {
    service.style.opacity = "1";
  });

  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item) => {
    item.style.opacity = "1";
  });
});

// Attach hover event listener to the project list items
const projectItems = document.querySelectorAll(".project-item");
projectItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    projectItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.style.opacity = "0.25";
      }
    });
  });

  item.addEventListener("mouseout", () => {
    projectItems.forEach((otherItem) => {
      otherItem.style.opacity = "1";
    });
  });
});
