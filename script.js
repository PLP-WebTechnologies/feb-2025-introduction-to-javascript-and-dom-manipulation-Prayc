// Changes text content dynamically
function changeText() {
  document.getElementById("dynamic-text").textContent = "The text has been changed!";
}

// Modifies CSS styles via JavaScript
function changeStyle() {
  const text = document.getElementById("style-text");
  text.style.color = "white";
  text.style.backgroundColor = "teal";
  text.style.padding = "10px";
  text.style.borderRadius = "8px";
}

// Adds a new element
function addElement() {
  const container = document.getElementById("element-container");
  if (!document.getElementById("new-element")) {
    const newElem = document.createElement("p");
    newElem.id = "new-element";
    newElem.textContent = "I am a newly added element!";
    container.appendChild(newElem);
  }
}

// Removes the previously added element
function removeElement() {
  const existing = document.getElementById("new-element");
  if (existing) {
    existing.remove();
  }
}
