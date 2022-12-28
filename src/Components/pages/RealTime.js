
function RealTime(){


    function draw_table(){
        //Obtem dados do banco de dados
            const options = {method: 'GET',	mode: 'cors',cache: 'default'}
            //fetch('https://polar-beyond-82520.herokuapp.com/temps')
            fetch('https://iot-seven.vercel.app/server//temps')
            .then(function (response){
                return response.text()})
            .then(data=>{
            const myObj = JSON.parse(data)
    
          let table = document.getElementById('mytable');
        
          for (var k in myObj.temps)
      {
        //	  for (const [key, value] of Object.entries (myObj.temps[k])) 
          {
    
                var tr = table.insertRow();
                var td_local = tr.insertCell();
                var td_temperatura = tr.insertCell();
                var td_dia = tr.insertCell();
                var td_mes = tr.insertCell();
                var td_ano = tr.insertCell();
    
                td_local.innerHTML = myObj.temps[k].local
                td_temperatura.innerHTML = myObj.temps[k].temperatura
                td_dia.innerHTML = myObj.temps[k].dia
                td_mes.innerHTML = myObj.temps[k].mes
                td_ano.innerHTML = myObj.temps[k].ano
                
            //  console.log(`${key}: ${value}`);
          
       // `<tr> <td> ${myObj.temps[k].local}</td> <td>${myObj.temps[k].temperatura}</td> <td>${myObj.temps[k].dia}</td> <td>${myObj.temps[k].mes}</td> <td>${myObj.temps[k].ano}</td> <tr>`
    
            //console.log(i + " - " + myObj.temps[i].temperatura)
            //table.innerHTML += row;  
        }
      }
      
    })
    
    }
    return (
    <>
    <h1>RealTime</h1>
    </>
    
    )
    
    }
    export default RealTime