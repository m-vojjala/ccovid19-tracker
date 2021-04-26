import axios from "axios";
import {useEffect, useState} from "react";

export default function Data(){
const [data1,setData] = useState([]);
  useEffect(()=>{
    axios({
      method: 'GET',
      url: 'https://corona-api.com/countries',
  })
  .then(({
      data
  }) => {
    console.log(data.data[0])
      
  })
})
return (<div><h1>covid19-tracker</h1></div>)
}