// wwwroot/js/hello-extension.js
(function() {
  const helloExtension = {
    // Stripo expects getUiElements() at minimum
    getUiElements() {
      return [
        {
          type: "block",
          label: "\u{1F44B} Hello Block",
          icon: '<svg viewBox="0 0 24 24"><text y="20" font-size="20">\u{1F44B}</text></svg>',
          create() {
            return {
              html: '<div class="hello-block">Hello, Stripo! \u{1F44B}</div>',
              css: ".hello-block { padding: 12px; background: #E07A5F; color: white; border-radius: 6px; font-family: Arial, sans-serif; }"
            };
          }
        }
      ];
    }
  };
  window.helloExtension = helloExtension;
})();
