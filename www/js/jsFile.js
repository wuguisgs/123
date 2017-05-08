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

 
 /**Change backgroundColor function
 when scroll to specific content,like
 "the sky was turning to a light, dusky purple" change the 
 backgroundColor to purple. 
 */
$(window).scroll(function() {
    topDistance=$(window).scrollTop();
    $('#topscroll').html(topDistance)
	
    if(topDistance>1300 && topDistance<2300){
        $("body").css("backgroundColor","#BCA9F5")
    }
	
	else if(topDistance>2300 && topDistance<2800){
        $("body").css("backgroundColor","#F3E2A9")
    }
	else{
		$("body").css("backgroundColor","white")
	}
});


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
 });
 
 /**
 $("u").onclick(function(){
 		
 //		var try = "John";
  window.location.href = "addword.php?try=" + try; 
  var ajaxurl = 'addword.php',
  data =  {'try': "hello"};
  $.post(ajaxurl, data, function (response) {
            // Response div goes here.
            alert("action performed successfully");
        });
  
 
 });
 */
 
});




