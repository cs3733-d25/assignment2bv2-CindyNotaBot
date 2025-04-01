import './App.css'

export function Tran2b() {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li id="icon">♡⊹˚₊ My Hobbies ₊˚⊹♡</li>
                        <li><a target="_blank"
                               href="https://www.google.com/search?q=love+is+blind&oq=love+is+blind&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDsyBggDEEUYOzIGCAQQRRhB0gEIMjI0NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8">Watch <i>Love
                            is Blind</i></a></li>
                        <li><a target="_blank" href="https://archiveofourown.org/">Read AO3</a></li>
                        <li><a target="_blank" href="https://open.spotify.com/artist/2EXpthNgSeTDeX8nGwxppp?">Listen
                            to <b>Paris Paloma</b></a></li>
                    </ul>
                </nav>
            </div>

            <div id="banner">
                <h1 id="nameinbanner">
                    Phuong Tran
                </h1>
                <img id="smallimg" src="public/1b_img2.jpg" alt="Pinterest img of book"/>
            </div>
            <div id="content">
                <h2>About Me</h2>
                <p>
                    Hiiiii, my name is Phuong Tran and I am a sophomore studying Comp Sci.
                    I love reading, watching shows, and listening to new music. My favorite animal is
                    the jellyfish because I love how cute they look! I want to get a math minor because
                    I think that would be fun, and one of my life goals is to own a pigeon.
                </p>

                <h2>About My Hobbies</h2>
                <p>I super love to read! Mainly romance, but I do like fantasy,
                    sci-fi, or just fiction in general. I also enjoy reading about
                    feminism and currently I'm reading <i>The Beauty Myth</i> by
                    Naomi Wolf. It's a super cool book! Outside of that, I like to watch
                    reality TV shows, like <i>Love is Blind</i>, especially for the
                    drama it creates. One of my favorite artists is Paris
                    Paloma, but I'm into pretty much any genre of music!</p>

                <h2 className="favArtistStyle">5 Favorite Artists</h2>
                <ul className="roundbullets">
                    <li className="color1"> Paris Paloma</li>
                    <li className="color2"> Sofia Isella</li>
                    <li className="color1"> Horizer</li>
                    <li className="color2"> Arctic Monkeys</li>
                    <li className="color1"> Yaelokre</li>
                </ul>

                <h2>TV Show Ratings</h2>
                <table className="collapse">
                    <caption className="tableStyle">Rating Reality TV</caption>
                    <tr className="tableTrStyle">
                        <th className="borderright">Title</th>
                        <th className="borderright">Rate (out of 5)</th>
                        <th>Comments
                            </th>
                    </tr>

                    <tr>
                        <td>Love is Blind (America)</td>
                        <td>&#9733 &#9733 &#9733 &#9733 &#9733</td>
                        <td>Lots of drama... fitting to be reality TV</td>
                    </tr>

                    <tr>
                        <td>Single's Inferno</td>
                        <td>&#9733 &#9733 &#9733 &#9733</td>
                        <td>Very sweet, but not as messy as I'd like my reality TV to be</td>
                    </tr>

                    <tr>
                        <td>Real Housewives of Salt Lake City</td>
                        <td>&#9733 &#9733 &#9733 &#9733 &#9733</td>
                        <td>They LOVE making drama something out of nothing</td>
                    </tr>

                    <tr>
                        <td>Couple's Therapy</td>
                        <td>&#9733 &#9733 &#9733</td>
                        <td>Fascinating, but kind of painful to watch...</td>
                    </tr>
                </table>
                <br />
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

            </div>
        </>
    );
}