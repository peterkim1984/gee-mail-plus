$(function(){

  for (var i = 0; i < window.geemails.length; i++) {
    $("#emailList").append("<li data-emailid=\"email" + i + "\"> <b>Subject :</b> " + window.geemails[i].subject + " <b>Sender :</b> " + window.geemails[i].sender + "</li> <div id=\"email" + i + "\" class=\"emailBody\">" + window.geemails[i].body + "</div>");
    $(".emailBody").hide();


  };


$('ul li').click(function(){

  var emailclicked = $(this).data('emailid')
  if (!$("#" + emailclicked).hasClass("opened")){

  $("#" + emailclicked).show().addClass("opened");
}
else
{
  $("#" + emailclicked).hide().removeClass("opened");
}
});

});