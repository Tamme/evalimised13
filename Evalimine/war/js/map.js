function initialize() {
	
		var mapOptions = {
		  zoom: 7,
		  center: new google.maps.LatLng(58.397, 25.944),
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('parteistat'),
		    mapOptions);
		
		//  Each area marker -->
		var counter = 1
		var markerTart = new google.maps.Marker({
		    position: new google.maps.LatLng(58.371928,26.72905),
		    map: map,
		    title: 'Tartu linn',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr10"]))
		});
		google.maps.event.addListener(markerTart, 'click', function() {
			new google.maps.InfoWindow({ content: "Tartu info. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr10"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr10"]) +"%" }).open(map, markerTart);
		});
		
		// ----------------
		var marker3 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.397613,24.672332),
		    map: map,
		    title: 'Mustamäe ja Nõmme linnaosad',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr3"]))
		});
		google.maps.event.addListener(marker3, 'click', function() {
		 new google.maps.InfoWindow({ content: "Mustamäe ja Nõmme linnaosade valimisinfo. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr3"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr3"]) +"%" }).open(map, marker3);
		});
		
		
		var markerPrnu = new google.maps.Marker({
		    position: new google.maps.LatLng(58.383707,24.496272),
		    map: map,
		    title: 'Pärnumaa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr12"]))
		});
		google.maps.event.addListener(markerPrnu, 'click', function() {
		 new google.maps.InfoWindow({ content: "Pärnu info. Erakonnaks on " + nameArray["valimisringkondnr12"] + " ja protsent " + proArray["valimisringkondnr12"] +"%" }).open(map, markerPrnu);
		});
		
		
		var marker11 = new google.maps.Marker({
		    position: new google.maps.LatLng(57.955857,26.567001),
		    map: map,
		    title: 'Võru-Valga-Põlva-maa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr11"]))
		});
		google.maps.event.addListener(marker11, 'click', function() {
		 new google.maps.InfoWindow({ content: "Valgamaa, Põlvamaa, Võrumaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr11"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr11"]) +"%" }).open(map, marker11);
		});
		
		
		var marker7 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.358319,27.413013),
		    map: map,
		    title: 'Ida-Virumaa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr7"]))
		});
		google.maps.event.addListener(marker7, 'click', function() {
		 new google.maps.InfoWindow({ content: "Ida-Virumaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr7"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr7"]) +"%" }).open(map, marker7);
		});
		
		<!--  Each area marker -->
		
		var marker6 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.349502,26.347994),
		    map: map,
		    title: 'Lääne-Virumaa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr6"]))
		});
		google.maps.event.addListener(marker6, 'click', function() {
		 new google.maps.InfoWindow({ content: "Lääne-Virumaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr6"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr6"]) +"%" }).open(map, marker6);
		});
		
		<!--  Each area marker -->
		
		var marker5 = new google.maps.Marker({
		    position: new google.maps.LatLng(58.80476,23.1416),
		    map: map,
		    title: 'Lääne-Saare-Hiiu-maa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr5"]))
		});
		google.maps.event.addListener(marker5, 'click', function() {
		 new google.maps.InfoWindow({ content: "Lääne-Saare-Hiiu-maa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr5"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr5"]) +"%" }).open(map, marker5);
		});
		
		<!--  Each area marker -->
		
		var marker8 = new google.maps.Marker({
		    position: new google.maps.LatLng(58.631524,25.573372),
		    map: map,
		    title: 'Järva-Viljandi',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr8"]))
		});
		google.maps.event.addListener(marker8, 'click', function() {
		 new google.maps.InfoWindow({ content: "Järva-Viljandimaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr8"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr8"]) +"%" }).open(map, marker8);
		});
		
		<!--  Each area marker -->
		
		var marker4 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.195977,24.808502),
		    map: map,
		    title: 'Rapla-Harju',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr4"]))
		});
		google.maps.event.addListener(marker4, 'click', function() {
		 new google.maps.InfoWindow({ content: "Rapla-Harjumaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr4"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr4"]) +"%" }).open(map, marker4);
		});
		
		<!--  Each area marker -->
		
		var marker9 = new google.maps.Marker({
		    position: new google.maps.LatLng(58.610703,26.741238),
		    map: map,
		    title: 'Tartu-Jõgeva',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr9"]))
		});
		google.maps.event.addListener(marker9, 'click', function() {
		 new google.maps.InfoWindow({ content: "Tartu-ja Jõgevamaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr9"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr9"]) +"%" }).open(map, marker9);
		});
			
		<!--  Each area marker -->
		
		var marker2 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.43411,24.800874),
		    map: map,
		    title: 'Lasnamäe Kesklinn Pirita',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr2"]))
		});
		google.maps.event.addListener(marker2, 'click', function() {
		 new google.maps.InfoWindow({ content: "Lasnamäe Kesklinn Pirita. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr2"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr2"]) +"%" }).open(map, marker2);
		});
		
	        var icons = {
	          Punased: {
	            name: 'Punased',
	            icon: 'img/icon1.png',
	          },
	          Sinised: {
	            name: 'Sinised',
	            icon: 'img/icon3.png',
	          },
	          Kollased: {
	            name: 'Kollased',
	            icon: 'img/icon2.png',
	          },
	          Violetsed: {
		            name: 'Violetsed',
		            icon: 'img/icon4.png',
	          },
	          Mustad: {
	            name: 'Mustad',
	            icon: 'img/icon6.png',
	          },
	          Helesinised: {
	            name: 'Helesinised',
	            icon: 'img/icon7.png',
	          },
	          Roosad: {
		            name: 'Roosad',
		            icon: 'img/icon8.png',
	          },
	          Hallid: {
	            name: 'Hallid',
	            icon: 'img/icon9.png',
	          },
	          Valged: {
		            name: 'Valged',
		            icon: 'img/icon10.png',
	          },
	          Default: {
		            name: 'Teised',
		            icon: 'img/icon5.png',
		          }
	        };
		
        var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img class="legend" src="' + icon + '"> ' + name;
          legend.appendChild(div);
        }

        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
		
		
		
		
		
	}