import mqtt from "mqtt/dist/mqtt"
import styles from "../styles/Graphics.module.css"
import React, { useState , useEffect } from "react"

function Mqtt(){
  const topic = 'Sala';
  const payload = 'temp';

  const host = 'broker.mqtt-dashboard.com'
  const port = '1883'
  const clientId = 'mqtt_'+ Math.random().toString(16).slice(3)
  //const connectUrl = 'mqtt:'+ {host}:{port}
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
  const[messages, setMessages]=([])

useEffect(() =>{
  
const client = (mqtt.connect(host,options))
  

client.on('connect', () => {
  setConnectionStatus(true)
  console.log('Connected')
  setConnectionStatus(true)
client.subscribe('Sala', () => {
   // console.log(`Subscribe to topic '${topic}'`)

client.on('message', (topic, payload) => {
  setMessages(payload.toString())
       //temp = payload
       //local= topic
     // console.log('Received Message:', topic, payload.toString())
      //res.status(200).json({m})
    })
  })
})

},[]);

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
				<table className = {styles.table}>
					<tr><th className = {styles.thead} colSpan={2}>TEMPERATURA DA SALA </th></tr>
					<tr>
						<td>Local: </td><td colSpan={4}><h2>{topic}</h2></td>
						<td>Temp: </td><td colSpan={4}><h2>{payload}</h2></td>
					</tr>
        </table>
  </div>

 )
}
export default Mqtt