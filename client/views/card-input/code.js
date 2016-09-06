function fetchDiscount(cardNumber) {
    var response = context.http.send({
        method: 'GET',
        path: 'card/' + cardNumber
    })
    return response.body.discount;
}

$(function () {
    var input = $('input'),
        text = $('.text'),
        loader = $('.loader');

    $('.form').submit(function (e) {
        e.preventDefault();
        loader.show();
        text.hide();
        send(input).then(function (discount) {
            context.data.receipt.applyDiscount(discount);
            loader.hide();
            context.navigation.pushNext()
        })
    });

    function send(el) {
        var deferred = $.Deferred();

        setTimeout(function () {
            deferred.resolve(
                fetchDiscount(
                    el.val() //cardNumber
                )
            );
        }, 0);

        return deferred.promise();
    }
});
