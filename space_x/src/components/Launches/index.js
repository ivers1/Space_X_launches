import React, { useState,useEffect } from 'react';

const LaunchList = (props) => {
    const [ data, setData ] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.spacexdata.com/v3/launches');
            const data = await response.json();
            setData(data.splice(0,10));
        })();
    },[]);
    return(
        <div>
            <ul>
                {data.map((item) => {
                    return <li key= {item.id}>{item.body}</li>
                })}
            </ul>
        </div>
    )
}

export default LaunchList;