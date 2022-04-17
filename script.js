

var n = 0;
function setNumberValue() { document.getElementById("number").value = n; }

document.getElementById("hello").addEventListener("click", () => {
    alert("Hello there!");
})
document.getElementById("plus").addEventListener("click", () => {
    ++n;
    setNumberValue();
});
document.getElementById('minus').addEventListener("click", () => {
    --n;
    setNumberValue();
});

setNumberValue();
alert("Hello TEJ!");