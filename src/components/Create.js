import React from 'react';
import './create.css';

export function CreateElement() {
    return (
        <div className="crud-container">
            <div className="wrapper">
                <from action="">
                    <h1> Catégorie de cultures</h1>
                    <div className="input-box">       
                        <input
                            type="text"
                            placeholder="Nom"
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Prix"
                            required
                        />
                    </div>
                    <h1> Parcelle</h1>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Rendement"
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Taille"
                            required
                        />
                    </div>
                    <div className="input-box">  
                        <p className="selection"> 
                        <select > 
                            <option value="">
                                Type de culture
                            </option>
                        </select>
                        </p>
                    </div>
                    <h1>Terrain</h1>
                    <div className="input-box">       
                        <input
                            type="number"
                            placeholder="Nombre de parcelle"
                            required
                        />
                    </div>
                    <div className="input-box">       
                        <input
                            type="text"
                            placeholder="Géolocalisation"
                            required
                        />
                    </div>
                    <button type="submit">Ajouter</button>
                </from>
            </div>
        </div>
    );
}

export default CreateElement;
