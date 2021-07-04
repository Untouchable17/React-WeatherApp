import React from 'react';


const Weather = props => (
    <div>
        { props.city &&
            <div className="infoWeath">
                <p>Локация: {props.city} | {props.country}</p>
                <p>Температруа: {props.temp}</p>
                <p>Давление: {props.pressure}</p>
                <p>Закат солнца: {props.sunset}</p>
            </div>
        }
        <p className="error">{ props.error }</p>
    </div>
);


export default Weather;