import type { Modal } from "./modals.data.ts";
import { MODAL_MAPPING } from "./modals.data.ts";

const activeListeners = new Map<string, (event: MouseEvent) => void>();

export function modals({ modalId, overlayId, html }: Modal): void {
  const modalElement = document.getElementById(modalId);
  const overlayElement = document.getElementById(overlayId);

  if (!modalElement || !overlayElement) {
    return;
  }

  modalElement.innerHTML = html;
  overlayElement.style.display = "block";
  setupCloseButtons(modalElement, overlayElement);
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
export function initModalTriggers(): void {
  Object.keys(MODAL_MAPPING).forEach((buttonId) => {
    const triggerButton = document.getElementById(
      buttonId,
    ) as HTMLButtonElement;

    if (triggerButton) {
      const oldListener = activeListeners.get(buttonId);
      if (oldListener) {
        triggerButton.removeEventListener(
          "click",
          oldListener as EventListener,
        );
      }

      const clickListener = (event: MouseEvent): void => {
        event.preventDefault();
        modals(MODAL_MAPPING[buttonId]);
      };

      activeListeners.set(buttonId, clickListener);
      triggerButton.addEventListener("click", clickListener as EventListener);
    }
  });
}
