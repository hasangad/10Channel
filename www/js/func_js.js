// Image Caching
//var cache = require("imgcache");
// Script -- Index
//http://ten.tv/api/GetMainpagePrograms
function GetMainpagePrograms() {
	var GetMainpagePrograms = "http://ten.tv/api/GetMainpagePrograms";
	$.getJSON(GetMainpagePrograms, function(result) {
		//console.log(result);
		$num_is = 0;
		$.each(result, function(i, data) {
			if (data.image == null) {
				data.image = "http://via.placeholder.com/150x200";
			}
			if ($num_is == 0) {
				if (data.id !== null) {
					$(".carousel-inner")
						.append('<div class="carousel-item active"><a href="prog.html?name=' + data.id + '" class="main_item"><div class="main_item_grad"></div><img src="' + data.image + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"> <span>يعرض الآن</span><h2>' + data.show_at + '</h2> <small>بتوقيت القاهرة</small></div></a></div>');
				} else {
					$(".carousel-inner")
						.append('<div class="carousel-item active"><a class="main_item"><div class="main_item_grad"></div><img src="' + data.image + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"> <span>يعرض الآن</span><h2>' + data.show_at + '</h2> <small>بتوقيت القاهرة</small></div></a></div>');
				}
			} else if ($num_is == 1) {
				if (data.id !== null) {
					$(".carousel-inner")
						.append('<div class="carousel-item"><a href="prog.html?name=' + data.id + '" class="main_item"><div class="main_item_grad"></div><img src="' + data.image + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"> <span>التالي</span><h2>' + data.show_at + '</h2> <small>بتوقيت القاهرة</small></div></a></div>');
				} else {
					$(".carousel-inner")
						.append('<div class="carousel-item"><a  class="main_item"><div class="main_item_grad"></div><img src="' + data.image + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"> <span>التالي</span><h2>' + data.show_at + '</h2> <small>بتوقيت القاهرة</small></div></a></div>');
				}
			} else if ($num_is == 2) {
				if (data.id !== null) {
					$(".carousel-inner")
						.append('<div class="carousel-item"><a href="prog.html?name=' + data.id + '" class="main_item"><div class="main_item_grad"></div><img src="' + data.image + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"> <span>لاحقاً</span><h2>' + data.show_at + '</h2> <small>بتوقيت القاهرة</small></div></a></div>');
				} else {
					$(".carousel-inner")
						.append('<div class="carousel-item"><a class="main_item"><div class="main_item_grad"></div><img src="' + data.image + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"> <span>لاحقاً</span><h2>' + data.show_at + '</h2> <small>بتوقيت القاهرة</small></div></a></div>');
				}
			}
			$num_is++;
		});
		$("img.lazyload")
			.on()
			.lazyload();
		$(".preloader")
			.fadeOut(500);
	});
}
// Script -- Index -> Soon
//http://ten.tv/api/GetMainpagePrograms
function GetSoon() {
	var GetSoon = "http://ten.tv/api/soon";
	$.getJSON(GetSoon, function(result) {
		//console.log(result);
		$.each(result, function(i, dataSoon) {
			if (dataSoon.id !== null) {
				$(".soon")
					.append('<title class="main_title">قريباً على شاشتنا</title>');
			}
			if (dataSoon.image == null) {
				dataSoon.image = "http://via.placeholder.com/150x200";
			}
			$(".soon")
				.append('<a href="prog.html?name=' + dataSoon.id + '" class="main_item"><div class="main_item_grad"></div><img src="' + dataSoon.image + '" class="img-responsive" /></a>');
		});
		$("img.lazyload")
			.on()
			.lazyload();
		$(".preloader")
			.fadeOut(500);
	});
}
// Get Programes
function get_programs() {
	var progs = "https://ten.tv/api/GetPrograms";
	$.getJSON(progs, function(result2) {
		//console.log(result);
		$num_is = 0;
		$.each(result2.data, function(i, data) {
			if (data.image == null) {
				data.image = "http://via.placeholder.com/150x200";
			}
			if ($num_is == 0) {
				//alert($num_is);
				$(".progs")
					.append('<a href="prog.html?name=' + data.id + '" class="main_item"><div class="main_item_grad"></div><img src="' + data.image + '" class="img-responsive" /></a>');
			} else {
				$(".progs")
					.append('<a href="prog.html?name=' + data.id + '" class="prog col-xs-6 no-padding"><div class="main_item_grad"></div><img data-src="' + data.image + '" class="img-responsive lazyload"/></a>');
			}
			$num_is++;
		});
		$("img.lazyload")
			.on()
			.lazyload();
		$(".preloader")
			.fadeOut(500);
	});
}
// Get single prog
// SOURCE :: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// query string: ?foo=lorem&bar=&baz
var prog_name = getParameterByName('name'); // "lorem"
//alert(prog_name);
function Get_prog() {
	if (prog_name) {
		var prog = "https://ten.tv/api/GetProgramDetails?id=" + prog_name;
		$.getJSON(prog, function(data) {
			//console.log(result);
			if (data['program'].image == null) {
				data['program'].image = "http://via.placeholder.com/150x200";
			}
			$program_name = data['program'].title;
			$(".prog")
				.append('<h3 class="main_title" style="font-size:1.2em">' + $program_name + '</h3><img data-src="' + data['program'].image + '" class="img-responsive lazyload" />' + data['program'].description);
			$(".prog")
				.append('<h3 class="main_title">الحلقات</h3>');
			$num_is = 0;
			$.each(data['episodes'].data, function(i2, data2) {
				if (data2.image == null) {
					data2.image = "http://via.placeholder.com/150x200";
				}
				$e_title = data2.title;
				// Get youtube ID from url ////////////////////
				var url = data2.link;
				var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
				if (videoid != null) {
					console.log("video id = ", videoid[1]);
				} else {
					console.log("The youtube url is not valid.");
				}
				$v = videoid[1];
				$(".prog")
					.append('<div class="col-xs-6 no-padding"><a href="' + data2.link + '" target="new"><div class="main_item_grad"></div><img data-src="https://img.youtube.com/vi/' + $v + '/0.jpg" class="img-responsive lazyload" /></a></div>');
			});
			$("img.lazyload")
				.on()
				.lazyload();
			$(".preloader")
				.fadeOut(500);
		});
	}
}
/////// Get  Schedule
function Get_Schedule() {
	var Schedule = "https://ten.tv/api/GetShowSchedule";
	$.getJSON(Schedule, function(result3) {
		//console.log(result3);
		$.each(result3.show, function(i, data) {
			if (data.image == null) {
				data.image = "http://via.placeholder.com/150x200";
			}
			$(".schedule")
				.append('<div class="prog_time"><div class="col-xs-4"> <b>' + data.title + '</b> </div><div class="col-xs-5"> <img data-src="' + data.image + '" class="img-responsive lazyload"></div><div class="col-xs-3"> <b>' + data.time + '</b><span></span></div></div>');
		});
		$("img.lazyload")
			.on()
			.lazyload();
		$(".preloader")
			.fadeOut(500);
	});
}
$(document)
	.ready(function() {
		//$(".preloader").fadeOut(500);
	});