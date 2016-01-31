requirejs.config({
	baseUrl : "app",
	paths : {
		// bower
		jquery : "bower_components/jquery/dist/jquery",
		//domReady : "bower_components/domReady",
		text : "bower_components/text/text",
		backbone : "bower_components/backbone/backbone",
		underscore : "bower_components/underscore/underscore",        
		//handlebars : "bower_components/handlebars.min",
		//QUnit : 'test/bower_components/QUnit_1_17_1',
		
		// application
		models : "survey/models",
		views : "survey/views",
		templates : "survey/templates",
        collections : "survey/collections",
	}
});

require([ "app" ], function(app) {
	app.init();
});

