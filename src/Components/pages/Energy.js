import React, { useState , useEffect } from "react";
import styles from "../../styles/Energy.module.css"
import Axios from "axios"
import { Chart } from "react-google-charts";


function Energy(dia,mes,ano){

//const [options, setOptions] =[ {title: 'Grafico de Temperaturas'}];
const [data, setData] = useState('')

    useEffect(() => {
        //Axios.get("http://localhost:3001/equiplist")
       //Axios.get('https://polar-beyond-82520.herokuapp.com/temps')
	   Axios.get('https://iot-seven.vercel.app/temps')
        .then((response) =>{
        setData(response.data);
		const dataArray2=[];
  
		dataArray2.push(['Dia','Temp']);
	
		for (var i in data)
		{
			dataArray2.push([data[i].dia, (data[i].temperatura)]);
		}
        });
    }, [])
	
function Dia(result)
{
	const options = {
	  method: 'GET',
	  mode: 'cors',
	  cache: 'default'
					 }
	//const response =fetch('https://polar-beyond-82520.herokuapp.com/temps')
	//const response =fetch("http://localhost:3001/equiplist")
	const response =fetch('https://iot-seven.vercel.app/temps')
	.then(function (response){
	  return response.text()})
	  .then(data=>{
	  const myObj = JSON.parse(data);
	  var dataArray = Array.from(myObj.temps);
	  console.log("dataArray: ", dataArray)
	  
	 
	}
	 
	)
}
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
					<div className = {styles.thead}> 
					<thead>
					<th> Id </th><th> Local </th><th> Temperaturas </th><th> Dia </th><th> Mes </th><th> Ano </th>
                	</thead>
					</div>
                    	<tbody id = "mytable">

                    	</tbody>
                    	<tfoot> </tfoot>
	        	</table>
		</div>
</section>
<div>
	
</div>

</div>

</>
)
}
export default Energy