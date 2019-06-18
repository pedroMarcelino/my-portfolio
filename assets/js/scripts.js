$(function () {
    $(".navbar").attr("class", "navbar fixed-top navbar-expand-lg back-menu");
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 100) {
            $(".navbar").attr("class", "navbar fixed-top navbar-expand-lg navbar-dark bg-dark" );
        } else {
            $(".navbar").attr("class", "navbar fixed-top navbar-expand-lg back-menu");
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


                if (data.success == true) {
                    swal("Prontinho!", "Recebi seu email, logo irei responder!!", "success");
                } else if (data.success == false) {
                    swal("Oops...", "Ocorreu um problema, tente novamente!", "error");
                }


            }
        });

        console.log(json);
    })


});