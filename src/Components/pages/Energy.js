import React, { useState , useEffect } from "react";
import styles from "../../styles/Energy.module.css"
import Axios from "axios"
import { Chart } from "react-google-charts";


function Energy(dia,mes,ano){

//const [options, setOptions] =[ {title: 'Grafico de Temperaturas'}];
const [data, setData] = useState([])

useEffect(() => {
const Dados = async () => {
	    await Axios.get('https://server-orpin-zeta.vercel.app/temps')
	 	.then((res)=> {setData(res.data);
		});
		console.log(res.data)
		.catch(err=> console.log(err))
		//const dataArray2=[];
		// dataArray2.push(['Dia','Temp']);
		// for (var i in data)
		// {
		// 	dataArray2.push([data[i].dia, (data[i].temperatura)]);
		// }
}
Dados()
}, []);
	
// final do query 

return (
	<>
		<h1>Energy</h1>
			<div>
				<table className = {styles.table}>
					<tr><th className = {styles.thead} colSpan={3}>TEMPERATURA DA SALA </th></tr>
					<tr>
						<td id="m"> </td>
						<td>Local: </td><td colSpan={4}><h2 id='local'></h2></td>
						<td>Temp: </td><td colSpan={4}><h2 id='temperatura'></h2></td>
						<td>Data: </td> <td id='dia'></td> <td id='mes'></td> <td id='ano'> </td>
					</tr>
					<tr><th className = {styles.thead} colSpan={4}>Cadastrar Temperatura</th></tr>
					<tr><td> Local: </td>
					<td><input type="text" value="local" name="local" size="5"/> </td>
					<td>Temperatura: </td>
					<td><input type="text" value='0 ' name="temperatura" size="5"/> </td>
					<td>Dia: </td>
					<td><input type="text" value='0 ' name="dia" size="5"/></td>
					<td>Mes: </td>
					<td><input type="text" value='0' name="mes" size="5"/></td>
					<td>Ano: </td>
					<td><input type="text" value='0 ' name="ano" size="5"/></td>
					<td><button type="submit"> Cadastrar Temperatura</button></td></tr>
				</table>

				<table className = {styles.table}>
				<tr><th colspan = {4}>Temperatura dia</th></tr>
				<tr>
					
				<td><input type="text" id = 'dia' value= "0" name = "dia" size="5" /></td>
				<td>Mes: </td>
				<td><input type="text" id = 'mes' value= "0" name = "mes" size="5" /></td>
				<td>Ano: </td>
				<td><input type="text" id = 'ano' value= "0" name = "ano" size="5" /></td>
    			<td><button type="submit"> Listar dia</button></td></tr>
				<th colspan = {3}>
					<td>Local: </td>
					<td>Temperatura: </td>
					<td>Dia: </td>
				</th>
				<tr>
					<td id = {dia}></td> <td id = {mes}/> <td id= {ano}></td>
				</tr>
				
				</table>

<form action="/temps" method = "get">
</form>	

<form action="/temps" method = "delete">
	<table className = {styles.table}>
	<tr><th colSpan = {2}>Deletar</th></tr>
	<tr>
	<td><input type="text" id=" id" name = "id" size="32" /> </td>
	<td><button type="submit">Deletar</button></td>
	</tr>
	</table>
</form>

<section >
    <div className={styles.dados}>
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
	<div>
	<tbody className={styles.tbody}>

		{data.length >0 ? (
        data.map((t, i) => (
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
		</tbody>
	</div>

</section>


</div>

</>
)
}
export default Energy