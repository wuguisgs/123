$(document).ready(function(){

/**hide several hidden buttons first*/
$(".hiddenMarkButton").hide();
$(".hiddenFontButton").hide();

/**when hovon on p, change the color of that <p>*/
$("p").hover(function(){
		$(this).css("color","#424242");
      });
 
 /** when click the button, change the font-size of 
 all the <p>  */
 $("#fontSize1").click(function(){
	 $("p").css("font-size","20px");
 });
 $("#fontSize2").click(function(){
	 $("p").css("font-size","24px");
 });
 $("#fontSize3").click(function(){
	 $("p").css("font-size","28px");
 });

 $("#font").click(function(){
	 $(".hiddenFontButton").toggle();
 } )

 


/** make the create a new bookmark button toggle,
and then store that offset, if click the bookmark button,
scroll to offset regarding the distance of top*/
	var offset = 0;
	$("#emptyMark").click(function(){
		offset = $(this).offset().top;
		$("#newMark").toggle();
		console.log(offset)
	});
	
	$("#newMark").click(function(){
		$('html, body').animate({scrollTop: offset-250});
	});
		
		
		

	
	/** display description for difficult word, 
		if hover on underlined word, display the description 
		of that word to the left side*/
    $("u").hover(function(){
        var outclass = $(this).attr("class");		

		if (outclass=="word1"){
			$(this).find(".word1").clone().css("display", "inline")
			.appendTo("aside");
		}
		
		if (outclass=="word2"){
			$(this).find(".word2").clone().css("display", "inline")
			.appendTo("aside");
		}
		
		if (outclass=="word3"){
			$(this).find(".word3").clone().css("display", "inline")
			.appendTo("aside");
		}
		
      },
		function(){
 
		$("aside").text("");
 }
	);
});




