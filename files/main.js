$(document).ready(function(){

	$('#go').click(function(){
		$.scrollTo('#contact', 500);
	})
	


	function disable_button(){
		$('#btn-submit').attr('disabled', true);
		$('#spiner').show(1);
	}

	$('#feedbackform').submit(function(){

		$('#btn-submit').attr('disabled', true);
		$('#spiner').show(1);

		//return false;
	})

//$('#feedbackform').ajaxForm({target:'#feedbackform', beforeSubmit: disable_button});


// form step5
if($('#id_no_creditor').val() !=undefined ){
	//console.log('creditor: '+ $('#id_no_creditor').attr('checked'));

	// hide, if checked
	if($('#id_no_creditor').attr('checked')=='checked'){ 
		$('#formset_step5').hide(0);
	}

	$('#id_no_creditor').live('change', function(){
		//console.log('creditor changed: '+ $('#id_no_creditor').attr('checked'));
		if($('#id_no_creditor').attr('checked')){
			$('#formset_step5').hide(0);
		}
		else {
			$('#formset_step5').show(0);
		}
	})

}



  $('#menu-open').click(function(){
  	$('#menu-slider').addClass('opened');
  	$('#menu-top').addClass('menu-opened');

  	return false;
  });

  $('#menu-close').click(function(){
  	$('#menu-slider').removeClass('opened');
  	$('#menu-top').removeClass('menu-opened');
  	return false;
  });

});

