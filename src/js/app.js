
/*
*
* BEGIN SECTION "fullpage.js initialization section"
*
*/

    $(document).ready(function(){
        $('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['logik::manufaktur', 'Leistungen', 'Arbeit', 'Ueber-uns', 'Mehr'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Home', 'Leistungen', 'Arbeiten', '&Uuml;ber uns', 'Mehr'],
            showActiveTooltip: true,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 400,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: false,
            sectionsColor:['#fbf5f3', '#fbf5f3', '#fbf5f3','#fbf5f3','#fbf5f3','fbf5f3','#fbf5f3'],
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            lazyLoading: true,

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},
        });

        showDivs(slideIndex);

    });

/*
*
* END SECTION "fullpage.js initialization section"
*
*/

/*
*
* BEGIN SECTION "Tabs in a Grid"
*
*/

    function openService(evt, cityName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("service");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.firstElementChild.className += " w3-border-red";
    };

/*
*
* END SECTION "Tabs in a Grid"
*
*/

/*
*
* BEGIN SECTION "Slideshow Indicator"
*
*/

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
      showDivs(slideIndex += n);
    };

    function currentDiv(n) {
      showDivs(slideIndex = n);
    };

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " w3-white";
    };

/*
*
* END SECTION "Slideshow Indicator"
*
*/

/*
*
* BEGIN SECTION "User Functions"
*
*/

function changeTextColor(divID) {
    document.getElementById(divID).style.background-color = '#522b47';
};

function resetTextColor(divID) {
    document.getElementById(divID).style.background-color = '#ffffff';
};

/*
*
* END SECTION "User Functions"
*
*/
