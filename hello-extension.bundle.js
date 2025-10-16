var helloExtension = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // wwwroot/js/hello-extension.js
  var hello_extension_exports = {};
  __export(hello_extension_exports, {
    default: () => hello_extension_default
  });
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
          values: {
            text: "<div style='padding:20px;text-align:center;'>Hello from MailGrid!</div>"
          }
        }
      ]
    })
  }).build();
  var hello_extension_default = helloExtension;
  return __toCommonJS(hello_extension_exports);
})();
