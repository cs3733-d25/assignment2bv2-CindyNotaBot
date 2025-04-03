import ArtImg from '/public/wlop-comp.jpg';
import List2 from './list2.tsx';
import Table2 from "./table2.tsx";
import Form2 from './form2.tsx';

function Hobby2(){
    return(
        <div className="hobby_container">
        <div className= "artimage">
            <img src={ArtImg} alt="Art" />
        </div>

        <List2/>

            <Table2 />

            <Form2 />


    </div>
    );
}
export default Hobby2;