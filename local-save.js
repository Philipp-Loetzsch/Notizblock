function saveNotice() {
  let titlesAsText = JSON.stringify(titles);
  localStorage.setItem("titles", titlesAsText);
  let noticesAsText = JSON.stringify(notices);
  localStorage.setItem("notices", noticesAsText);
  let datesAsText = JSON.stringify(editDates);
  localStorage.setItem("dates", datesAsText);
}

function binSave() {
  let binTitlesAsText = JSON.stringify(deletedTitles);
  localStorage.setItem("deletedTitles", binTitlesAsText);
  let binNoticesAsText = JSON.stringify(deletedNotices);
  localStorage.setItem("deletedNotices", binNoticesAsText);
  let binDatesAsText = JSON.stringify(deletedDates);
  localStorage.setItem("deletedDates", binDatesAsText);
}
