function addNotice() {
  let heute = new Date(); // Erstelle ein neues Date-Objekt mit dem aktuellen Datum und der aktuellen Uhrzeit
  let tag = heute.getDate(); // Hole den Tag des Monats (1-31)
  let monat = heute.getMonth() + 1; // Hole den Monat (0-11) und füge 1 hinzu, da die Monate von 0-11 nummeriert sind
  let jahr = heute.getFullYear(); // Hole das Jahr (vierstellig)

  // Formatieren des Datums als "TT.MM.JJJJ"
  let formatiertesDatum = tag + "." + monat + "." + jahr;
  let newTitle = document.getElementById("title").value.trim();
  let newNotice = document.getElementById("notice").value.trim();
  if (newNotice == "") {
    clearNote();
    return;
  }
  titles.push(newTitle);
  notices.push(newNotice);
  editDates.push(formatiertesDatum);
  saveNotice();
  deleteSearch();
  clearNote();
  jumpToTextinput();
}

function jumpToTextinput() {
  let jumpIntoText = document.getElementById("title");
  jumpIntoText.focus();
}
function clearNote() {
  document.getElementById("title").value = "";
  document.getElementById("notice").value = "";
  jumpToTextinput();
  deleteSearch();
}
