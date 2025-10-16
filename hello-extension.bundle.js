// wwwroot/js/hello-extension.js
import { UIExtensionBuilder } from "https://plugins.stripo.email/resources/uieditor/latest/ui-editor-extensions.js";
var helloExtension = new UIExtensionBuilder().withName("helloExtension").withLabel("\u{1F44B} Hello Block").withStyles(".hello-block { padding: 12px; background: #E07A5F; color: white; border-radius: 6px; font-family: Arial, sans-serif; }").withInitialData({
  message: "Hello, Stripo! \u{1F44B}"
}).withComponent((data) => {
  const root = document.createElement("div");
  root.className = "hello-block";
  root.textContent = data.message;
  return root;
}).withInspector([
  { type: "text", name: "message", label: "Message" }
]).build();
window.helloExtension = helloExtension;
