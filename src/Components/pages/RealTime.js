import styles from "../../styles/Graphics.module.css"
import React from "react";
import {useEffect, useState} from 'react';
import {mqttReact} from "../mqttReact"
function RealTime(){

  const [tempes, setTemperaturas] = useState([])
  const [query,setQuery] = useState("")

  const dias =tempes.map((t, i) =>{return tempes.indexOf(t.dia)===i})
  // const dias = new Set( );
  //  tempes.forEach((day) => {
  //   dias.add(day)
  //  })
  const temp =tempes.filter(temper=>(temper.dia < query))

  console.log("dias: ", [...dias.values()])
  console.log(query)
  console.log(temp)
 

  const lista = (
    // <ul>{temp = tempes.filter((valorAtual)=> {
    //   return valorAtual.dia.includes(10)
    // })}</ul>
    <ul>{temp.map((t,i) => (<li key={t}> {t.dia}</li> ))}</ul>
     )
  
  

async function DrawTable(){
        //Obtem dados do banco de dados

     fetch(`https://server-orpin-zeta.vercel.app/temps`,{
      method: 'GET',
      header: {         'Access-Control-Allow-Origin':'*',mode: 'cors',
        'Content-Type': 'application/json' },
     }).then(resp=>resp.json())
 	    .then((data)=>{
 	    setTemperaturas(data.temps)
      // console.log(data.tempes)
      }).catch(err=> console.log(err))
    }
         
useEffect(() => {
  DrawTable();
}, [])

return (
    <>
    <h1>RealTime</h1>
    <li>{lista}</li>
    <mqttReact/>

    <input type="date"></input>
    <label for="Date" className="form-label">Data final</label>
    <input id="Date" value="{Date}" className="form-control" type="date" name="Date" />

     <input type ="text" onChange={(e)=>setQuery(e.target.value)}>
    </input>
    
    <select onChange={e =>setQuery(e.target.value)}>
            <option value="" disabled default selected>
            Select day  </option>
   
        {dias.map(dia=>{
            return<option key={dia}> {dia}</option>
        })}
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
          {tempes.length >0 ? (
          tempes.map((t, i) => (
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
    export default RealTime