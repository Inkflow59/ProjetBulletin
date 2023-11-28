function saisieNom () {
	var prenom=document.getElementById("prenomCandidat").value;
	var nom=document.getElementById("nomCandidat").value;
	sessionStorage.setItem("nomCandidat",nom)
	sessionStorage.setItem("prenomCandidat",prenom)
}