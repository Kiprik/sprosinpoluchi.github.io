$(document).ready(function () {

  raschet.onclick= function() {
  var res = document.getElementById("price-domen") + document.getElementById("price-host");
  console.log(res);
  document.getElementById("final_month").value = res;

}

})
