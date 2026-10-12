const modalMappingModalWindow = {
  openLoginToProfileForm: {
    modalId: "loginToProfileForm",
    overlayId: "loginToProfileFormOverlay",
    openFile: "/src/components/loginToProfileForm/LoginToProfileForm.html",
  },
  openLoginForm: {
    modalId: "loginForm",
    overlayId: "loginFormOverlay",
    openFile: "/src/components/loginForm/LoginForm.html",
  },
  openRegisterForm: {
    modalId: "registrationForm",
    overlayId: "registrationFormOverlay",
    openFile: "/src/components/registrationForm/RegistrationForm.html",
  },
};

function setupCloseButtons(modalElement, overlayElement) {
  const closeButtons = modalElement.querySelectorAll(".close-button");

  closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      overlayElement.style.display = "none";
    });
  });
}

function openAllModals(modalId, overlayId, openFile) {
  fetch(openFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки шаблона: ${openFile}`);
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

// Привязка кликов к кнопкам открытия на странице
Object.keys(modalMappingModalWindow).forEach((buttonId) => {
  const triggerButton = document.getElementById(buttonId);
  if (triggerButton) {
    triggerButton.addEventListener("click", (event) => {
      event.preventDefault();
      const { modalId, overlayId, openFile } =
        modalMappingModalWindow[buttonId];
      openAllModals(modalId, overlayId, openFile);
    });
  }
});
