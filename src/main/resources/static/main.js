function initPage() {
    var greeting = greet({ firstName: "John", lastName: "Doe" });
    document.getElementById("output").innerText = greeting;
}

function showAlert() {
    alert("alert from JS");
}
