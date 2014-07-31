<html>
<head>
	<title>Family Feud</title>

	<link rel="stylesheet" type="text/css" href="/includes/css/familyfeud.css" />
</head>
<body>

	<div id="background">
		<div class="wrong wrong-multiple"></div>
		<div class="wrong wrong-single"></div>
	
		<div id="answers">
			<div class="wrapper">
				<div class="cell">
					<section class="container test">
						<div class="inactive"></div>
					</section> 
	  
					<section class="container test1">
						<div class="inactive"></div>
					</section> 
	  
					<section class="container">
						<div class="inactive"></div>
					</section> 
	  
					<section class="container">
						<div class="inactive"></div>
					</section> 
	  
					<section class="container">
						<div class="inactive"></div>
					</section> 
				</div>
	  
				<div class="cell">
					<section class="container">
						<div class="inactive"></div>
					</section>

					<section class="container">
						<div class="inactive"></div>
					</section>

					<section class="container">
						<div class="inactive"></div>
					</section>

					<section class="container">
						<div class="inactive"></div>
					</section>

					<section class="container">
						<div class="inactive"></div>
					</section>                
				</div>
			</div>
			<div id="score"></div>
		</div>
	</div>
	<div id="score-teams">
		<div id="score-team1"></div>
		<div id="score-team2"></div>
	</div>
	<div class="footer">
		<button id="strike-single" type="button">Single Strike!</button>
		<button id="strike" type="button">Strike!</button>
		Strike Count: <span id="strike-count">0</span>
		<span class="start">Start Game</span>
		<span class="next">Next Question</span>
	</div>
	
	<iframe id="sound" style="display: none"></iframe>
	
	<div id="template-inactive" style="display:none;">
		<div class="inactive"></div>
	</div>
	<div id="template-active" style="display:none;">
		<div class="answer" data-score="@SCORE">
			<figure class="front"><span>@ANSWERID</span></figure>
			<figure class="back">@ANSWER <span class="score">@SCORE</span></figure>
		</div>
	</div>

	<script type="text/javascript" src="/includes/js/libs/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="/includes/js/familyfeud.js"></script>
	<script type="text/javascript" src="/includes/js/familyfeud-automator.js"></script>
</body>
</html>
