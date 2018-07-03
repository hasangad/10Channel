// Trim words function
function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}
// Image Caching
//var cache = require("imgcache");
// Script -- Index
//http://ten.tv/api/GetMainpagePrograms
function GetMainpagePrograms() {
	var GetMainpagePrograms = "http://ten.tv/api/GetMainpagePrograms";
	$.getJSON(GetMainpagePrograms, function(result) {
		console.log(result.slides);
		$num_is = 0;
		$.each(result.slides, function(i, data) {
			if (data.image == null) {
				data.image = "http://via.placeholder.com/150x200";
			}
			if ($num_is == 0) {
				if (data.id !== null) {
					$(".carousel-inner")
						.append('<div class="carousel-item active"><a href="prog.html?name=' + data.id + '" class="main_item"><div class="main_item_grad"></div><img src="' + data.media_url + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"><small>بتوقيت القاهرة</small></div></a></div>');
				} else {
					$(".carousel-inner")
						.append('<div class="carousel-item active"><a class="main_item"><div class="main_item_grad"></div><img src="' + data.media_url + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"> <small>بتوقيت القاهرة</small></div></a></div>');
				}
			} /*else if ($num_is == 1) {
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
				}*/ else {
					$(".carousel-inner")
						.append('<div class="carousel-item"><a class="main_item"><div class="main_item_grad"></div><img src="' + data.media_url + '" class="img-responsive" /> <img class="ten_logo_onfly" src="images/logo.jpg" /><div class="ten_logo_onfly_text"><small>بتوقيت القاهرة</small></div></a></div>');
				}
		/*	}*/
			$num_is++;
		});
		$("img.lazyload")
			.on()
			.lazyload();
		$(".preloader")
			.fadeOut(500);
	});
}
// GetFeatures

function GetFeatures() {
	var GetFeatures = "http://ten.tv/api/GetMainpagePrograms";
	$.getJSON(GetFeatures, function(result) {
		console.log(result.featurePrograms);
		//$num_is = 0;
		$.each(result.featurePrograms, function(i, data) {
			if (data.image == null) {
				data.image = "http://via.placeholder.com/150x200";
			}
				if (data.id !== null) {
					$(".features_progs")
						.append('<a href="prog.html?name=' + data.id + '" class="prog col-xs-6 padding-top-10"><div class="main_item_grad"></div><img data-src="' + data.image + '"  class="img-responsive lazyload" src="' + data.image + '" ></a>');
				}
		//	$num_is++;
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
		console.log(result2);
		$num_is = 0;
		$.each(result2, function(i, data) {


			//alert('data.image');
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
				.append('<h1 class="main_title" style="font-size:1.2em; padding-right:20%; margin-top:5%;">' + $program_name + '</h1><img data-src="' + data['program'].image + '" class="img-responsive lazyload" />' + data['program'].description);
			/*$(".prog")
				.append('<h2 class="main_title">الحلقات</h1>');*/
			$num_is = 0;
			$.each(data['episodes'].data, function(i2, data2) {
				if($num_is == 0 ) { $(".prog")
					.append('<h2 class="main_title">الحلقات</h1>'); }
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
					$num_is++;
			});
			$("img.lazyload")
				.on()
				.lazyload();
			$(".preloader")
				.fadeOut(500);
		});
	}
}

// Get News
function get_news() {
	var news_result = "https://ten.tv/api/news";
	$.getJSON(news_result, function(news) {
		console.log(news);
		$num_is = 0;
		$.each(news.data, function(i, data_news) {


			//alert(data.image);
			if (data_news.image == null) {
				data_news.image = "http://via.placeholder.com/150x200";
			}
		/*	if ($num_is == 0) {
				//alert($num_is);
				$(".progs")
					.append('<a href="news-single.html?name=' + data_news.id + '" class="main_item"><div class="main_item_grad"></div><img src="' + data_news.image + '" class="img-responsive" /></a>');
			} else {*/
			var news_Content = data_news.content;
			$news_Content = $(news_Content).text();
				$(".progs")
					.append('<a href="news-single.html?name=' + data_news.id + '" class="news-item col-xs-12 no-padding"><img data-src="' + data_news.image + '" class="img-responsive lazyload col-xs-4"/><div class="col-xs-8"><b>'+truncate(data_news.title,4)+'</b><p>'+truncate($news_Content,10)+'</p><i>'+data_news.updated_at+'</i></div></a>');
			/*}*/
			$num_is++;
		});
		$("img.lazyload")
			.on()
			.lazyload();
		$(".preloader")
			.fadeOut(500);
	});
}

//alert(prog_name);
function Get_news_single() {
	if (prog_name) {
		var prog = "http://ten.tv/api/newsDetails?id=" + prog_name;
		$.getJSON(prog, function(data) {
			//console.log(result);
			if (data.image == null) {
				data.image = "http://via.placeholder.com/150x200";
			}
			$program_name = data.title;
			$(".prog")
				.append('<h1 class="main_title" style="font-size:1.2em; padding-right:20%; margin-top:5%;">' + $program_name + '</h1><img data-src="' + data.image + '" class="img-responsive lazyload" /><p class="date_is">'+data.updated_at+'</p>' + data.content);
			$num_is = 0;

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
