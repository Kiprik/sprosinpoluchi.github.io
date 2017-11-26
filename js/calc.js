$(document).ready(function() {
	$(".calc select").change(function(){
		var price_domen=$("#price-domen option:selected").val();
		var price_host=$("#price-host option:selected").val();
		var price_develop=$("#price-develop option:selected").val();
		var price_admin=$("#price-admin option:selected").val();
    var price_moder=$("#price-moder option:selected").val();
    var price_expert=$("#price-expert option:selected").val();
    var price_bytov=$("#price-bytov option:selected").val();
    var count_bytov=$("#count-bytov option:selected").val();
    var price_small=$("#price-small option:selected").val();
    var count_small=$("#count-small option:selected").val();
    var price_middle=$("#price-middle option:selected").val();
    var count_middle=$("#count-middle option:selected").val();
var final_month =0;
        $('#price-domen').text(price_domen);
			$('#price-host').text(price_host);
      $('#price-develop').text(price_develop);
      $('#price-admin').text(price_admin);
      $('#price-moder').text(price_moder);
      $('#price-expert').text(price_expert);
      $('#price-bytov').text(price_bytov);
      $('#count-bytov').text(count_bytov);
      $('#price-small').text(price_small);
      $('#count-small').text(count_small);
      $('#price-middle').text(price_middle);
      $('#count-middle').text(count_middle);
itogoMonth();
	})

  function itogoMonth(){
    document.getElementById('win').innerHTML = 'kod5';
    var final_month=((price_domen/12+price_host/12+price_develop+price_admin+price_moder+price_expert)-(price_bytov*count_bytov+price_small*count_small+price_middle*count_middle))/30;
    $("#final_month").text(final_month);
  				}


});
