var helloExtension = (() => {
  // wwwroot/js/hello-extension.js
  (() => {
    const extension = new ExtensionBuilder().addBlock({
      name: "hello-block",
      label: "\u{1F44B} Hello Block",
      icon: `<svg ...>\u{1F44B}</svg>`,
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
    const register = () => {
      window.helloExtension = extension;
      globalThis.helloExtension = extension;
      console.log("\u2705 MailGrid helloExtension registered:", extension);
    };
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register);
  })();
})();
