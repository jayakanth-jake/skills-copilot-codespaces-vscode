function skillsmember() {
    var skills = document.getElementById("skills").value;
    var skillserror = document.getElementById("skillserror");
    var skillsregex = /^[a-zA-Z0-9]{3,20}$/;
    if (skillsregex.test(skills) == false) {
        skillserror.innerHTML = "Skills must be 3-20 characters";
        return false;
    } else {
        skillserror.innerHTML = "";
        return true;
    }
}