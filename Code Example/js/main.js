console.log("Script loaded");
console.log("Hello World");

button = document.querySelector("body > header > p > button");
button.onclick = () => {
    console.log("YOU CLICKED ME");
    window.location.href = "https://google.com";
};
