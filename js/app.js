$(function() {

  for (var i = 0; i < window.geemails.length; i++) {
    $("#emailList").append("<li data-emailid=\"email" + i + "\"> <div class=\"large-4 columns\"><b>Date:</b> " + window.geemails[i].date + "</div><div class=\"large-3 columns\"><b>Sender:</b> " + window.geemails[i].sender + " </div><div class=\"large-5 columns\"><b>Subject:</b> " + window.geemails[i].subject + " </div><div id=\"email" + i + "\" class=\"large-12 columns emailBody\">" + window.geemails[i].body + "</div></li>");
    $(".emailBody").hide();


  };


  $('ul li').click(function() {

    var emailclicked = $(this).data('emailid')
    if (!$("#" + emailclicked).hasClass("opened")) {

      $("#" + emailclicked).show().addClass("opened");
    } else {
      $("#" + emailclicked).hide().removeClass("opened");
    }
  });

});