import styles from "../styles/Graphics.module.css"
import { Chart } from "react-google-charts"
import Axios from "axios";
import React from "react";
import {useEffect, useState} from 'react';
import _ from 'lodash'; 

function Grafico(){

const [temps, setTemperaturas] = useState()
const [options, setOptions] =[ {title: 'Grafico de Temperaturas'}];
const [data, setData] = useState('')

useEffect(() => {
    Axios.get({
	  	url: 'https://server-orpin-zeta.vercel.app/temps'
		})
    .then((response) =>{
    setTemperaturas(response.data.temps);
    {   
   // console.log()
    }
});
}, []);


return(
<>

<section className={styles.chart}>
      
      <form className="search" action="/grafico" method="post">
              <div className="row">            
                  <div className="col-md-4">
                      <label for="startDate" className={styles.label}>Data Inicial</label>
                      <input id="startDate" value="{{startDate}}" className="form-control" type="date" name="startDate" />
                  </div>
                  <div className="col-md-4">
                      <label for="finalDate" className={styles.label}>Data final</label>
                      <input id="finalDate" value="{{finalDate}}" className="form-control" type="date" name="finalDate" />
                      </div>
                  <div className="col-md-4">
                      <button className="bnt-exit" type="submit">Pesquisar</button>
                      
                  </div>
              </div>
          </form>
          
      </section>

<Chart 
	    chartType="AreaChart"
	    width = "400"
	    height= "300"
	    data = {data}
	    options= {options}
	 />
</>

)
}
export default Grafico