function animationBin(i) {
  let animationDeleteNote = document.getElementById(`myReminder${i}`);
  animationDeleteNote.classList.add("animation-bin");
  animationDeleteNote.addEventListener("animationend", deleteSearch);
}

function animationTotalDelete(i) {
  let animationTotalDelete = document.getElementById(`binNotes${i}`);
  animationTotalDelete.classList.add("animation-bin");
  animationTotalDelete.addEventListener("animationend", deleteSearch);
}

function animationRecover(i) {
  let animationRecover = document.getElementById(`binNotes${i}`);
  animationRecover.classList.add("animation-recover");
  animationRecover.addEventListener("animationend", deleteSearch);
}
