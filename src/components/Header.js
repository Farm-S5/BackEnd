import React from 'react';
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";

import "./head.css";

export function HeaderElement() {
    return(
        <nav className="nav">
            <a href="Header" className="brand">Farm city</a>
            <ul className="nav_menu">
                <li className="nav_item"><a href="#" className="nav_link"><IoIosNotifications className={"iconN"} />Notification</a></li>
                <li className="nav_item"><IoLogOutSharp className={"iconL"} /></li>
            </ul>
        </nav>
    );
}

export default HeaderElement;