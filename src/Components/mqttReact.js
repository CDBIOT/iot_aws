import mqtt from ('mqtt')
import React, { useState , useEffect } from "react";

function Mqtt(){

  const host = 'broker.mqtt-dashboard.com'
  const port = '1883'
  const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

  const[client, setClient] = useState(null)

const mqttConnect = (host, mqttOption) => {

  const connectUrl = `mqtt://${host}:${port}`

  setClient (mqtt.connect(connectUrl, 
    {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
  }))

}

useEffect(() =>{
  const topic = 'Sala'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)

client.on('message', (topic, payload) => {
      temp = payload
      local= topic
     // console.log('Received Message:', topic, payload.toString())
      //res.status(200).json({m})
    })
  })
})


})


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
						<td>Local: </td><td colSpan={4}><h2>{local}</h2></td>
						<td>Temp: </td><td colSpan={4}><h2>{temp}</h2></td>
					</tr>
        </table>
  </div>

 )
}
export default Mqtt