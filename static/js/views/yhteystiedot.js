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
            <h1><a href="/">Hannun sivusto</a></h1>
        </header>
    </div>
    <div id="yhteystiedot">
        <h1>Yhteystiedot</h1>
        <h2>Hannu, sivuston tekijä</h2>
        <ul>
            <li>puh. 044 7484597</li>
            <li>säpo. t2luha@students.oamk.fi</li>
            <li>osoite : Oulu 90500 Huonotsivutkatu 4 B23</li>
        </ul>

        <br>

        <h2>Maikki, kissa</h2>
        <ul>
            <li>puh. 050 2861445</li>
            <li>osoite : Oulu 90500 Huonotsivutkatu 4 B23</li>
        </ul>

        <br>

        <h2>Milo, kissa</h2>
        <ul>
            säpo. miukumauku@miukumauku.com
            <li>osoite : Oulu 90500 Huonotsivutkatu 4 B23</li>
        </ul>
    </div>
    <footer id="the_footer">
        theHannuProject™ 2023
    </footer>
    `;
    }
}