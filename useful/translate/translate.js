function lolcat() {
    var args = $("#translate").val();
    if (args == 0) {
        $("#translated").html("U DOAN WANTS 2 TRANZLATE ANYTHIN???");
    }
    else {
        $.get('https://allow-any-origin.appspot.com/http://speaklolcat.com/?from=' + encodeURI(args)).success(function (data) {
            var translated = new DOMParser().parseFromString(data, 'text/html').querySelector("#to").textContent;
            $("#translated").html(translated);
        });
    }
}
function pirate() {
    var args = $("#translate").val();
    if (args == 0) {
        $("#translated").html("Don't want to translate anything???");
    }
    else {
        $.get('https://allow-any-origin.appspot.com/http://isithackday.com/arrpi.php?text=' + encodeURI(args)).success(function (data) {
            var translated = new DOMParser().parseFromString(data, 'text/html').querySelector("body").textContent;
            $("#translated").html(translated);
        });
    }
}
function cowsay() {
    if (!$('#translate').length) {
        $("#cow").html("Mooooooooo, please add text!");
    }
    else {
        $.get('https://allow-any-origin.appspot.com/http://cowsay.morecode.org/say?message=' + encodeURI($('#translate').val()) + '&format=text').success(function (data) {
            $("#cow").html(data + "<hr style='margin-top: -20px;'>");
        });
    }
}
