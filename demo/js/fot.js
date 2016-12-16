$(function(){
	
	var fot=document.getElementsByClassName("fot");
		$(".body").css("opacity","0").eq(0).css("opacity","1")
for(var j=0;j<=fot.length;j++){

	fot[j].addEventListener('tap',function(){
		var index=$(this).index();
		$(".body").css("opacity","0").eq(index).css("opacity","1")
		
	});
}	




})
		


