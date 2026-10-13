import type { Modal } from "./modals.data.ts";
import { MODAL_MAPPING } from "./modals.data.ts";

export function modals({ modalId, overlayId, path }: Modal): void {
  fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки шаблона: ${path}`);
      }
      return response.text();
    })
    .then((data) => {
      const modalElement = document.getElementById(modalId);
      const overlayElement = document.getElementById(overlayId);

      if (!modalElement || !overlayElement) {
        return;
      }

      modalElement.innerHTML = data;
      overlayElement.style.display = "block";
      setupCloseButtons(modalElement, overlayElement);
    })
    .catch((error) => {
      console.error("Не удалось открыть модальное окно:", error);
    });
}

export function setupCloseButtons(
  modalElement: HTMLElement,
  overlayElement: HTMLElement,
): void {
  const closeButtons = modalElement.querySelectorAll(".close-button");

  closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      overlayElement.style.display = "none";
    });
  });
}

// Привязка кликов к кнопкам открытия на странице
Object.keys(MODAL_MAPPING).forEach((buttonId) => {
  const triggerButton = document.getElementById(buttonId);
  if (triggerButton) {
    triggerButton.addEventListener("click", (event) => {
      event.preventDefault();
      modals(MODAL_MAPPING[buttonId]);
    });
  }
});
