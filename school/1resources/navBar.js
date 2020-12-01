$(function() {

    $("#schoolNavBar").load("navBar.html");

    function activeNav() {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
         $("#schoolNavBar ul li a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("active");
         });
    }

    setTimeout(function() {
        activeNav();
    }, 100);

});
