
	$(function() {
		$('#large-img').hide();
		$('#large-img').load( 
				function() {
					$('#loader').hide();
					$('#large-img').show();
				});
		});

	var candidateList = "<h3>Kandidaatide nimekiri</h3>";
	var candidateOne = "<h3>Kandidaadi info</h3>";
	var nameArray = new Array();
	var voteArray = new Array();
	var test = [1,2,3,34,4];
	var ctx;
	var counter = 0;
	
	function getCountryStat() {
		var param = "country";
		$.get("StatisticsServlet", {values:param}, function(items) { 
			var text = "<table id='sorting' class='sortable' border='1'><thead><tr><th>Erakond</th><th>Hääli</th><th>Osakaal</th></tr></thead>";
			for (var i = 0; i < items.length; i++) {
				text +=	"<tr><td>" 	+ items[i].name + 	"</td><td>" +	 items[i].votes + 	"</td><td>" +	 items[i].percentage + 	"</td>";
			}
			text += "</table>";
			$('#sortingdiv').html(text);
			var newTableObject = document.getElementById("sorting");
			sorttable.makeSortable(newTableObject);
		});
	}
	
	function getCandidateStat(isModify) {
		var param = "candidate";
		$.get("StatisticsServlet", {values:param}, function(items) {
			for (var i = 0; i < items.length; i++) {
				nameArray[i] = items[i].fullname;
				voteArray[i] = items[i].votes;
			}
			if (!isModify && counter < 1) {
				create();
			}
			esimene();
			counter++;
		});
		
		
	}
	

	$(document).ready(function(){
		$('#areaStatForm').submit(function(e) {
			e.preventDefault(); 
			var param = $("#areaId option:selected").val();
			var text = "Vali mõni piirkond";
			if (param == "Eesti") {
				$('#areaStatistics').html(text);
			}
			else {
			    $.get("StatisticsServlet", {values:param}, function(items) {
					var text = "<table id='sorting' class='sortable' border='1'><thead><tr><th>Erakond</th><th>Hääli</th><th>Osakaal</th></tr></thead>";
					for (var i = 0; i < items.length; i++) {
						text +=	"<tr><td>" 	+ items[i].name + 	"</td><td>" +	 items[i].votes + 	"</td><td>" +	 items[i].percentage + 	"</td>";
					}
					text += "</table>";
					$('#areaStatistics').html(text);
			    });
			}
		});
	});
	
	function getPerson(id) {
		//NEED TO ADD LOGGED IN PERSON ID INTO AS PARAMETER!!!!!!!!!!! FOR NOW JUST MADE UP ONE
		loggedId = 5;
		//var logged = document.getElementById("logging").value;
		var $id = id;
		$.get("CandidateServlet", {values:$id}, function(items) { 
			extra = "";
			if (items[0].is_candidate) {
				extra = "<tr><th>Vali antud kandidaat</th><td><button type='button' onclick=sendVote(" + items[0].id + "," + loggedId + ") class='button'>Hääleta</button></tr>"
			}
			var text = "<table class='candidateInfo' border='1'>" +
			"<tr><th>Isiku (isiku)kood	</th><td>" 	+ items[0].code + 	"</td><tr>" +
			"<tr><th>Isiku eesnimi		</th><td>"	+ items[0].first + 	"</td><tr>" +
			"<tr><th>Isiku perenimi		</th><td>"	+ items[0].last + 	"</td><tr>" + 
			"<tr><th>Erakonna lühend	</th><td>" 	+ items[0].short + 	"</td><tr>" +
			"<tr><th>Erakonna nimi		</th><td>" 	+ items[0].name + 	"</td><tr>" +
			"<tr><th>Piirkonna nimi		</th><td>" 	+ items[0].area + 	"</td><tr>" +
			"<tr><th>Valimis nr			</th><td>" 	+ items[0].id + 	"</td><tr>" + extra + "</table>";
			$('#list').html(text);
			});
		$('#candHeading').html(candidateOne);
	}	

	
	function setCandidate (id) {
		var $id = id;
		$.post("MyDataServlet", {values:$id}, function(reply) { 
			extra = "";
		//	  if (logged == "true") {
		//  	  extra = "<tr><th>Vali antud kandidaat</th><td><button type='button' onclick=sendVote(" + items[0].id + ") class='button'>Hääleta</button></tr>"
		//    }
			$('#kandideerima').html(reply);
		});
	}
	
	$(document).ready(function(){
		$('#candidateForm').submit(function(e) {
			e.preventDefault(); 
			var party = $("#partyID option:selected").val();
			var area = $("#areas option:selected").val();
			var search =  $("#searcharea").val();
		    var $param = party + ";" + area + ";" + search;
		    
			if (area == 'Eesti' && party == 'allParties') {
			    $.get("CandidateServlet", {values:$param}, function(items) {
			    	var text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Piirkond</th><th>Isikukood</th><th>Erakonna nimi</th><th>Erakonna lühend</th><th></th></tr>";
					for (var i = 0; i < items.length; i++) {
						text += 	"<tr><td>" 	+ items[i].first + 	"</td><td>" + items[i].last + "</td><td>" + items[i].area + 
									"</td><td>" + items[i].code + 	"</td><td>" + items[i].name + "</td><td>" + items[i].short +
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
						text +=		"<tr><td>" 	+ items[i].first + 	"</td><td>" + items[i].last + "</td><td>" + items[i].area + 
									"</td><td>"	+ items[i].code +
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
						text += 	"<tr><td>" 	+ items[i].first + 	"</td><td>" + items[i].last + "</td><td>" + items[i].code +
									"</td><td>" + items[i].name +  	"</td><td>" + items[i].short + 
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
						text += 	"<tr><td>" + items[i].first + 	"</td><td>" + items[i].last + "</td><td>" + items[i].code + 
									"</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
					}
					text += "</table>";
					$('#list').html(text);
				});
			    $('#candHeading').html(candidateList);
			}
			});
		});

	function getPersonData() {
		//$(document).ready(function(){
		var $id = 4;
		$.get("CandidateServlet", {values:$id}, function(items) {
			var text = "<table class='candidateInfo' border='1'>" +	"<tr><th>Isiku (isiku)kood</th><td>" + items[0].code + "</td><tr>" +
			"<tr><th>Isiku eesnimi</th><td>" 	+ items[0].first 	+ "</td><tr>" + "<tr><th>Isiku perenimi</th><td>" 	+ items[0].last + "</td><tr>" + 
			"<tr><th>Erakonna lühend</th><td>"	+ items[0].short  	+ "</td><tr>" + "<tr><th>Erakonna nimi</th><td>" 	+ items[0].name + "</td><tr>" +
			"<tr><th>Piirkonna nimi</th><td>" 	+ items[0].area 	+ "</td><tr>" + "<tr><th>Valimis nr</th><td>" 		+ items[0].id 	+ "</td><tr>" + "</table>";
			$('#middle').html(text);
			if (items[0].is_candidate) {
				$('#kandideerima').html("Kandideerid");
				}
			});
		//});
	}

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