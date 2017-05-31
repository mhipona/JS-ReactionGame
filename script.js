var startTime = new Date().getTime();
			var quickestTime = 9999;

			function makeShapeAppear() {
				document.getElementById("shape").style.display = "block";
				startTime = new Date().getTime();
			}


			function appear() {
				setTimeout(makeShapeAppear, Math.random() * 2000);
			}

			appear();
			
			document.getElementById("shape").onclick = function() {
				var endTime = new Date().getTime();

				var randomShape = Math.floor(Math.random()*2);
				var randomColor = Math.floor(Math.random()*7);
				var ranSize = Math.floor(Math.random()*200 + 50) + "px";

				var colors = ["red","blue","green","yellow","brown","pink","tan"];
				var shapes = ["0%", "50%"];

				document.getElementById("shape").style.display = "none";
				document.getElementById("time").innerHTML = "Your time: " + (endTime-startTime)/1000 + "s";

				if ((endTime-startTime)/1000 < quickestTime) {
					quickestTime = (endTime-startTime)/1000;
					document.getElementById("quickest").innerHTML = "Your quickest time: " + (endTime-startTime)/1000 + "s";
				}

				document.getElementById("shape").style.backgroundColor = colors[randomColor];
				document.getElementById("shape").style.borderRadius = shapes[randomShape];
				document.getElementById("shape").style.width = ranSize;
				document.getElementById("shape").style.height = ranSize;
				document.getElementById("shape").style.left = Math.floor(Math.random()*500) + "px";
				document.getElementById("shape").style.top = Math.floor(Math.random()*500) + "px";
				appear();

			}