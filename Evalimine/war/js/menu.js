 var tabs,
 tabEvent = false,
 initialTab = 'Esileht',
 navSelector = '#tabs .ui-tabs-nav',
 navFilter = function(el) {
     return $(el).attr('href').replace(/^#/, '');
 },
 panelSelector = '#tabs .ui-tabs-panel',
 panelFilter = function() {
     $(panelSelector + ' a').filter(function() {
         return $(navSelector + ' a[title=' + $(this).attr('title') + ']').size() != 0;
     }).each(function(event) {
         $(this).attr('href', '#' + $(this).attr('title').replace(/ /g, '_'));
     });
 };

// Initializes plugin features
$.address.strict(false).wrap(true);

if ($.address.value() == '') {
 $.address.history(false).value(initialTab).history(true);
}

// Address handler
$.address.init(function(event) {

 // Adds the ID in a lazy manner to prevent scrolling
 $(panelSelector).attr('id', initialTab);

 // Enables the plugin for all the content links
 $(panelSelector + ' a').address(function() {
     return navFilter(this);
 });
 
 panelFilter();

 // Tabs setup
 tabs = $('#tabs')
     .tabs({
         load: function(event, ui) {
             // Filters the content and applies the plugin if needed
             $(ui.panel).html($(panelSelector, ui.panel).html());
             panelFilter();
         },
         fx: {
             opacity: 'toggle', 
             duration: 'fast'
         }
     })
     .css('display', 'block');

 // Enables the plugin for all the tabs
 $(navSelector + ' a').click(function(event) {
 	tabEvent = true;
     $.address.value(navFilter(event.target));
     tabEvent = false;
     return false;
 });

}).change(function(event) {

 var current = $('a[href=#' + event.value + ']:first');
 
 // Sets the page title
 $.address.title($.address.title().split(' | ')[0] + ' | ' + current.text());

 // Selects the proper tab
 if (!tabEvent) {
     tabs.tabs('select', current.attr('href'));
 }
 
});

// Hides the tabs during initialization
document.write('<style type="text/css"> #tabs { display: none; } </style>');

//--------------------------------------------messing with submenu

 var tabs2,
 tabEvent2 = false,
 initialTab2 = 'Esileht',
 navSelector2 = '#stattabs .ui-tabs-nav',
 navFilter2 = function(el2) {
     return $(el2).attr('href').replace(/^#/, '');
 },
 panelSelector2 = '#stattabs .ui-tabs-panel',
 panelFilter2 = function() {
     $(panelSelector2 + ' a').filter(function() {
         return $(navSelector2 + ' a[title=' + $(this).attr('title') + ']').size() != 0;
     }).each(function(event) {
         $(this).attr('href', '#' + $(this).attr('title').replace(/ /g, '_'));
     });
 };

// Initializes plugin features
$.address.strict(false).wrap(true);

if ($.address.value() == '') {
 $.address.history(false).value(initialTab2).history(true);
}

// Address handler
$.address.init(function(event) {

 // Adds the ID in a lazy manner to prevent scrolling
 $(panelSelector2).attr('id', initialTab2);

 // Enables the plugin for all the content links
 $(panelSelector2 + ' a').address(function() {
     return navFilter2(this);
 });
 
 panelFilter();

 // Tabs setup
 tabs2 = $('#stattabs')
     .tabs({
         load: function(event, ui) {
             // Filters the content and applies the plugin if needed
             $(ui.panel).html($(panelSelector2, ui.panel).html());
             panelFilter2();
         },
         fx: {
             opacity: 'toggle', 
             duration: 'fast'
         }
     })
     .css('display', 'block');

 // Enables the plugin for all the tabs
 $(navSelector2 + ' a').click(function(event) {
 	tabEvent2 = true;
     $.address.value(navFilter2(event.target));
     tabEvent2 = false;
     return false;
 });

}).change(function(event) {

 var current2 = $('a[href=#' + event.value + ']:first');
 
 // Sets the page title
 $.address.title($.address.title().split(' | ')[0] + ' | ' + current2.text());

 // Selects the proper tab
 if (!tabEvent2) {
     tabs2.tabs('select', current2.attr('href'));
 }
 
});

// Hides the tabs during initialization
document.write('<style type="text/css"> #stattabs { display: none; } </style>');


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
