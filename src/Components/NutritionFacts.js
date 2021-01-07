import React from "react";

export default function NutritionFacts({data}) {
    let container_style = {
        position: 'relative',
        left: '28%',
        top: '100px',
        width: '40%',
    }
    return (
        <section className="performance-facts" style={container_style}>
          <header className="performance-facts__header">
            <h1 className="performance-facts__title">Nutrition Facts</h1>
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
                  <b>Calories:</b>
                  &nbsp;{data.calories}
                </th>
                <td>
                    Calories from Fat:&nbsp;
                    {data.totalNutrientsKCal ? (data.totalNutrientsKCal.FAT_KCAL.quantity + data.totalNutrientsKCal.FAT_KCAL.unit) : "loading"}
                </td>
              </tr>
              <tr className="thick-row">
                <td colspan="3" className="small-info">
                  <b>% Daily Value*</b>
                </td>
              </tr>
              <tr>
                <th colspan="2">
                  <b>Total Fat:</b>
                  &nbsp;{data.totalNutrients ? (data.totalNutrients.FAT ? data.totalNutrients.FAT.quantity + data.totalNutrients.FAT.unit : "None") : "loading"}
                </th>
                <td>
                  <b>{data.totalDaily ? (data.totalDaily.FAT ? data.totalDaily.FAT.quantity.toPrecision(3) + data.totalDaily.FAT.unit : "None") : "loading"}</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell">
                </td>
                <th>
                  Saturated Fat:
                  &nbsp;{data.totalNutrients ? (data.totalNutrients.FASAT ? data.totalNutrients.FASAT.quantity.toPrecision(3) + data.totalNutrients.FASAT.unit : "None") : "loading"}
                </th>
                <td>
                  <b>{data.totalDaily ? (data.totalDaily.FASAT ? data.totalDaily.FASAT.quantity.toPrecision(3) + data.totalDaily.FASAT.unit : "None") : "loading"}</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell">
                </td>
                <th>
                  Trans Fat:
                  &nbsp;-
                </th>
                <td>
                </td>
              </tr>
              <tr>
                <th colspan="2">
                  <b>Cholesterol:</b>
                  &nbsp;{data.totalNutrients ? (data.totalNutrients.CHOLE ? data.totalNutrients.CHOLE.quantity.toPrecision(3) + data.totalNutrients.CHOLE.unit : "None") : "loading"}
                </th>
                <td>
                  <b>{data.totalDaily ? (data.totalDaily.CHOLE ? data.totalDaily.CHOLE.quantity.toPrecision(3) + data.totalDaily.CHOLE.unit : "None") : "loading"}</b>
                </td>
              </tr>
              <tr>
                <th colspan="2">
                  <b>Sodium:</b>
                  &nbsp;{data.totalNutrients ? (data.totalNutrients.NA ? data.totalNutrients.NA.quantity.toPrecision(5) + data.totalNutrients.NA.unit : "None") : "loading"}
                </th>
                <td>
                  <b>{data.totalDaily ? (data.totalDaily.NA ? data.totalDaily.NA.quantity.toPrecision(3) + data.totalDaily.NA.unit : "None") : "loading"}</b>
                </td>
              </tr>
              <tr>
                <th colspan="2">
                  <b>Total Carbohydrate:</b>
                  &nbsp;{data.totalNutrients ? (data.totalNutrients.CHOCDF ? data.totalNutrients.CHOCDF.quantity.toPrecision(4) + data.totalNutrients.CHOCDF.unit : "None") : "loading"}
                </th>
                <td>
                  <b>{data.totalNutrients ? (data.totalDaily.CHOCDF ? data.totalDaily.CHOCDF.quantity.toPrecision(3) + data.totalDaily.CHOCDF.unit : "None") : "loading"}</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell">
                </td>
                <th>
                  Dietary Fiber:
                  &nbsp;{data.totalNutrients ? (data.totalNutrients.FIBTG ? data.totalNutrients.FIBTG.quantity.toPrecision(3) + data.totalNutrients.FIBTG.unit : "None") : "loading"}
                </th>
                <td>
                  <b>{data.totalNutrients ? (data.totalDaily.FIBTG ? data.totalDaily.FIBTG.quantity.toPrecision(3) + data.totalDaily.FIBTG.unit : "None") : "loading"}</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell">
                </td>
                <th>
                  Sugars:
                  &nbsp;{data.totalNutrients ? (data.totalNutrients.SUGAR ? data.totalNutrients.SUGAR.quantity.toPrecision(4) + data.totalNutrients.SUGAR.unit : "None") : "loading"}
                </th>
                <td>
                </td>
              </tr>
              <tr className="thick-end">
                <th colspan="2">
                  <b>Protein:</b>
                  &nbsp;{data.totalNutrients ? (data.totalNutrients.PROCNT ? data.totalNutrients.PROCNT.quantity.toPrecision(3) + data.totalNutrients.PROCNT.unit : "None") : "loading"}
                </th>
                <td>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="performance-facts__table--grid">
            <tbody>
              <tr>
                <td>
                  Vitamin D:&nbsp;
                  {data.totalNutrients ? (data.totalNutrients.VITD ? data.totalNutrients.VITD.quantity.toPrecision(3) + data.totalNutrients.VITD.unit : "None") : "loading"}
                </td>
              </tr>
              <tr className="thin-end">
                <td>
                  Calcium:&nbsp;
                  {data.totalNutrients ? (data.totalNutrients.CA ? data.totalNutrients.CA.quantity.toPrecision(3) + data.totalNutrients.CA.unit : "None") : "loading"}
                </td>
              </tr>
              <tr>
                <td>
                  Iron:&nbsp;
                  {data.totalNutrients ? (data.totalNutrients.FE ? data.totalNutrients.FE.quantity.toPrecision(3) + data.totalNutrients.FE.unit : "None") : "loading"}
                </td>
              </tr>
              <tr>
                <td>
                  Potassium:&nbsp;
                  {data.totalNutrients ? (data.totalNutrients.K ? data.totalNutrients.K.quantity.toPrecision(3) + data.totalNutrients.K.unit : "None") : "loading"}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
    );
}
