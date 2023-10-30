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
            <h1>Tervetuloa HannunSivuille</h1>
        </header>
    </div>
    <div class="large_content">
        <h1 ID="otsikko">Uutisia</h1>
        <section id="main_section">
            <article class="uutiset">
                <header>
                    <h2>Sivuston tekijän ilmoitus</h2>
                </header>
                <p>Minulla on kolme kissaa, joiden nimet ovat Maikki ja Milo</p>
            </article>
            <article class="uutiset">
                <header>
                    <h2>Käyttäjätilastot sivua kutsuttu huijaukseksi?</h2>
                </header>
                <p>Useat uutislähteet ovat kutsuneet sivustoni käyttäjätilastot sivua huijaukseksi, mikä tietenkin
                    pitää paikkansa. Älkää siis antako sinne mitään tietoja. Vaikka antaisitte, niin ei ne minnekään
                    tallennu.</p>
            </article>
        </section>
    </div>
    <div id="rightside_panel">
        <div class="tietoja">
            <h1 id="tietoja_header">Tietoja minusta</h1>
        </div>
        <div class="tietoja">
            <h2>Harrastuksiani ovat</h2>
            <ul>
                <li>Jalkapallo</li>
                <li>Kissojen nimeäminen</li>
                <li>Kermakakku</li>
                <li>Taide</li>
                <li>Kissat</li>
                <li>Koirat</li>
                <li> Ja muuta</li>
            </ul>
        </div>
    </div>
    <footer id="the_footer">
        theHannuProject™ 2023
    </footer> `;
    }
}