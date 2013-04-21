<?php include('inc/application_top.php'); ?>
	<?php include('inc/header.php'); ?>
	<div class="bg-layer1"></div>
	<div class="bg-layer2"></div>
	<div class="bg-layer3"></div>
	<div class="voyager" id="voyager">
		<img src="img/voyager/voyager_92.png" alt="" />
	</div>
	<div class="fc next-tile">
		<a href="#" class="fl">
			<span class="instruction">Warp To</span>
			<span class="title">Termination<br />Shock</span>
			<span class="distance">1,427,000,000 km</span>
		</a>
		<a href="#" class="fr"></a>
	</div>
	<div class="dn testing">
		<ul>
			<li id="voy1_km"></li>
			<li id="voy1_au"></li>
			<li id="voy1_kms"></li>
			<li id="voy1_aus"></li>
			<li id="voy1_lt"></li>
		</ul>
	</div>
	<div class="tile-wrapper">
		<div class="earth tile-group">
			<div class="border_heliosheath"></div>
			<div class="border_kuiper"></div>
			<div class="border_terminationshock"></div>
			<div class="tile-01"></div>
			<div class="tile-02"></div>
			<div class="tile-03"></div>
		</div>
		<div class="jupiter tile-group">
			<div class="tile-01"></div>
		</div>
		<div class="saturn tile-group">
			<div class="tile-01"></div>
		</div>
		<div class="family tile-group">
			<div class="tile-01"></div>
		</div>
		<div class="shock tile-group">
			<div class="tile-01"></div>
		</div>
		<div class="highway tile-group">
			<div class="tile-01"></div>
		</div>
		<div class="current tile-group">
			<div class="tile">Test</div>
		</div>
	</div>
	<?php include('inc/footer.php'); ?>
<?php include('inc/application_bottom.php'); ?>