import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Error from "./Error";
import "../css/graph.css";
import "../css/Datastyle.css";

export default function Graph() {
  const location = useLocation();
  const data = location.state.datastate;
  try {
    var basicdata = {
      labels: ["Calories", "Energy(kcal)", "Total Fat(g)", "Saturated Fat(g)", "Cholestrol(mg)",
        "total carbohydrate(g)", "Dietry Fieber(g)", "Sugars(g)", "Protein(g)"],
      datasets: [
        {
          label: data.text,
          axis: 'y',
          data: [data.calories, data.totalNutrients.ENERC_KCAL.quantity,
          data.totalNutrients.FAT.quantity, data.totalNutrients.FASAT.quantity,
          data.totalNutrients.CHOLE.quantity, data.totalNutrients.CHOCDF.quantity,
          data.totalNutrients.FIBTG.quantity, data.totalNutrients.SUGAR.quantity,
          data.totalNutrients.PROCNT.quantity],
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
      labels: ["Total Fat(g)", "Saturated(g)", "Monosaturated(g)", "Polyunsaturated(g)"],
      datasets: [
        {
          label: `Fats in ${data.text}`,
          data: [
            data.totalNutrients.FAT.quantity, data.totalNutrients.FASAT.quantity,
            data.totalNutrients.FAMS.quantity, data.totalNutrients.FAPU.quantity,
          ],
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
      labels: ["Sodium(mg)", "Calcium(mg)", "Magnesium(mg)", "Potassium(mg)", "Iron(mg)",
        "Zinc(mg)", "Phosphorus(mg)", "Vitamin A(µg)", "Vitamin C(mg)", "Vitamin B6(mg)",
        "Vitamin B12(µg)", "Vitamin D(µg)", "Vitamin E(mg)", "Vitamin K(µg)", "Folic acid(µg)"],
      datasets: [
        {
          label: `Nutrients in ${data.text}`,
          data: [
            data.totalNutrients.NA.quantity, data.totalNutrients.CA.quantity,
            data.totalNutrients.MG.quantity, data.totalNutrients.K.quantity,
            data.totalNutrients.FE.quantity, data.totalNutrients.ZN.quantity,
            data.totalNutrients.P.quantity, data.totalNutrients.VITA_RAE.quantity,
            data.totalNutrients.VITC.quantity, data.totalNutrients.VITB6A.quantity,
            data.totalNutrients.VITB12.quantity, data.totalNutrients.VITD.quantity,
            data.totalNutrients.TOCPHA.quantity, data.totalNutrients.VITK1.quantity,
            data.totalNutrients.FOLAC.quantity],
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
              beginAtZero: true
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 6
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
