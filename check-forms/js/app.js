//This function allows to check entry in each field

function validation() {
    var lastname = document.getElementById('lastname').value;
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('repeatPassword').value;
    var errorMessage = document.getElementById('errorMessage');
    var text;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var emailRegex = new RegExp("^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$");

    errorMessage.style.color = "#a13b2b";
    errorMessage.style.backgroundColor = "#e8c3ae";
    errorMessage.style.padding = "15px";

    if (lastname.length < 2 || lastname.length > 30) {
        text = "Entrez un nom valide. Entre 2 et 30 caractères.";
        errorMessage.innerHTML = text;
        return false;
    }

    if (firstname.length < 2 || firstname.length > 30) {
        text = "Entrez un prénom valide. Entre 2 et 30 caractères.";
        errorMessage.innerHTML = text;
        return false;
    }

    if (!email.match(emailRegex)) {
        text = "L'adresse e-mail n'est pas valide.";
        errorMessage.innerHTML = text;
        return false;
    }

    if (!password.match(strongRegex)) {
        text = "Le mot de passe doit contenir au moins 8 caractères, 1 lettre majuscule, 1 lettre minuscule et 1 caractère spécial.";
        errorMessage.innerHTML = text;
        return false;
    }

    if (password !== repeatPassword) {
        text = "Les mots de passe ne correspondent pas.";
        errorMessage.innerHTML = text;
        return false;
    }


}



