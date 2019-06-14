$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 100) {
            $(".bg-dark").attr("class", "navbar fixed-top navbar-expand-lg back-menu");
        } else {
            $(".navbar").attr("class", "navbar fixed-top navbar-expand-lg navbar-dark bg-dark");
        }
    });

    $('a[href*="#"]:not([href="#"])').click(function () {

        var target = $(this.hash);

        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top - 70 }, 550);
            return false;
        }
    });

    $('#enviar').click(function () {
        var nome = $("#nome").val();
        var email = $("#email").val();
        var assunto = $("#assunto").val();
        var menssagem = $("#menssagem").val();

        var json = {
            "nome": nome,
            "email": email,
            "assunto": assunto,
            "menssagem": menssagem
        }

        $("#nome").val("")
        $("#email").val("");
        $("#assunto").val("");
        $("#menssagem").val("");

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'sendmail.php',
            async: true,
            data: json,
            success: function (data) {

                var obj = JSON.parse(data);

                var ret = obj.success;

                if (ret == true) {
                    Swal.fire({
                        type: 'success',
                        title: 'Prontinho!',
                        text: 'Recebi seu email, logo irei responder!',
                    })
                } else if (ret == false) {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Ocorreu um problema!',
                        footer: 'Digite novamente'
                    })
                }


            }
        });

        console.log(json);
    })


});