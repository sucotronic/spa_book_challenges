define([ 
    "backbone",
    "models/SurveyItem",    
    ], function(Backbone, SurveyItem) {
    var Survey = Backbone.Collection.extend({
      model: SurveyItem,
      url: "/surveyItems"
    });
    return Survey;
});