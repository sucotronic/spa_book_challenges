define([ 
  "jquery", 
  "sinon", 
  "models/SurveyItem" 
], function($, sinon, SurveyItem) {
    function addTests() {
        module("surveyItemModel tests", {
			beforeEach: function() {
		        this.surveyItem = new SurveyItem();
                this.surveyItem.set("id", 1);
                this.surveyItem.set("votes", 0);
                this.surveyItem.set("name", "test");
		        this.server = sinon.fakeServer.create();
		    },
		    afterEach: function() {
		    	this.server.restore();
		    }
		});
        test("add vote", function() {
           this.server.respondWith([200, {"Content-Type":"text/json"}, '{"id":1,"name":"test","votes":1}']);
           this.surveyItem.addVote();
           this.server.respond();	
           strictEqual(this.surveyItem.get("votes"), 1, 
             "When a votes is added to a initialized item, the total votes for the item should be 1");           
           equal(this.server.requests[0].requestBody, 
             JSON.stringify(this.surveyItem.attributes), "When the model is saved, the request body should equal the model attributes");
        });
    }
    
    return {
		addTests : addTests
	};
});