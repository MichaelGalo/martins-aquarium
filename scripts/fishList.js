import { database } from "./fishData.js";

export const fishList = () => {
  // Generate an HTML representation of each fish
  let fishHTML = "";

  for (const fish of database.fish) {
    fishHTML += `
        <article class="fish">
        <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
            <div class="fish_details">
                <h3 class="fish__name">${fish.name}</h3>
                <h4 class="fish_species">${fish.species}</h4>
                <p class="fish_size">${fish.length} inches on average</p>
                <p class="fish__location">Generally found near: ${fish.location}</p>
                <p class="fish__diet">${fish.diet}</p>
            </div>
        </article>
        `;
  }
  return fishHTML;
};
// end of basic fishList

// filtering fish functions

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  let holyFish = "";

  for (const fish of database.fish) {
    if (fish.length % 3 === 0) {
      holyFish += `
      <article class="fish">
      <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
          <div class="fish_details">
              <h3 class="fish__name">${fish.name}</h3>
              <h4 class="fish_species">${fish.species}</h4>
              <p class="fish_size">${fish.length} inches on average</p>
              <p class="fish__location">Generally found near: ${fish.location}</p>
              <p class="fish__diet">${fish.diet}</p>
          </div>
      </article>
      `;
    }
  }

  return holyFish;
};

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  let soldierFish = "";

  for (const fish of database.fish) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
      soldierFish += `
      <article class="fish">
      <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
          <div class="fish_details">
              <h3 class="fish__name">${fish.name}</h3>
              <h4 class="fish_species">${fish.species}</h4>
              <p class="fish_size">${fish.length} inches on average</p>
              <p class="fish__location">Generally found near: ${fish.location}</p>
              <p class="fish__diet">${fish.diet}</p>
          </div>
      </article>
      `;
    }
  }

  return soldierFish;
};

export const regularFish = () => {
  // Any fish not a multiple of 3 or 5

  const holyAndSoldierFishLengths = [];
  for (const fish of database.fish) {
    if (fish.length % 3 === 0) {
      holyAndSoldierFishLengths.push(fish.length);
    } else if (fish.length % 5 === 0) {
      holyAndSoldierFishLengths.push(fish.length);
    }
  }

  let regularFish = "";

  // for (const fish of database.fish) {
  //   if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
  //     regularFish += `
  //     <article class="fish">
  //     <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
  //         <div class="fish_details">
  //             <h3 class="fish__name">${fish.name}</h3>
  //             <h4 class="fish_species">${fish.species}</h4>
  //             <p class="fish_size">${fish.length} inches on average</p>
  //             <p class="fish__location">Generally found near: ${fish.location}</p>
  //             <p class="fish__diet">${fish.diet}</p>
  //         </div>
  //     </article>
  //     `;

  for (const fish of database.fish) {
    if (!holyAndSoldierFishLengths.includes(fish.length)) {
      regularFish += `
          <article class="fish">
            <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
            <div class="fish_details">
              <h3 class="fish__name">${fish.name}</h3>
              <h4 class="fish_species">${fish.species}</h4>
              <p class="fish_size">${fish.length} inches on average</p>
              <p class="fish__location">Generally found near: ${fish.location}</p>
              <p class="fish__diet">${fish.diet}</p>
            </div>
          </article>
        `;
    }
  }

  return regularFish;
};
// this is to render

export const renderFishToDOM = (fishHTML) => {
  const fishList = document.getElementById("fishList");

  if (fishList) {
    fishList.innerHTML = fishHTML;
  } else {
    console.error('Could not find element with id "fishList"');
  }
};
