//flashing!!

function convertTemp() {
	var temp = document.getElementById("temp").value;
	var unit = document.getElementById("unit").value;

// if the unit is C, we're converting to Celsius and making a comment
	if (unit === "C") {
		temp = (temp - 32) / 1.8;
		if (temp >= 32) {
			var msg = " It's hot!";
		} else if (temp >= 21) {
			var msg = " It's a beautiful day!";
		} else if (temp >= 13) {
 			var msg = " It's chilly!";
		} else if (temp > 0) {
 			var msg = " It's cold!";
		} else {
			var msg = " It's freezing!";
		}
		document.getElementById("results").innerHTML = "The temperature is " + temp + " degrees in Celsius." + msg;

// if the unit is F, we're converting to Fahrenheit
	} else if (unit === "F") {
		temp = (temp * 9/5) + 32; 
		// below is repeating the comments from above. sad face
		if (temp >= 90) {                    
			var msg = " It's hot!";
		} else if (temp >= 70) {
			var msg = " It's a beautiful day!";
		} else if (temp >= 55) {
 			var msg = " It's chilly!";
		} else if (temp > 32) {
 			var msg = " It's cold!";
		} else {
			var msg = " It's freezing!";
		}
		document.getElementById("results").innerHTML = "The temperature is " + temp + " degrees in Fahrenheit." + msg;
	} else {
		document.getElementById("results").innerHTML = "Please try again.";
	}

}




