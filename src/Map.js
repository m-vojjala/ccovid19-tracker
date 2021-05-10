import {useState,useEffect} from "react";
import axios from "axios";
import { MapContainer, TileLayer,Circle } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

export default function Map(){
  // const url = "https://corona-api.com/countries"
  // const {data, error} = useSwr(url,{fetcher});

  const [data,setData] = useState([]);
  useEffect(()=>{
    axios({
      method: 'GET',
      url: 'https://disease.sh/v3/covid-19/countries',
  })
  .then(({
      data
  }) => {
    console.log(data)
  setData(data)
      
  })
  .catch(err=>console.log(err))
},[])
 console.log(data)
  return (<MapContainer style={{height:'50vh',width:'50vw',marginTop:'20px',marginLeft:'30px'}} center={[34.80746, -40.4796]} zoom={2} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
  />
  {data.map(country=>(
    <Circle key={country.code} center={{lat:country.countryInfo.lat,lng:country.countryInfo.long}} color={'#C41E3A'} fillOpacity={0.4} radius={Math.sqrt(country.cases)*200}/>
  ))}
 
</MapContainer>)
}