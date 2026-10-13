export type Modal = {
    modalId: string;
    overlayId: string;
    path: string;
};

export const MODAL_MAPPING: Record<string, Modal> = {
  loginForm: {
    modalId: "login",
    overlayId: "loginOverlay",
    path: "/src/components/forms/loginForm/Login.html",
  },
  registerForm: {
    modalId: "register",
    overlayId: "registerOverlay",
    path: "/src/components/forms/registrationForm/Registration.html",
  },
  loginToProfileForm: {
    modalId: "loginToProfile",
    overlayId: "loginToProfileOverlay",
    path: "/src/components/forms/loginToProfileForm/LoginToProfile.html",
  },
};
