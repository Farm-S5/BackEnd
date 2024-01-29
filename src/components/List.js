import React from 'react';
import './list.css';
import { IoIosCreate } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export function ListElement() {
    return (
        <div className="wrapper">  
                <table className="table">
                <thead className="head">
                    <tr>
                        <th colspan="2">Catégorie de culture</th>
                        <th colspan="3">Parcelle</th>
                        <th colspan="2">Terrain</th>
                        <th colspan="2">Gérer</th>
                    </tr>
                </thead>
                <tbody className="body">
                    <tr className="subtitle">
                        <td>Nom</td>
                        <td>Prix</td>
                        <td>Rendement</td>
                        <td>Taille</td>
                        <td>Type de culture</td>
                        <td>Nombre de parcelle</td>
                        <td>Géolocalisation</td>
                        <td>Modifier</td>
                        <td>Supprimer</td>
                    </tr>
                    <tr className="content">
                        <td>Mihoby</td>
                        <td>10000</td>
                        <td>2000</td>
                        <td>20cm</td>
                        <td>Maïs</td>
                        <td>2</td>
                        <td>tsy aiko</td>
                        <td><a href="#"><IoIosCreate className="iconM" /></a></td>
                        <td><MdDeleteForever className="iconD" /></td>
                    </tr>
                    
                    
                </tbody>
                </table>

            
        </div>
    );
}