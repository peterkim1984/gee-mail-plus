$(function() {

  var inbox = [];

  for (var i = 0; i < window.geemails.length; i++) {
    inbox.push(window.geemails[i]);
    $("#emailList").append("<li data-emailid=\"email" + inbox.length +
      "\"> <div class=\"large-4 columns\"><b>Date:</b> " + window.geemails[i].date +
      "</div><div class=\"large-3 columns\"><b>Sender:</b> " + window.geemails[i].sender +
      " </div><div class=\"large-5 columns\"><b>Subject:</b> " + window.geemails[i].subject +
      " </div><div id=\"email" + i + "\" class=\"large-12 columns emailBody\">" + window.geemails[i].body +
      "</div></li>");

    $(".emailBody").hide();
    $("#mailcount").html("Inbox (" + inbox.length + ")")

  };



  setInterval(displayNewMessages, 5000);


  function displayNewMessages() {
    var newMessage = getNewMessage();
    inbox.push(newMessage);
    $("#emailList").prepend("<li data-emailid=\"email" + inbox.length +
      "\"> <div class=\"large-4 columns\"><b>Date:</b> " + newMessage.date +
      "</div><div class=\"large-3 columns\"><b>Sender:</b> " + newMessage.sender +
      " </div><div class=\"large-5 columns\"><b>Subject:</b> " + newMessage.subject +
      " </div><div id=\"email" + inbox.length + "\" class=\"large-12 columns emailBody\">" + newMessage.body +
      "</div></li>");
    $("#email" + inbox.length).hide();
    $("#mailcount").html("Inbox (" + inbox.length + ")")
    // $('ul li').click(function() {

    //   var emailclicked = $(this).data('emailid');
    //   $(".emailBody").hide();
    //   $(this).find(".emailBody").show();
    // });



  }

  $('ul').on("click", "li",function() {

    var emailclicked = $(this).data('emailid');
    $(".emailBody").hide();
    $(this).find(".emailBody").show();
  });


});