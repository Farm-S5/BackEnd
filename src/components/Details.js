import React from 'react';
import "./Details.css";


export function DetailsForm() {
    return(
        <div className="container-details">
            <h1 className="title-details">Détails terrain</h1>
            <div className="wrapper-details">
                    <table className="table-details">
                        <thead className="head-details">
                            <tr>
                                <th>Longitude</th>
                                <th>Latitude</th>
                                <th>Nombre de parcelle</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody className="body-details">
                        <tr className="subtitle-details">
                            <td>1</td>
                            <td>2</td>
                            <td>2</td>
                            <td>Loïck koa masiaka</td>
                        </tr>
                        </tbody>
                    </table>
            </div>


            {/* insérer parcelle */}
        <div className="insert-container">    
            <h1 className="titre">Insertion de parcelle</h1>
            <div className="input-details">       
                <input
                    type="text"
                    placeholder="Nom"
                    // onChange={(e) => setCulture(e.target.value)}
                    // required
                />
            </div>
            <div className="input-details">       
                <input
                    type="number"
                    placeholder="Rendement"
                    // onChange={(e) => setRendement(e.target.value)}
                    // required
                />
            </div>
            <div className="input-details">       
                <input
                    type="number"
                    placeholder="Tsy aiko"
                    // onChange={(e) => setPrix(e.target.value)}
                    // required
                />
            </div>
            <div className="input-details">       
                <input
                    type="text"
                    placeholder="Tsy tadidiko"
                    // onChange={(e) => setDuration(e.target.value)}
                    // required
                />
            </div>
            <button className="btn-details">Ajouter</button>
        </div>
        </div>
    );
}

export default DetailsForm;