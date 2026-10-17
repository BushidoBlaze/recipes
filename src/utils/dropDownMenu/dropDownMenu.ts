export function initDropDownMenu(): void {
  const authBlock = document.querySelector(".header__auth") as HTMLElement;
//   const loginButton = document.querySelector(".header__button--login") as HTMLButtonElement;

  authBlock.addEventListener("mouseenter", () => {
    authBlock.classList.add("is-active");
  });

  authBlock.addEventListener("mouseleave", () => {
    authBlock.classList.remove("is-active");
  });
}
