var myDataRef;
var path = "https://cyventure-manager.firebaseio.com/bugs";
var currentN;
var currentT;

var count = 0;

function popitup(url) {
	newwindow = window.open(url, 'name', 'height=500,width=500');
	if (window.focus) {
		newwindow.focus();
	}

	return false;
}

function addBug() {

	var name = $('#title').val();
	var text = $('#desc').val();
	var priority = document.getElementById("selP");
	var status = document.getElementById("selS");
	//sel.options[sel.selectedIndex].value
	var s;

	if (status.selectedIndex == 1) {
		s = 1;
	} else {
		s = 2;
	}
	myDataRef = new Firebase("https://cyventure-manager.firebaseio.com/bugs/" + name + text);
	var da = new Date();
	var d = (da.getMonth() + 1) + "/" + da.getDate() + "/" + (da.getYear() - 100);
	myDataRef.setWithPriority({
		name : name,
		text : text,
		priority : priority.selectedIndex,
		status : s,
		date : d
	}, priority.selectedIndex);

	window.close();
}

var mainNode = new Firebase(path);

function displayChatMessage(date, name, text, priority, status) {

	var fill = document.getElementById("myTable");
	var red = "bgcolor= '#FFCCCC'";
	var green = "bgcolor= '#CCFFCC'";
	var row;
	if (status == 2) {
		row = '<tr ' + green + '><td class="date">' + date + '</td><td class="name">' + name + '</td><td class="text">' + text + '</td ><td class="priority">' + priority + '</td >';
	} else if (status == 1) {
		row = '<tr ' + red + '><td class="date">' + date + '</td><td class="name">' + name + '</td><td class="text">' + text + '</td ><td class="priority">' + priority + '</td >';
	} else {
		row = '<tr><td class="name">' + name + '</td><td class="text">' + text + '</td >';
	}
	//<td class="text">'+numChildren+'</td >
	//fill.innerHTML += row;
	$(row).insertAfter("#myTable tr:first");
};

var addChild = function(snapshot) {

	if (snapshot.val().name != undefined && snapshot.val().text != undefined) {
		displayChatMessage(snapshot.val().date, snapshot.val().name, snapshot.val().text, snapshot.val().priority, snapshot.val().status);
	}
};

$("#submit").click(function() {

	var name = $('#name').val();
	var text = $('#message').val();

	myDataRef = new Firebase(path + '/' + name + text);

	myDataRef.setWithPriority({
		name : name,
		text : text,
		status : 3
	}, new Date().getTime());
	$('#message').val("");

});

$("#back").click(function() {

	if (mainNode.parent() != undefined) {
		path = mainNode.parent().toString();

		mainNode.off('child_added');
		$("#myTable").empty();
		$('#myTable').append('<tr> <td><h4>Date</h4></td> <td><h4>Bug Name</h4></td> <td><h4>Description</h4></td> <td><h4>Priority</h4></td> </tr>');

		path = mainNode.parent().toString();
		mainNode = new Firebase(path);
		mainNode.on('child_added', addChild);

		$('#innerP').replaceWith('<div id="innerP"></div>');
	}

});

$("#home").click(function() {
	count = 0;
	var box = document.getElementById('commentBox');
	box.style.visibility = "hidden";

	var swi = document.getElementById("switch");
	swi.style.visibility = "hidden";

	if (mainNode.parent() != undefined) {

		mainNode.off('child_added');
		$("#myTable").empty();
		$('#myTable').append('<tr> <td><h4>Date</h4></td> <td><h4>Bug Name</h4></td> <td><h4>Description</h4></td> <td><h4>Priority</h4></td> </tr>');

		path = "https://cyventure-manager.firebaseio.com/bugs";
		mainNode = new Firebase(path);
		mainNode.on('child_added', addChild);

		$('#innerP').replaceWith('<div id="innerP"></div>');
	}
});

mainNode.on('child_added', addChild);

$("#myTable").on('click', 'td', function() {

	if (count == 1) {

	} else {

		var box = document.getElementById('commentBox');
		box.style.visibility = "visible";

		var swi = document.getElementById("switch");
		swi.style.visibility = "visible";

		var name = $(this).closest('tr').children('td.name').text();
		var text = $(this).closest('tr').children('td.text').text();
		var date = $(this).closest('tr').children('td.date').text();
		var status = $(this).closest('tr').children('td.priority').text();
		currentN = name;
		currentT = text;

		mainNode.off('child_added');
		$("#myTable").empty();

		$('#myTable').append('<tr> <td><h4>Name</h4></td> <td><h4>Comment</h4></td></tr>');

		$('#innerP').replaceWith('<div id="innerP" class="row-fluid alert alert-warning"><h5>Bug</h5><div class="span2 ">' + name + '</div ><div class="span6">' + text + '</div></div>');
		path = path + '/' + name + text;

		mainNode = new Firebase(path);

		var defRef = new Firebase("https://cyventure-manager.firebaseio.com/bugs/" + currentN + currentT);
		defRef.on('value', function(snapshot) {
			if (snapshot.val().status == 1) {
				$(open_button).addClass('active');
				$(closed_button).removeClass('active');
			} else {
				$(closed_button).addClass('active');
				$(open_button).removeClass('active');

			}
		});

		mainNode.on('child_added', addChild);

		count = 1;
	}
});

function myClose() {
	$(closed_button).addClass('active');
	$(open_button).removeClass('active');

	var defRef = new Firebase("https://cyventure-manager.firebaseio.com/bugs/" + currentN + currentT);

	defRef.update({
		status : 2
	});

}

function myOpen() {
	$(open_button).addClass('active');
	$(closed_button).removeClass('active');

	var defRef = new Firebase("https://cyventure-manager.firebaseio.com/bugs/" + currentN + currentT);

	defRef.update({
		status : 1
	});

}

