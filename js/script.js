$(document).ready(function () {

  $('#question-0 > button').click(() => {
    $("#question-0").css("display", "none");
    $("#question-1").css("display", "flex");
  });

  $('#question-1 > button').click(() => {
    $("#question-1").css("display", "none");
    $("#question-2").css("display", "flex");
  });

  $('#question-2 > button').click(() => {
    window.location.href = 'https://ibox.co.id/product/IP-11-NP-IB-CON';
  });
});
