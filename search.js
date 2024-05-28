function searchNote() {
  let filter = document.getElementById("inputSearch").value.trim().toUpperCase();
  let note = document.getElementById("myNotice").getElementsByClassName("my-reminder");
  for (let i = 0; i < note.length; i++) {
    let titlecontent = note[i].getElementsByClassName("my-title")[0].value.toUpperCase();
    let noteContent = note[i].getElementsByClassName("my-note")[0].textContent.toUpperCase();
    note[i].style.display = titlecontent.indexOf(filter) > -1 || noteContent.indexOf(filter) > -1 ? "": "none";
  }

  let myBinNotes = document.getElementById("myBin").getElementsByClassName("my-bin");
  for (let i = 0; i < myBinNotes.length; i++) {
    let titletrash = myBinNotes[i].getElementsByClassName("my-bin-title")[0].value.toUpperCase();
    let noteTrash = myBinNotes[i].getElementsByClassName("my-bin-note")[0].textContent.toUpperCase();
    myBinNotes[i].style.display = titletrash.indexOf(filter) > -1 || noteTrash.indexOf(filter) > -1 ? "": "none";
  }
}

function deleteSearch() {
  let deleteInput = document.getElementById("inputSearch");
  deleteInput.value = "";
  editNotice();
  editBin();
}

