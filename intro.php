<!DOCTYPE html>
	<!--[if lt IE 7]>		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" class="ie6 lt-ie7 lt-ie8 lt-ie9">	<![endif]-->
	<!--[if IE 7]>			<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" class="ie7 lt-ie7 lt-ie8 lt-ie9">	<![endif]-->
	<!--[if IE 8]>			<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" class="ie8 lt-ie8 lt-ie9">			<![endif]-->
	<!--[if IE 9]>			<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" class="ie9 lt-ie9">					<![endif]-->
	<!--[if gt IE 9]><!-->	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#">								<!--<![endif]-->
	<head>
		<title>Title</title>
		<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="css/screen.css" type="text/css" media="screen" />
		<script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
		<script type="text/javascript" charset="utf-8">
			$(document).ready(function() {
				$('.intro-wrapper').height($(window).height());
				$('.tile.first').click(function() {
					$(this).animate({'opacity':0, 'margin-top':'-27px'}, 750, function(){
						$(this).siblings('.second').delay(250).animate({'opacity':1.0, 'margin-top':'-57px'}, 750, function(){
							$(this).delay(3500).animate({'opacity':0.0, 'margin-top':'-27px'}, 750, function(){
								window.location.href = 'intro2.php';
							});
						});
					});
					return false;
				});
			});
		</script>
		<style type="text/css" media="screen">
			body {background:#ebebeb;}
			a {display:block;}
			.intro-wrapper {position:relative;}
			.intro-wrapper .tile {position:absolute;top:50%;left:50%;}
			.intro-wrapper .first {margin-left:-473px;margin-top:-57px;z-index:3;}
			.intro-wrapper .second {margin-left:-473px;margin-top:-77px;opacity:0;z-index:2;}
			.intro-wrapper .third {margin-left:-295px;margin-top:-315px;opacity:0;z-index:1;}
		</style>
	</head>
	<body>
		<audio preload="auto" autoplay loop id="alient_voice">
			<source src="audio/alien_voice.mp3" type="audio/mpeg" />
		</audio>
		<div class="intro-wrapper">
			<a class="tile first" href="#"><img src="img/intro/intro1.png" width="947" height="115" alt="Intro 1"></a>
			<div class="tile second"><img src="img/intro/intro2.png" width="947" height="115" alt="Intro 2"></div>
			<a class="tile third" href="intro2.php"><img src="img/intro/intro3.jpg" width="590" height="590" alt="Intro3"></div>
		</div>
		<script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
	</body>
</html>