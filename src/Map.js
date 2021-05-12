import {useState,useEffect} from "react";
import axios from "axios";
import { MapContainer, TileLayer,Circle,Popup,Tooltip } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import numeral from "numeral";
import "./Map.css"

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

  return (<MapContainer className='map' center={[55.74101998457737, 37.62268066406251]} zoom={3} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
  />
  {data.map(country=>(
    <Circle key={country.code} center={{lat:country.countryInfo.lat,lng:country.countryInfo.long}} color={'#C41E3A'} fillOpacity={0.4} radius={Math.sqrt(country.cases)*200}>
      <Tooltip><div style={{width:'150px'}}><div className='flag-info' style={{backgroundImage:`url(${country.countryInfo.flag})`}} />
    <div><strong>{country.country}</strong></div>
    <div>Cases:{numeral(country.cases).format("0,0")}</div>
    <div>Recovered:{numeral(country.recovered).format("0,0")}</div>
    <div>Deaths:{numeral(country.deaths).format("0,0")}</div></div></Tooltip>
  </Circle>
  ))}
</MapContainer>)
}