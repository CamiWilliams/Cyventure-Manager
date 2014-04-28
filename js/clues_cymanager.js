function getClues()
{
	var jake = document.getElementById("jake"); 
	jake.innerHTML = " ";
	var i;
	var done = false;
	for (i = 0; i < 1000; i++) {
	
	
	var dataRef = new Firebase('https://cyventure-test.firebaseio.com/clues/' + (i+1));
	dataRef.on('value', function(snapshot) {
		 jake.innerHTML +=  "<td>" + snapshot.val().name + "</td>"
		 				+ " <td>" + snapshot.val().clue1 + "</td>"
		 				+ " <td>" + snapshot.val().clue2 + "</td>"
		 				+ " <td> (" + snapshot.val().latitude + ", "
		 				+  snapshot.val().longitude + ") </td></tr>";
	});
	
	
	}

}

function addClue() {
	var hint = document.getElementById("hintText"); 
	var clue = document.getElementById("clueText"); 
	var sel = document.getElementById('sel');
	var jake = document.getElementById("jake"); 
	
	var dataRef1 = new Firebase('https://cyventure-test.firebaseio.com/clues/');
	dataRef1.once('value', function(snapshot) {
		var x = snapshot.numChildren() + 3;
		
		var dataRef = new Firebase('https://cyventure-test.firebaseio.com/clues/');
		dataRef.child(x).set({clue1: clue.value, clue2: hint.value, longitude: getLong(sel.selectedIndex), latitude: getLat(sel.selectedIndex), name: sel.options[sel.selectedIndex].value});
		alert("Clue added!");
	});
}


function getLong(selected) {
	if(selected == 1) { //<option value="Administrative Services Building">Administrative Services Building</option>
		return -93.64543;
	}
	
	else if (selected == 2) { //<option value="Agronomy Hall">Agronomy Hall</option>
		return -93.64263;
	}
	
	else if(selected == 3) { //<option value="Alumni Center">Alumni Center</option>
		return -93.63859;
	}
	
	else if(selected == 4) { //<option value="Armory">Armory</option>
		return 	-93.65095;
	}
	
	else if(selected == 5) { //<option value="Atanasoff Hall">Atanasoff Hall</option>
		return	-93.64973;
	}
	
	else if(selected == 6) { //<option value="Barton Residence Hall">Barton Residence Hall</option>
		return -93.64154;
	}
	
	else if(selected == 7) { //<option value="Beardshear Hall">Beardshear Hall</option>
		return -93.64836;
	}
	
	else if(selected == 8) { //<option value="Bessey Hall">Bessey Hall</option>
		return -93.64457;
	}
	
	else if(selected == 9) { //<option value="Beyer Hall">Beyer Hall</option>
		return -93.65296;
	}
	
	else if(selected == 10) { //<option value="Birch Residence Hall">Birch Residence Hall</option>
		return -93.64155;
	}
	
	else if(selected == 11) { //<option value="Black Engineering">Black Engineering</option>
		return -93.65130;
	}
	
	else if(selected == 12) { //<option value="Buchanan Residence Hall">Buchanan Residence Hall</option>
		return 	-93.64388;
	}
	
	else if(selected == 13) { //<option value="Campanile">Campanile</option>
		return 	-93.64602;
	}
	
	else if(selected == 14) { //<option value="Carver Hall">Carver Hall</option>
		return -93.64829;
	}
	
	else if(selected == 15) { //<option value="Catt Hall">Catt Hall</option>
		return -93.64565;
	}
	
	else if(selected == 16) { //<option value="College of Design">College of Design</option>
		return -93.65322;
	}
	
	else if(selected == 17) { //<option value="Communications Building">Communications Building</option>
		return -93.65095;
	}
	
	else if(selected == 18) { //<option value="Coover Hall">Coover Hall</option>
		return -93.65093;
	}
	
	else if(selected == 19) { //<option value="Curtiss Hall">Curtiss Hall</option>
		return -93.64470;
	}
	
	else if(selected == 20) { //<option value="Davidson Hall">Davidson Hall</option>
		return -93.64950;
	}
	
	else if(selected == 21) { //<option value="Durham Center">Durham Center</option>
		return -93.64985;
	}
	
	else if(selected == 22) { //<option value="Eaton Residence Hall">Eaton Residence Hall</option>
		return -93.65302;
	}
	
	else if(selected == 23) { //<option value="Enrollment Services Center">Enrollment Services Center</option>
		return -93.64907;
	}
	
	else if(selected == 24) { //<option value="Family Resource Center">Family Resource Center</option>
		return -93.64426;
	}
	
	else if(selected == 25) { //<option value="Farm House">Farm House</option>
		return 	-93.64420;
	}
	
	else if(selected == 26) { //<option value="Fisher Theater">Fisher Theater</option>
		return -93.63794;
	}
	
	else if(selected == 27) { //<option value="Food Sciences Building">Food Sciences Building</option>
		return -93.64259;
	}
	
	else if(selected == 28) { //<option value="Forestry Greenhouse">Forestry Greenhouse</option>
		return -93.64098;
	}
	
	else if(selected == 29) { //<option value="Forker Building">Forker Building</option>
		return -93.64019;
	}
	
	else if(selected == 30) { //<option value="Frederiksen Court Community Center">Frederiksen Court Community Center</option>
		return -93.64278;
	}
	
	else if(selected == 31) { //<option value="Freeman Residence Hall">Freeman Residence Hall</option>
		return -93.64154;
	}
	
	else if(selected == 32) { //<option value="Friley Residence Hall">Friley Residence Hall</option>
		return -93.65036;
	}
	
	else if(selected == 33) { //<option value="General Services Building">General Services Building</option>
		return -93.64094;
	}
	
	else if(selected == 34) { //<option value="Genetics Laboratory">Genetics Laboratory</option>
		return -93.64732;
	}
	
	else if(selected == 35) { //<option value="Gerdin Business Building">Gerdin Business Building</option>
		return -93.64441;
	}
	
	else if(selected == 36) { //<option value="Gilman Hall">Gilman Hall</option>
		return -93.64862;
	}
	
	else if(selected == 37) { //<option value="Hach Hall">Hach Hall</option>
		return 	-93.64970;
	}
	
	else if(selected == 38) { //<option value="Hamilton Hall">Hamilton Hall</option>
		return -93.64193;
	}
	
	else if(selected == 39) { //<option value="Heady Hall">Heady Hall</option>
		return -93.64311;
	}
	
	else if(selected == 40) { //<option value="Helser Residence Hall">Helser Residence Hall</option>
		return 	-93.65180;
	}
	
	else if(selected == 41) { //<option value="Hilton Coliseum">Hilton Coliseum</option>
		return -93.63470;
	}
	
	else if(selected == 42) { //<option value="Hixson-Lied Student Success Center">Hixson-Lied Student Success Center</option>
		return -93.63947;
	}
	
	else if(selected == 43) { //<option value="Hoover Hall">Hoover Hall</option>
		return -93.65110;
	}
	
	else if(selected == 44) { //<option value="Horse Barn">Horse Barn</option>
		return -93.64364;
	}
	
	else if(selected == 45) { //<option value="Horticulture Hall">Horticulture Hall</option>
		return -93.64468;
	}
	
	else if(selected == 46) { //<option value="Howe Hall">Howe Hall</option>
		return 	-93.65292;
	}
	
	else if(selected == 47) { //<option value="Hub">Hub</option>
		return -93.64848;
	}
	
	else if(selected == 48) { //<option value="Human Nutritional Sciences Building">Human Nutritional Sciences Building</option>
		return -93.64748;
	}
	
	else if(selected == 49) { //<option value="Ice Arena">Ice Arena</option>
		return -93.65085;
	}
	
	else if(selected == 50) { //<option value="Industrial Education II">Industrial Education II</option>
		return -93.64504;
	}
	
	else if(selected == 51) { //<option value="Insectary">Insectary</option>
		return -93.64626;
	}
	
	else if(selected == 52) { //<option value="Jack Trice Stadium">Jack Trice Stadium</option>
		return -93.63565;
	}
	
	else if(selected == 53) { //<option value="Jischke Honors Building">Jischke Honors Building</option>
		return -93.64478;
	}
	
	else if(selected == 54) { //<option value="Kildee Hall">Kildee Hall</option>
		return 	-93.64402;
	}
	
	else if(selected == 55) { //<option value="Knapp-Storms Dining Complex">Knapp-Storms Dining Complex</option>
		return -93.65047;
	}
	
	else if(selected == 56) { //<option value="Knoll">Knoll</option>
		return -93.64356;
	}
	
	else if(selected == 57) { //<option value="Lagomarcino Hall">Lagomarcino Hall</option>
		return -93.64532;
	}
	
	else if(selected == 58) { //<option value="Larch Residence Hall">Larch Residence Hall</option>
		return -93.63788;
	}
	
	else if(selected == 59) { //<option value="LeBaron Hall">LeBaron Hall</option>
		return -93.64709;
	}
	
	else if(selected == 60) { //<option value="Lied Recreation Athletic Facility">Lied Recreation Athletic Facility</option>
		return -93.63705;
	}
	
	else if(selected == 61) { //<option value="Linden Residence Hall">Linden Residence Hall</option>
		return -93.64012;
	}
	
	else if(selected == 62) { //<option value="Lyon Residence Hall">Lyon Residence Hall</option>
		return -93.64235;
	}
	
	else if(selected == 63) { //<option value="MacKay Hall">MacKay Hall</option>
		return -93.64634;
	}
	
	else if(selected == 64) { //<option value="Maple Residence Hall">Maple Residence Hall</option>
		return -93.63860;
	}
	
	else if(selected == 65) { //<option value="Maple-Willow-Larch Commons">Maple-Willow-Larch Commons</option>
		return -93.63829;
	}
	
	else if(selected == 66) { //<option value="Marston Hall">Marston Hall</option>
		return -93.64984;
	}
	
	else if(selected == 67) { //<option value="Martin Residence Hall">Martin Residence Hall</option>
		return -93.65295;
	}
	
	else if(selected == 68) { //<option value="Meats Laboratory">Meats Laboratory</option>
		return -93.64404;
	}
	
	else if(selected == 69) { //<option value="Memorial Union">Memorial Union</option>
		return -93.64586;
	}
	
	else if(selected == 70) { //<option value="Metals Development Building">Metals Development Building</option>
		return -93.64861;
	}
	
	else if(selected == 71) { //<option value="Molecular Biology Building">Molecular Biology Building</option>
		return -93.64968;
	}
	
	else if(selected == 72) { //<option value="Morrill Hall">Morrill Hall</option>
		return -93.64787;
	}
	
	else if(selected == 73) { //<option value="Music Hall">Music Hall</option>
		return -93.64820;
	}
	
	else if(selected == 74) { //<option value="Nuclear Engineering Laboratory">Nuclear Engineering Laboratory</option>
		return -93.65152;
	}
	
	else if(selected == 75) { //<option value="Oak-Elm Residence Hall">Oak-Elm Residence Hall</option>
		return -93.64016;
	}
	
	else if(selected == 76) { //<option value="Office and Laboratory Building">Office and Laboratory Building</option>
		return -93.64799;
	}
	
	else if(selected == 77) { //<option value="Parks Library">Parks Library</option>
		return -93.64896;
	}
	
	else if(selected == 78) { //<option value="Pearson Hall">Pearson Hall</option>
		return -93.64983;
	}
	
	else if(selected == 79) { //<option value="Physics Hall">Physics Hall</option>
		return -93.64735;
	}
	
	else if(selected == 80) { //<option value="Reiman Gardens Conservatory">Reiman Gardens Conservatory</option>
		return -93.63864;
	}
	
	else if(selected == 81) { //<option value="Ross Hall">Ross Hall</option>
		return -93.64414;
	}
	
	else if(selected == 82) { //<option value="Scheman Building">Scheman Building</option>
		return -93.63641;
	}
	
	else if(selected == 83) { //<option value="Science Hall">Science Hall</option>
		return -93.64628;
	}
	
	else if(selected == 84) { //<option value="Science Hall II">Science Hall II</option>
		return -93.64622;
	}
	
	else if(selected == 85) { //<option value="Seed Science Building">Seed Science Building</option>
		return -93.64195;
	}
	
	else if(selected == 86) { //<option value="Sloss House">Sloss House</option>
		return -93.64486;
	}
	
	else if(selected == 87) { //<option value="Snedecor Hall">Snedecor Hall</option>
		return -93.64970;
	}
	
	else if(selected == 88) { //<option value="Spedding Hall">Spedding Hall</option>
		return -93.64838;
	}
	
	else if(selected == 89) { //<option value="State Gymnasium">State Gymnasium</option>
		return -93.65375;
	}
	
	else if(selected == 90) { //<option value="Stephens Auditorium">Stephens Auditorium</option>
		return -93.63789;
	}
	
	else if(selected == 91) { //<option value="Student Services">Student Services</option>
		return 	-93.64999;
	}
	
	else if(selected == 92) { //<option value="Sweeney Hall">Sweeney Hall</option>
		return -93.65098;
	}
	
	else if(selected == 93) { //<option value="Thielen Student Health Center">Thielen Student Health Center</option>
		return -93.65392;
	}
	
	else if(selected == 94) { //<option value="Troxel Hall">Troxel Hall</option>
		return -93.64394;
	}
	
	else if(selected == 95) { //<option value="Union Drive Community Center">Union Drive Community Center</option>
		return -93.65150;
	}
	
	else if(selected == 96) { //<option value="Visitor Information Booth">Visitor Information Booth</option>
		return -93.63200;
	}
	
	else if(selected == 97) { //<option value="Wallace Residence Hall">Wallace Residence Hall</option>
		return -93.64991;
	}
	
	else if(selected == 98) { //<option value="Wallace-Wilson Commons">Wallace-Wilson Commons</option>
		return -93.65052;
	}
	
	else if(selected == 99) { //<option value="Welch Residence Hall">Welch Residence Hall</option>
		return -93.64201;
	}
	
	else if(selected == 100) { //<option value="Wilhelm Hall">Wilhelm Hall</option>
		return -93.64735;
	}
	
	else if(selected == 101) { //<option value="Willow Residence Hall">Willow Residence Hall</option>
		return -93.63757;
	}
	
	else if(selected == 102) { //<option value="Wilson Residence Hall">Wilson Residence Hall</option>
		return -93.65100;
	}
	
	else {
		
	}
}

function getLat(selected) {
	if(selected == 1) { //<option value="Administrative Services Building">Administrative Services Building</option>
		return 42.03450;
	}
	
	else if (selected == 2) { //<option value="Agronomy Hall">Agronomy Hall</option>
		return 42.02824;
	}
	
	else if(selected == 3) { //<option value="Alumni Center">Alumni Center</option>
		return 42.01814;
	}
	
	else if(selected == 4) { //<option value="Armory">Armory</option>
		return 	42.02965;
	}
	
	else if(selected == 5) { //<option value="Atanasoff Hall">Atanasoff Hall</option>
		return	42.02820;
	}
	
	else if(selected == 6) { //<option value="Barton Residence Hall">Barton Residence Hall</option>
		return 42.02439;
	}
	
	else if(selected == 7) { //<option value="Beardshear Hall">Beardshear Hall</option>
		return 42.02601;
	}
	
	else if(selected == 8) { //<option value="Bessey Hall">Bessey Hall</option>
		return 42.02851;
	}
	
	else if(selected == 9) { //<option value="Beyer Hall">Beyer Hall</option>
		return 42.02591;
	}
	
	else if(selected == 10) { //<option value="Birch Residence Hall">Birch Residence Hall</option>
		return 42.02363;
	}
	
	else if(selected == 11) { //<option value="Black Engineering">Black Engineering</option>
		return 42.02625;
	}
	
	else if(selected == 12) { //<option value="Buchanan Residence Hall">Buchanan Residence Hall</option>
		return 	42.02236;
	}
	
	else if(selected == 13) { //<option value="Campanile">Campanile</option>
		return 	42.02544;
	}
	
	else if(selected == 14) { //<option value="Carver Hall">Carver Hall</option>
		return 42.02526;
	}
	
	else if(selected == 15) { //<option value="Catt Hall">Catt Hall</option>
		return 42.02800;
	}
	
	else if(selected == 16) { //<option value="College of Design">College of Design</option>
		return 42.02854;
	}
	
	else if(selected == 17) { //<option value="Communications Building">Communications Building</option>
		return 42.03086;
	}
	
	else if(selected == 18) { //<option value="Coover Hall">Coover Hall</option>
		return 42.02844;
	}
	
	else if(selected == 19) { //<option value="Curtiss Hall">Curtiss Hall</option>
		return 42.02619;
	}
	
	else if(selected == 20) { //<option value="Davidson Hall">Davidson Hall</option>
		return 42.02965;
	}
	
	else if(selected == 21) { //<option value="Durham Center">Durham Center</option>
		return 42.02747;
	}
	
	else if(selected == 22) { //<option value="Eaton Residence Hall">Eaton Residence Hall</option>
		return 42.02465;
	}
	
	else if(selected == 23) { //<option value="Enrollment Services Center">Enrollment Services Center</option>
		return 42.02513;
	}
	
	else if(selected == 24) { //<option value="Family Resource Center">Family Resource Center</option>
		return 42.03940;
	}
	
	else if(selected == 25) { //<option value="Farm House">Farm House</option>
		return 42.02708;
	}
	
	else if(selected == 26) { //<option value="Fisher Theater">Fisher Theater</option>
		return 42.02156;
	}
	
	else if(selected == 27) { //<option value="Food Sciences Building">Food Sciences Building</option>
		return 42.02679;
	}
	
	else if(selected == 28) { //<option value="Forestry Greenhouse">Forestry Greenhouse</option>
		return 42.03000;
	}
	
	else if(selected == 29) { //<option value="Forker Building">Forker Building</option>
		return 42.02690;
	}
	
	else if(selected == 30) { //<option value="Frederiksen Court Community Center">Frederiksen Court Community Center</option>
		return 42.03385;
	}
	
	else if(selected == 31) { //<option value="Freeman Residence Hall">Freeman Residence Hall</option>
		return 42.02480;
	}
	
	else if(selected == 32) { //<option value="Friley Residence Hall">Friley Residence Hall</option>
		return 42.02391;
	}
	
	else if(selected == 33) { //<option value="General Services Building">General Services Building</option>
		return 42.02811;
	}
	
	else if(selected == 34) { //<option value="Genetics Laboratory">Genetics Laboratory</option>
		return 42.03090;
	}
	
	else if(selected == 35) { //<option value="Gerdin Business Building">Gerdin Business Building</option>
		return 42.02531;
	}
	
	else if(selected == 36) { //<option value="Gilman Hall">Gilman Hall</option>
		return 42.02951;
	}
	
	else if(selected == 37) { //<option value="Hach Hall">Hach Hall</option>
		return 	42.03021;
	}
	
	else if(selected == 38) { //<option value="Hamilton Hall">Hamilton Hall</option>
		return 42.02756;
	}
	
	else if(selected == 39) { //<option value="Heady Hall">Heady Hall</option>
		return 42.02636;
	}
	
	else if(selected == 40) { //<option value="Helser Residence Hall">Helser Residence Hall</option>
		return 	42.02437;
	}
	
	else if(selected == 41) { //<option value="Hilton Coliseum">Hilton Coliseum</option>
		return 42.02098;
	}
	
	else if(selected == 42) { //<option value="Hixson-Lied Student Success Center">Hixson-Lied Student Success Center</option>
		return 42.02408;
	}
	
	else if(selected == 43) { //<option value="Hoover Hall">Hoover Hall</option>
		return 42.02674;
	}
	
	else if(selected == 44) { //<option value="Horse Barn">Horse Barn</option>
		return 42.03098;
	}
	
	else if(selected == 45) { //<option value="Horticulture Hall">Horticulture Hall</option>
		return 42.02792;
	}
	
	else if(selected == 46) { //<option value="Howe Hall">Howe Hall</option>
		return 	42.02679;
	}
	
	else if(selected == 47) { //<option value="Hub">Hub</option>
		return 42.02723;
	}
	
	else if(selected == 48) { //<option value="Human Nutritional Sciences Building">Human Nutritional Sciences Building</option>
		return 42.02811;
	}
	
	else if(selected == 49) { //<option value="Ice Arena">Ice Arena</option>
		return 42.00924;
	}
	
	else if(selected == 50) { //<option value="Industrial Education II">Industrial Education II</option>
		return 42.03103;
	}
	
	else if(selected == 51) { //<option value="Insectary">Insectary</option>
		return 42.03083;
	}
	
	else if(selected == 52) { //<option value="Jack Trice Stadium">Jack Trice Stadium</option>
		return 42.01393;
	}
	
	else if(selected == 53) { //<option value="Jischke Honors Building">Jischke Honors Building</option>
		return 42.02721;
	}
	
	else if(selected == 54) { //<option value="Kildee Hall">Kildee Hall</option>
		return 	42.02954;
	}
	
	else if(selected == 55) { //<option value="Knapp-Storms Dining Complex">Knapp-Storms Dining Complex</option>
		return 42.01542;
	}
	
	else if(selected == 56) { //<option value="Knoll">Knoll</option>
		return 42.02358;
	}
	
	else if(selected == 57) { //<option value="Lagomarcino Hall">Lagomarcino Hall</option>
		return 42.02989;
	}
	
	else if(selected == 58) { //<option value="Larch Residence Hall">Larch Residence Hall</option>
		return 42.02328;
	}
	
	else if(selected == 59) { //<option value="LeBaron Hall">LeBaron Hall</option>
		return 42.02843;
	}
	
	else if(selected == 60) { //<option value="Lied Recreation Athletic Facility">Lied Recreation Athletic Facility</option>
		return 42.02666;
	}
	
	else if(selected == 61) { //<option value="Linden Residence Hall">Linden Residence Hall</option>
		return 42.02311;
	}
	
	else if(selected == 62) { //<option value="Lyon Residence Hall">Lyon Residence Hall</option>
		return 42.02448;
	}
	
	else if(selected == 63) { //<option value="MacKay Hall">MacKay Hall</option>
		return 42.02868;
	}
	
	else if(selected == 64) { //<option value="Maple Residence Hall">Maple Residence Hall</option>
		return 42.02353;
	}
	
	else if(selected == 65) { //<option value="Maple-Willow-Larch Commons">Maple-Willow-Larch Commons</option>
		return 42.02391;
	}
	
	else if(selected == 66) { //<option value="Marston Hall">Marston Hall</option>
		return 42.02681;
	}
	
	else if(selected == 67) { //<option value="Martin Residence Hall">Martin Residence Hall</option>
		return 42.02396;
	}
	
	else if(selected == 68) { //<option value="Meats Laboratory">Meats Laboratory</option>
		return 42.03014;
	}
	
	else if(selected == 69) { //<option value="Memorial Union">Memorial Union</option>
		return 42.02363;
	}
	
	else if(selected == 70) { //<option value="Metals Development Building">Metals Development Building</option>
		return 42.03113;
	}
	
	else if(selected == 71) { //<option value="Molecular Biology Building">Molecular Biology Building</option>
		return 42.03100;
	}
	
	else if(selected == 72) { //<option value="Morrill Hall">Morrill Hall</option>
		return 42.02743;
	}
	
	else if(selected == 73) { //<option value="Music Hall">Music Hall</option>
		return 42.02465;
	}
	
	else if(selected == 74) { //<option value="Nuclear Engineering Laboratory">Nuclear Engineering Laboratory</option>
		return 42.02754;
	}
	
	else if(selected == 75) { //<option value="Oak-Elm Residence Hall">Oak-Elm Residence Hall</option>
		return 42.02513;
	}
	
	else if(selected == 76) { //<option value="Office and Laboratory Building">Office and Laboratory Building</option>
		return 42.02947;
	}
	
	else if(selected == 77) { //<option value="Parks Library">Parks Library</option>
		return 42.02796;
	}
	
	else if(selected == 78) { //<option value="Pearson Hall">Pearson Hall</option>
		return 42.02591;
	}
	
	else if(selected == 79) { //<option value="Physics Hall">Physics Hall</option>
		return 42.02935;
	}
	
	else if(selected == 80) { //<option value="Reiman Gardens Conservatory">Reiman Gardens Conservatory</option>
		return 42.01181;
	}
	
	else if(selected == 81) { //<option value="Ross Hall">Ross Hall</option>
		return 42.02661;
	}
	
	else if(selected == 82) { //<option value="Scheman Building">Scheman Building</option>
		return 42.02148;
	}
	
	else if(selected == 83) { //<option value="Science Hall">Science Hall</option>
		return 42.02945;
	}
	
	else if(selected == 84) { //<option value="Science Hall II">Science Hall II</option>
		return 42.03020;
	}
	
	else if(selected == 85) { //<option value="Seed Science Building">Seed Science Building</option>
		return 42.02923;
	}
	
	else if(selected == 86) { //<option value="Sloss House">Sloss House</option>
		return 42.02568;
	}
	
	else if(selected == 87) { //<option value="Snedecor Hall">Snedecor Hall</option>
		return 42.02860;
	}
	
	else if(selected == 88) { //<option value="Spedding Hall">Spedding Hall</option>
		return 42.03024;
	}
	
	else if(selected == 89) { //<option value="State Gymnasium">State Gymnasium</option>
		return 42.02496;
	}
	
	else if(selected == 90) { //<option value="Stephens Auditorium">Stephens Auditorium</option>
		return 42.02025;
	}
	
	else if(selected == 91) { //<option value="Student Services">Student Services</option>
		return 	42.02533;
	}
	
	else if(selected == 92) { //<option value="Sweeney Hall">Sweeney Hall</option>
		return 42.02782;
	}
	
	else if(selected == 93) { //<option value="Thielen Student Health Center">Thielen Student Health Center</option>
		return 42.02584;
	}
	
	else if(selected == 94) { //<option value="Troxel Hall">Troxel Hall</option>
		return 42.02780;
	}
	
	else if(selected == 95) { //<option value="Union Drive Community Center">Union Drive Community Center</option>
		return 42.02497;
	}
	
	else if(selected == 96) { //<option value="Visitor Information Booth">Visitor Information Booth</option>
		return 42.01692;
	}
	
	else if(selected == 97) { //<option value="Wallace Residence Hall">Wallace Residence Hall</option>
		return 42.01424;
	}
	
	else if(selected == 98) { //<option value="Wallace-Wilson Commons">Wallace-Wilson Commons</option>
		return 42.01416;
	}
	
	else if(selected == 99) { //<option value="Welch Residence Hall">Welch Residence Hall</option>
		return 42.02361;
	}
	
	else if(selected == 100) { //<option value="Wilhelm Hall">Wilhelm Hall</option>
		return 42.03029;
	}
	
	else if(selected == 101) { //<option value="Willow Residence Hall">Willow Residence Hall</option>
		return 42.02394;
	}
	
	else if(selected == 102) { //<option value="Wilson Residence Hall">Wilson Residence Hall</option>
		return 42.01386;
	}
	
	else {
		
	}
}

function getAbout() {
	var text = document.getElementById("aboutText"); 
	
    myDataRef = new Firebase("https://cyventure-manager.firebaseio.com/about");
    myDataRef.on('value', function(snapshot) {
  		text.value = snapshot.val();
  		
	});
}

function publishAbout() {
	var name = document.getElementById("aboutText").value;

    myDataRef = new Firebase("https://cyventure-manager.firebaseio.com/about");


	myDataRef.set(name);
}
