
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import {Amplify, API,Auth}  from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import Home from './Components/pages/Home';
import Schedule from './Components/pages/Schedule';
import Users from './Components/pages/Users';
import Graphics from './Components/pages/Graphics';
import RealTime from './Components/pages/RealTime'
import Energy from './Components/pages/Energy';
import MqttReact from './Components/pages/MqttReact';


function App() {

  async function callApi(){ 
  const user = await Auth.currentAuthenticatedUser()
  const token = user.signInUserSession.idToken.jwtToken
  console.log({token})
  
  const requestInfo = {
    headers: {
      Authorization: token
    }

    }

  const data =  await API.get("serverAwsIot","/dev/",requestInfo)
  console.log({data})

  }

return (
  <div className = "App" > 
 <Router>
    <Navbar />
    <button onClick={callApi}> Call API </button>
  
         <Routes>
            <Route exact path="/"   element={<Home />}></Route>
            <Route path="/Energy"   element={<Energy />}></Route>
            <Route path='/Graphics' element={<Graphics />}></Route>
            <Route path="/Schedule" element={<Schedule />}></Route>
            <Route path="/Users"    element={<Users />} ></Route>
            <Route path='/RealTime' element={<RealTime />}></Route>
            {/* <Route path='/MqttReact' element={<MqttReact />}></Route> */}
         </Routes>
    </Router>
  </div>
    );
  }

export default withAuthenticator(App);

