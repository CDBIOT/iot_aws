import styles from "../../styles/Graphics.module.css"
import React from "react";
import Axios from "axios";
import Grafico from "../Grafico";
import {useEffect, useState} from 'react';

function Graphics(){
    
    const [temps, setTemperaturas] = useState('')

useEffect(() => {
        //Axios.get("http://localhost:8081/temps")
        //Axios.get('https://polar-beyond-82520.herokuapp.com/temps')
        Axios.get({
            method:'get',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: 'https://server-k2hwpi9qd-cdbiot.vercel.app/temps'
            })
        .then((response) =>{
        setTemperaturas(response.data.temps);
       
        {   
        console.log(temps)
        }
    });
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
            <p1>Não há itens na lista</p1>
        )}
       
        </tbody>
       
    </div>
    </>
)
    
}
export default Graphics