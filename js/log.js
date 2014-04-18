var map = {};

function onLoginButtonClicked() {
	var ID = document.getElementById('netid').value;
	var password = document.getElementById('pass').value;
	
	if(ID in map && map[ID] == password) {
		//alert('fred’s first name is ');
		window.open('workspace.html','Cyventure Manager',' ');
		//window.location.href = "http://stackoverflow.com";
	}
	
	else {
		alert('Incorrect login');
	}
	
	/*var dataRef = new Firebase("https://cyventure-manager.firebaseio.com/managers/" + ID.value);
	
	dataRef.once('value', function(snapshot) {
		var password = document.getElementById('pass');
	
		if(password.value == snapshot.val()) {
			alert('fred’s first name is ' + snapshot.val());
			location.href = "workspace.html";
		}
  	});*/
}

function init() {
	var dataRef = new Firebase("https://cyventure-manager.firebaseio.com/info/");
	
	dataRef.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
  			// This code will be called twice.
  			var name = childSnapshot.name();
  			var childData = childSnapshot.val().password;
  			map[name] = childData;
  			// name will be 'fred' the first time and 'wilma' the second time.
  			// childData will be the actual contents of the child.
			});
  	});
}
