(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // wwwroot/js/hello-extension.js
  var import_ui_editor_extensions = __require("@stripoinc/ui-editor-extensions");
  var helloExtension = new import_ui_editor_extensions.ExtensionBuilder().addBlock({
    name: "hello-block",
    label: "\u{1F44B} Hello Block",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><text y="18" font-size="16">\u{1F44B}</text></svg>`,
    create: () => ({
      type: "block",
      elements: [
        {
          type: "text",
          values: { text: "<div style='padding:20px;text-align:center;'>Hello from MailGrid!</div>" }
        }
      ]
    })
  }).build();
  window.helloExtension = helloExtension;
})();
