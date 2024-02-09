import React, { useState, useEffect } from 'react';
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import "./head.css";

export function HeaderElement() {

  const navigate = useNavigate();

    const userId = localStorage.getItem("id");
    const [personne, setPersonne] = useState(null);

    const handleDisconnect = () =>{
      localStorage.clear();
      navigate('/');
  };

    useEffect(() => {
      const fetchPersonne = async () => {
        try {
          const response = await fetch('https://backend-production-b756.up.railway.app/personne/findPersonneById/' + userId);

          if (response.ok) {
            const data = await response.json();
            setPersonne(data);
          } else {
            console.warn('Server responded with an error:', response.status);
          }
        } catch (error) {
          console.error('An error occurred during the fetch:', error);
        }
      };

      fetchPersonne();
    }, []);

    return (
        <nav className="nav">
            <a href="Header" className="brand">Farm city</a>
            {personne && (
                <>
                    <h3 className="nameUser">{personne.nameUser}</h3>
                    <ul className="nav_menu">
                        <li className="nav_item"><a href="#" className="nav_link"><IoIosNotifications className={"iconN"} />Notification</a></li>
                        <li className="nav_item" onClick={handleDisconnect}><IoLogOutSharp className={"iconL"} /></li>
                    </ul>
                </>
            )}
        </nav>
    );
}

export default HeaderElement;
