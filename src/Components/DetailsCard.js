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
        <div className="card mb-4">
            <div className="card-header">
                <p className="m-0 p-0">{data.text ? data.text : "loading..."}</p>
            </div>
            <div className="card-body text-left">
                <h3 className="card-title">Calories: {data.calories}</h3>
            </div>
            <div className="card-body text-left">
                <h3 className="card-title">Total nutrients Kcal</h3>
                <p className="m-0 p-0">{data.totalNutrientsKCal ? getObject("nutrientsKcal") : "loading..."}</p>
            </div>
            <div className="card-body text-left">
                <h3 className="card-title">Health Labels</h3>
                <p className="m-0 p-0">{data.healthLabels ? getHealthLabels() : "loading..."}</p>
            </div>
            <div className="card-body text-left">
                <h3 className="card-title">Cautions</h3>
                <p className="m-0 p-0">{data.cautions ? getCautions() : "loading..."}</p>
            </div>
            <div className="card-body text-left">
                <h3 className="card-title">Total Nutrients</h3>
                <p className="m-0 p-0">{data.totalNutrients ? getObject("nutrients") : "loading..."}</p>
            </div>
            <div className="card-body text-left">
                <h3 className="card-title">Total Daily</h3>
                <p className="m-0 p-0">{data.totalNutrients ? getObject("daily") : "loading..."}</p>
            </div>
        </div>
    );
}