import styles from "../../styles/Graphics.module.css"
import React from "react";
import axios from "axios";
import Grafico from "../Grafico";
import {useEffect, useState} from 'react';

function Graphics(){
    
    const [temps, setTemperaturas] = useState('')

    const getTemps = async()=> {
    try {
        const res = await axios.get("'https://server-orpin-zeta.vercel.app/temps'");
        setTemperaturas(res.data.temps);
        console.log(res.data)
        console.log(res)
        console.log(res.data.temps)

    }catch(error){
        console.log(error)
    }
    }

useEffect(() => {
    getTemps();
    }, [setTemperaturas]);

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
        temps.map((temps, index) => (
        <tr key = {index}>
        <td width="20%"className={styles.td}>{temps.temperatura}</td>
        <td width="20%"className={styles.td}>{temps.local}</td>
        <td width="20%"className={styles.td}>{temps.dia}</td>
        <td width="20%"className={styles.td}>{temps.mes}</td>
        <td width="20%"className={styles.td}>{temps.ano}</td></tr>
        )
        )) :(
            <h3>Não há itens na lista</h3>
        )}
       
        </tbody>
       
   
    </>
)
    
}
export default Graphics