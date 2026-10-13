function getCurrentYear(): string {
  return String(new Date().getFullYear());
}

const yearElement = document.getElementById("getCurrentYear");

if (yearElement) {
  yearElement.textContent = getCurrentYear();
}
