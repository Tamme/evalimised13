
	$(function() {
		$('#large-img').hide();
		$('#large-img').load( function() {
		$('#loader').hide();
		$('#large-img').show();
		} );
		});
	
		var candidateList = "<h3>Kandidaatide nimekiri</h3>";
		var candidateOne = "<h3>Kandidaadi info</h3>";

	function getPerson(id) {
		$(document).ready(function(){
			
				var $id = id;
				$.get("CandidateServlet", {values:$id}, function(items) { 
					var text = "<table class='candidateInfo' border='1'>" +
						"<tr><th>Isiku (isiku)kood</th><td>" + items[0].code + "</td><tr>" +
						"<tr><th>Isiku eesnimi</th><td>" + items[0].first + "</td><tr>" +
						"<tr><th>Isiku perenimi</th><td>" + items[0].last + "</td><tr>" + 
						"<tr><th>Erakonna lühend</th><td>" + items[0].short  + "</td><tr>" +
						"<tr><th>Erakonna nimi</th><td>" + items[0].name  + "</td><tr>" +
						"<tr><th>Piirkonna nimi</th><td>" + items[0].area + "</td><tr>" +
						"<tr><th>Valimis nr</th><td>" + items[0].id + "</td><tr>" + "</table>";
					$('#list').html(text);
				});
				$('#candHeading').html(candidateOne);
			
		});
	}		
		
	$(document).ready(function(){
		$('#candidateForm').submit(function(e) {
			e.preventDefault(); 
			var party = $("#partyID option:selected").val();
			var area = $("#areas option:selected").val();
		    var $param = party + " " + area;
			
			if (area == 'Eesti' && party == 'allParties') {
			    $.get("CandidateServlet", {values:$param}, function(items) {
			    	var text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Piirkond</th><th>Isikukood</th><th>Erakonna nimi</th><th>Erakonna lühend</th><th></th></tr>";
					for (var i = 0; i < items.length; i++) {
						text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].area + 
							"</td><td>" + items[i].code + "</td><td>" + items[i].name + 
							"</td><td>" + items[i].short +
							"</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
					}
					text += "</table>";
					$('#list').html(text);
				});
				$('#candHeading').html(candidateList);
			}
			else if (area == 'Eesti' && party != 'allParties'){
			    $.get("CandidateServlet", {values:$param}, function(items) {
			    	var text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Piirkond</th><th>Isikukood</th><th></th></tr>";
					for (var i = 0; i < items.length; i++) {
						text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].area + 
							"</td><td>" + items[i].code +
							"</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
					}
					text += "</table>";
					$('#list').html(text);
				});
				$('#candHeading').html(candidateList);
				}
			else if (area != 'Eesti' && party == 'allParties') {
				$.get("CandidateServlet", {values:$param}, function(items) {
			    	var text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Isikukood</th><th>Erakonna nimi</th><th>Erakonna lühend</th><th></th></tr>";
					for (var i = 0; i < items.length; i++) {
						text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].code + "</td><td>" + items[i].name + 
							"</td><td>" + items[i].short +
							"</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
					}
					text += "</table>";
					$('#list').html(text);
				});
				$('#candHeading').html(candidateList);
			}
			else {
			    $.get("CandidateServlet", {values:$param}, function(items) {
			    	var text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Isikukood</th><th></th></tr>";
					for (var i = 0; i < items.length; i++) {
						text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].code + "</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
					}
					text += "</table>";
					$('#list').html(text);
				});
				$('#candHeading').html(candidateList);
			}
		});
	});
		
//	    $.get("CandidateServlet", {values:$param}, function(items) {
//    	var text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Piirkond</th><th>Isikukood</th><th>Erakonna nimi</th><th>Erakonna lühend</th><th></th></tr>";
//		for (var i = 0; i < items.length; i++) {
//			text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].area + 
//				"</td><td>" + items[i].code + "</td><td>" + items[i].name + 
//				"</td><td>" + items[i].short +
//				"</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
//		}
//		text += "</table>";
//		$('#list').html(text);
//	});
//	$('#candHeading').html(candidateList);
//});		