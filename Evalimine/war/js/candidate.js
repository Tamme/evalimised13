//------------------ config section starts ------------------
	//input variables
	var fbAppId = "507516239283608"; //your app Id goes here
	var permissions_needed = "email";
	
	//output variables available in JS after Fb login
	var fb_id; 				//unique fb id/key of logged in user
	var first_name;	
	var last_name;
	var full_name;			//full name as on Fb profile
	var email;				//email id 


	//------------------ config section ends --------------------
	
    // Load the SDK Asynchronously
    (function(d){
      var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
      js = d.createElement('script'); js.id = id; js.async = true;
      js.src = "//connect.facebook.net/en_US/all.js";
      d.getElementsByTagName('head')[0].appendChild(js);
    }(document));
	
    window.fbAsyncInit = function() {
      FB.init({
        appId      : fbAppId, 
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
      });
      
      FB.getLoginStatus(function(response) {
    	  if (response.status === 'connected') {
    	    // connected
    	  } else if (response.status === 'not_authorized') {
    	    // not_authorized
    	  } else {
    	    // not_logged_in
    	  }
    	 });
	  
	    // listen for and handle auth.statusChange events
        FB.Event.subscribe('auth.statusChange', function(response) {
			if (response.authResponse) {
				// user has auth'd your app and is logged into Facebook
				FB.api('/me', function(user){
					if (user.name) {
						fb_id = user.id;
						first_name = user.first_name;
						last_name = user.last_name;
						full_name = user.name;
						email =  user.email;
						
						
						//this is my JS function to display output variables mentioned in config
						//you can replace with your own function.
					}
				})
				document.getElementById('auth-loggedout').style.display = 'none';
				document.getElementById('auth-loggedin').style.display = 'block';
			} else {
				// user has not auth'd your app, or is not logged into Facebook
				document.getElementById('auth-loggedout').style.display = 'block';
				document.getElementById('auth-loggedin').style.display = 'none';
			}
        });
    };
	
	//call facebook login
	function fbLogin() {
		FB.login(function (response) {}, {scope: permissions_needed});
	}

	//call facebook logout
	function fbLogout() {
		FB.logout();
	}
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
			
			$('#kandideerima').html(reply);
		});
	}
	
	function removeCandidate (id) {
		var $id = id;
		$.post("MyDataServlet2", {values:$id}, function(reply) { 
			
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
		var $id = 13;
		$.get("CandidateServlet", {values:$id}, function(items) {
			if (items[0].is_candidate) {
				var text = "<table class='candidateInfo' border='1'>" +	"<tr><th>Isiku (isiku)kood</th><td>" + items[0].code + "</td><tr>" +
				"<tr><th>Isiku eesnimi</th><td>" 	+ items[0].first 	+ "</td><tr>" + "<tr><th>Isiku perenimi</th><td>" 	+ items[0].last + "</td><tr>" + 
				"<tr><th>Erakonna lühend</th><td>"	+ items[0].short  	+ "</td><tr>" + "<tr><th>Erakonna nimi</th><td>" 	+ items[0].name + "</td><tr>" +
				"<tr><th>Piirkonna nimi</th><td>" 	+ items[0].area 	+ "</td><tr>" + "<tr><th>Valimis nr</th><td>" 		+ items[0].id 	+ "</td><tr>" + 
				"<tr><th>Sinu hääl</th><td>" 		+ items[0].voting 	+ "</td><tr>" + "</table>";
				$('#minu').html(text);
				$('#kandideerima').html("<a href='javascript:void(0)' onclick=removeCandidate("+ items[0].id +")>Tühista kandidatuur</a>");
			}
			else{
				var text = "<table class='candidateInfo' border='1'>" +	
				"<tr><th>Isiku (isiku)kood</th><td>" + items[0].code + "</td><tr>" +
				"<tr><th>Valimis nr</th><td>" 		+ items[0].id 	+ "</td><tr>" +
				"<tr><th>Isiku eesnimi</th><td>" 	+ items[0].first + "</td><tr>" + 
				"<tr><th>Isiku perenimi</th><td>" 	+ items[0].last + "</td><tr>" + 
				"<tr><th>Piirkonna nimi</th><td>" 	+ items[0].area 	+ "</td><tr>" +
				"<tr><th>Erakonna nimi</th><td><select id='cerakond' name='erakond'>" +
				"<option selected='' value=''> --Palun vali oma erakond--</option>" +
				"<option value='erakondnr1'>Mustad</option><option value='erakondnr2'>Punased</option>" +
				"<option value='erakondnr3'>Sinised</option>" +
				"<option value='erakondnr4'>Kollased</option>" +
				"<option value='erakondnr5'>Helesinised</option>" +
				"<option value='erakondnr6'>Violetsed</option>" +
				"<option value='erakondnr7'>Roosad</option>" +
				"<option value='erakondnr8'>Hallid</option>" +
				"<option value='erakondnr9'>Valged</option>" +
				"</select></td><tr>" +  
				"<tr><th>Sinu hääl</th><td>" 		+ items[0].voting + "</td><tr>" + "</table>";
				$('#minu').html(text);
				$('#kandideerima').html("<a href='javascript:void(0)' onclick='setCandidate("+ items[0].id +")'>Soovin kandideerida</a>");
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