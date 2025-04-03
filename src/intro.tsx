function Intro({Cindy, Tran}: {
    Cindy: string,
    Tran: string
}) {

    return (
        <div>
            <p> Hi, my name is Xin Yu but my preferred name is {Cindy}. I'm a sophomore at WPI and majoring in CS.
        I'm from Queens, New York and I have a younger brother and a pool table. </p>

            <p>Hiiiii, my name is {Tran} and I am a sophomore studying Comp Sci.
            I love reading, watching shows, and listening to new music. My favorite animal is
            the jellyfish because I love how cute they look! I want to get a math minor because
            I think that would be fun, and one of my life goals is to own a pigeon</p>
        </div>
    );
}
export default Intro;