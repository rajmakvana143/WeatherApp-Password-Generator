import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {

  const IMG_URL = "https://images.unsplash.com/photo-1590574508715-ed8fa0346f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
          <p>temprature : {info.temp}&deg;C</p>
          <p>Humadity : {info.humidity}</p>
          <p>Min-Temp : {info.tempMin}</p>
          <p>Max-Temp : {info.tempMax}</p>
          <p>Weather can be describe as a {info.weather} and feels like {info.temp}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
