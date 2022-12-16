import React from 'react'
import '../App.css';

export default function About() {
  return (
    <>
    
    <h2 className="fw-bolder">Meistä</h2>
    <div>lorem ipsum</div>
          
    <div>
      <h3 className="fw-bolder">Asioi myymälässä</h3>
        <h5 className="fw-bolder">Helsingin myymälä</h5>
    
              Helsinginkatu 11<br/>
              00200 Helsinki<br/> 
              ma-la   9-21<br/>
              su  12-19<br/>

         <h5 className="fw-bolder">Oulun myymälä</h5>

              Oulunkatu 5<br/>
              08570 Oulu<br/> 
              ma-la 9-21<br/> 
              su 12-19<br/> 
    </div>

    <div>
    <h3 className="fw-bolder">Ota yhteyttä</h3>

    <h5 className="fw-bolder">Lähetä palautetta</h5>
    <form>
      <label>Nimi</label><br/>
      <input></input><br/>
      <label>Otsikko </label><br/>
      <input></input><br/>
      <label>Palaute </label><br/>
      <textarea rows="10" cols="50"></textarea><br/>
      <button className='btn btn-primary'>Lähetä</button>
    </form>
    </div>
    
    </>
  
  )
}