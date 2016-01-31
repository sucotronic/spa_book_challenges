requirejs.config({
	baseUrl : "../",
	paths : {
		// bower
		jquery : "app/bower_components/jquery/dist/jquery",
		text : "app/bower_components/text/text",
		backbone : "app/bower_components/backbone/backbone",
		underscore : "app/bower_components/underscore/underscore",        

		QUnit : "test/bower_components/qunit/qunit/qunit",
        sinon : "test/bower_components/sinon/lib/sinon",
		
		// application
		models : "app/survey/models",
		views : "app/survey/views",
		templates : "app/survey/templates",
        collections : "app/survey/collections",
        
        // tests
		modelTests: "test/survey/models",
        collectionTests: "test/survey/collections",
		viewTests: "test/survey/views"
	},
	shim : {
		QUnit : {
			exports : 'QUnit',
			init : function() {
				QUnit.config.autoload = false;
				QUnit.config.autostart = false;
			}
		}
	}
});

require([ 
  "QUnit",
  "modelTests/surveyItemModelTest",
  "collectionTests/surveyItemCollectionTest",
  "viewTests/surveyViewTest"  
], 
function(QUnit, surveyItemTest, surveyItemCollectionTest, surveyViewTest) {
	surveyItemTest.addTests();
	//surveyItemCollectionTest.addTests();
    //surveyViewTest.addTests();

    QUnit.load();
    QUnit.start();
});

