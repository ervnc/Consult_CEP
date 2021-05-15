$(document).ready(function(){
            
    $("button").first().click(function(e){
        e.preventDefault(); // Quando estiver dentro de um form, NÃO ESQUECER!!
        $.ajax({
            url: 'https://viacep.com.br/ws/'+$("#cep").val()+'/json/unicode/',
            method: "get",
            dataType: "json",

            success: function(resultado){
                $("#logradouro").val(resultado.logradouro);
                $("#bairro").val(resultado.bairro);
                $("#localidade").val(resultado.localidade);
                $("#uf").val(resultado.uf);
                $('.alertS').fadeIn(1000);
                $('.alertS').fadeOut(3000);
            },
            error: function(){
                $("#logradouro").val("");
                $("#bairro").val("");
                $("#localidade").val("");
                $("#uf").val("");
                $('.alert').fadeIn(1000);
                $('.alert').fadeOut(3000);
            },
        });
    });
});


