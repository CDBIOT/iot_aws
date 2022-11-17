import { Chart } from "react-google-charts"
import Axios from "axios";
import React from "react";
import {useEffect, useState} from 'react';
import _ from 'lodash'; 

function Grafico(){

    const [temps, setTemperaturas] = useState()


const [options, setOptions] =[ {title: 'Grafico de Temperaturas'}];
const [data, setData] = useState('')
const loadData = (data) =>{
    const values = _.groupBy(data, () => {
        return values.temps
    })
}

useEffect(() => {
    //Axios.get("http://localhost:8081/temps")
    Axios.get('https://polar-beyond-82520.herokuapp.com/temps')
    .then((response) =>{
    setTemperaturas(response.data.temps);
    const values = _.groupBy(temps, () => { return values.temps });
    {   
   
    console.log(temps.ano)
    console.log(values)
    }
});
}, []);
}
return(
<>

<section className={styles.chart}>
      
      <form class="search" action="/grafico" method="post">
              <div class="row">            
                  <div class="col-md-4">
                      <label for="startDate" class="form-label">Data Inicial</label>
                      <input id="startDate" value="{{startDate}}" class="form-control" type="date" name="startDate" />
                  </div>
                  <div class="col-md-4">
                      <label for="finalDate" class="form-label">Data final</label>
                      <input id="finalDate" value="{{finalDate}}" class="form-control" type="date" name="finalDate" />
                      </div>
                  <div class="col-md-4">
                      <button class="bnt-exit" type="submit">Pesquisar</button>
                      
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

export default Grafico