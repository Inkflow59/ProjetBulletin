function saisieNotes() {
	const COEFE1=4
	const COEFE2=3
	const COEFE3=3
	const COEFE4=4
	const COEFE5=4
	const COEFE6=4
	const longueurBase=COEFE1+COEFE2+COEFE3+COEFE4+COEFE5+COEFE6
	
	var E1=document.getElementById("Input1").value;
	var E2=document.getElementById("Input2").value;
	var E3=document.getElementById("Input3").value;
	var E4=document.getElementById("Input4").value;
	var E5=document.getElementById("Input5").value;
	var E6=document.getElementById("Input6").value;
	
	var EF1=document.getElementById("EInput1").value;
	var EF2=document.getElementById("EInput2").value;
	var EF3=document.getElementById("EInput3").value;
	
	var longueurTotale=longueurBase
	var notesBase=[E1,E2,E3,E4,E5,E6]
	var tab=[E1*COEFE1,E2*COEFE2,E3*COEFE3,E4*COEFE4,E5*COEFE5,E6*COEFE6]
	
	if (EF1!="" && EF1<10) {
		tab.push(EF1)
		notesBase.push(EF1)
		longueurTotale++
	}
	if (EF2!="" && EF2<10) {
		tab.push(EF2)
		notesBase.push(EF2)
		longueurTotale++
	}
	if (EF3!="" && EF3<10) {
		tab.push(EF3)
		notesBase.push(EF3)
		longueurTotale++
	}
	var tabMoyenne=[]
	for (let i=0; i<tab.length; i++) {
		tabMoyenne[i]=parseFloat(tab[i])
	}
	
	var moyenne=0
	for (let j=0; j<tabMoyenne.length; j++) {
		moyenne=moyenne+tabMoyenne[j]
	}
	moyenne=moyenne/longueurTotale
	if (moyenne<10) {
		moyenne=moyenne.toPrecision(3)
	}	else {
		moyenne=moyenne.toPrecision(4)
	}
	
	var mention=""
	if (moyenne<10) {
		mention="Ajourné"
	}	else if (moyenne<12) {
		mention="Passable"
	}	else if (moyenne<14) {
		mention="Assez bien"
	}	else if (moyenne<16) {
		mention="Bien"
	}	else {
		mention="Très bien"
	}
	
	sessionStorage.setItem("notes",notesBase)
	sessionStorage.setItem("moyenne",moyenne)
	sessionStorage.setItem("mention",mention)
	}
