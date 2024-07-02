$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    // Método personalizado para validar se o nome contém apenas letras
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-ZÀ-ÿ\s]+$/.test(value);
    }, "Por favor, insira apenas letras.");

    // Regras de validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3,
                maxlength: 100,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo.",
                minlength: "Seu nome deve ter pelo menos 3 caracteres.",
                maxlength: "Seu nome não pode exceder 100 caracteres.",
                lettersonly: "Por favor, insira apenas letras."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone."
            },
            endereco: {
                required: "Por favor, insira seu endereço completo."
            },
            cep: {
                required: "Por favor, insira seu CEP."
            },
            cpf: {
                required: "Por favor, insira seu CPF."
            }
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(event, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });
});
