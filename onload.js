async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

function loadLocal() {
  /* Werte der aktuellen Notizen aus dem lokalen Speicher holen */
  let titlesAsText = localStorage.getItem("titles");
  let noticesAsText = localStorage.getItem("notices");
  let datesAsText = localStorage.getItem("dates");
  /* Werte der gelöschten Notizen aus dem lokalen Speicher holen */
  let deletedTitlesAsText = localStorage.getItem("deletedTitles");
  let deletedNoticesAsText = localStorage.getItem("deletedNotices");
  let deletedDatesAsText = localStorage.getItem("deletedDates");
  /* Überprüfe ob gespeicherte Werte im lokalen Speicher vorhanden sind  */
  if (
    titlesAsText && noticesAsText && datesAsText && deletedNoticesAsText && deletedTitlesAsText&& deletedDatesAsText) {
    /* Lädt alle Werte in das Array der aktuellen Notizen */
    titles = JSON.parse(titlesAsText);
    notices = JSON.parse(noticesAsText);
    editDates = JSON.parse(datesAsText);
    /* Lädt alle Werte in das Array der gelöschten Notizen */
    deletedTitles = JSON.parse(deletedTitlesAsText);
    deletedNotices = JSON.parse(deletedNoticesAsText);
    deletedDates = JSON.parse(deletedDatesAsText);
  }

  editNotice(); /* siehe script.js */
  editBin(); /* siehe bin.js */
}
