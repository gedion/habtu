Router.configure({
	layoutTemplate : 'main'
});
Router.map(function() {
	this.route('home', {
		path : '/'
	});
	this.route('toDo',{
		path:'/:toDo'
	});
});

