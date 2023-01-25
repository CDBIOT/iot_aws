import styles from "../../styles/Graphics.module.css"
import React from "react";
import {useEffect, useState} from 'react';

function RealTime(){

  const [tempes, setTemperaturas] = useState([])
  
async function DrawTable(){
        //Obtem dados do banco de dados

     fetch(`https://server-orpin-zeta.vercel.app/temps`,{
      method: 'GET',
      header: {         'Access-Control-Allow-Origin':'*',mode: 'cors',
        'Content-Type': 'application/json' },
     }).then(resp=>resp.json())
 	    .then((data)=>{
 	    setTemperaturas(data.temps)
     
      }).catch(err=> console.log(err))
     
    }
         
useEffect(() => {
  DrawTable();
  console.log(tempes)
}, [])

return (
    <>
    <h1>RealTime</h1>
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
          <td width="20%"className={styles.td}>{t.name}</td>
          <td width="20%"className={styles.td}>{t.local}</td>
          <td width="20%"className={styles.td}>{t.dia}</td>
          <td width="20%"className={styles.td}>{t.mes}</td>
          <td width="20%"className={styles.td}>{t.ano}</td></tr>
          )
          )) :(
              <h3>Não há itens na lista</h3>
          )}
          {/* {temps = temps.filter((valorAtual)=> {
            return valorAtual.dia.includes(10)
          })} */}
         {tempes.temps.filter(temp=>temp.dia.includes('10')).map(filteredTemps=>(
          <li>
            {filteredTemps}
          </li>
         ))} 
          </tbody>
    </>
    )
    
    }
    export default RealTime