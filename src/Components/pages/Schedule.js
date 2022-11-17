import { useState } from "react"
import styles from "../../styles/Schedule.module.css"

function Schedule(){
    
async function mqtt_show() {
	const options = {method: 'GET',	mode: 'cors',cache: 'default'}
	const response =fetch('https://polar-beyond-82520.herokuapp.com/mqtt')
	.then(function (response){
	return response.text()})
	.then(data=>{
	console.log(data)
	const myObj = JSON.parse(data)
	var local 	= document.getElementById('local').innerText = myObj.vm.local;
	var temp 	= document.getElementById('temp').innerText = parseInt(myObj.vm.temp);
	let dia	 	= document.getElementById('dia').innerText  = parseInt(myObj.vm.dia);
	let mes 	= document.getElementById('mes').innerText  = parseInt(myObj.vm.mes);
	let ano 	= document.getElementById('ano').innerText  = parseInt(myObj.vm.ano);

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

    return (
    <>
    <h1>Schedule</h1>
    <label> Set Time Light </label>
	<label> Temperatura Atual </label>
    <input type="date"></input>
    <label for="finalDate" className="form-label">Data final</label>
    <input id="finalDate" value="{{finalDate}}" className="form-control" type="date" name="finalDate" />
    
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

<table>
<tr><th colspan = {6}><h1>RELOGIO IOT</h1></th></tr>
<tr><td><h1>Hora </h1></td> <td><h1 id = "txt"> </h1></td></tr>

<tr><td><h1 colspan = {6}>Disparo </h1></td>
<td><input type="text" 	name = "horad"id= "hd" value = "10"  size="6" />
	<input type="text"  name = "mind" id= "md" value = "10"  size="6" /> 
	<input type="text" 	name = "secd" id= "sd" value = "10"  size="6" /> </td> 
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