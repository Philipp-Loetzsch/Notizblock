function toggleBin() {
  document.getElementById("myBin").classList.toggle("d-none");
  document.getElementById("myBin").classList.toggle("d-flex");
  document.getElementById("content").classList.toggle("d-none");
  document.getElementById("content").classList.toggle("d-flex");
  document.getElementById("clearBinAll").classList.toggle("d-none");
  document.getElementById("clearBinAll").classList.toggle("d-flex");
}

function closeBin() {
  document.getElementById("myBin").classList.add("d-none");
  document.getElementById("myBin").classList.remove("d-flex");
  document.getElementById("content").classList.remove("d-none");
  document.getElementById("content").classList.add("d-flex");
  document.getElementById("clearBinAll").classList.add("d-none");
  document.getElementById("clearBinAll").classList.remove("d-flex");
}
