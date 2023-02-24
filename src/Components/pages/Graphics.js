import styles from "../../styles/Graphics.module.css"
import React from "react";
import axios from "axios";
import {useEffect, useState} from 'react';
import _ from 'lodash'; 
import moment from "moment/moment";
import Grafico from "../Grafico";

function Graphics(){
    
    const [temps, setTemperaturas] = useState([])
    const [initDate, setInitDate] = useState()
    const [finalDate, setFinalDate] = useState()
    const [dias,setFiltroDia] = useState([])
    const [filtrado,setFiltrado] = useState([])

    const startDate = moment(initDate).format("DD");
   // const startDay = moment(startDate).date();
    const endDate = moment(finalDate).format("DD");
   // const endDay = moment(endDate).date();

async function getData(){
    
     fetch(`https://server-orpin-zeta.vercel.app/temps`,{
      method: 'GET',
      header: { 'Access-Control-Allow-Origin':'*',mode: 'cors',
        'Content-Type': 'application/json' },
     }).then(resp=>resp.json())
 	.then((data)=>{ setTemperaturas(data.temps)
     console.log(data.temps)
     }).catch(err=> console.log(err))
    }

useEffect(() => {
    getData();
    }, [])
    

async function filtrodeData(){

    setFiltrado(dias.filter(dia => dia.dia.inclues(dias)))
    console.log("dias: ", dias)

    //  filtrodias = temps.filter(
    //     (item)=> {
    //     return item>=parseInt(startDate)
    // })
    console.log(
        "filtrado:", filtrado,
        "startdate: ", startDate, 
        "endDate: ", endDate )
}

useEffect
(() => {
    filtrodeData();
    }, [dias])



return (
    <>
    <h1>Graphics</h1>
<table>
<th colspan = {4}> <h1> Selecione o período </h1></th>
<tr>
    <td>
        <h2 for="initDate" className="label">Data início:  {startDate}</h2>
        <input id="initDate" value={""}  type="date" onChange={(e)=>setInitDate(e.target.value)}  name="initDate" /></td>
        <td> </td>
    <td>
        <h2 for="endDate" className="label">Data Final:  {endDate} </h2>
        <input id="finalDate" value={""}  type="date" onChange={(e)=>setFinalDate(e.target.value)}  name="finalDate" /></td>
        <td></td> 
</tr>
</table>

    <select onChange={filtrodeData}>
        <option value= "" > Select day  </option>
        {e=>setFiltroDia(e.target.value)}
    </select>
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