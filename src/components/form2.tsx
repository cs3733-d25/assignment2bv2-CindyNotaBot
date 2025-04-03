import '../App.css'
function Form2(){
    return(
        <div className="form2_container">
            <form>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" />
                </div>

                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" />
                </div>

                <div>
                    <label>Choose your favorite:</label>

                    <input type="checkbox" name="title" value="Sui Ishida" id="sui" />
                    <label htmlFor="sui"> Sui Ishida</label>

                    <input type="checkbox" name="title" value="Wlop" id="wlop" />
                    <label htmlFor="wlop"> WLOP</label>

                    <input type="checkbox" name="title" value="John Everett Millais" id="john" />
                    <label htmlFor="john"> John M.</label>
                </div>

                <div>
                    <label> Question: Which country is John M. from? </label>

                    <input type="radio" name="country" value="Japan" id="japan" />
                    <label htmlFor="japan"> Japan</label>

                    <input type="radio" name="country" value="Britain" id="britain" />
                    <label htmlFor="britain"> Britain</label>

                    <input type="radio" name="country" value="Australia" id="australia" />
                    <label htmlFor="australia"> Australia</label>
                </div>

                <div>
                    <label htmlFor="desc">Describe your favorite artist:</label>
                    <textarea id="desc" rows={4} cols={50}></textarea>
                </div>

                <div>
                    <label htmlFor="color">Choose favorite color:</label>
                    <select name="color" id="color">
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>

                <input type="submit" value="Submit" />

            </form>
            </div>
    );
}
export default Form2;