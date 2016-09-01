function fetchDiscount(cardNumber) {
    return context.http.send({
        method: 'GET',
        path: 'card/' + cardNumber
    }).body.discount;
}

$(function () {
    var input = $('input'),
        text = $('.text'),
        loader = $('.loader');

    $('.form').submit(function (e) {
        e.preventDefault();
        loader.show();
        text.hide();
        send(input).then(function (data) {
            text.text(data);
            loader.hide();
            text.show();
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
