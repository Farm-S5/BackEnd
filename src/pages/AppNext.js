import './App.css';
import {EditElement} from "../components/Edit";
import {HeaderElement} from "../components/Header";

function AppNext() {
    return(
        <div className="App">
            <HeaderElement />
            <EditElement />
        </div>
    );
}

export default AppNext;