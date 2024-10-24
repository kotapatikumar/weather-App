import Search from "./Search"
import Info from "./Info"
import { useState } from "react";


export default function Weather (){

    let [weather,setWeather]=useState({
        city:"Delhi",
        temp:25.05,
        temp_min:24.05,
        temp_max:26.04,
        humidity:47,
        feels_like:24.84,
        weather:"haze"
    })

    async function data (dataValues){
       await setWeather(dataValues);
    }

    return(
        <div style={{textAlign:"center"}} >
            <Search  data={data} />
            <Info  result={weather} />
        </div>
    );
}