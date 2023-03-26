import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Error from "./Error";
import "../css/graph.css";
import "../css/Datastyle.css";

export default function Graph() {
  const location = useLocation();
  const data = location.state.datastate;
  var basicDataObject = {
    "Calories": data.calories,
    "Energy(kcal)": data.totalNutrients.ENERC_KCAL.quantity,
    "Total Fat(g)": data.totalNutrients.FAT.quantity,
    "Saturated Fat(g)": data.totalNutrients.FASAT.quantity,
    "Cholestrol(mg)": data.totalNutrients.CHOLE.quantity,    
    "total carbohydrate(g)": data.totalNutrients.CHOCDF.quantity,
    "Dietry Fieber(g)": data.totalNutrients.FIBTG.quantity,
    "Sugars(g)": data.totalNutrients.SUGAR.quantity,
    "Protein(g)": data.totalNutrients.PROCNT.quantity
  };
  var fatDataObject = {
    "Total Fat(g)": data.totalNutrients.FAT.quantity,
    "Saturated(g)": data.totalNutrients.FASAT.quantity,
    "Monosaturated(g)": data.totalNutrients.FAMS.quantity,
    "Polyunsaturated(g)": data.totalNutrients.FAPU.quantity
  };
  var otherDataObject = {
    "Sodium(mg)": data.totalNutrients.NA.quantity,
    "Calcium(mg)": data.totalNutrients.CA.quantity,
    "Magnesium(mg)": data.totalNutrients.MG.quantity,
    "Potassium(mg)": data.totalNutrients.K.quantity,
    "Iron(mg)": data.totalNutrients.FE.quantity,
    "Zinc(mg)": data.totalNutrients.ZN.quantity,
    "Phosphorus(mg)": data.totalNutrients.P.quantity,
    "Vitamin A(µg)": data.totalNutrients.VITA_RAE.quantity,
    "Vitamin C(mg)": data.totalNutrients.VITC.quantity,
    "Vitamin B6(mg)": data.totalNutrients.VITB6A.quantity,
    "Vitamin B12(µg)": data.totalNutrients.VITB12.quantity,
    "Vitamin D(µg)": data.totalNutrients.VITD.quantity,
    "Vitamin E(mg)": data.totalNutrients.TOCPHA.quantity,
    "Vitamin K(µg)": data.totalNutrients.VITK1.quantity,
    "Folic acid(µg)": data.totalNutrients.FOLAC.quantity
  };
  // To filter the null values from the data/object
  let filteredBasicDataObject = Object.keys(basicDataObject).filter((k) => basicDataObject[k] !== 0).reduce((a, k) => ({ ...a, [k]: basicDataObject[k] }), {});
  let filteredFatDataObject = Object.keys(fatDataObject).filter((k) => fatDataObject[k] !== 0).reduce((a, k) => ({ ...a, [k]: fatDataObject[k] }), {});
  let filteredOtherDataObject = Object.keys(otherDataObject).filter((k) => otherDataObject[k] !== 0).reduce((a, k) => ({ ...a, [k]: otherDataObject[k] }), {});
  try {
    var basicdata = {
      labels: Object.keys(filteredBasicDataObject),
      datasets: [
        {
          label: data.text,
          data: Object.values(filteredBasicDataObject),
          backgroundColor: [
            "rgba(255, 215, 0, 0.4)",
            "rgba(60, 179, 113, 0.4)",
            "rgba(255, 0, 0, 0.4)",
            "rgba(25, 25, 112, 0.4)",
            "rgba(127, 255, 0, 0.4)",
            "rgba(233, 150, 122, 0.4)",
            "rgba(0, 0, 255, 0.4)",
            "rgba(255, 20, 147, 0.4)",
            "rgba(135, 206, 250, 0.4)"
          ],
          borderColor: [
            "rgba(255, 215, 0, 1)",
            "rgba(60, 179, 113)",
            "rgba(255, 0, 0, 1)",
            "rgba(25, 25, 112, 1)",
            "rgba(127, 255, 0, 1)",
            "rgba(233, 150, 122, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(255, 20, 147, 1)",
            "rgba(135, 206, 250, 1)"
          ],
          borderWidth: 1,
        },
      ],
    };
    var fatdata = {
      labels: Object.keys(filteredFatDataObject),
      datasets: [
        {
          label: `Fats in ${data.text}`,
          data: Object.values(filteredFatDataObject),
          backgroundColor: [
            "rgba(255, 0, 0, 0.4)",
            "rgba(0, 255, 0, 0.4)",
            "rgba(0, 0, 255, 0.4)",
            "rgba(135, 206, 250, 0.4)",
          ],
          borderColor: [
            "rgba(255, 0, 0, 1)",
            "rgba(0, 255, 0, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(135, 206, 250, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    var otherdata = {
      labels: Object.keys(filteredOtherDataObject),
      datasets: [
        {
          label: `Nutrients in ${data.text}`,
          data: Object.values(filteredOtherDataObject),
          backgroundColor: [
            "rgba(47, 79, 79, 0.4)",
            "rgba(107, 142, 35, 0.4)",
            "rgba(160, 82, 45, 0.4)",
            "rgba(75, 0, 130, 0.4)",
            "rgba(255, 0, 0, 0.4)",
            "rgba(0, 206, 209, 0.4)",
            "rgba(255, 165, 0, 0.4)",
            "rgba(255, 255, 0, 0.4)",
            "rgba(0, 255, 0, 0.4)",
            "rgba(0, 250, 154, 0.4)",
            "rgba(0, 0, 255, 0.4)",
            "rgba(255, 0, 255, 0.4)",
            "rgba(221, 160, 221, 0.4)",
            "rgba(255, 239, 213, 0.4)",
            "rgba(35, 171, 234, 0.4)"

          ],
          borderColor: [
            "rgba(47, 79, 79, 1)",
            "rgba(107, 142, 35, 1)",
            "rgba(160, 82, 45, 1)",
            "rgba(75, 0, 130, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(0, 206, 209, 1)",
            "rgba(255, 165, 0, 1)",
            "rgba(255, 255, 0, 1)",
            "rgba(0, 255, 0, 1)",
            "rgba(0, 250, 154, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(255, 0, 255, 1)",
            "rgba(221, 160, 221, 1)",
            "rgba(255, 239, 213, 1)",
            "rgba(35, 171, 234, 1)"
          ],
        },
      ],
    };
    var options = {
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "black"
            },
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 6,
              fontColor: "black"
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0.1)",
              zeroLineColor: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
      },
      plugins: {
        zoom: {
          // Container for pan options
          pan: {
            // Boolean to enable panning
            enabled: true,
            // Panning directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow panning in the y direction
            mode: 'xy'
          },
          // Container for zoom options
          zoom: {
            // Boolean to enable zooming
            enabled: true,
            // Zooming directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow zooming in the y direction
            mode: 'xy',
          }
        }
      }
    };
    return (
      <div className="chart">
        <div className="basic-graph">
          <h2>Basic Information</h2>
          <Bar data={basicdata} options={options} />
        </div>
        <div className="fat-graph">
          <h2>Fats</h2>
          <Bar data={fatdata} options={options} />
        </div>
        <div className="other-graph">
          <h2>Other Nutrients</h2>
          <Bar data={otherdata} options={options} />
        </div>
      </div>
    );
  }
  catch (e) {
    return (
      <Error />
    );
  }
}
