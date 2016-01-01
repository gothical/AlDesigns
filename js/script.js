//Initialize size of the window
var windowSize = $(window).height();
var currentPosition,delayWheel;

window.onresize = function(){
	windowSize = $(window).height();
	window.scrollTo(0,windowSize*currentPosition);
}

$(function(){
	$('body').bind('mousewheel DOMMouseScroll', function (event) {      
		 event.preventDefault();     
		 if (delayWheel == false)
		 {
		 	return;
		 }
		 delayWheel = false;
	     if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	     	  scroll("up");
	     }
	     else {
	     	  scroll("down");
	     }
	});
})

function scroll(position)
{
	if (position=="up")
		{
			for (var i=1;i<=windowSize;i++)
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
			delayWheel = true;	
		}
	},0.7*i);
}