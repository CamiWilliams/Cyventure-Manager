function popitup(url) {
	newwindow = window.open(url, 'name', 'height=500,width=500');
	if (window.focus) {
		newwindow.focus();
	}
	
	return false;
}

function populate() {

	var fill = document.getElementById("fillThis");
	fill.innerHTML = " ";

	var dataRef = new Firebase('https://cyventure-manager.firebaseio.com/info');
	dataRef.on('value', function(snapshot) {
		fill.innerHTML = " ";
		
		snapshot.forEach(function(childSnapshot) {
			
			fill.innerHTML += "<div class = 'col-sm-6 col-md-4'> <div class='thumbnail'> <div class='caption'>"
					   + "<h2>" + childSnapshot.val().name + "</h2>"
					   + "<h3> <i>" + childSnapshot.val().title + "</i></h3>"
					   + "<p>" + childSnapshot.val().phone + "</p>"
					   + "<p>" + childSnapshot.val().email + "</p>" 
					   + "<a href='mailto:" + childSnapshot.val().email + "?subject=Cyventure%20Manager&body=Hello%20fellow%20manager!' class='btn btn-primary' role='button'>Contact</a>"
					   + "<a href='#' class='btn btn-default' role='button' onclick = 'removeMana("+ childSnapshot.name() +")' >Remove</a>"
					   + "</div> </div> </div>";
					});
	});

}

function addMana() {
	var first = document.getElementById("first"); 
	var last = document.getElementById("last"); 
	var pass = document.getElementById('pass');
	var email = document.getElementById("email");
	var phone = document.getElementById("phone");
	var netid = document.getElementById("netid"); 
	var sel = document.getElementById('sel');
	
	dataRef1 = new Firebase("https://cyventure-manager.firebaseio.com/info/" + netid.value);
	dataRef1.set({name: first.value + " " + last.value, password: pass.value, email: email.value, phone: phone.value, title: sel.options[sel.selectedIndex].value});
	
	window.close();
}

function removeMana(netid) {
	
	var agree=confirm("Are you sure you want to remove this manager?");
	if (agree) {
	dataRef1 = new Firebase("https://cyventure-manager.firebaseio.com/info/" + netid);
	dataRef1.remove();	
	populate();
	}
}
