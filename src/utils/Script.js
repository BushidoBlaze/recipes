function getDateYear(year) {
  document.getElementById("getDateYear").textContent = String(
    year.getFullYear(),
  );
}
setInterval(() => getDateYear(new Date()), 1000);
