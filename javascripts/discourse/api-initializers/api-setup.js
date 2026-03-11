import { apiInitializer } from "discourse/lib/api";
import I18n from "I18n";

async function applyHighlight(element) {
  const highlights = element.querySelectorAll("mark");
  if (!highlights.length) {
    return;
  }
}

// Helper function to get raw text without translation
function getRawText(text) {
  return text.replace(/\[.*?\]/g, '');
}

export default apiInitializer((api) => {
  const { iconNode } = require("discourse-common/lib/icon-library");
  const currentLocale = I18n.currentLocale();

  // Localization setup - keep only the button titles in translations
  I18n.translations[currentLocale].js.strikethrough_button_title = settings.strikethrough_button;
  I18n.translations[currentLocale].js.composer.strikethrough_text = settings.strikethrough_text;

  // Toolbar Button Definitions
  api.onToolbarCreate((toolbar) => {
    const buttons = [
      {
        id: "strikethrough_button",
        group: "fontStyles",
        icon: "strikethrough",
        title: "strikethrough_button_title",
        perform: (e) => e.applySurround("<s>", "</s>", "strikethrough_text"),
      }
    ];

    buttons.forEach((button) => toolbar.addButton(button));
  });
  });
