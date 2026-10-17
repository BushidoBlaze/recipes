export function initDropDownMenu(): void {
  const authBlock = document.querySelector(".header__auth") as HTMLElement;

  authBlock.addEventListener("mouseenter", () => {
    authBlock.classList.add("is-active");
  });

  authBlock.addEventListener("mouseleave", () => {
    authBlock.classList.remove("is-active");
  });
}
