function editNotice() {
  let myNotice = document.getElementById("myNotice");
  myNotice.innerHTML = "";

  for (i = 0; i < notices.length; i++) {
    myNotice.innerHTML += generateNoteHTML(i, notices, titles, editDates);
  }
  adjustAllTextareas();
  setEventListeners();
}

function generateNoteHTML(i, notices, titles, editDates) {
  return /* html */`<form onsubmit="prepareNotice(${i}); return false" id="myReminder${i}" class="my-reminder"><textarea
  type="text"
  id="myTitle${i}"
  name="mytitle"
  class="my-title f-main"
  placeholder="Kein Titel"
  rows="1"
  oninput="adjustTextareaHeight(this)"
  cols="50">${titles[i]}</textarea>
<textarea
  type="text"
  name="mynote"
  id="myNotice${i}"
  class="my-note f-main"
  placeholder="Deine Notiz"
  rows="auto"
  cols="50"
  oninput="adjustTextareaHeight(this)"
  required>${notices[i]}</textarea>
  <div class="note-footer">
  <div class="note-footer-btn">
  <button type="button" class="bin" title="Nachricht löschen" onclick="deleteNotice(${i})">
  </button>
  <button type="submit" id="prepareNotice${i}" class="prepare" title="Nachricht bearbeiten">
  </button>
  </div>
  <label id="dateNote${i}" class="note-date f-main"> Erstellt am: ${editDates[i]}</label>
  </div>
  
  </form>
  `;
}
