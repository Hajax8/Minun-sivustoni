import abbstractView from "./abbstractView.js";

export default class extends abbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Hannun Sivut');
    }

    async getHtml() {
        return `
        <div id="top_header">
        <header>
            <h1><a href=/">Hannun sivusto</a></h1>
        </header>
    </div>
    <hgroup id="visa_otsikko">
        <h1 style="margin-bottom: 20px;"> Luulitko tätä uutisivuksi?? Tämä onkin visasivu!</h1>
        <h2 style="margin-bottom: 10px;">Keksin tähän visaan pelkästään huonoja kysymyksiä ja sellaisia joihin on
            hankala vasta. Jos saat kymmenen pistettä saat ehkä jonkin palkinnon. Tällä visalla todistat, että
            tiedät turhista asioista paljon. Tai ei välttämättä turhista, mutta sellaisista asioista joilla ei tee
            mitään, turhista.
        </h2>
    </hgroup>
    <form id="visa_form">
        <div id="kysymys1" class="kysymykset">
            <div style="font: bold 14px Tahoma">
                <h2 style="margin-bottom: 10px;">U-kirjainten määrä tällä sivulla</h2>
                <label>
                    50<input type="radio" name="question1" class="kysymykset1"><br>
                </label>
                <label>
                    40<input type="radio" name="question1" class="kysymykset1"><br>
                </label>
                <label>
                    59<input type="radio" name="question1" class="kysymykset1"><br>
                </label>
                <label>
                    26<input type="radio" name="question1" class="kysymykset1" id="vastaus1"><br>
                </label>
            </div>
        </div>

        <div id="kysymys2" class="kysymykset">
            <div style="font: bold 14px Tahoma">
                <h2 style="margin-bottom: 10px;">Tupakoijien määrä suomessa</h2>
                <label>
                    11-12%<input type="radio" name="question2" class="kysymykset2" id="vastaus2"><br>
                </label>
                <label>
                    9-10%<input type="radio" name="question2" class="kysymykset2"><br>
                </label>
                <label>
                    7-8%<input type="radio" name="question2" class="kysymykset2"><br>
                </label>
                <label>
                    4-5%<input type="radio" name="question2" class="kysymykset2"><br>
                </label>
            </div>
        </div>
        <div id="kysymys3" class="kysymykset">
            <div style="font: bold 14px Tahoma">
                <h2 style="margin-bottom: 10px;">Valkohain hampaiden määrä</h2>
                <label>
                    n. 100<input type="radio" name="question3" class="kysymykset3"><br>
                </label>
                <label>
                    n. 150<input type="radio" name="question3" class="kysymykset3"><br>
                </label>
                <label>
                    n.200<input type="radio" name="question3" class="kysymykset3"><br>
                </label>
                <label>
                    n.300<input type="radio" name="question3" class="kysymykset3" id="vastaus3"><br>
                </label>
            </div>
        </div>
        <div id="kysymys4" class="kysymykset">
            <div style="font: bold 14px Tahoma">
                <h2 style="margin-bottom: 10px;">Välilyöntien määrä tällä sivulla</h2>
                <label>
                    71<input type="radio" name="question4" class="kysymykset4" id="vastaus4"><br>
                </label>
                <label>
                    79<input type="radio" name="question4" class="kysymykset4"><br>
                </label>
                <label>
                    89<input type="radio" name="question4" class="kysymykset4"><br>
                </label>
                <label>
                    50<input type="radio" name="question4" class="kysymykset4"><br>
                </label>
            </div>
        </div>
        <div id="kysymys5" class="kysymykset">
            <div style="font: bold 14px Tahoma">
                <h2 style="margin-bottom: 10px;">Montako kissaa omistan</h2>
                <label>
                    3<input type="radio" name="question5" class="kysymykset5"><br>
                </label>
                <label>
                    2<input type="radio" name="question5" class="kysymykset5"><br>
                </label>
                <label>
                    1<input type="radio" name="question5" class="kysymykset5" id="vastaus5"><br>
                </label>
                <label>
                    4<input type="radio" name="question5" class="kysymykset5"><br>
                </label>
            </div>
        </div>
        <div id="kysymys6" class="kysymykset">
            <div style="font: bold 14px Tahoma">
                <h2 style="margin-bottom: 10px;">Olisitko mieluummin miljonääri vai lusmu koodaaja</h2>
                <label>
                    Koodaaja<input type="radio" name="question6" class="kysymykset6"><br>
                </label>
                <label>
                    Koodaaja<input type="radio" name="question6" class="kysymykset6"><br>
                </label>
                <label>
                    Koodaaja<input type="radio" name="question6" class="kysymykset6" id="vastaus6"><br>
                </label>
                <label>
                    Koodaaja<input type="radio" name="question6" class="kysymykset6"><br>
                </label>
            </div>
        </div>
        <div id="form_nappi">
            <button onclick="alusta()"> Alusta </button>
            <button onclick="visaTulokset()"> Tarkista </button>
        </div>
        <div id="tulokset" style="font: bold 20px Tahoma">

        </div>

        
    </form>
    <footer id="the_footer">
        theHannuProject™ 2023
    </footer>
    `;
    }
}