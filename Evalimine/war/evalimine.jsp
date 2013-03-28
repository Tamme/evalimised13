<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.lang.String.*" %>
<%@ page import="com.google.appengine.api.rdbms.AppEngineDriver" %>


<!doctype html>
 
<html lang="en">
<head>
<meta charset="utf-8" />
<title>E-valimine 2013</title>
  
<!-- script 1 -->
<link rel="stylesheet" href="style.css" />
 
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<!--  Ajax script that is used increases page load time to 5 or more seconds -->
<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> -->
<script type="text/javascript" src="js/sort.js" charset="utf-8"></script>
<script type="text/javascript" src="js/candidate.js" charset="utf-8"></script>
<script type="text/javascript" src="js/validate.js" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8" src="http://muledesign.com/demo/tabs/js/jquery.scrollTo.js"></script>
<script type="text/javascript" charset="utf-8" src="http://muledesign.com/demo/tabs/js/jquery.localscroll.js"></script>
  
 <script>
 var TSort_Data = new Array ('sorting', 's', 'i', 'f');
 var TSort_Initial =  new Array ('0A');
 
 $(document).ready(function(){
     $("#tabs").tabs();
     if($("#tabs") && document.location.hash){
   		$.scrollTo("#tabs");
   	}
     $("#tabs ul").localScroll({ 
       target:"#tabs",
       duration:0,
   		hash:true
   	});
   });
 
 $(document).ready(function(){
     $("#stattabs").tabs();
     if($("#stattabs") && document.location.hash){
   		$.scrollTo("#stattabs");
   	}
     $("#stattabs ul").localScroll({ 
       target:"#stattabs",
       duration:0,
   		hash:true
   	});
   });

     
//  $(function() {
//  	$( "#stattabs" ).tabs();
//  });
 
 $(document).ready(function(){
 	$("#commentForm").validate();
 });

 $(window).load(function() {
   $('#loading').hide();
 });

/* Active tab view still not implemented */
/* 	// Wait until the DOM has loaded before querying the document
	$(document).ready(function(){
		$('ul.tabs').each(function(){
			// For each set of tabs, we want to keep track of
			// which tab is active and it's associated content
			var $active, $content, $links = $(this).find('a');

			// If the location.hash matches one of the links, use that as the active tab.
			// If no match is found, use the first link as the initial active tab.
			$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
			$active.addClass('active');
			$content = $($active.attr('href'));

			// Hide the remaining content
			$links.not($active).each(function () {
				$($(this).attr('href')).hide();
			});

			// Bind the click event handler
			$(this).on('click', 'a', function(e){
				// Make the old tab inactive.
				$active.removeClass('active');
				$content.hide();

				// Update the variables with the new link and content
				$active = $(this);
				$content = $($(this).attr('href'));

				// Make the tab active.
				$active.addClass('active');
				$content.show();

				// Prevent the anchor's default click action
				e.preventDefault();
			});
		});
	});  */
 
</script>  
</head>
  
<body>
	<div class="container">
		<div id="header" class="logo">
			<a href="Evalimine.html"><img class="logo" src="img/logo3.png"></img></a>
		</div>
		<div id="tabs">
		  <ul class="menu">
		    <li><a href="#esileht">Esileht</a></li>
		    <li><a href="#kandidaadid">Kandidaadid</a></li>
		    <li><a href="#kkk">KKK</a></li>
		    <li><a href="#statistika">Statistika</a></li>
		    <li><a href="#andmed">Minu andmed</a></li>
		    <li><a href="#sisene">Sisene</a></li>
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
					<form id="candidateForm" action="/evalimine.jsp" method="get">
						Vali piirkond:
					<select name="area">
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
						<select name="party" id="parties">
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
						<button id="candSearch">Otsi</button>
					</form>
				</div>
				<div class="text" id="candHeading">
				</div>
				<% 
					
					String party = request.getParameter("party"); 
					String area = request.getParameter("area"); 
					if (party != null && area != null) {
						%><p>what is this</p> <%
					}
				%>
				<div id="list">
				</div>
			</div>
			
			<div id="loading">
  				<img src="img/ajax-loader.gif" id="img-load" />
			</div>
			
			<div id="statistika" class="text">
				<div id="stattabs">
					  	<ul class="statmenu">
						    <li><a href="#riigiSisu">Statistika riigi lõikes</a></li>
						    <li><a href="#piirkonnaSisu">Statistika piirkonna lõikes</a></li>
						    <li><a href="#parteiSisu">Statistika parteide lõikes</a></li>
						    <li><a href="#kandidaadiSisu">Statistika kandidaatide lõikes</a></li>
					  	</ul>
					<div id="riigiSisu" class="text">
						<h1>
							Häälte jagunemine riigi lõikes
						</h1>
						<div id="statistikaSisu">
							<table id="sorting" class="candidateTable">
								<thead>
									<tr>
										<th>Erakond</th>
										<th>Hääli</th>
										<th>Osakaal</th>
									</tr>
								</thead>
									<tr>
										<td>Mustad</td>
										<td>1000</td>		
										<td>10%</td>
									</tr>
									<tr>
										<td>Punased</td>
										<td>2000</td>		
										<td>20%</td>
									</tr>
									<tr>
										<td>Sinised</td>
										<td>200</td>		
										<td>2%</td>
									</tr>
									<tr>
										<td>Kollased</td>
										<td>3000</td>		
										<td>30%</td>
									</tr>
									<tr>
										<td>Helesinised</td>
										<td>100</td>		
										<td>1%</td>
									</tr>
									<tr>
										<td>Violetsed</td>
										<td>550</td>		
										<td>5.5%</td>
									</tr>
									<tr>
										<td>Roosad</td>
										<td>2500</td>		
										<td>25%</td>
									</tr>
									<tr>
										<td>Hallid</td>
										<td>250</td>		
										<td>2.5%</td>
									</tr>
									<tr>
										<td>Valged</td>
										<td>400</td>		
										<td>4%</td>
									</tr>
							</table>
							<br>
							<br>
							<!-- Print vaated on illustratiivsed mitte funktsionaalsed ning print nupp võiks olla statmenu.js all mitte buttonina realiseeritud -->
							<div class="printbutton">
								<a href="riigistatprint.html">Prindi</a>
							</div>
						</div>
					</div>

						<div id="piirkonnaSisu" class="text">
							<h1>
								Häälte jagunemine piirkondade lõikes
							</h1>
							<div class="piirkonnastat">
								<img class="piirkonnastat" src="img/eestikaart2.gif"></img>
							</div>
							<br>
							<br>
							<!-- Print vaated on illustratiivsed mitte funktsionaalsed ning print nupp võiks olla statmenu.js all mitte buttonina realiseeritud -->
							<div class="printbutton">
								<a href="piirkonnastatprint.html">Prindi</a>
							</div>
						</div>
						
						<div id="parteiSisu" class="text">
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
						
						<div id="kandidaadiSisu">
							<div class="text">
								<h1>
									Häälte jagunemine konktreetsete kandidaatide lõikes
								</h1>
							</div>
							<div class="kandidaadistat">
								<img class="kandidaadistat" src="img/kandidaadistat.png"></img>
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

		<div id="kkk" class="text">
			<h1>
				Korduma kippuvad küsimused
			</h1>
			<h3>
				Kasutan IE6'te ning veebileht ei kuva korrektselt, mis ma peaksin tegema?
			</h3>
			<p>
				<ul>
					<li>Hetkel on võimalik kasutada ainult Google Chrome'i ja Mozilla Firefoxi uusimaid versioone.</li>
				</ul>
			</p>
			<h3>
				Kuidas hääletada?
			</h3>
			<p>
				<ol>
					<li>Selleks, et anda oma hääl tuleb ennast autentida.</li><br>
					<li>Autentimise alustamiseks tuleb vajutada nupule "Sisene".</li><br>
					<li>Sisene vajutades nupule "Sisene ID-Kaardiga".</li><br>
					<li>Leia endale sobiv kandidaat kasutades selleks nupule "Kandidaadid" või "Häält andma".</li><br>
					<li>Olles kandidaadi valinud tuleb tehtud valik kinnitada.</li><br>
					<li>Eduka kinnituse puhul on hääletamine sooritatud.</li><br>
					<li>Turvalisuse tagamiseks soovitame peale hääletamist sulgeda oma brauseri aken.</li>
				</ol>
			</p>
			<h3>
				Kuidas kandideerida?
			</h3>
			<p>
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
			</p>
		</div>

				<div id="sisene" class="text">
					<h1>
						Autentimine
					</h1>
					<h3>
						Sisenemiseks vali sobiv autentimismeetod:
					</h3>
					<div id=nupp4>
					
					<!-- Viitab vanale lehele, peaks viitama #andmed tab'ile ja muutma sisene nupu "Logi välja"-ks-->
						<a href="javascript:void(0)" id="idkaardinupp"></a>
					</div>
					<br>
				</div>
				<div id="andmed" class="text">
					<%
						Connection c = null;
						c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
						ResultSet rs = c.createStatement().executeQuery("SELECT guestName, content, entryID FROM entries"); 
					%>
					<h1>
						Minu andmed
					</h1>
					<div id="specialcontainer">
						<div id="row">
							<div id="left">
	  							<p>
	  								<img id="loader" src="img/ajax-loader.gif"></img>
	  								<img id="large-img" border="0" src="img/avatarm.jpg" width="120px"></img><br>
	  								<a href="javascript:void(0)">Laadi pilt üles</a>
	  							</p>
	  						</div>
							<div id="middle">
	    						<form class="cmxform" id="commentForm" method="post" action="/candidate">
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
	   									</p>
	   									<p>
	     									<label for="erakond">Erakond</label>
	     									<br>
	     									<select id="cerakond" name="erakond">
	     										<option selected="" value=""> --Palun vali oma erakond--</option>
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
	   									</p>
	   									<p>
	     									<input class="submit" type="submit" value="Salvesta"/>
	   									</p>
	 								</fieldset>
	 							</form>			
	   						</div>
	  						<div id="right">
	  							<p>
	  								<div id="hääletama">
	  								Hääletamine:<br>
	  								<a href="javascript:void(0)">Häält andma</a><br><br>
	  								</div>
	  								Kandideerimine:<br>
	  								<div id="kandideerima">
	  									<a href="javascript:void(0)" onclick="kandideerimisFunktsioon()">Soovin kandideerida</a>
	  								</div>
	  						</p>
						</div>
					</div>		
				</div>
				</div>
				<div id="jalus"><br><br>
		  			<p>
		  				Tähelepanu! Rakenduses realiseeritud e-valimiste näide on realiseeritud tehnoloogiate praktiseerimise eesmärgil 
		  				ning ei ole mõeldud reaalsete e-valimiste korraldamiseks. Kokkulangevused reaalse e-valimiste protsessiga on juhuslikud.
		  			</p>
				</div> 
		</div>		
	</div>
</body>
</html>