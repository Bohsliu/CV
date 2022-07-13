<html xmlns="staly.html">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>test</title>
        <script src="/js/styl.js"></script>

		<script type="text/javascript">
			var chet = 1;
			window.onload = function () { setTimeout(frout, 5000); }
			function frout() {
			chet++;
			if (chet>3) {chet=0;}
				switch(chet) {
				case 1:
					document.getElementById('img').src = "31.jpg";
					break;
				case 2:
					document.getElementById('img').src = "depo.jpg";
					break;
				case 3:
					document.getElementById('img').src = "31.jpg";
					break;
				}
			setTimeout(frout, 5000);
			}
		</script> 
	</head>
	<body>
		<p><img src="depo.jpg" onclick="frout();" id="img" alt="" /></p>
	</body>
</html>