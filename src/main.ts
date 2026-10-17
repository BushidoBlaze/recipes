// Импортируем разметку и стили header
import headerHtml from "./components/header/Header.html?raw";
import "./components/header/Header.css";

// Функция выподающего меню
import { initDropDownMenu } from "./utils/dropDownMenu/dropDownMenu.ts";

// Функция для активации кнопок модальных окон
import { initModalTriggers } from "./utils/modals/openModals.ts";

const headerContainer = document.getElementById("header-container");
if (headerContainer) {
  headerContainer.innerHTML = headerHtml;

  initDropDownMenu();

  initModalTriggers();
}
