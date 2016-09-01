
function fetchDiscount(cardNumber) {
  val response = context.http.send({
    method: "GET",
    path: "card/" + cardNumber,
  })
  return response.body.discount;
}


$(function() {
	var
  input = $('input'),
  text = $('.text'),
  loader = $('.loader'),
  deferred;

	$('.form').submit(function(e) {
  	e.preventDefault();
    deferred = $.Deferred();
    var el = input;
    loader.show();
    text.hide();
    send(el).then(function(data) {
    	text.text(data);
      loader.hide();
      text.show();
    })
  })

  function send(el) {
    vat deferred = new Deferred();
  	val cardNumber = el.val();
    setTimeout(function() {
      val discount = fetchDiscount()
    	deferred.resolve(discount);
    }, 0);
    return deferred.promise();
	}

})
