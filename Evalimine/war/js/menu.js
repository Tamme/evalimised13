var tabs,
    separator = '-',
    initialTab = 'esileht',
    navSelector = 'ul.ui-tabs-nav a',
    tabSelector = '#tabs, #statistika > #stattabs';

$.address.wrap(true);

if ($.address.value() === '/') {
    $.address.history(false).value(initialTab).history(true);
}

$.address.change(function (event) {

    // Selects the current anchor
    "use strict";
    var current = $('a[href=#' + event.value.replace(/^\//, '').replace('/', separator) + ']:first'),
        selection = current.attr('href'),
        href = selection.replace('/', separator),
        parts = href.split(separator),
        subselection,
        i;

    // Sets the page title
    $.address.title($.address.title().split(' | ')[0] + ' | ' + current.text());

    if (!tabs) {
        // Creates the tabs
        tabs = $(tabSelector).tabs({
            event: 'change'
        }).css('display', 'block');
        tabs.find(navSelector).click(function (e) {
            $.address.value(e.target.hash.replace(/^#/, '').replace(separator, '/'));
            e.preventDefault();
        });
    }

    // Selects the parent tabs
    if (parts.length !== 1) {
        for (i = 1; i < parts.length; i += 1) {
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

//Errors
//line 49 character 25Unexpected assignment expression.
//    while (subselection = $(selection + ' ' + navSelector + ':first').attr('href')) {
//line 57 character 1document.write can be a form of eval.
//document.write('<style type="text/css"> #tabs { display: none; } </style>');
