import {Title} from "./components/title.tsx";
import {Hobby1} from "./components/hobby1.tsx";
import {Intro} from "./components/intro.tsx";

export function App() {
    return(
        <>
            <Title />
            <Intro cindyName="Cindy" tranName="Tran" />
            <Hobby1 />
        </>
    );
}