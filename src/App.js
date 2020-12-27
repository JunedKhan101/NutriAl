import React, {useEffect, useState} from "react";
import Data from "./Data";
import './App.css';

function App() {
    const [datastate, setData] = useState({});
    useEffect(() => {}, [datastate]);

    useEffect(() => { getData(); }, []);

    var data;
    const getData = async () => {
        const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&ingr=1%20pie%20pizza`);
        const data = await response.json();
        setData(data);
        console.log(data);
        console.log(datastate);
    }
    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" />&nbsp;
                <button className="search-button" type="submit">Search</button>
            </form>
            <Data data={datastate} />
        </div>
    );
}
export default App;
