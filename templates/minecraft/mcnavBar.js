//menu code loading from other document
$(function() {

    $("#mcNavBar").load("mcnavBar.html");

    function activeNav() {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
         $("#mcNavBar ul li a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("active");
         });
    }

    setTimeout(function() {
        activeNav();
    }, 100);

});


//mobile compatability menu page opening
function openNav() {
  document.getElementById("mobileMenuNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobileMenuNav").style.width = "0";
}
