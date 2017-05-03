function Slider_Init() {

    // tablet
    if ($(".tablet-slider .slider").length > 0) {
        // -----------------------------
        //   Force Centered Navigation
        // -----------------------------
        var frame = $('.tablet-slider');
        var wrap  = frame.parent();

        // Call Sly on frame
        frame.sly({
            horizontal: true,
            itemNav: 'forceCentered',
            smart: true,
            activateMiddle: true,
            activateOn: 'click',
            mouseDragging: true,
            touchDragging: true,
            releaseSwing: true,
            startAt: 0,
            scrollBar: null,
            scrollBy: false,
            speed: 300,
            elasticBounds: true,
            easing: 'linear',
            dragHandle: true,
            dynamicHandle: true,
            clickBar: true,

            // Navigation buttons
            forward:  null, // Selector or DOM element for "forward movement" button.
            backward: null, // Selector or DOM element for "backward movement" button.
            prev:     null, // Selector or DOM element for "previous item" button.
            next:     null, // Selector or DOM element for "next item" button.
            prevPage: null, // Selector or DOM element for "previous page" button.
            nextPage: null, // Selector or DOM element for "next page" button.

            // Automated cycling
            cycleBy:       'items',  // Enable automatic cycling by 'items' or 'pages'.
            cycleInterval: 3000,  // Delay between cycles in milliseconds.
            pauseOnHover:  false, // Pause cycling when mouse hovers over the FRAME.
            startPaused:   false, // Whether to start in paused sate.

            // Classes
            draggedClass:  'dragged', // Class for dragged elements (like SLIDEE or scrollbar handle).
            activeClass:   'active',  // Class for active items and pages.
            disabledClass: 'disabled' // Class for disabled navigation elements

        });

        $(window).resize(function(e) {
            if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                $('.tablet-slider').sly('reload');
            }
        });
    }

    //mobile
    if ($(".mobile-slider .slider").length > 0) {
        // -----------------------------
        //   Force Centered Navigation
        // -----------------------------
        var frame = $('.mobile-slider');
        var wrap  = frame.parent();

        // Call Sly on frame
        frame.sly({
            horizontal: true,
            itemNav: 'forceCentered',
            smart: true,
            activateMiddle: true,
            activateOn: 'click',
            mouseDragging: true,
            touchDragging: true,
            releaseSwing: true,
            startAt: 0,
            scrollBar: null,
            scrollBy: false,
            speed: 300,
            elasticBounds: true,
            easing: 'linear',
            dragHandle: true,
            dynamicHandle: true,
            clickBar: true,

            // Pagesbar
            pagesBar:       wrap.find('.pages'), // Selector or DOM element for pages bar container.
            activatePageOn: 'click', // Event used to activate page. Can be: click, mouseenter, ...
            pageBuilder:          // Page item generator.
                function (index) {
                    return '<li>' + (index + 1) + '</li>';
                },

            // Navigation buttons
            forward:  null, // Selector or DOM element for "forward movement" button.
            backward: null, // Selector or DOM element for "backward movement" button.
            prev:     null, // Selector or DOM element for "previous item" button.
            next:     null, // Selector or DOM element for "next item" button.
            prevPage: null, // Selector or DOM element for "previous page" button.
            nextPage: null, // Selector or DOM element for "next page" button.

            // Automated cycling
            cycleBy:       'items',  // Enable automatic cycling by 'items' or 'pages'.
            cycleInterval: 3000,  // Delay between cycles in milliseconds.
            pauseOnHover:  false, // Pause cycling when mouse hovers over the FRAME.
            startPaused:   false, // Whether to start in paused sate.

            // Classes
            draggedClass:  'dragged', // Class for dragged elements (like SLIDEE or scrollbar handle).
            activeClass:   'active',  // Class for active items and pages.
            disabledClass: 'disabled' // Class for disabled navigation elements

        });

        $(window).resize(function(e) {
            if (window.innerWidth < 768) { 
                $('.mobile-slider').sly('reload');
            }
        });

    }
}





