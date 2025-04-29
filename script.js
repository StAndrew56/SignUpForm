function btnClicked() {
    let valid = true; 

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("passwordconfirm").value;

    if (firstName === "") {
        document.getElementById("firstName").style.border = "2px solid lightcoral";
        valid = false;
    }
    if (lastName === "") {
        document.getElementById("lastName").style.border = "2px solid lightcoral";
        valid = false;
    }
    if (phoneNumber === "") {
        document.getElementById("phonenumber").style.border = "2px solid lightcoral";
        valid = false;
    }
    if (email === "") {
        document.getElementById("email").style.border = "2px solid lightcoral";
        valid = false;
    }
    if (password === "") {
        document.getElementById("password").style.border = "2px solid lightcoral";
        valid = false;
    }
    if (confirmPassword === "") {
        document.getElementById("passwordconfirm").style.border = "2px solid lightcoral";
        valid = false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        valid = false;
    }

    if (valid == true) {
        alert("Form submitted successfully!");
    }
}

