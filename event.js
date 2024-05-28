function setEventListeners() {
  for (let i = 0; i < notices.length; i++) {
    document.getElementById(`myNotice${i}`).addEventListener("input", function () {
        prepareEvent(i);
      });
  }
  for (let i = 0; i < titles.length; i++) {
    document.getElementById(`myTitle${i}`).addEventListener("input", function () {
        prepareEvent(i);
      });
  }
}

function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto"; // Setzt die Höhe zurück, damit sie korrekt neu berechnet werden kann
  textarea.style.height = textarea.scrollHeight + "px"; // Setzt die Höhe auf die benötigte Scroll-Höhe
}

function adjustAllTextareas() {
  let textareas = document.querySelectorAll("textarea");
  textareas.forEach(adjustTextareaHeight);
}

function noSubmit(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    return;
  }
}