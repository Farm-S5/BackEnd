import React, { useState,useEffect } from 'react';
import './list.css';
import { IoIosCreate } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export function ListElement() {

    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);  
    const userId = localStorage.getItem("id");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://backend-production-b756.up.railway.app/viewterrainpersonne/findTerrainPersonneNonValider/${userId}`);
                
                if (response.ok) {
                    const responseData = await response.json();
                    setData(responseData);
                } else {
                    console.warn('Server responded with an error:', response.status);
                    try {
                        const errorResponse = await response.json();
                        console.error('Server error details:', errorResponse);
                    } catch (error) {
                        console.error('Failed to parse server error details:', error);
                    }
                }
            } catch (error) {
                console.error('An error occurred during the fetch:', error);
            }
        };

        fetchData();
    }, [userId]);


    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const response1 = await fetch(`https://backend-production-b756.up.railway.app/viewterrainpersonne/findTerrainPersonneValider/${userId}`);
                
                if (response1.ok) {
                    const responseData1 = await response1.json();
                    setData1(responseData1);
                } else {
                    console.warn('Server responded with an error:', response1.status);
                    try {
                        const errorResponse = await response1.json();
                        console.error('Server error details:', errorResponse);
                    } catch (error) {
                        console.error('Failed to parse server error details:', error);
                    }
                }
            } catch (error) {
                console.error('An error occurred during the fetch:', error);
            }
        };

        fetchData1();
    }, [userId]);

    const validerTerrain = async (idTerrain) => {
        try {
            const response1 = await fetch(`https://backend-production-b756.up.railway.app/terrain/validerTerrain/${idTerrain}`, {
                method: 'POST',
            });
    
            if (response1.ok) {
                alert('Terrain validated successfully. ID: '+idTerrain);
                window.location.reload();
            } else {
                console.warn('Server responded with an error:', response1.status);
                try {
                    const errorResponse = await response1.json();
                    console.error('Server error details:', errorResponse);
                } catch (error) {
                    console.error('Failed to parse server error details:', error);
                }
            }
        } catch (error) {
            console.error('An error occurred during the fetch:', error);
        }
    };
    
    
    const handleLinkClick = (idTerrain) => {
        validerTerrain(idTerrain);
    };

    return (
        <>
        <h1 className="title">Terrain non valider</h1>
        <div className="wrapper">
                <table className="table">
                <thead className="head">
                    <tr>
                        <th colspan="1">ID</th>
                        <th colspan="2">Geolocalisation</th>
                        <th colspan="1">Parcelle</th>
                        <th colspan="1">Description</th>
                    </tr>
                </thead>
                <tbody className="body">
                <tr className="subtitle">
                    <td>Terrain ID</td>
                    <td>Longitude</td>
                    <td>Latitude</td>
                    <td>Nombre Parc</td>
                    <td>Description</td>
                    <td>Valider</td>
                </tr>

                {data ? (
                    data.map(item => (
                        <tr className="content" key={item.idTerrain}>
                            <td>{item.idTerrain}</td>
                            <td>{item.longitude}</td>
                            <td>{item.latitude}</td>
                            <td>{item.nbParcelle}</td>
                            <td>{item.descriptionTerrain}</td>
                            <td><a onClick={() => handleLinkClick (item.idTerrain)}><IoIosCreate className="iconM" /></a></td>
                        </tr>
                    ))
                ) : (
                    <tr className="content">
                        <td colSpan="6">Loading...</td>
                    </tr>
                )}
            </tbody>
                </table>

            
        </div>

        <div className="table2">
        <h1 className="title">Terrain valider</h1>
        <div className="wrapper">
            
                <table className="table">
                <thead className="head">
                    <tr>
                        <th colspan="1">ID</th>
                        <th colspan="2">Geolocalisation</th>
                        <th colspan="1">Parcelle</th>
                        <th colspan="1">Description</th>
                    </tr>
                </thead>
                <tbody className="body">
                <tr className="subtitle">
                    <td>Terrain ID</td>
                    <td>Longitude</td>
                    <td>Latitude</td>
                    <td>Nombre Parc</td>
                    <td>Description</td>
                </tr>

                {data1 ? (
                    data1.map(item1 => (
                        <tr className="content" key={item1.idTerrain}>
                            <td>{item1.idTerrain}</td>
                            <td>{item1.longitude}</td>
                            <td>{item1.latitude}</td>
                            <td>{item1.nbParcelle}</td>
                            <td>{item1.descriptionTerrain}</td>
                        </tr>
                    ))
                ) : (
                    <tr className="content">
                        <td colSpan="6">Loading...</td>
                    </tr>
                )}
            </tbody>
                </table>
        </div>
            
        </div>
        </>
    );
}