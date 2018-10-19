$( document ).ready(function() {
	$('.remove').click(function() {
		$(this).hide();
	});

	$('.title_content').hover(function(){
		$(this).closest("li").nextAll('li').find('a').css({
			'text-decoration': 'underline'
		});
	},function() {
		$(this).closest("li").nextAll('li').find('a').css({
			'text-decoration': 'none'
		});
	});

	$('.icon').click(function(){
		let key = $(this).attr("value");
		key = parseInt(key);
		switch (key) {
			case 1: 
				$("#container").css({'background': '#373948'});
				break;
			case 2: 
				$("#container").css({'background': '#d9635f'});
				break;
			case 3: 
				$("#container").css({'background': '#58a998'});
				break;
			default: 
				$("#container").css({'background': '#e18377;'});
				break;
		}
	});
});
