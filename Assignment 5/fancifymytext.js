function alerts() {
    alert("Hello, world!");
}

function bigger() {
    alerts()
    document.getElementById("inputText-1").style.fontSize = "24pt";
}

function makeMoo() {
    const text = document.getElementById("inputText-1").value.toUpperCase();
    const words = text.split(".");
    for (var i = 0; i < words.length-1; i++) {
        let word = words[i];
        word += "-Moo";
        words[i] = word;
    }
    document.getElementById("inputText-1").value = words.join(".");
}

function fancy() {
    alerts()
    document.getElementById("inputText-1").style.fontWeight = "bold";
    document.getElementById("inputText-1").style.color = "blue";
    document.getElementById("inputText-1").style.textDecoration = "underline";
}

function boring() {
    alerts()
    document.getElementById("inputText-1").style.fontWeight = "normal";
    document.getElementById("inputText-1").style.color = "black";
    document.getElementById("inputText-1").style.textDecoration = "none";
}