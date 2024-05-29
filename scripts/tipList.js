import { database } from "./fishData.js";

export const tipList = () => {
  let tipHTML = "";
  // returns HTML for each tip
  for (const tip of database.tips) {
    tipHTML += `
    <ul class="tips">${tip.topic}</ul>
    <li class="tip">${tip.text}</li>
    `;
  }

  return tipHTML;
};

// time to render

export const renderTipToDOM = (tipHTML) => {
  const tipList = document.getElementById("tipList");

  if (tipList) {
    tipList.innerHTML = tipHTML;
  } else {
    console.error('Could not find element with id "tipList"');
  }
};
