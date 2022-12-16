import React from 'react'
import '../App.css';

export default function About() {
  return (
    <>
    
    <h2 className="fw-bolder">Meistä</h2>
    <div>Living Tech on perustettu 2022 ja tällä hetkellä yrityksen palveluksessa on 10 työntekijää. Living Tech on tietokonekomponentti kauppa.
    <br></br> Valikoimastamme löytyy kaikki tarvitsemasi PC-komponentit oman kokoonpanosi päivittämiseen sekä uuden suunnitteluun ja toteutukseen. 
    <br></br>PC-komponenttien tarpeesi voisi olla tietokoneen peruskäyttö, pelaaminen tai työkäyttö.</div>
    <br></br>
    <div>Kaikki toimintamme hoidetaan Helsingin tai Oulun toimipisteestämme, joissa löytyy myös huoltopiste. 
    <br></br>Verkkokauppamme on auki 24/7.
    </div>
          
    <div>
      <br></br>
      <h4 className="fw-bolder">Asioi myymälässä</h4>
        <h5 className="fw-bolder">Helsingin myymälä</h5>
    
              Helsinginkatu 11<br/>
              00200 Helsinki<br/> 
              ma-la 9-21<br/>
              su 12-19<br/>
    <br></br>
         <h5 className="fw-bolder">Oulun myymälä</h5>

              Oulunkatu 5<br/>
              08570 Oulu<br/> 
              ma-la 9-21<br/> 
              su 12-19<br/> 
    </div>
    <div>
    <br></br>
    <h4 className="fw-bolder">Ota yhteyttä</h4>

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