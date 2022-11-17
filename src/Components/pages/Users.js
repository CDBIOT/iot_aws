
import Axios from "axios";
import {useEffect, useState} from 'react';

function Users(){

    const [people, setPeople] = useState()

    useEffect(() => {
        Axios.get('https://polar-beyond-82520.herokuapp.com/users')
        .then((response) =>{
        setPeople(response.data);
        });
        {
        console.log(people)
        }
    }, [])
    return (
    <>
    <h1>Users</h1>
     
    { people.map((user,index)=>( 
    <div>
    <h1>("Novo usuario" {user.nome}  ")</h1>
    <table >
        <tbody>
 	        <tr>
            <h2 id = "user"></h2>	
            <td>${user.id}</td>
            <td>${user.nome}</td>
            </tr>
        </tbody>
    </table>
    </div>
     ))
    }
    </>
    
    )
}
    
export default Users
    
    
    