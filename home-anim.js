$(window).on('load', function(){
	$('#titre1').animate({
		left: '2px'}, 1500, function(){
			$('#titre2').animate({left: '2px'}, 1500, function(){
				$('#titre3').animate({left: '2px'}, 1500, function(){
					$('#titre4').animate({left: '45%'}, 1000)
				})
			})
		})
	$('#show').on('click', function(){
		$('.mobile').animate({left: '1px'}, 900)
	})
	$('#hide').on('click', function(){
		$('.mobile').animate({left: `${-1*100}%`}, 900)
	})
})