import React, { useState } from 'react';
import './create.css';

export function CreateElement() {
    const idUser = localStorage.getItem("id");

    const [nameCulture,setCulture]= useState("");
    const [rendementM2,setRendement] = useState("");
    const [prixM2,setPrix] =useState("");
    const [duration,setDuration] = useState("");

    const [longitude,setLongitude] =useState("");
    const [latitude,setLatitude] =useState("");
    const [nbParcelle,setNb] =useState("");
    const [descriptionTerrain,setDescri]=useState("");


    async function addCulture() {
        let item = { nameCulture, rendementM2, prixM2, duration };
        try {
            let response = await fetch("https://backend-production-b756.up.railway.app/culture/insertCulture", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            if (response.ok) {
                alert("Add Culture: " + nameCulture);
            } else {
                console.warn('Server responded with an error:', response.status);
                window.location.reload();
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
    }
    
    async function addTerrain(){
        let item ={longitude,latitude,nbParcelle,descriptionTerrain}
        try {
            let response = await fetch("https://backend-production-b756.up.railway.app/terrain/insertTerrain", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            if (response.ok) {
                const responseData = await response.json();
                const idTerrain = responseData;
                alert("Add terrain ID: " + idTerrain);
                addTerrainPersonne(idTerrain);
                window.location.reload();
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
    }

    async function addTerrainPersonne(idTerrain){
        let item ={idUser,idTerrain}
        try {
            let response = await fetch("https://backend-production-b756.up.railway.app/terrainpersonne/insertTerrainPersonne", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            if (response.ok) {
                console.log("Add Personneterrain ID: " + idTerrain);
                window.location.reload();
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
    }
    return (
        <div className="crud-container">
            <div className="wrapper">
                <from action="">
                    <h1> Catégorie de cultures</h1>
                    <div className="input-box">       
                        <input
                            type="text"
                            placeholder="Nom"
                            onChange={(e) => setCulture(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Rendement en M2"
                            onChange={(e) => setRendement(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Prix en M2"
                            onChange={(e) => setPrix(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="text"
                            placeholder="00:00:00"
                            onChange={(e) => setDuration(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" onClick={addCulture}>Ajouter Culture</button>
                    <h1>Terrain</h1>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Longitude"
                            onChange={(e) => setLongitude(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Latitude"
                            onChange={(e) => setLatitude(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Nombre de parcelle"
                            onChange={(e) => setNb(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="text"
                            placeholder="Description"
                            onChange={(e) => setDescri(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" onClick={addTerrain}>Ajouter un terrain</button>
                </from>
            </div>
        </div>
    );
}

export default CreateElement;
