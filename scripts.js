window.addEventListener("load",function(){

	$('.add').on("click",function(){
		$(this).closest("li")
			.find("img")
			.clone()
			.addClass("animate")
			.appendTo("body");
		setTimeout(function(){
		$(".animate").remove();
		},1000);
	});

});