$(document).ready(function() {
	$(function() {
		if ($(window).width() < 1200){
			$('<div>', { class: 'mobile-menu__header'}).appendTo('.mobile-menu');
			$('.navbar .navbar-toggler').clone().appendTo('.mobile-menu__header');
			$('.mobile-menu__header .navbar-toggler').removeClass('d-none d-sm-block d-xl-none');

			$('.log-box ').clone().appendTo('.mobile-menu__header');
			$('.mobile-menu__header .log-box ').removeClass('header__login d-none d-xl-block');
			/*
			$('<form name="search" class="search" method="post" action="dist/search.php">' +
                '<input id="mobile-search-input" name="searchQuery" type="text" class="search__input" placeholder="Поиск по каталогу">' +
                '<label for="mobile-search-input"></label>' + 
              '</form>').appendTo('.mobile-menu__header');
			*/
			$('<div>', { class: 'mobile-menu__content'}).appendTo('.mobile-menu');
			$('<div>', { class: 'mobile-menu__nav'}).appendTo('.mobile-menu__content');
			$('.header').find('[type="search"]').clone().appendTo('.mobile-menu__header');
			
			$('.navbar-nav .nav-item').each(function(index) {
				var mobileAccordionNavItmText = $(this).find('.nav-link').text();
				var mobileAccordionNavItmContent = $(this).html();
				$('<div class="mobile-menu-nav-itm">' + 
					mobileAccordionNavItmContent +
					'</div>').appendTo('.mobile-menu__nav');

			});

			$('.header__consult').clone().appendTo('.mobile-menu');
			$('.mobile-menu .header__consult').removeClass('header__consult');

		};

	 	$('.navbar-toggler').click(function(e) {
	 		e.preventDefault();
	 		if ($('.navbar-toggler').hasClass('open')) {
	 			closeMenu();
	    	} else {
	    		openMenu();
	    	};
	 	});

	 	function openMenu() {
			$('body').addClass('body_menu-open');
	 		$('.mobile-menu').addClass('open');
	 		$('.navbar-toggler').addClass('open');
 			createBodyOverlay();
		};

		function closeMenu() {
			$('body').removeClass('body_menu-open');
	 		$('.mobile-menu').removeClass('open');
	 		$('.navbar-toggler').removeClass('open');
	    	removeBodyOverlay();
		};

		function createBodyOverlay() {
			$('body').prepend('<div id="body-overlay" class="body-overlay"></div>');
			setTimeout(function () {
				$('#body-overlay').addClass('body-overlay_done');
			}, 500); 
			$('#body-overlay').click(function(e) {
	 			closeMenu();
	 		});
		};

		function removeBodyOverlay() {
			$('#body-overlay').removeClass('body-overlay_done');
	    	setTimeout(function () {
				$('#body-overlay').remove();
			}, 500); 
		};

		/*
			функция переноса объекта в контейнер.
			box - селектор объекта, который нужно перенести.
			container - cелектор объекта, куда нужно перенести.
			В параметры передавать строки
		*/

		function transfer(box, container) {
			$(container).append($(box));
		};
		/*
			функция переноса детей объекта в контейнер.
			box - селектор объекта, детей которого нужно перенести.
			container - cелектор объекта, куда нужно перенести.
			В параметры передавать строки.

		*/
		function transferChild(box, container) {
			$(container).append($(box).children());
		};
	
	});

});
