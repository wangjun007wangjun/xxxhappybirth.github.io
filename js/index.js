//Hello!
jQuery(function(){
    //播放完毕
	jQuery('#mp3Btn').on('ended', function() {
    	jQuery(".btn-audio").click();
    });
    
    //播放器控制
    var audio = document.getElementById('mp3Btn');
    audio.volume = 1;
    jQuery('.btn-audio').click(function() {
        event.stopPropagation();//防止冒泡
        if(audio.paused){ //如果当前是暂停状态
            jQuery(".btn-audio").addClass("Rotation");
            audio.play(); //播放
            return;
        }else{//当前是播放状态
        	jQuery(".btn-audio").removeClass("Rotation");
            audio.pause(); //暂停
        }
    });
    
    if(myBrowser() != 'Safari' && myBrowser() != 'iPhone'){
		jQuery(".btn-audio").addClass("Rotation");
		jQuery('.btn-audio').click();
	}
    setTimeout(function(){
		jQuery("body").addClass('body2');
	},60000);
});
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
      return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
    if (userAgent.indexOf("iPhone") > -1) {
        return "iPhone";
    } //判断是否Safari浏览器
}