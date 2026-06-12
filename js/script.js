function entrarSite() {
    const confirmacao = document.getElementById("confirmacao");

    if (confirmacao.checked) {
        window.location.href = "pages/intro.html";
    } else {
        alert("Você precisa confirmar que tem 16 anos ou mais.");
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const botao = document.querySelector('.menu-toggle');
    const menu = document.querySelector('#menu');

    if (botao && menu) {
        botao.addEventListener('click', () => {
            menu.classList.toggle('ativo');
        });
    }

});

$(document).ready(function () {
    $("#banners ul").bxSlider({
        auto: true,
        speed: 1000,
        // mode: 'fade'
        // pager: false
        // mode: 'vertical'
    });

    $('#boss-page').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeOnBgClick: true,
        showCloseBtn: true,
        closeBtnInside: false,

        mainClass: 'mfp-with-zoom mfp-img-mobile',

        image: {
            verticalFit: true
        },

        gallery: {
            enabled: false
        },

        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });
    $('#galeria-conteudo').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: 'title'
        },

        gallery: {
            enabled: true,
            tCounter: '%curr% de %total%'
        },

        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    $('#personagens').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: 'title'
        },

        gallery: {
            enabled: true,
            tCounter: '%curr% de %total%'
        },

        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });


});
