import React, {useEffect, useState} from "react";
import Data from "./Data";
import { useHistory } from "react-router-dom";
import "../css/index.css";
require('dotenv').config()

function Main() {
    const [datastate, setData] = useState({});
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("1 ounce walnuts");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    let [button, setButton] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            console.log("query: ", query);
            const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&ingr=${query}`);
            var data = await response.json();
            data.text = query;
            setData(data);
            // console.log(data);
            if (data && data.ingredients && typeof data.ingredients[0] !== 'undefined' && typeof data.ingredients[0].parsed !== 'undefined' && typeof data.ingredients[0].parsed[0] !== 'undefined') {
                console.log("parsed: ", true);
                setIsSuccess(true);
            }
            else {
                setIsSuccess(false);
            }
            setIsLoading(false);
        }
        getData();
    }, [query]);
    let history = useHistory();
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }
    const toggleButtonState = () => setButton(button = !button);
    const handleGraphButton = () => {
        history.push({pathname: '/graph', state: {datastate: datastate}})
    }
    const renderButton = () => {
        if (!button)
            return (
                <div className="btns">
                    <button className="btn btn-primary viewbutton" onClick={toggleButtonState}>Detail View</button>
                    <button className="btn btn-secondary graph-btn" onClick={handleGraphButton}>Show Graph</button>
                </div>
            );
        else
            return (
                <div className="btns">
                    <button className="btn btn-primary viewbutton" onClick={toggleButtonState}>Simple View</button>
                    <button className="btn btn-secondary graph-btn" onClick={handleGraphButton}>Show Graph</button>
                </div>
            );
    }
    const renderMain = () => {
        return (
            <div className="main">
                <form className="form-group" onSubmit={getSearch}>
                    <input className="form-control search-textinput" type="text" value={search} onChange={updateSearch} />&nbsp;
                    <input className="btn btn-primary search-button" type="submit" value="search" />
                </form>
                {renderButton()}
                
                <Data data={datastate} viewstate={button} isSuccessState={isSuccess} isLoadingState={isLoading}/>
            </div>
        );
    };
    return (
        renderMain()
    );
}
export default Main;
