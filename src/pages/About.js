import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
    
    <h3 className="fw-bolder">Meistä</h3>
    <div>Living Tech on perustettu 2022 ja tällä hetkellä yrityksen palveluksessa on 10 työntekijää. Living Tech on tietokonekomponentti kauppa.
    <br></br> Valikoimastamme löytyy kaikki tarvitsemasi PC-komponentit oman kokoonpanosi päivittämiseen sekä uuden suunnitteluun ja toteutukseen. 
    <br></br>PC-komponenttien tarpeesi voisi olla tietokoneen peruskäyttö, pelaaminen tai työkäyttö.</div>
    <br></br>
    <div>Kaikki toimintamme hoidetaan Helsingin tai Oulun toimipisteestämme, joissa löytyy myös huoltopiste. 
    <br></br>Verkkokauppamme on auki 24/7.
    </div>
          
    <div>
        <br/>
        <br/>
      <h4 className="fw-bolder">Asioi myymälässä</h4>
      
      <div>Toimipisteemme ovat auki viikon jokaisena päivänä. Myymälöissämme sinua palvelee ammattitaitoinen henkilökuntamme.</div>
      
        <br/>
          <h5 className="fw-bolder">Helsingin myymälä</h5>
    
              Helsinginkatu 11<br/>
              00200 Helsinki<br/> 
              ma-la 9-21<br/>
              su 12-19<br/>
        <br/>
          <h5 className="fw-bolder">Oulun myymälä</h5>

              Oulunkatu 5<br/>
              08570 Oulu<br/> 
              ma-la 9-21<br/> 
              su 12-19<br/> 
      </div>
    <div>
    
    <br/>
 
    <h4 className="fw-bolder">Ota yhteyttä</h4>
      <div>Voit ottaa meihin yhteyttä soittamalla asiakaspalvelun puhelinnumeroon 0800 78594 tai laittamalla sähköpostia osoitteeseen asiakaspalvelu@livingtech.fi. 
      <br></br>Palautetta voit lähettää myös alta löytyvän lomakkeen kautta. Käsittelemme yhteydenotot saapumisjärjestyksessä.
      </div>
      <br/>
    <h5 className="fw-bolder">Lähetä palautetta</h5>
      <form>
        <label>Sähköposti</label><br/>
        <input class="form-control"></input><br/>
        <label>Otsikko </label><br/>
        <input class="form-control"></input><br/>
        <label>Palaute </label><br/>
        <textarea rows="10" cols="50" class="form-control"></textarea><br/>
        <Link to="/thankfeedback"><button className='btn btn-primary'>Lähetä</button></Link>    
      </form>
    </div>
    
    </>
  
  )
}