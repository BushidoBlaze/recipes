import loginHtml from "/src/components/forms/loginForm/Login.html?raw";
import registerHtml from "/src/components/forms/registrationForm/Registration.html?raw";
import loginToProfileHtml from "/src/components/forms/loginToProfileForm/LoginToProfile.html?raw";

export type Modal = {
  modalId: string;
  overlayId: string;
  html: string;
};

export const MODAL_MAPPING: Record<string, Modal> = {
  headerLoginForm: {
    modalId: "login",
    overlayId: "loginOverlay",
    html: loginHtml,
  },
  headerRegisterForm: {
    modalId: "register",
    overlayId: "registerOverlay",
    html: registerHtml,
  },
  loginToProfileForm: {
    modalId: "loginToProfile",
    overlayId: "loginToProfileOverlay",
    html: loginToProfileHtml,
  },
};
