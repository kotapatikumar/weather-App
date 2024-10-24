import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import "./Search.css";
import { useState } from 'react';

export default function Search({data}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

     let API_URL = import.meta.env.VITE_API_URL;
    let API_KEY = import.meta.env.VITE_API_KEY;

    async function apiData(){
        try{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let response=await res.json();
        console.log(response);

        let final={
            city:city,
            temp:response.main.temp,
            temp_min:response.main.temp_min,
            temp_max:response.main.temp_max,
            humidity:response.main.humidity,
            feels_like:response.main.feels_like,
            weather:response.weather[0].description
        }
        console.log(final);
        return final;
     }catch(error){
        console.error('Fetch error:', error);
        setError(true);
     }
    }





    function cityName(event){
        setCity(event.target.value);
    }
    async function submit (event){
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let dataValues= await apiData();
            data(dataValues);
        }catch(err){
            setError(true);
        }
    
     
    }

    return (
        <div className="search" >
            <h2>Search for the weather</h2>
            {/* {error && <p style={{color:"red"}}><b>No such city exists</b></p>} */}
            {error && <Alert  variant="filled" severity="error" style={{textAlign:"center"}}>No such place exists</Alert>}
            <br></br>
            <form onSubmit={submit} >
                <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={cityName}  value={city} />
                <br></br> 
                <br></br>
                <Button variant="contained"type="submit" >SEARCH</Button>
            </form>
        </div>
    );
}