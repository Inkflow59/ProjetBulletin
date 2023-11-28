function NomCandidat() {
	var nom=sessionStorage.getItem("nomCandidat")
	var prenom=sessionStorage.getItem("prenomCandidat")
	var nomTotal=nom+" "+prenom
	document.getElementById("AffichageNom").innerHTML=nomTotal
}

function nomCandidatSaisie() {
	var nom=sessionStorage.getItem("nomCandidat")
	var prenom=sessionStorage.getItem("prenomCandidat")
	var nomTotal=nom+" "+prenom
	document.getElementById("NomCandidat").innerHTML="Candidat : "+nomTotal
}
function tableauLignes() {}

function affichageNotes() {}