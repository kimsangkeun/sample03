

// html엘리먼트 ie7,8인식;
// document.createElement('header');
// document.createElement('nav');
// document.createElement('article');
// document.createElement('section');
// document.createElement('aside');
// document.createElement('footer');

//============================================================================
//  browser check!
//============================================================================
// var ua = navigator.userAgent.toLowerCase(),
// 	doc = document.documentElement;
// if (ua.indexOf("opr") != -1) {
// 	doc.className = doc.className + " opera";
// }else if (ua.indexOf("chrome") != -1) {
// 	doc.className = doc.className + " chrome";
// }else if (ua.indexOf("safari") != -1) {
// 	doc.className = doc.className + " safari";
// }else if (ua.indexOf("firefox") != -1) {
// 	doc.className = doc.className + " firefox";
// }else if (ua.indexOf("msie") != -1) {
// 	// ie css-hack 
// 	if ((ua.match(/MSIE 10.0/i))) {
// 		doc.className = doc.className + " ie10";
// 	} else if((ua.match(/MSIE 9.0/i))) {
// 		doc.className = doc.className + " ie9";	
// 	} else if((ua.match(/MSIE 8.0/i))) {
// 		doc.className = doc.className + " ie8";	
// 	} else if((ua.match(/MSIE 7.0/i))) {
// 		doc.className = doc.className + " ie7";
// 	} else if((ua.match(/rv:11.0/i))){
// 		doc.className = doc.className + " ie11";
// 	} else {
// 		doc.className = doc.className + " edge";
// 	};
// }

// if (window.NodeList && !NodeList.prototype.forEach) {
// 	NodeList.prototype.forEach = Array.prototype.forEach;
// } // forEach 의 ie 지원

// F12 방지
//$(document).on('keydown',function(e){
//	if ( e.keyCode == 123) {
//		e.preventDefault();
//		e.returnValue = false;
//	}
//});
//
//// 마우스 우측 클릭 방지
//document.oncontextmenu = function(){ return false; }
//
//// 마우스 블록 선택 방지
//document.onselectstart = function(){ return false; }
//
//// 마우스 드래그 방지
//document.ondragstart = function(){ return false; }

var $body = $('body');
var clickEvent = (function() {
	if ('ontouchstart' in document.documentElement === true) {
		return 'touchstart';
	} else {
		return 'click';
	}
})();

// header-top-banner
const topBanner = new Swiper('.header-top-banner .swiper-container', {
	slidesPerView:1,
	autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
	direction: 'vertical',
	loop:true,
	loopAdditionalSlides: 1,
	observer: true,
	observeParents: true,
});

// header 스크롤
var scrollTop,
	headerTop;
$(window).on("scroll", function(){
	hdFix();
});

function hdFix() {
	scrollTop = $(document).scrollTop();
	headerTop = $("#header").innerHeight();

	if(scrollTop>35) {
		$("#header").addClass("fixed");
		$("#header_m").addClass("fixed");
//		$(".main.quick").addClass("fixed");
	}else {
		$("#header").removeClass("fixed");
		$("#header_m").removeClass("fixed");
//		$(".main.quick").removeClass("fixed");
	}
}

// gnb-slide
const gnbThumbSlide = new Swiper('.gnb-thumb-slide', {
	slidesPerView: 5.1,
	spaceBetween: 15,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	loop:false,
	observer: true,
	observeParents: true,
	breakpoints: {
		319: {
			slidesPerView: 2.1,
			spaceBetween: 15,
		},
		639: {
			slidesPerView: 3.1,
		},
		767: {
			slidesPerView: 4.1,
		},
	},
});
$('.gnb-thumb-slide .swiper-slide').each(function(i, e) {
	$(this).on('click', function(){
		$("#gnb_all .gnb_al_a").eq(i).trigger("click");
	});
});
$("#gnb_all .gnb_al_a").eq(0).addClass("active");
$("#gnb_all .gnb_al_a").click(function(){
	$("#gnb_all .gnb_al_a").removeClass("active");
	$(this).addClass("active");
});

// main-section
var mainVisualSlide = new Swiper('.main-sect-visual .main-visual-slide', {
	speed: 1000,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	loop: true,
	loopAdditionalSlides: 1,
	effect: 'fade',
	fadeEffect: { crossFade: false },
	pagination: {
		el: '.main-slide-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + ' active"><svg class="circ" width="15" height="15"><circle class="circ1" cx="8" cy="8" r="5" stroke="rgb(124, 148, 196)" stroke-width="2" fill="none"/><circle class="circ2" cx="8" cy="8" r="5" stroke="rgba(189, 189, 189, 0.2)" stroke-width="2" fill="none"/></svg></span>';
		},
	},
	breakpoints: {
		350: {
			pagination: {
				el: '.main-slide-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + ' active"><svg class="circ" width="10" height="10"><circle class="circ1" cx="5" cy="5" r="4" stroke="rgb(124, 148, 196)" stroke-width="2" fill="none"/><circle class="circ2" cx="5" cy="5" r="4" stroke="rgba(189, 189, 189, 0.2)" stroke-width="2" fill="none"/></svg></span>';
				},
			},
		},
		481: {
			pagination: {
				el: '.main-slide-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + ' active"><svg class="circ" width="15" height="15"><circle class="circ1" cx="8" cy="8" r="5" stroke="rgb(124, 148, 196)" stroke-width="2" fill="none"/><circle class="circ2" cx="8" cy="8" r="5" stroke="rgba(189, 189, 189, 0.2)" stroke-width="2" fill="none"/></svg></span>';
				},
			},
		},
	},
	/* ON INIT AUTOPLAY THE FIRST VIDEO */
	on: {
		slideChange: function () {
			
		},
		
	}
});

// brand-value slide
var brandValueList = ['탁월함','따뜻함','신뢰','헌신'];

const brandValueSlide = new Swiper('.brand-value-slide', {
	speed:800,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	slidesPerView: 2,
	spaceBetween: "10%",
	centeredSlides:true,
	loop:true,
	parallax: true,
	pagination: {
		el: ".brand-value-slide-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '"><em>' + brandValueList[index] + '</em></span>';
		},
	},
	navigation: {
		nextEl: ".brand-value-slide-navigation .swiper-next",
		prevEl: ".brand-value-slide-navigation .swiper-prev",
	},
	breakpoints: {
		319: { slidesPerView: 1, spaceBetween: "30px", },
		1079: { slidesPerView: 1.4, spaceBetween: "5%", },
	},
});

// main-satisfied-sect
const satisSect = document.getElementsByClassName('main-satisfied-sect')[0];
const satisList = document.querySelectorAll('.main-satisfied-sect ul li');
const satisMenu = Array.from(document.getElementsByClassName('satisfied-menu-item'));


$(window).resize(function(){
	var winWid = $(window).width();
	if(winWid < 991) {
		// main-satisfied-slide
		var mainSatisfiedThumbSlide = new Swiper("#main-satisfied-thumb-slide.swiper-container", {
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			slidesPerView: 4,
			direction: "vertical",
			spaceBetween: 0,
			observer: true,
			observeParents: true,
//			watchSlidesProgress: true,
			allowTouchMove: false,
		});
		var mainSatisfiedGallerySlide = new Swiper("#main-satisfied-gallery-slide.swiper-container", {
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			effect: "fade",
			spaceBetween: 0,
			slidesPerView: 1,
			observer: true,
			observeParents: true,
			allowTouchMove: false,
			thumbs: {
				swiper: mainSatisfiedThumbSlide,
			},
		});
	}else {
		// gnb
		const navOpen = Array.from(document.getElementsByClassName('gnb_wrap'));
		navOpen.forEach((button)=>{
			button.addEventListener('mouseenter',(e)=>{
				const list = button.getElementsByClassName('gnb_submenu')[0];
//				const list2 = button.getElementsByClassName('gnb-menu-depth2');
				gsap.fromTo(list,{y:-20,autoAlpha:0},{y:0,autoAlpha:1});
//				gsap.fromTo(list2,{y:-20,autoAlpha:0},{y:0,autoAlpha:1});
				$("#header").addClass("on");
			});
			button.addEventListener('mouseleave',(e)=>{
				const list = button.getElementsByClassName('gnb_submenu')[0];
//				const list2 = button.getElementsByClassName('gnb-menu-depth2');
				gsap.fromTo(list,{y:0,autoAlpha:1},{y:-20,autoAlpha:0});
//				gsap.fromTo(list2,{y:0,autoAlpha:1},{y:-20,autoAlpha:0});
				$("#header").removeClass("on");
			});
		});
		
		// main-sect-satisfied
		if(satisSect){
			satisList.forEach((sati,index)=>{
				sati.addEventListener('mouseenter',function(){
					satisList.forEach(sati=>sati.classList.remove('hover'));
					satisList[index].classList.add('hover');

					satisMenu.forEach(sati=>sati.classList.remove('hover'));
					satisMenu[index].classList.add('hover');
				});
			});
		}
	}
}).resize();

// brand-review-slide
const brandReviewSlide = new Swiper('.brand-review-slide', {
    speed:800,
    autoplay: {
		delay: 5000,
		disableOnInteraction: false,
    },
    spaceBetween: 10,
    navigation: {
		nextEl: '.brand-review-slide-navigation .swiper-next',
		prevEl: '.brand-review-slide-navigation .swiper-prev',
    },
	scrollbar: {
		el: ".brand-review-slide-scrollbar",
		draggable: false,
	},
    breakpoints: {
		320: { slidesPerView:1, },
		639: { slidesPerView:1.5, },
		992: { slidesPerView:2, },
		1360: { slidesPerView:2.4, },
		1440: { slidesPerView:2.6, },
		1680: { slidesPerView:3, }
    }
});

// scrollbar type01
let Swipers1 = [];
$('.progress-slide01').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers1[i] = new Swiper('#'+thisID, {
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
		scrollbar: {
			el: "#"+thisID+"-scrollbar",
			draggable: false,
		},
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		breakpoints: {
			320: { slidesPerView: 1.1, spaceBetween: 15, },
			640: { slidesPerView: 1.6, spaceBetween: 30, },
			1024: { slidesPerView: 2.3, spaceBetween: 30, },
			1280: { slidesPerView: 1.8, spaceBetween: 30, },
			1540: { slidesPerView: 2.3, spaceBetween: 35, },
		}
	});
});

// scrollbar type02
let Swipers2 = [];
$('.progress-slide02').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers2[i] = new Swiper('#'+thisID, {
		lazy: true,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		scrollbar: {
			el: "#"+thisID+"-scrollbar",
			draggable: false,
		},
		breakpoints: {
			320: { slidesPerView: 2.3, spaceBetween: 16, },
			640: { slidesPerView: 2.3, spaceBetween: 16, },
			1024: { slidesPerView: 3.2, spaceBetween: 16, },
			1280: { slidesPerView: 4, spaceBetween: 16, },
		}
	});
});

// scrollbar type03
let Swipers3 = [];
$('.progress-slide03').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers3[i] = new Swiper('#'+thisID, {
		lazy: true,
		observer: true,
		observeParents: true,
		watchOverflow : true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		scrollbar: {
			el: "#"+thisID+"-scrollbar",
			draggable: false,
		},
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		breakpoints: {
			320: { slidesPerView: 1.4, spaceBetween: 20, },
			640: { slidesPerView: 1.8, spaceBetween: 20, },
			1024: { slidesPerView: 2.4, spaceBetween: 30, },
			1280: { slidesPerView: 3, spaceBetween: 30, },
		}
	});
});

// scrollbar type04
let Swipers4 = [];
$('.progress-slide04').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers4[i] = new Swiper('#'+thisID, {
		lazy: true,
		slidesPerView: "auto",
		spaceBetween: 20,
		observer: true,
		observeParents: true,
		scrollbar: {
			el: "#"+thisID+"-scrollbar",
			draggable: false,
		},
	});
});

// tab + navigation button type01
let Swipers5 = [];
$('.navigation-slide01').each(function(i, element) {
	const thisID = $(this).attr('id');
	let names = [];

	var laserPagiList;
	if(thisID == 'sub03-02-cont04-slide') {
		laserPagiList = ['레블라이트SI','피콜로 프리미엄','젠틀맥스 프로플러스','GV'];
	}else if(thisID == 'sub03-03-cont07-slide') {
		laserPagiList = ['레블라이트SI','피콜로 프리미엄','젠틀맥스 프로플러스','GV','로터스','CO₂'];
	}else if(thisID == 'sub03-06-cont08-slide') {
		laserPagiList = ['로터스','GV','CO₂','비립종 압출'];
	}else if(thisID == 'sub04-02-cont03-slide') {
		laserPagiList = ['골드 PTT','아그네스','포텐자'];
	}else if(thisID == 'sub04-03-cont02-slide') {
		laserPagiList = ['포텐자','골드 PTT','아그네스','GV','젠틀맥스 프로플러스','씨엘로'];
	}else if(thisID == 'sub04-08-cont02-slide') {
		laserPagiList = ['포텐자','피콜로 프리미엄','젠틀맥스 프로플러스','쥬베룩','쥬베룩 볼륨','리쥬란','스킨 보툴리눔 톡신'];
	}else if(thisID == 'sub04-09-cont05-slide') {
		laserPagiList = ['포텐자','GV','씨엘로','스킨부스터'];
	}else if(thisID == 'sub07-01-cont03-slide') {
		laserPagiList = ['울트라펄스 앙코르','인라이튼 루비피코','미라젯','브이빔 퍼펙타','프락시스 듀오','피콜로 프리미엄','3DEEP','GV','레블라이트','리써FX','로터스','쥬베룩','쥬베룩 볼륨'];
	}else if(thisID == 'sub07-02-cont03-slide') {
		laserPagiList = ['피콜로 프리미엄','레블라이트'];
	}else if(thisID == 'sub07-03-cont04-slide') {
		laserPagiList = ['인라이튼 루비피코','미라젯','브이빔 퍼펙타','시크릿 고주파','리써FX','쥬베룩','쥬베룩 볼륨'];
	}else if(thisID == 'sub07-04-cont02-slide') {
		laserPagiList = ['주사치료','레이저치료','외부압박요법/수술요법'];
	}else if(thisID == 'sub07-05-cont02-slide') {
		laserPagiList = ['울트라펄스 앙코르','인라이튼 루비피코','브이빔 퍼펙타','리써FX','피콜로 프리미엄','프락시스 듀오','GV'];
	}else if(thisID == 'sub07-07-cont04-slide') {
		laserPagiList = ['울트라펄스 앙코르','인라이튼 루비피코','미라젯','피콜로 프리미엄','퓨락시스 듀오', '시크릿 고주파', '리써FX', '3DEEP', '로터스', '쥬베룩', '쥬베룩 볼륨'];
	}else if(thisID == 'sub07-07-cont04-slide-2') {
		laserPagiList = ['리써FX','3DEEP','로터스','쥬베룩','쥬베룩 볼륨'];
	}else if(thisID == 'sub07-07-cont06-slide') {
		laserPagiList = ['레블라이트 SI ','M22', 'GV', '헬리오스4', '브라이트닝 펄'];
	}else if(thisID == 'sub07-09-cont06-slide') {
		laserPagiList = ['인라이튼 루비피코','미라젯','브이빔 퍼펙타','시크릿 고주파','리써FX','울트라펄스 앙코르' ,'쥬베룩','쥬베룩 볼륨'];
	}else if(thisID == 'sub08-01-cont03-slide') {
		laserPagiList = ['엑시머','전신 광선기기','손발 광선기기','CO₂'];
	}else if(thisID == 'sub08-02-cont03-slide') {
		laserPagiList = ['약물치료','광선치료','생활습관 교정'];
	}else if(thisID == 'sub08-03-cont03-slide') {
		laserPagiList = ['엑시머 레이저','광선치료','약물치료'];
	}else if(thisID == 'sub08-04-cont03-slide') {
		laserPagiList = ['냉동치료','CO₂','GV'];
	}else if(thisID == 'sub08-05-cont03-slide') {
		laserPagiList = ['힐러1064','오니코레이저'];
	}else if(thisID == 'sub08-06-cont03-slide') {
		laserPagiList = ['전신 광선기기','손발 광선기기','엑시머 레이저'];
	}else if(thisID == 'striae_cont17-slide') { //흉터클리닉 S6페이지 슬라이드
		laserPagiList = ['바디스킨케어 LDM','코레지셀핏','이온자임','크라이오셀'];
	}

	Swipers5[i] = new Swiper('#'+thisID + ' .swiper-container', {
		lazy: true,
		centeredSlides: true,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
//			autoHeight:true, 
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		pagination: {
			el: '#'+thisID+" .swiper-pagination",
			clickable: true,
			renderBullet: function(i, className) {
				return ('<span class="' + className +'">' + laserPagiList[i] +"</span>");
			}
		},
		breakpoints: {
			991: { slidesPerView: 1.2, spaceBetween: 80, },
			1279: { slidesPerView: 1.4, spaceBetween: 120, },
			1559: { slidesPerView: 1.6, spaceBetween: 150, },
		}
	});
});

// navigation button type02
let Swipers6 = [];
let options3 = {};
$('.navigation-slide02').each(function(i) {
	const thisID = $(this).attr('id');
	if ( $("#" + thisID + " .swiper-slide").length == 1 ) { 
		options3 = { 
			lazy: true,
			slidesPerView: 1,
//			loop: false,
			observer: true,
			observeParents: true,
			autoplay: false,
			watchOverflow : true,
			navigation: false
		}
	}else {
		options3 = {
			lazy: true,
			slidesPerView: 1,
			loop: true,
			observer: true,
			observeParents: true,
			watchOverflow : true,
			navigation: {
				nextEl: "#"+thisID+"-navigation .swiper-next",
				prevEl: "#"+thisID+"-navigation .swiper-prev",
			},
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
		}
	}
	Swipers6[i] = new Swiper('#'+thisID, options3);
});

// navigation + pagination button type02
let Swipers7 = [];
$('.navigation-slide03').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers7[i] = new Swiper('#'+thisID, {
		lazy: true,
		slidesPerView: 1.7,
		centeredSlides: true,
		spaceBetween: "10%",
		speed: 1000,
		loop: true,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		pagination: {
			el: '#'+thisID+"-pagination.swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			319: { slidesPerView: 1, spaceBetween: "30px", },
			1079: { slidesPerView: 1.2, spaceBetween: "5%", },
			1439: { slidesPerView: 1.4, spaceBetween: "10%", },
		}
	});
});

// none type01
let Swipers8 = [];
$('.default-slide01').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers8[i] = new Swiper('#'+thisID, {
		lazy: true,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: { slidesPerView: 2.3, spaceBetween: 16, },
			640: { slidesPerView: 2.3, spaceBetween: 16, },
			1024: { slidesPerView: 3.2, spaceBetween: 16, },
			1280: { slidesPerView: 4, spaceBetween: 16, },
		}
	});
});

// pagination + navigation button type01
let Swipers9 = [];
$('.pagination-slide01').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers9[i] = new Swiper('#'+thisID, {
		lazy: true,
		slidesPerView: 1,
//			autoHeight:true, 
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		pagination: {
			el: '#'+thisID+"-pagination.swiper-pagination",
			type: "fraction",
		},
	});
});

// equipment slide
let Swipers10 = [];
$('.equipment-slide01').each(function(i) {
	const thisID = $(this).attr('id');
	var laserPagiList;
	if(thisID == 'sub01-01-cont03-slide') {
		laserPagiList = ['백반증','색소·홍조','여드름','리프팅','흉터·모공','문신제거·튼살','제모','안면윤곽','스킨케어'];
	}

	Swipers10[i] = new Swiper('#'+thisID, {
		// Default parameters
		speed:800,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides:true,
		loop:true,
		parallax: true,
		pagination: {
			el: "#"+thisID+"-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"><em>' + laserPagiList[index] + '</em></span>';
			},
		},
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
	});
});

// tab + navigation button type01
let Swipers11 = [];
$('.navigation-slide04').each(function(i, element) {
	const thisID = $(this).attr('id');
	let names = [];

	var laserPagiList;
	if(thisID == 'sub05-09-cont04-slide') {
		laserPagiList = ['레이저 프로그램','스킨부스터 프로그램'];
	}else if(thisID == 'sub05-10-cont04-slide') {
		laserPagiList = ['레이저 프로그램','스킨부스터 프로그램','보툴리눔 톡신/필러 프로그램'];
	}

	Swipers11[i] = new Swiper('#'+thisID, {
		lazy: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		pagination: {
			el: '#'+thisID+"-pagination.swiper-pagination",
			clickable: true,
			renderBullet: function(i, className) {
				return ('<span class="' + className +'"><i class="icon-arrow03"></i>' + laserPagiList[i] +"</span>");
			}
		},
		breakpoints: {
			991: { slidesPerView: 1.2, spaceBetween: 20, centeredSlides: true, },
			1279: { slidesPerView: 1.4, spaceBetween: 40, centeredSlides: true, },
			1559: { slidesPerView: 1.6, spaceBetween: 60, centeredSlides: false, },
		}
	});
});

// tab + navigation button type05
let Swipers12 = [];
$('.navigation-slide05').each(function(i, element) {
	const thisID = $(this).attr('id');
	let names = [];

	var laserPagiList;
	if(thisID == 'sub02-01-cont02-slide') {
		laserPagiList = ['광치료 클리닉','수술 클리닉','메디컬 반영구'];
	}else if(thisID == 'sub06-05-cont06-slide') {
		laserPagiList = ['앨러간 보툴리눔 톡신','제오민 보툴리눔 톡신','코어톡스'];
	}else if(thisID == 'sub06-07-cont03-slide') {
		laserPagiList = ['리쥬란 힐러','리쥬란 HB','아이리쥬란'];
	}

	Swipers5[i] = new Swiper('#'+thisID + ' .swiper-container', {
		lazy: true,
		centeredSlides: true,
//		autoplay: {
//			delay: 2500,
//			disableOnInteraction: false,
//		},
//			autoHeight:true, 
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		pagination: {
			el: '#'+thisID+" .swiper-pagination",
			clickable: true,
			renderBullet: function(i, className) {
				return ('<span class="' + className +'">' + laserPagiList[i] +"</span>");
			}
		},
		breakpoints: {
			991: { slidesPerView: 1, spaceBetween: 80, },
			1279: { slidesPerView: 1, spaceBetween: 120, },
			1559: { slidesPerView: 1, spaceBetween: 150, },
		}
	});
});

// scrollbar type05
let Swipers13 = [];
$('.progress-slide05').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers13[i] = new Swiper('#'+thisID, {
		lazy: true,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		scrollbar: {
			el: "#"+thisID+"-scrollbar",
			draggable: false,
		},
		breakpoints: {
			320: { slidesPerView: 1.8, spaceBetween: 20, },
			1280: { slidesPerView: 1.8, spaceBetween: 30, },
		}
	});
});

// scrollbar type06
let Swipers14 = [];
$('.progress-slide06').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers14[i] = new Swiper('#'+thisID, {
		lazy: true,
		observer: true,
		observeParents: true,
		watchOverflow : true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		scrollbar: {
			el: "#"+thisID+"-scrollbar",
			draggable: false,
		},
		breakpoints: {
			320: { slidesPerView: 1.2, spaceBetween: 20, },
			400: { slidesPerView: 1.4, spaceBetween: 20, },
			640: { slidesPerView: 1.8, spaceBetween: 20, },
			820: { slidesPerView: 2.3, spaceBetween: 30, },
			1024: { slidesPerView: 2.6, spaceBetween: 40, },
			1280: { slidesPerView: 2.4, spaceBetween: 40, },
			1680: { slidesPerView: 2.6, spaceBetween: 50, },
		}
	});
});

// scrollbar type06
let Swipers15 = [];
$('.progress-slide07').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers15[i] = new Swiper('#'+thisID, {
		lazy: true,
		observer: true,
		observeParents: true,
		watchOverflow : true,
//		loop: true,
		freeMode: true,
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		scrollbar: {
			el: "#"+thisID+"-scrollbar",
			draggable: false,
		},
		breakpoints: {
			320: { slidesPerView: 1.2, spaceBetween: 15, },
			400: { slidesPerView: 1.4, spaceBetween: 15, },
			640: { slidesPerView: 1.8, spaceBetween: 20, },
			820: { slidesPerView: 2.3, spaceBetween: 20, },
			1024: { slidesPerView: 2.6, spaceBetween: 25, },
			1680: { slidesPerView: 3.4, spaceBetween: 25, },
		}
	});
});

// scrollbar type07
let Swipers17 = [];
$('.scrollbar-slide01').each(function(i) {
	const thisID = $(this).attr('id');
	Swipers17[i] = new Swiper('#'+thisID, {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 1000,
		lazy: true,
		observer: true,
		observeParents: true,
		watchOverflow : true,
		touchRatio: 0,//드래그 금지
		pagination: {
			el: "#"+thisID+"-pagination",
			type: "progressbar",
		},
		on: {
			init: function(){
				var that = this;
				that.allowSlidePrev = false;
				that.allowSlideNext = false;
				
				$('input[name=radio01]').each(function(){
					var $this = $(this);
					$this.bind('click', function(){
						var radioVal = $('input[name=radio01]:checked').val();
						if(radioVal != "") {
							that.allowSlideNext = true;
							that.slideTo(1);
						}
					});
				});
				
				$('input[name=radio02]').each(function(){
					var $this = $(this);
					$this.bind('click', function(){
						var radioVal = $('input[name=radio02]:checked').val();
						if(radioVal != "") {
							that.allowSlideNext = true;
							that.slideTo(1);
						}
					});
				});
			},
			slideChange: function(){
				var that = this;
				that.allowSlidePrev = false;
				that.allowSlideNext = false;
				
				switch(this.activeIndex){
					case 1:
						$('input[name=radio02]').each(function(){
							var $this = $(this);
							$this.bind('click', function(){
								var radioVal = $('input[name=radio02]:checked').val();
								if(radioVal != "") {
									that.allowSlideNext = true;
									that.slideTo(2);
								}
							});
						});
					break;
					case 2:
						$('input[name=radio03]').each(function(){
							var $this = $(this);
							$this.bind('click', function(){
								var radioVal = $('input[name=radio03]:checked').val();
								if(radioVal != "") {
									that.allowSlideNext = true;
									that.slideTo(3);
								}
							});
						});
					break;
					case 3:
						$('input[name=radio04]').each(function(){
							var $this = $(this);
							$this.bind('click', function(){
								var radioVal = $('input[name=radio04]:checked').val();
								if(radioVal != "") {
									that.allowSlidePrev = true;
									that.slideTo(0);
									$(".qa-wrap").hide();
									$(".an-wrap").show();
									var scrollTop = $("#survey").offset().top;
									$("html, body").animate({scrollTop:scrollTop}, '500');
									
									var val01 = $('input[name=radio01]:checked').val();
									var val02 = $('input[name=radio02]:checked').val();
									var val03 = $('input[name=radio03]:checked').val();
									var val04 = $('input[name=radio04]:checked').val();
									var result = val01+val02+val03+val04;
									
									if(result == 'DSPW' || result == 'DSPT' || result == 'DSNW' || result == 'DSNT') {
										$('.hiddencontents.type01').addClass("active").siblings().removeClass("active");
									}else if(result == 'DRPW' || result == 'DRPT' || result == 'DRNW' || result == 'DRNT') {
										$('.hiddencontents.type02').addClass("active").siblings().removeClass("active");
									}else if(result == 'OSPW' || result == 'OSPT' || result == 'OSNW' || result == 'OSNT') {
										$('.hiddencontents.type03').addClass("active").siblings().removeClass("active");
									}else if(result == 'ORPW' || result == 'ORPT' || result == 'ORNW' || result == 'ORNT') {
										$('.hiddencontents.type04').addClass("active").siblings().removeClass("active");
									}

									$("#wr_subject").val(result);
								}
							});
						});
					break;
				}
			}
		}
	});
});

function reSurvey() {
	$("input[name=radio01]").removeAttr("checked");
	$("input[name=radio02]").removeAttr("checked");
	$("input[name=radio03]").removeAttr("checked");
	$("input[name=radio04]").removeAttr("checked");
	$(".an-wrap").hide();
	$(".qa-wrap").show();
	
	var scrollTop = $("#survey").offset().top;
	$("html, body").animate({scrollTop:scrollTop}, '500');
}

let Swipers16 = [];
$('.navigation-slide06').each(function(i, element) {
	const thisID = $(this).attr('id');
	let names = [];

	var laserPagiList;
	if(thisID == 'sub07-06-cont04-slide') {
		laserPagiList = ['특징','효과','원리'];
	}

	Swipers16[i] = new Swiper('#'+thisID, {
		lazy: true,
		autoplay: {
			delay: 7500,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		spaceBetween: 20, 
		
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		pagination: {
			el: '#'+thisID+"-pagination.swiper-pagination",
			clickable: true,
			renderBullet: function(i, className) {
				return ('<span class="' + className +'"><i class="icon-arrow03"></i>' + laserPagiList[i] +"</span>");
			}
		},
	});
});


let doctorsSlide = [];
$('.doctors-slide').each(function(i, element) {
	const thisID = $(this).attr('id');
	doctorsSlide[i] = new Swiper('#'+thisID, {
//		lazy: true,
		centeredSlides: true,
		speed: 1000,
		loop: true,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#"+thisID+"-navigation .swiper-next",
			prevEl: "#"+thisID+"-navigation .swiper-prev",
		},
		pagination: {
			el: '#'+thisID+"-pagination.swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			319: { slidesPerView: 1, spaceBetween: 50 },
			799: { slidesPerView: 1, spaceBetween: 50 },
			1079: { slidesPerView: 1.2 },
			1439: { slidesPerView: 1.6 },
		}
	});
});

// main-youtube-slide
const mainYoutubeSlide = new Swiper('#main-youtube-slide', {
	slidesPerView: 3,
	slidesPerGroup: 3,
	lazy: true,
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".main-youtube-slide-navigation .swiper-next",
		prevEl: ".main-youtube-slide-navigation .swiper-prev",
	},
	pagination: {
		el: ".main-youtube-slide-pagination",
		clickable: true,
	},
});

const ytBtns = document.querySelectorAll(".yt-thumb-scroll .innerbox");
const ytIframe = document.querySelector(".yt-video-area iframe");
if(ytBtns){
	ytBtns.forEach((btn,index)=>{
		var src = btn.getAttribute('data-yt-url');
		
		btn.addEventListener('click',function(){
			var iframeSrc = 'https://www.youtube.com/embed/'+src;
			ytIframe.setAttribute('src',iframeSrc);
			var tit = btn.querySelector('.yt-tit-txt').textContent;
			var mainTit = document.querySelector('.yt-tit-target');
			mainTit.textContent = tit;
			ytBtns.forEach(btn=>btn.classList.remove('active'));
			btn.classList.add('active');
		});
	})
}

// flow type01
const sub01bottom = new Swiper('.sub01-bottom-slide', {
	spaceBetween: 100,
	centeredSlides: true,
	speed: 3000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView:'auto',
	allowTouchMove: false,
	disableOnInteraction: true,
	loopAdditionalSlides: 1,
	observer: true,
	observeParents: true,
	on : {
		init : function (){ //홈페이지 로딩 시 바로 실행되는 구문
			$('.sub01-bottom-slide_wrapper').addClass('on');
		},
	},
});

$('.counter').each(function(i) {
	$(this).attr('id','count'+i);
	const thisID = $(this).attr("id");
	const thisCount = $(this).data('count');

	var counter = new CountUp(thisID, 0, thisCount, 0, 5, {  
		useEasing: true,
		useGrouping: true,
		separator: ',',
		decimal: '.',
		prefix: '',
	});

	var waypoint = new Waypoint({
		element: document.getElementById(thisID),
		handler: function(direction) {
			if (direction == "up") {
				counter.reset();
			} else {
				counter.start();
			}
		},
		offset: '80%'
	});
});

// commonTab
function commonTab(tabParent, tabName){
	$("."+tabParent+" ul.tabbox li").removeClass("active");
	$("."+tabParent+" ul.tabbox li."+tabName).addClass("active");
	$("."+tabParent+" .hiddencontents").removeClass("active");
	$("."+tabParent+" .hiddencontents."+tabName).addClass("active");
}

// panel
function panelOpen(panel){
    if($(panel).next('.panel-content').is(":visible")){
        $(panel).next('.panel-content').slideUp("fast",function(){
            $(panel).find(".icon-panel-arrow").css({"transform":"rotate(-180deg)"});
        });
    }else{
        $(panel).next('.panel-content').slideDown("fast",function(){
            $(panel).find(".icon-panel-arrow").css({"transform":"rotate(0deg)"});
        });
        $(panel).parent(".panel-open").siblings().find(".panel-content").slideUp("fast",function(){
			$(panel).parent(".panel-open").siblings().find(".icon-panel-arrow").css({"transform":"rotate(-180deg)"});
		});
    }
}


const equipment_top_view_swiper = new Swiper('.equipment_top_view_swiper', {
    slidesPerView: 'auto',
	spaceBetween: 0,
    autoplay: false,
	centeredSlides: true,
    // loop: true,
    observer: true,
    observeParents: true,
	navigation: {
		nextEl: ".swiper-button-next.equipment_top_next",
		prevEl: ".swiper-button-prev.equipment_top_prev",
	},
});


// $(document).ready(function(){
// 	$('.equipment_top_view_swiper').slick({
// 		slide: 'div',	
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		draggable : true, 
// 	});
// });
// const equipment_top_view_swiper = $('.equipment_top_view_swiper')


// modal
function modalView(modalName){
	if(modalName.includes('doctor')) {
		$(".modal#"+modalName).css("display", "block")
		$(".modal-"+modalName+".transparents-layer").css("display","block").css("opacity","1");
	}else if(modalName.includes('equipment')) {
		$(".modal#"+modalName).css("display", "block")
		$(".modal-"+modalName+".transparents-layer").css("display","block").css("opacity","0.5");
	}else {
		$(".modal#"+modalName).css("display", "block")
		$(".modal-"+modalName+".transparents-layer").css("display","block").css("opacity","0.5");
	}
	$(".transparents-layer").attr("onclick", "modalHide('"+modalName+"')");
	// $(".modal#"+modalName).css("top","50%").css("left","50%").css("transform","translate(-50%, -50%)").animate({opacity:1}, 500);
	$(".modal#"+modalName).animate({opacity:1}, 500);
	$("html, body").css("overflow","hidden");
	$("#header").css("display","none");
}
function modalHide(modalName){
	$(".modal#"+modalName).animate({opacity:0}, 400, function(){
		// $(".modal#"+modalName).css("top", "-99999px").css("left","-99999px");
		$(".modal#"+modalName).css("display", "none")
		$("html, body").css("overflow","auto");
		$("#header").css("display","block");
	})
	$(".transparents-layer").animate({opacity:0}, 400, function(){
		$(this).css("display","none");
	});
}

window.addEventListener('DOMContentLoaded', function(){
    //스크롤 이벤트 처리
    window.addEventListener("scroll", function(event){
        if(document.querySelector('.progress-container') != null)setProgress();
    });
});

function setProgress() {          
    let currY = document.documentElement.scrollTop;//스크롤한 높이
    let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;//전체 높이
    let percentage = (currY / totalY) * 100;//퍼센트 값
    document.querySelector(".progress-bar").style.width = percentage + "%";//프로그래스바 너비 변경
}

// quick
const mQuickCall = document.getElementsByClassName('m-quick-call')[0];
const mQuickCircle = document.getElementsByClassName('m-quick-circle-wrap')[0];
const mQuickOpen = document.getElementsByClassName('js-call-m-quick')[0];
const mQuickClose = Array.from(document.getElementsByClassName('js-close-m-quick'));
const mQuickBtns = Array.from(document.getElementsByClassName('m-quick-btn'));

var mquickTl = gsap.timeline({
    paused:true
});
mquickTl.fromTo('.m-quick-dim-bg', { autoAlpha:0 }, { autoAlpha:1, duration:0.3 }, 0).fromTo('.m-quick-circle-inner', { autoAlpha:0, rotate:100, scale: 0.3 }, { autoAlpha:1, rotate:0, scale:1, duration:0.2 }, 0.1)
mQuickBtns.forEach((el) => {
    mquickTl.fromTo(el, { autoAlpha:0 }, { autoAlpha:1 }, 0.2)
});

if (getCookie('entering') !== 'Y') {
    console.log('처음 접속시');
    setCookie('entering', 'Y', 1);
    mQuickCall.classList.add('ani-start');
}

mQuickOpen.addEventListener(clickEvent, () => {
    mQuickCircle.classList.add('open');
    mquickTl.play();
});
mQuickClose.forEach((close) => {
    close.addEventListener(clickEvent, () => {
        mQuickCircle.classList.remove('open');
        mquickTl.reverse();
		$(".m_call_item").stop().removeClass('on');
		$(".m_kakao_item").stop().removeClass('on');
		$(".m_home_item").stop().removeClass('on');
    });
});

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
	trigger:'.smooth-scroll',
	start: '100px top',
	end: 99999,
	scroller: ".smooth-scroll",
	toggleClass: {className: 'scrolled', targets: '.main-quick-menu'}
})

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//쿠키삭제
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


// m_global_swiper slide
const m_global_swiper = new Swiper('.m_global_swiper', {
    slidesPerView: 'auto',
	spaceBetween: 0,
    autoplay: false,
	centeredSlides: true,
    loop: true,
    observer: true,
    observeParents: true,
    on: {
        init: function() {
            $('.m_global_box01').stop().addClass('on');
            $('.m_global_box02').stop().removeClass('on');
            $('.m_global_box04').stop().removeClass('on');
            $('.m_global_box03').stop().removeClass('on');
            $('.m_global_box05').stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-1.png");
        },
    },
});
m_global_swiper.on('transitionStart', function() { 
    if(m_global_swiper.realIndex == 0){ //메인 풀페이지 1번 영역에 왔을때 실행되는 구문
        
        $('.m_global_box01').stop().addClass('on');
        $('.m_global_box02').stop().removeClass('on');
        $('.m_global_box03').stop().removeClass('on');
        $('.m_global_box04').stop().removeClass('on');
        $('.m_global_box05').stop().removeClass('on');
        
        $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-1.png");
        
    } else if(m_global_swiper.realIndex == 1){ //메인 풀페이지 2번 영역에 왔을때 실행되는 구문
        
        $('.m_global_box01').stop().removeClass('on');
        $('.m_global_box02').stop().addClass('on');
        $('.m_global_box03').stop().removeClass('on');
        $('.m_global_box04').stop().removeClass('on');
        $('.m_global_box05').stop().removeClass('on');
        
        $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-2.png");
        
    } else if(m_global_swiper.realIndex == 2){ //메인 풀페이지 3번 영역에 왔을때 실행되는 구문
        
        $('.m_global_box01').stop().removeClass('on');
        $('.m_global_box02').stop().removeClass('on');
        $('.m_global_box03').stop().addClass('on');
        $('.m_global_box04').stop().removeClass('on');
        $('.m_global_box05').stop().removeClass('on');
        
        $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-3.png");
        
    } else if(m_global_swiper.realIndex == 3){ //메인 풀페이지 4번 영역에 왔을때 실행되는 구문
        
        $('.m_global_box01').stop().removeClass('on');
        $('.m_global_box02').stop().removeClass('on');
        $('.m_global_box03').stop().removeClass('on');
        $('.m_global_box04').stop().addClass('on');
        $('.m_global_box05').stop().removeClass('on');
        
        $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-4.png");
        
    } else if(m_global_swiper.realIndex == 4){ //메인 풀페이지 5번 영역에 왔을때 실행되는 구문
        
        $('.m_global_box01').stop().removeClass('on');
        $('.m_global_box02').stop().removeClass('on');
        $('.m_global_box03').stop().removeClass('on');
        $('.m_global_box04').stop().removeClass('on');
        $('.m_global_box05').stop().addClass('on');
        
        $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-5.png");
        
    }
});

/* global_box */
$(document).ready(function(){
    var window_width = $(window).width();
    if (window_width <= 800) {
        // $(".m-quick-btn.call").on('click', function(){
        //     $(".m_call_item").stop().toggleClass('on');
        //     $(".m_kakao_item").stop().removeClass('on');
        //     $(".m_home_item").stop().removeClass('on');
        // });
        
        // $(".m-quick-btn.kakao").on('click', function(){
        //     $(".m_kakao_item").stop().toggleClass('on');
        //     $(".m_call_item").stop().removeClass('on');
        //     $(".m_home_item").stop().removeClass('on');
        // });
        
        $(".m-quick-btn.home").on('click', function(){
			$(".m_call_item").stop().toggleClass('on');
			$(".m_kakao_item").stop().removeClass('on');
			$(".m_home_item").stop().removeClass('on');
            // $(".m_home_item").stop().toggleClass('on');
            // $(".m_kakao_item").stop().removeClass('on');
            // $(".m_call_item").stop().removeClass('on');
			
        });
        
        $(".global_box01 > .global_box_title").click(function(){
            $(".m_global_box01").stop().addClass('on');
            $(".m_global_box02").stop().removeClass('on');
            $(".m_global_box03").stop().removeClass('on');
            $(".m_global_box04").stop().removeClass('on');
            $(".m_global_box05").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-1.png");
            
            m_global_swiper.slideTo(0, 800, false);
        });
        
        $(".global_box02 > .global_box_title").click(function(){
            $(".m_global_box01").stop().removeClass('on');
            $(".m_global_box02").stop().addClass('on');
            $(".m_global_box03").stop().removeClass('on');
            $(".m_global_box04").stop().removeClass('on');
            $(".m_global_box05").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-2.png");
            
            m_global_swiper.slideTo(1, 800, false);
        });
        
        $(".global_box03 > .global_box_title").click(function(){
            $(".m_global_box01").stop().removeClass('on');
            $(".m_global_box02").stop().removeClass('on');
            $(".m_global_box03").stop().addClass('on');
            $(".m_global_box04").stop().removeClass('on');
            $(".m_global_box05").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-3.png");
            
            m_global_swiper.slideTo(2, 800, false);
        });
        
        $(".global_box04 > .global_box_title").click(function(){
            $(".m_global_box01").stop().removeClass('on');
            $(".m_global_box02").stop().removeClass('on');
            $(".m_global_box03").stop().removeClass('on');
            $(".m_global_box04").stop().addClass('on');
            $(".m_global_box05").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-4.png");
            
            m_global_swiper.slideTo(3, 800, false);
        });
        
        $(".global_box05 > .global_box_title").click(function(){
            $(".m_global_box01").stop().removeClass('on');
            $(".m_global_box02").stop().removeClass('on');
            $(".m_global_box03").stop().removeClass('on');
            $(".m_global_box04").stop().removeClass('on');
            $(".m_global_box05").stop().addClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-5.png");
            
            m_global_swiper.slideTo(4, 800, false);
        });
        
		$(".global_swiper_m .slide1").click(function(){
			$(".m_global_box01").stop().addClass('on');
            $(".m_global_box02").stop().removeClass('on');
            $(".m_global_box03").stop().removeClass('on');
            $(".m_global_box04").stop().removeClass('on');
            $(".m_global_box05").stop().removeClass('on');

			$(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-1.png");
		});
		$(".global_swiper_m .slide2").click(function(){
			$(".m_global_box01").stop().removeClass('on');
            $(".m_global_box02").stop().addClass('on');
            $(".m_global_box03").stop().removeClass('on');
            $(".m_global_box04").stop().removeClass('on');
            $(".m_global_box05").stop().removeClass('on');

			$(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-2.png");
		});
		$(".global_swiper_m .slide3").click(function(){
			$(".m_global_box01").stop().removeClass('on');
            $(".m_global_box02").stop().removeClass('on');
            $(".m_global_box03").stop().addClass('on');
            $(".m_global_box04").stop().removeClass('on');
            $(".m_global_box05").stop().removeClass('on');

			$(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-3.png");
		});
		$(".global_swiper_m .slide4").click(function(){
			$(".m_global_box01").stop().removeClass('on');
            $(".m_global_box02").stop().removeClass('on');
            $(".m_global_box03").stop().removeClass('on');
            $(".m_global_box04").stop().addClass('on');
            $(".m_global_box05").stop().removeClass('on');

			$(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-4.png");
		});
		$(".global_swiper_m .slide5").click(function(){
			$(".m_global_box01").stop().removeClass('on');
            $(".m_global_box02").stop().removeClass('on');
            $(".m_global_box03").stop().removeClass('on');
            $(".m_global_box04").stop().removeClass('on');
            $(".m_global_box05").stop().addClass('on');

			$(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-5.png");
		});
	} else {
        $(".global_box01 > .global_box_title").hover(function(){
            $(".global_box01 > .global_box_text").stop().addClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-1.png");
        }, function(){
            $(".global_box01 > .global_box_text").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01.png");
        });
        
        $(".global_box02 > .global_box_title").hover(function(){
            $(".global_box02 > .global_box_text").stop().addClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-2.png");
        }, function(){
            $(".global_box02 > .global_box_text").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01.png");
        });
        
        $(".global_box03 > .global_box_title").hover(function(){
            $(".global_box03 > .global_box_text").stop().addClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-3.png");
        }, function(){
            $(".global_box03 > .global_box_text").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01.png");
        });
        
        $(".global_box04 > .global_box_title").hover(function(){
            $(".global_box04 > .global_box_text").stop().addClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-4.png");
        }, function(){
            $(".global_box04 > .global_box_text").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01.png");
        });
        
        $(".global_box05 > .global_box_title").hover(function(){
            $(".global_box05 > .global_box_text").stop().addClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01-5.png");
        }, function(){
            $(".global_box05 > .global_box_text").stop().removeClass('on');
            
            $(".map-img01").attr("src", "/vitiligo/img/sub01-02-cont01-img01.png");
        });
    }
});


 //leukoplakia_cont03 slide
 var leukoplakia_cont03_ValueList = ['755nm','810nm','1064nm'];
 const leukoplakia_cont03_ValueSlide = new Swiper('.leukoplakia_cont03_swiper', {
 	speed:800,
 	autoplay: {
 		delay: 4000,
 		disableOnInteraction: false,
 	},
 	slidesPerView: 'auto',
// 	spaceBetween: "10%",
 	centeredSlides:true,
 	loop:true,
 	parallax: true,
 	pagination: {
 		el: ".leukoplakia_cont03_slide_pagination",
 		clickable: true,
 		renderBullet: function (index, className) {
 			return '<span class="' + className + '"><em>' + leukoplakia_cont03_ValueList[index] + '</em></span>';
 		},
 	},
 	navigation: {
 		nextEl: ".leukoplakia_cont03_slide_navigation .swiper-next",
 		prevEl: ".leukoplakia_cont03_slide_navigation .swiper-prev",
 	},
 });

