function initialize() {
	
		var mapOptions = {
		  zoom: 7,
		  center: new google.maps.LatLng(58.397, 25.944),
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('parteistat'), mapOptions);
		google.maps.event.trigger(map, 'resize');

		//  Each area marker -->
		var counter10 = 1;
		var window10;
		var marker10 = new google.maps.Marker({
		    position: new google.maps.LatLng(58.371928,26.72905),
		    map: map,
		    title: 'Tartu linn',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr10"]))
		});
		google.maps.event.addListener(marker10, 'click', function() {
			if (counter10 == 1) {
				window10  = new  google.maps.InfoWindow({ content: "Tartu info. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr10"]) + " ja protsent " + getFromArray(proArray["valimisringkondnr10"]) +"%" });
				window10.open(map, marker10);
				counter10 = 0;
			}
			else {
				window10.close();
				counter10 = 1;
			}
		});
		
		// ----------------
		
		var counter3 = 1;
		var window3;
		var marker3 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.397613,24.672332),
		    map: map,
		    title: 'Mustamäe ja Nõmme linnaosad',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr3"]))
		});
		google.maps.event.addListener(marker3, 'click', function() {
			if (counter3 == 1) {
				window3  = new google.maps.InfoWindow({ content: "Mustamäe ja Nõmme linnaosade valimisinfo. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr3"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr3"]) +"%" })
				window3.open(map, marker3);
				counter3 = 0;
			}
			else {
				window3.close();
				counter3 = 1;
			}
		});
		
		
		//---------------
		var counter12 = 1;
		var window12;
		var marker12 = new google.maps.Marker({
		    position: new google.maps.LatLng(58.383707,24.496272),
		    map: map,
		    title: 'Pärnumaa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr12"]))
		});
		google.maps.event.addListener(marker12, 'click', function() {
			if (counter12 == 1) {
				window12  = new google.maps.InfoWindow({ content: "Pärnu info. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr12"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr12"]) +"%" })
				window12.open(map, marker12);
				counter12 = 0;
			}
			else {
				window12.close();
				counter12 = 1;
			}
		});
		//---------------
		
		var counter11 = 1;
		var window11;
		var marker11 = new google.maps.Marker({
		    position: new google.maps.LatLng(57.955857,26.567001),
		    map: map,
		    title: 'Võru-Valga-Põlva-maa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr11"]))
		});
		google.maps.event.addListener(marker11, 'click', function() {
			if (counter11 == 1) {
				window11  = new google.maps.InfoWindow({ content: "Valgamaa, Põlvamaa, Võrumaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr11"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr11"]) +"%" })
				window11.open(map, marker11);
				counter11 = 0;
			}
			else {
				window11.close();
				counter11 = 1;
			}
		});
		//--------------------
		
		var counter7 = 1;
		var window7;
		var marker7 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.358319,27.413013),
		    map: map,
		    title: 'Ida-Virumaa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr7"]))
		});
		google.maps.event.addListener(marker7, 'click', function() {
			if (counter7 == 1) {
				window7  = new google.maps.InfoWindow({ content: "Ida-Virumaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr7"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr7"]) +"%" })
				window7.open(map, marker7);
				counter7 = 0;
			}
			else {
				window7.close();
				counter7 = 1;
			}
		});
		
		//---------------
		
		var counter6 = 1;
		var window6;
		var marker6 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.349502,26.347994),
		    map: map,
		    title: 'Lääne-Virumaa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr6"]))
		});
		google.maps.event.addListener(marker6, 'click', function() {
			if (counter6 == 1) {
				window6  = new google.maps.InfoWindow({ content: "Lääne-Virumaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr6"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr6"]) +"%" })
				window6.open(map, marker6);
				counter6 = 0;
			}
			else {
				window6.close();
				counter6 = 1;
			}
		});
		
		
		//-----------------
		
		
		var counter5 = 1;
		var window5;
		var marker5 = new google.maps.Marker({
		    position: new google.maps.LatLng(58.80476,23.1416),
		    map: map,
		    title: 'Lääne-Saare-Hiiu-maa',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr5"]))
		});
		google.maps.event.addListener(marker5, 'click', function() {
			if (counter5 == 1) {
				window5  = new google.maps.InfoWindow({ content:  "Lääne-Saare-Hiiu-maa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr5"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr5"]) +"%" })
				window5.open(map, marker5);
				counter5 = 0;
			}
			else {
				window5.close();
				counter5 = 1;
			}
		});
		
		//---------
		
		var counter8 = 1;
		var window8;
		var marker8 = new google.maps.Marker({
		    position: new google.maps.LatLng(58.631524,25.573372),
		    map: map,
		    title: 'Järva-Viljandi',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr8"]))
		});
		google.maps.event.addListener(marker8, 'click', function() {
			if (counter8 == 1) {
				window8  = new google.maps.InfoWindow({ content: "Järva-Viljandimaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr8"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr8"]) +"%" })
				window8.open(map, marker8);
				counter8 = 0;
			}
			else {
				window8.close();
				counter8 = 1;
			}
		});
		
		//----------
		
		
		var counter4 = 1;
		var window4;
		var marker4 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.195977,24.808502),
		    map: map,
		    title: 'Rapla-Harju',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr4"]))
		});
		google.maps.event.addListener(marker4, 'click', function() {
			if (counter4 == 1) {
				window4  = new google.maps.InfoWindow({ content: "Rapla-Harjumaa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr4"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr4"]) +"%" })
				window4.open(map, marker4);
				counter4 = 0;
			}
			else {
				window4.close();
				counter4 = 1;
			}
		});
		
		//----------
		
		var counter9 = 1;
		var window9;
		var marker9 = new google.maps.Marker({
		    position: new google.maps.LatLng(58.610703,26.741238),
		    map: map,
		    title: 'Tartu-Jõgeva',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%90%A2|" + getColor(nameArray["valimisringkondnr9"]))
		});
		google.maps.event.addListener(marker9, 'click', function() {
			if (counter9 == 1) {
				window9  = new google.maps.InfoWindow({ content: "Tartu-ja Jõgevamaa. Erakonnaks on "+ getFromArray(nameArray["valimisringkondnr9"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr9"]) +"%" })
				window9.open(map, marker9);
				counter9 = 0;
			}
			else {
				window9.close();
				counter9 = 1;
			}
		});
		
		//----------	

		var counter2 = 1;
		var window2;
		var marker2 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.43411,24.800874),
		    map: map,
		    title: 'Lasnamäe Kesklinn Pirita',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(nameArray["valimisringkondnr2"]))
		});
		google.maps.event.addListener(marker2, 'click', function() {
			if (counter2 == 1) {
				window2  = new google.maps.InfoWindow({ content: "Lasnamäe Kesklinn Pirita. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr2"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr2"]) +"%" })
				window2.open(map, marker2);
				counter2 = 0;
			}
			else {
				window2.close();
				counter2 = 1;
			}
		});
		
		//----------	

		var counter1 = 1;
		var window1;
		var marker1 = new google.maps.Marker({
		    position: new google.maps.LatLng(59.457257,24.676902),
		    map: map,
		    title: 'Haabersti-P-Tallinn-Kristiine',
		    icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E1%80%A1|" + getColor(nameArray["valimisringkondnr1"]))
		});
		google.maps.event.addListener(marker1, 'click', function() {
			if (counter1 == 1) {
				window1  = new google.maps.InfoWindow({ content: "Tallinna Haabersti, Põhja-Tallinna ja Kristiine linnaosa. Erakonnaks on " + getFromArray(nameArray["valimisringkondnr1"])  + " ja protsent " + getFromArray(proArray["valimisringkondnr1"]) +"%" })
				window1.open(map, marker1);
				counter1 = 0;
			}
			else {
				window1.close();
				counter1 = 1;
			}
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
	            name: 'Määratama',
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