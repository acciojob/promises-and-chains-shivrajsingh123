//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name").value.trim();
        const ageInput = document.getElementById("age").value.trim();
        
        if (!nameInput || !ageInput) {
            alert("Please enter valid details.");
            return;
        }

        const age = parseInt(ageInput, 10);
        
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age > 18) {
                    resolve(`Welcome, ${nameInput}. You can vote.`);
                } else {
                    reject(`Oh sorry ${nameInput}. You aren't old enough.`);
                }
            }, 4000);
        })
        .then(message => alert(message))
        .catch(error => alert(error));
    });
});