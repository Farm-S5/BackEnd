import React, { useState, useEffect } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function DetailsForm() {
  const { idTerrain } = useParams();
  const [data, setData] = useState(null);
  const [nbParcelle, setNbParcelle] = useState(null);
  const [parcelleData, setParcelleData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backend-production-b756.up.railway.app/terrain/findTerrainById/${idTerrain}`
        );
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          setNbParcelle(responseData.nbParcelle);
          setParcelleData(
            new Array(responseData.nbParcelle).fill({
              rendement: "",
              superficie: "",
            })
          );
        } else {
          console.warn("Server responded with an error:", response.status);
          try {
            const errorResponse = await response.json();
            console.error("Server error details:", errorResponse);
          } catch (error) {
            console.error("Failed to parse server error details:", error);
          }
        }
      } catch (error) {
        console.error("An error occurred during the fetch:", error);
      }
    };

    fetchData();
  }, [idTerrain]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newParcelleData = [...parcelleData];
    newParcelleData[index] = {
      ...newParcelleData[index],
      [name]: value,
    };
    setParcelleData(newParcelleData);
  };
  const handleSubmit = async () => {
    try {
      for (const parcelle of parcelleData) {
        const formattedParcelleData = {
          idTerrain: parseInt(idTerrain),
          rendement: parseFloat(parcelle.rendement),
          superficie: parseFloat(parcelle.superficie),
        };
        console.log(formattedParcelleData);

        const response = await axios.post(
          `https://backend-production-b756.up.railway.app/parcelle/insertParcelle`,
          formattedParcelleData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          navigate("ListePersonne");
          console.log("Parcelle ajoutée avec succès !");
        } else {
          console.error(
            "Erreur lors de l'ajout de la parcelle :",
            response.status
          );
        }
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'envoi de la requête :",
        error
      );
    }
  };

  return (
    <div className="container-details">
      <h1 className="title-details">Détails terrain</h1>
      <div className="wrapper-details">
        <table className="table-details">
          <thead className="head-details">
            <tr>
              <th>Terrain</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Nombre de parcelle</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className="body-details">
            {data ? (
              <tr className="subtitle-details">
                <td>{data.idTerrain}</td>
                <td>{data.longitude}</td>
                <td>{data.latitude}</td>
                <td>{data.nbParcelle}</td>
                <td>{data.descriptionTerrain}</td>
              </tr>
            ) : (
              <tr className="content">
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="insert-container">
        <h1 className="titre">Insertion de(s) parcelle(s)</h1>
        {parcelleData.map((parcelle, index) => (
          <div className="input-details" key={index}>
            <input
              type="text"
              placeholder="Rendement"
              name="rendement"
              value={parcelle.rendement}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="text"
              placeholder="Superficie"
              name="superficie"
              value={parcelle.superficie}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        ))}

        <button className="btn-details" onClick={handleSubmit}>
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default DetailsForm;
