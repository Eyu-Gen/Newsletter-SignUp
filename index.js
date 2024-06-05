document.getElementById("submitBtn").addEventListener("click", function() {
    let emailValue = document.getElementById("email").value;
    let emailLength = emailValue.length;
    let style = document.createElement("style");
    let isGmail = emailValue.slice(emailLength - 10);

    if (emailLength == 0) {
        document.getElementById("error").style.display = "block";
        document.getElementById("email").style.borderColor = "var(--primaryColor)";
        document.getElementById("email").style.backgroundColor = "var(--primaryColorTransparent)";
        style.innerHTML = `
        #email::placeholder {
            color: var(--primaryColor);
        }
        `;
        document.head.appendChild(style);
    } else if(isGmail != "@gmail.com") {
        document.getElementById("email").style.backgroundColor = "var(--primaryColorTransparent)";
        document.getElementById("email").style.color = "var(--primaryColor)";
        document.getElementById("error").style.display = "block";
        document.getElementById("email").style.borderColor = "var(--primaryColor)";
        document.head.appendChild(style);
    } else {
        document.getElementById("successContainer").style.display = "block";
        document.getElementById("mainContainer").style.display = "none";
    }

    document.getElementById("email").addEventListener("click", function() {
        document.getElementById("error").style.display = "none";
        document.getElementById("email").style.borderColor = "var(--naturalColor)";
        document.getElementById("email").style.backgroundColor = "var(--defaultColor)";
        document.getElementById("email").style.color = "black";

        style.innerHTML = `
            #email::placeholder {
                color: var(--naturalColor);
            }
        `;
        document.head.appendChild(style);
    });
});