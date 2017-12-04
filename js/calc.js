$(document).ready(function () {


$('#raschet').click(function(){
  var price_domen=$("#price-domen").val();
 	var price_host=$("#price-host").val();
 	var price_develop=$("#price-develop").val();
 	var price_admin=$("#price-admin").val();
  var price_moder=$("#price-moder").val();
  var price_expert=$("#price-expert").val();
  var price_bytov=$("#price-bytov").val();
  var count_bytov=$("#count-bytov").val();
  var price_small=$("#price-small").val();
  var count_small=$("#count-small").val();
  var price_middle=$("#price-middle").val();
  var count_middle=$("#count-middle").val();
  var final_month=((price_domen*1+price_host*1+price_develop*1+price_admin*12+price_moder*12+price_expert*12)/(price_bytov*count_bytov+price_small*count_small+price_middle*count_middle));
  var final=Math.ceil(final_month);
  $("#final_month").text(final);
});

})
