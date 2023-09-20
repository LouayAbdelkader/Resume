// function Modify Phone Number 
function Mod1() {
    let y = prompt("donner le nouveau numéro du téléphone");
    if (!y) {
        alert("Veuillez donner un nombre valide");
    }
    else {
        if (y.length != 8 || isNaN(y)) {
            alert("Veuillez donner un nombre valide");
        }
        else {
            document.getElementById("tel").innerHTML = y;
        }
    }
}
// function modify email 
function Mod2() {
    let mail = prompt("donner le nouveau email ", "example@gmail.com");
    if (!mail) {
        alert("Veuillez donner un email valide");
    }
    else {
        if (mail.indexOf("@") == -1) {
            alert("l'email doit avoir @ !");
        }
        else {
            document.getElementById("Spanmail").innerHTML = mail;
        }
    }
}
// function modify adress
function Mod3() {
    let ad = prompt("donner la nouvelle adresse", "Megrine");
    if (!ad) {
        alert("Veuillez donner une adresse valide!");
    }
    else {
        document.getElementById("Adr").innerHTML = ad;
    }
}
//add another degree (education)
function addEdu() {
    ch = prompt("donner l'information a propos education !", "TI");
    if (!ch) {
        alert('veuillez saisir une information valide !');
    }
    else {
        ed = document.getElementById("containerEdu");
        h4 = document.createElement("h4");
        h4.innerHTML = ch;
        ed.appendChild(h4);
    }
}
//add Interest function   
function addInte() {
    var x = prompt('entrer les informations de votre intérêt', 'sport');
    if (!x) {
        alert('veuillez entrer une information valide !')
    }
    else {
        list = document.getElementsByClassName("InteList")[0];
        var li = document.createElement("li");
        li.innerHTML = x;
        list.appendChild(li)
    }
}
// function moodify profile
function ModP() {
    var pr = prompt("donner vos nouvelles informations !");
    if (!pr) {
        alert("veuillez rentrer des informations valides !")
    } else { document.getElementById("profile").innerHTML = pr; }
}
// function moodify profile s' name
function ModName() {
    var Name = prompt("introduire le nouveau nom", "Abdelkader Louay");
    var dis = prompt("introduire la profession");
    if (!Name) {
        alert("veuillez rentrer un nom")
    }
    else {
        document.getElementById("name").innerHTML = Name;
    }
    if (dis) {
        document.getElementById("profession").innerHTML = dis;

    }

}
// function upload new image
function upload() {
    let img = document.getElementById("avatar");
    let inputFile = document.getElementById("pic")
    img.src = URL.createObjectURL(inputFile.files[0]);
}
// function add experience
function addExp() {
    let exp = prompt("Introduire l'expérience");
    let date = prompt("Introduire la date", "jj/mm/aaaa");
    if (!exp || !date) {
        alert("Veuillez introduire une expérience et une date.");
    } else {
        const table = document.getElementById("table");
        const tr = document.createElement('tr');
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.innerText = exp;
        td2.innerText = date;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
}
// function add skill
function addSkill() {
    let skillName = prompt("Introduire votre compétence");
    let skillPercentage = prompt("Introduire le pourcentage de compétence", "50");

    if (!skillName || !skillPercentage || skillPercentage < 0 || skillPercentage > 100) {
        alert("Veuillez entrer une compétence valide");
    } else {
        const skillContainer = document.createElement("div");
        skillContainer.id = "skill";

        const skillParagraph = document.createElement("p");
        skillParagraph.innerHTML = skillName;

        const progressContainer = document.createElement("div");
        progressContainer.id = "prog";
        const progressBar = document.createElement("progress");
        progressBar.value = skillPercentage;
        progressBar.max = 100;

        const percentageParagraph = document.createElement("p");
        percentageParagraph.innerHTML = `%${skillPercentage}`;

        progressContainer.appendChild(progressBar);
        progressContainer.appendChild(percentageParagraph);

        skillContainer.appendChild(skillParagraph);
        skillContainer.appendChild(progressContainer);

        const skillsContainer = document.getElementById("skills");
        skillsContainer.appendChild(skillContainer);
    }
}
