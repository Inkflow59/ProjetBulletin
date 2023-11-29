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
function tableauLignes() {
	var tableau=document.getElementById("Tableau")
	var taille=sessionStorage.getItem("nombreDeNotes")
	var ligne=tableau.insertRow(-1)
	var colonne1=ligne.insertCell(0)
	var colonne2=ligne.insertCell(1)
	var i=0
	for (i; i<taille-1; i++) {}
}

function affichageNotes() {}