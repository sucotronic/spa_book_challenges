define([ 
    "backbone", 
    ], function(Backbone) {
    var SurveyItem = Backbone.Model.extend({
        url: function(){ return "/surveyItems/"+this.get("id");},
        addVote: function() {
            this.set("votes",this.get("votes")+1);
            this.save();
        }
    });
    return SurveyItem;
});