<!doctype html>
 
+<html manifest="cache.manifest" lang="et" >
<head>
<meta charset="utf-8" />
<title>E-valimine 2013</title>
  
<!-- CSS -->
<link rel="stylesheet" href="style.css" />
<link type="text/css" href="jquery-ui-1.8.13.custom.css" rel="stylesheet">

<!-- KUI KÕIK NEED SCRIPTI READ EEMALDADA MILLEL ON KOMMENTAAR SIIS GOOGLE SUGGEST TÖÖTAB AGA LEHT LÄHEB KATKI -->
<script type="text/javascript" src="js/jquery-1.9.0.min.js" charset="utf-8"></script>														
<!-- <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>  -->
<script type="text/javascript" src="js/jquery-ui-1.8.13.js" charset="utf-8"></script>	<!-- Kui see eemaldada siis tabid ei tööta -->
<script type="text/javascript" src="js/jquery.address-1.6.min.js" charset="utf-8"></script>
<script type="text/javascript" src="js/menu.js" charset="utf-8"></script>							<!-- Kui see eemaldada siis on lehed üksteise all -->
<!--  <script type="text/javascript" src="js/sort.js" charset="utf-8"></script>-->
<!--  <script type="text/javascript" src="js/gs_sortable.js" charset="utf-8"></script>-->
<script type="text/javascript" src="js/sorttable.js" charset="utf-8"></script>
<script type="text/javascript" src="js/candidate.js" charset="utf-8"></script>
<script type="text/javascript" src="js/validate.js" charset="utf-8"></script>
<script type="text/javascript" src="/_ah/channel/jsapi"></script>
<!-- <script type="text/javascript" src="/js/channel.js"></script> -->

 <script>
//  var TSort_Data = new Array ('sorting', 's', 'i');
//  var TSort_Initial =  new Array ('0A');


 $(document).ready(function(){
 	$("#commentForm").validate();
 });

 $(window).load(function() {
   $('#loading').hide();
 });

 $(function() {
	   $( "#searcharea" ).autocomplete({
	           source: "/GoogleSuggestServlet/*",
	           minLength: 2,
	   });
 });
 
</script>

</head>

<body onload="getPersonData()">

		
		
		<script type="text/javascript">

	       	onOpened = function() {
				//alert('/opened');
				connected = true;
				var $id = 12;
				//$.post("StatisticsServlet", {values:$id}, function(reply) { 
					//alert("tagasi");
				//	  if (logged == "true") 
				//  	  extra = "<tr><th>Vali antud kandidaat</th><td><button type='button' onclick=sendVote(" + items[0].id + ") class='button'>Hääleta</button></tr>"
				//    
				//});
	       	};
	       	
	        onMessage = function(m) {
	            if (m.data.length == 7) {
	            	getCountryStat();
	           	}
	            	getCandidateStat(true);
	        };
	        
	        onError = function(err) {
	            //alert(err.description);
	        };
		    
            var token = '{{ token }}';
            //alert(token);
            channel = new goog.appengine.Channel(token);

            socket = channel.open();
            socket.onopen = onOpened;
            socket.onopen  = onOpened;
            socket.onmessage = onMessage;
            socket.onerror = onError;
            socket.onclose = function() {//alert("close");
            };
	       	

	            
	    	function sendVote (id, loggedId) {
	   		 var param = "vote " +id + " " + loggedId;
	   		 var random = Math.floor(Math.random()*1000)
			$.post("StatisticsServlet", {values:param}, function(reply) { 
				
				//alert("voted");    
			});
	   	}
	   </script> 
	
	<div class="container">
	
	
	
   
		<div id="header" class="logo">
			<a href="evalimine.jsp"><img class="logo" src="img/logo3.png"></img></a>
		</div>
		<div id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
		  <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all menu">
		    <li class="ui-corner-top ui-tabs-selected ui-state-active"><a href="#esileht">Esileht</a></li>
		    <li class="ui-corner-top ui-state-default"><a href="#kandidaadid">Kandidaadid</a></li>
		    <li class="ui-corner-top ui-state-default"><a href="#kkk">KKK</a></li>
		    <li class="ui-corner-top ui-state-default"><a href="#statistika" onclick="getCountryStat()">Statistika</a></li>
		    <li class="ui-corner-top ui-state-default"><a href="#andmed">Minu andmed</a></li>
		    <li class="ui-corner-top ui-state-default"><a href="#sisene">Sisene</a></li>
		  </ul>
		  
			<div id="pais">
		  		<p>
		  			Tähelepanu! Antud rakendus ei ole mõeldud kasutamiseks reaalsetel valimistel.
		  		</p>
			</div>
			
			<div id="esileht" class="text">
				<h1>
					Valimised ja e-hääletamine
				</h1>
				<h3>
					Hiljemalt 01.08.2013
				</h3>
				<p>
					Kandideerimisõigus on hääleõiguslikul Eesti kodanikul ja Euroopa Liidu kodanikul, kelle püsiv elukoht, st. elukoht, mille aadressiandmed on 
					kantud rahvastikuregistrisse, asub hiljemalt valimisaasta 1. augustil selles vallas või linnas.
				</p>
				<h3>
					Alates 21.08.2013 kuni 05.09.2013
				</h3>
				<p>
					Esitatakse valimisliit valla ja linna valimiskomisjonile registreerimiseks.
				</p>
				<h3>
					Alates 21.08.2013
				</h3>
				<p>
					Algab kandidaatide registreerimiseks esitamine.
				</p>
				<h3>
					Hiljemalt 05.09.2013
				</h3>
				<p>
					Valimistel osalev erakond ja valimisliit võib esitada valla- või linnasekretärile ühe jaoskonnakomisjoni liikmeskandidaadi.
				</p>
			</div>
			
			<div id="kandidaadid" class="text">
				<h3>
					Otsi kandidaate
				</h3>

				<div class="searchCandidate">
					<form id="candidateForm">
						Vali piirkond:
						<select name="area" id="areas">
							<option selected="" value="Eesti"> --Palun vali oma valimisringkond--</option>
							<option value="valimisringkondnr1">Tallinna Haabersti, Põhja-Tallinna ja Kristiine linnaosa</option>
							<option value="valimisringkondnr2">Tallinna Kesklinna, Lasnamäe ja Pirita linnaosa</option>
							<option value="valimisringkondnr3">Tallinna Mustamäe ja Nõmme linnaosa</option>
							<option value="valimisringkondnr4">Harju- (v.a Tallinn) ja Raplamaa</option>
							<option value="valimisringkondnr5">Hiiu-, Lääne- ja Saaremaa</option>
							<option value="valimisringkondnr6">Lääne-Virumaa</option>
							<option value="valimisringkondnr7">Ida-Virumaa</option>
							<option value="valimisringkondnr8">Järva- ja Viljandimaa</option>
							<option value="valimisringkondnr9">Jõgeva- ja Tartumaa (v.a Tartu linn)</option>
							<option value="valimisringkondnr10">Tartu linn</option>
							<option value="valimisringkondnr11">Võru-, Valga- ja Põlvamaa</option>
							<option value="valimisringkondnr12">Pärnumaa</option>
						</select>
						Vali erakond:
						<select name="party" id="partyID">
							<option selected="" value="allParties"> --Palun vali oma erakond--</option>
							<option value="erakondnr1">Mustad</option>
							<option value="erakondnr2">Punased</option>
							<option value="erakondnr3">Sinised</option>
							<option value="erakondnr4">Kollased</option>
							<option value="erakondnr5">Helesinised</option>
							<option value="erakondnr6">Violetsed</option>
							<option value="erakondnr7">Roosad</option>
							<option value="erakondnr8">Hallid</option>
							<option value="erakondnr9">Valged</option>
						</select>
						<br>
						Kandidaatide otsing nime järgi:
         				<input type="text" class="ui-widget" id="searcharea" size="40" autocomplete="off">

						
						
						<button id="candSearch">Otsi</button>
					</form>
				</div>
				<div class="text" id="candHeading">
				</div>
				<div id="list">
				</div>
			</div>
			
			<div id="loading">
  				<img src="img/ajax-loader.gif" id="img-load" />
			</div>
			
			<div id="statistika" class="text">
		  			<div id="stattabs">
					  	<ul class="statmenu ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
						    <li class="ui-corner-top ui-tabs-selected ui-state-active"><a href="#statistika-riigiSisu" onclick="getCountryStat()">Statistika riigi lõikes</a></li>
						    <li class="ui-corner-top ui-state-default"><a href="#statistika-piirkonnaSisu" >Statistika piirkonna lõikes</a></li>
						    <li class="ui-corner-top ui-state-default"><a href="#statistika-parteiSisu">Statistika parteide lõikes</a></li>
						    <li class="ui-corner-top ui-state-default"><a href="#statistika-kandidaadiSisu" onclick="getCandidateStat(false)">Statistika kandidaatide lõikes</a></li>
					  	</ul>
						<div id="statistika-riigiSisu"   class="text">
							<h1>
								Häälte jagunemine riigi lõikes
							</h1>
							<div id="riigiSisu">
								<div id="sortingdiv" >
	<!--  							<table id="sorting" class="sortable">  -->
	<!-- 								<thead> -->
	<!-- 									<tr> -->
	<!-- 										<th>Erakond</th> -->
	<!-- 										<th>Hääli</th> -->
	<!-- 										<th>Osakaal</th> -->
	<!-- 									</tr> -->
	<!-- 								</thead> -->
	<!-- 									</tr> -->
	<!-- 									<tr> -->
	<!-- 										<td>Valged</td> -->
	<!-- 										<td>400</td>		 -->
	<!-- 										<td>4%</td> -->
	<!-- 									</tr> -->
	<!-- 									<tr> -->
	<!-- 										<td>Malged</td> -->
	<!-- 										<td>4100</td>		 -->
	<!-- 										<td>42%</td> -->
	<!-- 									</tr> -->
	<!--  							</table>  -->
								</div>
								<br>
								<br>
								<!-- Print vaated on illustratiivsed mitte funktsionaalsed ning print nupp võiks olla statmenu.js all mitte buttonina realiseeritud -->
								<div class="printbutton">
									<a href="riigistatprint.html">Prindi</a>
								</div>
							</div>
						</div>

						<div id="statistika-piirkonnaSisu" class="text">
							<h1>
								Häälte jagunemine piirkondade lõikes
							</h1>
							<div class="piirkonnastat">
								<div class="searchCandidate">
								
									<form  id="areaStatForm">
										Vali piirkond:
										<select name="area" id="areaId">
											<option selected="" value="Eesti"> --Palun vali oma valimisringkond--</option>
											<option value="valimisringkondnr1">Tallinna Haabersti, Põhja-Tallinna ja Kristiine linnaosa</option>
											<option value="valimisringkondnr2">Tallinna Kesklinna, Lasnamäe ja Pirita linnaosa</option>
											<option value="valimisringkondnr3">Tallinna Mustamäe ja Nõmme linnaosa</option>
											<option value="valimisringkondnr4">Harju- (v.a Tallinn) ja Raplamaa</option>
											<option value="valimisringkondnr5">Hiiu-, Lääne- ja Saaremaa</option>
											<option value="valimisringkondnr6">Lääne-Virumaa</option>
											<option value="valimisringkondnr7">Ida-Virumaa</option>
											<option value="valimisringkondnr8">Järva- ja Viljandimaa</option>
											<option value="valimisringkondnr9">Jõgeva- ja Tartumaa (v.a Tartu linn)</option>
											<option value="valimisringkondnr10">Tartu linn</option>
											<option value="valimisringkondnr11">Võru-, Valga- ja Põlvamaa</option>
											<option value="valimisringkondnr12">Pärnumaa</option>
										</select>
										<button id="areaSearch">Otsi</button>
									</form>
								</div>
								<div id = "areaStatistics">
									<img class="piirkonnastat" src="img/eestikaart2.gif"></img>
								</div>
								
							</div>
							<br>
							<br>
							<!-- Print vaated on illustratiivsed mitte funktsionaalsed ning print nupp võiks olla statmenu.js all mitte buttonina realiseeritud -->
							<div class="printbutton">
								<a href="piirkonnastatprint.html">Prindi</a>
							</div>
						</div>
						
						<div id="statistika-parteiSisu" class="text">
							<h1>
								Häälte jagunemine parteide lõikes
							</h1>
							<div class="parteistat">
								<img class="parteistat" src="img/parteistat.png"></img>
							</div>
							<br>
							<br>
							<!-- Print vaated on illustratiivsed mitte funktsionaalsed ning print nupp võiks olla statmenu.js all mitte buttonina realiseeritud -->
							<div class="printbutton">
								<a href="parteistatprint.html">Prindi</a>
							</div>
						</div>
						
						<div id="statistika-kandidaadiSisu">
							<div class="text">
								<h1>
									Häälte jagunemine konktreetsete kandidaatide lõikes
								</h1>
								<div id="kandidaadistat" class="kandidaadistat"></div>
								<script src="js/html5-canvas-bar-graph.js"></script>
								<script>
								                                                       
								        function createCanvas(divName) {
								               
								                var div = document.getElementById(divName);
								                var canvas = document.createElement('canvas');
								                div.appendChild(canvas);
								                if (typeof G_vmlCanvasManager != 'undefined') {
								                        canvas = G_vmlCanvasManager.initElement(canvas);
								                }      
								                var ctx = canvas.getContext("2d");
								                return ctx;
								        }
								function create() {
									ctx = createCanvas("kandidaadistat");
								}
								function esimene() {
								 
								        
								       
								        var graph = new BarGraph(ctx);
								        graph.maxValue = 50;
								        graph.margin = 122;
								        graph.colors = ["#49a0d8"];
								        //graph.xAxisLabelArr = ["Mustad", "Punased", "Sinised", "Kollased"];
								        graph.xAxisLabelArr = nameArray;
								        //graph.update([Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30]);
								        graph.update(voteArray);
								}	
								//esimene();
								// uuenda(array){
								// 	graph.update(array);
								// }
								        </script>
							</div>
							<br>
							<br>
							<!-- Print vaated on illustratiivsed mitte funktsionaalsed ning print nupp võiks olla statmenu.js all mitte buttonina realiseeritud -->
							<div class="printbutton">
								<a href="kandidaadistatprint.html">Prindi</a>
							</div>
						</div>
					</div>
			</div>
			
			<div id="sisene" class="text">
				<h1>
					Autentimine
				</h1>
				<div id="auth-status">
						<div id="auth-loggedout" style="width:200px; margin:0px auto;">
							<img src="img/fb1.gif" onclick="fbLogin();" onMouseOver="this.style.cursor='pointer';"/>
						</div>
						<div id="auth-loggedin" style="display:none; width:250px; margin:0px auto;">
							
							<br/><br/><br/><img src="img/fb2.gif" onclick="fbLogout();" onMouseOver="this.style.cursor='pointer';"/>
						</div>
				</div>
					<br>
			</div>
		
			<div id="andmed" class="text">
				<h1>
					Minu andmed
				</h1>
				<div id="specialcontainer">

					<div id="row">
						
						<div id="middle">
                  <form class="cmxform" id="commentForm" method="post" action="/CandidateServlet">
                   <fieldset>
                       <!--<legend>A simple comment form with submit validation and default messages</legend> -->
                       <p>
                         <label for="ceesnimi">Eesnimi</label>
                         <em>*</em><br><input id="ceesnimi" name="eesnimi" size="28" class="required" minlength="2" maxlength="25"/>
                       </p>
                       <p>
                         <label for="cperenimi">Perenimi</label>
                         <em>*</em><br><input id="cperenimi" name="perenimi" size="28" class="required" minlength="2" maxlength="25"/>
                       </p>
                       <p>
                         <label for="cisikukood">Isikukood</label>
                         <br><input id="cisikukood" name="isikukood" size="28" class="digits" minlength="11" maxlength="11"/>
                       </p>
                       <p>
                         <label for="cvalimisringkond">Valimisringkond</label>
                         <em>*</em><br><select id="cvalimisringkond" name="valimisringkond" class="required">
                         <option selected="" value=""> --Palun vali oma valimisringkond--</option>
                      <option value="valimisringkondnr1">Tallinna Haabersti, P�hja-Tallinna ja Kristiine linnaosa</option>
                      <option value="valimisringkondnr2">Tallinna Kesklinna, Lasnam�e ja Pirita linnaosa</option>
                      <option value="valimisringkondnr3">Tallinna Mustam�e ja N�mme linnaosa</option>
                      <option value="valimisringkondnr4">Harju- (v.a Tallinn) ja Raplamaa</option>
                      <option value="valimisringkondnr5">Hiiu-, L��ne- ja Saaremaa</option>
                      <option value="valimisringkondnr6">L��ne-Virumaa</option>
                      <option value="valimisringkondnr7">Ida-Virumaa</option>
                      <option value="valimisringkondnr8">J�rva- ja Viljandimaa</option>
                      <option value="valimisringkondnr9">J�geva- ja Tartumaa (v.a Tartu linn)</option>
                      <option value="valimisringkondnr10">Tartu linn</option>
                      <option value="valimisringkondnr11">V�ru-, Valga- ja P�lvamaa</option>
                      <option value="valimisringkondnr12">P�rnumaa</option>
                      </select>
                       </p>
                       <p>
                         <input class="submit" type="submit" value="Salvesta"/>
                       </p>
                   </fieldset>
                 </form>  
                 </div>   
                 <div id="minu"> 
                 </div> 
    					
  						<div id="right">
  							<p>
  								<div id="h��letama">
  								H&auml;&auml;letamine:<br>
  								<a href="#kandidaadid">H&auml;&auml;lt andma</a><br><br>
  								</div>
  								Kandideerimine:<br>
  								<div id="kandideerima">
  									
  								</div>
  							</p>
						</div>
					</div>
		
				</div>
			</div>
			
			<div id="kkk" class="text">
				<h1>
					Korduma kippuvad küsimused
				</h1>
				<h3>
					Kasutan IE6'te ning veebileht ei kuva korrektselt, mis ma peaksin tegema?
				</h3>
					<ul>
						<li>Hetkel on võimalik kasutada ainult Google Chrome'i ja Mozilla Firefoxi uusimaid versioone.</li>
					</ul>
				<h3>
					Kuidas hääletada?
				</h3>
					<ol>
						<li>Selleks, et anda oma hääl tuleb ennast autentida.</li><br>
						<li>Autentimise alustamiseks tuleb vajutada nupule "Sisene".</li><br>
						<li>Sisene vajutades nupule "Sisene ID-Kaardiga".</li><br>
						<li>Leia endale sobiv kandidaat kasutades selleks nupule "Kandidaadid" või "Häält andma".</li><br>
						<li>Olles kandidaadi valinud tuleb tehtud valik kinnitada.</li><br>
						<li>Eduka kinnituse puhul on hääletamine sooritatud.</li><br>
						<li>Turvalisuse tagamiseks soovitame peale hääletamist sulgeda oma brauseri aken.</li>
					</ol>
				<h3>
					Kuidas kandideerida?
				</h3>
					<ol>
						<li>Selleks, et kandideerida tuleb ennast autentida.</li><br>
						<li>Autentimise alustamiseks tuleb vajutada nupule "Sisene".</li><br>
						<li>Sisene vajutades nupule "Sisene ID-Kaardiga".</li><br>
						<li>Täida kohustuslikud väljad oma andmetega ning vajuta nupule "Salvesta".</li><br>
						<li>Peale andmete salvestamist vajuta nupule "Soovin kandideerida".</li><br>
						<li>Teie soov kandideerida tuleb kinnitada.</li><br>
						<li>Eduka kinnituse puhul olete kandideeritud.</li><br>
						<li>Turvalisuse tagamiseks soovitame peale hääletamist sulgeda oma brauseri aken.</li>
					</ol>
			</div>


				<div id="jalus">
		  			<p>
		  				Rakenduses realiseeritud e-valimiste näide on realiseeritud tehnoloogiate praktiseerimise eesmärgil 
		  				ning ei ole mõeldud reaalsete e-valimiste korraldamiseks. <br> Kokkulangevused reaalse e-valimiste protsessiga on juhuslikud.
		  			</p>
				</div> 
		</div>		
	</div>

</body>
</html>