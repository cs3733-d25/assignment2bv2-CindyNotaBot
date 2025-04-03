function Intro({Cindy, Tran}: {
    Cindy: string,
    Tran: string
}) {

    return (
        <div>
    <p> Hi, my name is Xin Yu but my preferred name is {Cindy}. I'm a sophomore at WPI and majoring in CS.
        I'm from Queens, New York and I have a younger brother and a pool table. </p>

            <p> {Tran}'s paragraph</p>
        </div>
    );
}
export default Intro;