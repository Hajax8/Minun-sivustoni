import abbstractView from "./abbstractView.js";

export default class extends abbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Hannun Sivut');
    }

    async getHtml() {
        return ` <div id="top_header">
        <header>
            <h1><a href="/">Hannun sivusto</a></h1>
        </header>
    </div>

    <div class="container" id="kuvat">
        <div class="image_container">
            <div class="image" onclick="popupImage()"><img src="static/kuvat/img1.png" alt="1"></div>
            <div class="image" onclick="popupImage()"><img src="static/kuvat/img2.png" alt="2"></div>
            <div class="image" onclick="popupImage()"><img src="static/kuvat/img3.png" alt="3"></div>
            <div class="image" onclick="popupImage()"><img src="static/kuvat/img4.png" alt="4"></div>
            <div class="image" onclick="popupImage()"><img src="static/kuvat/img5.png" alt="5"></div>
            <div class="image" onclick="popupImage()"><img src="static/kuvat/img6.png" alt="6"></div>
        </div>

        <div class="popup_image">
            <span id="img_span" onclick="exitPopup()">&times</span>
            <div class="image"><img src="kuva/img1.png" alt=""></div>
            <div class="overlay"></div>
        </div>
        <footer id="the_footer">
            theHannuProject™ 2023
        </footer>
    </div>
                `;
    }
}