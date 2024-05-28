function deleteNotice(i) {
  // Gelöschte Elemente aus den Arrays entfernen und in die gelöschten Arrays einfügen
  deletedTitles.push(titles.splice(i, 1)[0]);
  deletedNotices.push(notices.splice(i, 1)[0]);
  deletedDates.push(editDates.splice(i, 1)[0]);
  binSave();
  saveNotice();
  animationBin(i);
}
/* Endgültiges Löschen der Notizen */
function totalDelete(i) {
  deletedTitles.splice(i, 1);
  deletedNotices.splice(i, 1);
  deletedDates.splice(i, 1);
  binSave();
  animationTotalDelete(i);
}
/* Löscht den gesamten Papierkorb */
function clearBinAll() {
  deletedNotices.length = 0;
  deletedTitles.length = 0;
  deletedDates.length = 0;
  binSave();
  deleteSearch();
}
/* Wiederherstellen der Notizen */
function recoverNotice(i) {
  titles.push(deletedTitles.splice(i, 1)[0]);
  notices.push(deletedNotices.splice(i, 1)[0]);
  editDates.push(deletedDates.splice(i, 1)[0]);
  binSave();
  saveNotice();
  animationRecover(i);
}

function editBin() {
  let myBin = document.getElementById("myBin");
  myBin.innerHTML = "";
  if (deletedNotices.length == 0) {
    myBin.innerHTML = /*html*/ `<h1 Id="emptyBin" class="f-main">Der Papierkorb ist leer</h1>`;
  }
  for (i = 0; i < deletedNotices.length; i++) {
    myBin.innerHTML += editBinHtml(i, deletedNotices, deletedTitles, deletedDates);
  }
  adjustAllTextareas();
}

function editBinHtml(i, deletedNotices, deletedTitles, deletedDates) {
  return /* html */ `
  <div id="binNotes${i}" class="my-bin">
   <textarea type="text" placeholder="Kein Titel" id="myBinTitle${i}" class="my-bin-title f-main" rows="1" cols="50" readonly>${deletedTitles[i]}</textarea>
   <textarea type="text" id="myBinNote${i}" class="my-bin-note" rows="auto" cols="50" readonly>${deletedNotices[i]}</textarea>
   <div class="note-footer">
     <div class="note-footer-btn">
       <button class="bin" title="Endgültig Löschen" onclick="totalDelete(${i})"></button>
       <button class="recover" title="Nachricht wiederherstellen" onclick="recoverNotice(${i})"></button>
     </div>
     <label id="deleteDateNote${i}" class="note-date f-main"> Erstellt am: ${deletedDates[i]}</label>
   </div>
  </div>
  `;
}
