import React, {useEffect, useState} from "react";
import Data from "./Data";
//import data from "../ExampleObject";

function App() {
    const [datastate, setData] = useState({});
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("1 ounce walnuts");
    let [button, setButton] = useState(false);
    // useEffect(() => {}, [datastate]);
    useEffect(() => { getData(); }, [query]);

    const getData = async () => {
        const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&ingr=${query}`);
        const data = await response.json();
        setData(data);
        // console.log(data);
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
            return <button className="btn btn-primary sidebutton" style={sidebutton_style} onClick={toggleButtonState}>Detail View</button>
        else
            return <button className="btn btn-primary sidebutton" style={sidebutton_style} onClick={toggleButtonState}>Simple View</button>
    }
    let search_style = {
        display: 'inline-block',
        maxWidth: '20%',
        position: 'relative',
        left: '38%',
        top: '50px',
    }
    let button_style = {
        position: 'relative',
        left: '40%',
        top: '47px',
        bottom: '3px',
    }
    let space_style = {
        position: 'absolute',
        left: '50%',
        top: '500%',
        bottom: '0px',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '300px',
        visibility: 'hidden',
    }
    let sidebutton_style = {
        position: 'relative',
        left: '90%',
        bottom: '3px',
    }
    return (
        <div className="App">
            <form className="form-group" onSubmit={getSearch}>
                <input className="form-control" type="text" style={search_style} value={search} onChange={updateSearch} />&nbsp;
                <input className="btn btn-primary" type="submit" value="search" style={button_style} />
            </form>
            {renderButton()}
            <Data data={datastate} viewstate={button} />
            <div className="space" style={space_style}></div>
        </div>
    );
}
export default App;
