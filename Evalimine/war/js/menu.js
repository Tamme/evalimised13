var tabs,
separator = '-',
initialTab = 'esileht',
navSelector = 'ul.ui-tabs-nav a',
tabSelector = '#tabs, #statistika > #stattabs';

$.address.wrap(true);

if ($.address.value() == '/') {
$.address.history(false).value(initialTab).history(true);
}

$.address.change(function(event) {

// Selects the current anchor
var current = $('a[href=#' + event.value.replace(/^\//, '').replace('/', separator) + ']:first'),
    selection = current.attr('href'),
    href = selection.replace('/', separator),
    parts = href.split(separator),
    subselection;

// Sets the page title
$.address.title($.address.title().split(' | ')[0] + ' | ' + current.text());

if (!tabs) {
    // Creates the tabs
    tabs = $(tabSelector).tabs({
        event: 'change'
    }).css('display', 'block');
    tabs.find(navSelector).click(function(e) {
        $.address.value(e.target.hash.replace(/^#/, '').replace(separator, '/'));
        e.preventDefault();
    });
}

// Selects the parent tabs
if (parts.length != 1) {
    for (var i = 1; i < parts.length; i++) {
        tabs.tabs('select', parts.slice(0, i).join(separator));
    }
}

// Selects the chosen tab
tabs.tabs('select', selection);

// Selects the first child tab
while (subselection = $(selection + ' ' + navSelector + ':first').attr('href')) {
    tabs.tabs('select', subselection);
    selection = subselection;
}

});

// Hides the tabs during initialization
document.write('<style type="text/css"> #tabs { display: none; } </style>');




/*

<!-- <script type="text/javascript" charset="utf-8" src="http://muledesign.com/demo/tabs/js/jquery.scrollTo.js"></script> -->
<!-- <script type="text/javascript" charset="utf-8" src="http://muledesign.com/demo/tabs/js/jquery.localscroll.js"></script> -->
<!--  Ajax script that is used increases page load time to 5 or more seconds -->
<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> -->
  
*/

//$(document).ready(function(){
//  $("#tabs").tabs();
//  if($("#tabs") && document.location.hash){
//		$.scrollTo("#tabs");
//	}
//  $("#tabs ul").localScroll({ 
//    target:"#tabs",
//    duration:0,
//		hash:true
//	});
//});

//$(document).ready(function(){
//  $("#stattabs").tabs();
//  if($("#stattabs") && document.location.hash){
//		$.scrollTo("#stattabs");
//	}
//  $("#stattabs ul").localScroll({ 
//    target:"#stattabs",
//    duration:0,
//		hash:true
//	});
//});
