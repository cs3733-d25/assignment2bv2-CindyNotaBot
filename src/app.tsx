
import './App.css'

import {Title} from './components/title.tsx';
import Intro from './intro';
import Hobby2 from "./components/hobby2.tsx";
import {Hobby1} from "./components/hobby1.tsx"


/*
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Title />);

const introduction = ReactDOM.createRoot(document.getElementById('introduction')!);
root.render(<Intro />);
*/

function App() {
    return (
        <div className = "web-container">
            <Title/>
            <Intro Cindy="Cindy" Tran="Tran"/>
            <Hobby1 />
            <Hobby2 />

        </div>

    );
}

export default App
