import abbstractView from "./abbstractView.js";

export default class extends abbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Hannun Sivut');
    }

    async getHtml() {
        return `
        <div id="top_header">
        <header id = rand>
            <h1><a href="/">Hannun sivusto</a></h1>
        </header>
    </div>
    <div class="form_content">
        <h2 id="rand">Tilastotietojen keräystä käyttäjien harrastuksista</h2>
        <form name="tilastot" action="" id="tilastot_form">
            <div>
                <label for="sapo">Sähkoposti: </label>
                <input style="margin: 5px;" type="email" name="sapo" id="sapo" placeholder="esimerkki@mail.com"
                    patter="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required>
            </div>

            <br>

            <div>
                <label for="numero">Pankkikortin numero: </label>
                <input style="margin: 5px;" type="text" name="numero" id="numero" placeholder="0123 4567 8901 2345"
                    required>
            </div>

            <br>

            <div>
                <label for="date">Milloin vanhenee?</label>
                <input type="date" name="date" id="date" placeholder="01.01.2024" required>
            </div>

            <br>
            <fieldset>
                <legend>Ne kolme numeroa siellä takana:</legend>
                <div>
                    <div>
                        <label for="1">1</label>
                        <input type="radio" name="radio_name1" id="1" required>
                        <label for="2">2</label>
                        <input type="radio" name="radio_name1" id="2">
                        <label for="3">3</label>
                        <input type="radio" name="radio_name1" id="3">
                        <label for="4">4</label>
                        <input type="radio" name="radio_name1" id="4">
                        <label for="5">5</label>
                        <input type="radio" name="radio_name1" id="5">
                        <label for="6">6</label>
                        <input type="radio" name="radio_name1" id="6">
                        <label for="7">7</label>
                        <input type="radio" name="radio_name1" id="7">
                        <label for="8">8</label>
                        <input type="radio" name="radio_name1" id="8">
                        <label for="9">9</label>
                        <input type="radio" name="radio_name1" id="9">
                        <label for="0">0</label>
                        <input type="radio" name="radio_name1" id="0">
                        <br>
                        <label for="11">1</label>
                        <input type="radio" name="radio_name2" id="11" required>
                        <label for="21">2</label>
                        <input type="radio" name="radio_name2" id="21">
                        <label for="31">3</label>
                        <input type="radio" name="radio_name2" id="31">
                        <label for="41">4</label>
                        <input type="radio" name="radio_name2" id="41">
                        <label for="51">5</label>
                        <input type="radio" name="radio_name2" id="51">
                        <label for="61">6</label>
                        <input type="radio" name="radio_name2" id="61">
                        <label for="71">7</label>
                        <input type="radio" name="radio_name2" id="71">
                        <label for="81">8</label>
                        <input type="radio" name="radio_name2" id="81">
                        <label for="91">9</label>
                        <input type="radio" name="radio_name2" id="91">
                        <label for="01">0</label>
                        <input type="radio" name="radio_name2" id="01">
                        <br>
                        <label for="12">1</label>
                        <input type="radio" name="radio_name3" id="12" required>
                        <label for="22">2</label>
                        <input type="radio" name="radio_name3" id="22">
                        <label for="32">3</label>
                        <input type="radio" name="radio_name3" id="32">
                        <label for="42">4</label>
                        <input type="radio" name="radio_name3" id="42">
                        <label for="52">5</label>
                        <input type="radio" name="radio_name3" id="52">
                        <label for="62">6</label>
                        <input type="radio" name="radio_name3" id="62">
                        <label for="72">7</label>
                        <input type="radio" name="radio_name3" id="72">
                        <label for="82">8</label>
                        <input type="radio" name="radio_name3" id="82">
                        <label for="92">9</label>
                        <input type="radio" name="radio_name3" id="92">
                        <label for="02">0</label>
                        <input type="radio" name="radio_name3" id="02">
                    </div>

                </div>
            </fieldset>

            <br>

            <div>
                <label for="raha">Paljonko rahaa tililläsi on suunnilleen?</label>
                <select name="raha" id="raha">
                    <option value="vähän">ei tarpeeksi</option>
                    <option value="1000">1000+</option>
                    <option value="3000">3000+</option>
                    <option value="7000">7000+</option>
                    <option value="10000+">10000+</option>
                    <option value="15000">15000+</option>
                    <option value="liikaa">liikaa</option>
                </select>
            </div>

            <br>

            <div>
                <input type="reset" class="napit">


                <input type="submit" class="napit" onclick="pankkikorttiTarkistus();">
            </div>

        </form>
    </div>
    <footer id="the_footer">
        theHannuProject™ 2023
    </footer>
`;
    }
}