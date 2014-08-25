var menuLeft = document.getElementById( 'na-menu-s1' ),
	menuRight = document.getElementById( 'na-menu-s2' ),
	menuTop = document.getElementById( 'na-menu-s3' ),
	menuBottom = document.getElementById( 'na-menu-s4' ),
	slideTop = document.getElementById( 'na-menu-s5' ),
	showLeft = document.getElementById( 'showLeft' ),
	showRight = document.getElementById( 'showRight' ),
	showTop = document.getElementById( 'showTop' ),
	showBottom = document.getElementById( 'showBottom' ),
	showLeftPush = document.getElementById( 'showLeftPush' ),
	showRightPush = document.getElementById( 'showRightPush' ),
	showTopPush = document.getElementById( 'showTopPush' ),
	showSubPush = document.getElementById( 'showSubPush' ),
	naBar = document.getElementById( 'na-main-bar' ),
	subNav = document.getElementById( 'na-sub-nav' ),
	defocus = document.getElementById( 'defocus' ),
	ev = document.getElementById( 'everything' ),
	body = document.body;

$(showLeft).on( "click", function() {
	$( menuLeft ).toggleClass( "na-menu-open" );
	$(defocus).on('click', function(){
      showLeft.click()
    });
});
$(showRight).on( "click", function() {
	$( menuRight ).toggleClass( "na-menu-open" );
	$(defocus).on('click', function(){
      showRight.click()
    });
});
$(showTop).on( "click", function() {
	$( slideTop ).toggleClass( "na-menu-open" );
	$(defocus).on('click', function(){
      showTop.click()
    });
});
$(showBottom).on( "click", function() {
	$( menuBottom ).toggleClass( "na-menu-open" );
	$(defocus).on('click', function(){
      showBottom.click()
    });
});
$(showLeftPush).on( "click", function() {
	$( body ).toggleClass( "na-menu-push-toright" );
	$( menuLeft ).toggleClass( "na-menu-open" );
	$( naBar ).toggleClass( "na-menu-push-toright" );
	$(defocus).on('click', function(){
      showLeftPush.click()
    });
});
$(showRightPush).on( "click", function() {
	$( body ).toggleClass( "na-menu-push-toleft" );
	$( menuRight ).toggleClass( "na-menu-open" );
	$( naBar ).toggleClass( "na-menu-push-toleft" );
	$(defocus).on('click', function(){
      showRightPush.click()
    });
});
$(showTopPush).on( "click", function() {
	$( body ).toggleClass( "top-push-toBottom" );
	$( menuTop ).toggleClass( "na-menu-open" );
	$( naBar ).toggleClass( "na-menu-open" );
	$(defocus).on('click', function(){
      showTopPush.click()
    });
});
$(showSubPush).on( "click", function() {
	$( body ).toggleClass( "top-push-toBottom" );
	$( subNav ).toggleClass( "na-menu-open" );
	$(defocus).on('click', function(){
      showSubPush.click()
    });
});


var scrollHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.na-bar' ),
		didScroll = false,
		changeHeaderOn = 200;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 150 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$( header ).addClass( 'shrink' );
		}
		else {
			$( header ).removeClass( 'shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();