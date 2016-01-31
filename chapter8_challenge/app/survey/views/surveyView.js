define([ 
    "backbone", 
    "text!survey/templates/survey.html",
    ], function(Backbone, surveyTemplate) {
    var SurveyView = Backbone.View.extend({

      el: "#surveyForm",
      
      template: _.template(surveyTemplate),

      events: {
        "click .vote-button":      "vote",
        "click .results-button":   "toggle",
        "click .return-button":    "toggle"
      },
      data: [],
      view: "voting",
      
      vote: function() {
        var id =  $("input:radio[name ='vote']:checked").val();
        if (!_.isUndefined(id)) {
          this.data.get(id).addVote();      
          console.log(this.data);
          this.render();
          this.toggle();
        }
      },
      
      toggle: function() {
          if (this.view == "voting")
              this.view = "results";
          else
              this.view = "voting";
          this.render();
      },      
      
      initialize: function(items) {
        this.data = items;
        this.render();        
      },

      render: function() {
        this.$el.html(this.template({data:this.data}));
        if (this.view == "voting")
          this.$("#results").hide();    
        else
          this.$("#voting").hide();    
            
      }

    });
    return SurveyView;
});