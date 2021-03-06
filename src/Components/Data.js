import React from "react";
import "../css/Datastyle.css";
import "../css/nutrition-style.css";
import NutritionFacts from "./NutritionFacts";

function Data({data, viewstate}) {
    const getHealthLabels = () => {
        if (data.healthLabels.length == 0) {
            return <p className="card-text">"None"</p>;
        } else {
            let str = "";
            data.healthLabels.map( (val) => str += (val + ", "));
            return <p className="card-text">{str}</p>;
        }
    }
    const getCautions = () => {
        if (data.cautions.length == 0) {
            return <p className="card-text">None</p>;
        }
        else {
            let str = "";
            data.cautions.map( (val) => str += (val + ", "));
            return <p className="card-text">{str}</p>;
        }
    }
    const getObject = (parameter) => {
        if (parameter == "daily")
            var dataobj = data.totalDaily;
        else if (parameter == "nutrients")
            var dataobj = data.totalNutrients;
        else if (parameter == "nutrientsKcal")
            var dataobj = data.totalNutrientsKCal;

        return Object.keys(dataobj).map( (obj, i) => {
            return(
                <p className="card-text">
                    <text>{dataobj[obj].label}</text>: {dataobj[obj].quantity}{dataobj[obj].unit}
                </p>
            );
        });
    }
    //The Main Function
    const Main = () => {
        try {
            if (viewstate) {
                const temp = data.totalNutrients.NA.quantity;
                return (
                    <div className="card">
                      <div className="card-header">
                        {data.text ? data.text : "loading..."}
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Calories: {data.calories}</h3>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Total nutrients Kcal</h3>
                        {data.totalNutrientsKCal ? getObject("nutrientsKcal") : "loading..."}
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Health Labels</h3>
                        {data.healthLabels ? getHealthLabels() : "loading..."}
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Cautions</h3>
                        {data.cautions ? getCautions() : "loading..."}
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Total Nutrients</h3>
                        {data.totalNutrients ? getObject("nutrients") : "loading..."}
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Total Daily</h3>
                        {data.totalNutrients ? getObject("daily") : "loading..."}
                      </div>
                    </div>
                );
            }
            else {
                const temp = data.totalNutrients.NA.quantity;
                return (
                    <NutritionFacts data={data} />
                );
            }
        }
        catch (e) {
            return (
                <div className="card">
                  <div className="card-header">
                    Error
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">An Error Occurred</h3>
                    Sorry I cannot understand what you mean here are couple of things you can try:<br />
                    1. Always add a quantity eg. 1 Apple<br />
                    2. Try to add a unit or measure eg. 1 cup coffee or 1 dozen banana<br />
                  </div>
                </div>
            );
        }
    }
    return(
        <div>
            {Main()}
        </div>
    );
}
export default Data;
