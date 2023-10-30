function popupImage() {
    document.querySelectorAll('.image_container img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.popup_image').style.display = 'block';
            document.querySelector('.popup_image img').src = image.getAttribute('src');
        };
    });
}

function exitPopup() {
    document.querySelector(".popup_image").style.display = "none";
};
function exitPopupOverlay() {
    var overlay = document.querySelector(".popup_image")
    document.querySelector(".popup_image").style.display = "none";

}

function visaTulokset() {
    event.preventDefault();
    var oikeatVastaukset = 0;

    for (var i = 1; i <= 6; i++) {
        var radioNimi = document.getElementsByName('question' + i);

        for (var a = 0; a < radioNimi.length; a++) {
            var radioArvot = radioNimi[a];
            if (radioArvot.id == 'vastaus' + i && radioArvot.checked) {
                oikeatVastaukset += 2;
            }
        }
    }
    document.getElementById('tulokset').innerHTML =
        "Sait " + oikeatVastaukset + "/12 oikein";
}

function alusta() {

    event.preventDefault();
    var form = document.getElementById('visa_form');
    form.reset();
    document.getElementById('tulokset').innerHTML = ""
};


function pankkikorttiTarkistus() {

    var korttikenttä = document.getElementById('numero');
    
        if (korttikenttä.value.length != 12) {
            alert("ei kunnollinen pankkikortin numero");
            event.preventDefault();
        } else {
            alert('kiitos tiedosta');
        }
    }

