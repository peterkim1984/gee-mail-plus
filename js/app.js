$(function() {

  var inbox = [];
  var d = new Date();
d = d.toString().replace(/UTC\s/,"");
d = d.replace(/GMT.+/,"");

  for (var i = 0; i < window.geemails.length; i++) {
    inbox.push(window.geemails[i]);
    $("#emailList").prepend("<li data-emailid=" + inbox.length + 
      "> <div class=\"trash large-1 columns medium-1\"><img src=\"images\\erase.png\"></div><div class=\"mail large-4 columns medium-12\"><b>Date:</b> " + window.geemails[i].date.toString() +
      "</div><div class=\"geemail large-3 columns medium-12\"><b>Sender:</b> " + window.geemails[i].sender +
      " </div><div class=\"geemail large-4 columns medium-11\"><b>Subject:</b> " + window.geemails[i].subject +
      " </div><div id=\"email" + i + "\" class=\"geemail large-12 columns emailBody\">" + window.geemails[i].body +
      "</div></li>");

    $(".emailBody").hide();
    $("#mailcount").html("Inbox (" + inbox.length + ")")

  };
 


  setInterval(displayNewMessages, 5000);


  function displayNewMessages() {
    var newMessage = getNewMessage();
    inbox.push(newMessage);
    $("#emailList").prepend("<li data-emailid=\"email" + inbox.length +
      "\"> <div class=\"trash large-1 columns medium-1\"><img src=\"images\\erase.png\"></div><div class=\"large-4 columns medium-12\"><b>Date:</b> " + newMessage.date +
      "</div><div class=\"geemail large-3 columns medium-12\"><b>Sender:</b> " + newMessage.sender +
      " </div><div class=\"geemail large-4 columns emailSub medium-11\"><b>Subject:</b> " + newMessage.subject +
      " </div><div id=\"email" + inbox.length + "\" class=\"geemail large-12 columns emailBody\">" + newMessage.body +
      "</div></li>");
    $("#email" + inbox.length).hide();
    $("#mailcount").html("Inbox (" + inbox.length + ")")
    // $('ul li').click(function() {

    //   var emailclicked = $(this).data('emailid');
    //   $(".emailBody").hide();
    //   $(this).find(".emailBody").show();
    // });



  }

  $('li').on("click", ".geemail", function() {

    var emailclicked = $(this).data('emailid');
    $(".emailBody").hide();
    $(this).find(".emailBody").show();
  });

  $('#emailList').on("click", ".trash", function() {
// console.log('.trash')
    var trashclicked = $(this).closest('li').data('emailid');
    // console.log(trashclicked)
    var inboxSub = (trashclicked - 1)
    // console.log(inboxSub)
    $(this).closest('li').remove()
    inbox.splice(inboxSub, 1)
    // console.log(inbox)
    $("#mailcount").html("Inbox (" + inbox.length + ")")

  });


});