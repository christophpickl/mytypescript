// nope, as browser wont be able to find otherwise!
// noinspection TypeScriptPreferShortImport
import {greet, Person} from "./service.js";

console.log("hello from index.ts");

window.addEventListener('load', function () {
    let person: Person = {firstName: "Joeee", lastName: "Doe"};
    document.getElementById("output").innerText = greet(person);
}, false);

document.getElementById("btnShowAlert").addEventListener("click", function () {
    console.log("button clicked");
    alert("button clicked");
});
