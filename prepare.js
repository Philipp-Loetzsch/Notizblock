function prepareNotice(i) {
  let preparedTitleElement = document.getElementById(`myTitle${i}`);
  let preparedNoticeElement = document.getElementById(`myNotice${i}`);
  let preparedTitle = preparedTitleElement.value.trim();
  let preparedNotice = preparedNoticeElement.value.trim();
  if (preparedNotice == "") {
    preparedNoticeElement.value = "";
    return;
  }
  titles[i] = preparedTitle; // Ersetze den Wert an der Position "i"
  notices[i] = preparedNotice;
  document.getElementById(`prepareNotice${i}`).style.backgroundColor ="rgba(86, 212, 107, 1)";
  saveNotice();
  deleteSearch();
}

function prepareEvent(i) {
  let prepareButtonColor = document.getElementById(`prepareNotice${i}`);
  let checkTitle = document.getElementById(`myTitle${i}`);
  let checkTitleElement = checkTitle.value.trim();
  let checkNotice = document.getElementById(`myNotice${i}`);
  let checkNoticeElement = checkNotice.value.trim();

  if (checkTitleElement == "") {
    checkTitle.value = "";
  }
  if (checkNoticeElement == "") {
    prepareButtonColor.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    prepareButtonColor.style.cursor = "not-allowed";
    checkNotice.value = "";
  } else {
    prepareButtonColor.style.cursor = "pointer";
    prepareButtonColor.style.backgroundColor = "rgb(253, 210, 132)";
  }
}
