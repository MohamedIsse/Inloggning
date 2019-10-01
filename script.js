///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//kollar om anvädaren har varit inloggad tidigare och håller användaren inloggad
window.onload = function () {
    var SaveUser = localStorage.getItem("aktiv");
    if (SaveUser === "true") {
        // Hämtar den inloggade sidan
        inloggad();

    }
}
// Hämtar värderna från index.html och ger "logga in" knappen en funktion.
var knapp = document.getElementById("knapp");
knapp.onclick = function () {
    var namn = document.getElementById("namn").value;
    var lösenord = document.getElementById("lösenord").value;
    var rubrik = document.getElementById("rubrik");

    // kollar om användarens inloggsuppgifterna stämmer.
    if (namn === "test" && lösenord === "1234") {
        localStorage.setItem("namn", namn);
        localStorage.setItem("lösenord", lösenord);
        localStorage.setItem("aktiv", 'true');
        inloggad();
    }
     // vid misslyckad inloggning ändras rubriken och döljer input samt knapp.
    else {
        rubrik.innerHTML = "Du har angivit fel användarnamn eller lösenord"
        document.getElementById("namn").style.visibility = "hidden";
        document.getElementById("lösenord").style.visibility = "hidden";
        document.getElementById("knapp").style.visibility = "hidden";
    }
};
// Ändrar rubriken vid lyckad inloggning och döljer input samt knapp.
function inloggad() {
    rubrik.innerHTML = "Välkommen, du är inloggad"
    document.getElementById("namn").style.visibility = "hidden";
    document.getElementById("lösenord").style.visibility = "hidden";
    document.getElementById("knapp").style.visibility = "hidden";

    // Skapar "Loggar ut knapp" och ger den funktion att rensa localStorage samt reloada sidan.
    var loggautknapp = document.createElement("button");
    loggautknapp.innerHTML = "Logga ut"
    loggautknapp.onclick = function () {
        localStorage.removeItem("namn");
        localStorage.removeItem("lösenord");
        localStorage.removeItem('aktiv')
        location.reload();
    }
    document.body.appendChild(loggautknapp);
}
// sparar användarens uppgifter och håller dessa kvar i input även om man stänger av fönster.
var inhämtadInfo1 = localStorage.getItem("namn");
var inhämtadInfo2 = localStorage.getItem("lösenord")
if (inhämtadInfo1 && inhämtadInfo2) {
    document.getElementById("namn").value = inhämtadInfo1;
    document.getElementById("lösenord").value = inhämtadInfo2;

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
