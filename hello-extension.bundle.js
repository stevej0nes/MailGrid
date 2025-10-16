// wwwroot/js/hello-extension.js
import { ExtensionBuilder } from "https://plugins.stripo.email/static/v3/sdk/stripo-extensions.js";
var helloExtension = new ExtensionBuilder().withName("helloExtension").withVersion("1.0.0").withBlocks([
  {
    label: "\u{1F44B} Hello Block",
    icon: '<svg viewBox="0 0 24 24"><text y="20" font-size="20">\u{1F44B}</text></svg>',
    create: () => ({
      html: '<div class="hello-block">Hello from Stripo extension!</div>',
      css: ".hello-block { padding: 12px; background: #E07A5F; color: white; border-radius: 6px; font-family: Arial, sans-serif; }"
    })
  }
]).build();
window.helloExtension = helloExtension;
