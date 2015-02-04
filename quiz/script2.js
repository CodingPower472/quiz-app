(document).ready(function() {
  var questions = ["In JavaScript, which keyword declares a new variable?", "In HTML, how do you make a paragraph?", "In CSS, what single character specifies an id?", "In JavaScript and CSS, which single character is used to specify a new statement", ""];
  var answers = ["var", "<p>", "#", ";"];
  var question_number = 0;
  var questions_number = questions.length - 1;
  $('body').append('<paper-item flex>Summary:</paper-item>')
  function submit() {
    var input = $('paper-input').val();
    $($('paper-input').focus());
    $(".questions").text(questions[question_number]);
    if (answers[question_number] == input) {
      $('body').append('<paper-item flex>Correct</paper-item>')
      $('paper-input').val('');
      if (questions[question_number+1] != '') {
        question_number++;
      }
      else {
        $('.container-fluid').hide();
        $('paper-input').hide();
        $('body').append('<paper-input flex>You are done!</paper-input>')
        $(document).keydown(function() {
          if (event.which == 82) {
            location.reload(true);
          }
        });
      }
    }
    else {
      $('body').append('<paper-input flex>Incorrect</paper-input>')
      $('#q1').val('')
    }
    var questions_correct = 0;
    $(".questions").text(questions[question_number]);
  }
  $('#submit').click(function () {
    submit()
  });
  $(document).keydown(function() {
    if (event.which == 13) {
      submit()
    }
  });
});
