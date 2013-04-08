<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.lang.String.*" %>
<%@ page import="com.google.appengine.api.rdbms.AppEngineDriver" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!doctype html>
 
<html lang="en">
<head>
<meta charset="utf-8" />
<title>E-valimine 2013</title>
  
<!-- CSS -->
<link rel="stylesheet" href="style.css" />
<link type="text/css" href="jquery-ui-1.8.13.custom.css" rel="stylesheet">

<!-- KUI KÕIK NEED SCRIPTI READ EEMALDADA MILLEL ON KOMMENTAAR SIIS GOOGLE SUGGEST TÖÖTAB AGA LEHT LÄHEB KATKI -->
<script type="text/javascript" src="js/jquery-1.8.2.min.js" charset="utf-8"></script>														
<!-- <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>  -->
<script type="text/javascript" src="js/jquery-ui-1.8.13.js" charset="utf-8"></script>	<!-- Kui see eemaldada siis tabid ei tööta -->
<script type="text/javascript" src="js/jquery.address-1.6.min.js" charset="utf-8"></script>
<script type="text/javascript" src="js/menu.js" charset="utf-8"></script>							<!-- Kui see eemaldada siis on lehed üksteise all -->
<script type="text/javascript" src="js/sort.js" charset="utf-8"></script>
<script type="text/javascript" src="js/candidate.js" charset="utf-8"></script>
<script type="text/javascript" src="js/validate.js" charset="utf-8"></script>

 <script>
 var TSort_Data = new Array ('sorting', 's', 'i', 'f');
 var TSort_Initial =  new Array ('0A');
 
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
<%
	UserService userService = UserServiceFactory.getUserService();
	User user = userService.getCurrentUser();
%>
<body onload="getPersonData()">
	<div class="container">
		<div id="header" class="logo">
			<a href="evalimine.jsp"><img class="logo" src="img/logo3.png"></img></a>
		</div>
		<div id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
		  <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all menu">
		    <li class="ui-corner-top ui-tabs-selected ui-state-active"><a href="#esileht">Esileht</a></li>
		    <li class="ui-corner-top ui-state-default"><a href="#kandidaadid">Kandidaadid</a></li>
		    <li class="ui-corner-top ui-state-default"><a href="#kkk">KKK</a></li>
		    <li class="ui-corner-top ui-state-default"><a href="#statistika">Statistika</a></li>
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
				<%
					boolean logged = userService.isUserLoggedIn();
				%>
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
						<%if (logged) {%>
							<input type="hidden" name="isLogged" id="logging" value="true">
						<%}
						else { %>
							<input type="hidden" name="isLogged" id="logging" value="false">
						<%}
						%>
						
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
						    <li class="ui-corner-top ui-tabs-selected ui-state-active"><a href="#statistika-riigiSisu">Statistika riigi lõikes</a></li>
						    <li class="ui-corner-top ui-state-default"><a href="#statistika-piirkonnaSisu">Statistika piirkonna lõikes</a></li>
						    <li class="ui-corner-top ui-state-default"><a href="#statistika-parteiSisu">Statistika parteide lõikes</a></li>
						    <li class="ui-corner-top ui-state-default"><a href="#statistika-kandidaadiSisu">Statistika kandidaatide lõikes</a></li>
					  	</ul>
					<div id="riigiSisu" class="text">
						<h1>
							Häälte jagunemine riigi lõikes
						</h1>
						<div id="statistika-riigiSisu">
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

						<div id="statistika-piirkonnaSisu" class="text">
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
					<%
					    if (user != null) {
					      pageContext.setAttribute("user", user);
					%>
					<p>Oled sisse logitud nimega ${fn:escapeXml(user.nickname)}. (
					<a href="<%= userService.createLogoutURL(request.getRequestURI()) %>">Logi v&#228;lja</a>.)</p>
					<%
					    } else {
					%>
					
					<a href="<%= userService.createLoginURL(request.getRequestURI()) %>" id="idkaardinupp"></a>
					
					<%
					    }
					%>
					<!-- Viitab vanale lehele, peaks viitama #andmed tab'ile ja muutma sisene nupu "Logi välja"-ks-->
						
					</div>
					<br>
				</div>
				<div id="andmed" class="text">
					<h1>
						Minu andmed
					</h1>
					<div id="specialcontainer">
						<%
							boolean logitud = userService.isUserLoggedIn();
					    	if(logitud==true){
						%>
						<div id="row">
							
							<div id="middle">
	    					</div>
	    					
	  						<div id="right">
	  							<p>
	  								<div id="h��letama">
	  								H&auml;&auml;letamine:<br>
	  								<a href="#kandidaadid">H&auml;&auml;lt andma</a><br><br>
	  								</div>
	  								Kandideerimine:<br>
	  								<div id="kandideerima">
	  									<a href="javascript:void(0)" onclick="kandideerimisFunktsioon()">Soovin kandideerida</a>
	  								</div>
	  							</p>
							</div>
						</div>
						<%
						    } else {
						%>
							Andmete n&#228;gemiseks ja h&#228;&#228;letamiseks peate olema sisse logitud.	
						<%
						    }
						%>				
					</div>
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