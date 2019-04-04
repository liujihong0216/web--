var timer = null;
window.onload = function(){
	//定义倒计时的时间(倒计时1分钟10秒)
	var min = 1;
	var minutes = 15;
	var seconds = 59;

	function show(){
		//判断时间到了没
		if(seconds==0&&minutes==0&&min==0){
			clearInterval(timer);//清除定时器
			alert("时间到");
			return;
		}
		
		if(minutes<0){
			minutes = 59;
			min--;
		}
		seconds--;
		if(seconds<0){
			seconds = 59;
			minutes--;
		}
		
		min = (min+"").length==1?"0"+min:min;
		minutes = (minutes+"").length==1?"0"+minutes:minutes;//(minutes+"")是将其数据类型转换成字符串类型
		seconds = (seconds+"").length==1?"0"+seconds:seconds;
		document.getElementById("botHours").innerHTML =min;
		document.getElementById("botMin").innerHTML =minutes;
		document.getElementById("botSecond").innerHTML =seconds;
	}
	//开启定时器
	timer = setInterval(show,1000);

}