
	$(function() {
		$('#large-img').hide();
		$('#large-img').load( function() {
		$('#loader').hide();
		$('#large-img').show();
		} );
		});
	
		var candidateList = "<h3>Kandidaatide nimekiri</h3>";
		var candidateOne = "<h3>Kandidaadi info</h3>";
		
		function getPerson() {
			$(document).ready(function(){
				$.getJSON('candidate.real.json', function(data) {
					var items = data;
					var text = "<table class='candidateInfo' border='1'>" +
						"<tr><th>Isiku (isiku)kood</th><td>" + items.person.id + "</td><tr>" +
						"<tr><th>Isiku nimi</th><td>" + items.person.name + "</td><tr>" +
						"<tr><th>Valimisnumber</th><td>" + items.id + "</td><tr>" + 
						"<tr><th>Erakonna lühend</th><td>" + items.party.id  + "</td><tr>" +
						"<tr><th>Erakonna nimi</th><td>" + items.party.name  + "</td><tr>" +
						"<tr><th>Piirkonna lühend</th><td>" + items.region.id + "</td><tr>" +
						"<tr><th>Piirkonna nimi</th><td>" + items.region.name + "</td><tr>" + "</table>";
						
					$('#list').html(text);
				});
				$('#candHeading').html(candidateOne);
			});
		}

		$(document).ready(function(){
			$.getJSON('findCandidatesByPartyAndRegion.json', function(data) {
				var items = data;
				var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th>Piirkonna lühend</th><th>Piirkonna nimi</th></th><th>Erakonna lühend</th><th>Erakonna nimi</th><th></th></tr>";
				for (var i = 0; i < items.candidates.length; i++) {
					text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + 
						"</td><td>" + items.candidates[i].region.id + "</td><td>" + items.candidates[i].region.name +
						"</td><td>" + items.candidates[i].party.id + "</td><td>" + items.candidates[i].party.name + "</td><td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
				}
				text += "</table>";
				$('#list').html(text);
			});
			$('#candHeading').html(candidateList);
		});

		$(document).ready(function(){
			$('#candidateForm').submit(function(e) {
				e.preventDefault();
				var params = $(this).serialize();
				//no selection
				if ((params.indexOf('eesti')) == -1 && (params.indexOf('allParties')) == -1) {
						$.getJSON('candidate.json', function(data) {
							var items = data;
							var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th></th></tr>";
							for (var i = 0; i < items.candidates.length; i++) {
								text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + "</td>" + 
									"<td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
							}
							text += "</table>"
							$('#list').html(text);
						});
						$('#candHeading').html(candidateList);
					}
				else if ((params.indexOf('eesti')) == -1 && (params.indexOf('allParties')) != -1){
						$.getJSON('findCandidatesByParty.json', function(data) {
							var items = data;
							var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th>Erakonna lühend</th><th>Erakonna nimi</th><th></th></tr>";
							for (var i = 0; i < items.candidates.length; i++) {
								text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + 
									"</td><td>" + items.candidates[i].party.id + "</td><td>" + items.candidates[i].party.name + "</td><td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
							}
							text += "</table>"
							$('#list').html(text);
						});
						$('#candHeading').html(candidateList);
					}
					//$("#siia").load('findCandidatesByParty.json');
				else if ((params.indexOf('eesti')) != -1 && (params.indexOf('allParties')) == -1) {
					$.getJSON('findCandidatesByRegion.json', function(data) {
						var items = data;
						var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th>Piirkonna lühend</th><th>Piirkonna nimi</th><th></th></tr>";
						for (var i = 0; i < items.candidates.length; i++) {
							text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + 
								"</td><td>" + items.candidates[i].region.id + "</td><td>" + items.candidates[i].region.name + "</td><td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
						}
						text += "</table>";
						$('#list').html(text);
					});
					$('#candHeading').html(candidateList);
				}
				else {
					$.getJSON('findCandidatesByPartyAndRegion.json', function(data) {
						var items = data;
						var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th>Piirkonna lühend</th><th>Piirkonna nimi</th></th><th>Erakonna lühend</th><th>Erakonna nimi</th><th></th></tr>";
						for (var i = 0; i < items.candidates.length; i++) {
							text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + 
								"</td><td>" + items.candidates[i].region.id + "</td><td>" + items.candidates[i].region.name +
								"</td><td>" + items.candidates[i].party.id + "</td><td>" + items.candidates[i].party.name + "</td><td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
						}
						text += "</table>";
						$('#list').html(text);
					});
					$('#candHeading').html(candidateList);
				}
			});
		});