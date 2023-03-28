import React from "react";

export default function DetailsCard ({data}) {
    const getHealthLabels = () => {
        if (data.healthLabels.length === 0) {
            return <p className="card-text">"None"</p>;
        } else {
            let str = "";
            data.healthLabels.map( (val) => str += (val + ", "));
            return <p className="card-text">{str}</p>;
        }
    }
    const getCautions = () => {
        if (data.cautions.length === 0) {
            return <p className="card-text">None</p>;
        }
        else {
            let str = "";
            data.cautions.map( (val) => str += (val + ", "));
            return <p className="card-text">{str}</p>;
        }
    }
    const getObject = (parameter) => {
        var dataobj;
        if (parameter === "daily")
            dataobj = data.totalDaily;
        else if (parameter === "nutrients")
            dataobj = data.totalNutrients;
        else if (parameter === "nutrientsKcal")
            dataobj = data.totalNutrientsKCal;

        return Object.keys(dataobj).map( (obj, i) => {
            return(
                <p className="card-text">
                    <text>{dataobj[obj].label}</text>: {dataobj[obj].quantity}{dataobj[obj].unit}
                </p>
            );
        });
    }
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