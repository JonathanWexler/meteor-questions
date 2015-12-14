Questions = new Mongo.Collection('questions');

if (Meteor.isClient) {
  Template.main.questions = function(){
    return Questions.find();
  }
  Template.main.events({
   'click #save': function (e) {
    var question = $("#question").val();
    var answer = $("#answer").val();
    var type = $("#type").val();
    // e.preventDefault();
    Questions.insert({question:question, answer:answer, type:type});
    // alert(question + answer + type + Questions.find());
    console.log(Questions.find());
  },
  'dblclick': function (e) {
    Questions.remove(this._id);
    // e.preventDefault();
    // console.log("You pressed the button");
  }
});
}

if (Meteor.isServer) {

}
