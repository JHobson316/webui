import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
    const [serverResponse, setServerResponse] = useState('')
    const url = process.env.REACT_APP_SERVER_URL;//'https://hackathon00-api.onrender.com/';

    function callGet() {
        axios.get(url)
        .then((response) => {
            setServerResponse(response.data);
        });
    }

    function callPost() {
        //http://localhost:8080/?lang=c++
        let data = '?mem=nevara';
        axios.post(url + data)
        .then((response)=>{
            setServerResponse(response.data);
        });
    }

    function callPut() {
        let data = '?mem=laezel&index=0';
        axios.put(url + data)
        .then((response) => {
            setServerResponse(response.data);
        })
    }
    function callDelete() {
        let data = '?index=1';
        axios.delete(url + data)
        .then((response) => {
            setServerResponse(response.data);
        });
    }
  return (
    <div className="App">
      {serverResponse}
      <button onClick={callGet}>GET</button>
      <button onClick={callPost}>POST</button>
      <button onClick={callPut}>PUT</button>
      <button onClick={callDelete}>DELETE</button>
    </div>
  );
}

export default App;
