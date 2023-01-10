import styles from "../../styles/Graphics.module.css"
import React from "react";
import axios from "axios";
import Grafico from "../Grafico";
import {useEffect, useState} from 'react';

function Graphics(){
    
    const [temps, setTemperaturas] = useState('')
    const options = {method: 'GET',	mode: 'no-cors',
     header: {'Access-Control-Allow-Origin':'*',
      },cache: 'default'}

const response = fetch(('https://server-orpin-zeta.vercel.app/temps',options))
	.then(response=>response.json())
	.then(data=>{
	setTemperaturas(res.data)
    console.log(data)
    })

const getTemps = async()=> {
    try {
        const res = await axios.get("'https://server-orpin-zeta.vercel.app/temps'");
        setTemperaturas(res.data);
       // const temps = JSON.parse(data)
        console.log(temps)
        console.log(temps.temps)
        console.log(temps.ano)

    }catch(error){
        console.log(error)
    }
    }

useEffect(() => {
    //getTemps();
    response();
    }, []);

return (
    <>
    <h1>Graphics</h1>
  
    <div>  
        <table className={styles.table}>
   
        <tr><th className={styles.th} colSpan={4}>
        <td width="20%"className={styles.th}>Temp</td>
        <td width="20%" className={styles.th}>Local</td>
        <td width="20%" className={styles.th}>Dia</td>
        <td width="20%" className={styles.th}>Mes</td>
        <td width="20%" className={styles.th}>Ano</td>
        </th></tr>
    </table>
    </div>
        <tbody className={styles.tbody}>
    
        {temps.length >0 ? (
        temps.map((t, i) => (
        <tr key = {i}>
        <td width="20%"className={styles.td}>{t.temperatura}</td>
        <td width="20%"className={styles.td}>{t.local}</td>
        <td width="20%"className={styles.td}>{t.dia}</td>
        <td width="20%"className={styles.td}>{t.mes}</td>
        <td width="20%"className={styles.td}>{t.ano}</td></tr>
        )
        )) :(
            <h3>Não há itens na lista</h3>
        )}
       
        </tbody>
       
   
    </>
)
    
}
export default Graphics