// Variables
var epoch_0 = 1366473600;
var epoch_1 = 1366560000;
var current_time = 1366476280;
var dist_0_v1 = 18462159021.7817;
var dist_1_v1 = 18462120322.3703;
var dist_0_v1s = 18548637629.0638;
var dist_1_v1s = 18550103856.0195;
var steps = {
	'earth' : {
		'km' : '0',
		'date' : {
			'year' : '1977',
			'month' : '9',
			'day' : '5',
		},
		'heading' : 'Inner Solar System',
		'subheading' : 'Earth',
	},
	'jupiter' : {
		'km' : '747744624',
		'date' : {
			'year' : '1979',
			'month' : '3',
			'day' : '5',
		},
		'heading' : 'Inner Solar System',
		'subheading' : 'Jupiter',
	},
	'saturn' : {
		'km' : '1809773136',
		'date' : {
			'year' : '1980',
			'month' : '1',
			'day' : '12',
		},
		'heading' : 'Inner Solar System',
		'subheading' : 'Saturn',
	},
	'family' : {
		'km' : '6000000000',
		'date' : {
			'year' : '1990',
			'month' : '2',
			'day' : '14',
		},
		'heading' : 'Kuiper Belt',
		'subheading' : 'Family Portrait',
	},
	'shock' : {
		'km' : '16329340800',
		'date' : {
			'year' : '2004',
			'month' : '12',
			'day' : '15',
		},
		'heading' : 'Termination Shock',
		'subheading' : 'Exiting The Solar System',
	},
	'highway' : {
		'km' : '19050897600',
		'date' : {
			'year' : '2012',
			'month' : '12',
			'day' : '3',
		},
		'heading' : 'Heliosheath',
		'subheading' : 'Magnetic Highway',
	},
	'current' : {
		'km' : '26126945280',
		'date' : {
			'year' : '2025',
			'month' : '4',
			'day' : '20',
		},
		'heading' : 'Heliosheath',
		'subheading' : 'No Signal',
	},
};
// voyager set variables
var v = {};
// v.km_per_second = 299792.458;
v.km_per_second = 86;
v.startTime = new Date('9/5/1977 12:56:00');
v.endTime = new Date('9/5/1977 12:56:00');
v.battery = 470;
v.battery_life_per_year = 6.5;

var speedOfLight = 299792.458;
var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
var startMonths = 0;

var positionObj = {};
var secondsPerPixel;
var currentKey = 'earth';
var audioAutoPlay = true;

// jQuery Functionality
$(document).ready(function() {	
	init();
	changeWarp(next(steps, currentKey));
	$('header .center h1').html(steps['earth'].heading);
	$('header .center h2').html(steps['earth'].subheading);
	$('.date .english').html(steps['earth'].date.year+'-'+months[(steps['earth'].date.month - 1)]);
	$('.date .kryp').html(months[steps['earth'].date.month]);
	setInterval('dist_controller()', 500);
	
	$('.audio-controls').click(function() {
		if(audioAutoPlay == true){
			$('audio').pause();
			audioAutoPlay = false;
		}else{
			$('audio').play();
			audioAutoPlay = true;
		}
	});
	
	// handles any scrolling events
	$(this).scroll(function(){
		init();
	});
	
	// Calculate the height of the body content
	var bgLayers = '.bg-layer1, .bg-layer2, .bg-layer3';
	
	$(bgLayers+', .tile-wrapper,.tile-group > div').css('height', $(window).height());
	$(window).resize(function() {
		$(bgLayers+', .tile-wrapper, .tile-group, .tile-group > div').css('height', $(window).height());
	});
	
	// get the data from the "steps" object
	$.each(steps, function(key, obj) {
		var nextKey = (next(steps, key) != undefined) ? next(steps, key) : null ;
		var nextKm = (nextKey != null) ? kmToPixels(steps[next(steps, key)].km) : $(document).width() ;
		positionObj[kmToPixels(steps[key].km)+'-'+nextKm] = key;
		
		$(window).scroll(function() {
			// console.log('start: '+kmToPixels(steps[key].km)+', end: '+nextKm+', current: '+window.pageXOffset);
			if(window.pageXOffset >= (kmToPixels(steps[key].km)-600) && window.pageXOffset < (nextKm-600)){
				var newKey = kmToPixels(steps[key].km)+'-'+nextKm;
				$('header .center h1').html(steps[positionObj[newKey]].heading);
				$('header .center h2').html(steps[positionObj[newKey]].subheading);
				
				$('.date .english').html(steps[positionObj[newKey]].date.year+'-'+months[(steps[positionObj[newKey]].date.month - 1)]);
				$('.date .kryp').html(months[(steps[positionObj[newKey]].date.month - 1)]);
				currentKey = positionObj[newKey];
				changeWarp(next(steps, currentKey));
			}
		});
		createTimeline(key);
	});	
	
	// Convert vrtical sroll to horizontal
	$('body').mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});
	
	$('.next-tile a.fr').hover(function(){
		$('.next-tile a.fl').stop().animate({
			opacity: 1
		}, 400);
	}, function(){
		$('.next-tile a.fl').stop().animate({
			opacity: 0
		}, 400);
	}).click(function() {
		var newKey = next(steps, currentKey);
		var px = kmToPixels(steps[newKey].km);
		var speed = getSpeed($(document).scrollLeft(), (steps[newKey].km / 100000));
		$('body').scrollTo(px, {duration: speed, onAfter: function() { 
			$('header .center h1').html(steps[newKey].heading);
			$('header .center h2').html(steps[newKey].subheading);
			$('.date .english').html(steps[newKey].date.year+'-'+months[(steps[newKey].date.month - 1)]);
			$('.date .kryp').html(months[(steps[newKey].date.month - 1)]);
			currentKey = newKey;
			changeWarp(newKey);
		}});
		return false;
	});
	
	// Parralax scrolling elements
	$(bgLayers).css('width', $(document).width());
	$('.bg-layer1').scrollParallax({'speed': -0.2});
	$('.bg-layer2').scrollParallax({'speed': -0.2});
	$('.bg-layer3').scrollParallax({'speed': -1.5});
	
	// Voyager PNG Sequence
	var vaCounter = 92;
	var countDirection = 1;
	var voyagerAnimation = setInterval(function(){
		// console.log(vaCounter);
		if(vaCounter == 92){
			countDirection = 1;
		}else if(vaCounter == 166){
			countDirection = 0;
		}
		if(countDirection == 1){
			++vaCounter;
		}else{
			--vaCounter;
		}
		$('#voyager img').attr('src', 'img/voyager/voyager_'+vaCounter+'.png');
	}, 100);	
});

// Functions
function getMonthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function getSecondsBetweenDates(start_date, end_date){
	console.log(start_date);
	var t1 = new Date(start_date.year, start_date.month, start_date.day, 0, 0, 0, 0);
	var t2 = new Date(end_date.year, end_date.month, end_date.day, 0, 0, 0, 0);
	return Math.abs((t1.getTime() - t2.getTime()) / 1000);
}

function convertKmToAu(km){
	// 1 AU = 149597870.691 KM
	var au = km / 149597870.691;
	return (au >= 1) ? Math.round(au) : Math.round(au * 1000) / 1000 ;
}

function createTimeline(key) {
	var px = kmToPixels(steps[key].km);
	
	// Set the position of all the tile groups
	// var tg = $('.tile-wrapper .tile-group:first-child').clone();
	$('.tile-wrapper').find('.'+key).css('left', px+'px').removeClass('dn');
	
	// Set all the points
	$('#'+key).attr('href', '#').click(function() {
		// $('header .center h1').html(steps[key].title);
		// var speed = px/10;
		var speed = getSpeed($(document).scrollLeft(), (steps[key].km / 100000));
		$('body').scrollTo(px, {duration: speed, onAfter: function() { 
			$('header .center h1').html(steps[key].heading);
			$('header .center h2').html(steps[key].subheading);
			$('.date .english').html(steps[key].date.year+'-'+months[(steps[key].date.month - 1)]);
			$('.date .kryp').html(months[(steps[key].date.month - 1)]);
			currentKey = key;
			changeWarp(key);
		}});
		return false;
	});
	return;
}

function changeWarp(key){
	$('.next-tile .title').html(steps[key].subheading);
	$('.next-tile .distance').html(numberWithCommas(steps[key].km)+' km');
	// <span class="instruction">Warp To</span>
	// <span class="title">Termination<br />Shock</span>
	// <span class="distance">1,427,000,000 km</span>
}

function getSpeed(startPos, endPos){
	var sp = Math.abs(Math.round(startPos - endPos))/10;
	return (sp < 1000) ? 1000 : sp ;
}

function kmToPixels(km){
	return Math.round(km / 100000);
}

function init() {
	var percent = $(this).scrollLeft() / $(document).innerWidth();
	var positionPercent = percent * 100 + 1.36;
	
	var km = $(this).scrollLeft() * 100000;
	var seconds = km / v.km_per_second;
	var milliseconds = seconds * 1000;
	var date = new Date(v.startTime.getTime() + milliseconds);
	var month = date.getMonth();
	var year = date.getFullYear();
	// var battery_life = v.battery - (v.battery_life_per_year / 12 * getMonthDiff(v.startTime, date));
	// var battery_percent = Math.round(battery_life / v.battery * 100);
	var battery_life = v.battery - 196;
	var battery_remaining = Math.round(battery_life * percent);
	var battery_percent = Math.round(100 - (battery_remaining / v.battery * 100));
	console.log('Battery: '+battery_percent);
	var signal = ((km / speedOfLight) / 60) / 60;
	var signalFormatted = (signal < 1) ? (Math.round(signal * 60))+' MINS' : Math.round(signal)+' HRS' ;
	var au = convertKmToAu(km);
	
	$('.timeline-container .timeline-empty .timeline-fill').css('width', positionPercent+'%');
	$('.battery .power').css('width', battery_percent+'%');
	$('.battery-container .kryp').html(battery_percent);	
	$('.signal-exchange .signal').html(signalFormatted);
	$('.distance .km').html(numberWithCommas(km)+' KM');
	$('.distance .au').html(au+' AU');
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var next = function(db, key) {
  var keys = Object.keys(db);
  var i = keys.indexOf(key);
  return keys[i + 1];
};