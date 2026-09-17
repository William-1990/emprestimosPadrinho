
function simular() {

    const campoValor = document.getElementById("valor");
    const campoPrazo = document.getElementById("prazo");
    const resultado = document.getElementById("resultado");
    const valorFinal = document.getElementById("valorFinal");

    if (!campoValor || !campoPrazo || !resultado || !valorFinal) {
        return;
    }

    const valor = Number(campoValor.value);
    const prazo = Number(campoPrazo.value);

    if (!valor || valor <= 0) {

        alert("Digite um valor válido para realizar a simulação.");

        campoValor.focus();

        return;
    }


    /*
        IMPORTANTE:
        Esta taxa é apenas demonstrativa.

        O cliente deve informar a taxa real,
        as condições e a forma de cálculo
        antes de colocar o site em produção.
    */

    const taxaMensal = 0.05;

    let juros;

    if (prazo === 30) {
        juros = taxaMensal;
    }

    else if (prazo === 60) {
        juros = taxaMensal * 2;
    }

    else if (prazo === 90) {
        juros = taxaMensal * 3;
    }

    else {
        juros = taxaMensal;
    }


    const valorComJuros = valor + (valor * juros);


    valorFinal.textContent = valorComJuros.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );


    resultado.style.display = "block";


    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================================
   FORMULÁRIO DE SOLICITAÇÃO
========================================= */

const formulario = document.querySelector(".loan-form");


if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome = formulario.querySelector(
            'input[type="text"]'
        );


        /*
            Como ainda não existe um backend,
            não enviamos documentos nem dados
            para nenhum servidor.
        */

        alert(
            "Solicitação preenchida com sucesso!\n\n" +
            "Esta é uma demonstração do formulário. " +
            "Para receber os dados de verdade, será necessário " +
            "conectar o site a um sistema seguro de backend."
        );


        formulario.reset();

    });

}


/* =========================================
   EFEITO NOS UPLOADS
========================================= */

const uploadInputs = document.querySelectorAll(
    ".upload-box input[type='file']"
);


uploadInputs.forEach(function (input) {

    input.addEventListener("change", function () {

        const box = input.closest(".upload-box");

        if (!box) {
            return;
        }


        const nomeArquivo = input.files.length > 0
            ? input.files[0].name
            : "";


        const texto = box.querySelector("small");


        if (texto && nomeArquivo) {

            texto.textContent = nomeArquivo;

            box.style.borderColor = "#087443";

        }

    });

});


/* =========================================
   MÁSCARA DE CPF
========================================= */

const cpfInput = document.querySelector(
    'input[placeholder="000.000.000-00"]'
);


if (cpfInput) {

    cpfInput.addEventListener("input", function () {

        let valor = cpfInput.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);


        if (valor.length > 9) {

            valor = valor.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                "$1.$2.$3-$4"
            );

        }

        else if (valor.length > 6) {

            valor = valor.replace(
                /(\d{3})(\d{3})(\d{1,3})/,
                "$1.$2.$3"
            );

        }

        else if (valor.length > 3) {

            valor = valor.replace(
                /(\d{3})(\d{1,3})/,
                "$1.$2"
            );

        }


        cpfInput.value = valor;

    });

}


/* =========================================
   MÁSCARA DE TELEFONE
========================================= */

const telefones = document.querySelectorAll(
    'input[type="tel"]'
);


telefones.forEach(function (input) {

    input.addEventListener("input", function () {

        let valor = input.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);


        if (valor.length > 10) {

            valor = valor.replace(
                /(\d{2})(\d{5})(\d{4})/,
                "($1) $2-$3"
            );

        }

        else if (valor.length > 6) {

            valor = valor.replace(
                /(\d{2})(\d{4})(\d{1,4})/,
                "($1) $2-$3"
            );

        }

        else if (valor.length > 2) {

            valor = valor.replace(
                /(\d{2})(\d{1,5})/,
                "($1) $2"
            );

        }


        input.value = valor;

    });

});


/* =========================================
   ANIMAÇÃO DOS CARDS
========================================= */

const cards = document.querySelectorAll(
    ".step, .info-card, .contact-card"
);


cards.forEach(function (card, index) {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";


    setTimeout(function () {

        card.style.transition = "0.5s ease";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, 100 + (index * 100));

});

