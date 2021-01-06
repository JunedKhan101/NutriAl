import React from "react";
import "../css/Datastyle.css";
import "../css/nutrition-style.css";

function Data({data, viewstate}) {
    const getHealthLabels = () => {
        if (data.healthLabels.length == 0) {
            return <p classNameName="card-text">"None"</p>;
        } else {
            let str = "";
            data.healthLabels.map( (val) => str += (val + ", "));
            return <p classNameName="card-text">{str}</p>;
        }
    }
    const getCautions = () => {
        if (data.cautions.length == 0) {
            return <p classNameName="card-text">None</p>;
        }
        else {
            let str = "";
            data.cautions.map( (val) => str += (val + ", "))
            return <p classNameName="card-text">{str}</p>;
        }
    }
    const getParsed = () => {
        if (data.ingredients[0].parsed[0]) {
            var dataobj = data.ingredients[0].parsed[0];
            return (
                <div classNameName="card-text">
                    <text>Quantity</text>: {dataobj.quantity}<br />
                    <text>Measure</text>: {dataobj.measure}<br />
                    <text>Food Match</text>: {dataobj.foodMatch}<br />
                    <text>Food</text>: {dataobj.food}<br />
                </div>
            );
        } else {
            return <p classNameName="card-text">None</p>;
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
                <p classNameName="card-text">
                    <text>{dataobj[obj].label}</text>: {dataobj[obj].quantity}{dataobj[obj].unit}
                </p>
            );
        });
    }
    let container_style = {
        position: 'relative',
        left: '28%',
        top: '100px',
        width: '40%',
    }
    const Main = () => {
        try {
            if (viewstate) {
                return (
                    <div classNameName="card">
                      <div classNameName="card-header">
                        {data.ingredients ? data.ingredients[0].text : "loading..."}
                      </div>
                      <div classNameName="card-body">
                        <h3 classNameName="card-title">Information</h3>
                        {data.ingredients ? getParsed() : "loading..."}
                      </div>
                      <div classNameName="card-body">
                        <h3 classNameName="card-title">Calories: {data.calories}</h3>
                      </div>
                      <div classNameName="card-body">
                        <h3 classNameName="card-title">Total nutrients Kcal</h3>
                        {data.totalNutrientsKCal ? getObject("nutrientsKcal") : "loading..."}
                      </div>
                      <div classNameName="card-body">
                        <h3 classNameName="card-title">Health Labels</h3>
                        {data.healthLabels ? getHealthLabels() : "loading..."}
                      </div>
                      <div classNameName="card-body">
                        <h3 classNameName="card-title">Cautions</h3>
                        {data.cautions ? getCautions() : "loading..."}
                      </div>
                      <div classNameName="card-body">
                        <h3 classNameName="card-title">Total Nutrients</h3>
                        {data.totalNutrients ? getObject("nutrients") : "loading..."}
                      </div>
                      <div classNameName="card-body">
                        <h3 classNameName="card-title">Total Daily</h3>
                        {data.totalNutrients ? getObject("daily") : "loading..."}
                      </div>
                    </div>
                );
            }
            else {
                return (
                    <section className="performance-facts" style={container_style}>
                      <header className="performance-facts__header">
                        <h1 className="performance-facts__title">Nutrition Facts</h1>
                        <p>Serving Size 1/2 cup (about 82g)</p>
                          <p>Serving Per Container 8</p>
                      </header>
                      <table className="performance-facts__table">
                        <thead>
                          <tr>
                            <th colspan="3" className="small-info">
                              Amount Per Serving
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th colspan="2">
                              <b>Calories</b>
                              200
                            </th>
                            <td>
                              Calories from Fat
                              130
                            </td>
                          </tr>
                          <tr className="thick-row">
                            <td colspan="3" className="small-info">
                              <b>% Daily Value*</b>
                            </td>
                          </tr>
                          <tr>
                            <th colspan="2">
                              <b>Total Fat</b>
                              14g
                            </th>
                            <td>
                              <b>22%</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="blank-cell">
                            </td>
                            <th>
                              Saturated Fat
                              9g
                            </th>
                            <td>
                              <b>22%</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="blank-cell">
                            </td>
                            <th>
                              Trans Fat
                              0g
                            </th>
                            <td>
                            </td>
                          </tr>
                          <tr>
                            <th colspan="2">
                              <b>Cholesterol</b>
                              55mg
                            </th>
                            <td>
                              <b>18%</b>
                            </td>
                          </tr>
                          <tr>
                            <th colspan="2">
                              <b>Sodium</b>
                              40mg
                            </th>
                            <td>
                              <b>2%</b>
                            </td>
                          </tr>
                          <tr>
                            <th colspan="2">
                              <b>Total Carbohydrate</b>
                              17g
                            </th>
                            <td>
                              <b>6%</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="blank-cell">
                            </td>
                            <th>
                              Dietary Fiber
                              1g
                            </th>
                            <td>
                              <b>4%</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="blank-cell">
                            </td>
                            <th>
                              Sugars
                              14g
                            </th>
                            <td>
                            </td>
                          </tr>
                          <tr className="thick-end">
                            <th colspan="2">
                              <b>Protein</b>
                              3g
                            </th>
                            <td>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="performance-facts__table--grid">
                        <tbody>
                          <tr>
                            <td colspan="2">
                              Vitamin A
                              10%
                            </td>
                            <td>
                              Vitamin C
                              0%
                            </td>
                          </tr>
                          <tr className="thin-end">
                            <td colspan="2">
                              Calcium
                              10%
                            </td>
                            <td>
                              Iron
                              6%
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>

                      <table className="performance-facts__table--small small-info">
                        <thead>
                          <tr>
                            <td colspan="2"></td>
                            <th>Calories:</th>
                            <th>2,000</th>
                            <th>2,500</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th colspan="2">Total Fat</th>
                            <td>Less than</td>
                            <td>65g</td>
                            <td>80g</td>
                          </tr>
                          <tr>
                            <td className="blank-cell"></td>
                            <th>Saturated Fat</th>
                            <td>Less than</td>
                            <td>20g</td>
                            <td>25g</td>
                          </tr>
                          <tr>
                            <th colspan="2">Cholesterol</th>
                            <td>Less than</td>
                            <td>300mg</td>
                            <td>300 mg</td>
                          </tr>
                          <tr>
                            <th colspan="2">Sodium</th>
                            <td>Less than</td>
                            <td>2,400mg</td>
                            <td>2,400mg</td>
                          </tr>
                          <tr>
                            <th colspan="3">Total Carbohydrate</th>
                            <td>300g</td>
                            <td>375g</td>
                          </tr>
                          <tr>
                            <td className="blank-cell"></td>
                            <th colspan="2">Dietary Fiber</th>
                            <td>25g</td>
                            <td>30g</td>
                          </tr>
                        </tbody>
                      </table>

                      <p className="small-info">
                        Calories per gram:
                      </p>
                      <p className="small-info text-center">
                        Fat 9
                        &bull;
                        Carbohydrate 4
                        &bull;
                        Protein 4
                      </p>
                    </section>
                );
            }
        }
        catch (e) {
            return (
                <div classNameName="card">
                  <div classNameName="card-header">
                    An Error Occured
                  </div>
                  <div classNameName="card-body">
                    <h3 classNameName="card-title">Error</h3>
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
