Router.configure({
	layoutTemplate : 'main'
});
Router.map(function() {
	this.route('home', {
		path : '/'
	});
	this.route('daySummary',{
		path:'/:goal/week/:week',
		data:function(){
			return {
				goal:"1",
				week:"week",
				isDay:true
			}
		}
	});
	this.route('goal', {
		path : ['/:goal'],
		data : function() {
			var responseData,
				goal = this.params.goal,
				week = this.params.week;
			if(week){
				responseData = {
					goal:goal,
					week:week,
					isDay:true
				};
			}else {
				responseData = data[goal];
			}
			return responseData;
		}
	});
});


data = {
	"running" : {
		title : "Running",
		content : "My manager at seagate technology introduced me to running. It was a catalyist to recognizing the importance of building habits and the value of quantifying progress.",
		image : "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/1450337_10103877707045930_405423416_n.jpg?oh=047c0e399e00be725ee667eff006e89f&oe=5538E2A7&__gda__=1430762620_67a81c0eda5928a358ee201348349cdc"
	},
	"reading" : {
		title : "Reading",
		content : "I can not articulate the need for reading. As the cliche goes \"pictures are worth a thousand words\".",
		image : "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/37703_10100261443786490_6988825_n.jpg?oh=b84bd9080909507110dc0e15cc16efac&oe=552F40A9&__gda__=1429903310_44191081b079df22f14f6eaa7bb5ef42"
	},
	"drinking" : {
		title : "Drinking",
		content : "Ever since a college buddy introduced me to coffee, I have loved every sip I have taken. However its side effects of bloated stomach, lethargicness and sleep disruption are just not worth it. I will be substituting tea for coffee.",
		image : "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-9/374438_10103025835024290_816360615_n.jpg?oh=bbd82ed8fabe6f8a1c07b5650a726b09&oe=5539B0A4&__gda__=1425882102_3cd6ff2489ed2e3816d0900acd40ae78"
	},
	"facebooking" : {
		title : "Facebooking",
		content: "Mindless scrolling is just a complete waste of time.",
		image : ""
	},
	"cooking":{
		title : "Cooking",
		content: "Dash",
		image : ""
	},
	"driving":{
		title : "Driving",
		content: "It just does not make sense to drive to work. Free hands means opportunity to read while on way and back to work. Killing two birds in one! "+
				"I can bike, which I love, once spring approaches. Taking busses and trains reminds me of my college days, which I am fond of.",
		image : "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/10628245_10105101597075500_1484955861343309243_n.jpg?oh=ceda84ac113948ab0ec6bc0cda459dc4&oe=54FBCCBB&__gda__=1430268246_2697d8c4765c93153744d0f7511a3f30"
	}
};
