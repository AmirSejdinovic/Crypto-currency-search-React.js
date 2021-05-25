
import './App.css';
import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {
  const [crypto,setCryoto] = useState('');
  const [img,setImage] =useState('');
  const [name,setName] =useState('');
  const [simbo, setSimbo] =useState('');
  const [link,setLink] =useState('');
  const [usd,setUsd] =useState('');
  const [desc, setDesc] = useState('');
  //Creating function for handle submit
  const handleSumbit=()=>{
    //Storing api url and concatinate the inpute value which will return the response
    const url ="https://api.coingecko.com/api/v3/coins/" + crypto;
    //Using the axios to fetch the data from api url
    axios.get(url).then(res=>{
      const resData=res.data;
      //Updating data with api data
      setImage(resData.image.large);
      setName(resData.name);
      setSimbo(resData.symbol);
      setLink(resData.links.homepage[0]);
      setUsd("Price in USD: "+resData.market_data.current_price.usd + " $");
      setDesc(JSON.stringify(resData.description.en))
    })
    .catch(err=>{
      console.log(err);
    })
  }

  function createMarkup(){
    return {__html:desc}
  }
  return (
    <div style={{backgroundColor:"crimson",minHeight:"100vh"}} className="App">

      <h1 className="bg-info p-4">Cryptocurrency Search</h1>
      <div className="d-flex justify-content-center">
          <div className="col-md-4 mt-5">
           <input type="text" className="form-control" value={crypto}  onChange={(e)=>setCryoto(e.target.value)} placeholder="Enter the crpytocurrency" required/>

          </div>
          
      </div>
      <button onClick={handleSumbit} className="btn btn-secondary px-5 mt-5">Submit</button>

     <div className="mt-5 container-fluid d-flex justify-content-center">
       <div className="col-md-4 bg-success p-2 rounded">
         <img src={img} width="150" />
         <br/>
         <h1 className="tex-white">{name}</h1>
         <h2>{simbo}</h2>
         <h2><a className="text-white" href={link}>{link}</a></h2>
         <br/>
         
         <h2>{usd} </h2>
       </div>

       <div className="text-white col-md-8 my-auto">
         <div dangerouslySetInnerHTML={createMarkup()}></div>
       </div>
     </div>
    </div>
  );
}

export default App;
