import '../assets/css/App.css'
import {List1} from './list1.tsx'
import {Table1} from './table1.tsx'
import {Form1} from './form1.tsx'

export function Hobby1() {
    return (
        <>
            <div id="banner">
                <h1 id="nameinbanner">
                    Phuong Tran
                </h1>
                <img id="smallimg" src="src/assets/image/1b_img2.jpg" alt="Pinterest img of book"/>
            </div>
            <div id="content">

                <h2>Tran's hobbies</h2>
                <p>I super love to read! Mainly romance, but I do like fantasy,
                    sci-fi, or just fiction in general. I also enjoy reading about
                    feminism and currently I'm reading <i>The Beauty Myth</i> by
                    Naomi Wolf. It's a super cool book! Outside of that, I like to watch
                    reality TV shows, like <i>Love is Blind</i>, especially for the
                    drama it creates. One of my favorite artists is Paris
                    Paloma, but I'm into pretty much any genre of music!</p>
                <List1 />
                <Table1 />
                <br />
                <Form1 />

            </div>
        </>
    );
}