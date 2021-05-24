
import './App.css';
import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [crypto,setCryoto] = useState('');
  return (
    <div style={{backgroundColor:"crimson",minHeight:"100vh"}} className="App">

      <h1 className="bg-info p-4">Cryptocurrency Search</h1>
      <div className="d-flex justify-content-center">
          <div className="col-md-4 mt-5">
           <input type="text" className="form-control" value={crypto}  onChange={(e)=>setCryoto(e.target.value)} placeholder="Enter the crpytocurrency" required/>

          </div>
          
      </div>
      <button className="btn btn-secondary px-5 mt-5">Submit</button>
    </div>
  );
}

export default App;
