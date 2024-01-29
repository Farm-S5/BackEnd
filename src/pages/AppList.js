import {HeaderElement} from "../components/Header";
import {CreateElement} from "../components/Create";
import {ListElement} from "../components/List";
import {Stat} from "../components/Stat"; 
import '../App.css';

function AppList() {
    return (
      <div className="App">
            <HeaderElement />
            <CreateElement />
            <ListElement />
            <Stat/>
        </div>
  ); 
}

export default AppList;