import styles from "../../styles/Graphics.module.css"
import React from "react";
import axios from "axios";
import Grafico from "../Grafico";
import {useEffect, useState} from 'react';

function Graphics(){
    
    const [temps, setTemperaturas] = useState([])
    const [dia,setFilDia] = useState(temps)

  const filterDia = dia => {
    setFilDia(temps.filter(temp=>{
        return temp.dia === dia
    })
    )
}
// const dia = Array.from(
//     new Set(temps.map(temp=>temps.dia))
// )

async function getData(){
    
// const loadData = (data) =>{
//     const values = _.groupBy(data, () => {
//         return values.temps
//     })}

     fetch(`https://server-orpin-zeta.vercel.app/temps`,{
      method: 'GET',
      header: { 'Access-Control-Allow-Origin':'*',mode: 'cors',
        'Content-Type': 'application/json' },
     }).then(resp=>resp.json())
 	.then((data)=>{
 	setTemperaturas(data.temps)
     console.log(data.temps)
     }).catch(err=> console.log(err))
  //const values = _.groupBy(temps, () => { return values.temps });
    }
// async function getData(){
//    await axios.get('https://server-orpin-zeta.vercel.app/temps')
//         .then(response => setTemperaturas(response.data))
//         .catch(err=> console.log(err))
//         console.log(data)
//         }

useEffect(() => {
      getData();
    
    }, [])
    
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
        <td width="20%"className={styles.td}>{t.name}</td>
        <td width="20%"className={styles.td}>{t.local}</td>
        <td width="20%"className={styles.td}>{t.dia}</td>
        <td width="20%"className={styles.td}>{t.mes}</td>
        <td width="20%"className={styles.td}>{t.ano}</td></tr>
        )
        ).filter(temp=>temp.includes(10))) :(
            <h3>Não há itens na lista</h3>
        )}
        {dia}
       
        </tbody>
       
   
    </>
)
    
}
export default Graphics