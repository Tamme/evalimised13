
	$(function() {
		$('#large-img').hide();
		$('#large-img').load( function() {
		$('#loader').hide();
		$('#large-img').show();
		} );
		});
	
		var candidateList = "<h3>Kandidaatide nimekiri</h3>";
		var candidateOne = "<h3>Kandidaadi info</h3>";
		//var ctx = "${pageContext.request.contextPath}";
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
				var search = $("#searcharea").val();
				var params = new Array();
				params[0] = party;
				params[1] = area;
				params[2] = search;
			    var $param = party + "," + area + "," + search;
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
				});
			});
		
		function getPersonData() {
			$(document).ready(function(){
				
					var $id = 5;
					$.get("CandidateServlet", {values:$id}, function(items) { 
						var text = "<table class='candidateInfo' border='1'>" +
							"<tr><th>Isiku (isiku)kood</th><td>" + items[0].code + "</td><tr>" +
							"<tr><th>Isiku eesnimi</th><td>" + items[0].first + "</td><tr>" +
							"<tr><th>Isiku perenimi</th><td>" + items[0].last + "</td><tr>" + 
							"<tr><th>Erakonna lühend</th><td>" + items[0].short  + "</td><tr>" +
							"<tr><th>Erakonna nimi</th><td>" + items[0].name  + "</td><tr>" +
							"<tr><th>Piirkonna nimi</th><td>" + items[0].area + "</td><tr>" +
							"<tr><th>Valimis nr</th><td>" + items[0].id + "</td><tr>" + "</table>";
						$('#middle').html(text);
					});
					
				
			});
		}
		
//		$(document).ready(function(){
//			$.getJSON("evalimine.jsp", function(json) {
//			    $.each (json, function(k, v) {
//			        alert(json);
//			    });
//			});
//		});

		//		$(document).ready(function(){
//			$.getJSON('findCandidatesByPartyAndRegion.json', function(data) {
//				var items = data;
//				var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th>Piirkonna lühend</th><th>Piirkonna nimi</th></th><th>Erakonna lühend</th><th>Erakonna nimi</th><th></th></tr>";
//				for (var i = 0; i < items.candidates.length; i++) {
//					text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + 
//						"</td><td>" + items.candidates[i].region.id + "</td><td>" + items.candidates[i].region.name +
//						"</td><td>" + items.candidates[i].party.id + "</td><td>" + items.candidates[i].party.name + "</td><td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
//				}
//				text += "</table>";
//				$('#list').html(text);
//			});
//			$('#candHeading').html(candidateList);
//		});

//		$(document).ready(function(){
//			$('#cdsfsddgsxcan112didateForm2').submit(function(e) {
//				e.preventDefault();
//				var params = $(this).serialize();
//				//no selection
//				if ((params.indexOf('eesti')) == -1 && (params.indexOf('allParties')) == -1) {
//						$.getJSON('candidate.json', function(data) {
//							var items = data;
//							var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th></th></tr>";
//							for (var i = 0; i < items.candidates.length; i++) {
//								text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + "</td>" + 
//									"<td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
//							}
//							text += "</table>"
//							$('#list').html(text);
//						});
//						$('#candHeading').html(candidateList);
//					}
//				else if ((params.indexOf('eesti')) == -1 && (params.indexOf('allParties')) != -1){
//						$.getJSON('findCandidatesByParty.json', function(data) {
//							var items = data;
//							var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th>Erakonna lühend</th><th>Erakonna nimi</th><th></th></tr>";
//							for (var i = 0; i < items.candidates.length; i++) {
//								text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + 
//									"</td><td>" + items.candidates[i].party.id + "</td><td>" + items.candidates[i].party.name + "</td><td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
//							}
//							text += "</table>"
//							$('#list').html(text);
//						});
//						$('#candHeading').html(candidateList);
//					}
//					//$("#siia").load('findCandidatesByParty.json');
//				else if ((params.indexOf('eesti')) != -1 && (params.indexOf('allParties')) == -1) {
//					$.getJSON('findCandidatesByRegion.json', function(data) {
//						var items = data;
//						var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th>Piirkonna lühend</th><th>Piirkonna nimi</th><th></th></tr>";
//						for (var i = 0; i < items.candidates.length; i++) {
//							text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + 
//								"</td><td>" + items.candidates[i].region.id + "</td><td>" + items.candidates[i].region.name + "</td><td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
//						}
//						text += "</table>";
//						$('#list').html(text);
//					});
//					$('#candHeading').html(candidateList);
//				}
//				else {
//					$.getJSON('findCandidatesByPartyAndRegion.json', function(data) {
//						var items = data;
//						var text = "<table class='candidateTable' border='1'><tr><th>Valimisnumber</th><th>Isikukood</th><th>Nimi</th><th>Piirkonna lühend</th><th>Piirkonna nimi</th></th><th>Erakonna lühend</th><th>Erakonna nimi</th><th></th></tr>";
//						for (var i = 0; i < items.candidates.length; i++) {
//							text += "<tr><td>" + items.candidates[i].id + "</td><td>" + items.candidates[i].person.id + "</td><td>" + items.candidates[i].person.name + 
//								"</td><td>" + items.candidates[i].region.id + "</td><td>" + items.candidates[i].region.name +
//								"</td><td>" + items.candidates[i].party.id + "</td><td>" + items.candidates[i].party.name + "</td><td><button type='button' onclick=getPerson() class='button'>Info</button></tr>";
//						}
//						text += "</table>";
//						$('#list').html(text);
//					});
//					$('#candHeading').html(candidateList);
//				}
//			});
//		});