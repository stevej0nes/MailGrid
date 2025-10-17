(() => {
  console.log("📦 MailGrid extension script loaded");

  const extension = new ExtensionBuilder()
    .addBlock({
      name: "hello-block",
      label: "👋 Hello Block",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20"><text y="18" font-size="16">👋</text></svg>`,
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
    })
    .build();

  // Register immediately
  window.helloExtension = extension;
  globalThis.helloExtension = extension;

  console.log("✅ MailGrid helloExtension ready:", window.helloExtension);
})();

