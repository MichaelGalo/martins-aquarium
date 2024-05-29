import { database } from "./fishData.js";

export const locationList = () => {
  let locationHTML = "";
  // returns HTML for each tip
  for (const location of database.locations) {
    locationHTML += `
    <article class="locations"
        <section class="location">
            <h3>${location.name}</h3>
            <h4>${location.country}</h4>
            <p>${location.description}</p>
        </section>
    </article>
    `;
  }

  return locationHTML;
};

// time to render

export const renderLocationToDOM = (locationHTML) => {
  const locationList = document.getElementById("locationList");

  if (locationList) {
    locationList.innerHTML = locationHTML;
  } else {
    console.error('Could not find element with id "locationList"');
  }
};
