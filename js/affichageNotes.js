function NomCandidat() {
	nom=sessionStorage.getItem("nomCandidat")
	prenom=sessionStorage.getItem("prenomCandidat")
	nomTotal=nom+" "+prenom
	document.getElementById("AffichageNom").innerHTML=nomTotal
}

function tableauLignes() {
	taille=sessionStorage.getItem("notes").value
	tableau=document.getElementById("Tableau")
	for (let i=0; i<taille-1; i++) {
		tableau.insertRow(-1)
	}
}
function affichageNotes() {}