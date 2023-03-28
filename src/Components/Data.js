import React, { useContext } from "react";
import DataContext from "../Context/DataContext";
import NutritionFacts from "./NutritionFacts";
import DetailsCard from "./DetailsCard";
import Loading from "./Loading";
import Error from "./Error";
import "../css/Datastyle.css";
import "../css/nutrition-style.css";

function Data({viewstate, isSuccessState, isLoadingState}) {
    const [context] = useContext(DataContext);
    var data = context;

    const renderCard = () => {
        if (isLoadingState !== true) {
            if (isSuccessState === false)
                return (<Error />);
            if (viewstate) {
                return (
                    // Can be possible to just use the context in the below component may consider later
                    <DetailsCard data={data} />
                );
            }
            else {
                return (
                    // Can be possible to just use the context in the below component may consider later
                    <NutritionFacts data={data} />
                );
            }
        }
        else {
            return <Loading />
        }
    }
    return(
        <div className="main-container">
            {renderCard()}
        </div>
    );
}
export default Data;
