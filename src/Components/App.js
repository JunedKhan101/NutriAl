import React, {useEffect, useState} from "react";
import Data from "./Data";
import data from "../ExampleObject";
import "../css/index.css";

function App() {
    const [datastate, setData] = useState({});
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("1 ounce walnuts");
    let [button, setButton] = useState(false);
    useEffect(() => { getData(); }, [query]);

    const getData = async () => {
        const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&ingr=${query}`);
        const data = await response.json();
        setData(data);
        // console.log(data);  to see the data in the console
    }
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }
    const toggleButtonState = () => setButton(button = !button);

    const renderButton = () => {
        if (!button)
            return <button className="btn btn-primary viewbutton" onClick={toggleButtonState}>Detail View</button>
        else
            return <button className="btn btn-primary viewbutton" onClick={toggleButtonState}>Simple View</button>
    }
    return (
        <div className="App">
            <form className="form-group" onSubmit={getSearch}>
                <input className="form-control search-textinput" type="text" value={search} onChange={updateSearch} />&nbsp;
                <input className="btn btn-primary search-button" type="submit" value="search" />
            </form>
            {renderButton()}
            <Data data={datastate} viewstate={button} />
            <div className="space"></div>
        </div>
    );
}
export default App;
