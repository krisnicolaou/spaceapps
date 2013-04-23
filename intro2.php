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
				$('.tile.first').delay(500).animate({'opacity':1}, 1000).click(function() {
					$(this).fadeOut(500, function(){
						$(this).siblings('.second').delay(250).animate({'opacity':1}, 750, function(){
							$(this).delay(3500).fadeOut(1000, function(){
								window.location.href = 'index.php';
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
			.intro-wrapper .first {margin-left:-295px;margin-top:-295px;opacity:0;z-index:3;}
			
			.intro-wrapper .second {margin-left:-239px;margin-top:-304px;opacity:0;z-index:2;}
		</style>
	</head>
	<body>
		<div class="intro-wrapper">
			<a class="tile first" href="#"><img src="img/intro/intro3.jpg" width="590" height="590" alt="Intro3"></a>
			<div class="tile second"><img src="img/intro/intro_logo_animation.gif" width="478" height="609" alt="Intro Logo Animation"></div>
		</div>
		<script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
	</body>
</html>