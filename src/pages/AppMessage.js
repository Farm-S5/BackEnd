import '../App.css';
import {Validate} from "../components/Valid";
import {HeaderElement} from "../components/Header";

export function AppMessage() {
    return(
        <div className="App">
            <HeaderElement />
            <Validate />
        </div>
    );
}

export default AppMessage;