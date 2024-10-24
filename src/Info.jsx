import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./Info.css"

export default function Info({result}){
 
    let imageUrl="https://plus.unsplash.com/premium_photo-1667239532950-db28085dacd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let rainyUrl="https://images.unsplash.com/photo-1718917910629-55b5f8f7bd08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let hotUrl="https://images.unsplash.com/photo-1675695759802-d1b3c7be91da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let snowUrl="https://images.unsplash.com/photo-1484603738253-e5b73679e8cb?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    return(
        <div className="Info" >
            <div className="img" >
            <h1 className='head' >Weather Info - {result.city}  </h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={(result.humidity>80) ? rainyUrl : (result.temp>25) ? hotUrl :snowUrl }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.city} &nbsp; {(result.humidity>80) ? <ThunderstormIcon/> : (result.temp>25) ? <WbSunnyIcon/> :<AcUnitIcon /> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
          <p>Temperature= {result.temp}&deg;C</p>
          <p>Humidity = {result.humidity}</p>
          <p>Min Temp = {result.temp_min}&deg;C</p>
          <p>Max Temp ={result.temp_max}&deg;C </p>
          <p>The weather can be described as <b><i>{result.weather}</i></b> and feels like {result.feels_like}&deg;C </p>
        </Typography>
      </CardContent>
   
    </Card>
            </div>
        </div>
    );
}