import React from "react";
import "../css/Datastyle.css";

function Data({data}) {
    const getHealthLabels = () => {
        if (data.healthLabels.length == 0) {
            return <p className="card-text">"None"</p>;
        } else {
            let str = "";
            data.healthLabels.map( (val) => str += (val + ", "))
            return <p className="card-text">{str}</p>;
        }
    }
    const getCautions = () => {
        if (data.cautions.length == 0) {
            return <p className="card-text">None</p>;
        }
        else {
            let str = "";
            data.cautions.map( (val) => str += (val + ", "))
            return <p className="card-text">{str}</p>;
        }
    }
    const getParsed = () => {
        if (data.ingredients[0].parsed[0]) {
            var dataobj = data.ingredients[0].parsed[0];
            return (
                <div className="card-text">
                    <text>Quantity</text>: {dataobj.quantity}<br />
                    <text>Measure</text>: {dataobj.measure}<br />
                    <text>Food Match</text>: {dataobj.foodMatch}<br />
                    <text>Food</text>: {dataobj.food}<br />
                </div>
            );
        } else {
            return <p className="card-text">None</p>;
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
    return(
        <div className="card">
          <div className="card-header">
            {data.ingredients ? data.ingredients[0].text : "loading..."}
          </div>
          <div className="card-body">
            <h3 className="card-title">Information</h3>
            {data.ingredients ? getParsed() : "loading..."}
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
export default Data;
