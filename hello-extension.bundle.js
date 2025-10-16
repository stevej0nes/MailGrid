// wwwroot/js/hello-extension.js
var helloExtension = {
  getUiElements() {
    return [
      {
        type: "block",
        label: "\u{1F44B} Hello Block",
        icon: '<svg width="20" height="20"><text x="0" y="15" font-size="16">\u{1F44B}</text></svg>',
        create() {
          return {
            html: `<div class="hello-block">Hello from Stripo!</div>`,
            css: `.hello-block { padding: 10px; background: #007bff; color: white; border-radius: 4px; }`
          };
        }
      }
    ];
  }
};
window.helloExtension = helloExtension;
