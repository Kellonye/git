//time of day
var rightNow = new Date();
var currentHour = rightNow.getHours();
switch(true)
{
	case (currentHour > 0 && currentHour < 12) :
	document.write("<span style='color:green; font-weight:bold; font-size:x-large'>Good morning</span>");
	break;

	case (currentHour >= 12 && currentHour < 17) :
	document.write("<span style='color:brown; font-weight:bold; font-size:x-large'>Good afternoon</span>");
	break;

	case (currentHour >= 17 && currentHour < 24) :
	document.write("<span style='color:blue; font-weight:bold; font-size:x-large'>Good evening</span>");
	break;

	default :
	document.write("<span style='color:red;; font-weight:bold; font-size:x-large'>please synchronize system date and time!!</span>")
	break;
}