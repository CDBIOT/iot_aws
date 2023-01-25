import { useState } from "react"
import styles from "../../styles/Schedule.module.css"

function Schedule(){
    
async function mqtt_show() {
	const options = {method: 'GET',	mode: 'cors',cache: 'default'}
    const response =fetch(('https://server-orpin-zeta.vercel.app/mqtt'),options)
	.then(function (response){
	return response.text()})
	.then(data=>{
	console.log(data)
	const myObj = JSON.parse(data)
	
})
}

function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('txt').innerText= h+":"+m+":"+s;
       const t=setTimeout('startTime()',500);
    }
    
function checkTime(i){
	if (i<10) {
		i="0" + i;
	}	
    return i;
}


const [initDate, setInitDate] = useState()
const [finalDate, setFinalDate] = useState()
const [Hora, setHora] = useState()
const [Minuto, setMinuto] = useState()
const horas= [0,1,2,3,4,5,6,7,8,9,10,11,12]


    return (
    <>
    <h1>Schedule</h1>
    <label> Set Time Light </label>

	<label> Temperatura Atual </label>
    
<div className = {styles.temp_show}>
    <form action="/mqtt" method = "get">
    <table>
	    <tr><th colspan = {6}><h1>TEMPERATURA DO QUARTO </h1></th></tr>
	    <tr><td><span id = "temp"> </span></td><td><span>  ºC</span></td></tr>

        <tr><th colspan = {6}> <h1>TEMPERATURA DA SALA</h1></th></tr>
        <tr>
            <td><span id = "local" /> </td>
            <td><span id = "temp"/> </td>
	        <td><span id = "dia"/> </td>
            <td><span id = "mes"/> </td>
            <td><span id = "ano"/> </td>
        </tr>
    </table>
    </form>
</div>
    
<section>
   
<div>
<form action="Relogio" method="post">
    
<label for="initDate" className="form-label">Data Inicial</label>
    <input id="initDate" value={initDate}  type="date" onChange={(e)=>setInitDate(e.target.value)}  name="initDate" />
    
    <label for="finalDate" className="form-label">Data final</label>
    <input id="finalDate" value={finalDate}  type="date" onChange={(e)=>setFinalDate(e.target.value)}  name="finalDate" />
    <td>
    <label>Data início</label><label value = {initDate}  size="6" /><label for="finalDate" className="form-label">{initDate}</label></td>
    <td>
    <label>Data Final</label><label  value = {finalDate}  size="6" /> <label for="finalDate" className="form-label">{finalDate} </label>
     </td> 

<table>
<tr><th colspan = {6}><h1>RELOGIO IOT</h1></th></tr>

<tr><td><h1 colspan = {6}>Disparo </h1></td>

     <td>
    <select onChange={e =>setHora(e.target.value)}>
            <option value="" disabled default selected>
            Select day  </option>
   
        {horas.map(hora=>{
            return<option key={hora}> {hora}</option>
        })}
        </select>
    <input type="text" 	name = "horad"id= "hd" value = {Hora}  size="6" />
	<input type="text"  name = "mind" id= "md" value = "10"  size="6" /> 
	<input type="text" 	name = "secd" id= "sd" value = "10"  size="6" />
     </td> 
</tr>
    <tr><td><h1 colspan = {6}>Tempo ligado </h1></td>
	    <td><h1 id = "disp"> </h1></td>
    </tr>
	<tr>
	    <td><input type="text" id="tempod" value="" maxlength="10" /></td> 
	    <td><h2 id="tempo"></h2></td>
    </tr>
    <tr>
    <td rowspan ={2}><h1>Estado</h1></td><td><span id="rele">N/D</span></td>
    </tr>

    <tr><td>
	    <input type="button" id="btnOn"   value="Ligar"    onClick="setRelay(1)"/>
	    <input type="button" id="btnOff"  value="Desligar" onClick="setRelay(0)"/>
	    <input type="button" id="btndisp" value="Setar"    onClick="setdisp()"/>
    </td></tr>
    </table>
        </form>
    </div>
</section>

    </>
    
    )
    
    }
    export default Schedule