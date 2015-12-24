var data = {
	labels : ["Running", "Driving", "Drinking", "Facebooking", "Reading", "Cooking"],
	datasets : [{
		label : "Goal",
		fillColor : "Red",
		strokeColor : "rgba(220,220,220,0.8)",
		highlightFill : "rgba(220,220,220,0.75)",
		highlightStroke : "rgba(220,220,220,1)",
		data : [21, 21, 21, 21, 21, 21]
	}, {
		label : "Actual",
		fillColor : "Green",
		strokeColor : "rgba(151,187,205,0.8)",
		highlightFill : "rgba(151,187,205,0.75)",
		highlightStroke : "rgba(151,187,205,1)",
		data : [0, 0, 0, 0, 0, 0]
	}]
};

initChart = function() {
	var ctx = document.getElementById("myChart").getContext("2d");
	var myBarChart = new Chart(ctx).Bar(data, null);
};
