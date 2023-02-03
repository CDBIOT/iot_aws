//import mqtt from "precompiled-mqtt";
import mqtt from "mqtt"
import styles from "../styles/Graphics.module.css"
import React, { useState , useEffect } from "react"
import {Connector} from "mqtt-react-hooks"

function Mqtt(){
  const topic = 'Sala';
  const path = '/mqtt';
  const payload = 'temp';
  const host = 'broker.mqtt-dashboard.com'
  const port = '1883'
  const clientId = 'mqttjs_'+ Math.random().toString(16).slice(3)
  const connectUrl = 'mqtt:'+ {host}+':'+{port}
  const options = {
    
       clientId,
       clean: true,
       connectTimeout: 4000,
       username: 'emqx',
       password: 'public',
       reconnectPeriod: 1000,
    }

  //const[client, setClient] = useState(null)
  const[connectionStatus, setConnectionStatus] =useState(false)
  const[messages, setMessages]=useState([])
  const[temp,setTemp]= useState([])


async function mqtt_show() {
    const options = {method: 'GET',	mode: 'cors',cache: 'default'}
    fetch('https://test-no-vercel.vercel.app/mqtt',options)
  .then(response=>response.json())
  .then((data)=>{
  setTemp(data.temp)
  console.log(data.temp)
  }).catch(err=> console.log(err))
  }

useEffect(() =>{
  
// const client = (mqtt.connect(connectUrl,options))
//    try{
//  client.on('connect', () => {
//    setConnectionStatus(true)
//    console.log('Connected')
//    setConnectionStatus(true)
//  })}catch (error){console.log('mqtt.connect error',error)}

// client.subscribe('Sala', () => {
//   console.log("Subscribe to topic:", +topic)

// client.on('message', (topic, payload) => {
// setMessages(payload.toString())
//      //temp = payload
//      //local= topic
//    console.log('Received Message:', + payload.toString())
//    // res.status(200).json({m})
//   })
// }) 
mqtt_show()

},[]);
console.log("Connections: " +connectionStatus)
console.log("Messages: " +messages)

// setInterval(() => {
// client.on('message', (topic, payload) => {
//   temp = payload.toString()
//   console.log('Received Message:', topic, temp)
//   client.end()
//  // res.status(200).json({m})
// })
  
// }, 1000);

// const topic2 = 'Quarto'
// client.on('connect', () => {
//   console.log('Connected')
//   client.subscribe([topic2], () => {
//     console.log(`Subscribe to topic '${topic2}'`)

// client.on('message', (topic2, payload) => {
//       temp = payload
//       local= topic2
     // console.log('Received Message:', topic, payload.toString())
      //res.status(200).json({m})
//     })
//   })
// })

 // client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: true }, (error) => {
//  if (error) {
    //  console.error(error)
//    }
 // })
 return(
  <div>
    <Connector brokerUrl='broker.mqtt-dashboard.com:1883'/>
    <label >Status: {connectionStatus}</label>
				<table className = {styles.table}> 
					<tr><th className = {styles.thead} colSpan={2}>TEMPERATURA DA SALA </th></tr>
					<tr>
						<td>Local: </td><td colSpan={4}><h2>{topic}</h2></td>
						<td>Temp: </td><td colSpan={4}><h2>{payload}</h2></td>
					</tr>
        </table> 
        {temp.length >0 ? (
        temp.map((t, i) => (
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
  </div>
  
 )
}
export default Mqtt