import {
  fishList,
  renderFishToDOM,
  soldierFish,
  mostHolyFish,
  regularFish,
} from "./fishList.js";
import { renderTipToDOM, tipList } from "./tipList.js";
import { locationList, renderLocationToDOM } from "./locationList.js";

// Generate the fish list
const fishHTML = fishList(); // works with the basic prompt

// new element request
const holyHTML = mostHolyFish();
const soldierHTML = soldierFish();
const regularHTML = regularFish();
const newFishHTML = `${holyHTML}${soldierHTML}${regularHTML}`;

//creating experimental set method - it works, but with duplicates
// const fishSet = new Set();
// fishSet.add(holyHTML);
// fishSet.add(soldierHTML);
// fishSet.add(regularHTML);
// const newFishSetHTML = Array.from(fishSet).join("");

// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element
// renderFishToDOM(fishHTML);
renderFishToDOM(newFishHTML);
// renderFishToDOM(newFishSetHTML);
renderTipToDOM(tipHTML);
renderLocationToDOM(locationHTML);
