"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// nope, as browser wont be able to find otherwise!
// noinspection TypeScriptPreferShortImport
const service_js_1 = require("./service.js");
console.log("hello from index.ts");
window.addEventListener('load', function () {
    let person = { firstName: "Christoph", lastName: "Smith" };
    document.getElementById("output").innerText = service_js_1.greet(person);
}, false);
document.getElementById("btnShowAlert").addEventListener("click", function () {
    console.log("button clicked");
    alert("button clicked");
});
//# sourceMappingURL=index.js.map