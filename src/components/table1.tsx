import '../assets/css/App.css'
export function Table1() {
    return(
        <>
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
        </>
    );
}