
//check off specific items by clicking

// $("li").on("click", function(){
// 	//if not checked, color = black
// 	//mark checked, change color to gray
// 	if($(this).css("color")==="rgb(0, 0, 0)"){
// 		$(this).css({
// 			color: "gray",
// 			textDecoration : "line-through",
// 			fontWeight: "normal"
// 		})
// 	}

// 	//if clicked again : TOGGLE!
// 	//make black again and UNchecked.

// 	else{
// 		$(this).css({
// 		color: "black",
// 		textDecoration : "none",
// 		fontWeight : "bold"
// 		})
// 	}
// })

$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");
})


//Click on * to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut("slow", function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Adding a new todo

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){  // 13 is the key for ENTER
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span>"+todo+"</li>");
		

	}
})

$(".fa-plus").on("click", function(){
	$("input").fadeToggle();
})