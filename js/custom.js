// JavaScript Document
$(document).ready(function(){
    $(window).scroll(function(){
      if ($(document).scrollTop() > 100){		  
            $(".navbar-default").css({"background-color":"rgba(59, 58, 58, 0.81)"});   
        }
		else{
				$(".navbar-default").css({"background-color":"transparent"});  
			}
							  });
});