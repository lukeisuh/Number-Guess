// Generate random number when page loads
var randomNumber = Math.floor(Math.random() * 1000) + 1;

document.getElementById("checkBtn").addEventListener("click", function() {
    var guess = parseInt(document.getElementById("guess").value);

    if (guess === randomNumber) {
        document.body.style.backgroundColor = "#4caf50";
        document.getElementById("result").textContent = "oh my fucking god this is fucking insane";
    } else {
        document.body.style.backgroundColor = "#f3f4f6";
        document.getElementById("result").textContent = "Wrong guess! It was " + randomNumber + ", idiot.";
        document.getElementById("guess").disabled = true; // Disable input field
        setTimeout(function() {
            location.reload();
        }, 5000);
    }
});
