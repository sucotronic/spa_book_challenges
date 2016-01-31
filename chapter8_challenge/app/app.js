define([ 
    "jquery",
    "views/SurveyView", 
    "collections/Survey"
    ], function($,SurveyView, Survey) {

	function init() {
        var items = new Survey();
        var promise = items.fetch();
        $.when(promise).then(function(){
            new SurveyView(items);    
        });        
	}

	return {
		init : init
	};

});
