//Initialize size of the window
var windowSize = $(window).height();
var currentPosition,delayWheel = 0;

window.onresize = function(){
	windowSize = $(window).height();
	window.scrollTo(0,windowSize*currentPosition);
	$("#page").css({"height":windowSize})
}

$(function(){

	window.scrollTo(0,0);

	$('body').bind('keydown mousewheel DOMMouseScroll', function (event) {  

			 if (event.originalEvent.wheenDelta){event.preventDefault();}

			 var currTime = new Date().getTime();  
			 if (delayWheel+1200 > currTime)
			 {
			 	return;
			 }

			 delayWheel = currTime;

		     if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 || event.which == 38) {
		     	  if (event.which == 38) {delayWheel = currTime-1200;}
		     	  scroll("up");
		     }
		     else if (event.which == 40 || event.which == 1){
		     	  if (event.which == 40) {delayWheel = currTime-1200;}
		     	  scroll("down");
		     }
	});
})

function scroll(position)
{
	if (position=="up")
		{
			for (var i=windowSize;i>=1;i--)
			{
				doSetTimeOut(-1,i);
			}
		}
	else
		{
			for (var i=1;i<=windowSize;i++)
			{
				doSetTimeOut(1,i);
			}
		}
}

function doSetTimeOut(chg,i)
{
	setTimeout(function(){
		window.scrollBy(0,chg);
		if (windowSize==i)
		{
			currentPosition = $(document).scrollTop()/windowSize;
		}
	},0.4*i);
}