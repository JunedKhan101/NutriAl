import React from "react";

function Data({data}) {
    const getHealthLabels = () => {
        if (data.healthLabels.length == 0) {
            return "None";
        } else {
            let str = "";
            data.healthLabels.map( (val) => str += (val + ", "))
            return <p>{str}</p>;
        }
    }
    const getParsed = () => {
        if (data.ingredients[0].parsed[0]) {
            var dataobj = data.ingredients[0].parsed[0];
            return (
                <p>
                    Quantity: {dataobj.quantity};<br />
                    Measure: {dataobj.measure};<br />
                    Food Match: {dataobj.foodMatch};<br />
                    Food: {dataobj.food};<br />
                </p>
            );
        } else {
            return <p>None</p>;
        }
    }
    const getObject = (parameter) => {
        if (parameter == "daily")
            var dataobj = data.totalDaily;
        else if (parameter == "nutrients") {
            var dataobj = data.totalNutrients;
        } else if (parameter == "nutrientsKcal") {
            var dataobj = data.totalNutrientsKCal;
        }
        return Object.keys(dataobj).map( (obj, i) => {
            return(
                <p>
                    {dataobj[obj].label}: {dataobj[obj].quantity}{dataobj[obj].unit}
                </p>
            );
        });
    }
    return(
        <div>
                <p>Text: {data.ingredients ? data.ingredients[0].text : "loading..."}</p> <br />
                Info: {data.ingredients ? getParsed() : "loading..."}
                <p>Calories: {data.calories}</p><br /><br />

                Health Labels: {data.healthLabels ? getHealthLabels() : "loading..."}<br /><br />
                Total Daily: {data.totalDaily ? getObject("daily") : "loading..."}<br /><br />
                Total Nutrients: {data.totalNutrients ? getObject("nutrients") : "loading..."}<br /><br />
                Total Nutrients Kcal: {data.totalNutrientsKCal ? getObject("nutrientsKcal") : "loading..."}<br /><br />
        </div>
    );
}
export default Data;
