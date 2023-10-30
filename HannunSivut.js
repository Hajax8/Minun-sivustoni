document.addEventListener("DOMContentLoaded", function () {
    var x = 0;
    document.getElementById('darkmode_toggle').addEventListener('change', function () {
        var body = document.body;
        var topMenu = document.getElementById('top_menu');
        var topHeader = document.getElementById('top_header');
        var tietojaHeader = document.getElementById('tietoja_header');
        var rightPanel = document.getElementById('rightside_panel');
        var theFooter = document.getElementById('the_footer');
        var yhteystiedot = document.getElementById('yhteystiedot');
        var visaOtsikko = document.getElementById('visa_otsikko');
        var tilastot = document.getElementById('rand');
        var galleria = document.getElementById('kuvat');
        var visaFrom = document.getElementById('visa_form');

        if (yhteystiedot != null && this.checked) {
            x = 1;
            topHeader.id = 'darkmode_top_header';
            body.id = 'darkmode_body';
            topMenu.id = 'darkmode_top_menu';
            theFooter.id = 'darkmode_footer';
            yhteystiedot.id = 'darkmode_yhteystiedot';
        } else if (x == 1) {
            x = 0;
            document.getElementById('darkmode_top_header').id = 'top_header';
            document.getElementById('darkmode_body').id = '';
            document.getElementById('darkmode_top_menu').id = 'top_menu';
            document.getElementById('darkmode_footer').id = 'the_footer';
            document.getElementById('darkmode_yhteystiedot').id = 'yhteystiedot';
        }

        if (visaOtsikko != null && this.checked) {
            x = 2;
            topHeader.id = 'darkmode_top_header';
            body.id = 'darkmode_body';
            topMenu.id = 'darkmode_top_menu';
            theFooter.id = 'darkmode_footer';
            visaOtsikko.id = 'darkmode_visa_otsikko';
            visaFrom.id = 'darkmode_visa_form'

        } else if (x == 2) {
            x = 0;
            document.getElementById('darkmode_visa_form').id = 'visa_form'
            document.getElementById('darkmode_top_header').id = 'top_header';
            document.getElementById('darkmode_body').id = '';
            document.getElementById('darkmode_top_menu').id = 'top_menu';
            document.getElementById('darkmode_footer').id = 'the_footer';
            document.getElementById('darkmode_visa_otsikko').id = 'visa_otsikko';
        }

        if (tietojaHeader != null && this.checked) {
            x = 3;
            topHeader.id = 'darkmode_top_header';
            body.id = 'darkmode_body';
            topMenu.id = 'darkmode_top_menu';
            tietojaHeader.id = 'darkmode_tietoja_header';
            rightPanel.id = 'darkmode_rightside_panel';
            theFooter.id = 'darkmode_footer';
        } else if (x == 3) {
            X = 0;
            document.getElementById('darkmode_top_header').id = 'top_header';
            document.getElementById('darkmode_body').id = '';
            document.getElementById('darkmode_top_menu').id = 'top_menu';
            document.getElementById('darkmode_footer').id = 'the_footer';
            document.getElementById('darkmode_tietoja_header').id = 'tietoja_header';
            document.getElementById('darkmode_rightside_panel').id = 'rightside_panel';
        }

        if (tilastot != null && this.checked) {
            x = 4;
            topHeader.id = 'darkmode_top_header';
            body.id = 'darkmode_body';
            topMenu.id = 'darkmode_top_menu';
            theFooter.id = 'darkmode_footer';
            tilastot.id = 'darkmode_rand';
        } else if (x == 4) {
            x = 0;
            document.getElementById('darkmode_top_header').id = 'top_header';
            document.getElementById('darkmode_body').id = '';
            document.getElementById('darkmode_top_menu').id = 'top_menu';
            document.getElementById('darkmode_footer').id = 'the_footer';
            document.getElementById('darkmode_rand').id = 'rand';
        }
        if (galleria != null && this.checked) {
            x = 5;
            topHeader.id = 'darkmode_top_header';
            body.id = 'darkmode_body';
            topMenu.id = 'darkmode_top_menu';
            theFooter.id = 'darkmode_footer';
        } else if (x == 5) {
            X = 0;
            document.getElementById('darkmode_top_header').id = 'top_header';
            document.getElementById('darkmode_body').id = '';
            document.getElementById('darkmode_top_menu').id = 'top_menu';
            document.getElementById('darkmode_footer').id = 'the_footer';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {

    var keywordInput = document.querySelector("input[name='search']");
    var markInstance = new Mark(document.querySelector('body'));
    function performMark() {
        var keyword = keywordInput.value;

        markInstance.unmark({
            done: function () {
                markInstance.mark(keyword);
            }
        });
    };
    keywordInput.addEventListener("input", performMark);
});


    document.addEventListener("DOMContentLoaded", function () {

        document.querySelectorAll('.image_container img').forEach(image => {
            image.onclick = () => {
                document.querySelector('.popup_image').style.display = 'block';
                document.querySelector('.popup_image img').src = image.getAttribute('src');
            };
        });

        document.querySelector(".popup_image span").onclick = () => {
            document.querySelector(".popup_image").style.display = "none";
        };
        var overlay = document.querySelector(".popup_image")
        overlay.addEventListener("click", function () {
            document.querySelector(".popup_image").style.display = "none";
        });
        
        document.addEventListener("DOMContentLoaded", function () {
            var form = document.getElementById('tilastot_form');
            
            form.addEventListener("submit", function (event) {
            var korttikenttä = document.getElementById('numero');

            if (korttikenttä.value.length != 12) {
                alert("ei kunnollinen pankkikortin numero");
                event.preventDefault();
            }
        })
    })
    });