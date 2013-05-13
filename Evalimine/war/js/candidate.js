//------------------ config section starts ------------------
//input variables
var fbAppId = "507516239283608"; //your app Id goes here

//output variables available in JS after Fb login
var fb_id; //unique fb id/key of logged in user
var first_name;
var last_name;
var full_name; //full name as on Fb profile
var email; //email id 
var personId = -1;
var voted;
var votedname;
var myArea;
$(function () {
    "use strict";
    if (personId === -1) {
        $("#middle").hide();
        $('#logisisse').html("Andmete nägemiseks või salvestamiseks peate olema sisse logitud");
    }

});

//------------------ config section ends --------------------

// Load the SDK Asynchronously
(function (d) {
    "use strict";
    var js, id = 'facebook-jssdk';
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    d.getElementsByTagName('head')[0].appendChild(js);
}(document));

window.fbAsyncInit = function () {
    "use strict";
    FB.init({
        appId: fbAppId,
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true // parse XFBML
    });



    // listen for and handle auth.statusChange events
    FB.Event.subscribe('auth.statusChange', function (response) {
        if (response.authResponse) {
            // user has auth'd your app and is logged into Facebook
            FB.api('/me', function (user) {
                if (user.name) {
                    fb_id = user.id;
                    $.get("LoginServlet", {
                        facebook: fb_id
                    }, function (items) {
                        personId = items[0].id;
                        voted = items[0].voting;
                        if (personId > 0) {
                            $("#middle").hide();
                            $('#logisisse').html("");
                        } else {
                            $("#middle").show();
                            $('#logisisse').html("");
                        }

                    });
                    first_name = user.first_name;
                    last_name = user.last_name;
                    full_name = user.name;
                    email = user.email;


                    //this is my JS function to display output variables mentioned in config
                    //you can replace with your own function.
                }
            });
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
    "use strict";
    FB.login();
}

//call facebook logout

function fbLogout() {
    "use strict";
    FB.logout();
}




$(function () {
    "use strict";
    $('#large-img').hide();
    $('#large-img').load(function () {
        $('#loader').hide();
        $('#large-img').show();
    });
});

var candidateList = "<h3>Kandidaatide nimekiri</h3>";
var candidateOne = "<h3>Kandidaadi info</h3>";
var nameArray = [];
var voteArray = [];
var test = [1, 2, 3, 34, 4];
var ctx;
var counter = 0;

function getCountryStat() {
    "use strict";
    var param = "country";
    $.get("StatisticsServlet", {
        values: param
    }, function (items) {
        var text = "<table id='sorting' class='sortable' border='1'><thead><tr><th>Erakond</th><th>Hääli</th><th>Osakaal</th></tr></thead>", i, newTableObject = document.getElementById("sorting");
        for (i = 0; i < items.length; i += 1) {
            text += "<tr><td>" + items[i].name + "</td><td>" + items[i].votes + "</td><td>" + items[i].percentage + "</td>";
        }
        text += "</table>";
        $('#sortingdiv').html(text);
        sorttable.makeSortable(newTableObject);
    });
}

function getCandidateStat(isModify) {
    "use strict";
    var param = "candidate";
    $.get("StatisticsServlet", {
        values: param
    }, function (items) {
        var i;
        for (i = 0; i < items.length; i += 1) {
            nameArray[i] = items[i].fullname;
            voteArray[i] = items[i].votes;
        }
        if (!isModify && counter < 1) {
            create();
        }
        esimene();
        counter += 1;
    });


}

$(document).ready(function () {
    "use strict";
    $('#commentForm').submit(function () {
        var eesnimi = $("#ceesnimi").val(), perenimi = $("#cperenimi").val(), isikukood = $("#cisikukood").val(), area = $("#cvalimisringkond option:selected").val(), param = eesnimi + " " + perenimi + " " + isikukood + " " + area + " " + fb_id;
        $.post("CandidateServlet", {
            values: param
        });
    });
});

$(document).ready(function () {
    "use strict";
    $('#areaStatForm').submit(function (e) {
        e.preventDefault();
        var param = $("#areaId option:selected").val(), text = "Vali mõni piirkond";
        if (param === "Eesti") {
            $('#areaStatistics').html(text);
        } else {
            $.get("StatisticsServlet", {
                values: param
            }, function (items) {
                var text = "<table id='sorting' class='sortable' border='1'><thead><tr><th>Erakond</th><th>Hääli</th><th>Osakaal</th></tr></thead>", i;
                for (i = 0; i < items.length; i += 1) {
                    text += "<tr><td>" + items[i].name + "</td><td>" + items[i].votes + "</td><td>" + items[i].percentage + "</td>";
                }
                text += "</table>";
                $('#areaStatistics').html(text);
            });
        }
    });
});

function getPerson(id) {
    "use strict";
    var $id2 = personId;
	$.get("CandidateServlet", {values:$id2}, function(items) {
		myArea = items[0].area;
	});
    var loggedId = personId;
    //var logged = document.getElementById("logging").value;
    var $id = id;
    $.get("CandidateServlet", {
        values: $id
    }, function (items) {
        var extra = "";
        alert(myArea);
        alert(items[0].area);
        alert(personId);
        alert(voted);
        if (personId > 0 && voted == 0 && myArea == items[0].area) {
        	alert("gfdg");
            extra = "<tr><th>Vali antud kandidaat</th><td><a href='evalimine.html'><button type='button' onclick=sendVote(" + items[0].id + "," + loggedId + ") class='button'>Hääleta</button></a></tr>";
        }
        var text = "<table class='candidateInfo' border='1'>" +
            "<tr><th>Isiku (isiku)kood </th><td>" + items[0].code + "</td><tr>" +
            "<tr><th>Isiku eesnimi </th><td>" + items[0].first + "</td><tr>" +
            "<tr><th>Isiku perenimi </th><td>" + items[0].last + "</td><tr>" +
            "<tr><th>Erakonna lühend </th><td>" + items[0].short + "</td><tr>" +
            "<tr><th>Erakonna nimi </th><td>" + items[0].name + "</td><tr>" +
            "<tr><th>Piirkonna nimi </th><td>" + items[0].area + "</td><tr>" +
            "<tr><th>Valimis nr </th><td>" + items[0].id + "</td><tr>" + extra + "</table>";
        $('#list').html(text);
    });
    $('#candHeading').html(candidateOne);
}



function setCandidate() {
    "use strict";
    var $id = personId;
    $.post("MyDataServlet", {
        values: $id
    }, function (reply) {

        $('#kandideerima').html(reply);
    });
}

function removeCandidate() {
    "use strict";
    var $id = personId;
    $.post("MyDataServlet2", {
        values: $id
    }, function (reply) {

        $('#kandideerima').html(reply);
    });
}

function removeVote() {
    "use strict";
    var $id = personId;
    $.post("removeVoteServlet", {
        values: $id
    }, function (reply) {
        $('#tühistamine').html(reply);
    });
}

$(document).ready(function () {
    "use strict";
    $('#candidateForm').submit(function (e) {
        e.preventDefault();
        var party = $("#partyID option:selected").val(), area = $("#areas option:selected").val(), search = $("#searcharea").val(), $param = personId + ";" + party + ";" + area + ";" + search;
        if (area === 'Eesti' && party === 'allParties') {
            $.get("CandidateServlet", {
                values: $param
            }, function (items) {
                var text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Piirkond</th><th>Isikukood</th><th>Erakonna nimi</th><th>Erakonna lühend</th><th></th></tr>", i;
                for (i = 0; i < items.length; i += 1) {
                    text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].area +
                        "</td><td>" + items[i].code + "</td><td>" + items[i].name + "</td><td>" + items[i].short +
                        "</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
                }
                text += "</table>";
                $('#list').html(text);
            });
            $('#candHeading').html(candidateList);
        } else if (area === 'Eesti' && party !== 'allParties') {
            $.get("CandidateServlet", {
                values: $param
            }, function (items) {
                var i, text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Piirkond</th><th>Isikukood</th><th></th></tr>";
                for (i = 0; i < items.length; i += 1) {
                    text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].area +
                        "</td><td>" + items[i].code +
                        "</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
                }
                text += "</table>";
                $('#list').html(text);
            });
            $('#candHeading').html(candidateList);
        } else if (area !== 'Eesti' && party === 'allParties') {
            $.get("CandidateServlet", {
                values: $param
            }, function (items) {
                var i, text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Isikukood</th><th>Erakonna nimi</th><th>Erakonna lühend</th><th></th></tr>";
                for (i = 0; i < items.length; i += 1) {
                    text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].code +
                        "</td><td>" + items[i].name + "</td><td>" + items[i].short +
                        "</td><td><button type='button' onclick=getPerson(" + items[i].id + ") class='button'>Info</button></tr>";
                }
                text += "</table>";
                $('#list').html(text);
            });
            $('#candHeading').html(candidateList);
        } else {
            $.get("CandidateServlet", {
                values: $param
            }, function (items) {
                var i, text = "<table class='candidateTable' border='1'><tr><th>Eesnimi</th><th>Perenimi</th><th>Isikukood</th><th></th></tr>";
                for (i = 0; i < items.length; i += 1) {
                    text += "<tr><td>" + items[i].first + "</td><td>" + items[i].last + "</td><td>" + items[i].code +
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
    "use strict";
    var $id = personId;
    $.get("voteServlet", {values:$id}, function(items) { 
		votedname=items[0].voted_name;
	}); 
    $.get("CandidateServlet", {
        values: $id
    }, function (items) {
        var extra = "";
        var extra2 = "";
        if (voted == 1) {
            extra = "<tr><th>Sinu hääl</th><td>" + votedname + "</td><tr>";
            extra2 = "Hääle tühistamine:<br><div id='tühistamine'></div></p>";
        }
        var text;
        if (items[0].is_candidate) {
            text = "<table class='candidateInfo' border='1'>" +
                "<tr><th>Isikukood</th><td>" + items[0].code + "</td><tr>" +
                "<tr><th>Isiku eesnimi</th><td>" + items[0].first + "</td><tr>" +
                "<tr><th>Isiku perenimi</th><td>" + items[0].last + "</td><tr>" +
                "<tr><th>Erakond</th><td>" + items[0].name + "</td><tr>" +
                "<tr><th>Piirkonna nimi</th><td>" + items[0].area + "</td><tr>" +
                "<tr><th>Valimis nr</th><td>" + items[0].id + "</td><tr>" + extra + "</table>";
            $('#minu').html(text);
            $('#right').html("<p><div>Hääletamine:<br><a href='#kandidaadid'>Häält andma</a><br><br></div>Kandideerimine:<br><div id='kandideerima'></div><br><br</p>" + extra2);
            $('#kandideerima').html("<a href='evalimine.html' onclick=removeCandidate()>Tühista kandidatuur</a>");
            $('#tühistamine').html("<a href='evalimine.html' onclick=removeVote()>Tühista</a>");
        } else {
            text = "<table class='candidateInfo' border='1'>" +
                "<tr><th>Isikukood</th><td>" + items[0].code + "</td><tr>" +
                "<tr><th>Valimis nr</th><td>" + items[0].id + "</td><tr>" +
                "<tr><th>Isiku eesnimi</th><td>" + items[0].first + "</td><tr>" +
                "<tr><th>Isiku perenimi</th><td>" + items[0].last + "</td><tr>" +
                "<tr><th>Piirkonna nimi</th><td>" + items[0].area + "</td><tr>" +
                "<tr><th>Erakonna nimi</th><td><select id='cerakond' name='erakond'>" +
                "<option selected='' value=''> --Palun vali oma erakond--</option>" +
                "<option value='erakondnr1'>Mustad</option><option value='erakondnr2'>Punased</option>" +
                "<option value='erakondnr3'>Sinised</option>" + "<option value='erakondnr4'>Kollased</option>" +
                "<option value='erakondnr5'>Helesinised</option>" + "<option value='erakondnr6'>Violetsed</option>" +
                "<option value='erakondnr7'>Roosad</option>" + "<option value='erakondnr8'>Hallid</option>" +
                "<option value='erakondnr9'>Valged</option>" + "</select></td><tr>" + extra + "</td><tr>" + "</table>";
            $('#minu').html(text);
            $('#right').html("<p><div>Hääletamine:<br><a href='#kandidaadid'>Häält andma</a><br><br></div>Kandideerimine:<br><div id='kandideerima'></div></p>" + extra2);
            $('#kandideerima').html("<a href='evalimine.html' onclick='setCandidate()'>Soovin kandideerida</a>");
            $('#tühistamine').html("<a href='evalimine.html' onclick=removeVote()>Tühista</a>");
        }
    });
}