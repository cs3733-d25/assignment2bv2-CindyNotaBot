import '../assets/css/App.css'
export function Form1() {
    return(
        <>
            <div id="formdiv">
                <h2>Give Me Your Opinions</h2>
                <label htmlFor="fullname">Enter your name: </label>
                <input type="text" id="fullname"/>

                <br/> <br/>
                <label htmlFor="major">Enter your major: </label>
                <input type="text" id="major"/>

                <h3>Do you like these artists?</h3>
                <input type="checkbox" id="paris"/>
                <label htmlFor="paris">Paris Paloma</label>
                <br/>
                <input type="checkbox" id="sofia"/>
                <label htmlFor="sofia">Sofia Isella</label>
                <br/>
                <input type="checkbox" id="horizer"/>
                <label htmlFor="horizer">Horizer</label>
                <br/>
                <input type="checkbox" id="ac"/>
                <label htmlFor="ac">Arctic Monkeys</label>
                <br/>
                <input type="checkbox" id="ya"/>
                <label htmlFor="ya">Yaelokre</label>

                <h3>Favorite reality TV?</h3>
                <input type="radio" id="lib" name="radiobtn"/>
                <label htmlFor="lib">Love is Blind</label>
                <br/>
                <input type="radio" id="si" name="radiobtn"/>
                <label htmlFor="si">Single's Inferno</label>
                <br/>
                <input type="radio" id="slc" name="radiobtn"/>
                <label htmlFor="slc">Real Housewives of Salt Lake City</label>
                <br/>
                <input type="radio" id="ct" name="radiobtn"/>
                <label htmlFor="ct">Couple's Therapy</label>
                <br/>

                <h3>Best color?</h3>
                <label htmlFor="colors">Pick the best color from this list: </label>

                <select name="colors" id="colors">
                    <option value="valuetohide">Pick a color</option>

                    <option value="pink" className="pink">Pink</option>
                    <option value="blue" className="blue">Blue</option>
                    <option value="green" className="green">Green</option>
                    <option value="purple" className="purple">Purple</option>
                </select>

                <br/>
                <h3>Questions, comments, concerns??</h3>
                <label htmlFor="qcc">Anything else?</label>
                <br/>
                <input type="text" className="formText" max-size="50"/>

                <br/> <br/> <br/>
                <input type="submit" value="Submit"/>
            </div>
        </>
    );
}