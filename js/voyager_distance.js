var current_dist_km_v1 = 0;
var current_dist_au_v1 = 0;
var current_dist_km_v1s = 0;
var current_dist_au_v1s = 0;
var au_const = 149597870.691;

function dist_controller()
{
	current_dist_km_v1 = ( ( ( current_time - epoch_0 ) / ( epoch_1 - epoch_0 ) ) * ( dist_1_v1 - dist_0_v1 ) ) + dist_0_v1;
	current_dist_au_v1 = (current_dist_km_v1/au_const) + '';
	current_dist_au_v1 = current_dist_au_v1.split('.');
	current_dist_au_v1 = current_dist_au_v1[0] + '.' + current_dist_au_v1[1].substring(0,8);
				  
	current_dist_km_v1s = ( ( ( current_time - epoch_0 ) / ( epoch_1 - epoch_0 ) ) * ( dist_1_v1s - dist_0_v1s ) ) + dist_0_v1s;
	current_dist_au_v1s = (current_dist_km_v1s/au_const) + '';
	current_dist_au_v1s = current_dist_au_v1s.split('.');
	current_dist_au_v1s = current_dist_au_v1s[0] + '.' + current_dist_au_v1s[1].substring(0,8);
	
	current_dist_lt_v1 = current_dist_km_v1 * 2 / 299792.458;

	document.getElementById('voy1_km').innerHTML = addCommas( Math.round(current_dist_km_v1) + " KM" );
	document.getElementById('voy1_au').innerHTML = addCommas( current_dist_au_v1 ) + " AU";				   
	document.getElementById('voy1_kms').innerHTML = addCommas( Math.round(current_dist_km_v1s) + " KM" );
	document.getElementById('voy1_aus').innerHTML = addCommas( current_dist_au_v1s ) + " AU";	
	document.getElementById('voy1_lt').innerHTML = formatSeconds(current_dist_lt_v1);
	
	//alert("dist_controller.addCommas( Math.round(current_dist_km_v1) ): " + addCommas( Math.round(current_dist_km_v1) ));

	current_time += 0.5;
}
 
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
  
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
  
		var rgx = /(\d+)(\d{3})/;
	 
		while ( rgx.test(x1) )
		{
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
}

function formatSeconds(num)
{
	var hours = Math.floor(num / 3600);
	
	num -= (hours * 3600);
	
	var minutes = Math.floor(num / 60);
	
	num -= (minutes * 60);
	
	var seconds = Math.floor(num);
	
	if ( hours < 10 )
		hours = "0" + hours;
	if ( minutes < 10 )
		minutes = "0" + minutes;
	if ( seconds < 10 )
		seconds = "0" + seconds;	
	
	return hours + ":" + minutes + ":" + seconds;	
}